import {
  aI as l,
  b$ as w,
  af as M,
  aL as y,
  fb as C,
  ah as O,
  eS as _,
  fW as S,
  fX as x,
  cX as k,
  aO as A,
  ag as v,
  aa as E,
} from "./hgyrt6j47bbfyjrt.js";
import { u as L } from "./gfnsbm99dy8f9dle.js";
import {
  b8 as g,
  aZ as u,
  y as P,
  b9 as T,
  ba as N,
  bb as U,
  U as F,
} from "./bek4a02po1hapmml.js";
import { g as I, r as d, f as R, h as j } from "./lip667d8t42poxum.js";
class b extends w()(() => ({ isOpen: !0 })) {
  setIsOpen = (o) => {
    this.setState({ isOpen: o });
  };
}
function K() {
  const { eligible: e, isLoading: o, markAsViewed: a } = g(u.NewOnboardingFlow),
    { layer: s } = l("109457", { shouldLogExposure: !1 }),
    t = b.useStore(),
    n = b.useState((r) => r.isOpen);
  return {
    isOpen: e && n && s.get("is_guided_onboarding", !1),
    isLoading: o,
    setIsOpen: (r) => t.setIsOpen(r),
    markAsViewed: a,
  };
}
const V = I({
  hi: { id: "new_user_onboarding.hi", defaultMessage: "Hi" },
  hiThere: { id: "new_user_onboarding.hi_there", defaultMessage: "Hi there" },
  tryUploadingAFile: {
    defaultMessage: "Try uploading a file",
    id: "chatgpt.new-onboarding.try-uploading-a-file",
  },
  uploadFileExample: {
    defaultMessage: "ChatGPT can summarize and analyze your files or images.",
    id: "chatgpt.new-onboarding.upload-file-exp",
  },
  school: { defaultMessage: "School", id: "chatgpt.new-onboarding.school" },
  schoolPrompt: {
    defaultMessage: "I’m trying to learn and do better in school.",
    id: "chatgpt.new-onboarding.school-prompt",
  },
  work: { defaultMessage: "Work", id: "chatgpt.new-onboarding.work" },
  workPrompt: {
    defaultMessage: "I'm here to learn and grow in my work.",
    id: "chatgpt.new-onboarding.work-prompt",
  },
  personalTasks: {
    defaultMessage: "Personal tasks",
    id: "chatgpt.new-onboarding.personal-tasks",
  },
  personalTasksPrompt: {
    defaultMessage: "I'm here for my personal tasks",
    id: "chatgpt.new-onboarding.personal-tasks-prompt",
  },
  funAndEntertainment: {
    defaultMessage: "Fun and entertainment",
    id: "chatgpt.new-onboarding.fun-and-entertainment",
  },
  funAndEntertainmentPrompt: {
    defaultMessage: "I'm here to explore fun ideas and relax.",
    id: "chatgpt.new-onboarding.fun-and-entertainment-prompt",
  },
  other: { defaultMessage: "Other", id: "chatgpt.new-onboarding.other" },
  justCurious: {
    defaultMessage: "Just curious",
    id: "chatgpt.new-onboarding.just-curious",
  },
  justCuriousPrompt: {
    defaultMessage: "I'm just curious, exploring what you can do.",
    id: "chatgpt.new-onboarding.just-curious-prompt",
  },
  tryAnExample: {
    defaultMessage:
      "Try an example below or send any message in the message box below.",
    id: "chatgpt.new-onboarding.try-an-example",
  },
});
function W() {
  const {
    eligible: e,
    isLoading: o,
    markAsViewed: a,
  } = g(u.NewOnboardingConvo);
  return { isEligible: e && !o, markAsViewed: a };
}
function X(e) {
  const o = d.useContext(O),
    a = _(o),
    s = P((h) => h.onboardingConvoState || void 0),
    { isEligible: t, markAsViewed: n } = W(),
    r = H({ clientThreadId: e }),
    { layer: p } = l("109457"),
    i = R(),
    f = T(),
    c = j(),
    m = f || N(c) || U(c);
  d.useEffect(() => {
    t &&
      !s &&
      (i.locale === S || i.messages !== x) &&
      !a &&
      !m &&
      p.get("onboarding_style", "") === "CONVO" &&
      (F.setOnboardingConvoState({ onboardingConvoClientThreadId: e }),
      n(),
      r({
        eventSource: "url",
        stepPrompt: i.formatMessage(V.hi),
        messageMetadata: { is_visually_hidden_from_conversation: !0 },
        authorMetadata: { real_author: k.Onboarding },
      }),
      A.logEvent("chatgpt_convo_onboarding_started"));
  }, [t, n, r, s, i, i.locale, i.messages, e, p, a, m]);
}
const H = ({ clientThreadId: e }) => {
  const o = L(e);
  return d.useCallback(
    ({ stepPrompt: a, messageMetadata: s, authorMetadata: t, ...n }) => {
      o({
        ...n,
        promptMessage: C(a, s ?? void 0, t ?? void 0),
        completionMetadata: {
          isOnboardingConversation: !0,
          conversationMode: { kind: y.PrimaryAssistant },
          systemHints: s?.onboarding?.system_hints,
        },
      });
    },
    [o],
  );
};
function Z(e) {
  const o = M(
      e,
      (n) =>
        v.findNode(n, (r) => r.message.author.role === E.User)?.message.metadata
          ?.onboarding,
    ),
    {
      eligible: a,
      isLoading: s,
      markAsViewed: t,
    } = g(u.hasSeenFilePickerNuxTooltip);
  return {
    isEligible: o?.triggered_tools?.includes("file_upload") && a && !s,
    markAsViewed: t,
  };
}
function J() {
  const { layer: e } = l("109457", { shouldLogExposure: !1 });
  return e.get("onboarding_show_followups", !1);
}
export { H as a, K as b, X as c, J as d, V as m, Z as u };
//# sourceMappingURL=j5maet6kh5o0bu61.js.map
