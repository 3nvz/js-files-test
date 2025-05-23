const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/ew9hb9iurj3kpkmu.js",
      "assets/lip667d8t42poxum.js",
      "assets/bek4a02po1hapmml.js",
      "assets/hgyrt6j47bbfyjrt.js",
      "assets/root-nsehtib5.css",
      "assets/conversation-small-k5k9c71c.css",
      "assets/accwyue32xah1z1m.js",
      "assets/gzhfufyiohn83kuo.js",
      "assets/mrja6mbtdpn27l02.js",
      "assets/gfnsbm99dy8f9dle.js",
      "assets/gkp5860wafdf24mv.js",
      "assets/jwvxkjptpstk4ej7.js",
      "assets/iamkd7uovamzrioo.js",
      "assets/j4mmgxghl8b1mh10.js",
      "assets/kx9sak1ife31wz46.js",
      "assets/bszrilswpsf8hziz.js",
    ]),
) => i.map((i) => d[i]);
import {
  as as Ee,
  X as Ce,
  _ as Re,
  g as Ie,
  ae as de,
  af as Te,
  ag as Ae,
  dQ as we,
  bb as C,
  c2 as Ne,
  c as ue,
  aj as ye,
  aO as je,
  cg as De,
  fV as ke,
  y as ze,
  bc as ae,
  p as fe,
} from "./hgyrt6j47bbfyjrt.js";
import {
  f as Pe,
  j as a,
  c as Le,
  r as l,
  L as me,
} from "./lip667d8t42poxum.js";
import {
  aF as Me,
  aG as Oe,
  aH as Ue,
  aI as Ge,
  aJ as He,
  aK as qe,
  aL as Ve,
  aM as Fe,
  aN as pe,
  aO as Ke,
  aP as Qe,
  aQ as ve,
  aR as Xe,
  aS as $e,
  aT as Be,
  aU as We,
  aV as Ye,
  aW as Je,
  U as Ze,
  aX as et,
  aY as ge,
} from "./bek4a02po1hapmml.js";
import { G as tt } from "./accwyue32xah1z1m.js";
const st = Ce(() =>
    Re(
      () => import("./ew9hb9iurj3kpkmu.js").then((n) => n.k),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
    ).then((n) => n.GizmoConversationOptionsDropdown),
  ),
  at = new Date(2024, 9, 11, 0);

function he(n) {
  je.checkGate("3922476776") || De.abortAllRequests(),
    ye.logEvent("Load Thread", {
      threadId: n,
    });
}

function ot({
  conversation: n,
  onOpenChange: e,
  testId: t,
  inMainScreen: R = !1,
  isActiveConversation: T,
}) {
  const s = Pe(),
    { isUnauthenticated: I } = Ee();
  return I
    ? null
    : a.jsx(st, {
        conversation: n,
        onOpenChange: e,
        inMainScreen: R,
        isActiveConversation: T,
        children: a.jsx("button", {
          className:
            "text-token-text-secondary hover:text-token-text-primary radix-state-open:text-token-text-secondary flex items-center justify-center transition",
          "data-testid": t,
          "aria-label": s.formatMessage({
            id: "idEcXk",
            defaultMessage: "Open conversation options",
          }),
          children: a.jsx(Me, {
            className: "icon-md",
          }),
        }),
      });
}

function dt(n) {
  "use forget";
  const e = Le.c(75),
    {
      conversation: t,
      className: R,
      hideOverflowMenu: T,
      isActive: s,
      elementRef: I,
      testId: Q,
    } = n,
    X = T === void 0 ? !1 : T,
    $ = Ie(),
    [d, B] = l.useState(!1),
    [u, Se] = l.useState(!1),
    [W, oe] = l.useState(!1);
  let A;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((A = "3922476776"), (e[0] = A))
    : (A = e[0]);
  const { value: f } = de(A);
  let w;
  e[1] === Symbol.for("react.memo_cache_sentinel")
    ? ((w = "232791851"), (e[1] = w))
    : (w = e[1]);
  const { value: N } = de(w),
    Y = Oe(t.id);
  let j;
  e[2] !== Y ? ((j = Y ?? {}), (e[2] = Y), (e[3] = j)) : (j = e[3]);
  const { value: ie, source: ne } = j,
    i = ie === void 0 ? null : ie,
    c = ne === void 0 ? null : ne,
    xe = Te(t.id, Ae.getRequestId),
    m = we(xe),
    _e = Ue(new Date(), new Date(t.update_time ?? 0)) < Ge(He.Standard),
    D = qe(t.id);
  let k;
  e[4] !== t.update_time
    ? ((k = t.update_time && Ve(new Date(t.update_time), at)),
      (e[4] = t.update_time),
      (e[5] = k))
    : (k = e[5]);
  const be = k,
    re = (i === C.STREAMING || i === C.REALTIME) && _e,
    J = N && !s && !m && be && !W && i === C.UNREAD,
    z = N && (m || re) && !W,
    Z = !W && N && !s,
    ee = !z && N && !s && (m || re),
    te = Fe(t.id) && !s,
    se = l.useRef(!1);
  let P;
  e[6] !== c || e[7] !== i || e[8] !== t.id || e[9] !== s || e[10] !== f
    ? ((P = () => {
        se.current ||
          (f &&
            (async () => (
              (se.current = !0),
              s &&
                i === C.UNREAD &&
                (c === ae.SERVER && (await fe.setConversationStatus(t.id)),
                ge(t.id, null)),
              !s &&
                c === ae.CLIENT &&
                i === C.UNREAD &&
                (await fe.setConversationStatus(t.id, i),
                ge(t.id, {
                  value: C.UNREAD,
                  source: ae.SERVER,
                })),
              (se.current = !1)
            ))());
      }),
      (e[6] = c),
      (e[7] = i),
      (e[8] = t.id),
      (e[9] = s),
      (e[10] = f),
      (e[11] = P))
    : (P = e[11]);
  let L;
  e[12] !== c ||
  e[13] !== i ||
  e[14] !== t.id ||
  e[15] !== s ||
  e[16] !== m ||
  e[17] !== f
    ? ((L = [f, s, t.id, i, c, m]),
      (e[12] = c),
      (e[13] = i),
      (e[14] = t.id),
      (e[15] = s),
      (e[16] = m),
      (e[17] = f),
      (e[18] = L))
    : (L = e[18]),
    l.useEffect(P, L);
  let M, O;
  e[19] !== t.id || e[20] !== s
    ? ((M = () =>
        ke(tt, {
          editTitle: (o) => {
            const { serverThreadId: r } = o;
            (r ? r === t.id : s) && B(!0);
          },
        })),
      (O = [t.id, s]),
      (e[19] = t.id),
      (e[20] = s),
      (e[21] = M),
      (e[22] = O))
    : ((M = e[21]), (O = e[22])),
    l.useEffect(M, O);
  let U;
  e[23] !== t.conversation_template_id || e[24] !== $
    ? ((U = () =>
        t.conversation_template_id == null
          ? void 0
          : Ye($)().data?.gizmos.find(
              (r) => r.resource.gizmo.id === t.conversation_template_id,
            )?.resource),
      (e[23] = t.conversation_template_id),
      (e[24] = $),
      (e[25] = U))
    : (U = e[25]);
  const p = Ne(U),
    le = l.useRef(null),
    ce = l.useRef(null);
  let v;
  e[26] !== t.gizmo_id || e[27] !== d
    ? ((v = !d && pe(t.gizmo_id)),
      (e[26] = t.gizmo_id),
      (e[27] = d),
      (e[28] = v))
    : (v = e[28]);
  let g;
  e[29] !== t
    ? ((g = (o) => {
        if (!pe(t.gizmo_id)) return;
        const r = ze(ce.current),
          K = le.current;
        K && (K.style.display = "none"),
          o.dataTransfer.setDragImage(r, r.clientWidth / 3, r.clientHeight / 2),
          K &&
            requestAnimationFrame(() => {
              K.style.display = "";
            }),
          (o.dataTransfer.effectAllowed = "move"),
          Je({
            kind: "conversation",
            conversation: t,
            gizmoId: t.gizmo_id,
          });
      }),
      (e[29] = t),
      (e[30] = g))
    : (g = e[30]);
  let h;
  e[31] !== R || e[32] !== s || e[33] !== u
    ? ((h = ue(Ke(s, u), "screen-arch:bg-transparent relative", R)),
      (e[31] = R),
      (e[32] = s),
      (e[33] = u),
      (e[34] = h))
    : (h = e[34]);
  let G, H;
  e[35] === Symbol.for("react.memo_cache_sentinel")
    ? ((G = () => {
        oe(!0);
      }),
      (H = () => {
        oe(!1);
      }),
      (e[35] = G),
      (e[36] = H))
    : ((G = e[35]), (H = e[36]));
  let y;
  e[37] !== t.id || e[38] !== te
    ? ((y =
        te &&
        a.jsx(Qe, {
          threadId: t.id,
        })),
      (e[37] = t.id),
      (e[38] = te),
      (e[39] = y))
    : (y = e[39]);
  let S;
  e[40] !== t.id || e[41] !== p
    ? ((S = ve(t.id, p)), (e[40] = t.id), (e[41] = p), (e[42] = S))
    : (S = e[42]);
  let x;
  e[43] !== t.id || e[44] !== s
    ? ((x = (o) => {
        Ze.setPopoverSidebarOpen(!1),
          !(o.metaKey || o.ctrlKey) && (s || he(t.id));
      }),
      (e[43] = t.id),
      (e[44] = s),
      (e[45] = x))
    : (x = e[45]);
  let q;
  e[46] === Symbol.for("react.memo_cache_sentinel")
    ? ((q = () => {
        B(!0);
      }),
      (e[46] = q))
    : (q = e[46]);
  let V;
  e[47] === Symbol.for("react.memo_cache_sentinel")
    ? ((V = {
        maskImage: "var(--sidebar-mask)",
      }),
      (e[47] = V))
    : (V = e[47]);
  let _;
  e[48] !== t || e[49] !== ee
    ? ((_ = a.jsx(Xe, {
        clientThreadId: t.id,
        historyConversationResponse: t,
        shouldShowLoadingShimmer: ee,
        style: V,
      })),
      (e[48] = t),
      (e[49] = ee),
      (e[50] = _))
    : (_ = e[50]);
  let b;
  e[51] !== I || e[52] !== S || e[53] !== x || e[54] !== _
    ? ((b = a.jsx(me, {
        to: S,
        onClick: x,
        onDoubleClick: q,
        ref: I,
        className:
          "motion-safe:group-active:screen-arch:scale-[98%] motion-safe:group-active:screen-arch:transition-transform motion-safe:group-active:screen-arch:duration-100 flex items-center gap-2 rounded-lg p-2",
        "data-history-item-link": !0,
        children: _,
      })),
      (e[51] = I),
      (e[52] = S),
      (e[53] = x),
      (e[54] = _),
      (e[55] = b))
    : (b = e[55]);
  let E;
  e[56] !== Z ||
  e[57] !== D ||
  e[58] !== t ||
  e[59] !== p ||
  e[60] !== X ||
  e[61] !== s ||
  e[62] !== u ||
  e[63] !== d ||
  e[64] !== z ||
  e[65] !== J ||
  e[66] !== Q
    ? ((E = d
        ? a.jsx("div", {
            className:
              "bg-token-sidebar-surface-secondary absolute start-[7px] end-2 top-0 bottom-0 flex items-center",
            children: a.jsx($e, {
              conversationId: t.id,
              historyConversationResponse: t,
              onClose: () => {
                B(!1);
              },
            }),
          })
        : J
          ? a.jsx(me, {
              to: ve(t.id, p),
              onClick: (o) => {
                o.metaKey || o.ctrlKey || s || he(t.id);
              },
              children: a.jsx("div", {
                className:
                  "absolute top-0 bottom-0 flex items-center gap-1.5 pe-2 ltr:end-0 rtl:start-0",
                children: a.jsx("div", {
                  className: "h-2 w-2 rounded-full bg-blue-400",
                }),
              }),
            })
          : Z && D.length > 0
            ? a.jsx("div", {
                className:
                  "absolute top-0 bottom-0 flex items-center gap-1.5 pe-2 ltr:end-0 rtl:start-0",
                children: a.jsx(Be, {
                  task: D[0],
                }),
              })
            : z
              ? a.jsx("div", {
                  className:
                    "absolute top-0 bottom-0 flex items-center gap-1.5 pe-2 ltr:end-0 rtl:start-0",
                  children: a.jsx(We, {
                    size: 16,
                    className: "text-token-text-primary",
                  }),
                })
              : !X &&
                a.jsx("div", {
                  className: ue(
                    "absolute top-0 bottom-0 inline-flex items-center gap-1.5 pe-2 ltr:end-0 rtl:start-0",
                    s || u
                      ? "flex"
                      : "can-hover:not-group-hover:opacity-0 group-focus-within:opacity-100! group-hover:opacity-100! group-focus:opacity-100! focus-within:opacity-100! focus:opacity-100!",
                  ),
                  ref: le,
                  children: a.jsx(ot, {
                    isActiveConversation: s,
                    conversation: t,
                    onOpenChange: (o) => {
                      Se(o),
                        o &&
                          ye.logEvent("Conversation History Item Open Menu", {
                            conversationId: t.id,
                          });
                    },
                    testId: `${Q}-options`,
                  }),
                })),
      (e[56] = Z),
      (e[57] = D),
      (e[58] = t),
      (e[59] = p),
      (e[60] = X),
      (e[61] = s),
      (e[62] = u),
      (e[63] = d),
      (e[64] = z),
      (e[65] = J),
      (e[66] = Q),
      (e[67] = E))
    : (E = e[67]);
  let F;
  return (
    e[68] !== v ||
    e[69] !== g ||
    e[70] !== h ||
    e[71] !== y ||
    e[72] !== b ||
    e[73] !== E
      ? ((F = a.jsxs("div", {
          draggable: v,
          onDragStart: g,
          onDragEnd: it,
          ref: ce,
          className: h,
          onMouseEnter: G,
          onMouseLeave: H,
          children: [y, b, E],
        })),
        (e[68] = v),
        (e[69] = g),
        (e[70] = h),
        (e[71] = y),
        (e[72] = b),
        (e[73] = E),
        (e[74] = F))
      : (F = e[74]),
    F
  );
}

function it() {
  et();
}
export { ot as G, dt as H };
//# sourceMappingURL=b3f39kp9psoxk5co.js.map
