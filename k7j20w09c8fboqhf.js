import { r, a3 as s, j as e, a4 as c } from "./lip667d8t42poxum.js";
import { fK as n } from "./hgyrt6j47bbfyjrt.js";
n.instance.addTiming("entry.client");
r.startTransition(() => {
  s.hydrateRoot(document, e.jsx(r.StrictMode, { children: e.jsx(c, {}) }), {
    onRecoverableError(t, o) {
      const a = new Error(`${t instanceof Error ? t.message : String(t)}`);
      (a.name = "RecoverableError"),
        (a.stack =
          o.componentStack ?? (t instanceof Error ? t.stack : String(t))),
        (a.cause = t),
        n.instance.addError(a);
    },
  });
});
//# sourceMappingURL=k7j20w09c8fboqhf.js.map
