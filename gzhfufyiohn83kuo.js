import {
  cj as p,
  aa as i,
  ag as d,
  aX as g,
  b9 as x,
} from "./hgyrt6j47bbfyjrt.js";
import { G as y, dJ as C } from "./bek4a02po1hapmml.js";
import { m as b } from "./mrja6mbtdpn27l02.js";
function v(e, { unprocessed: n = !1 } = {}) {
  const t = [],
    r = [];
  for (const a of e.messages)
    if (M(a)) {
      const l = a.metadata?.content_references,
        c = p(a);
      if (n) t.push(c);
      else {
        const o = b(c, l);
        o["text/plain"] && t.push(o["text/plain"]),
          o["text/html"] && r.push(o["text/html"]);
      }
    }
  const s = {};
  return (
    t.length > 0 &&
      (s["text/plain"] = t.join(`

`)),
    r.length > 0 &&
      (s["text/html"] = r.join(`

`)),
    s
  );
}
function M(e) {
  return (
    !e.clientMetadata?.err &&
    (e.author.role === i.Assistant || e.author.role === i.User) &&
    (e.author.role === i.User || e.recipient === "all") &&
    !e.metadata?.reasoning_status
  );
}
const j = async (e, n, t, r, s, a = "mouse") => {
    const c = d.getConversationTurns(g(n))[t];
    if (!c) return Promise.reject();
    const { messages: o } = c,
      u = s,
      T = o[0]?.author.role === i.User,
      f = u.metaKey || u.altKey,
      h = v(c, { unprocessed: f || T });
    await y(h, r, s);
    const m = x(n);
    m &&
      C(e, {
        messageId: o[0].id,
        type: "copy",
        serverThreadId: m,
        selectedText: p(o[0]),
        source: a,
        location: "message",
      });
  },
  K = (e, n, t, r, s = "mouse") => {
    const a = d.getConversationTurns(g(n));
    return j(e, n, a.length - 1, t, r, s);
  };
export { j as a, K as c };
//# sourceMappingURL=gzhfufyiohn83kuo.js.map
