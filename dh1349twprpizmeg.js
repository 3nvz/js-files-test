import {
  r as g,
  j as r,
  M as C,
  u as E,
  h as Q,
  d as W,
  f as m,
  a as X,
  c as V,
  b as Y,
} from "./lip667d8t42poxum.js";
import {
  aj as Z,
  q as d,
  am as $,
  b as p,
  ao as k,
  m as _,
  ac as J,
  g as v,
  s as ee,
} from "./hgyrt6j47bbfyjrt.js";
import {
  f7 as D,
  cw as te,
  g1 as ne,
  al as se,
  g2 as oe,
  g3 as P,
  g4 as ae,
  g5 as re,
  g6 as ce,
  k as ie,
  g7 as R,
  cR as le,
  g8 as ue,
  g9 as de,
  ga as ge,
  gb as q,
  gc as F,
  gd as fe,
  ge as he,
  gf as Ce,
} from "./bek4a02po1hapmml.js";
import { b as me } from "./jy5dxk25zw6hpymq.js";
const pe = ({ date: t }) => {
    const [e, n] = g.useState(Date.now());
    g.useEffect(() => {
      const o = setInterval(() => {
        n(Date.now());
      }, 6e4);
      return () => clearInterval(o);
    }, []);
    const s = () => {
      const o = new Date(t).getTime(),
        a = Math.floor((e - o) / 1e3);
      return a < 60
        ? r.jsx(C, {
            id: "3Is9g3",
            defaultMessage: "Last updated a few seconds ago",
          })
        : a < 3600
          ? r.jsx(C, {
              id: "hXLIc6",
              defaultMessage: "Last updated a few minutes ago",
            })
          : r.jsx(C, {
              id: "ZV7Qx7",
              defaultMessage: "Last updated a few hours ago",
            });
    };
    return r.jsx("span", { children: s() });
  },
  G = () =>
    E({
      queryKey: ["user_connection_status"],
      queryFn: ie.user_connection_status,
    });
function Re() {
  const { data: t, isLoading: e, refetch: n, dataUpdatedAt: s } = G();
  return (
    g.useEffect(() => {
      Z.logEventWithStatsig(
        "Contextual Answers User Settings Modal Shown",
        "chatgpt_contextual_answers_user_settings_modal_shown",
      );
    }, []),
    r.jsxs("div", {
      children: [
        r.jsxs(D, {
          children: [
            r.jsxs("div", {
              className:
                "text-md text-token-text-primary mb-1 flex items-center gap-2 font-medium",
              children: [
                r.jsx(te, { class: "icon-md" }),
                r.jsx("div", {
                  children: r.jsx(C, {
                    id: "YxAwHl",
                    defaultMessage: "Internal knowledge",
                  }),
                }),
                r.jsx(ne, {}),
              ],
            }),
            r.jsxs("div", {
              children: [
                r.jsx("p", {
                  className: "text-token-text-secondary",
                  children: r.jsx(C, {
                    id: "b5cZ0X",
                    defaultMessage:
                      "Connect these data sources so ChatGPT can surface relevant, personalized information — based on what you’re authorized to view. {learnMore}",
                    values: {
                      learnMore: r.jsx(se, {
                        href: P,
                        className: "underline",
                        onClick: () =>
                          oe({ link: P, location: "user_settings" }),
                        children: r.jsx(C, {
                          id: "N1i4rw",
                          defaultMessage: "Learn more",
                        }),
                      }),
                    },
                  }),
                }),
                r.jsx("p", {
                  className: "text-token-text-secondary font-medium",
                  children: r.jsx(pe, { date: new Date(s) }),
                }),
              ],
            }),
          ],
        }),
        r.jsx("div", {
          className: "border-b",
          children: e
            ? r.jsx("div", {
                className: "p-2",
                children: r.jsx(me, { lines: 4 }),
              })
            : t?.connection_statuses.length
              ? r.jsx("div", {
                  children: t.connection_statuses.map((o) =>
                    r.jsx(
                      D,
                      {
                        children: r.jsx("div", {
                          className: "pt-3 pb-1",
                          children: r.jsx(ae, {
                            icon: r.jsx("img", {
                              src: o.connection_display_info.icon_url ?? "",
                              alt: o.connection_display_info.display_name,
                              className: "icon-lg",
                            }),
                            title: o.connection_display_info.display_name,
                            statusIndicator: r.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                r.jsx(re, {
                                  connection: o,
                                  location: "user_settings",
                                }),
                                r.jsx(ce, { connection: o, refetch: n }),
                              ],
                            }),
                          }),
                        }),
                      },
                      o.user_connection_details.connection_instance_id,
                    ),
                  ),
                })
              : r.jsx("p", {
                  className: "text-token-text-secondary my-2",
                  children: r.jsx(C, {
                    id: "nzXh59",
                    defaultMessage: "No connections found.",
                  }),
                }),
        }),
      ],
    })
  );
}
const Te = R[d.GDRIVE_ACTION_CONNECTOR],
  Ae = () => {
    const t = W();
    return (e) => {
      const n = window.location.hash,
        [s, o] = n.split("?"),
        a = new URLSearchParams(o);
      e ? a.set("connector", e) : a.delete("connector");
      const c = a.toString() ? `${s}?${a.toString()}` : s;
      t(c, { replace: !0 });
    };
  },
  be = () => {
    const { hash: t } = Q(),
      e = t.indexOf("?");
    if (e === -1) return null;
    const n = t.substring(e + 1);
    return new URLSearchParams(n).get("connector");
  },
  _e = (t) =>
    t.supported_auth.some((e) => e.type === "OAUTH") ? "OAUTH" : "NONE",
  Oe = (t) =>
    p.safePost("/aip/connectors/links/noauth", {
      requestBody: {
        connector_id: t.id,
        name: t.name,
        action_names: t.actions.map((e) => e.name),
      },
    }),
  Ne = async (t, e) => {
    const n = de[t.id],
      s = {
        connectorId: t.id,
        name: t.name,
        actionNames: t.actions.map((o) => o.name),
        oauthClientId: ge(n, e),
        oauthClientScopes: null,
      };
    await q(F, s, `#settings/ConnectorSettings?connector=${t.id}`);
  },
  Ee = async (t, e) => {
    switch (_e(t)) {
      case "OAUTH":
        return await Ne(t, e), null;
      case "NONE":
        return await Oe(t);
    }
  },
  je = () => {
    const t = le(),
      e = G(),
      n = g.useMemo(
        () =>
          e.data?.connection_statuses.filter((u) =>
            ["google_drive_oauth", "google_drive_dwd"].includes(
              u.user_connection_details.knowledge_connector_type,
            ),
          ),
        [e.data],
      ),
      s = t && !!n?.length,
      o = ue(),
      a = o.connectorConfig.get($.GDRIVE),
      c = o.isGdriveEnabled && !!a;
    return {
      isLoading: e.isLoading || o.isLoading,
      fileUploadConfig: c ? a : null,
      internalKnowledgeConfigs: s ? n : null,
    };
  };
function Se() {
  const t = J("3747383021").config,
    e = v(),
    n = ee(e, "3544641259");
  return {
    [d.GITHUB_CONNECTOR]: n && t.get("github", !1),
    [d.GDRIVE_ACTION_CONNECTOR]: n && t.get("google_drive", !1),
    [d.DROPBOX_CONNECTOR]: n && t.get("dropbox", !1),
    [d.LINEAR_CONNECTOR]: n && t.get("linear", !1),
    [d.HUBSPOT_CONNECTOR]: n && t.get("hubspot", !1),
    [d.SHAREPOINT_CONNECTOR]: n && t.get("sharepoint", !1),
    [d.GCAL_CONNECTOR]: n && t.get("google_calendar", !1),
    [d.GMAIL_CONNECTOR]: n && t.get("gmail", !1),
    [d.GOOGLE_CONTACTS_CONNECTOR]: n && t.get("google_contacts", !1),
    [d.TEAMS_CONNECTOR]: n && t.get("teams", !1),
    [d.OUTLOOK_EMAIL_CONNECTOR]: n && t.get("outlook_email", !1),
    [d.OUTLOOK_CALENDAR_CONNECTOR]: n && t.get("outlook_calendar", !1),
    [d.BOX_CONNECTOR]: n && t.get("box", !1),
    [d.INTERCOM_CONNECTOR]: n && t.get("intercom", !1),
  };
}
function ye(t) {
  const e = m(),
    s = k()?.getWorkspaceId(),
    o = _(),
    {
      data: a,
      isLoading: c,
      error: u,
      refetch: l,
    } = E({
      queryKey: ["fetchConnectorWorkspacePermissions", s],
      queryFn: async () => {
        if (!s) return !0;
        try {
          const { enabled: i } = await p.safeGet(
            "/accounts/{account_id}/connectors/{connector_id}/workspace_permissions",
            { parameters: { path: { account_id: s, connector_id: t } } },
          );
          return i;
        } catch (i) {
          throw (
            (o.danger(
              e.formatMessage({
                id: "GZxiZ3",
                defaultMessage:
                  "Error fetching connector workspace permissions",
              }),
            ),
            i)
          );
        }
      },
    });
  return { enabled: a, isLoading: c, error: u, refetch: l };
}
function Ue() {
  return ye(R[d.GITHUB_CONNECTOR]);
}
function B() {
  const t = m(),
    e = k(),
    n = _(),
    {
      data: s,
      isLoading: o,
      isFetching: a,
      error: c,
      refetch: u,
    } = E({
      queryKey: ["fetchPlatformConnectorData", e?.normalizedAccountUserId],
      queryFn: async () => {
        if (!e || !e.normalizedAccountUserId) return [];
        try {
          return (
            await p.safePost("/aip/connectors/list_accessible", {
              requestBody: {
                principals: [{ type: "USER", id: e.normalizedAccountUserId }],
              },
            })
          ).connectors;
        } catch (i) {
          throw (
            (n.danger(
              t.formatMessage({
                id: "F+mY2E",
                defaultMessage: "Error fetching connectors",
              }),
              { id: "fetch-connectors-error", duration: 3, hasCloseButton: !0 },
            ),
            i)
          );
        }
      },
      enabled: !!e,
    });
  return {
    platformConnectors: g.useMemo(() => new Map(s?.map((i) => [i.id, i])), [s]),
    isLoading: o,
    isFetching: a,
    error: c,
    refetch: u,
  };
}
function De(t = !0) {
  const e = m(),
    n = _(),
    {
      data: s,
      isLoading: o,
      isFetching: a,
      error: c,
      refetch: u,
    } = E({
      queryKey: ["fetchFirstPartyConnectors"],
      queryFn: async () => {
        try {
          return (await p.safeGet("/aip/connectors/first_party")).connectors;
        } catch {
          return (
            n.danger(
              e.formatMessage({
                id: "F+mY2E",
                defaultMessage: "Error fetching connectors",
              }),
              {
                id: "fetch-first-party-connectors-error",
                duration: 3,
                hasCloseButton: !0,
              },
            ),
            []
          );
        }
      },
      enabled: t,
    });
  return { connectors: s ?? [], isLoading: o || a, error: c, refetch: u };
}
function z() {
  const t = m(),
    e = k(),
    n = _(),
    {
      data: s,
      isFetching: o,
      error: a,
      refetch: c,
    } = E({
      queryKey: ["fetchConnectorLinkData", e?.normalizedAccountUserId],
      placeholderData: () => new Map(),
      queryFn: async () => {
        if (!e || !e.normalizedAccountUserId) return new Map();
        try {
          const l = await p.safePost("/aip/connectors/links/list_accessible", {
            requestBody: {
              principals: [{ type: "USER", id: e.normalizedAccountUserId }],
            },
          });
          return Map.groupBy(l.links, ({ connector_id: i }) => i);
        } catch (l) {
          throw (
            (n.danger(
              t.formatMessage({
                id: "EgrzHa",
                defaultMessage: "Error fetching connectors connections",
              }),
              {
                id: "fetch-connector-links-error",
                duration: 3,
                hasCloseButton: !0,
              },
            ),
            l)
          );
        }
      },
    });
  return {
    connectorLinks: g.useMemo(() => s ?? new Map(), [s]),
    isLoading: o,
    error: a,
    refetch: c,
  };
}
function xe(t, e) {
  const n = m(),
    s = _(),
    {
      data: o,
      isLoading: a,
      error: c,
      refetch: u,
    } = E({
      queryKey: ["connector-client-data", t],
      queryFn: async () => {
        const l = await p.safeGet("/aip/connectors/oauth_clients", {
          parameters: { query: { service: e } },
        });
        return l.oauth_clients
          ? l.oauth_clients
          : (s.danger(
              n.formatMessage({
                id: "OfpT7B",
                defaultMessage: "Request error fetching oauth clients",
              }),
              {
                id: "fetch-oauth-clients-error",
                duration: 3,
                hasCloseButton: !0,
              },
            ),
            []);
      },
    });
  return { oAuthClients: o, isLoading: a, error: c, refetch: u };
}
function Pe(t, e, n = "/", s, o) {
  const a = fe(),
    { platformConnectors: c, isLoading: u, error: l, refetch: i } = B(),
    { connectorLinks: f, isLoading: O, error: y, refetch: h } = z(),
    { oAuthClients: N, isLoading: K, error: H, refetch: T } = xe(t, e),
    A = we(),
    w = g.useCallback(() => {
      i(), h(), T();
    }, [i, h, T]),
    x = R[t],
    I = c.get(x),
    b = f.has(x),
    M = f.get(x)?.[0]?.id,
    j = g.useCallback(() => {
      M &&
        A(M, () => {
          w();
        });
    }, [A, w, M]),
    S = l ?? y ?? H,
    L = u || O || K,
    U = g.useCallback(() => {
      if (!L) {
        if (!I) {
          s?.();
          return;
        }
        if (!N?.length) {
          o?.();
          return;
        }
        q(
          F,
          {
            oauthClientId: N[0].id,
            oauthClientScopes: N[0].scopes,
            name: I.name,
            actionNames: he[t],
            connectorId: x,
          },
          n,
          a,
        );
      }
    }, [L, I, N, t, x, n, a, s, o]);
  return g.useMemo(
    () => ({
      isLoading: L,
      isConnected: b,
      connect: U,
      error: S,
      refetch: w,
      handleDisconnect: j,
    }),
    [L, b, U, S, w, j],
  );
}
function ve(t) {
  "use forget";
  const e = V.c(15),
    { onSuccess: n } = t,
    s = m(),
    o = v(),
    a = _(),
    { refetch: c } = B(),
    { refetch: u } = z();
  let l;
  e[0] !== o
    ? ((l = async (y) => {
        const { connector: h } = await p.safePost("/aip/connectors/mcp", {
            requestBody: {
              ...y,
              auth_request: { supported_auth: [], oauth_client_params: null },
            },
          }),
          N = await Ee(h, o);
        return { connector: h, link: N };
      }),
      (e[0] = o),
      (e[1] = l))
    : (l = e[1]);
  let i;
  e[2] !== s || e[3] !== n || e[4] !== c || e[5] !== u || e[6] !== a
    ? ((i = (y) => {
        const { connector: h } = y;
        a.success(
          s.formatMessage(
            {
              id: "lQ8QJw",
              defaultMessage: "{connectorName} is now connected",
            },
            { connectorName: h.name },
          ),
        ),
          c(),
          u(),
          n?.();
      }),
      (e[2] = s),
      (e[3] = n),
      (e[4] = c),
      (e[5] = u),
      (e[6] = a),
      (e[7] = i))
    : (i = e[7]);
  let f;
  e[8] !== s || e[9] !== a
    ? ((f = () => {
        a.danger(
          s.formatMessage({
            id: "rftuYU",
            defaultMessage: "Error creating custom connector",
          }),
        );
      }),
      (e[8] = s),
      (e[9] = a),
      (e[10] = f))
    : (f = e[10]);
  let O;
  return (
    e[11] !== l || e[12] !== i || e[13] !== f
      ? ((O = { mutationFn: l, onSuccess: i, onError: f }),
        (e[11] = l),
        (e[12] = i),
        (e[13] = f),
        (e[14] = O))
      : (O = e[14]),
    Y(O)
  );
}
function we() {
  const t = m(),
    e = _(),
    n = k(),
    s = X();
  return async (a, c) => {
    try {
      await Ce(a),
        s.invalidateQueries({
          queryKey: ["fetchConnectorLinkData", n?.normalizedAccountUserId],
        }),
        c?.();
    } catch {
      e.danger(
        t.formatMessage({
          id: "Gmong7",
          defaultMessage: "Error disconnecting connector",
        }),
      );
    }
  };
}
export {
  Re as C,
  Te as G,
  Pe as a,
  Ue as b,
  Se as c,
  De as d,
  z as e,
  B as f,
  Ae as g,
  we as h,
  je as i,
  G as j,
  Oe as k,
  be as l,
  Ne as m,
  ve as n,
  _e as p,
  ye as u,
};
//# sourceMappingURL=dh1349twprpizmeg.js.map
