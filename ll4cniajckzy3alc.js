import { eo as m, b3 as n, f$ as u, at as c } from "./hgyrt6j47bbfyjrt.js";
import {
  D as l,
  C as d,
  r as p,
  a as f,
  j as o,
  Y as h,
} from "./lip667d8t42poxum.js";
import { C as g } from "./h65roj7l7ph0bf74.js";
import { r as y, b$ as C, c0 as x, c1 as P } from "./bek4a02po1hapmml.js";
import "./j5maet6kh5o0bu61.js";
import "./gfnsbm99dy8f9dle.js";
import "./gkp5860wafdf24mv.js";
import "./jwvxkjptpstk4ej7.js";
import "./b5uo0f0fgo5ycbhb.js";
import "./jy5dxk25zw6hpymq.js";
import "./kx9sak1ife31wz46.js";
import "./mrja6mbtdpn27l02.js";
import "./bszrilswpsf8hziz.js";
import "./j4mmgxghl8b1mh10.js";
import "./ew9hb9iurj3kpkmu.js";
import "./accwyue32xah1z1m.js";
import "./gzhfufyiohn83kuo.js";
import "./iamkd7uovamzrioo.js";
import "./jymgi2wgtuaf5phu.js";
import "./eizg3cbui1uc8rqy.js";
import "./dcjog7s9l4t4gioj.js";
import "./l23elnwv4ei0qjhe.js";
import "./c47vptqflf6emf1m.js";
import "./lug0xrczrlz6hmcb.js";
import "./b3f39kp9psoxk5co.js";
import "./nhyrayi3co1h1g32.js";
import "./d18ohowainhefjl7.js";
import "./cn71vg7u1hry7wvg.js";
import "./jbvbchjopufbzcer.js";
import "./fk5wemdfypmbezuh.js";
import "./hxt6ipx4btplutlt.js";
import "./dh1349twprpizmeg.js";
import "./ovkaazdtaxjvkjeq.js";
import "./nfdnm3mrc4aegs7e.js";
import "./jcf462ypc5hntqqf.js";
import "./bvff6uri7zkt0ua1.js";
import "./d7tdwugs2quxc5yt.js";
import "./ltfattuf7qy8hfqt.js";
import "./e5qbxqli4yfx49qs.js";
import "./dltfzjy78tq82bxb.js";
const pt = () => (y(), { prefetchSearch: null }),
  mt = ({ currentUrl: i, nextUrl: e }) => {
    const t = i.searchParams,
      r = e.searchParams;
    return t.get("hints") !== r.get("hints") || t.get("q") !== r.get("q");
  },
  nt = m(function () {
    const e = n(),
      { conversationId: t } = l(),
      { prefetchSearch: r } = d(),
      s = C();
    p.useEffect(() => {
      if (s) return x();
    }, [s]);
    const a = f();
    return (
      p.useEffect(
        () =>
          P(a, u.queryKey, () => {
            c.addFirstTiming("load.models");
          }),
        [a],
      ),
      o.jsxs(o.Fragment, {
        children: [
          o.jsx(g, { ...e, urlThreadId: t, prefetchSearch: r }),
          o.jsx(h, {}),
        ],
      })
    );
  });
export { pt as clientLoader, nt as default, mt as shouldRevalidate };
//# sourceMappingURL=ll4cniajckzy3alc.js.map
