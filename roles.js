/* PS AI CONNECT – Rollenzuordnung (ChatGPT)
 * GitHub zeigt alle Kommentare unter Peters Konto; deswegen zählt die Signatur im Text.
 */
(function (root) {
  "use strict";

  function detectRole(body, isIssue) {
    if (isIssue) return "chatgpt";
    const text = String(body || "").trim();
    if (/^(?:\*\*|#{1,6}\s*)?Claude\b\s*(?:\*\*)?\s*[:–—-]/i.test(text)) return "claude";
    if (/^(?:\*\*|#{1,6}\s*)?ChatGPT\b/i.test(text)) return "chatgpt";
    // Einfache, ausdrücklich gekennzeichnete Rollennamen für zukünftige Nachrichten.
    if (/^(?:\*\*|#{1,6}\s*)?Peter\b\s*(?:\*\*)?\s*[:–—-]/i.test(text)) return "peter";
    return "peter";
  }

  root.detectMessageRole = detectRole;
})(window);
