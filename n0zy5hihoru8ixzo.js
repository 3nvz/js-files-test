import { j as n } from "./lip667d8t42poxum.js";
import { bL as o, fY as r } from "./hgyrt6j47bbfyjrt.js";
import { C as t } from "./e5qbxqli4yfx49qs.js";
const d = ({ messages: s, threadId: a }) => {
  const e = o(s);
  return e
    ? n.jsx(t, {
        turnIndex: 0,
        clientThreadId: a,
        groupedMessagesToRender: r([], e),
        allGroupedMessages: r([], e),
        allMessages: s,
        isUserTurn: !1,
        isFinalUserTurn: !1,
        isCompletionRequestInProgress: !1,
        isFeedbackEnabled: !1,
        isFinalTurn: !1,
        hasActiveRequest: !1,
        onRequestCompletion: () => {},
        renderingView: "share-modal",
      })
    : null;
};
export { d as R };
//# sourceMappingURL=n0zy5hihoru8ixzo.js.map
