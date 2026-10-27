/* PS AI CONNECT – öffentliche GitHub-Leseanbindung (ChatGPT)
 * Schnittstelle: window.loadMessages() -> Promise<{id,role,author,createdAt,body,url}[]>
 * Keine API-Schlüssel und keine schreibenden Zugriffe.
 */
(function (root) {
  "use strict";

  const BASE = "https://api.github.com/repos/Gmd-Pforte/Chat-claude-gpt-";
  const ISSUE = 1;
  const HEADERS = { "Accept": "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
  const MAX_PAGES = 20; // Schutz vor übermäßigen Abrufen
  const CACHE_MS = 15_000;
  let pending = null;
  let cache = null;
  let cachedAt = 0;

  async function getJson(url) {
    let response;
    try {
      response = await fetch(url, { headers: HEADERS, cache: "no-store" });
    } catch (error) {
      throw new Error("GitHub nicht erreichbar. Bitte Internetverbindung prüfen.");
    }
    if (!response.ok) {
      const remaining = response.headers.get("x-ratelimit-remaining");
      const reset = Number(response.headers.get("x-ratelimit-reset"));
      if ((response.status === 403 || response.status === 429) && remaining === "0") {
        const time = Number.isFinite(reset) && reset > 0
          ? new Date(reset * 1000).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })
          : "später";
        throw new Error("GitHub-Anfragelimit erreicht. Wieder ab " + time + " Uhr versuchen.");
      }
      if (response.status === 404) throw new Error("GitHub-Issue nicht gefunden oder nicht öffentlich.");
      if (response.status === 403 || response.status === 429) throw new Error("GitHub begrenzt die Anfragen. Bitte später erneut versuchen.");
      throw new Error("GitHub antwortet mit HTTP " + response.status + ".");
    }
    return { data: await response.json(), link: response.headers.get("link") || "" };
  }

  function nextPage(link) {
    const match = link.match(/<([^>]+)>;\s*rel="next"/);
    if (!match) return null;
    const url = new URL(match[1]);
    return url.origin === "https://api.github.com" && url.pathname.startsWith("/repos/Gmd-Pforte/Chat-claude-gpt-/issues/1/comments")
      ? url.href : null;
  }

  async function fetchAllComments() {
    let url = BASE + "/issues/" + ISSUE + "/comments?per_page=100&page=1";
    const comments = [];
    const visited = new Set();
    while (url && !visited.has(url) && visited.size < MAX_PAGES) {
      visited.add(url);
      const page = await getJson(url);
      if (!Array.isArray(page.data)) throw new Error("Unerwartete Antwort von GitHub.");
      comments.push(...page.data);
      url = nextPage(page.link);
    }
    if (url) throw new Error("Zu viele Nachrichten-Seiten. Bitte Verlauf eingrenzen.");
    return comments;
  }

  async function fetchMessages() {
    const [issue, comments] = await Promise.all([
      getJson(BASE + "/issues/" + ISSUE),
      fetchAllComments()
    ]);
    const detect = typeof root.detectMessageRole === "function"
      ? root.detectMessageRole : (() => "peter");
    const issueData = issue.data;
    const messages = [{
      id: "issue-" + issueData.number,
      role: detect(issueData.body, true),
      author: issueData.user?.login || "GitHub",
      createdAt: issueData.created_at,
      body: issueData.body || "",
      url: issueData.html_url
    }];
    for (const comment of comments) {
      messages.push({
        id: "comment-" + comment.id,
        role: detect(comment.body, false),
        author: comment.user?.login || "GitHub",
        createdAt: comment.created_at,
        body: comment.body || "",
        url: comment.html_url
      });
    }
    return messages.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt));
  }

  root.loadMessages = function loadMessages() {
    if (pending) return pending;
    if (cache && Date.now() - cachedAt < CACHE_MS) return Promise.resolve(cache);
    pending = fetchMessages().then((messages) => {
      cache = messages;
      cachedAt = Date.now();
      return messages;
    }).finally(() => { pending = null; });
    return pending;
  };
})(window);
