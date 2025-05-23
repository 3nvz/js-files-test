import {
  r as g,
  d as z,
  j as e,
  M as l,
  a5 as q,
  f as w,
  a as R,
  u as A,
  b as W,
} from "./lip667d8t42poxum.js";
import {
  jn as H,
  jo as Q,
  an as B,
  b_ as Y,
  fw as D,
  jp as K,
  jq as Z,
  jr as V,
  js as x,
  jt as E,
  ew as $,
  ju as J,
  eu as v,
  bG as X,
} from "./bek4a02po1hapmml.js";
import {
  aj as h,
  c as k,
  m as L,
  B as P,
  k as F,
  l as G,
  b as S,
  F as ee,
} from "./hgyrt6j47bbfyjrt.js";
import { t as se } from "./jlt66buw1zajk9of.js";
import { G as te } from "./iamkd7uovamzrioo.js";
const oe = (s) =>
    g.createElement(
      "svg",
      {
        width: 24,
        height: 24,
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...s,
      },
      g.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1ZM6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75ZM6.75 6C6.75 5.58579 6.41421 5.25 6 5.25C5.58579 5.25 5.25 5.58579 5.25 6V8C5.25 8.41421 5.58579 8.75 6 8.75C6.41421 8.75 6.75 8.41421 6.75 8V6Z",
        fill: "currentColor",
      }),
    ),
  ae = 91,
  N = 100;
function re(s) {
  return s < N
    ? "bg-[#fcf6e0] text-yellow-500 dark:bg-yellow-600 dark:text-yellow-100"
    : "bg-[rgba(229,76,66,0.16)] text-[#DC2626] dark:bg-[rgba(202,58,49,0.16)] dark:text-[#DC2626]";
}
function U(s) {
  return Q() && s != null && s >= ae;
}
function ne({
  memoryFullPct: s,
  className: n,
  children: a,
  showInfoLabel: r,
  onManageMemories: i,
}) {
  return U(s)
    ? e.jsx("div", {
        className: k(
          "border-token-border-default rounded-lg border p-1 text-sm",
          n,
        ),
        children: e.jsxs(q.div, {
          className: k(
            "flex items-center overflow-hidden rounded-sm px-2 py-1.5 whitespace-nowrap",
            re(s),
          ),
          initial: { width: 0 },
          animate: { width: `${s}%` },
          transition: { duration: 0.5 },
          children: [
            e.jsx(l, {
              id: "6D2etG",
              defaultMessage: "{memoryFullPct}% full",
              values: { memoryFullPct: s },
            }),
            a,
            r &&
              e.jsx(B, {
                interactive: !0,
                label:
                  s < N
                    ? e.jsx("div", {
                        className: "whitespace-normal",
                        children: e.jsx(l, {
                          id: "gxY4wi",
                          defaultMessage:
                            "ChatGPT's almost out of space for new saved memories. <memoryModalLink>Manage saved memories</memoryModalLink> to create more space.",
                          values: {
                            memoryModalLink: (o) =>
                              e.jsx("a", {
                                href: "#",
                                className: "cursor-pointer underline",
                                onClick: (m) => {
                                  m.preventDefault(), i?.();
                                },
                                children: o,
                              }),
                          },
                        }),
                      })
                    : e.jsx("div", {
                        className: "whitespace-normal",
                        children: e.jsx(l, {
                          id: "1JxMf3",
                          defaultMessage:
                            "ChatGPT's out of space for saved memories. <memoryModalLink>Manage saved memories</memoryModalLink> to create more space.",
                          values: {
                            memoryModalLink: (o) =>
                              e.jsx("a", {
                                href: "#",
                                className: "cursor-pointer underline",
                                onClick: (m) => {
                                  m.preventDefault(), i?.();
                                },
                                children: o,
                              }),
                          },
                        }),
                      }),
                children: e.jsx(oe, {
                  className: "icon-sm text-token-text-secondary ms-1",
                }),
              }),
          ],
        }),
      })
    : null;
}
function ie({ memoryFullPct: s, className: n }) {
  const a = U(s),
    r = H(),
    i = z();
  if (!a) return null;
  r &&
    h.logEventWithStatsig(
      "Memory Full Warning Upsell Shown",
      "chatgpt_memory_full_warning_upsell_shown_memory_modal",
    );
  const t = e.jsx("a", {
    href: "#",
    className: "cursor-pointer underline",
    onClick: (o) => {
      o.preventDefault(),
        h.logEventWithStatsig(
          "Memory Full Warning Upsell Clicked",
          "chatgpt_memory_full_warning_upsell_clicked_memory_modal",
        ),
        Y(i, "MemoryUsageWarning Memory Modal Upsell");
    },
    children: e.jsx(l, { id: "djYoOr", defaultMessage: "ChatGPT Plus" }),
  });
  return e.jsxs("div", {
    className: k("flex flex-col gap-2", n),
    children: [
      e.jsx(ne, { memoryFullPct: s }),
      e.jsx("div", {
        className: "text-token-text-secondary ps-3 text-sm",
        children:
          s < N
            ? r
              ? e.jsx(l, {
                  id: "2Gnp5W",
                  defaultMessage:
                    "<strong>Almost full.</strong> Once full, new memories won't be saved. You can remove existing memories to make room, or get 4x more space with {upsellLink}.",
                  values: {
                    strong: (o) => e.jsx("strong", { children: o }),
                    upsellLink: t,
                  },
                })
              : e.jsx(l, {
                  id: "SnInO0",
                  defaultMessage:
                    "<strong>Almost full.</strong> Once full, new memories won't be saved. You can remove existing memories to make room.",
                  values: { strong: (o) => e.jsx("strong", { children: o }) },
                })
            : r
              ? e.jsx(l, {
                  id: "VfmXw+",
                  defaultMessage:
                    "<strong>You’re out of space.</strong> Remove existing memories to make room for ChatGPT to save new memories, or get 4x more space with {upsellLink}.",
                  values: {
                    strong: (o) => e.jsx("strong", { children: o }),
                    upsellLink: t,
                  },
                })
              : e.jsx(l, {
                  id: "fSy74S",
                  defaultMessage:
                    "<strong>You’re out of space.</strong> Remove existing memories to make room for ChatGPT to save new memories.",
                  values: { strong: (o) => e.jsx("strong", { children: o }) },
                }),
      }),
    ],
  });
}
function T({ description: s, onClose: n, onConfirm: a }) {
  const r = w();
  return e.jsx(F, {
    testId: "modal-confirm-reset-memory",
    isOpen: !0,
    onClose: n,
    type: "success",
    title: r.formatMessage({
      id: "MemoriesModal.resetModalTitle",
      defaultMessage: "Are you sure?",
    }),
    description: s,
    primaryButton: e.jsx(G.Button, {
      title: r.formatMessage({
        id: "MemoriesModal.resetModalConfirm",
        defaultMessage: "Clear memory",
      }),
      color: "danger",
      onClick: a,
      "data-testid": "confirm-reset-memories-button",
    }),
    secondaryButton: e.jsx(G.Button, {
      title: r.formatMessage({
        id: "MemoriesModal.resetModalCancel",
        defaultMessage: "Cancel",
      }),
      color: "secondary",
      onClick: n,
    }),
  });
}
function le({ onReset: s, gizmoId: n, memoryName: a }) {
  const [r, i] = g.useState(!1),
    t = w(),
    o = L(),
    m = D(),
    u = async () => {
      h.logEvent("Memory Manage Reset Button Confirmed");
      try {
        await S.safeDelete("/settings/clear_account_user_memory", {
          requestBody: { gizmo_id: n },
        }),
          o.success(
            t.formatMessage({
              id: "ResetMemoriesButton.resetSuccess",
              defaultMessage: "Memory cleared.",
            }),
          ),
          s?.(),
          i(!1);
      } catch {
        o.danger(
          t.formatMessage({
            id: "ResetMemoriesButton.resetFailed",
            defaultMessage: "Failed to clear memory.",
          }),
        );
      }
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(P, {
        color: "danger-outline",
        onClick: () => {
          h.logEvent("Memory Manage Reset Button Clicked"), i(!0);
        },
        "data-testid": "reset-memories-button",
        children: n
          ? e.jsx(l, {
              id: "ResetMemoriesButton.resetGizmo",
              defaultMessage: "Clear this GPT's memory",
            })
          : e.jsx(l, {
              id: "ResetMemoriesButton.resetChatGPT",
              defaultMessage: "Delete all",
            }),
      }),
      r &&
        (m
          ? e.jsx(T, {
              description: t.formatMessage(
                {
                  id: "MemoriesModal.resetGizmoModalDescriptionUpdated",
                  defaultMessage:
                    "Deleting your saved memories means {name} may not remember this information going forward. To fully remove this information from {name}'s memory, please delete any related chats. <link>Learn more</link>",
                },
                {
                  name: a,
                  link: (c) =>
                    e.jsx("a", {
                      className: "underline",
                      href: "https://help.openai.com/en/articles/8983136-what-is-memory",
                      children: c,
                    }),
                },
              ),
              onClose: () => i(!1),
              onConfirm: u,
            })
          : e.jsx(T, {
              description: t.formatMessage(
                {
                  id: "MemoriesModal.resetGizmoModalDescription",
                  defaultMessage:
                    "{name} will forget everything it has remembered from your chats. This cannot be undone.",
                },
                { name: a },
              ),
              onClose: () => i(!1),
              onConfirm: u,
            })),
    ],
  });
}
function de({ gizmo: s, memory: n }) {
  const a = w(),
    r = L(),
    i = R(),
    { mutate: t, isPending: o } = W({
      mutationFn: async (f) => {
        const { success: y } = await S.safeDelete("/memories/{memory_id}", {
          parameters: { path: { memory_id: f } },
          requestBody: { gizmo_id: s?.id },
        });
        if (!y) throw new Error("An error occurred while deleting the memory");
      },
      onSettled: () => {
        i.invalidateQueries({ queryKey: E(s?.id) });
      },
      onError: () => {
        r.danger(
          a.formatMessage({
            id: "MemoriesModal.deleteFailed",
            defaultMessage: "Failed to forget memory",
          }),
          { id: "memoryDeleteFailed" },
        );
      },
    }),
    [m, u] = g.useState(!1),
    c = a.formatMessage({ id: "N0czuB", defaultMessage: "Remove" });
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs(x.Row, {
        disabled: o,
        children: [
          e.jsx(x.Cell, {
            children: e.jsx("div", {
              className: "py-2 whitespace-pre-wrap",
              children: n.content,
            }),
          }),
          e.jsx(x.Cell, {
            textAlign: "right",
            children: e.jsx(x.Actions, {
              children: e.jsx("button", {
                onClick: () => {
                  h.logEvent("Memory Manage Modal Memory Delete Clicked"),
                    u(!0);
                },
                "aria-label": c,
                className:
                  "text-token-text-tertiary hover:text-token-text-secondary",
                children: e.jsx(B, {
                  className: "leading-none",
                  label: c,
                  side: "top",
                  children: e.jsx($, { className: "icon-sm" }),
                }),
              }),
            }),
          }),
        ],
      }),
      m &&
        e.jsx(J, {
          isOpen: !0,
          primaryButtonColor: "danger",
          title: c,
          confirmText: a.formatMessage({
            id: "fCn0ar",
            defaultMessage: "Forget",
          }),
          onConfirm: () => {
            h.logEvent("Memory Manage Modal Memory Delete Confirmed"),
              t(n.id),
              u(!1);
          },
          onClose: () => {
            u(!1);
          },
          children: e.jsx(l, {
            id: "j2cZHW",
            defaultMessage:
              'Remove "{title}" from {name}’s saved memories. This can’t be undone. <link>Learn more</link>',
            values: {
              name: s?.name ?? "ChatGPT",
              title: e.jsx("strong", {
                children: se(n.content, { length: 130, omission: "..." }),
              }),
              link: (f) =>
                e.jsx("a", {
                  href: "https://help.openai.com/en/articles/8590148-memory-faq",
                  target: "_blank",
                  className: "underline",
                  rel: "noreferrer",
                  children: f,
                }),
            },
          }),
        }),
    ],
  });
}
function me({ selectedGizmoId: s, onSelect: n, items: a }) {
  const r = a.find((t) => t.id === s);
  function i(t) {
    return e.jsx(te, {
      isFirstParty: t.id === void 0,
      src: t.iconUrl ?? null,
      className: "icon-md",
    });
  }
  return e.jsx("div", {
    className: "border-token-border-medium mb-2 inline-flex rounded-md border",
    children: e.jsxs(v.Root, {
      children: [
        e.jsx(v.Trigger, {
          children: e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              r
                ? e.jsxs(e.Fragment, {
                    children: [
                      i(r),
                      e.jsx("span", {
                        className: "text-token-text-primary",
                        children: r.name,
                      }),
                    ],
                  })
                : e.jsx(l, {
                    id: "MemoriesModal.unknownGizmo",
                    defaultMessage: "Unknown GPT",
                  }),
              e.jsx(X, { className: "icon-sm text-token-text-tertiary" }),
            ],
          }),
        }),
        e.jsx(v.Portal, {
          children: e.jsx(v.Content, {
            children: a.map((t) =>
              e.jsxs(
                v.Item,
                {
                  className: "flex items-center gap-3",
                  onClick: () => {
                    n(t.id);
                  },
                  children: [i(t), t.name],
                },
                t.id,
              ),
            ),
          }),
        }),
      ],
    }),
  });
}
const b = ee.div`flex h-full items-center justify-center pb-8 text-sm text-token-text-tertiary rounded-lg border border-token-border-default`;
function ce({ onClose: s, initialGizmoId: n }) {
  const a = w(),
    r = R(),
    i = K(),
    [t, o] = g.useState(n),
    m = Z(),
    u = D();
  g.useEffect(() => {
    h.logEvent("Memory Modal Shown");
  }, []);
  const { data: c, isLoading: f, isError: y, refetch: _ } = V(t, !0, i),
    M = c?.memories,
    { data: O, refetch: I } = A({
      queryKey: ["memory_gizmos"],
      queryFn: () => S.safeGet("/memories/gizmos"),
      refetchOnMount: "always",
    }),
    C = [
      { id: void 0, name: "ChatGPT", iconUrl: null },
      ...(O?.items.map(({ gizmo: d }) => ({
        id: d.id,
        name: d.display.name,
        iconUrl: d.display.profile_picture_url ?? null,
      })) ?? []),
    ],
    p = C.find((d) => d.id === t);
  g.useEffect(() => {
    !f && !y && t !== void 0 && (!M || M.length === 0) && o(void 0);
  }, [f, y, M, t]);
  let j;
  return (
    f
      ? (j = e.jsx(b, {
          children: e.jsx(l, {
            id: "MemoriesModal.loading",
            defaultMessage: "Loading...",
          }),
        }))
      : y
        ? (j = e.jsx(b, {
            children: e.jsxs("div", {
              className: "max-w-sm text-center",
              children: [
                e.jsx("div", {
                  className: "mb-4 text-red-500",
                  children: e.jsx(l, {
                    id: "MemoriesModal.somethingWentWrong",
                    defaultMessage: "Something went wrong...",
                  }),
                }),
                e.jsx("div", {
                  children: e.jsx(P, {
                    color: "secondary",
                    onClick: () => {
                      _();
                    },
                    children: e.jsx(l, {
                      id: "MemoriesModal.retry",
                      defaultMessage: "Retry",
                    }),
                  }),
                }),
              ],
            }),
          }))
        : !M || M.length === 0
          ? (j = e.jsx(b, {
              children: e.jsx("div", {
                className: "max-w-sm text-center",
                children: i
                  ? e.jsx(l, {
                      id: "MemoriesModal.noMemories.1",
                      defaultMessage:
                        "As you chat with {name}, the details and preferences it saves will be shown here.",
                      values: { name: p?.name ?? "ChatGPT" },
                    })
                  : e.jsx(l, {
                      id: "MemoriesModal.noMemoriesAndDisabled",
                      defaultMessage:
                        "Memory is disabled. ChatGPT won't use or save memories.",
                    }),
              }),
            }))
          : (j = e.jsx(x.Root, {
              className: "h-full",
              size: "compact",
              bordered: !0,
              children: e.jsx(x.Body, {
                children: M.map((d) =>
                  e.jsx(
                    de,
                    {
                      gizmo: p ? { id: p.id, name: p.name } : void 0,
                      memory: d,
                    },
                    d.id,
                  ),
                ),
              }),
            })),
    e.jsxs(F, {
      testId: "modal-memories",
      isOpen: !0,
      onClose: s,
      size: "custom",
      className: "max-w-5xl",
      type: "success",
      title: a.formatMessage({
        id: "MemoriesModal.title",
        defaultMessage: "Saved memories",
      }),
      description: e.jsx("div", {
        className: "text-token-text-secondary",
        children: u
          ? a.formatMessage(
              {
                id: "MemoriesModal.description",
                defaultMessage:
                  "ChatGPT tries to remember most of your chats, but it may forget things over time. Saved memories are never forgotten. <link>Learn more</link>",
              },
              {
                link: (d) =>
                  e.jsx("a", {
                    href: "https://help.openai.com/en/articles/8983136-what-is-memory",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "underline",
                    children: d,
                  }),
              },
            )
          : a.formatMessage(
              {
                id: "MemoriesModalFree.description",
                defaultMessage:
                  "ChatGPT remembers useful details about you and your preferences so it can be more helpful. <link>Learn more</link>",
              },
              {
                link: (d) =>
                  e.jsx("a", {
                    href: "https://help.openai.com/en/articles/8983136-what-is-memory",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "underline",
                    children: d,
                  }),
              },
            ),
      }),
      showCloseButton: !0,
      children: [
        m &&
          C.length > 1 &&
          e.jsx("div", {
            className: "mb-4",
            children: e.jsx(me, {
              selectedGizmoId: t,
              items: C,
              onSelect: (d) => {
                r.invalidateQueries({ queryKey: E(d) }), o(d);
              },
            }),
          }),
        e.jsx(ie, { memoryFullPct: c?.memoryFullPct, className: "mb-5" }),
        e.jsx("div", { className: "h-[24rem]", children: j }),
        e.jsx("div", {
          className: "mt-5 flex justify-end",
          children: e.jsx(le, {
            onReset: () => {
              _(), I(), t && o(void 0);
            },
            gizmoId: t,
            memoryName: p?.name ?? "ChatGPT",
          }),
        }),
      ],
    })
  );
}
const xe = Object.freeze(
  Object.defineProperty({ __proto__: null, default: ce }, Symbol.toStringTag, {
    value: "Module",
  }),
);
export { ne as M, ce as a, xe as b, U as u };
//# sourceMappingURL=f9v02mlso09nmzyv.js.map
