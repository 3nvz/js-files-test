import { f as g, j as o } from "./lip667d8t42poxum.js";
import { fZ as l, p as u, at as b } from "./hgyrt6j47bbfyjrt.js";
import { I as p } from "./dcjog7s9l4t4gioj.js";
function _({ messageId: i, serverThreadId: n, rating: r, onClose: c }) {
  const m = g(),
    s = Object.entries(l).map(([e, t]) => ({
      label: m.formatMessage(t),
      value: e,
    })),
    d = async (e) => {
      const t = s.map((a) => a.value);
      try {
        await u.submitMessageFeedback({
          message_id: i,
          conversation_id: n,
          rating: "thumbsDown",
          text: e.textFeedback ?? void 0,
          tags: e.tags,
          tag_choices: t,
        });
      } catch (a) {
        b.addError(`Failed to submit ${r} image generation feedback: ${a}`);
      }
      c();
    };
  return o.jsx("div", {
    onClick: (e) => e.stopPropagation(),
    children: o.jsx(p, {
      tagOptions: s,
      modalOnly: !0,
      multiple: !0,
      onSubmit: d,
    }),
  });
}
export { _ as I };
//# sourceMappingURL=eizg3cbui1uc8rqy.js.map
