import { u as p, g as h } from "./baqe411ijw4zke1t.js";
import { eQ as d, dJ as f, eC as m, at as g } from "./hgyrt6j47bbfyjrt.js";
import { r } from "./lip667d8t42poxum.js";
function v(e) {
  const o = r.useRef(void 0);
  r.useEffect(() => {
    if (!((d() && f) || !navigator.permissions))
      return (
        navigator.permissions
          .query({ name: "microphone" })
          .then((n) => {
            (o.current = n),
              (n.onchange = () => {
                e(n.state === "granted");
              });
          })
          .catch(() => {}),
        () => {
          o.current && (o.current.onchange = null);
        }
      );
  }, [e]);
}
const C = () => {
    const [e, o] = r.useState(!1),
      [i, n] = r.useState(!1),
      [c, a] = r.useState(),
      u = r.useCallback((s) => {
        o(s);
      }, []);
    v(u);
    const t = p(),
      l = r.useCallback(
        async () =>
          i
            ? e
            : t()
                .then((s) => (o(s), s))
                .finally(() => {
                  n(!0);
                }),
        [t, i, e],
      );
    return (
      r.useEffect(() => {
        e &&
          D().then((s) => {
            a(s);
          });
      }, [e]),
      {
        requestMicrophonePermissions: l,
        userDeclinedMicrophonePermissions: i && !e,
        microphoneAvailable: e,
        microphoneLabel: c,
      }
    );
  },
  D = async () => {
    try {
      return (await h("audioinput"))?.label ?? "";
    } catch (e) {
      const o = m();
      return (
        g.addError("Failed to fetch default media device", {
          error: e,
          protocol: o,
        }),
        "Error accessing microphone devices"
      );
    }
  };
export { C as u };
//# sourceMappingURL=g5tla08b0bj0zd2r.js.map
