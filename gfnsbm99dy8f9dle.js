import {
  f5 as Pe,
  cR as je,
  aW as Je,
  aJ as te,
  aG as B,
  g as qe,
  s as Xe,
  cQ as He,
  c2 as V,
  aj as Ye,
  c4 as P,
  c5 as q,
  aX as Fe,
  ag as G,
  bR as Ze,
  af as Ve,
  ec as et,
  gQ as tt,
  b9 as nt,
  dV as st,
  aa as be,
  h1 as it,
  cu as ot,
  ce as at,
  bb as rt,
  bc as ct,
  cg as ut,
  h2 as lt,
  gS as dt,
  eA as Ce,
  f$ as ke,
  f7 as ht,
  cj as ft,
  j as gt,
  h3 as mt,
  aQ as pt,
} from "./hgyrt6j47bbfyjrt.js";
import {
  az as yt,
  d as wt,
  bJ as St,
  d9 as vt,
  M as _t,
  mo as xe,
  iO as Tt,
  mp as bt,
  im as Ct,
  mq as kt,
  io as xt,
  mr as Et,
  jO as Rt,
  ms as Dt,
  mt as At,
  mu as Mt,
  mv as Pt,
  aY as qt,
  mw as Ht,
  le as Ee,
  mx as Ft,
  my as It,
  mz as Kt,
  mA as Lt,
} from "./bek4a02po1hapmml.js";
import { r as w, a as Nt, d as zt } from "./lip667d8t42poxum.js";
import {
  a as H,
  P as F,
  D as ne,
  b as Ie,
  T as le,
  p as Ot,
} from "./gkp5860wafdf24mv.js";
const Ke = new H("transactionEventPlugin"),
  Re = "prosemirrorDispatchTransaction";
function De(n, e) {
  const { eventTarget: t } = Ke.getState(n.state);
  return (
    t.addEventListener(Re, e),
    () => {
      t.removeEventListener(Re, e);
    }
  );
}
function tn(n) {
  return new F({
    key: Ke,
    state: {
      init() {
        return { eventTarget: n };
      },
      apply(e, t) {
        return t;
      },
    },
  });
}
const ee = new H("customKeymapPlugin");
function $t(n, e) {
  n.dispatch(n.state.tr.setMeta(ee, { handlers: e }));
}
function nn(n = { handlers: {} }) {
  return new F({
    key: ee,
    state: {
      init() {
        return { ...n };
      },
      apply(e, t) {
        const s = e.getMeta(ee);
        return s ? { ...t, ...s } : t;
      },
    },
    props: {
      handleKeyDown(e, t) {
        const i = ee.getState(e.state).handlers[t.key];
        return i ? i(t) : !1;
      },
    },
  });
}
const sn = (n) => {
  if (!n) return { enabled: !1, trackingKeywords: [] };
  const e = Pe(n, "463092697").value,
    t = e?.trackingKeywords,
    s = !!e?.softmentionEnabled;
  return Array.isArray(t) && t.every((i) => typeof i == "string")
    ? { enabled: s, trackingKeywords: t }
    : { enabled: s, trackingKeywords: [] };
};
function Ut() {
  return { decorations: ne.empty, matches: [] };
}
const Le = new H("keywordPlugin");
function on(n) {
  const e = new RegExp(`\\b(${n.join("|")})\\b`, "gi");
  return new F({
    key: Le,
    state: {
      init() {
        return Ut();
      },
      apply(t, s) {
        if (!t.docChanged) return s;
        const i = [],
          o = [];
        return (
          t.doc.descendants((a, c) => {
            if (!a.isText || !a.text) return;
            const r = a.text;
            let u;
            for (; (u = e.exec(r)) != null; ) {
              const g = c + u.index,
                S = g + u[0].length;
              i.push(Ie.inline(g, S, { class: "hint-pill" })),
                o.push({ from: g, to: S, keyword: u[1] });
            }
          }),
          { decorations: ne.create(t.doc, i), matches: o }
        );
      },
    },
    props: {
      decorations(t) {
        const s = this.getState(t);
        return s ? s.decorations : ne.empty;
      },
    },
  });
}
const b = new H("menuSelectorPlugin");
function Ae(n) {
  n.dispatch(n.state.tr.setMeta(b, { active: !1, onMenuAction: void 0 }));
}
function an(n, e) {
  n.dispatch(n.state.tr.setMeta(b, { active: !0, onMenuAction: e }));
}
function rn(
  n = {
    submitKeys: ["Enter", "Tab"],
    cancelKeys: ["Escape"],
    checkStrictMatchKeys: [" "],
  },
) {
  return new F({
    key: b,
    state: {
      init() {
        return { ...n, active: !1 };
      },
      apply(e, t) {
        const s = e.getMeta(b);
        return s ? { ...t, ...s } : t;
      },
    },
    props: {
      handleKeyDown(e, t) {
        const s = b.getState(e.state);
        if (!s.active) return !1;
        if (!t.isComposing)
          return s.submitKeys.includes(t.key)
            ? (t.preventDefault(),
              t.stopPropagation(),
              t.stopImmediatePropagation(),
              Ae(e),
              s.onMenuAction?.("submit") ?? !0)
            : s.cancelKeys.includes(t.key)
              ? (t.preventDefault(), s.onMenuAction?.("cancel"), Ae(e), !0)
              : t.key === "ArrowUp"
                ? (t.preventDefault(), s.onMenuAction?.("up"), !0)
                : t.key === "ArrowDown"
                  ? (t.preventDefault(), s.onMenuAction?.("down"), !0)
                  : s.checkStrictMatchKeys.includes(t.key) &&
                      s.onMenuAction?.("checkMatch")
                    ? (t.preventDefault(), !0)
                    : !1;
      },
      handleDOMEvents: {
        blur: (e) => {
          b.getState(e.state).onMenuAction?.("cancel");
        },
      },
    },
  });
}
const Q = new H("placeholderPlugin");
function cn(n) {
  return new F({
    key: Q,
    state: {
      init() {
        return { placeholder: n };
      },
      apply(e, t) {
        return e.getMeta(Q) ? { placeholder: e.getMeta(Q).placeholder } : t;
      },
    },
    props: {
      decorations(e) {
        const { doc: t } = e;
        if (
          t.childCount === 1 &&
          t.firstChild?.isTextblock &&
          t.firstChild.content.size === 0
        ) {
          const i = [],
            { placeholder: o } = Q.getState(e);
          return (
            e.doc.descendants((a, c) => {
              const r = Ie.node(c, c + a.nodeSize, {
                class: "placeholder",
                "data-placeholder": o,
              });
              i.push(r);
            }),
            ne.create(t, i)
          );
        }
      },
    },
  });
}
const se = "command_token",
  un = {
    group: "inline",
    inline: !0,
    atom: !0,
    content: "text*",
    attrs: { id: "", hint: "" },
    selectable: !1,
    draggable: !1,
    toDOM: (n) => [
      "span",
      {
        "data-mention-id": n.attrs.id,
        "data-mention-hint": n.attrs.hint,
        class: "hint-pill",
      },
      n.attrs.hint,
    ],
    parseDOM: [
      {
        tag: "span[data-mention-id][data-mention-hint]",
        getAttrs: (n) => {
          const e = n.getAttribute("data-mention-id"),
            t = n.getAttribute("data-mention-hint");
          return { id: e, hint: t };
        },
      },
    ],
  };
function Ne(n, e) {
  if (n.depth === 0) return;
  const t = n.nodeBefore?.text?.match(/(?:^|\s)(\/(\w*))$/);
  if (t?.[1].length !== void 0) {
    const s = n.pos - t[1].length,
      i = n.pos,
      o = s === e?.from;
    return { range: { from: s, to: i }, queryText: t[2], isDismissed: o };
  }
}
const de = new H("systemHintPlugin");
function ze(n, e) {
  return n.setMeta(de, e), n;
}
function ln(n) {
  const t = n.state.selection.$from,
    s = Ne(t, void 0);
  n.dispatch(ze(n.state.tr, { ...ie(), dismissedRange: s?.range }));
}
function ie() {
  return { queryText: "", active: !1, range: void 0, dismissedRange: void 0 };
}
function Gt(n, e, t, s, i) {
  const o = n.state.tr;
  ze(o, ie());
  const a = t + " ",
    c = n.state.schema.nodes[se].create(
      { id: e, hint: a },
      n.state.schema.text(a),
    );
  if (i === s) {
    const r = o.doc.resolve(s).nodeAfter;
    if (r?.isText) {
      const u = r?.textContent.match(new RegExp(`^(?:${t}) ?`));
      u && (i = s + u[0].length);
    }
  }
  o.replaceWith(s, i, c),
    o.doc.descendants((r, u) => {
      r.type.name === se &&
        r !== c &&
        ((s === 1 && u === s + c.nodeSize) || (u === 1 && s === u + r.nodeSize)
          ? o.delete(u, u + r.nodeSize)
          : o.insertText(r.textContent, u, u + r.nodeSize));
    }),
    n.dispatch(o);
}
function Qt(n) {
  const e = n.state.tr;
  e.doc.descendants((t, s) => {
    if (t.type.name === se) {
      const i = s + t.nodeSize;
      s === 1 && e.doc.resolve(i).nodeAfter == null
        ? e.delete(s, i)
        : e.insertText(t.textContent, s, s + t.nodeSize);
    }
  }),
    e.steps.length > 0 && n.dispatch(e);
}
function Me(n) {
  const { active: e, range: t, queryText: s, onHintMatch: i } = n;
  if (i) return i(!e || !t ? void 0 : { text: s, range: t });
}
function Bt(n) {
  const e = [];
  return (
    n.descendants((t) => {
      t.type.name === se &&
        typeof t.attrs?.id == "string" &&
        e.push(t.attrs.id);
    }),
    e
  );
}
function dn() {
  return new F({
    key: de,
    state: {
      init() {
        return ie();
      },
      apply(n, e, t, s) {
        const i = n.getMeta(de),
          o = { ...ie(), ...e, ...i },
          a = n.selection;
        if (a.from !== a.to || s.doc.eq(t.doc)) return Me(o), o;
        const c = a.$from,
          r = Ne(c, e.dismissedRange);
        return (
          (o.active = !!r && !r.isDismissed),
          r &&
            ((o.queryText = r.queryText),
            (o.range = r.range),
            r.isDismissed &&
              (r.queryText === "" && e.queryText !== ""
                ? (o.dismissedRange = void 0)
                : (o.dismissedRange = r.range))),
          Me(o),
          o
        );
      },
    },
  });
}
class Wt extends je {
  constructor(e) {
    super(),
      (this.view = e),
      this.subscribe("focus", () => this._store.setState({ isFocused: !0 })),
      this.subscribe("blur", () => this._store.setState({ isFocused: !1 }));
  }
  fileInputHandle = null;
  _store = Je((e) => ({
    isFocused: !1,
    autocompletions: [],
    showTaggingDropdown: !1,
    waveWidth: 300,
    isInReasonMode: !1,
    rateLimitBannerFeature: null,
    setShowTaggingDropdown: (t) => e({ showTaggingDropdown: t }),
  }));
  get store() {
    return this._store;
  }
  _usedDictation = !1;
  _dictationEdited = !1;
  get usedDictation() {
    return this._usedDictation;
  }
  set usedDictation(e) {
    this._usedDictation = e;
  }
  get dictationEdited() {
    return this._dictationEdited;
  }
  set dictationEdited(e) {
    this._dictationEdited = e;
  }
  get element() {
    return this.view.dom;
  }
  get document() {
    return this.view.dom.ownerDocument;
  }
  isEmpty() {
    return this.view.state.doc.textContent.trim().length === 0;
  }
  isFocused() {
    return this.view.hasFocus();
  }
  trimLeadingText(e) {
    const s = this.view.state.tr;
    let i = 0;
    return (
      s.doc.descendants((o, a) => {
        if (o.isText && o.text) {
          if (typeof e == "string" && o.text.startsWith(e)) i = e.length;
          else if (e instanceof RegExp) {
            const c = o.text.match(e);
            c?.index === 0 && (i = c[0].length);
          }
          if (i) {
            const c = o.text.substring(i).trimStart();
            (i = o.text.length - c.length), s.delete(a, a + i);
          }
        }
        return !o.isLeaf;
      }),
      i > 0 ? (this.view.dispatch(s), !0) : !1
    );
  }
  replaceAll(e, t) {
    const i = this.view.state.tr,
      o = [];
    i.doc.descendants((a, c) => {
      !a.isText || a.text === void 0 || o.push({ node: a, pos: c });
    }),
      o.reverse(),
      o.forEach(({ node: a, pos: c }) => {
        !a.isText ||
          a.text === void 0 ||
          (a.text.includes(e) &&
            i.insertText(a.text.replaceAll(e, t), c, c + a.text.length));
      }),
      this.view.dispatch(i);
  }
  appendText(e) {
    this.view.dispatch(this.view.state.tr.insertText(e));
  }
  delete(e, t) {
    this.view.dispatch(this.view.state.tr.delete(e, t));
  }
  focus() {
    this.view.hasFocus() ||
      (this.view.focus(),
      this.view.dispatch(
        this.view.state.tr
          .setSelection(le.atEnd(this.view.state.doc))
          .scrollIntoView(),
      ));
  }
  setText(e) {
    const { tr: t, schema: s } = this.view.state,
      i = e
        ? s.nodes.paragraph.create(null, s.text(e))
        : s.nodes.paragraph.create();
    this.view.dispatch(t.replaceWith(0, this.view.state.doc.content.size, i)),
      this.view.hasFocus() &&
        this.view.dispatch(
          this.view.state.tr.setSelection(le.atEnd(this.view.state.doc)),
        );
  }
  getContentLength() {
    return this.view.state.doc.content.size;
  }
  getCurrentText() {
    return this.view.state.doc.textContent;
  }
  hasMultipleLines() {
    let e = 0;
    return (
      this.view.state.doc.descendants((t) => {
        t.isBlock && e++;
      }),
      e > 1
    );
  }
  getContentToSend() {
    return Ot(this.view);
  }
  resize() {}
  isReady() {
    return !!this.view.state.doc;
  }
  setPlaceholder(e) {
    this.view.dispatch(this.view.state.tr.setMeta(Q, { placeholder: e }));
  }
  getSelectionStart() {
    return this.view.state.selection.ranges[0].$from.pos;
  }
  setSelection(e, t) {
    this.view.dispatch(
      this.view.state.tr.setSelection(le.create(this.view.state.doc, e, t)),
    ),
      this.view.focus();
  }
  isMenuSelectorActive() {
    return b.getState(this.view.state).active;
  }
  registerKeyHandlers(e) {
    $t(this.view, e);
  }
  registerFileInput(e) {
    this.fileInputHandle = e;
  }
  openFileDialog() {
    this.fileInputHandle?.openFileDialog();
  }
  acceptLegacyKeydown() {
    return !1;
  }
  subscribe(e, t) {
    if (e === "change") {
      const s = () => {
        this.usedDictation && (this._dictationEdited = !0), t(void 0);
      };
      return De(this.view, s);
    }
    return (
      this.view.dom?.addEventListener(e, t, { capture: !0 }),
      () => {
        this.view.dom?.removeEventListener(e, t, { capture: !0 });
      }
    );
  }
  useState(e) {
    return w.useSyncExternalStore(
      (t) => De(this.view, t),
      () => e(this),
      () => e(this),
    );
  }
  getSystemHint() {
    return Bt(this.view.state.tr.doc)[0] ?? null;
  }
  getKeywords() {
    return Le.getState(this.view.state)?.matches.map((t) => t.keyword) ?? [];
  }
  addSystemHint(e, t, s = 1, i = 1) {
    Gt(this.view, e, t, s, i);
  }
  removeSystemHints() {
    Qt(this.view);
  }
  canShowAutocompletion() {
    const e = this.getSystemHint();
    return (
      e === te.PictureV2 ||
      e === te.Tatertot ||
      (!this.isMenuSelectorActive() && !e)
    );
  }
}
const jt = B({}),
  Oe = B(void 0),
  Jt = B(void 0),
  he = B(0),
  fe = B(0),
  hn = ({
    serverThreadId: n,
    clientThreadId: e,
    getIsDisabled: t,
    composerController: s,
    currentModelId: i,
    account: o,
    onReset: a,
    onInfer: c,
    isInferEnabledForModel: r,
  }) => {
    const [u, g] = w.useState(!1),
      S = qe(),
      W = Pe(S, "3519990784").value,
      C = Number(W?.inference_debounce_ms ?? 200),
      I = Xe(S, "209963048") && ["gpt-4o", "auto"].includes(i),
      k = He(),
      x = w.useRef(null),
      L = yt(({ enableInferredJuice: d }) => d) || I || r,
      N = w.useRef(c);
    N.current = c;
    const v = w.useRef(0),
      _ = w.useRef(0),
      E = V(() => Jt()),
      j = w.useCallback(
        wt((d) => {
          if (t()) return;
          Ye.logEventWithStatsig(
            "chatgpt_web_autoswitch_infer_called",
            "chatgpt_web_autoswitch_infer_called",
            { is_paid_user: o?.hasPaidSubscription() },
          );
          const h = d.length,
            z =
              h < 5
                ? "<5"
                : h <= 10
                  ? "5-10"
                  : h <= 20
                    ? "10-20"
                    : h <= 50
                      ? "30-50"
                      : "50+";
          if (
            (P.count(q.DEFAULT, "chatgpt_web_autoswitch_infer_called", {
              prompt_length: z,
              is_paid_user: o?.hasPaidSubscription() ? "true" : "false",
            }),
            I)
          )
            return;
          const O = ++v.current,
            $ = Date.now();
          g($);
          const ae = Fe(e),
            re = G.getCurrentNode(ae);
          Ze.postAnonAware(
            "/conversation/infer",
            {
              prompt: d,
              conversation_id: n ?? null,
              is_history_and_training_disabled: k,
              parent_message_id: re.message.id,
              auto_switcher_treatment_override: E,
            },
            { additionalHeaders: { "x-conduit-token": x.current ?? "" } },
          )
            .then((p) => {
              if (
                ((x.current = p.conduit_token),
                t() ||
                  _.current > O ||
                  s.getContentToSend().content.length < d.length)
              )
                return;
              _.current = O;
              const { effort_mode: ce, debug_info: D, request_id: J } = p;
              D && jt.set(D),
                J && Oe.set(J),
                he.set((ue) => ue + 1),
                fe.set(d.length),
                N.current(ce);
            })
            .finally(() => {
              g((p) => (p && $ < p ? p : !1));
            });
        }, C),
        [t, n, E],
      ),
      m = Ve(e, (d) => d?.modelId),
      R = w.useRef(void 0);
    return (
      w.useEffect(() => {
        if (!L || !(s instanceof Wt)) {
          m && m !== R.current && (R.current = m);
          return;
        }
        const d = () => {
          const { content: h } = s.getContentToSend();
          t() ||
            !L ||
            (h
              ? j(h)
              : ((x.current = null),
                a(),
                g(!1),
                ++v.current,
                (_.current = v.current)));
        };
        return (
          m && m !== R.current && ((R.current = m), d()),
          s.subscribe("change", () => {
            d();
          })
        );
      }, [L, t, s, j, c, a, n, k, m]),
      u !== !1
    );
  };
function fn(n) {
  const e = qe(),
    t = Nt(),
    s = et(),
    i = He(),
    o = tt(),
    a = zt(),
    c = St(),
    r = vt(n),
    u = r && "gizmo" in r ? r.gizmo?.gizmo.id : void 0,
    g = _t(u),
    S = u ? (g ? xe.PROJECT : xe.GPT) : void 0,
    W = Tt(n),
    C = bt(),
    oe = V(() => Oe()),
    I = V(() => he()),
    k = V(() => fe()),
    x = Ct((v) => v.threads[n]?.modelSelection),
    K = x?.type === kt.EFFORT_MODE ? x.effortMode : void 0,
    { configurationMenuType: L } = xt(),
    N = L !== "none";
  return w.useCallback(
    async function ({
      requestedModelId: v,
      completionType: _ = ot.Next,
      sourceEvent: E,
      eventSource: j,
      completionMetadata: m,
      extraStreamParams: R,
      parentMessageId: d,
      promptMessage: h,
      existingMessages: z,
      prependMessages: O,
      appendMessages: $,
      profiler: ae,
      skipNotification: re,
    }) {
      const p = E?.timeStamp ?? performance.now(),
        ce = j ?? (E ? Et(E) : "mouse"),
        D = new AbortController(),
        J = it(),
        ue = nt(n),
        X = `request-${n}-${J}`,
        f = Fe(n),
        {
          conduitToken: ge = null,
          prepareState: me = "none",
          lastPrepareTimestamp: pe = null,
        } = f ?? {},
        Y = v ?? f?.modelId ?? Rt(st(t)).id,
        ye =
          G.findNode(
            f,
            (l) =>
              l.message.author.role === be.Assistant ||
              l.message.author.role === be.Tool,
          ) == null,
        $e = f?.continuingFromSharedConversationId != null,
        we = d
          ? G.getNode(f, d)
          : z?.[0]
            ? G.getParentNode(f, z[0].id)
            : G.getCurrentNode(f),
        Ue = we.message.id ?? we.id,
        Se = [...(z ?? []), ...(O ?? []), ...(h ? [h] : []), ...($ ?? [])],
        U = new Dt({ clientRequestId: X, gizmoType: S, preflightTime: p });
      if ((U.onUserMessages(Se), g && ye)) {
        const l = N
          ? m?.systemHints
          : m?.systemHints?.filter(
              (Z) => Z !== te.Canvas && Z !== te.PictureV2,
            );
        At(e).set((Z) => ({ ...Z, [n]: l ?? [] }));
      }
      const A = new Mt(
        e,
        X,
        t,
        f,
        n,
        d,
        O,
        h,
        $,
        _,
        Y,
        K ?? f?.effortMode,
        ce,
        i,
        p,
        a,
        g,
        ye,
        $e,
        U,
        re ?? !1,
        o,
      );
      Pt(n),
        at.publish({ kind: "requestCompletion" }),
        qt(n, { source: ct.CLIENT, value: rt.STREAMING }),
        ut.addRequest(X, D, U),
        Ht.onCompletionRequestStarted(X),
        A.updateBeforeRequest();
      const Ge = performance.now(),
        T = [],
        M = lt() ?? (T.push("chatReq"), await dt());
      M.force_login && c({ authType: "login" });
      const Qe =
          Ee.getEnforcementTokenSync(M) ??
          (T.push("turnstile"), await Ee.getEnforcementToken(M)),
        Be =
          Ce.getEnforcementTokenSync(M) ??
          (T.push("proofofwork"), await Ce.getEnforcementToken(M));
      t.getQueriesData(ke) == null && (await t.ensureQueryData(ke));
      const ve = T.includes("chatReq") ? "false" : "true",
        _e = T.includes("turnstile") ? "false" : "true",
        Te = T.includes("proofofwork") ? "false" : "true";
      P.hist(
        q.DEFAULT,
        "chat_req_time",
        [
          { key: "wasChatReqSync", value: ve },
          { key: "wasTurnstileSync", value: _e },
          { key: "wasProofofworkSync", value: Te },
        ],
        performance.now() - Ge,
      ),
        ht(pt(), {
          eventName: "chatgpt_web_completion_integrity_checks",
          value: T.length === 0 ? "true" : "false",
          metadata: {
            wasChatReqSync: ve,
            wasTurnstileSync: _e,
            wasProofofworkSync: Te,
          },
        }),
        Ft() && (await It());
      const y = Kt();
      if (
        (U.onCompletionStarted(_, Y),
        (A.preflightTime = performance.now() - p),
        C && pe != null)
      ) {
        const l = performance.now() - pe;
        l <= 6e4 &&
          P.hist(
            q.DEFAULT,
            "fast_conversation_last_prepare_to_convo_client",
            [
              { key: "model_id", value: Y },
              { key: "prepare_state", value: String(me) },
              {
                key: "has_conduit_token",
                value: ge != null ? "true" : "false",
              },
            ],
            l,
          );
      }
      (K ?? f?.effortMode) &&
        (P.hist(
          q.DEFAULT,
          "chatgpt_web_autoswitcher_infer_calls_per_message",
          [],
          I,
        ),
        he.set(0),
        k !== 0 && h
          ? P.hist(
              q.DEFAULT,
              "chatgpt_web_autoswitcher_prompt_length_difference",
              [],
              ft(h).length - k,
            )
          : P.count(
              q.DEFAULT,
              "chatgpt_web_autoswitcher_message_before_infer_completed",
            ),
        fe.set(0));
      const We = Lt(
        e,
        {
          conversationOrigin: f?.conversationOrigin ?? null,
          model: Y,
          completionType: _,
          prepareState: me,
          conduitToken: ge,
          threadId: ue,
          effortMode: K ?? f?.effortMode ?? void 0,
          inferRequestId: oe,
          continueFromSharedConversationId:
            f?.continuingFromSharedConversationId,
          historyDisabled: i,
          isAnonModeEnabled: o,
          parentMessageId: Ue,
          messages: Se,
          chatReq: M,
          turnstileToken: Qe,
          proofToken: Be,
          completionMetadata: m,
          contextualInfo: {
            is_dark_mode: s,
            time_since_loaded: Math.floor(performance.now() / 1e3),
            page_height: window.innerHeight,
            page_width: window.innerWidth,
            pixel_ratio: window.devicePixelRatio,
            screen_height: window.screen.height,
            screen_width: window.screen.width,
          },
          isOnboardingConversation: m?.isOnboardingConversation ?? W,
          forceParagen: y.forceParagen,
          forceParagenModel: y.forceParagen
            ? y.forceParagenModel.value
            : void 0,
          forceRateLimit: y.forceRateLimit,
          resetRateLimits: y.resetRateLimits,
          recordRendering: y.recordRendering,
          disableSystemContentToggling: y.rebaseSystemMessageContent != null,
          forceUseSearch: y.forceUseSearch ?? void 0,
          paragenStreamType: y.paragenStreamType,
          paragenCotSummaryDisplay: y.paragenCotSummaryDisplay,
          ...(C ? { f_completion: !0 } : {}),
          ...(!C && gt(e).checkGate("3257646228")
            ? { f_shadow_completion: !0 }
            : {}),
          ...R,
        },
        U,
        ae,
        D.signal,
        n,
      );
      try {
        for await (const l of We)
          l.type === "connected"
            ? A.handleStreamConnected(l)
            : l.type !== "perf_stats" &&
              l.type !== "server_ste_metadata" &&
              A.handleResponse(l);
      } catch (l) {
        mt(l) || D.signal.aborted ? A.handleAbort(l) : A.handleError(l);
      }
    },
    [n, t, S, g, e, K, i, a, C, oe, s, W, N, c, I, k, o],
  );
}
export {
  Wt as P,
  se as a,
  dn as b,
  nn as c,
  tn as d,
  ze as e,
  an as f,
  sn as g,
  Ae as h,
  ln as i,
  hn as j,
  on as k,
  rn as m,
  cn as p,
  un as s,
  Re as t,
  fn as u,
};
//# sourceMappingURL=gfnsbm99dy8f9dle.js.map
