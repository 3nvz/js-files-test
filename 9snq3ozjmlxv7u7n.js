import {
    r as l,
    ai as B,
    p as q,
    f as K,
    j as n,
    a6 as Y,
    a5 as f
} from "./lip667d8t42poxum.js";
import {
    lO as X,
    lP as Q,
    lQ as D,
    lR as $,
    C as x,
    lS as Z,
    lT as J,
    lU as ee,
    lV as te,
    lW as se,
    lX as ae,
    lY as oe,
    jH as ne,
    lZ as ie,
    l_ as re,
    l$ as ce,
    m0 as R,
    m1 as O,
    jF as de,
    u as le,
    m2 as N,
    U as M,
    m3 as W,
    m4 as ue,
    m5 as me,
    hx as pe,
    m6 as he
} from "./bek4a02po1hapmml.js";
import {
    gW as y,
    aH as F,
    af as P,
    ag as w,
    dQ as ge,
    dH as fe,
    g7 as xe,
    e6 as ve,
    dR as Ce,
    gP as Te,
    gc as we
} from "./hgyrt6j47bbfyjrt.js";
import {
    u as Se,
    L as be
} from "./imxvx5fflgp7b780.js";
import {
    T as Ie
} from "./ids1x0zqamf6ahba.js";
import {
    g as ye
} from "./btagl6w1gub4aw61.js";
import "./jy1u8exw8iz2slve.js";
import "./ltfattuf7qy8hfqt.js";
import "./jy5dxk25zw6hpymq.js";
import "./glin8sqjw0f6znku.js";
import "./kweqtgafphozzl00.js";
import "./l5e8sk6z3i8aaal6.js";
import "./gy64pge8qevmvg7e.js";
import "./fgib8os5mzfls06e.js";
import "./gfnsbm99dy8f9dle.js";
import "./gkp5860wafdf24mv.js";
import "./jwvxkjptpstk4ej7.js";
import "./d5srgqurg48kxugz.js";
import "./j1lsvoc2k14t9qu3.js";
import "./eef33l65z4kyipsv.js";
import "./e5qbxqli4yfx49qs.js";
import "./onc52ija8qy6u5wt.js";
import "./d7qhj0hizrl5q10d.js";
import "./bk8slwxjkdlmxjxm.js";
import "./n5wgei6jvns1qnny.js";
import "./pb0xfopp3f7joxj4.js";
import "./ew9hb9iurj3kpkmu.js";
import "./accwyue32xah1z1m.js";
import "./gzhfufyiohn83kuo.js";
import "./mrja6mbtdpn27l02.js";
import "./iamkd7uovamzrioo.js";
import "./j4mmgxghl8b1mh10.js";
import "./kx9sak1ife31wz46.js";
import "./bszrilswpsf8hziz.js";
import "./gydkbc6xtfcf9567.js";
const j = "oai/apps/canmoreSidebarWidth",
    Ee = .25,
    Ae = 400,
    k = 400;

function H(e) {
    return e - Ae
}

function b(e, s) {
    return B(k, H(e), s ?? Ee * e)
}

function _e() {
    const e = y.useState(y.selectWindowWidth),
        s = b(e, X(F.DANGER_SECRET_FOLDERS_ONLY_getItem(j))),
        a = L(),
        [t, r] = l.useState(s);
    l.useEffect(() => {
        (t < k || t > H(e)) && r(b(e, t))
    }, [e]);

    function o(c) {
        r(v => b(e, v += c.delta.x))
    }

    function i(c) {
        r(c), F.DANGER_SECRET_FOLDERS_ONLY_setItem(j, c)
    }

    function u() {
        const c = b(e, void 0);
        i(c)
    }
    const p = `calc(100vw - ${t}px)`;
    return a ? {
        chatWidth: t,
        canvasWidth: e - t,
        canvasWidthCalc: p,
        viewportWidth: e,
        handleDrag: o,
        handleDoubleClick: u,
        persist: i
    } : {
        chatWidth: 0,
        canvasWidth: e,
        canvasWidthCalc: "100vw",
        viewportWidth: e,
        handleDrag: () => {},
        handleDoubleClick: () => {},
        persist: () => {}
    }
}

function L(e) {
    const s = y.useState(y.selectWindowWidth);
    return (e ?? s) > 1e3
}
const A = "sharedCanvas";

function Re() {
    const [e, s] = q(), a = e.get(A), t = K();
    l.useEffect(() => {
        const r = a && Q.createRemixTempTextdoc(a, t);
        if (!r) return;
        requestAnimationFrame(() => {
            D(r)
        });
        const o = new URLSearchParams(e);
        o.delete(A), s(o);
        const i = new URL(window.location.href);
        i.searchParams.delete(A), history.replaceState(null, "", i)
    }, [a, e, s, t])
}
const Ne = "textdocId",
    Me = e => {
        const a = new URLSearchParams(window.location.search).get(Ne),
            t = P(e, r => w.findNode(r, ({
                message: o
            }) => {
                const i = o.metadata?.canvas;
                return i?.create_source === $.HIVE && (a ? i?.textdoc_id === a : !0)
            })?.message.metadata?.canvas?.textdoc_id);
        l.useEffect(() => {
            t && requestAnimationFrame(() => {
                D(t)
            })
        }, [t])
    };

function We(e, s) {
    let a;
    return s?.type === x.Textdoc ? s.textdocId.startsWith(Z) || (a = {
        type: "canvas_textdoc",
        id: s.textdocId
    }) : s?.type === x.Kanzi && (a = {
        type: "canvas_kanzi",
        id: s.kanziId
    }), J(e, {
        promptMessage: {
            metadata: {
                open_in_canvas_view: a
            }
        }
    })
}
const z = ({
        isFullScreen: e = !1,
        clientThreadId: s,
        focusedObject: a,
        onClose: t,
        isAnimating: r = !1,
        width: o
    }) => {
        const {
            setTargetedContent: i
        } = ee(), u = l.useRef(!1);
        if (l.useEffect(() => (u.current && i(void 0), u.current = !0, () => {
                u.current = !1
            }), [a]), a == null) return null;
        switch (a.type) {
            case x.Textdoc:
                return n.jsx(Ie, {
                    isFullScreen: e,
                    onClose: t,
                    clientThreadId: s,
                    focusedTextdoc: a,
                    isAnimating: r,
                    width: o
                });
            case x.Kanzi:
                break;
            case x.ADAVisualization:
                return null
        }
    },
    Fe = 300,
    je = e => {
        switch (e?.type) {
            case x.Textdoc:
                return e.textdocId;
            default:
                return null
        }
    };

function De(e, s) {
    const [a, t, r, o] = P(e, d => [w.getRequestId(d), w.getConversationLastTurn(d), w.isMessageTurnEnded(d), w
        .getVariantIds(d).length > 1
    ]), i = ge(a), u = te(), [p, c] = l.useMemo(() => {
        if (t && o) return [void 0, null];
        if (s === !0) return [void 0, null];
        let d;
        return !r && t && (d = fe(t.messageGroups, h => h.type !== xe)), Oe({
            groupedMessage: d,
            isRequestActive: i,
            latestTextdocId: u
        })
    }, [r, t, o, s, i, u]), v = c != null, C = je(c), T = se("canvas");
    l.useEffect(() => {
        if (c && p && !ae() && (T(), oe(c, p), c.type === x.Textdoc)) {
            const {
                textdocId: d
            } = c, h = ye(d);
            ne(document.getElementById(h))
        }
    }, [v, C])
}

function Oe({
    groupedMessage: e,
    isRequestActive: s,
    latestTextdocId: a
}) {
    switch (e?.type) {
        case ve.Canmore: {
            const [t, r] = e.messages;
            if (!ie(t)) break;
            const o = re(s, t, r ?? null),
                i = o.textdocId ?? a;
            if (i && (o.function === ce.CreateTextdoc ? (o.content ?? "").length > Fe || o.status === R.WAITING : o
                    .status === R.STREAMING)) return [o.messageId, {
                type: x.Textdoc,
                textdocId: i
            }];
            break
        }
    }
    return [void 0, null]
}
const I = {
        type: "spring",
        bounce: .12,
        duration: .64
    },
    Pe = {
        type: "spring",
        bounce: 0,
        duration: .58
    },
    ke = ({
        clientThreadId: e,
        focusedObject: s,
        onClose: a
    }) => {
        const {
            chatWidth: t,
            canvasWidthCalc: r,
            handleDrag: o,
            handleDoubleClick: i,
            persist: u
        } = _e(), [p, c] = l.useState(!0), [v, C] = l.useState(!1), T = ue(({
            rect: m
        }) => m), {
            windowHeight: d,
            windowWidth: h
        } = we(m => m, {
            windowWidth: 0,
            windowHeight: 0
        });
        let g = T ?? {
                top: 0,
                left: t,
                width: h - t,
                height: d
            },
            _ = !1;
        if (T && (g.top < 0 || g.top + g.height > d)) {
            _ = !0;
            const m = {
                width: (h - t) * .75,
                height: d * .75
            };
            g = {
                top: d / 2 - m.height / 2,
                left: (h - t - m.width) / 2 + t,
                width: m.width,
                height: m.height
            }
        }
        const S = T?.borderRadius,
            E = me(),
            U = E?.history != null || E?.showChangesAtVersion != null,
            V = pe();
        return n.jsxs(n.Fragment, {
            children: [U && n.jsx(be, {
                onClick: () => he(E.textdocId),
                zIndexKey: "chatOverlay"
            }), n.jsxs(f.div, {
                initial: {
                    marginRight: V ? -260 : 0
                },
                animate: {
                    marginRight: 0
                },
                transition: Pe,
                children: [n.jsx(f.div, {
                    initial: {
                        opacity: 1
                    },
                    animate: {
                        opacity: 0
                    },
                    exit: {
                        opacity: [1, 0]
                    },
                    transition: {
                        ...I,
                        delay: .22
                    },
                    className: "bg-token-main-surface-primary pointer-events-none absolute start-0 top-0 z-20 h-full w-full"
                }), n.jsx(f.div, {
                    className: "relative z-20 h-full",
                    style: {
                        width: r
                    },
                    exit: {
                        width: 0
                    },
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: .1
                    }
                })]
            }), n.jsx(f.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                className: "pointer-events-none absolute start-0 top-0 z-10 h-full w-full bg-black/[0.025] dark:bg-transparent"
            }), n.jsx(f.div, {
                className: "absolute start-0 z-20 h-full overflow-hidden transition-shadow",
                initial: {
                    borderRadius: S,
                    boxShadow: "0px 12px 32px 0px rgba(0, 0, 0, 0.064)",
                    opacity: _ ? 0 : 1,
                    x: g.left,
                    y: g.top,
                    height: g.height,
                    width: g.width
                },
                animate: {
                    opacity: 1,
                    x: t,
                    y: 0,
                    width: r,
                    height: d,
                    borderRadius: 0,
                    boxShadow: "0px 0px 18px rgba(0,0,0,0.075)"
                },
                exit: {
                    scale: .64,
                    opacity: 0,
                    filter: "blur(12px)",
                    transition: {
                        opacity: {
                            duration: .14,
                            bounce: .1
                        }
                    },
                    borderRadius: S,
                    boxShadow: "0px 12px 32px 0px rgba(0, 0, 0, 0.064)"
                },
                transition: v ? {
                    duration: 0
                } : I,
                onAnimationComplete: () => c(!1),
                children: n.jsx(f.div, {
                    className: "dark:border-token-border-medium h-full overflow-hidden border-s border-gray-100",
                    initial: {
                        borderRadius: S
                    },
                    animate: {
                        borderRadius: 0
                    },
                    exit: {
                        borderRadius: S
                    },
                    transition: I,
                    children: n.jsxs("div", {
                        className: "h-full",
                        children: [n.jsx(f.div, {
                            drag: "x",
                            className: "bg-token-text-quaternary absolute start-[-2px] z-10 h-full w-[4px] cursor-ew-resize opacity-0",
                            whileHover: {
                                opacity: .5
                            },
                            whileDrag: {
                                opacity: .75,
                                width: "8px",
                                left: "-4px"
                            },
                            transition: {
                                type: "tween",
                                duration: .1
                            },
                            style: {
                                x: 0,
                                y: 0,
                                transform: "translateX(0px)"
                            },
                            dragMomentum: !1,
                            dragSnapToOrigin: !1,
                            dragElastic: !1,
                            dragConstraints: {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            },
                            onPointerDown: () => C(!0),
                            onPointerUp: () => C(!1),
                            onDrag: (m, G) => o(G),
                            onDragEnd: () => {
                                C(!1), u(t)
                            },
                            onDoubleClick: () => i()
                        }), v && n.jsx("div", {
                            className: "absolute inset-0 z-10"
                        }), n.jsx(z, {
                            onClose: a,
                            clientThreadId: e,
                            isAnimating: p,
                            focusedObject: s,
                            width: h - t
                        })]
                    })
                })
            })]
        })
    },
    He = l.memo(ke),
    Le = ({
        clientThreadId: e,
        focusedObject: s,
        onClose: a
    }) => n.jsx(Te, {
        children: n.jsx(f.div, {
            className: "fixed inset-0 z-40 overflow-hidden shadow-xl md:border-gray-100 md:dark:border-gray-700",
            initial: {
                scale: .98
            },
            animate: {
                scale: 1
            },
            transition: I,
            children: n.jsx(z, {
                isFullScreen: !0,
                clientThreadId: e,
                focusedObject: s,
                onClose: a
            })
        })
    }),
    ze = ({
        clientThreadId: e,
        overrideWidth: s,
        isAutoFocusDisabled: a = !1
    }) => {
        const t = L(s),
            r = Se();
        De(e, a || r), Re(), Me(e);
        const o = le();
        l.useEffect(() => {
            O()
        }, [e]);
        const i = o && (t ? n.jsx(He, {
            clientThreadId: e,
            onClose: W,
            focusedObject: o
        }, "canvas-sidebar") : n.jsx(Le, {
            clientThreadId: e,
            onClose: W,
            focusedObject: o
        }, "canvas-modal"));
        l.useEffect(() => {
            if (o) return N(p => We(p, o)), () => N(null)
        }, [o]);
        const u = i != null;
        return l.useEffect(() => (M.setActiveStageSidebar(u), () => {
            u && M.setActiveStageSidebar(!1)
        }), [u]), n.jsx(Y, {
            children: i
        }, e)
    },
    bt = e => {
        const s = l.useRef(null);
        return n.jsx(Ce, {
            ref: s,
            onError: (a, t) => {
                O(), setTimeout(() => {
                    s.current?.resetErrorBoundary()
                }), de.logError("Error boundary hit", a, {
                    componentStack: t
                })
            },
            name: "canmore-focused-view",
            children: n.jsx(ze, {
                ...e
            })
        })
    };
export {
    bt as CanvasFocusedViewManager
};
//# sourceMappingURL=9snq3ozjmlxv7u7n.js.map