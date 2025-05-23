import {
  r as T,
  j as F,
  d as Oc,
  a as ro,
  f as so,
  k as Nc,
  M as ot,
  a5 as Lc,
} from "./lip667d8t42poxum.js";
import {
  m as oo,
  cK as Uc,
  b6 as cn,
  fC as Fc,
  bM as jc,
  ez as Bc,
  aQ as Vc,
  ba as ao,
  dj as qc,
  bB as Ir,
  aL as Pi,
  ag as Ei,
  aX as wi,
  ey as oe,
  bC as zc,
  eA as Gc,
  aH as xr,
  aE as Wc,
  ca as Kc,
  ht as Hc,
  bG as Jc,
  gZ as Yc,
  hb as Qc,
  u as Ar,
  ec as co,
  c as St,
  B as dn,
  W as Dr,
  as as $c,
  eC as Xc,
  cd as Zc,
  aj as ed,
  cW as td,
  at as nd,
} from "./hgyrt6j47bbfyjrt.js";
import {
  k0 as we,
  qd as id,
  tK as rd,
  jI as at,
  tL as sd,
  tM as Ri,
  to as od,
  tp as ad,
  j$ as Pt,
  i as cd,
  tr as ce,
  tN as dd,
  l0 as uo,
  y as In,
  qg as yt,
  bW as lo,
  kr as ud,
  tm as ld,
  tO as Me,
  dW as ho,
  tP as hd,
  tQ as fd,
  tR as pd,
  tS as md,
  f9 as fo,
  tT as gd,
  tU as vd,
  d as bd,
  ib as yd,
  bJ as kd,
  ly as Sd,
  fz as Td,
} from "./bek4a02po1hapmml.js";
import { u as Cd } from "./abdc4q71tykmepri.js";
import { b as Pd } from "./accwyue32xah1z1m.js";
import {
  g as Xt,
  D as Ed,
  u as wd,
  e as Rd,
  m as po,
  a as _d,
  T as Zn,
} from "./baqe411ijw4zke1t.js";
const Id = () => {
  const n = oo(),
    e = we(),
    t = T.useCallback(() => e.getState().isVoiceModeActive, [e]);
  return T.useMemo(
    () =>
      new Proxy(n, {
        get(i, r) {
          const s = i[r];
          return t() || r === "closeAll" ? s : () => {};
        },
      }),
    [t, n],
  );
};
function mo() {
  const n = id();
  if (!n) return { video: !1, screenshare: !1 };
  const e = rd(n);
  return {
    video: e?.features?.video ?? !1,
    screenshare: e?.features?.screen_sharing ?? !1,
  };
}
var Mr = {};
function xd(n, e) {
  return (
    e.forEach(function (t) {
      t &&
        typeof t != "string" &&
        !Array.isArray(t) &&
        Object.keys(t).forEach(function (i) {
          if (i !== "default" && !(i in n)) {
            var r = Object.getOwnPropertyDescriptor(t, i);
            Object.defineProperty(
              n,
              i,
              r.get
                ? r
                : {
                    enumerable: !0,
                    get: function () {
                      return t[i];
                    },
                  },
            );
          }
        });
    }),
    Object.freeze(n)
  );
}
var Ad = Object.defineProperty,
  Dd = (n, e, t) =>
    e in n
      ? Ad(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (n[e] = t),
  Or = (n, e, t) => Dd(n, typeof e != "symbol" ? e + "" : e, t);
class ke {
  constructor() {
    Or(this, "_locking"),
      Or(this, "_locks"),
      (this._locking = Promise.resolve()),
      (this._locks = 0);
  }
  isLocked() {
    return this._locks > 0;
  }
  lock() {
    this._locks += 1;
    let e;
    const t = new Promise(
        (r) =>
          (e = () => {
            (this._locks -= 1), r();
          }),
      ),
      i = this._locking.then(() => e);
    return (this._locking = this._locking.then(() => t)), i;
  }
}
function ne(n, e) {
  if (!n) throw new Error(e);
}
const Md = 34028234663852886e22,
  Od = -34028234663852886e22,
  Nd = 4294967295,
  Ld = 2147483647,
  Ud = -2147483648;
function pn(n) {
  if (typeof n != "number") throw new Error("invalid int 32: " + typeof n);
  if (!Number.isInteger(n) || n > Ld || n < Ud)
    throw new Error("invalid int 32: " + n);
}
function _i(n) {
  if (typeof n != "number") throw new Error("invalid uint 32: " + typeof n);
  if (!Number.isInteger(n) || n > Nd || n < 0)
    throw new Error("invalid uint 32: " + n);
}
function go(n) {
  if (typeof n != "number") throw new Error("invalid float 32: " + typeof n);
  if (Number.isFinite(n) && (n > Md || n < Od))
    throw new Error("invalid float 32: " + n);
}
const vo = Symbol("@bufbuild/protobuf/enum-type");
function Fd(n) {
  const e = n[vo];
  return ne(e, "missing enum type on enum object"), e;
}
function bo(n, e, t, i) {
  n[vo] = yo(
    e,
    t.map((r) => ({ no: r.no, name: r.name, localName: n[r.no] })),
  );
}
function yo(n, e, t) {
  const i = Object.create(null),
    r = Object.create(null),
    s = [];
  for (const o of e) {
    const a = ko(o);
    s.push(a), (i[o.name] = a), (r[o.no] = a);
  }
  return {
    typeName: n,
    values: s,
    findName(o) {
      return i[o];
    },
    findNumber(o) {
      return r[o];
    },
  };
}
function jd(n, e, t) {
  const i = {};
  for (const r of e) {
    const s = ko(r);
    (i[s.localName] = s.no), (i[s.no] = s.localName);
  }
  return bo(i, n, e), i;
}
function ko(n) {
  return "localName" in n
    ? n
    : Object.assign(Object.assign({}, n), { localName: n.name });
}
class rr {
  equals(e) {
    return this.getType().runtime.util.equals(this.getType(), this, e);
  }
  clone() {
    return this.getType().runtime.util.clone(this);
  }
  fromBinary(e, t) {
    const i = this.getType(),
      r = i.runtime.bin,
      s = r.makeReadOptions(t);
    return r.readMessage(this, s.readerFactory(e), e.byteLength, s), this;
  }
  fromJson(e, t) {
    const i = this.getType(),
      r = i.runtime.json,
      s = r.makeReadOptions(t);
    return r.readMessage(i, e, s, this), this;
  }
  fromJsonString(e, t) {
    let i;
    try {
      i = JSON.parse(e);
    } catch (r) {
      throw new Error(
        "cannot decode "
          .concat(this.getType().typeName, " from JSON: ")
          .concat(r instanceof Error ? r.message : String(r)),
      );
    }
    return this.fromJson(i, t);
  }
  toBinary(e) {
    const t = this.getType(),
      i = t.runtime.bin,
      r = i.makeWriteOptions(e),
      s = r.writerFactory();
    return i.writeMessage(this, s, r), s.finish();
  }
  toJson(e) {
    const t = this.getType(),
      i = t.runtime.json,
      r = i.makeWriteOptions(e);
    return i.writeMessage(this, r);
  }
  toJsonString(e) {
    var t;
    const i = this.toJson(e);
    return JSON.stringify(
      i,
      null,
      (t = e?.prettySpaces) !== null && t !== void 0 ? t : 0,
    );
  }
  toJSON() {
    return this.toJson({ emitDefaultValues: !0 });
  }
  getType() {
    return Object.getPrototypeOf(this).constructor;
  }
}
function Bd(n, e, t, i) {
  var r;
  const s =
      (r = i?.localName) !== null && r !== void 0
        ? r
        : e.substring(e.lastIndexOf(".") + 1),
    o = {
      [s]: function (a) {
        n.util.initFields(this), n.util.initPartial(a, this);
      },
    }[s];
  return (
    Object.setPrototypeOf(o.prototype, new rr()),
    Object.assign(o, {
      runtime: n,
      typeName: e,
      fields: n.util.newFieldList(t),
      fromBinary(a, c) {
        return new o().fromBinary(a, c);
      },
      fromJson(a, c) {
        return new o().fromJson(a, c);
      },
      fromJsonString(a, c) {
        return new o().fromJsonString(a, c);
      },
      equals(a, c) {
        return n.util.equals(o, a, c);
      },
    }),
    o
  );
}
function Vd() {
  let n = 0,
    e = 0;
  for (let i = 0; i < 28; i += 7) {
    let r = this.buf[this.pos++];
    if (((n |= (r & 127) << i), (r & 128) == 0))
      return this.assertBounds(), [n, e];
  }
  let t = this.buf[this.pos++];
  if (((n |= (t & 15) << 28), (e = (t & 112) >> 4), (t & 128) == 0))
    return this.assertBounds(), [n, e];
  for (let i = 3; i <= 31; i += 7) {
    let r = this.buf[this.pos++];
    if (((e |= (r & 127) << i), (r & 128) == 0))
      return this.assertBounds(), [n, e];
  }
  throw new Error("invalid varint");
}
function ei(n, e, t) {
  for (let s = 0; s < 28; s = s + 7) {
    const o = n >>> s,
      a = !(!(o >>> 7) && e == 0),
      c = (a ? o | 128 : o) & 255;
    if ((t.push(c), !a)) return;
  }
  const i = ((n >>> 28) & 15) | ((e & 7) << 4),
    r = e >> 3 != 0;
  if ((t.push((r ? i | 128 : i) & 255), !!r)) {
    for (let s = 3; s < 31; s = s + 7) {
      const o = e >>> s,
        a = !!(o >>> 7),
        c = (a ? o | 128 : o) & 255;
      if ((t.push(c), !a)) return;
    }
    t.push((e >>> 31) & 1);
  }
}
const mn = 4294967296;
function Nr(n) {
  const e = n[0] === "-";
  e && (n = n.slice(1));
  const t = 1e6;
  let i = 0,
    r = 0;
  function s(o, a) {
    const c = Number(n.slice(o, a));
    (r *= t),
      (i = i * t + c),
      i >= mn && ((r = r + ((i / mn) | 0)), (i = i % mn));
  }
  return s(-24, -18), s(-18, -12), s(-12, -6), s(-6), e ? To(i, r) : sr(i, r);
}
function qd(n, e) {
  let t = sr(n, e);
  const i = t.hi & 2147483648;
  i && (t = To(t.lo, t.hi));
  const r = So(t.lo, t.hi);
  return i ? "-" + r : r;
}
function So(n, e) {
  if ((({ lo: n, hi: e } = zd(n, e)), e <= 2097151)) return String(mn * e + n);
  const t = n & 16777215,
    i = ((n >>> 24) | (e << 8)) & 16777215,
    r = (e >> 16) & 65535;
  let s = t + i * 6777216 + r * 6710656,
    o = i + r * 8147497,
    a = r * 2;
  const c = 1e7;
  return (
    s >= c && ((o += Math.floor(s / c)), (s %= c)),
    o >= c && ((a += Math.floor(o / c)), (o %= c)),
    a.toString() + Lr(o) + Lr(s)
  );
}
function zd(n, e) {
  return { lo: n >>> 0, hi: e >>> 0 };
}
function sr(n, e) {
  return { lo: n | 0, hi: e | 0 };
}
function To(n, e) {
  return (e = ~e), n ? (n = ~n + 1) : (e += 1), sr(n, e);
}
const Lr = (n) => {
  const e = String(n);
  return "0000000".slice(e.length) + e;
};
function Ur(n, e) {
  if (n >= 0) {
    for (; n > 127; ) e.push((n & 127) | 128), (n = n >>> 7);
    e.push(n);
  } else {
    for (let t = 0; t < 9; t++) e.push((n & 127) | 128), (n = n >> 7);
    e.push(1);
  }
}
function Gd() {
  let n = this.buf[this.pos++],
    e = n & 127;
  if ((n & 128) == 0) return this.assertBounds(), e;
  if (((n = this.buf[this.pos++]), (e |= (n & 127) << 7), (n & 128) == 0))
    return this.assertBounds(), e;
  if (((n = this.buf[this.pos++]), (e |= (n & 127) << 14), (n & 128) == 0))
    return this.assertBounds(), e;
  if (((n = this.buf[this.pos++]), (e |= (n & 127) << 21), (n & 128) == 0))
    return this.assertBounds(), e;
  (n = this.buf[this.pos++]), (e |= (n & 15) << 28);
  for (let t = 5; (n & 128) !== 0 && t < 10; t++) n = this.buf[this.pos++];
  if ((n & 128) != 0) throw new Error("invalid varint");
  return this.assertBounds(), e >>> 0;
}
function Wd() {
  const n = new DataView(new ArrayBuffer(8));
  if (
    typeof BigInt == "function" &&
    typeof n.getBigInt64 == "function" &&
    typeof n.getBigUint64 == "function" &&
    typeof n.setBigInt64 == "function" &&
    typeof n.setBigUint64 == "function" &&
    (typeof process != "object" ||
      typeof Mr != "object" ||
      Mr.BUF_BIGINT_DISABLE !== "1")
  ) {
    const r = BigInt("-9223372036854775808"),
      s = BigInt("9223372036854775807"),
      o = BigInt("0"),
      a = BigInt("18446744073709551615");
    return {
      zero: BigInt(0),
      supported: !0,
      parse(c) {
        const d = typeof c == "bigint" ? c : BigInt(c);
        if (d > s || d < r) throw new Error("int64 invalid: ".concat(c));
        return d;
      },
      uParse(c) {
        const d = typeof c == "bigint" ? c : BigInt(c);
        if (d > a || d < o) throw new Error("uint64 invalid: ".concat(c));
        return d;
      },
      enc(c) {
        return (
          n.setBigInt64(0, this.parse(c), !0),
          { lo: n.getInt32(0, !0), hi: n.getInt32(4, !0) }
        );
      },
      uEnc(c) {
        return (
          n.setBigInt64(0, this.uParse(c), !0),
          { lo: n.getInt32(0, !0), hi: n.getInt32(4, !0) }
        );
      },
      dec(c, d) {
        return n.setInt32(0, c, !0), n.setInt32(4, d, !0), n.getBigInt64(0, !0);
      },
      uDec(c, d) {
        return (
          n.setInt32(0, c, !0), n.setInt32(4, d, !0), n.getBigUint64(0, !0)
        );
      },
    };
  }
  const t = (r) => ne(/^-?[0-9]+$/.test(r), "int64 invalid: ".concat(r)),
    i = (r) => ne(/^[0-9]+$/.test(r), "uint64 invalid: ".concat(r));
  return {
    zero: "0",
    supported: !1,
    parse(r) {
      return typeof r != "string" && (r = r.toString()), t(r), r;
    },
    uParse(r) {
      return typeof r != "string" && (r = r.toString()), i(r), r;
    },
    enc(r) {
      return typeof r != "string" && (r = r.toString()), t(r), Nr(r);
    },
    uEnc(r) {
      return typeof r != "string" && (r = r.toString()), i(r), Nr(r);
    },
    dec(r, s) {
      return qd(r, s);
    },
    uDec(r, s) {
      return So(r, s);
    },
  };
}
const X = Wd();
var I;
(function (n) {
  (n[(n.DOUBLE = 1)] = "DOUBLE"),
    (n[(n.FLOAT = 2)] = "FLOAT"),
    (n[(n.INT64 = 3)] = "INT64"),
    (n[(n.UINT64 = 4)] = "UINT64"),
    (n[(n.INT32 = 5)] = "INT32"),
    (n[(n.FIXED64 = 6)] = "FIXED64"),
    (n[(n.FIXED32 = 7)] = "FIXED32"),
    (n[(n.BOOL = 8)] = "BOOL"),
    (n[(n.STRING = 9)] = "STRING"),
    (n[(n.BYTES = 12)] = "BYTES"),
    (n[(n.UINT32 = 13)] = "UINT32"),
    (n[(n.SFIXED32 = 15)] = "SFIXED32"),
    (n[(n.SFIXED64 = 16)] = "SFIXED64"),
    (n[(n.SINT32 = 17)] = "SINT32"),
    (n[(n.SINT64 = 18)] = "SINT64");
})(I || (I = {}));
var nt;
(function (n) {
  (n[(n.BIGINT = 0)] = "BIGINT"), (n[(n.STRING = 1)] = "STRING");
})(nt || (nt = {}));
function $e(n, e, t) {
  if (e === t) return !0;
  if (n == I.BYTES) {
    if (
      !(e instanceof Uint8Array) ||
      !(t instanceof Uint8Array) ||
      e.length !== t.length
    )
      return !1;
    for (let i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1;
    return !0;
  }
  switch (n) {
    case I.UINT64:
    case I.FIXED64:
    case I.INT64:
    case I.SFIXED64:
    case I.SINT64:
      return e == t;
  }
  return !1;
}
function Dt(n, e) {
  switch (n) {
    case I.BOOL:
      return !1;
    case I.UINT64:
    case I.FIXED64:
    case I.INT64:
    case I.SFIXED64:
    case I.SINT64:
      return e == 0 ? X.zero : "0";
    case I.DOUBLE:
    case I.FLOAT:
      return 0;
    case I.BYTES:
      return new Uint8Array(0);
    case I.STRING:
      return "";
    default:
      return 0;
  }
}
function Co(n, e) {
  switch (n) {
    case I.BOOL:
      return e === !1;
    case I.STRING:
      return e === "";
    case I.BYTES:
      return e instanceof Uint8Array && !e.byteLength;
    default:
      return e == 0;
  }
}
var ie;
(function (n) {
  (n[(n.Varint = 0)] = "Varint"),
    (n[(n.Bit64 = 1)] = "Bit64"),
    (n[(n.LengthDelimited = 2)] = "LengthDelimited"),
    (n[(n.StartGroup = 3)] = "StartGroup"),
    (n[(n.EndGroup = 4)] = "EndGroup"),
    (n[(n.Bit32 = 5)] = "Bit32");
})(ie || (ie = {}));
class Kd {
  constructor(e) {
    (this.stack = []),
      (this.textEncoder = e ?? new TextEncoder()),
      (this.chunks = []),
      (this.buf = []);
  }
  finish() {
    this.chunks.push(new Uint8Array(this.buf));
    let e = 0;
    for (let r = 0; r < this.chunks.length; r++) e += this.chunks[r].length;
    let t = new Uint8Array(e),
      i = 0;
    for (let r = 0; r < this.chunks.length; r++)
      t.set(this.chunks[r], i), (i += this.chunks[r].length);
    return (this.chunks = []), t;
  }
  fork() {
    return (
      this.stack.push({ chunks: this.chunks, buf: this.buf }),
      (this.chunks = []),
      (this.buf = []),
      this
    );
  }
  join() {
    let e = this.finish(),
      t = this.stack.pop();
    if (!t) throw new Error("invalid state, fork stack empty");
    return (
      (this.chunks = t.chunks),
      (this.buf = t.buf),
      this.uint32(e.byteLength),
      this.raw(e)
    );
  }
  tag(e, t) {
    return this.uint32(((e << 3) | t) >>> 0);
  }
  raw(e) {
    return (
      this.buf.length &&
        (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
      this.chunks.push(e),
      this
    );
  }
  uint32(e) {
    for (_i(e); e > 127; ) this.buf.push((e & 127) | 128), (e = e >>> 7);
    return this.buf.push(e), this;
  }
  int32(e) {
    return pn(e), Ur(e, this.buf), this;
  }
  bool(e) {
    return this.buf.push(e ? 1 : 0), this;
  }
  bytes(e) {
    return this.uint32(e.byteLength), this.raw(e);
  }
  string(e) {
    let t = this.textEncoder.encode(e);
    return this.uint32(t.byteLength), this.raw(t);
  }
  float(e) {
    go(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t);
  }
  double(e) {
    let t = new Uint8Array(8);
    return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t);
  }
  fixed32(e) {
    _i(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
  }
  sfixed32(e) {
    pn(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
  }
  sint32(e) {
    return pn(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), Ur(e, this.buf), this;
  }
  sfixed64(e) {
    let t = new Uint8Array(8),
      i = new DataView(t.buffer),
      r = X.enc(e);
    return i.setInt32(0, r.lo, !0), i.setInt32(4, r.hi, !0), this.raw(t);
  }
  fixed64(e) {
    let t = new Uint8Array(8),
      i = new DataView(t.buffer),
      r = X.uEnc(e);
    return i.setInt32(0, r.lo, !0), i.setInt32(4, r.hi, !0), this.raw(t);
  }
  int64(e) {
    let t = X.enc(e);
    return ei(t.lo, t.hi, this.buf), this;
  }
  sint64(e) {
    let t = X.enc(e),
      i = t.hi >> 31,
      r = (t.lo << 1) ^ i,
      s = ((t.hi << 1) | (t.lo >>> 31)) ^ i;
    return ei(r, s, this.buf), this;
  }
  uint64(e) {
    let t = X.uEnc(e);
    return ei(t.lo, t.hi, this.buf), this;
  }
}
class Hd {
  constructor(e, t) {
    (this.varint64 = Vd),
      (this.uint32 = Gd),
      (this.buf = e),
      (this.len = e.length),
      (this.pos = 0),
      (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
      (this.textDecoder = t ?? new TextDecoder());
  }
  tag() {
    let e = this.uint32(),
      t = e >>> 3,
      i = e & 7;
    if (t <= 0 || i < 0 || i > 5)
      throw new Error("illegal tag: field no " + t + " wire type " + i);
    return [t, i];
  }
  skip(e, t) {
    let i = this.pos;
    switch (e) {
      case ie.Varint:
        for (; this.buf[this.pos++] & 128; );
        break;
      case ie.Bit64:
        this.pos += 4;
      case ie.Bit32:
        this.pos += 4;
        break;
      case ie.LengthDelimited:
        let r = this.uint32();
        this.pos += r;
        break;
      case ie.StartGroup:
        for (;;) {
          const [s, o] = this.tag();
          if (o === ie.EndGroup) {
            if (t !== void 0 && s !== t)
              throw new Error("invalid end group tag");
            break;
          }
          this.skip(o, s);
        }
        break;
      default:
        throw new Error("cant skip wire type " + e);
    }
    return this.assertBounds(), this.buf.subarray(i, this.pos);
  }
  assertBounds() {
    if (this.pos > this.len) throw new RangeError("premature EOF");
  }
  int32() {
    return this.uint32() | 0;
  }
  sint32() {
    let e = this.uint32();
    return (e >>> 1) ^ -(e & 1);
  }
  int64() {
    return X.dec(...this.varint64());
  }
  uint64() {
    return X.uDec(...this.varint64());
  }
  sint64() {
    let [e, t] = this.varint64(),
      i = -(e & 1);
    return (
      (e = ((e >>> 1) | ((t & 1) << 31)) ^ i), (t = (t >>> 1) ^ i), X.dec(e, t)
    );
  }
  bool() {
    let [e, t] = this.varint64();
    return e !== 0 || t !== 0;
  }
  fixed32() {
    return this.view.getUint32((this.pos += 4) - 4, !0);
  }
  sfixed32() {
    return this.view.getInt32((this.pos += 4) - 4, !0);
  }
  fixed64() {
    return X.uDec(this.sfixed32(), this.sfixed32());
  }
  sfixed64() {
    return X.dec(this.sfixed32(), this.sfixed32());
  }
  float() {
    return this.view.getFloat32((this.pos += 4) - 4, !0);
  }
  double() {
    return this.view.getFloat64((this.pos += 8) - 8, !0);
  }
  bytes() {
    let e = this.uint32(),
      t = this.pos;
    return (this.pos += e), this.assertBounds(), this.buf.subarray(t, t + e);
  }
  string() {
    return this.textDecoder.decode(this.bytes());
  }
}
function Jd(n, e, t, i) {
  let r;
  return {
    typeName: e,
    extendee: t,
    get field() {
      if (!r) {
        const s = typeof i == "function" ? i() : i;
        (s.name = e.split(".").pop()),
          (s.jsonName = "[".concat(e, "]")),
          (r = n.util.newFieldList([s]).list()[0]);
      }
      return r;
    },
    runtime: n,
  };
}
function Po(n) {
  const e = n.field.localName,
    t = Object.create(null);
  return (t[e] = Yd(n)), [t, () => t[e]];
}
function Yd(n) {
  const e = n.field;
  if (e.repeated) return [];
  if (e.default !== void 0) return e.default;
  switch (e.kind) {
    case "enum":
      return e.T.values[0].no;
    case "scalar":
      return Dt(e.T, e.L);
    case "message":
      const t = e.T,
        i = new t();
      return t.fieldWrapper ? t.fieldWrapper.unwrapField(i) : i;
    case "map":
      throw "map fields are not allowed to be extensions";
  }
}
function Qd(n, e) {
  if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
    for (let t = n.length - 1; t >= 0; --t) if (n[t].no == e.no) return [n[t]];
    return [];
  }
  return n.filter((t) => t.no === e.no);
}
let ze =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
      "",
    ),
  Wn = [];
for (let n = 0; n < ze.length; n++) Wn[ze[n].charCodeAt(0)] = n;
Wn[45] = ze.indexOf("+");
Wn[95] = ze.indexOf("/");
const Eo = {
  dec(n) {
    let e = (n.length * 3) / 4;
    n[n.length - 2] == "=" ? (e -= 2) : n[n.length - 1] == "=" && (e -= 1);
    let t = new Uint8Array(e),
      i = 0,
      r = 0,
      s,
      o = 0;
    for (let a = 0; a < n.length; a++) {
      if (((s = Wn[n.charCodeAt(a)]), s === void 0))
        switch (n[a]) {
          case "=":
            r = 0;
          case `
`:
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
      switch (r) {
        case 0:
          (o = s), (r = 1);
          break;
        case 1:
          (t[i++] = (o << 2) | ((s & 48) >> 4)), (o = s), (r = 2);
          break;
        case 2:
          (t[i++] = ((o & 15) << 4) | ((s & 60) >> 2)), (o = s), (r = 3);
          break;
        case 3:
          (t[i++] = ((o & 3) << 6) | s), (r = 0);
          break;
      }
    }
    if (r == 1) throw Error("invalid base64 string.");
    return t.subarray(0, i);
  },
  enc(n) {
    let e = "",
      t = 0,
      i,
      r = 0;
    for (let s = 0; s < n.length; s++)
      switch (((i = n[s]), t)) {
        case 0:
          (e += ze[i >> 2]), (r = (i & 3) << 4), (t = 1);
          break;
        case 1:
          (e += ze[r | (i >> 4)]), (r = (i & 15) << 2), (t = 2);
          break;
        case 2:
          (e += ze[r | (i >> 6)]), (e += ze[i & 63]), (t = 0);
          break;
      }
    return t && ((e += ze[r]), (e += "="), t == 1 && (e += "=")), e;
  },
};
function $d(n, e, t) {
  Ro(e, n);
  const i = e.runtime.bin.makeReadOptions(t),
    r = Qd(n.getType().runtime.bin.listUnknownFields(n), e.field),
    [s, o] = Po(e);
  for (const a of r)
    e.runtime.bin.readField(s, i.readerFactory(a.data), e.field, a.wireType, i);
  return o();
}
function Xd(n, e, t, i) {
  Ro(e, n);
  const r = e.runtime.bin.makeReadOptions(i),
    s = e.runtime.bin.makeWriteOptions(i);
  if (wo(n, e)) {
    const d = n
      .getType()
      .runtime.bin.listUnknownFields(n)
      .filter((u) => u.no != e.field.no);
    n.getType().runtime.bin.discardUnknownFields(n);
    for (const u of d)
      n.getType().runtime.bin.onUnknownField(n, u.no, u.wireType, u.data);
  }
  const o = s.writerFactory();
  let a = e.field;
  !a.opt &&
    !a.repeated &&
    (a.kind == "enum" || a.kind == "scalar") &&
    (a = Object.assign(Object.assign({}, e.field), { opt: !0 })),
    e.runtime.bin.writeField(a, t, o, s);
  const c = r.readerFactory(o.finish());
  for (; c.pos < c.len; ) {
    const [d, u] = c.tag(),
      l = c.skip(u, d);
    n.getType().runtime.bin.onUnknownField(n, d, u, l);
  }
}
function wo(n, e) {
  const t = n.getType();
  return (
    e.extendee.typeName === t.typeName &&
    !!t.runtime.bin.listUnknownFields(n).find((i) => i.no == e.field.no)
  );
}
function Ro(n, e) {
  ne(
    n.extendee.typeName == e.getType().typeName,
    "extension "
      .concat(n.typeName, " can only be applied to message ")
      .concat(n.extendee.typeName),
  );
}
function _o(n, e) {
  const t = n.localName;
  if (n.repeated) return e[t].length > 0;
  if (n.oneof) return e[n.oneof.localName].case === t;
  switch (n.kind) {
    case "enum":
    case "scalar":
      return n.opt || n.req
        ? e[t] !== void 0
        : n.kind == "enum"
          ? e[t] !== n.T.values[0].no
          : !Co(n.T, e[t]);
    case "message":
      return e[t] !== void 0;
    case "map":
      return Object.keys(e[t]).length > 0;
  }
}
function Fr(n, e) {
  const t = n.localName,
    i = !n.opt && !n.req;
  if (n.repeated) e[t] = [];
  else if (n.oneof) e[n.oneof.localName] = { case: void 0 };
  else
    switch (n.kind) {
      case "map":
        e[t] = {};
        break;
      case "enum":
        e[t] = i ? n.T.values[0].no : void 0;
        break;
      case "scalar":
        e[t] = i ? Dt(n.T, n.L) : void 0;
        break;
      case "message":
        e[t] = void 0;
        break;
    }
}
function ct(n, e) {
  if (
    n === null ||
    typeof n != "object" ||
    !Object.getOwnPropertyNames(rr.prototype).every(
      (i) => i in n && typeof n[i] == "function",
    )
  )
    return !1;
  const t = n.getType();
  return t === null ||
    typeof t != "function" ||
    !("typeName" in t) ||
    typeof t.typeName != "string"
    ? !1
    : e === void 0
      ? !0
      : t.typeName == e.typeName;
}
function Io(n, e) {
  return ct(e) || !n.fieldWrapper ? e : n.fieldWrapper.wrapField(e);
}
I.DOUBLE,
  I.FLOAT,
  I.INT64,
  I.UINT64,
  I.INT32,
  I.UINT32,
  I.BOOL,
  I.STRING,
  I.BYTES;
const jr = { ignoreUnknownFields: !1 },
  Br = {
    emitDefaultValues: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1,
    prettySpaces: 0,
  };
function Zd(n) {
  return n ? Object.assign(Object.assign({}, jr), n) : jr;
}
function eu(n) {
  return n ? Object.assign(Object.assign({}, Br), n) : Br;
}
const xn = Symbol(),
  gn = Symbol();
function tu() {
  return {
    makeReadOptions: Zd,
    makeWriteOptions: eu,
    readMessage(n, e, t, i) {
      if (e == null || Array.isArray(e) || typeof e != "object")
        throw new Error(
          "cannot decode message "
            .concat(n.typeName, " from JSON: ")
            .concat(Le(e)),
        );
      i = i ?? new n();
      const r = new Map(),
        s = t.typeRegistry;
      for (const [o, a] of Object.entries(e)) {
        const c = n.fields.findJsonName(o);
        if (c) {
          if (c.oneof) {
            if (a === null && c.kind == "scalar") continue;
            const d = r.get(c.oneof);
            if (d !== void 0)
              throw new Error(
                "cannot decode message "
                  .concat(n.typeName, ' from JSON: multiple keys for oneof "')
                  .concat(c.oneof.name, '" present: "')
                  .concat(d, '", "')
                  .concat(o, '"'),
              );
            r.set(c.oneof, o);
          }
          Vr(i, a, c, t, n);
        } else {
          let d = !1;
          if (s?.findExtension && o.startsWith("[") && o.endsWith("]")) {
            const u = s.findExtension(o.substring(1, o.length - 1));
            if (u && u.extendee.typeName == n.typeName) {
              d = !0;
              const [l, h] = Po(u);
              Vr(l, a, u.field, t, u), Xd(i, u, h(), t);
            }
          }
          if (!d && !t.ignoreUnknownFields)
            throw new Error(
              "cannot decode message "
                .concat(n.typeName, ' from JSON: key "')
                .concat(o, '" is unknown'),
            );
        }
      }
      return i;
    },
    writeMessage(n, e) {
      const t = n.getType(),
        i = {};
      let r;
      try {
        for (r of t.fields.byNumber()) {
          if (!_o(r, n)) {
            if (r.req) throw "required field not set";
            if (!e.emitDefaultValues || !iu(r)) continue;
          }
          const o = r.oneof ? n[r.oneof.localName].value : n[r.localName],
            a = qr(r, o, e);
          a !== void 0 && (i[e.useProtoFieldName ? r.name : r.jsonName] = a);
        }
        const s = e.typeRegistry;
        if (s?.findExtensionFor)
          for (const o of t.runtime.bin.listUnknownFields(n)) {
            const a = s.findExtensionFor(t.typeName, o.no);
            if (a && wo(n, a)) {
              const c = $d(n, a, e),
                d = qr(a.field, c, e);
              d !== void 0 && (i[a.field.jsonName] = d);
            }
          }
      } catch (s) {
        const o = r
            ? "cannot encode field "
                .concat(t.typeName, ".")
                .concat(r.name, " to JSON")
            : "cannot encode message ".concat(t.typeName, " to JSON"),
          a = s instanceof Error ? s.message : String(s);
        throw new Error(o + (a.length > 0 ? ": ".concat(a) : ""));
      }
      return i;
    },
    readScalar(n, e, t) {
      return Kt(n, e, t ?? nt.BIGINT, !0);
    },
    writeScalar(n, e, t) {
      if (e !== void 0 && (t || Co(n, e))) return vn(n, e);
    },
    debug: Le,
  };
}
function Le(n) {
  if (n === null) return "null";
  switch (typeof n) {
    case "object":
      return Array.isArray(n) ? "array" : "object";
    case "string":
      return n.length > 100
        ? "string"
        : '"'.concat(n.split('"').join('\\"'), '"');
    default:
      return String(n);
  }
}
function Vr(n, e, t, i, r) {
  let s = t.localName;
  if (t.repeated) {
    if ((ne(t.kind != "map"), e === null)) return;
    if (!Array.isArray(e))
      throw new Error(
        "cannot decode field "
          .concat(r.typeName, ".")
          .concat(t.name, " from JSON: ")
          .concat(Le(e)),
      );
    const o = n[s];
    for (const a of e) {
      if (a === null)
        throw new Error(
          "cannot decode field "
            .concat(r.typeName, ".")
            .concat(t.name, " from JSON: ")
            .concat(Le(a)),
        );
      switch (t.kind) {
        case "message":
          o.push(t.T.fromJson(a, i));
          break;
        case "enum":
          const c = ti(t.T, a, i.ignoreUnknownFields, !0);
          c !== gn && o.push(c);
          break;
        case "scalar":
          try {
            o.push(Kt(t.T, a, t.L, !0));
          } catch (d) {
            let u = "cannot decode field "
              .concat(r.typeName, ".")
              .concat(t.name, " from JSON: ")
              .concat(Le(a));
            throw (
              (d instanceof Error &&
                d.message.length > 0 &&
                (u += ": ".concat(d.message)),
              new Error(u))
            );
          }
          break;
      }
    }
  } else if (t.kind == "map") {
    if (e === null) return;
    if (typeof e != "object" || Array.isArray(e))
      throw new Error(
        "cannot decode field "
          .concat(r.typeName, ".")
          .concat(t.name, " from JSON: ")
          .concat(Le(e)),
      );
    const o = n[s];
    for (const [a, c] of Object.entries(e)) {
      if (c === null)
        throw new Error(
          "cannot decode field "
            .concat(r.typeName, ".")
            .concat(t.name, " from JSON: map value null"),
        );
      let d;
      try {
        d = nu(t.K, a);
      } catch (u) {
        let l = "cannot decode map key for field "
          .concat(r.typeName, ".")
          .concat(t.name, " from JSON: ")
          .concat(Le(e));
        throw (
          (u instanceof Error &&
            u.message.length > 0 &&
            (l += ": ".concat(u.message)),
          new Error(l))
        );
      }
      switch (t.V.kind) {
        case "message":
          o[d] = t.V.T.fromJson(c, i);
          break;
        case "enum":
          const u = ti(t.V.T, c, i.ignoreUnknownFields, !0);
          u !== gn && (o[d] = u);
          break;
        case "scalar":
          try {
            o[d] = Kt(t.V.T, c, nt.BIGINT, !0);
          } catch (l) {
            let h = "cannot decode map value for field "
              .concat(r.typeName, ".")
              .concat(t.name, " from JSON: ")
              .concat(Le(e));
            throw (
              (l instanceof Error &&
                l.message.length > 0 &&
                (h += ": ".concat(l.message)),
              new Error(h))
            );
          }
          break;
      }
    }
  } else
    switch (
      (t.oneof && ((n = n[t.oneof.localName] = { case: s }), (s = "value")),
      t.kind)
    ) {
      case "message":
        const o = t.T;
        if (e === null && o.typeName != "google.protobuf.Value") return;
        let a = n[s];
        ct(a)
          ? a.fromJson(e, i)
          : ((n[s] = a = o.fromJson(e, i)),
            o.fieldWrapper &&
              !t.oneof &&
              (n[s] = o.fieldWrapper.unwrapField(a)));
        break;
      case "enum":
        const c = ti(t.T, e, i.ignoreUnknownFields, !1);
        switch (c) {
          case xn:
            Fr(t, n);
            break;
          case gn:
            break;
          default:
            n[s] = c;
            break;
        }
        break;
      case "scalar":
        try {
          const d = Kt(t.T, e, t.L, !1);
          switch (d) {
            case xn:
              Fr(t, n);
              break;
            default:
              n[s] = d;
              break;
          }
        } catch (d) {
          let u = "cannot decode field "
            .concat(r.typeName, ".")
            .concat(t.name, " from JSON: ")
            .concat(Le(e));
          throw (
            (d instanceof Error &&
              d.message.length > 0 &&
              (u += ": ".concat(d.message)),
            new Error(u))
          );
        }
        break;
    }
}
function nu(n, e) {
  if (n === I.BOOL)
    switch (e) {
      case "true":
        e = !0;
        break;
      case "false":
        e = !1;
        break;
    }
  return Kt(n, e, nt.BIGINT, !0).toString();
}
function Kt(n, e, t, i) {
  if (e === null) return i ? Dt(n, t) : xn;
  switch (n) {
    case I.DOUBLE:
    case I.FLOAT:
      if (e === "NaN") return Number.NaN;
      if (e === "Infinity") return Number.POSITIVE_INFINITY;
      if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
      if (
        e === "" ||
        (typeof e == "string" && e.trim().length !== e.length) ||
        (typeof e != "string" && typeof e != "number")
      )
        break;
      const r = Number(e);
      if (Number.isNaN(r) || !Number.isFinite(r)) break;
      return n == I.FLOAT && go(r), r;
    case I.INT32:
    case I.FIXED32:
    case I.SFIXED32:
    case I.SINT32:
    case I.UINT32:
      let s;
      if (
        (typeof e == "number"
          ? (s = e)
          : typeof e == "string" &&
            e.length > 0 &&
            e.trim().length === e.length &&
            (s = Number(e)),
        s === void 0)
      )
        break;
      return n == I.UINT32 || n == I.FIXED32 ? _i(s) : pn(s), s;
    case I.INT64:
    case I.SFIXED64:
    case I.SINT64:
      if (typeof e != "number" && typeof e != "string") break;
      const o = X.parse(e);
      return t ? o.toString() : o;
    case I.FIXED64:
    case I.UINT64:
      if (typeof e != "number" && typeof e != "string") break;
      const a = X.uParse(e);
      return t ? a.toString() : a;
    case I.BOOL:
      if (typeof e != "boolean") break;
      return e;
    case I.STRING:
      if (typeof e != "string") break;
      try {
        encodeURIComponent(e);
      } catch {
        throw new Error("invalid UTF8");
      }
      return e;
    case I.BYTES:
      if (e === "") return new Uint8Array(0);
      if (typeof e != "string") break;
      return Eo.dec(e);
  }
  throw new Error();
}
function ti(n, e, t, i) {
  if (e === null)
    return n.typeName == "google.protobuf.NullValue"
      ? 0
      : i
        ? n.values[0].no
        : xn;
  switch (typeof e) {
    case "number":
      if (Number.isInteger(e)) return e;
      break;
    case "string":
      const r = n.findName(e);
      if (r !== void 0) return r.no;
      if (t) return gn;
      break;
  }
  throw new Error(
    "cannot decode enum ".concat(n.typeName, " from JSON: ").concat(Le(e)),
  );
}
function iu(n) {
  return n.repeated || n.kind == "map"
    ? !0
    : !(n.oneof || n.kind == "message" || n.opt || n.req);
}
function qr(n, e, t) {
  if (n.kind == "map") {
    ne(typeof e == "object" && e != null);
    const i = {},
      r = Object.entries(e);
    switch (n.V.kind) {
      case "scalar":
        for (const [o, a] of r) i[o.toString()] = vn(n.V.T, a);
        break;
      case "message":
        for (const [o, a] of r) i[o.toString()] = a.toJson(t);
        break;
      case "enum":
        const s = n.V.T;
        for (const [o, a] of r) i[o.toString()] = ni(s, a, t.enumAsInteger);
        break;
    }
    return t.emitDefaultValues || r.length > 0 ? i : void 0;
  }
  if (n.repeated) {
    ne(Array.isArray(e));
    const i = [];
    switch (n.kind) {
      case "scalar":
        for (let r = 0; r < e.length; r++) i.push(vn(n.T, e[r]));
        break;
      case "enum":
        for (let r = 0; r < e.length; r++)
          i.push(ni(n.T, e[r], t.enumAsInteger));
        break;
      case "message":
        for (let r = 0; r < e.length; r++) i.push(e[r].toJson(t));
        break;
    }
    return t.emitDefaultValues || i.length > 0 ? i : void 0;
  }
  switch (n.kind) {
    case "scalar":
      return vn(n.T, e);
    case "enum":
      return ni(n.T, e, t.enumAsInteger);
    case "message":
      return Io(n.T, e).toJson(t);
  }
}
function ni(n, e, t) {
  var i;
  if ((ne(typeof e == "number"), n.typeName == "google.protobuf.NullValue"))
    return null;
  if (t) return e;
  const r = n.findNumber(e);
  return (i = r?.name) !== null && i !== void 0 ? i : e;
}
function vn(n, e) {
  switch (n) {
    case I.INT32:
    case I.SFIXED32:
    case I.SINT32:
    case I.FIXED32:
    case I.UINT32:
      return ne(typeof e == "number"), e;
    case I.FLOAT:
    case I.DOUBLE:
      return (
        ne(typeof e == "number"),
        Number.isNaN(e)
          ? "NaN"
          : e === Number.POSITIVE_INFINITY
            ? "Infinity"
            : e === Number.NEGATIVE_INFINITY
              ? "-Infinity"
              : e
      );
    case I.STRING:
      return ne(typeof e == "string"), e;
    case I.BOOL:
      return ne(typeof e == "boolean"), e;
    case I.UINT64:
    case I.FIXED64:
    case I.INT64:
    case I.SFIXED64:
    case I.SINT64:
      return (
        ne(
          typeof e == "bigint" || typeof e == "string" || typeof e == "number",
        ),
        e.toString()
      );
    case I.BYTES:
      return ne(e instanceof Uint8Array), Eo.enc(e);
  }
}
const gt = Symbol("@bufbuild/protobuf/unknown-fields"),
  zr = { readUnknownFields: !0, readerFactory: (n) => new Hd(n) },
  Gr = { writeUnknownFields: !0, writerFactory: () => new Kd() };
function ru(n) {
  return n ? Object.assign(Object.assign({}, zr), n) : zr;
}
function su(n) {
  return n ? Object.assign(Object.assign({}, Gr), n) : Gr;
}
function ou() {
  return {
    makeReadOptions: ru,
    makeWriteOptions: su,
    listUnknownFields(n) {
      var e;
      return (e = n[gt]) !== null && e !== void 0 ? e : [];
    },
    discardUnknownFields(n) {
      delete n[gt];
    },
    writeUnknownFields(n, e) {
      const i = n[gt];
      if (i) for (const r of i) e.tag(r.no, r.wireType).raw(r.data);
    },
    onUnknownField(n, e, t, i) {
      const r = n;
      Array.isArray(r[gt]) || (r[gt] = []),
        r[gt].push({ no: e, wireType: t, data: i });
    },
    readMessage(n, e, t, i, r) {
      const s = n.getType(),
        o = r ? e.len : e.pos + t;
      let a, c;
      for (
        ;
        e.pos < o && (([a, c] = e.tag()), !(r === !0 && c == ie.EndGroup));

      ) {
        const d = s.fields.find(a);
        if (!d) {
          const u = e.skip(c, a);
          i.readUnknownFields && this.onUnknownField(n, a, c, u);
          continue;
        }
        Wr(n, e, d, c, i);
      }
      if (r && (c != ie.EndGroup || a !== t))
        throw new Error("invalid end group tag");
    },
    readField: Wr,
    writeMessage(n, e, t) {
      const i = n.getType();
      for (const r of i.fields.byNumber()) {
        if (!_o(r, n)) {
          if (r.req)
            throw new Error(
              "cannot encode field "
                .concat(i.typeName, ".")
                .concat(r.name, " to binary: required field not set"),
            );
          continue;
        }
        const s = r.oneof ? n[r.oneof.localName].value : n[r.localName];
        Kr(r, s, e, t);
      }
      return t.writeUnknownFields && this.writeUnknownFields(n, e), e;
    },
    writeField(n, e, t, i) {
      e !== void 0 && Kr(n, e, t, i);
    },
  };
}
function Wr(n, e, t, i, r) {
  let { repeated: s, localName: o } = t;
  switch (
    (t.oneof &&
      ((n = n[t.oneof.localName]),
      n.case != o && delete n.value,
      (n.case = o),
      (o = "value")),
    t.kind)
  ) {
    case "scalar":
    case "enum":
      const a = t.kind == "enum" ? I.INT32 : t.T;
      let c = An;
      if ((t.kind == "scalar" && t.L > 0 && (c = cu), s)) {
        let h = n[o];
        if (i == ie.LengthDelimited && a != I.STRING && a != I.BYTES) {
          let g = e.uint32() + e.pos;
          for (; e.pos < g; ) h.push(c(e, a));
        } else h.push(c(e, a));
      } else n[o] = c(e, a);
      break;
    case "message":
      const d = t.T;
      s
        ? n[o].push(bn(e, new d(), r, t))
        : ct(n[o])
          ? bn(e, n[o], r, t)
          : ((n[o] = bn(e, new d(), r, t)),
            d.fieldWrapper &&
              !t.oneof &&
              !t.repeated &&
              (n[o] = d.fieldWrapper.unwrapField(n[o])));
      break;
    case "map":
      let [u, l] = au(t, e, r);
      n[o][u] = l;
      break;
  }
}
function bn(n, e, t, i) {
  const r = e.getType().runtime.bin,
    s = i?.delimited;
  return r.readMessage(e, n, s ? i.no : n.uint32(), t, s), e;
}
function au(n, e, t) {
  const i = e.uint32(),
    r = e.pos + i;
  let s, o;
  for (; e.pos < r; ) {
    const [a] = e.tag();
    switch (a) {
      case 1:
        s = An(e, n.K);
        break;
      case 2:
        switch (n.V.kind) {
          case "scalar":
            o = An(e, n.V.T);
            break;
          case "enum":
            o = e.int32();
            break;
          case "message":
            o = bn(e, new n.V.T(), t, void 0);
            break;
        }
        break;
    }
  }
  if (
    (s === void 0 && (s = Dt(n.K, nt.BIGINT)),
    typeof s != "string" && typeof s != "number" && (s = s.toString()),
    o === void 0)
  )
    switch (n.V.kind) {
      case "scalar":
        o = Dt(n.V.T, nt.BIGINT);
        break;
      case "enum":
        o = n.V.T.values[0].no;
        break;
      case "message":
        o = new n.V.T();
        break;
    }
  return [s, o];
}
function cu(n, e) {
  const t = An(n, e);
  return typeof t == "bigint" ? t.toString() : t;
}
function An(n, e) {
  switch (e) {
    case I.STRING:
      return n.string();
    case I.BOOL:
      return n.bool();
    case I.DOUBLE:
      return n.double();
    case I.FLOAT:
      return n.float();
    case I.INT32:
      return n.int32();
    case I.INT64:
      return n.int64();
    case I.UINT64:
      return n.uint64();
    case I.FIXED64:
      return n.fixed64();
    case I.BYTES:
      return n.bytes();
    case I.FIXED32:
      return n.fixed32();
    case I.SFIXED32:
      return n.sfixed32();
    case I.SFIXED64:
      return n.sfixed64();
    case I.SINT64:
      return n.sint64();
    case I.UINT32:
      return n.uint32();
    case I.SINT32:
      return n.sint32();
  }
}
function Kr(n, e, t, i) {
  ne(e !== void 0);
  const r = n.repeated;
  switch (n.kind) {
    case "scalar":
    case "enum":
      let s = n.kind == "enum" ? I.INT32 : n.T;
      if (r)
        if ((ne(Array.isArray(e)), n.packed)) uu(t, s, n.no, e);
        else for (const o of e) Ht(t, s, n.no, o);
      else Ht(t, s, n.no, e);
      break;
    case "message":
      if (r) {
        ne(Array.isArray(e));
        for (const o of e) Hr(t, i, n, o);
      } else Hr(t, i, n, e);
      break;
    case "map":
      ne(typeof e == "object" && e != null);
      for (const [o, a] of Object.entries(e)) du(t, i, n, o, a);
      break;
  }
}
function du(n, e, t, i, r) {
  n.tag(t.no, ie.LengthDelimited), n.fork();
  let s = i;
  switch (t.K) {
    case I.INT32:
    case I.FIXED32:
    case I.UINT32:
    case I.SFIXED32:
    case I.SINT32:
      s = Number.parseInt(i);
      break;
    case I.BOOL:
      ne(i == "true" || i == "false"), (s = i == "true");
      break;
  }
  switch ((Ht(n, t.K, 1, s), t.V.kind)) {
    case "scalar":
      Ht(n, t.V.T, 2, r);
      break;
    case "enum":
      Ht(n, I.INT32, 2, r);
      break;
    case "message":
      ne(r !== void 0), n.tag(2, ie.LengthDelimited).bytes(r.toBinary(e));
      break;
  }
  n.join();
}
function Hr(n, e, t, i) {
  const r = Io(t.T, i);
  t.delimited
    ? n.tag(t.no, ie.StartGroup).raw(r.toBinary(e)).tag(t.no, ie.EndGroup)
    : n.tag(t.no, ie.LengthDelimited).bytes(r.toBinary(e));
}
function Ht(n, e, t, i) {
  ne(i !== void 0);
  let [r, s] = xo(e);
  n.tag(t, r)[s](i);
}
function uu(n, e, t, i) {
  if (!i.length) return;
  n.tag(t, ie.LengthDelimited).fork();
  let [, r] = xo(e);
  for (let s = 0; s < i.length; s++) n[r](i[s]);
  n.join();
}
function xo(n) {
  let e = ie.Varint;
  switch (n) {
    case I.BYTES:
    case I.STRING:
      e = ie.LengthDelimited;
      break;
    case I.DOUBLE:
    case I.FIXED64:
    case I.SFIXED64:
      e = ie.Bit64;
      break;
    case I.FIXED32:
    case I.SFIXED32:
    case I.FLOAT:
      e = ie.Bit32;
      break;
  }
  const t = I[n].toLowerCase();
  return [e, t];
}
function lu() {
  return {
    setEnumType: bo,
    initPartial(n, e) {
      if (n === void 0) return;
      const t = e.getType();
      for (const i of t.fields.byMember()) {
        const r = i.localName,
          s = e,
          o = n;
        if (o[r] != null)
          switch (i.kind) {
            case "oneof":
              const a = o[r].case;
              if (a === void 0) continue;
              const c = i.findField(a);
              let d = o[r].value;
              c && c.kind == "message" && !ct(d, c.T)
                ? (d = new c.T(d))
                : c && c.kind === "scalar" && c.T === I.BYTES && (d = Ft(d)),
                (s[r] = { case: a, value: d });
              break;
            case "scalar":
            case "enum":
              let u = o[r];
              i.T === I.BYTES && (u = i.repeated ? u.map(Ft) : Ft(u)),
                (s[r] = u);
              break;
            case "map":
              switch (i.V.kind) {
                case "scalar":
                case "enum":
                  if (i.V.T === I.BYTES)
                    for (const [f, g] of Object.entries(o[r])) s[r][f] = Ft(g);
                  else Object.assign(s[r], o[r]);
                  break;
                case "message":
                  const h = i.V.T;
                  for (const f of Object.keys(o[r])) {
                    let g = o[r][f];
                    h.fieldWrapper || (g = new h(g)), (s[r][f] = g);
                  }
                  break;
              }
              break;
            case "message":
              const l = i.T;
              if (i.repeated) s[r] = o[r].map((h) => (ct(h, l) ? h : new l(h)));
              else {
                const h = o[r];
                l.fieldWrapper
                  ? l.typeName === "google.protobuf.BytesValue"
                    ? (s[r] = Ft(h))
                    : (s[r] = h)
                  : (s[r] = ct(h, l) ? h : new l(h));
              }
              break;
          }
      }
    },
    equals(n, e, t) {
      return e === t
        ? !0
        : !e || !t
          ? !1
          : n.fields.byMember().every((i) => {
              const r = e[i.localName],
                s = t[i.localName];
              if (i.repeated) {
                if (r.length !== s.length) return !1;
                switch (i.kind) {
                  case "message":
                    return r.every((o, a) => i.T.equals(o, s[a]));
                  case "scalar":
                    return r.every((o, a) => $e(i.T, o, s[a]));
                  case "enum":
                    return r.every((o, a) => $e(I.INT32, o, s[a]));
                }
                throw new Error("repeated cannot contain ".concat(i.kind));
              }
              switch (i.kind) {
                case "message":
                  return i.T.equals(r, s);
                case "enum":
                  return $e(I.INT32, r, s);
                case "scalar":
                  return $e(i.T, r, s);
                case "oneof":
                  if (r.case !== s.case) return !1;
                  const o = i.findField(r.case);
                  if (o === void 0) return !0;
                  switch (o.kind) {
                    case "message":
                      return o.T.equals(r.value, s.value);
                    case "enum":
                      return $e(I.INT32, r.value, s.value);
                    case "scalar":
                      return $e(o.T, r.value, s.value);
                  }
                  throw new Error("oneof cannot contain ".concat(o.kind));
                case "map":
                  const a = Object.keys(r).concat(Object.keys(s));
                  switch (i.V.kind) {
                    case "message":
                      const c = i.V.T;
                      return a.every((u) => c.equals(r[u], s[u]));
                    case "enum":
                      return a.every((u) => $e(I.INT32, r[u], s[u]));
                    case "scalar":
                      const d = i.V.T;
                      return a.every((u) => $e(d, r[u], s[u]));
                  }
                  break;
              }
            });
    },
    clone(n) {
      const e = n.getType(),
        t = new e(),
        i = t;
      for (const r of e.fields.byMember()) {
        const s = n[r.localName];
        let o;
        if (r.repeated) o = s.map(un);
        else if (r.kind == "map") {
          o = i[r.localName];
          for (const [a, c] of Object.entries(s)) o[a] = un(c);
        } else
          r.kind == "oneof"
            ? (o = r.findField(s.case)
                ? { case: s.case, value: un(s.value) }
                : { case: void 0 })
            : (o = un(s));
        i[r.localName] = o;
      }
      for (const r of e.runtime.bin.listUnknownFields(n))
        e.runtime.bin.onUnknownField(i, r.no, r.wireType, r.data);
      return t;
    },
  };
}
function un(n) {
  if (n === void 0) return n;
  if (ct(n)) return n.clone();
  if (n instanceof Uint8Array) {
    const e = new Uint8Array(n.byteLength);
    return e.set(n), e;
  }
  return n;
}
function Ft(n) {
  return n instanceof Uint8Array ? n : new Uint8Array(n);
}
function hu(n, e, t) {
  return {
    syntax: n,
    json: tu(),
    bin: ou(),
    util: Object.assign(Object.assign({}, lu()), {
      newFieldList: e,
      initFields: t,
    }),
    makeMessageType(i, r, s) {
      return Bd(this, i, r, s);
    },
    makeEnum: jd,
    makeEnumType: yo,
    getEnumType: Fd,
    makeExtension(i, r, s) {
      return Jd(this, i, r, s);
    },
  };
}
class fu {
  constructor(e, t) {
    (this._fields = e), (this._normalizer = t);
  }
  findJsonName(e) {
    if (!this.jsonNames) {
      const t = {};
      for (const i of this.list()) t[i.jsonName] = t[i.name] = i;
      this.jsonNames = t;
    }
    return this.jsonNames[e];
  }
  find(e) {
    if (!this.numbers) {
      const t = {};
      for (const i of this.list()) t[i.no] = i;
      this.numbers = t;
    }
    return this.numbers[e];
  }
  list() {
    return this.all || (this.all = this._normalizer(this._fields)), this.all;
  }
  byNumber() {
    return (
      this.numbersAsc ||
        (this.numbersAsc = this.list()
          .concat()
          .sort((e, t) => e.no - t.no)),
      this.numbersAsc
    );
  }
  byMember() {
    if (!this.members) {
      this.members = [];
      const e = this.members;
      let t;
      for (const i of this.list())
        i.oneof ? i.oneof !== t && ((t = i.oneof), e.push(t)) : e.push(i);
    }
    return this.members;
  }
}
function Ao(n, e) {
  const t = Do(n);
  return e ? t : yu(bu(t));
}
function pu(n) {
  return Ao(n, !1);
}
const mu = Do;
function Do(n) {
  let e = !1;
  const t = [];
  for (let i = 0; i < n.length; i++) {
    let r = n.charAt(i);
    switch (r) {
      case "_":
        e = !0;
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        t.push(r), (e = !1);
        break;
      default:
        e && ((e = !1), (r = r.toUpperCase())), t.push(r);
        break;
    }
  }
  return t.join("");
}
const gu = new Set(["constructor", "toString", "toJSON", "valueOf"]),
  vu = new Set([
    "getType",
    "clone",
    "equals",
    "fromBinary",
    "fromJson",
    "fromJsonString",
    "toBinary",
    "toJson",
    "toJsonString",
    "toObject",
  ]),
  Mo = (n) => "".concat(n, "$"),
  bu = (n) => (vu.has(n) ? Mo(n) : n),
  yu = (n) => (gu.has(n) ? Mo(n) : n);
class ku {
  constructor(e) {
    (this.kind = "oneof"),
      (this.repeated = !1),
      (this.packed = !1),
      (this.opt = !1),
      (this.req = !1),
      (this.default = void 0),
      (this.fields = []),
      (this.name = e),
      (this.localName = pu(e));
  }
  addField(e) {
    ne(
      e.oneof === this,
      "field ".concat(e.name, " not one of ").concat(this.name),
    ),
      this.fields.push(e);
  }
  findField(e) {
    if (!this._lookup) {
      this._lookup = Object.create(null);
      for (let t = 0; t < this.fields.length; t++)
        this._lookup[this.fields[t].localName] = this.fields[t];
    }
    return this._lookup[e];
  }
}
function Su(n, e) {
  var t, i, r, s, o, a;
  const c = [];
  let d;
  for (const u of typeof n == "function" ? n() : n) {
    const l = u;
    if (
      ((l.localName = Ao(u.name, u.oneof !== void 0)),
      (l.jsonName = (t = u.jsonName) !== null && t !== void 0 ? t : mu(u.name)),
      (l.repeated = (i = u.repeated) !== null && i !== void 0 ? i : !1),
      u.kind == "scalar" &&
        (l.L = (r = u.L) !== null && r !== void 0 ? r : nt.BIGINT),
      (l.delimited = (s = u.delimited) !== null && s !== void 0 ? s : !1),
      (l.req = (o = u.req) !== null && o !== void 0 ? o : !1),
      (l.opt = (a = u.opt) !== null && a !== void 0 ? a : !1),
      u.packed === void 0 &&
        (l.packed =
          u.kind == "enum" ||
          (u.kind == "scalar" && u.T != I.BYTES && u.T != I.STRING)),
      u.oneof !== void 0)
    ) {
      const h = typeof u.oneof == "string" ? u.oneof : u.oneof.name;
      (!d || d.name != h) && (d = new ku(h)), (l.oneof = d), d.addField(l);
    }
    c.push(l);
  }
  return c;
}
const E = hu(
  "proto3",
  (n) => new fu(n, (e) => Su(e)),
  (n) => {
    for (const e of n.getType().fields.byMember()) {
      if (e.opt) continue;
      const t = e.localName,
        i = n;
      if (e.repeated) {
        i[t] = [];
        continue;
      }
      switch (e.kind) {
        case "oneof":
          i[t] = { case: void 0 };
          break;
        case "enum":
          i[t] = 0;
          break;
        case "map":
          i[t] = {};
          break;
        case "scalar":
          i[t] = Dt(e.T, e.L);
          break;
      }
    }
  },
);
class ve extends rr {
  constructor(e) {
    super(),
      (this.seconds = X.zero),
      (this.nanos = 0),
      E.util.initPartial(e, this);
  }
  fromJson(e, t) {
    if (typeof e != "string")
      throw new Error(
        "cannot decode google.protobuf.Timestamp from JSON: ".concat(
          E.json.debug(e),
        ),
      );
    const i = e.match(
      /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/,
    );
    if (!i)
      throw new Error(
        "cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string",
      );
    const r = Date.parse(
      i[1] +
        "-" +
        i[2] +
        "-" +
        i[3] +
        "T" +
        i[4] +
        ":" +
        i[5] +
        ":" +
        i[6] +
        (i[8] ? i[8] : "Z"),
    );
    if (Number.isNaN(r))
      throw new Error(
        "cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string",
      );
    if (
      r < Date.parse("0001-01-01T00:00:00Z") ||
      r > Date.parse("9999-12-31T23:59:59Z")
    )
      throw new Error(
        "cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive",
      );
    return (
      (this.seconds = X.parse(r / 1e3)),
      (this.nanos = 0),
      i[7] &&
        (this.nanos = parseInt("1" + i[7] + "0".repeat(9 - i[7].length)) - 1e9),
      this
    );
  }
  toJson(e) {
    const t = Number(this.seconds) * 1e3;
    if (
      t < Date.parse("0001-01-01T00:00:00Z") ||
      t > Date.parse("9999-12-31T23:59:59Z")
    )
      throw new Error(
        "cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive",
      );
    if (this.nanos < 0)
      throw new Error(
        "cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative",
      );
    let i = "Z";
    if (this.nanos > 0) {
      const r = (this.nanos + 1e9).toString().substring(1);
      r.substring(3) === "000000"
        ? (i = "." + r.substring(0, 3) + "Z")
        : r.substring(6) === "000"
          ? (i = "." + r.substring(0, 6) + "Z")
          : (i = "." + r + "Z");
    }
    return new Date(t).toISOString().replace(".000Z", i);
  }
  toDate() {
    return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
  }
  static now() {
    return ve.fromDate(new Date());
  }
  static fromDate(e) {
    const t = e.getTime();
    return new ve({
      seconds: X.parse(Math.floor(t / 1e3)),
      nanos: (t % 1e3) * 1e6,
    });
  }
  static fromBinary(e, t) {
    return new ve().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ve().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ve().fromJsonString(e, t);
  }
  static equals(e, t) {
    return E.util.equals(ve, e, t);
  }
}
ve.runtime = E;
ve.typeName = "google.protobuf.Timestamp";
ve.fields = E.util.newFieldList(() => [
  { no: 1, name: "seconds", kind: "scalar", T: 3 },
  { no: 2, name: "nanos", kind: "scalar", T: 5 },
]);
const Tu = E.makeMessageType("livekit.MetricsBatch", () => [
    { no: 1, name: "timestamp_ms", kind: "scalar", T: 3 },
    { no: 2, name: "normalized_timestamp", kind: "message", T: ve },
    { no: 3, name: "str_data", kind: "scalar", T: 9, repeated: !0 },
    { no: 4, name: "time_series", kind: "message", T: Cu, repeated: !0 },
    { no: 5, name: "events", kind: "message", T: Eu, repeated: !0 },
  ]),
  Cu = E.makeMessageType("livekit.TimeSeriesMetric", () => [
    { no: 1, name: "label", kind: "scalar", T: 13 },
    { no: 2, name: "participant_identity", kind: "scalar", T: 13 },
    { no: 3, name: "track_sid", kind: "scalar", T: 13 },
    { no: 4, name: "samples", kind: "message", T: Pu, repeated: !0 },
    { no: 5, name: "rid", kind: "scalar", T: 13 },
  ]),
  Pu = E.makeMessageType("livekit.MetricSample", () => [
    { no: 1, name: "timestamp_ms", kind: "scalar", T: 3 },
    { no: 2, name: "normalized_timestamp", kind: "message", T: ve },
    { no: 3, name: "value", kind: "scalar", T: 2 },
  ]),
  Eu = E.makeMessageType("livekit.EventMetric", () => [
    { no: 1, name: "label", kind: "scalar", T: 13 },
    { no: 2, name: "participant_identity", kind: "scalar", T: 13 },
    { no: 3, name: "track_sid", kind: "scalar", T: 13 },
    { no: 4, name: "start_timestamp_ms", kind: "scalar", T: 3 },
    { no: 5, name: "end_timestamp_ms", kind: "scalar", T: 3, opt: !0 },
    { no: 6, name: "normalized_start_timestamp", kind: "message", T: ve },
    {
      no: 7,
      name: "normalized_end_timestamp",
      kind: "message",
      T: ve,
      opt: !0,
    },
    { no: 8, name: "metadata", kind: "scalar", T: 9 },
    { no: 9, name: "rid", kind: "scalar", T: 13 },
  ]),
  Ie = E.makeEnum("livekit.TrackType", [
    { no: 0, name: "AUDIO" },
    { no: 1, name: "VIDEO" },
    { no: 2, name: "DATA" },
  ]),
  pe = E.makeEnum("livekit.TrackSource", [
    { no: 0, name: "UNKNOWN" },
    { no: 1, name: "CAMERA" },
    { no: 2, name: "MICROPHONE" },
    { no: 3, name: "SCREEN_SHARE" },
    { no: 4, name: "SCREEN_SHARE_AUDIO" },
  ]),
  or = E.makeEnum("livekit.VideoQuality", [
    { no: 0, name: "LOW" },
    { no: 1, name: "MEDIUM" },
    { no: 2, name: "HIGH" },
    { no: 3, name: "OFF" },
  ]),
  Wt = E.makeEnum("livekit.ConnectionQuality", [
    { no: 0, name: "POOR" },
    { no: 1, name: "GOOD" },
    { no: 2, name: "EXCELLENT" },
    { no: 3, name: "LOST" },
  ]),
  Zt = E.makeEnum("livekit.ClientConfigSetting", [
    { no: 0, name: "UNSET" },
    { no: 1, name: "DISABLED" },
    { no: 2, name: "ENABLED" },
  ]),
  Et = E.makeEnum("livekit.DisconnectReason", [
    { no: 0, name: "UNKNOWN_REASON" },
    { no: 1, name: "CLIENT_INITIATED" },
    { no: 2, name: "DUPLICATE_IDENTITY" },
    { no: 3, name: "SERVER_SHUTDOWN" },
    { no: 4, name: "PARTICIPANT_REMOVED" },
    { no: 5, name: "ROOM_DELETED" },
    { no: 6, name: "STATE_MISMATCH" },
    { no: 7, name: "JOIN_FAILURE" },
    { no: 8, name: "MIGRATION" },
    { no: 9, name: "SIGNAL_CLOSE" },
    { no: 10, name: "ROOM_CLOSED" },
    { no: 11, name: "USER_UNAVAILABLE" },
    { no: 12, name: "USER_REJECTED" },
  ]),
  vt = E.makeEnum("livekit.ReconnectReason", [
    { no: 0, name: "RR_UNKNOWN" },
    { no: 1, name: "RR_SIGNAL_DISCONNECTED" },
    { no: 2, name: "RR_PUBLISHER_FAILED" },
    { no: 3, name: "RR_SUBSCRIBER_FAILED" },
    { no: 4, name: "RR_SWITCH_CANDIDATE" },
  ]),
  wu = E.makeEnum("livekit.SubscriptionError", [
    { no: 0, name: "SE_UNKNOWN" },
    { no: 1, name: "SE_CODEC_UNSUPPORTED" },
    { no: 2, name: "SE_TRACK_NOTFOUND" },
  ]),
  Ue = E.makeEnum("livekit.AudioTrackFeature", [
    { no: 0, name: "TF_STEREO" },
    { no: 1, name: "TF_NO_DTX" },
    { no: 2, name: "TF_AUTO_GAIN_CONTROL" },
    { no: 3, name: "TF_ECHO_CANCELLATION" },
    { no: 4, name: "TF_NOISE_SUPPRESSION" },
    { no: 5, name: "TF_ENHANCED_NOISE_CANCELLATION" },
  ]),
  ar = E.makeMessageType("livekit.Room", () => [
    { no: 1, name: "sid", kind: "scalar", T: 9 },
    { no: 2, name: "name", kind: "scalar", T: 9 },
    { no: 3, name: "empty_timeout", kind: "scalar", T: 13 },
    { no: 14, name: "departure_timeout", kind: "scalar", T: 13 },
    { no: 4, name: "max_participants", kind: "scalar", T: 13 },
    { no: 5, name: "creation_time", kind: "scalar", T: 3 },
    { no: 6, name: "turn_password", kind: "scalar", T: 9 },
    { no: 7, name: "enabled_codecs", kind: "message", T: Dn, repeated: !0 },
    { no: 8, name: "metadata", kind: "scalar", T: 9 },
    { no: 9, name: "num_participants", kind: "scalar", T: 13 },
    { no: 11, name: "num_publishers", kind: "scalar", T: 13 },
    { no: 10, name: "active_recording", kind: "scalar", T: 8 },
    { no: 13, name: "version", kind: "message", T: Wo },
  ]),
  Dn = E.makeMessageType("livekit.Codec", () => [
    { no: 1, name: "mime", kind: "scalar", T: 9 },
    { no: 2, name: "fmtp_line", kind: "scalar", T: 9 },
  ]),
  Ru = E.makeMessageType("livekit.ParticipantPermission", () => [
    { no: 1, name: "can_subscribe", kind: "scalar", T: 8 },
    { no: 2, name: "can_publish", kind: "scalar", T: 8 },
    { no: 3, name: "can_publish_data", kind: "scalar", T: 8 },
    {
      no: 9,
      name: "can_publish_sources",
      kind: "enum",
      T: E.getEnumType(pe),
      repeated: !0,
    },
    { no: 7, name: "hidden", kind: "scalar", T: 8 },
    { no: 8, name: "recorder", kind: "scalar", T: 8 },
    { no: 10, name: "can_update_metadata", kind: "scalar", T: 8 },
    { no: 11, name: "agent", kind: "scalar", T: 8 },
    { no: 12, name: "can_subscribe_metrics", kind: "scalar", T: 8 },
  ]),
  en = E.makeMessageType("livekit.ParticipantInfo", () => [
    { no: 1, name: "sid", kind: "scalar", T: 9 },
    { no: 2, name: "identity", kind: "scalar", T: 9 },
    { no: 3, name: "state", kind: "enum", T: E.getEnumType(Ii) },
    { no: 4, name: "tracks", kind: "message", T: Tt, repeated: !0 },
    { no: 5, name: "metadata", kind: "scalar", T: 9 },
    { no: 6, name: "joined_at", kind: "scalar", T: 3 },
    { no: 9, name: "name", kind: "scalar", T: 9 },
    { no: 10, name: "version", kind: "scalar", T: 13 },
    { no: 11, name: "permission", kind: "message", T: Ru },
    { no: 12, name: "region", kind: "scalar", T: 9 },
    { no: 13, name: "is_publisher", kind: "scalar", T: 8 },
    { no: 14, name: "kind", kind: "enum", T: E.getEnumType(Mn) },
    {
      no: 15,
      name: "attributes",
      kind: "map",
      K: 9,
      V: { kind: "scalar", T: 9 },
    },
    { no: 16, name: "disconnect_reason", kind: "enum", T: E.getEnumType(Et) },
  ]),
  Ii = E.makeEnum("livekit.ParticipantInfo.State", [
    { no: 0, name: "JOINING" },
    { no: 1, name: "JOINED" },
    { no: 2, name: "ACTIVE" },
    { no: 3, name: "DISCONNECTED" },
  ]),
  Mn = E.makeEnum("livekit.ParticipantInfo.Kind", [
    { no: 0, name: "STANDARD" },
    { no: 1, name: "INGRESS" },
    { no: 2, name: "EGRESS" },
    { no: 3, name: "SIP" },
    { no: 4, name: "AGENT" },
  ]),
  Pe = E.makeEnum("livekit.Encryption.Type", [
    { no: 0, name: "NONE" },
    { no: 1, name: "GCM" },
    { no: 2, name: "CUSTOM" },
  ]),
  _u = E.makeMessageType("livekit.SimulcastCodecInfo", () => [
    { no: 1, name: "mime_type", kind: "scalar", T: 9 },
    { no: 2, name: "mid", kind: "scalar", T: 9 },
    { no: 3, name: "cid", kind: "scalar", T: 9 },
    { no: 4, name: "layers", kind: "message", T: dt, repeated: !0 },
  ]),
  Tt = E.makeMessageType("livekit.TrackInfo", () => [
    { no: 1, name: "sid", kind: "scalar", T: 9 },
    { no: 2, name: "type", kind: "enum", T: E.getEnumType(Ie) },
    { no: 3, name: "name", kind: "scalar", T: 9 },
    { no: 4, name: "muted", kind: "scalar", T: 8 },
    { no: 5, name: "width", kind: "scalar", T: 13 },
    { no: 6, name: "height", kind: "scalar", T: 13 },
    { no: 7, name: "simulcast", kind: "scalar", T: 8 },
    { no: 8, name: "disable_dtx", kind: "scalar", T: 8 },
    { no: 9, name: "source", kind: "enum", T: E.getEnumType(pe) },
    { no: 10, name: "layers", kind: "message", T: dt, repeated: !0 },
    { no: 11, name: "mime_type", kind: "scalar", T: 9 },
    { no: 12, name: "mid", kind: "scalar", T: 9 },
    { no: 13, name: "codecs", kind: "message", T: _u, repeated: !0 },
    { no: 14, name: "stereo", kind: "scalar", T: 8 },
    { no: 15, name: "disable_red", kind: "scalar", T: 8 },
    { no: 16, name: "encryption", kind: "enum", T: E.getEnumType(Pe) },
    { no: 17, name: "stream", kind: "scalar", T: 9 },
    { no: 18, name: "version", kind: "message", T: Wo },
    {
      no: 19,
      name: "audio_features",
      kind: "enum",
      T: E.getEnumType(Ue),
      repeated: !0,
    },
  ]),
  dt = E.makeMessageType("livekit.VideoLayer", () => [
    { no: 1, name: "quality", kind: "enum", T: E.getEnumType(or) },
    { no: 2, name: "width", kind: "scalar", T: 13 },
    { no: 3, name: "height", kind: "scalar", T: 13 },
    { no: 4, name: "bitrate", kind: "scalar", T: 13 },
    { no: 5, name: "ssrc", kind: "scalar", T: 13 },
  ]),
  Xe = E.makeMessageType("livekit.DataPacket", () => [
    { no: 1, name: "kind", kind: "enum", T: E.getEnumType(Q) },
    { no: 4, name: "participant_identity", kind: "scalar", T: 9 },
    {
      no: 5,
      name: "destination_identities",
      kind: "scalar",
      T: 9,
      repeated: !0,
    },
    { no: 2, name: "user", kind: "message", T: No, oneof: "value" },
    { no: 3, name: "speaker", kind: "message", T: Iu, oneof: "value" },
    { no: 6, name: "sip_dtmf", kind: "message", T: Lo, oneof: "value" },
    { no: 7, name: "transcription", kind: "message", T: xu, oneof: "value" },
    { no: 8, name: "metrics", kind: "message", T: Tu, oneof: "value" },
    { no: 9, name: "chat_message", kind: "message", T: xi, oneof: "value" },
    { no: 10, name: "rpc_request", kind: "message", T: Uo, oneof: "value" },
    { no: 11, name: "rpc_ack", kind: "message", T: Fo, oneof: "value" },
    { no: 12, name: "rpc_response", kind: "message", T: jo, oneof: "value" },
  ]),
  Q = E.makeEnum("livekit.DataPacket.Kind", [
    { no: 0, name: "RELIABLE" },
    { no: 1, name: "LOSSY" },
  ]),
  Iu = E.makeMessageType("livekit.ActiveSpeakerUpdate", () => [
    { no: 1, name: "speakers", kind: "message", T: Oo, repeated: !0 },
  ]),
  Oo = E.makeMessageType("livekit.SpeakerInfo", () => [
    { no: 1, name: "sid", kind: "scalar", T: 9 },
    { no: 2, name: "level", kind: "scalar", T: 2 },
    { no: 3, name: "active", kind: "scalar", T: 8 },
  ]),
  No = E.makeMessageType("livekit.UserPacket", () => [
    { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
    { no: 5, name: "participant_identity", kind: "scalar", T: 9 },
    { no: 2, name: "payload", kind: "scalar", T: 12 },
    { no: 3, name: "destination_sids", kind: "scalar", T: 9, repeated: !0 },
    {
      no: 6,
      name: "destination_identities",
      kind: "scalar",
      T: 9,
      repeated: !0,
    },
    { no: 4, name: "topic", kind: "scalar", T: 9, opt: !0 },
    { no: 8, name: "id", kind: "scalar", T: 9, opt: !0 },
    { no: 9, name: "start_time", kind: "scalar", T: 4, opt: !0 },
    { no: 10, name: "end_time", kind: "scalar", T: 4, opt: !0 },
  ]),
  Lo = E.makeMessageType("livekit.SipDTMF", () => [
    { no: 3, name: "code", kind: "scalar", T: 13 },
    { no: 4, name: "digit", kind: "scalar", T: 9 },
  ]),
  xu = E.makeMessageType("livekit.Transcription", () => [
    { no: 2, name: "transcribed_participant_identity", kind: "scalar", T: 9 },
    { no: 3, name: "track_id", kind: "scalar", T: 9 },
    { no: 4, name: "segments", kind: "message", T: Au, repeated: !0 },
  ]),
  Au = E.makeMessageType("livekit.TranscriptionSegment", () => [
    { no: 1, name: "id", kind: "scalar", T: 9 },
    { no: 2, name: "text", kind: "scalar", T: 9 },
    { no: 3, name: "start_time", kind: "scalar", T: 4 },
    { no: 4, name: "end_time", kind: "scalar", T: 4 },
    { no: 5, name: "final", kind: "scalar", T: 8 },
    { no: 6, name: "language", kind: "scalar", T: 9 },
  ]),
  xi = E.makeMessageType("livekit.ChatMessage", () => [
    { no: 1, name: "id", kind: "scalar", T: 9 },
    { no: 2, name: "timestamp", kind: "scalar", T: 3 },
    { no: 3, name: "edit_timestamp", kind: "scalar", T: 3, opt: !0 },
    { no: 4, name: "message", kind: "scalar", T: 9 },
    { no: 5, name: "deleted", kind: "scalar", T: 8 },
    { no: 6, name: "generated", kind: "scalar", T: 8 },
  ]),
  Uo = E.makeMessageType("livekit.RpcRequest", () => [
    { no: 1, name: "id", kind: "scalar", T: 9 },
    { no: 2, name: "method", kind: "scalar", T: 9 },
    { no: 3, name: "payload", kind: "scalar", T: 9 },
    { no: 4, name: "response_timeout_ms", kind: "scalar", T: 13 },
    { no: 5, name: "version", kind: "scalar", T: 13 },
  ]),
  Fo = E.makeMessageType("livekit.RpcAck", () => [
    { no: 1, name: "request_id", kind: "scalar", T: 9 },
  ]),
  jo = E.makeMessageType("livekit.RpcResponse", () => [
    { no: 1, name: "request_id", kind: "scalar", T: 9 },
    { no: 2, name: "payload", kind: "scalar", T: 9, oneof: "value" },
    { no: 3, name: "error", kind: "message", T: Bo, oneof: "value" },
  ]),
  Bo = E.makeMessageType("livekit.RpcError", () => [
    { no: 1, name: "code", kind: "scalar", T: 13 },
    { no: 2, name: "message", kind: "scalar", T: 9 },
    { no: 3, name: "data", kind: "scalar", T: 9 },
  ]),
  Vo = E.makeMessageType("livekit.ParticipantTracks", () => [
    { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
    { no: 2, name: "track_sids", kind: "scalar", T: 9, repeated: !0 },
  ]),
  Du = E.makeMessageType("livekit.ServerInfo", () => [
    { no: 1, name: "edition", kind: "enum", T: E.getEnumType(qo) },
    { no: 2, name: "version", kind: "scalar", T: 9 },
    { no: 3, name: "protocol", kind: "scalar", T: 5 },
    { no: 4, name: "region", kind: "scalar", T: 9 },
    { no: 5, name: "node_id", kind: "scalar", T: 9 },
    { no: 6, name: "debug_info", kind: "scalar", T: 9 },
    { no: 7, name: "agent_protocol", kind: "scalar", T: 5 },
  ]),
  qo = E.makeEnum("livekit.ServerInfo.Edition", [
    { no: 0, name: "Standard" },
    { no: 1, name: "Cloud" },
  ]),
  Mu = E.makeMessageType("livekit.ClientInfo", () => [
    { no: 1, name: "sdk", kind: "enum", T: E.getEnumType(zo) },
    { no: 2, name: "version", kind: "scalar", T: 9 },
    { no: 3, name: "protocol", kind: "scalar", T: 5 },
    { no: 4, name: "os", kind: "scalar", T: 9 },
    { no: 5, name: "os_version", kind: "scalar", T: 9 },
    { no: 6, name: "device_model", kind: "scalar", T: 9 },
    { no: 7, name: "browser", kind: "scalar", T: 9 },
    { no: 8, name: "browser_version", kind: "scalar", T: 9 },
    { no: 9, name: "address", kind: "scalar", T: 9 },
    { no: 10, name: "network", kind: "scalar", T: 9 },
    { no: 11, name: "other_sdks", kind: "scalar", T: 9 },
  ]),
  zo = E.makeEnum("livekit.ClientInfo.SDK", [
    { no: 0, name: "UNKNOWN" },
    { no: 1, name: "JS" },
    { no: 2, name: "SWIFT" },
    { no: 3, name: "ANDROID" },
    { no: 4, name: "FLUTTER" },
    { no: 5, name: "GO" },
    { no: 6, name: "UNITY" },
    { no: 7, name: "REACT_NATIVE" },
    { no: 8, name: "RUST" },
    { no: 9, name: "PYTHON" },
    { no: 10, name: "CPP" },
    { no: 11, name: "UNITY_WEB" },
    { no: 12, name: "NODE" },
  ]),
  Go = E.makeMessageType("livekit.ClientConfiguration", () => [
    { no: 1, name: "video", kind: "message", T: Jr },
    { no: 2, name: "screen", kind: "message", T: Jr },
    { no: 3, name: "resume_connection", kind: "enum", T: E.getEnumType(Zt) },
    { no: 4, name: "disabled_codecs", kind: "message", T: Ou },
    { no: 5, name: "force_relay", kind: "enum", T: E.getEnumType(Zt) },
  ]),
  Jr = E.makeMessageType("livekit.VideoConfiguration", () => [
    { no: 1, name: "hardware_encoder", kind: "enum", T: E.getEnumType(Zt) },
  ]),
  Ou = E.makeMessageType("livekit.DisabledCodecs", () => [
    { no: 1, name: "codecs", kind: "message", T: Dn, repeated: !0 },
    { no: 2, name: "publish", kind: "message", T: Dn, repeated: !0 },
  ]),
  Wo = E.makeMessageType("livekit.TimedVersion", () => [
    { no: 1, name: "unix_micro", kind: "scalar", T: 3 },
    { no: 2, name: "ticks", kind: "scalar", T: 5 },
  ]),
  xe = E.makeEnum("livekit.SignalTarget", [
    { no: 0, name: "PUBLISHER" },
    { no: 1, name: "SUBSCRIBER" },
  ]),
  Ai = E.makeEnum("livekit.StreamState", [
    { no: 0, name: "ACTIVE" },
    { no: 1, name: "PAUSED" },
  ]),
  Nu = E.makeEnum("livekit.CandidateProtocol", [
    { no: 0, name: "UDP" },
    { no: 1, name: "TCP" },
    { no: 2, name: "TLS" },
  ]),
  Lu = E.makeMessageType("livekit.SignalRequest", () => [
    { no: 1, name: "offer", kind: "message", T: lt, oneof: "message" },
    { no: 2, name: "answer", kind: "message", T: lt, oneof: "message" },
    { no: 3, name: "trickle", kind: "message", T: cr, oneof: "message" },
    { no: 4, name: "add_track", kind: "message", T: Mi, oneof: "message" },
    { no: 5, name: "mute", kind: "message", T: dr, oneof: "message" },
    { no: 6, name: "subscription", kind: "message", T: Kn, oneof: "message" },
    { no: 7, name: "track_setting", kind: "message", T: Ko, oneof: "message" },
    { no: 8, name: "leave", kind: "message", T: Hn, oneof: "message" },
    { no: 10, name: "update_layers", kind: "message", T: Jo, oneof: "message" },
    {
      no: 11,
      name: "subscription_permission",
      kind: "message",
      T: Xo,
      oneof: "message",
    },
    { no: 12, name: "sync_state", kind: "message", T: Zo, oneof: "message" },
    { no: 13, name: "simulate", kind: "message", T: Ne, oneof: "message" },
    { no: 14, name: "ping", kind: "scalar", T: 3, oneof: "message" },
    {
      no: 15,
      name: "update_metadata",
      kind: "message",
      T: Yo,
      oneof: "message",
    },
    { no: 16, name: "ping_req", kind: "message", T: ta, oneof: "message" },
    {
      no: 17,
      name: "update_audio_track",
      kind: "message",
      T: Ho,
      oneof: "message",
    },
    {
      no: 18,
      name: "update_video_track",
      kind: "message",
      T: Vu,
      oneof: "message",
    },
  ]),
  Yr = E.makeMessageType("livekit.SignalResponse", () => [
    { no: 1, name: "join", kind: "message", T: Uu, oneof: "message" },
    { no: 2, name: "answer", kind: "message", T: lt, oneof: "message" },
    { no: 3, name: "offer", kind: "message", T: lt, oneof: "message" },
    { no: 4, name: "trickle", kind: "message", T: cr, oneof: "message" },
    { no: 5, name: "update", kind: "message", T: Bu, oneof: "message" },
    {
      no: 6,
      name: "track_published",
      kind: "message",
      T: ur,
      oneof: "message",
    },
    { no: 8, name: "leave", kind: "message", T: Hn, oneof: "message" },
    { no: 9, name: "mute", kind: "message", T: dr, oneof: "message" },
    {
      no: 10,
      name: "speakers_changed",
      kind: "message",
      T: qu,
      oneof: "message",
    },
    { no: 11, name: "room_update", kind: "message", T: zu, oneof: "message" },
    {
      no: 12,
      name: "connection_quality",
      kind: "message",
      T: Wu,
      oneof: "message",
    },
    {
      no: 13,
      name: "stream_state_update",
      kind: "message",
      T: Hu,
      oneof: "message",
    },
    {
      no: 14,
      name: "subscribed_quality_update",
      kind: "message",
      T: Yu,
      oneof: "message",
    },
    {
      no: 15,
      name: "subscription_permission_update",
      kind: "message",
      T: Qu,
      oneof: "message",
    },
    { no: 16, name: "refresh_token", kind: "scalar", T: 9, oneof: "message" },
    {
      no: 17,
      name: "track_unpublished",
      kind: "message",
      T: ju,
      oneof: "message",
    },
    { no: 18, name: "pong", kind: "scalar", T: 3, oneof: "message" },
    { no: 19, name: "reconnect", kind: "message", T: Fu, oneof: "message" },
    { no: 20, name: "pong_resp", kind: "message", T: $u, oneof: "message" },
    {
      no: 21,
      name: "subscription_response",
      kind: "message",
      T: el,
      oneof: "message",
    },
    {
      no: 22,
      name: "request_response",
      kind: "message",
      T: tl,
      oneof: "message",
    },
    {
      no: 23,
      name: "track_subscribed",
      kind: "message",
      T: nl,
      oneof: "message",
    },
  ]),
  Di = E.makeMessageType("livekit.SimulcastCodec", () => [
    { no: 1, name: "codec", kind: "scalar", T: 9 },
    { no: 2, name: "cid", kind: "scalar", T: 9 },
  ]),
  Mi = E.makeMessageType("livekit.AddTrackRequest", () => [
    { no: 1, name: "cid", kind: "scalar", T: 9 },
    { no: 2, name: "name", kind: "scalar", T: 9 },
    { no: 3, name: "type", kind: "enum", T: E.getEnumType(Ie) },
    { no: 4, name: "width", kind: "scalar", T: 13 },
    { no: 5, name: "height", kind: "scalar", T: 13 },
    { no: 6, name: "muted", kind: "scalar", T: 8 },
    { no: 7, name: "disable_dtx", kind: "scalar", T: 8 },
    { no: 8, name: "source", kind: "enum", T: E.getEnumType(pe) },
    { no: 9, name: "layers", kind: "message", T: dt, repeated: !0 },
    { no: 10, name: "simulcast_codecs", kind: "message", T: Di, repeated: !0 },
    { no: 11, name: "sid", kind: "scalar", T: 9 },
    { no: 12, name: "stereo", kind: "scalar", T: 8 },
    { no: 13, name: "disable_red", kind: "scalar", T: 8 },
    { no: 14, name: "encryption", kind: "enum", T: E.getEnumType(Pe) },
    { no: 15, name: "stream", kind: "scalar", T: 9 },
  ]),
  cr = E.makeMessageType("livekit.TrickleRequest", () => [
    { no: 1, name: "candidateInit", kind: "scalar", T: 9 },
    { no: 2, name: "target", kind: "enum", T: E.getEnumType(xe) },
    { no: 3, name: "final", kind: "scalar", T: 8 },
  ]),
  dr = E.makeMessageType("livekit.MuteTrackRequest", () => [
    { no: 1, name: "sid", kind: "scalar", T: 9 },
    { no: 2, name: "muted", kind: "scalar", T: 8 },
  ]),
  Uu = E.makeMessageType("livekit.JoinResponse", () => [
    { no: 1, name: "room", kind: "message", T: ar },
    { no: 2, name: "participant", kind: "message", T: en },
    { no: 3, name: "other_participants", kind: "message", T: en, repeated: !0 },
    { no: 4, name: "server_version", kind: "scalar", T: 9 },
    { no: 5, name: "ice_servers", kind: "message", T: Qo, repeated: !0 },
    { no: 6, name: "subscriber_primary", kind: "scalar", T: 8 },
    { no: 7, name: "alternative_url", kind: "scalar", T: 9 },
    { no: 8, name: "client_configuration", kind: "message", T: Go },
    { no: 9, name: "server_region", kind: "scalar", T: 9 },
    { no: 10, name: "ping_timeout", kind: "scalar", T: 5 },
    { no: 11, name: "ping_interval", kind: "scalar", T: 5 },
    { no: 12, name: "server_info", kind: "message", T: Du },
    { no: 13, name: "sif_trailer", kind: "scalar", T: 12 },
    {
      no: 14,
      name: "enabled_publish_codecs",
      kind: "message",
      T: Dn,
      repeated: !0,
    },
    { no: 15, name: "fast_publish", kind: "scalar", T: 8 },
  ]),
  Fu = E.makeMessageType("livekit.ReconnectResponse", () => [
    { no: 1, name: "ice_servers", kind: "message", T: Qo, repeated: !0 },
    { no: 2, name: "client_configuration", kind: "message", T: Go },
  ]),
  ur = E.makeMessageType("livekit.TrackPublishedResponse", () => [
    { no: 1, name: "cid", kind: "scalar", T: 9 },
    { no: 2, name: "track", kind: "message", T: Tt },
  ]),
  ju = E.makeMessageType("livekit.TrackUnpublishedResponse", () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 },
  ]),
  lt = E.makeMessageType("livekit.SessionDescription", () => [
    { no: 1, name: "type", kind: "scalar", T: 9 },
    { no: 2, name: "sdp", kind: "scalar", T: 9 },
  ]),
  Bu = E.makeMessageType("livekit.ParticipantUpdate", () => [
    { no: 1, name: "participants", kind: "message", T: en, repeated: !0 },
  ]),
  Kn = E.makeMessageType("livekit.UpdateSubscription", () => [
    { no: 1, name: "track_sids", kind: "scalar", T: 9, repeated: !0 },
    { no: 2, name: "subscribe", kind: "scalar", T: 8 },
    { no: 3, name: "participant_tracks", kind: "message", T: Vo, repeated: !0 },
  ]),
  Ko = E.makeMessageType("livekit.UpdateTrackSettings", () => [
    { no: 1, name: "track_sids", kind: "scalar", T: 9, repeated: !0 },
    { no: 3, name: "disabled", kind: "scalar", T: 8 },
    { no: 4, name: "quality", kind: "enum", T: E.getEnumType(or) },
    { no: 5, name: "width", kind: "scalar", T: 13 },
    { no: 6, name: "height", kind: "scalar", T: 13 },
    { no: 7, name: "fps", kind: "scalar", T: 13 },
    { no: 8, name: "priority", kind: "scalar", T: 13 },
  ]),
  Ho = E.makeMessageType("livekit.UpdateLocalAudioTrack", () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 },
    {
      no: 2,
      name: "features",
      kind: "enum",
      T: E.getEnumType(Ue),
      repeated: !0,
    },
  ]),
  Vu = E.makeMessageType("livekit.UpdateLocalVideoTrack", () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 },
    { no: 2, name: "width", kind: "scalar", T: 13 },
    { no: 3, name: "height", kind: "scalar", T: 13 },
  ]),
  Hn = E.makeMessageType("livekit.LeaveRequest", () => [
    { no: 1, name: "can_reconnect", kind: "scalar", T: 8 },
    { no: 2, name: "reason", kind: "enum", T: E.getEnumType(Et) },
    { no: 3, name: "action", kind: "enum", T: E.getEnumType(wt) },
    { no: 4, name: "regions", kind: "message", T: Xu },
  ]),
  wt = E.makeEnum("livekit.LeaveRequest.Action", [
    { no: 0, name: "DISCONNECT" },
    { no: 1, name: "RESUME" },
    { no: 2, name: "RECONNECT" },
  ]),
  Jo = E.makeMessageType("livekit.UpdateVideoLayers", () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 },
    { no: 2, name: "layers", kind: "message", T: dt, repeated: !0 },
  ]),
  Yo = E.makeMessageType("livekit.UpdateParticipantMetadata", () => [
    { no: 1, name: "metadata", kind: "scalar", T: 9 },
    { no: 2, name: "name", kind: "scalar", T: 9 },
    {
      no: 3,
      name: "attributes",
      kind: "map",
      K: 9,
      V: { kind: "scalar", T: 9 },
    },
    { no: 4, name: "request_id", kind: "scalar", T: 13 },
  ]),
  Qo = E.makeMessageType("livekit.ICEServer", () => [
    { no: 1, name: "urls", kind: "scalar", T: 9, repeated: !0 },
    { no: 2, name: "username", kind: "scalar", T: 9 },
    { no: 3, name: "credential", kind: "scalar", T: 9 },
  ]),
  qu = E.makeMessageType("livekit.SpeakersChanged", () => [
    { no: 1, name: "speakers", kind: "message", T: Oo, repeated: !0 },
  ]),
  zu = E.makeMessageType("livekit.RoomUpdate", () => [
    { no: 1, name: "room", kind: "message", T: ar },
  ]),
  Gu = E.makeMessageType("livekit.ConnectionQualityInfo", () => [
    { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
    { no: 2, name: "quality", kind: "enum", T: E.getEnumType(Wt) },
    { no: 3, name: "score", kind: "scalar", T: 2 },
  ]),
  Wu = E.makeMessageType("livekit.ConnectionQualityUpdate", () => [
    { no: 1, name: "updates", kind: "message", T: Gu, repeated: !0 },
  ]),
  Ku = E.makeMessageType("livekit.StreamStateInfo", () => [
    { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
    { no: 2, name: "track_sid", kind: "scalar", T: 9 },
    { no: 3, name: "state", kind: "enum", T: E.getEnumType(Ai) },
  ]),
  Hu = E.makeMessageType("livekit.StreamStateUpdate", () => [
    { no: 1, name: "stream_states", kind: "message", T: Ku, repeated: !0 },
  ]),
  lr = E.makeMessageType("livekit.SubscribedQuality", () => [
    { no: 1, name: "quality", kind: "enum", T: E.getEnumType(or) },
    { no: 2, name: "enabled", kind: "scalar", T: 8 },
  ]),
  Ju = E.makeMessageType("livekit.SubscribedCodec", () => [
    { no: 1, name: "codec", kind: "scalar", T: 9 },
    { no: 2, name: "qualities", kind: "message", T: lr, repeated: !0 },
  ]),
  Yu = E.makeMessageType("livekit.SubscribedQualityUpdate", () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 },
    {
      no: 2,
      name: "subscribed_qualities",
      kind: "message",
      T: lr,
      repeated: !0,
    },
    { no: 3, name: "subscribed_codecs", kind: "message", T: Ju, repeated: !0 },
  ]),
  $o = E.makeMessageType("livekit.TrackPermission", () => [
    { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
    { no: 2, name: "all_tracks", kind: "scalar", T: 8 },
    { no: 3, name: "track_sids", kind: "scalar", T: 9, repeated: !0 },
    { no: 4, name: "participant_identity", kind: "scalar", T: 9 },
  ]),
  Xo = E.makeMessageType("livekit.SubscriptionPermission", () => [
    { no: 1, name: "all_participants", kind: "scalar", T: 8 },
    { no: 2, name: "track_permissions", kind: "message", T: $o, repeated: !0 },
  ]),
  Qu = E.makeMessageType("livekit.SubscriptionPermissionUpdate", () => [
    { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
    { no: 2, name: "track_sid", kind: "scalar", T: 9 },
    { no: 3, name: "allowed", kind: "scalar", T: 8 },
  ]),
  Zo = E.makeMessageType("livekit.SyncState", () => [
    { no: 1, name: "answer", kind: "message", T: lt },
    { no: 2, name: "subscription", kind: "message", T: Kn },
    { no: 3, name: "publish_tracks", kind: "message", T: ur, repeated: !0 },
    { no: 4, name: "data_channels", kind: "message", T: ea, repeated: !0 },
    { no: 5, name: "offer", kind: "message", T: lt },
    { no: 6, name: "track_sids_disabled", kind: "scalar", T: 9, repeated: !0 },
  ]),
  ea = E.makeMessageType("livekit.DataChannelInfo", () => [
    { no: 1, name: "label", kind: "scalar", T: 9 },
    { no: 2, name: "id", kind: "scalar", T: 13 },
    { no: 3, name: "target", kind: "enum", T: E.getEnumType(xe) },
  ]),
  Ne = E.makeMessageType("livekit.SimulateScenario", () => [
    { no: 1, name: "speaker_update", kind: "scalar", T: 5, oneof: "scenario" },
    { no: 2, name: "node_failure", kind: "scalar", T: 8, oneof: "scenario" },
    { no: 3, name: "migration", kind: "scalar", T: 8, oneof: "scenario" },
    { no: 4, name: "server_leave", kind: "scalar", T: 8, oneof: "scenario" },
    {
      no: 5,
      name: "switch_candidate_protocol",
      kind: "enum",
      T: E.getEnumType(Nu),
      oneof: "scenario",
    },
    {
      no: 6,
      name: "subscriber_bandwidth",
      kind: "scalar",
      T: 3,
      oneof: "scenario",
    },
    {
      no: 7,
      name: "disconnect_signal_on_resume",
      kind: "scalar",
      T: 8,
      oneof: "scenario",
    },
    {
      no: 8,
      name: "disconnect_signal_on_resume_no_messages",
      kind: "scalar",
      T: 8,
      oneof: "scenario",
    },
    {
      no: 9,
      name: "leave_request_full_reconnect",
      kind: "scalar",
      T: 8,
      oneof: "scenario",
    },
  ]),
  ta = E.makeMessageType("livekit.Ping", () => [
    { no: 1, name: "timestamp", kind: "scalar", T: 3 },
    { no: 2, name: "rtt", kind: "scalar", T: 3 },
  ]),
  $u = E.makeMessageType("livekit.Pong", () => [
    { no: 1, name: "last_ping_timestamp", kind: "scalar", T: 3 },
    { no: 2, name: "timestamp", kind: "scalar", T: 3 },
  ]),
  Xu = E.makeMessageType("livekit.RegionSettings", () => [
    { no: 1, name: "regions", kind: "message", T: Zu, repeated: !0 },
  ]),
  Zu = E.makeMessageType("livekit.RegionInfo", () => [
    { no: 1, name: "region", kind: "scalar", T: 9 },
    { no: 2, name: "url", kind: "scalar", T: 9 },
    { no: 3, name: "distance", kind: "scalar", T: 3 },
  ]),
  el = E.makeMessageType("livekit.SubscriptionResponse", () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 },
    { no: 2, name: "err", kind: "enum", T: E.getEnumType(wu) },
  ]),
  tl = E.makeMessageType("livekit.RequestResponse", () => [
    { no: 1, name: "request_id", kind: "scalar", T: 13 },
    { no: 2, name: "reason", kind: "enum", T: E.getEnumType(na) },
    { no: 3, name: "message", kind: "scalar", T: 9 },
  ]),
  na = E.makeEnum("livekit.RequestResponse.Reason", [
    { no: 0, name: "OK" },
    { no: 1, name: "NOT_FOUND" },
    { no: 2, name: "NOT_ALLOWED" },
    { no: 3, name: "LIMIT_EXCEEDED" },
  ]),
  nl = E.makeMessageType("livekit.TrackSubscribed", () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 },
  ]);
function il(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var yn = { exports: {} },
  rl = yn.exports,
  Qr;
function sl() {
  return (
    Qr ||
      ((Qr = 1),
      (function (n) {
        (function (e, t) {
          n.exports ? (n.exports = t()) : (e.log = t());
        })(rl, function () {
          var e = function () {},
            t = "undefined",
            i =
              typeof window !== t &&
              typeof window.navigator !== t &&
              /Trident\/|MSIE /.test(window.navigator.userAgent),
            r = ["trace", "debug", "info", "warn", "error"],
            s = {},
            o = null;
          function a(p, b) {
            var v = p[b];
            if (typeof v.bind == "function") return v.bind(p);
            try {
              return Function.prototype.bind.call(v, p);
            } catch {
              return function () {
                return Function.prototype.apply.apply(v, [p, arguments]);
              };
            }
          }
          function c() {
            console.log &&
              (console.log.apply
                ? console.log.apply(console, arguments)
                : Function.prototype.apply.apply(console.log, [
                    console,
                    arguments,
                  ])),
              console.trace && console.trace();
          }
          function d(p) {
            return (
              p === "debug" && (p = "log"),
              typeof console === t
                ? !1
                : p === "trace" && i
                  ? c
                  : console[p] !== void 0
                    ? a(console, p)
                    : console.log !== void 0
                      ? a(console, "log")
                      : e
            );
          }
          function u() {
            for (var p = this.getLevel(), b = 0; b < r.length; b++) {
              var v = r[b];
              this[v] = b < p ? e : this.methodFactory(v, p, this.name);
            }
            if (
              ((this.log = this.debug),
              typeof console === t && p < this.levels.SILENT)
            )
              return "No console available for logging";
          }
          function l(p) {
            return function () {
              typeof console !== t &&
                (u.call(this), this[p].apply(this, arguments));
            };
          }
          function h(p, b, v) {
            return d(p) || l.apply(this, arguments);
          }
          function f(p, b) {
            var v = this,
              D,
              C,
              k,
              y = "loglevel";
            typeof p == "string"
              ? (y += ":" + p)
              : typeof p == "symbol" && (y = void 0);
            function w(x) {
              var U = (r[x] || "silent").toUpperCase();
              if (!(typeof window === t || !y)) {
                try {
                  window.localStorage[y] = U;
                  return;
                } catch {}
                try {
                  window.document.cookie =
                    encodeURIComponent(y) + "=" + U + ";";
                } catch {}
              }
            }
            function S() {
              var x;
              if (!(typeof window === t || !y)) {
                try {
                  x = window.localStorage[y];
                } catch {}
                if (typeof x === t)
                  try {
                    var U = window.document.cookie,
                      Y = encodeURIComponent(y),
                      ae = U.indexOf(Y + "=");
                    ae !== -1 &&
                      (x = /^([^;]+)/.exec(U.slice(ae + Y.length + 1))[1]);
                  } catch {}
                return v.levels[x] === void 0 && (x = void 0), x;
              }
            }
            function A() {
              if (!(typeof window === t || !y)) {
                try {
                  window.localStorage.removeItem(y);
                } catch {}
                try {
                  window.document.cookie =
                    encodeURIComponent(y) +
                    "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                } catch {}
              }
            }
            function N(x) {
              var U = x;
              if (
                (typeof U == "string" &&
                  v.levels[U.toUpperCase()] !== void 0 &&
                  (U = v.levels[U.toUpperCase()]),
                typeof U == "number" && U >= 0 && U <= v.levels.SILENT)
              )
                return U;
              throw new TypeError(
                "log.setLevel() called with invalid level: " + x,
              );
            }
            (v.name = p),
              (v.levels = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5,
              }),
              (v.methodFactory = b || h),
              (v.getLevel = function () {
                return k ?? C ?? D;
              }),
              (v.setLevel = function (x, U) {
                return (k = N(x)), U !== !1 && w(k), u.call(v);
              }),
              (v.setDefaultLevel = function (x) {
                (C = N(x)), S() || v.setLevel(x, !1);
              }),
              (v.resetLevel = function () {
                (k = null), A(), u.call(v);
              }),
              (v.enableAll = function (x) {
                v.setLevel(v.levels.TRACE, x);
              }),
              (v.disableAll = function (x) {
                v.setLevel(v.levels.SILENT, x);
              }),
              (v.rebuild = function () {
                if ((o !== v && (D = N(o.getLevel())), u.call(v), o === v))
                  for (var x in s) s[x].rebuild();
              }),
              (D = N(o ? o.getLevel() : "WARN"));
            var L = S();
            L != null && (k = N(L)), u.call(v);
          }
          (o = new f()),
            (o.getLogger = function (b) {
              if ((typeof b != "symbol" && typeof b != "string") || b === "")
                throw new TypeError(
                  "You must supply a name when creating a logger.",
                );
              var v = s[b];
              return v || (v = s[b] = new f(b, o.methodFactory)), v;
            });
          var g = typeof window !== t ? window.log : void 0;
          return (
            (o.noConflict = function () {
              return (
                typeof window !== t && window.log === o && (window.log = g), o
              );
            }),
            (o.getLoggers = function () {
              return s;
            }),
            (o.default = o),
            o
          );
        });
      })(yn)),
    yn.exports
  );
}
var Jn = sl(),
  Oi;
(function (n) {
  (n[(n.trace = 0)] = "trace"),
    (n[(n.debug = 1)] = "debug"),
    (n[(n.info = 2)] = "info"),
    (n[(n.warn = 3)] = "warn"),
    (n[(n.error = 4)] = "error"),
    (n[(n.silent = 5)] = "silent");
})(Oi || (Oi = {}));
var Ae;
(function (n) {
  (n.Default = "livekit"),
    (n.Room = "livekit-room"),
    (n.Participant = "livekit-participant"),
    (n.Track = "livekit-track"),
    (n.Publication = "livekit-track-publication"),
    (n.Engine = "livekit-engine"),
    (n.Signal = "livekit-signal"),
    (n.PCManager = "livekit-pc-manager"),
    (n.PCTransport = "livekit-pc-transport"),
    (n.E2EE = "lk-e2ee");
})(Ae || (Ae = {}));
let q = Jn.getLogger("livekit");
Object.values(Ae).map((n) => Jn.getLogger(n));
q.setDefaultLevel(Oi.info);
function We(n) {
  const e = Jn.getLogger(n);
  return e.setDefaultLevel(q.getLevel()), e;
}
const ol = Jn.getLogger("lk-e2ee"),
  jt = 7e3,
  al = [0, 300, 2 * 2 * 300, 3 * 3 * 300, 4 * 4 * 300, jt, jt, jt, jt, jt];
class cl {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e] : al;
  }
  nextRetryDelayInMs(e) {
    if (e.retryCount >= this._retryDelays.length) return null;
    const t = this._retryDelays[e.retryCount];
    return e.retryCount <= 1 ? t : t + Math.random() * 1e3;
  }
}
function m(n, e, t, i) {
  function r(s) {
    return s instanceof t
      ? s
      : new t(function (o) {
          o(s);
        });
  }
  return new (t || (t = Promise))(function (s, o) {
    function a(u) {
      try {
        d(i.next(u));
      } catch (l) {
        o(l);
      }
    }
    function c(u) {
      try {
        d(i.throw(u));
      } catch (l) {
        o(l);
      }
    }
    function d(u) {
      u.done ? s(u.value) : r(u.value).then(a, c);
    }
    d((i = i.apply(n, e || [])).next());
  });
}
function $r(n) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && n[e],
    i = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function () {
        return (
          n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function kt(n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = n[Symbol.asyncIterator],
    t;
  return e
    ? e.call(n)
    : ((n = typeof $r == "function" ? $r(n) : n[Symbol.iterator]()),
      (t = {}),
      i("next"),
      i("throw"),
      i("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function i(s) {
    t[s] =
      n[s] &&
      function (o) {
        return new Promise(function (a, c) {
          (o = n[s](o)), r(a, c, o.done, o.value);
        });
      };
  }
  function r(s, o, a, c) {
    Promise.resolve(c).then(function (d) {
      s({ value: d, done: a });
    }, o);
  }
}
var ln = { exports: {} },
  Xr;
function dl() {
  if (Xr) return ln.exports;
  Xr = 1;
  var n = typeof Reflect == "object" ? Reflect : null,
    e =
      n && typeof n.apply == "function"
        ? n.apply
        : function (y, w, S) {
            return Function.prototype.apply.call(y, w, S);
          },
    t;
  n && typeof n.ownKeys == "function"
    ? (t = n.ownKeys)
    : Object.getOwnPropertySymbols
      ? (t = function (y) {
          return Object.getOwnPropertyNames(y).concat(
            Object.getOwnPropertySymbols(y),
          );
        })
      : (t = function (y) {
          return Object.getOwnPropertyNames(y);
        });
  function i(k) {
    console && console.warn && console.warn(k);
  }
  var r =
    Number.isNaN ||
    function (y) {
      return y !== y;
    };
  function s() {
    s.init.call(this);
  }
  (ln.exports = s),
    (ln.exports.once = v),
    (s.EventEmitter = s),
    (s.prototype._events = void 0),
    (s.prototype._eventsCount = 0),
    (s.prototype._maxListeners = void 0);
  var o = 10;
  function a(k) {
    if (typeof k != "function")
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' +
          typeof k,
      );
  }
  Object.defineProperty(s, "defaultMaxListeners", {
    enumerable: !0,
    get: function () {
      return o;
    },
    set: function (k) {
      if (typeof k != "number" || k < 0 || r(k))
        throw new RangeError(
          'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
            k +
            ".",
        );
      o = k;
    },
  }),
    (s.init = function () {
      (this._events === void 0 ||
        this._events === Object.getPrototypeOf(this)._events) &&
        ((this._events = Object.create(null)), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0);
    }),
    (s.prototype.setMaxListeners = function (y) {
      if (typeof y != "number" || y < 0 || r(y))
        throw new RangeError(
          'The value of "n" is out of range. It must be a non-negative number. Received ' +
            y +
            ".",
        );
      return (this._maxListeners = y), this;
    });
  function c(k) {
    return k._maxListeners === void 0 ? s.defaultMaxListeners : k._maxListeners;
  }
  (s.prototype.getMaxListeners = function () {
    return c(this);
  }),
    (s.prototype.emit = function (y) {
      for (var w = [], S = 1; S < arguments.length; S++) w.push(arguments[S]);
      var A = y === "error",
        N = this._events;
      if (N !== void 0) A = A && N.error === void 0;
      else if (!A) return !1;
      if (A) {
        var L;
        if ((w.length > 0 && (L = w[0]), L instanceof Error)) throw L;
        var x = new Error(
          "Unhandled error." + (L ? " (" + L.message + ")" : ""),
        );
        throw ((x.context = L), x);
      }
      var U = N[y];
      if (U === void 0) return !1;
      if (typeof U == "function") e(U, this, w);
      else
        for (var Y = U.length, ae = g(U, Y), S = 0; S < Y; ++S)
          e(ae[S], this, w);
      return !0;
    });
  function d(k, y, w, S) {
    var A, N, L;
    if (
      (a(w),
      (N = k._events),
      N === void 0
        ? ((N = k._events = Object.create(null)), (k._eventsCount = 0))
        : (N.newListener !== void 0 &&
            (k.emit("newListener", y, w.listener ? w.listener : w),
            (N = k._events)),
          (L = N[y])),
      L === void 0)
    )
      (L = N[y] = w), ++k._eventsCount;
    else if (
      (typeof L == "function"
        ? (L = N[y] = S ? [w, L] : [L, w])
        : S
          ? L.unshift(w)
          : L.push(w),
      (A = c(k)),
      A > 0 && L.length > A && !L.warned)
    ) {
      L.warned = !0;
      var x = new Error(
        "Possible EventEmitter memory leak detected. " +
          L.length +
          " " +
          String(y) +
          " listeners added. Use emitter.setMaxListeners() to increase limit",
      );
      (x.name = "MaxListenersExceededWarning"),
        (x.emitter = k),
        (x.type = y),
        (x.count = L.length),
        i(x);
    }
    return k;
  }
  (s.prototype.addListener = function (y, w) {
    return d(this, y, w, !1);
  }),
    (s.prototype.on = s.prototype.addListener),
    (s.prototype.prependListener = function (y, w) {
      return d(this, y, w, !0);
    });
  function u() {
    if (!this.fired)
      return (
        this.target.removeListener(this.type, this.wrapFn),
        (this.fired = !0),
        arguments.length === 0
          ? this.listener.call(this.target)
          : this.listener.apply(this.target, arguments)
      );
  }
  function l(k, y, w) {
    var S = { fired: !1, wrapFn: void 0, target: k, type: y, listener: w },
      A = u.bind(S);
    return (A.listener = w), (S.wrapFn = A), A;
  }
  (s.prototype.once = function (y, w) {
    return a(w), this.on(y, l(this, y, w)), this;
  }),
    (s.prototype.prependOnceListener = function (y, w) {
      return a(w), this.prependListener(y, l(this, y, w)), this;
    }),
    (s.prototype.removeListener = function (y, w) {
      var S, A, N, L, x;
      if ((a(w), (A = this._events), A === void 0)) return this;
      if (((S = A[y]), S === void 0)) return this;
      if (S === w || S.listener === w)
        --this._eventsCount === 0
          ? (this._events = Object.create(null))
          : (delete A[y],
            A.removeListener &&
              this.emit("removeListener", y, S.listener || w));
      else if (typeof S != "function") {
        for (N = -1, L = S.length - 1; L >= 0; L--)
          if (S[L] === w || S[L].listener === w) {
            (x = S[L].listener), (N = L);
            break;
          }
        if (N < 0) return this;
        N === 0 ? S.shift() : p(S, N),
          S.length === 1 && (A[y] = S[0]),
          A.removeListener !== void 0 && this.emit("removeListener", y, x || w);
      }
      return this;
    }),
    (s.prototype.off = s.prototype.removeListener),
    (s.prototype.removeAllListeners = function (y) {
      var w, S, A;
      if (((S = this._events), S === void 0)) return this;
      if (S.removeListener === void 0)
        return (
          arguments.length === 0
            ? ((this._events = Object.create(null)), (this._eventsCount = 0))
            : S[y] !== void 0 &&
              (--this._eventsCount === 0
                ? (this._events = Object.create(null))
                : delete S[y]),
          this
        );
      if (arguments.length === 0) {
        var N = Object.keys(S),
          L;
        for (A = 0; A < N.length; ++A)
          (L = N[A]), L !== "removeListener" && this.removeAllListeners(L);
        return (
          this.removeAllListeners("removeListener"),
          (this._events = Object.create(null)),
          (this._eventsCount = 0),
          this
        );
      }
      if (((w = S[y]), typeof w == "function")) this.removeListener(y, w);
      else if (w !== void 0)
        for (A = w.length - 1; A >= 0; A--) this.removeListener(y, w[A]);
      return this;
    });
  function h(k, y, w) {
    var S = k._events;
    if (S === void 0) return [];
    var A = S[y];
    return A === void 0
      ? []
      : typeof A == "function"
        ? w
          ? [A.listener || A]
          : [A]
        : w
          ? b(A)
          : g(A, A.length);
  }
  (s.prototype.listeners = function (y) {
    return h(this, y, !0);
  }),
    (s.prototype.rawListeners = function (y) {
      return h(this, y, !1);
    }),
    (s.listenerCount = function (k, y) {
      return typeof k.listenerCount == "function"
        ? k.listenerCount(y)
        : f.call(k, y);
    }),
    (s.prototype.listenerCount = f);
  function f(k) {
    var y = this._events;
    if (y !== void 0) {
      var w = y[k];
      if (typeof w == "function") return 1;
      if (w !== void 0) return w.length;
    }
    return 0;
  }
  s.prototype.eventNames = function () {
    return this._eventsCount > 0 ? t(this._events) : [];
  };
  function g(k, y) {
    for (var w = new Array(y), S = 0; S < y; ++S) w[S] = k[S];
    return w;
  }
  function p(k, y) {
    for (; y + 1 < k.length; y++) k[y] = k[y + 1];
    k.pop();
  }
  function b(k) {
    for (var y = new Array(k.length), w = 0; w < y.length; ++w)
      y[w] = k[w].listener || k[w];
    return y;
  }
  function v(k, y) {
    return new Promise(function (w, S) {
      function A(L) {
        k.removeListener(y, N), S(L);
      }
      function N() {
        typeof k.removeListener == "function" && k.removeListener("error", A),
          w([].slice.call(arguments));
      }
      C(k, y, N, { once: !0 }), y !== "error" && D(k, A, { once: !0 });
    });
  }
  function D(k, y, w) {
    typeof k.on == "function" && C(k, "error", y, w);
  }
  function C(k, y, w, S) {
    if (typeof k.on == "function") S.once ? k.once(y, w) : k.on(y, w);
    else if (typeof k.addEventListener == "function")
      k.addEventListener(y, function A(N) {
        S.once && k.removeEventListener(y, A), w(N);
      });
    else
      throw new TypeError(
        'The "emitter" argument must be of type EventEmitter. Received type ' +
          typeof k,
      );
  }
  return ln.exports;
}
var Be = dl();
let ia = !0,
  ra = !0;
function kn(n, e, t) {
  const i = n.match(e);
  return i && i.length >= t && parseInt(i[t], 10);
}
function ft(n, e, t) {
  if (!n.RTCPeerConnection) return;
  const i = n.RTCPeerConnection.prototype,
    r = i.addEventListener;
  i.addEventListener = function (o, a) {
    if (o !== e) return r.apply(this, arguments);
    const c = (d) => {
      const u = t(d);
      u && (a.handleEvent ? a.handleEvent(u) : a(u));
    };
    return (
      (this._eventMap = this._eventMap || {}),
      this._eventMap[e] || (this._eventMap[e] = new Map()),
      this._eventMap[e].set(a, c),
      r.apply(this, [o, c])
    );
  };
  const s = i.removeEventListener;
  (i.removeEventListener = function (o, a) {
    if (o !== e || !this._eventMap || !this._eventMap[e])
      return s.apply(this, arguments);
    if (!this._eventMap[e].has(a)) return s.apply(this, arguments);
    const c = this._eventMap[e].get(a);
    return (
      this._eventMap[e].delete(a),
      this._eventMap[e].size === 0 && delete this._eventMap[e],
      Object.keys(this._eventMap).length === 0 && delete this._eventMap,
      s.apply(this, [o, c])
    );
  }),
    Object.defineProperty(i, "on" + e, {
      get() {
        return this["_on" + e];
      },
      set(o) {
        this["_on" + e] &&
          (this.removeEventListener(e, this["_on" + e]),
          delete this["_on" + e]),
          o && this.addEventListener(e, (this["_on" + e] = o));
      },
      enumerable: !0,
      configurable: !0,
    });
}
function ul(n) {
  return typeof n != "boolean"
    ? new Error("Argument type: " + typeof n + ". Please use a boolean.")
    : ((ia = n),
      n ? "adapter.js logging disabled" : "adapter.js logging enabled");
}
function ll(n) {
  return typeof n != "boolean"
    ? new Error("Argument type: " + typeof n + ". Please use a boolean.")
    : ((ra = !n),
      "adapter.js deprecation warnings " + (n ? "disabled" : "enabled"));
}
function sa() {
  if (typeof window == "object") {
    if (ia) return;
    typeof console < "u" &&
      typeof console.log == "function" &&
      console.log.apply(console, arguments);
  }
}
function hr(n, e) {
  ra && console.warn(n + " is deprecated, please use " + e + " instead.");
}
function hl(n) {
  const e = { browser: null, version: null };
  if (typeof n > "u" || !n.navigator || !n.navigator.userAgent)
    return (e.browser = "Not a browser."), e;
  const { navigator: t } = n;
  if (t.userAgentData && t.userAgentData.brands) {
    const i = t.userAgentData.brands.find((r) => r.brand === "Chromium");
    if (i) return { browser: "chrome", version: parseInt(i.version, 10) };
  }
  if (t.mozGetUserMedia)
    (e.browser = "firefox"),
      (e.version = kn(t.userAgent, /Firefox\/(\d+)\./, 1));
  else if (
    t.webkitGetUserMedia ||
    (n.isSecureContext === !1 && n.webkitRTCPeerConnection)
  )
    (e.browser = "chrome"),
      (e.version = kn(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
  else if (n.RTCPeerConnection && t.userAgent.match(/AppleWebKit\/(\d+)\./))
    (e.browser = "safari"),
      (e.version = kn(t.userAgent, /AppleWebKit\/(\d+)\./, 1)),
      (e.supportsUnifiedPlan =
        n.RTCRtpTransceiver &&
        "currentDirection" in n.RTCRtpTransceiver.prototype);
  else return (e.browser = "Not a supported browser."), e;
  return e;
}
function Zr(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function oa(n) {
  return Zr(n)
    ? Object.keys(n).reduce(function (e, t) {
        const i = Zr(n[t]),
          r = i ? oa(n[t]) : n[t],
          s = i && !Object.keys(r).length;
        return r === void 0 || s ? e : Object.assign(e, { [t]: r });
      }, {})
    : n;
}
function Ni(n, e, t) {
  !e ||
    t.has(e.id) ||
    (t.set(e.id, e),
    Object.keys(e).forEach((i) => {
      i.endsWith("Id")
        ? Ni(n, n.get(e[i]), t)
        : i.endsWith("Ids") &&
          e[i].forEach((r) => {
            Ni(n, n.get(r), t);
          });
    }));
}
function es(n, e, t) {
  const i = t ? "outbound-rtp" : "inbound-rtp",
    r = new Map();
  if (e === null) return r;
  const s = [];
  return (
    n.forEach((o) => {
      o.type === "track" && o.trackIdentifier === e.id && s.push(o);
    }),
    s.forEach((o) => {
      n.forEach((a) => {
        a.type === i && a.trackId === o.id && Ni(n, a, r);
      });
    }),
    r
  );
}
const ts = sa;
function aa(n, e) {
  const t = n && n.navigator;
  if (!t.mediaDevices) return;
  const i = function (a) {
      if (typeof a != "object" || a.mandatory || a.optional) return a;
      const c = {};
      return (
        Object.keys(a).forEach((d) => {
          if (d === "require" || d === "advanced" || d === "mediaSource")
            return;
          const u = typeof a[d] == "object" ? a[d] : { ideal: a[d] };
          u.exact !== void 0 &&
            typeof u.exact == "number" &&
            (u.min = u.max = u.exact);
          const l = function (h, f) {
            return h
              ? h + f.charAt(0).toUpperCase() + f.slice(1)
              : f === "deviceId"
                ? "sourceId"
                : f;
          };
          if (u.ideal !== void 0) {
            c.optional = c.optional || [];
            let h = {};
            typeof u.ideal == "number"
              ? ((h[l("min", d)] = u.ideal),
                c.optional.push(h),
                (h = {}),
                (h[l("max", d)] = u.ideal),
                c.optional.push(h))
              : ((h[l("", d)] = u.ideal), c.optional.push(h));
          }
          u.exact !== void 0 && typeof u.exact != "number"
            ? ((c.mandatory = c.mandatory || {}),
              (c.mandatory[l("", d)] = u.exact))
            : ["min", "max"].forEach((h) => {
                u[h] !== void 0 &&
                  ((c.mandatory = c.mandatory || {}),
                  (c.mandatory[l(h, d)] = u[h]));
              });
        }),
        a.advanced && (c.optional = (c.optional || []).concat(a.advanced)),
        c
      );
    },
    r = function (a, c) {
      if (e.version >= 61) return c(a);
      if (
        ((a = JSON.parse(JSON.stringify(a))), a && typeof a.audio == "object")
      ) {
        const d = function (u, l, h) {
          l in u && !(h in u) && ((u[h] = u[l]), delete u[l]);
        };
        (a = JSON.parse(JSON.stringify(a))),
          d(a.audio, "autoGainControl", "googAutoGainControl"),
          d(a.audio, "noiseSuppression", "googNoiseSuppression"),
          (a.audio = i(a.audio));
      }
      if (a && typeof a.video == "object") {
        let d = a.video.facingMode;
        d = d && (typeof d == "object" ? d : { ideal: d });
        const u = e.version < 66;
        if (
          d &&
          (d.exact === "user" ||
            d.exact === "environment" ||
            d.ideal === "user" ||
            d.ideal === "environment") &&
          !(
            t.mediaDevices.getSupportedConstraints &&
            t.mediaDevices.getSupportedConstraints().facingMode &&
            !u
          )
        ) {
          delete a.video.facingMode;
          let l;
          if (
            (d.exact === "environment" || d.ideal === "environment"
              ? (l = ["back", "rear"])
              : (d.exact === "user" || d.ideal === "user") && (l = ["front"]),
            l)
          )
            return t.mediaDevices.enumerateDevices().then((h) => {
              h = h.filter((g) => g.kind === "videoinput");
              let f = h.find((g) =>
                l.some((p) => g.label.toLowerCase().includes(p)),
              );
              return (
                !f && h.length && l.includes("back") && (f = h[h.length - 1]),
                f &&
                  (a.video.deviceId = d.exact
                    ? { exact: f.deviceId }
                    : { ideal: f.deviceId }),
                (a.video = i(a.video)),
                ts("chrome: " + JSON.stringify(a)),
                c(a)
              );
            });
        }
        a.video = i(a.video);
      }
      return ts("chrome: " + JSON.stringify(a)), c(a);
    },
    s = function (a) {
      return e.version >= 64
        ? a
        : {
            name:
              {
                PermissionDeniedError: "NotAllowedError",
                PermissionDismissedError: "NotAllowedError",
                InvalidStateError: "NotAllowedError",
                DevicesNotFoundError: "NotFoundError",
                ConstraintNotSatisfiedError: "OverconstrainedError",
                TrackStartError: "NotReadableError",
                MediaDeviceFailedDueToShutdown: "NotAllowedError",
                MediaDeviceKillSwitchOn: "NotAllowedError",
                TabCaptureError: "AbortError",
                ScreenCaptureError: "AbortError",
                DeviceCaptureError: "AbortError",
              }[a.name] || a.name,
            message: a.message,
            constraint: a.constraint || a.constraintName,
            toString() {
              return this.name + (this.message && ": ") + this.message;
            },
          };
    },
    o = function (a, c, d) {
      r(a, (u) => {
        t.webkitGetUserMedia(u, c, (l) => {
          d && d(s(l));
        });
      });
    };
  if (((t.getUserMedia = o.bind(t)), t.mediaDevices.getUserMedia)) {
    const a = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
    t.mediaDevices.getUserMedia = function (c) {
      return r(c, (d) =>
        a(d).then(
          (u) => {
            if (
              (d.audio && !u.getAudioTracks().length) ||
              (d.video && !u.getVideoTracks().length)
            )
              throw (
                (u.getTracks().forEach((l) => {
                  l.stop();
                }),
                new DOMException("", "NotFoundError"))
              );
            return u;
          },
          (u) => Promise.reject(s(u)),
        ),
      );
    };
  }
}
function ca(n) {
  n.MediaStream = n.MediaStream || n.webkitMediaStream;
}
function da(n) {
  if (
    typeof n == "object" &&
    n.RTCPeerConnection &&
    !("ontrack" in n.RTCPeerConnection.prototype)
  ) {
    Object.defineProperty(n.RTCPeerConnection.prototype, "ontrack", {
      get() {
        return this._ontrack;
      },
      set(t) {
        this._ontrack && this.removeEventListener("track", this._ontrack),
          this.addEventListener("track", (this._ontrack = t));
      },
      enumerable: !0,
      configurable: !0,
    });
    const e = n.RTCPeerConnection.prototype.setRemoteDescription;
    n.RTCPeerConnection.prototype.setRemoteDescription = function () {
      return (
        this._ontrackpoly ||
          ((this._ontrackpoly = (i) => {
            i.stream.addEventListener("addtrack", (r) => {
              let s;
              n.RTCPeerConnection.prototype.getReceivers
                ? (s = this.getReceivers().find(
                    (a) => a.track && a.track.id === r.track.id,
                  ))
                : (s = { track: r.track });
              const o = new Event("track");
              (o.track = r.track),
                (o.receiver = s),
                (o.transceiver = { receiver: s }),
                (o.streams = [i.stream]),
                this.dispatchEvent(o);
            }),
              i.stream.getTracks().forEach((r) => {
                let s;
                n.RTCPeerConnection.prototype.getReceivers
                  ? (s = this.getReceivers().find(
                      (a) => a.track && a.track.id === r.id,
                    ))
                  : (s = { track: r });
                const o = new Event("track");
                (o.track = r),
                  (o.receiver = s),
                  (o.transceiver = { receiver: s }),
                  (o.streams = [i.stream]),
                  this.dispatchEvent(o);
              });
          }),
          this.addEventListener("addstream", this._ontrackpoly)),
        e.apply(this, arguments)
      );
    };
  } else
    ft(
      n,
      "track",
      (e) => (
        e.transceiver ||
          Object.defineProperty(e, "transceiver", {
            value: { receiver: e.receiver },
          }),
        e
      ),
    );
}
function ua(n) {
  if (
    typeof n == "object" &&
    n.RTCPeerConnection &&
    !("getSenders" in n.RTCPeerConnection.prototype) &&
    "createDTMFSender" in n.RTCPeerConnection.prototype
  ) {
    const e = function (r, s) {
      return {
        track: s,
        get dtmf() {
          return (
            this._dtmf === void 0 &&
              (s.kind === "audio"
                ? (this._dtmf = r.createDTMFSender(s))
                : (this._dtmf = null)),
            this._dtmf
          );
        },
        _pc: r,
      };
    };
    if (!n.RTCPeerConnection.prototype.getSenders) {
      n.RTCPeerConnection.prototype.getSenders = function () {
        return (this._senders = this._senders || []), this._senders.slice();
      };
      const r = n.RTCPeerConnection.prototype.addTrack;
      n.RTCPeerConnection.prototype.addTrack = function (a, c) {
        let d = r.apply(this, arguments);
        return d || ((d = e(this, a)), this._senders.push(d)), d;
      };
      const s = n.RTCPeerConnection.prototype.removeTrack;
      n.RTCPeerConnection.prototype.removeTrack = function (a) {
        s.apply(this, arguments);
        const c = this._senders.indexOf(a);
        c !== -1 && this._senders.splice(c, 1);
      };
    }
    const t = n.RTCPeerConnection.prototype.addStream;
    n.RTCPeerConnection.prototype.addStream = function (s) {
      (this._senders = this._senders || []),
        t.apply(this, [s]),
        s.getTracks().forEach((o) => {
          this._senders.push(e(this, o));
        });
    };
    const i = n.RTCPeerConnection.prototype.removeStream;
    n.RTCPeerConnection.prototype.removeStream = function (s) {
      (this._senders = this._senders || []),
        i.apply(this, [s]),
        s.getTracks().forEach((o) => {
          const a = this._senders.find((c) => c.track === o);
          a && this._senders.splice(this._senders.indexOf(a), 1);
        });
    };
  } else if (
    typeof n == "object" &&
    n.RTCPeerConnection &&
    "getSenders" in n.RTCPeerConnection.prototype &&
    "createDTMFSender" in n.RTCPeerConnection.prototype &&
    n.RTCRtpSender &&
    !("dtmf" in n.RTCRtpSender.prototype)
  ) {
    const e = n.RTCPeerConnection.prototype.getSenders;
    (n.RTCPeerConnection.prototype.getSenders = function () {
      const i = e.apply(this, []);
      return i.forEach((r) => (r._pc = this)), i;
    }),
      Object.defineProperty(n.RTCRtpSender.prototype, "dtmf", {
        get() {
          return (
            this._dtmf === void 0 &&
              (this.track.kind === "audio"
                ? (this._dtmf = this._pc.createDTMFSender(this.track))
                : (this._dtmf = null)),
            this._dtmf
          );
        },
      });
  }
}
function la(n) {
  if (
    !(
      typeof n == "object" &&
      n.RTCPeerConnection &&
      n.RTCRtpSender &&
      n.RTCRtpReceiver
    )
  )
    return;
  if (!("getStats" in n.RTCRtpSender.prototype)) {
    const t = n.RTCPeerConnection.prototype.getSenders;
    t &&
      (n.RTCPeerConnection.prototype.getSenders = function () {
        const s = t.apply(this, []);
        return s.forEach((o) => (o._pc = this)), s;
      });
    const i = n.RTCPeerConnection.prototype.addTrack;
    i &&
      (n.RTCPeerConnection.prototype.addTrack = function () {
        const s = i.apply(this, arguments);
        return (s._pc = this), s;
      }),
      (n.RTCRtpSender.prototype.getStats = function () {
        const s = this;
        return this._pc.getStats().then((o) => es(o, s.track, !0));
      });
  }
  if (!("getStats" in n.RTCRtpReceiver.prototype)) {
    const t = n.RTCPeerConnection.prototype.getReceivers;
    t &&
      (n.RTCPeerConnection.prototype.getReceivers = function () {
        const r = t.apply(this, []);
        return r.forEach((s) => (s._pc = this)), r;
      }),
      ft(n, "track", (i) => ((i.receiver._pc = i.srcElement), i)),
      (n.RTCRtpReceiver.prototype.getStats = function () {
        const r = this;
        return this._pc.getStats().then((s) => es(s, r.track, !1));
      });
  }
  if (
    !(
      "getStats" in n.RTCRtpSender.prototype &&
      "getStats" in n.RTCRtpReceiver.prototype
    )
  )
    return;
  const e = n.RTCPeerConnection.prototype.getStats;
  n.RTCPeerConnection.prototype.getStats = function () {
    if (arguments.length > 0 && arguments[0] instanceof n.MediaStreamTrack) {
      const i = arguments[0];
      let r, s, o;
      return (
        this.getSenders().forEach((a) => {
          a.track === i && (r ? (o = !0) : (r = a));
        }),
        this.getReceivers().forEach(
          (a) => (a.track === i && (s ? (o = !0) : (s = a)), a.track === i),
        ),
        o || (r && s)
          ? Promise.reject(
              new DOMException(
                "There are more than one sender or receiver for the track.",
                "InvalidAccessError",
              ),
            )
          : r
            ? r.getStats()
            : s
              ? s.getStats()
              : Promise.reject(
                  new DOMException(
                    "There is no sender or receiver for the track.",
                    "InvalidAccessError",
                  ),
                )
      );
    }
    return e.apply(this, arguments);
  };
}
function ha(n) {
  n.RTCPeerConnection.prototype.getLocalStreams = function () {
    return (
      (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
      Object.keys(this._shimmedLocalStreams).map(
        (o) => this._shimmedLocalStreams[o][0],
      )
    );
  };
  const e = n.RTCPeerConnection.prototype.addTrack;
  n.RTCPeerConnection.prototype.addTrack = function (o, a) {
    if (!a) return e.apply(this, arguments);
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    const c = e.apply(this, arguments);
    return (
      this._shimmedLocalStreams[a.id]
        ? this._shimmedLocalStreams[a.id].indexOf(c) === -1 &&
          this._shimmedLocalStreams[a.id].push(c)
        : (this._shimmedLocalStreams[a.id] = [a, c]),
      c
    );
  };
  const t = n.RTCPeerConnection.prototype.addStream;
  n.RTCPeerConnection.prototype.addStream = function (o) {
    (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
      o.getTracks().forEach((d) => {
        if (this.getSenders().find((l) => l.track === d))
          throw new DOMException("Track already exists.", "InvalidAccessError");
      });
    const a = this.getSenders();
    t.apply(this, arguments);
    const c = this.getSenders().filter((d) => a.indexOf(d) === -1);
    this._shimmedLocalStreams[o.id] = [o].concat(c);
  };
  const i = n.RTCPeerConnection.prototype.removeStream;
  n.RTCPeerConnection.prototype.removeStream = function (o) {
    return (
      (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
      delete this._shimmedLocalStreams[o.id],
      i.apply(this, arguments)
    );
  };
  const r = n.RTCPeerConnection.prototype.removeTrack;
  n.RTCPeerConnection.prototype.removeTrack = function (o) {
    return (
      (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
      o &&
        Object.keys(this._shimmedLocalStreams).forEach((a) => {
          const c = this._shimmedLocalStreams[a].indexOf(o);
          c !== -1 && this._shimmedLocalStreams[a].splice(c, 1),
            this._shimmedLocalStreams[a].length === 1 &&
              delete this._shimmedLocalStreams[a];
        }),
      r.apply(this, arguments)
    );
  };
}
function fa(n, e) {
  if (!n.RTCPeerConnection) return;
  if (n.RTCPeerConnection.prototype.addTrack && e.version >= 65) return ha(n);
  const t = n.RTCPeerConnection.prototype.getLocalStreams;
  n.RTCPeerConnection.prototype.getLocalStreams = function () {
    const u = t.apply(this);
    return (
      (this._reverseStreams = this._reverseStreams || {}),
      u.map((l) => this._reverseStreams[l.id])
    );
  };
  const i = n.RTCPeerConnection.prototype.addStream;
  n.RTCPeerConnection.prototype.addStream = function (u) {
    if (
      ((this._streams = this._streams || {}),
      (this._reverseStreams = this._reverseStreams || {}),
      u.getTracks().forEach((l) => {
        if (this.getSenders().find((f) => f.track === l))
          throw new DOMException("Track already exists.", "InvalidAccessError");
      }),
      !this._reverseStreams[u.id])
    ) {
      const l = new n.MediaStream(u.getTracks());
      (this._streams[u.id] = l), (this._reverseStreams[l.id] = u), (u = l);
    }
    i.apply(this, [u]);
  };
  const r = n.RTCPeerConnection.prototype.removeStream;
  (n.RTCPeerConnection.prototype.removeStream = function (u) {
    (this._streams = this._streams || {}),
      (this._reverseStreams = this._reverseStreams || {}),
      r.apply(this, [this._streams[u.id] || u]),
      delete this._reverseStreams[
        this._streams[u.id] ? this._streams[u.id].id : u.id
      ],
      delete this._streams[u.id];
  }),
    (n.RTCPeerConnection.prototype.addTrack = function (u, l) {
      if (this.signalingState === "closed")
        throw new DOMException(
          "The RTCPeerConnection's signalingState is 'closed'.",
          "InvalidStateError",
        );
      const h = [].slice.call(arguments, 1);
      if (h.length !== 1 || !h[0].getTracks().find((p) => p === u))
        throw new DOMException(
          "The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.",
          "NotSupportedError",
        );
      if (this.getSenders().find((p) => p.track === u))
        throw new DOMException("Track already exists.", "InvalidAccessError");
      (this._streams = this._streams || {}),
        (this._reverseStreams = this._reverseStreams || {});
      const g = this._streams[l.id];
      if (g)
        g.addTrack(u),
          Promise.resolve().then(() => {
            this.dispatchEvent(new Event("negotiationneeded"));
          });
      else {
        const p = new n.MediaStream([u]);
        (this._streams[l.id] = p),
          (this._reverseStreams[p.id] = l),
          this.addStream(p);
      }
      return this.getSenders().find((p) => p.track === u);
    });
  function s(d, u) {
    let l = u.sdp;
    return (
      Object.keys(d._reverseStreams || []).forEach((h) => {
        const f = d._reverseStreams[h],
          g = d._streams[f.id];
        l = l.replace(new RegExp(g.id, "g"), f.id);
      }),
      new RTCSessionDescription({ type: u.type, sdp: l })
    );
  }
  function o(d, u) {
    let l = u.sdp;
    return (
      Object.keys(d._reverseStreams || []).forEach((h) => {
        const f = d._reverseStreams[h],
          g = d._streams[f.id];
        l = l.replace(new RegExp(f.id, "g"), g.id);
      }),
      new RTCSessionDescription({ type: u.type, sdp: l })
    );
  }
  ["createOffer", "createAnswer"].forEach(function (d) {
    const u = n.RTCPeerConnection.prototype[d],
      l = {
        [d]() {
          const h = arguments;
          return arguments.length && typeof arguments[0] == "function"
            ? u.apply(this, [
                (g) => {
                  const p = s(this, g);
                  h[0].apply(null, [p]);
                },
                (g) => {
                  h[1] && h[1].apply(null, g);
                },
                arguments[2],
              ])
            : u.apply(this, arguments).then((g) => s(this, g));
        },
      };
    n.RTCPeerConnection.prototype[d] = l[d];
  });
  const a = n.RTCPeerConnection.prototype.setLocalDescription;
  n.RTCPeerConnection.prototype.setLocalDescription = function () {
    return !arguments.length || !arguments[0].type
      ? a.apply(this, arguments)
      : ((arguments[0] = o(this, arguments[0])), a.apply(this, arguments));
  };
  const c = Object.getOwnPropertyDescriptor(
    n.RTCPeerConnection.prototype,
    "localDescription",
  );
  Object.defineProperty(n.RTCPeerConnection.prototype, "localDescription", {
    get() {
      const d = c.get.apply(this);
      return d.type === "" ? d : s(this, d);
    },
  }),
    (n.RTCPeerConnection.prototype.removeTrack = function (u) {
      if (this.signalingState === "closed")
        throw new DOMException(
          "The RTCPeerConnection's signalingState is 'closed'.",
          "InvalidStateError",
        );
      if (!u._pc)
        throw new DOMException(
          "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.",
          "TypeError",
        );
      if (!(u._pc === this))
        throw new DOMException(
          "Sender was not created by this connection.",
          "InvalidAccessError",
        );
      this._streams = this._streams || {};
      let h;
      Object.keys(this._streams).forEach((f) => {
        this._streams[f].getTracks().find((p) => u.track === p) &&
          (h = this._streams[f]);
      }),
        h &&
          (h.getTracks().length === 1
            ? this.removeStream(this._reverseStreams[h.id])
            : h.removeTrack(u.track),
          this.dispatchEvent(new Event("negotiationneeded")));
    });
}
function Li(n, e) {
  !n.RTCPeerConnection &&
    n.webkitRTCPeerConnection &&
    (n.RTCPeerConnection = n.webkitRTCPeerConnection),
    n.RTCPeerConnection &&
      e.version < 53 &&
      [
        "setLocalDescription",
        "setRemoteDescription",
        "addIceCandidate",
      ].forEach(function (t) {
        const i = n.RTCPeerConnection.prototype[t],
          r = {
            [t]() {
              return (
                (arguments[0] = new (
                  t === "addIceCandidate"
                    ? n.RTCIceCandidate
                    : n.RTCSessionDescription
                )(arguments[0])),
                i.apply(this, arguments)
              );
            },
          };
        n.RTCPeerConnection.prototype[t] = r[t];
      });
}
function pa(n, e) {
  ft(n, "negotiationneeded", (t) => {
    const i = t.target;
    if (
      !(
        (e.version < 72 ||
          (i.getConfiguration &&
            i.getConfiguration().sdpSemantics === "plan-b")) &&
        i.signalingState !== "stable"
      )
    )
      return t;
  });
}
var ns = Object.freeze({
  __proto__: null,
  fixNegotiationNeeded: pa,
  shimAddTrackRemoveTrack: fa,
  shimAddTrackRemoveTrackWithNative: ha,
  shimGetSendersWithDtmf: ua,
  shimGetUserMedia: aa,
  shimMediaStream: ca,
  shimOnTrack: da,
  shimPeerConnection: Li,
  shimSenderReceiverGetStats: la,
});
function ma(n, e) {
  const t = n && n.navigator,
    i = n && n.MediaStreamTrack;
  if (
    ((t.getUserMedia = function (r, s, o) {
      hr("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"),
        t.mediaDevices.getUserMedia(r).then(s, o);
    }),
    !(
      e.version > 55 &&
      "autoGainControl" in t.mediaDevices.getSupportedConstraints()
    ))
  ) {
    const r = function (o, a, c) {
        a in o && !(c in o) && ((o[c] = o[a]), delete o[a]);
      },
      s = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
    if (
      ((t.mediaDevices.getUserMedia = function (o) {
        return (
          typeof o == "object" &&
            typeof o.audio == "object" &&
            ((o = JSON.parse(JSON.stringify(o))),
            r(o.audio, "autoGainControl", "mozAutoGainControl"),
            r(o.audio, "noiseSuppression", "mozNoiseSuppression")),
          s(o)
        );
      }),
      i && i.prototype.getSettings)
    ) {
      const o = i.prototype.getSettings;
      i.prototype.getSettings = function () {
        const a = o.apply(this, arguments);
        return (
          r(a, "mozAutoGainControl", "autoGainControl"),
          r(a, "mozNoiseSuppression", "noiseSuppression"),
          a
        );
      };
    }
    if (i && i.prototype.applyConstraints) {
      const o = i.prototype.applyConstraints;
      i.prototype.applyConstraints = function (a) {
        return (
          this.kind === "audio" &&
            typeof a == "object" &&
            ((a = JSON.parse(JSON.stringify(a))),
            r(a, "autoGainControl", "mozAutoGainControl"),
            r(a, "noiseSuppression", "mozNoiseSuppression")),
          o.apply(this, [a])
        );
      };
    }
  }
}
function fl(n, e) {
  (n.navigator.mediaDevices && "getDisplayMedia" in n.navigator.mediaDevices) ||
    (n.navigator.mediaDevices &&
      (n.navigator.mediaDevices.getDisplayMedia = function (i) {
        if (!(i && i.video)) {
          const r = new DOMException(
            "getDisplayMedia without video constraints is undefined",
          );
          return (r.name = "NotFoundError"), (r.code = 8), Promise.reject(r);
        }
        return (
          i.video === !0
            ? (i.video = { mediaSource: e })
            : (i.video.mediaSource = e),
          n.navigator.mediaDevices.getUserMedia(i)
        );
      }));
}
function ga(n) {
  typeof n == "object" &&
    n.RTCTrackEvent &&
    "receiver" in n.RTCTrackEvent.prototype &&
    !("transceiver" in n.RTCTrackEvent.prototype) &&
    Object.defineProperty(n.RTCTrackEvent.prototype, "transceiver", {
      get() {
        return { receiver: this.receiver };
      },
    });
}
function Ui(n, e) {
  if (typeof n != "object" || !(n.RTCPeerConnection || n.mozRTCPeerConnection))
    return;
  !n.RTCPeerConnection &&
    n.mozRTCPeerConnection &&
    (n.RTCPeerConnection = n.mozRTCPeerConnection),
    e.version < 53 &&
      [
        "setLocalDescription",
        "setRemoteDescription",
        "addIceCandidate",
      ].forEach(function (r) {
        const s = n.RTCPeerConnection.prototype[r],
          o = {
            [r]() {
              return (
                (arguments[0] = new (
                  r === "addIceCandidate"
                    ? n.RTCIceCandidate
                    : n.RTCSessionDescription
                )(arguments[0])),
                s.apply(this, arguments)
              );
            },
          };
        n.RTCPeerConnection.prototype[r] = o[r];
      });
  const t = {
      inboundrtp: "inbound-rtp",
      outboundrtp: "outbound-rtp",
      candidatepair: "candidate-pair",
      localcandidate: "local-candidate",
      remotecandidate: "remote-candidate",
    },
    i = n.RTCPeerConnection.prototype.getStats;
  n.RTCPeerConnection.prototype.getStats = function () {
    const [s, o, a] = arguments;
    return i
      .apply(this, [s || null])
      .then((c) => {
        if (e.version < 53 && !o)
          try {
            c.forEach((d) => {
              d.type = t[d.type] || d.type;
            });
          } catch (d) {
            if (d.name !== "TypeError") throw d;
            c.forEach((u, l) => {
              c.set(l, Object.assign({}, u, { type: t[u.type] || u.type }));
            });
          }
        return c;
      })
      .then(o, a);
  };
}
function va(n) {
  if (
    !(typeof n == "object" && n.RTCPeerConnection && n.RTCRtpSender) ||
    (n.RTCRtpSender && "getStats" in n.RTCRtpSender.prototype)
  )
    return;
  const e = n.RTCPeerConnection.prototype.getSenders;
  e &&
    (n.RTCPeerConnection.prototype.getSenders = function () {
      const r = e.apply(this, []);
      return r.forEach((s) => (s._pc = this)), r;
    });
  const t = n.RTCPeerConnection.prototype.addTrack;
  t &&
    (n.RTCPeerConnection.prototype.addTrack = function () {
      const r = t.apply(this, arguments);
      return (r._pc = this), r;
    }),
    (n.RTCRtpSender.prototype.getStats = function () {
      return this.track
        ? this._pc.getStats(this.track)
        : Promise.resolve(new Map());
    });
}
function ba(n) {
  if (
    !(typeof n == "object" && n.RTCPeerConnection && n.RTCRtpSender) ||
    (n.RTCRtpSender && "getStats" in n.RTCRtpReceiver.prototype)
  )
    return;
  const e = n.RTCPeerConnection.prototype.getReceivers;
  e &&
    (n.RTCPeerConnection.prototype.getReceivers = function () {
      const i = e.apply(this, []);
      return i.forEach((r) => (r._pc = this)), i;
    }),
    ft(n, "track", (t) => ((t.receiver._pc = t.srcElement), t)),
    (n.RTCRtpReceiver.prototype.getStats = function () {
      return this._pc.getStats(this.track);
    });
}
function ya(n) {
  !n.RTCPeerConnection ||
    "removeStream" in n.RTCPeerConnection.prototype ||
    (n.RTCPeerConnection.prototype.removeStream = function (t) {
      hr("removeStream", "removeTrack"),
        this.getSenders().forEach((i) => {
          i.track && t.getTracks().includes(i.track) && this.removeTrack(i);
        });
    });
}
function ka(n) {
  n.DataChannel && !n.RTCDataChannel && (n.RTCDataChannel = n.DataChannel);
}
function Sa(n) {
  if (!(typeof n == "object" && n.RTCPeerConnection)) return;
  const e = n.RTCPeerConnection.prototype.addTransceiver;
  e &&
    (n.RTCPeerConnection.prototype.addTransceiver = function () {
      this.setParametersPromises = [];
      let i = arguments[1] && arguments[1].sendEncodings;
      i === void 0 && (i = []), (i = [...i]);
      const r = i.length > 0;
      r &&
        i.forEach((o) => {
          if ("rid" in o && !/^[a-z0-9]{0,16}$/i.test(o.rid))
            throw new TypeError("Invalid RID value provided.");
          if (
            "scaleResolutionDownBy" in o &&
            !(parseFloat(o.scaleResolutionDownBy) >= 1)
          )
            throw new RangeError("scale_resolution_down_by must be >= 1.0");
          if ("maxFramerate" in o && !(parseFloat(o.maxFramerate) >= 0))
            throw new RangeError("max_framerate must be >= 0.0");
        });
      const s = e.apply(this, arguments);
      if (r) {
        const { sender: o } = s,
          a = o.getParameters();
        (!("encodings" in a) ||
          (a.encodings.length === 1 &&
            Object.keys(a.encodings[0]).length === 0)) &&
          ((a.encodings = i),
          (o.sendEncodings = i),
          this.setParametersPromises.push(
            o
              .setParameters(a)
              .then(() => {
                delete o.sendEncodings;
              })
              .catch(() => {
                delete o.sendEncodings;
              }),
          ));
      }
      return s;
    });
}
function Ta(n) {
  if (!(typeof n == "object" && n.RTCRtpSender)) return;
  const e = n.RTCRtpSender.prototype.getParameters;
  e &&
    (n.RTCRtpSender.prototype.getParameters = function () {
      const i = e.apply(this, arguments);
      return (
        "encodings" in i ||
          (i.encodings = [].concat(this.sendEncodings || [{}])),
        i
      );
    });
}
function Ca(n) {
  if (!(typeof n == "object" && n.RTCPeerConnection)) return;
  const e = n.RTCPeerConnection.prototype.createOffer;
  n.RTCPeerConnection.prototype.createOffer = function () {
    return this.setParametersPromises && this.setParametersPromises.length
      ? Promise.all(this.setParametersPromises)
          .then(() => e.apply(this, arguments))
          .finally(() => {
            this.setParametersPromises = [];
          })
      : e.apply(this, arguments);
  };
}
function Pa(n) {
  if (!(typeof n == "object" && n.RTCPeerConnection)) return;
  const e = n.RTCPeerConnection.prototype.createAnswer;
  n.RTCPeerConnection.prototype.createAnswer = function () {
    return this.setParametersPromises && this.setParametersPromises.length
      ? Promise.all(this.setParametersPromises)
          .then(() => e.apply(this, arguments))
          .finally(() => {
            this.setParametersPromises = [];
          })
      : e.apply(this, arguments);
  };
}
var is = Object.freeze({
  __proto__: null,
  shimAddTransceiver: Sa,
  shimCreateAnswer: Pa,
  shimCreateOffer: Ca,
  shimGetDisplayMedia: fl,
  shimGetParameters: Ta,
  shimGetUserMedia: ma,
  shimOnTrack: ga,
  shimPeerConnection: Ui,
  shimRTCDataChannel: ka,
  shimReceiverGetStats: ba,
  shimRemoveStream: ya,
  shimSenderGetStats: va,
});
function Ea(n) {
  if (!(typeof n != "object" || !n.RTCPeerConnection)) {
    if (
      ("getLocalStreams" in n.RTCPeerConnection.prototype ||
        (n.RTCPeerConnection.prototype.getLocalStreams = function () {
          return (
            this._localStreams || (this._localStreams = []), this._localStreams
          );
        }),
      !("addStream" in n.RTCPeerConnection.prototype))
    ) {
      const e = n.RTCPeerConnection.prototype.addTrack;
      (n.RTCPeerConnection.prototype.addStream = function (i) {
        this._localStreams || (this._localStreams = []),
          this._localStreams.includes(i) || this._localStreams.push(i),
          i.getAudioTracks().forEach((r) => e.call(this, r, i)),
          i.getVideoTracks().forEach((r) => e.call(this, r, i));
      }),
        (n.RTCPeerConnection.prototype.addTrack = function (i) {
          for (
            var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), o = 1;
            o < r;
            o++
          )
            s[o - 1] = arguments[o];
          return (
            s &&
              s.forEach((a) => {
                this._localStreams
                  ? this._localStreams.includes(a) || this._localStreams.push(a)
                  : (this._localStreams = [a]);
              }),
            e.apply(this, arguments)
          );
        });
    }
    "removeStream" in n.RTCPeerConnection.prototype ||
      (n.RTCPeerConnection.prototype.removeStream = function (t) {
        this._localStreams || (this._localStreams = []);
        const i = this._localStreams.indexOf(t);
        if (i === -1) return;
        this._localStreams.splice(i, 1);
        const r = t.getTracks();
        this.getSenders().forEach((s) => {
          r.includes(s.track) && this.removeTrack(s);
        });
      });
  }
}
function wa(n) {
  if (
    !(typeof n != "object" || !n.RTCPeerConnection) &&
    ("getRemoteStreams" in n.RTCPeerConnection.prototype ||
      (n.RTCPeerConnection.prototype.getRemoteStreams = function () {
        return this._remoteStreams ? this._remoteStreams : [];
      }),
    !("onaddstream" in n.RTCPeerConnection.prototype))
  ) {
    Object.defineProperty(n.RTCPeerConnection.prototype, "onaddstream", {
      get() {
        return this._onaddstream;
      },
      set(t) {
        this._onaddstream &&
          (this.removeEventListener("addstream", this._onaddstream),
          this.removeEventListener("track", this._onaddstreampoly)),
          this.addEventListener("addstream", (this._onaddstream = t)),
          this.addEventListener(
            "track",
            (this._onaddstreampoly = (i) => {
              i.streams.forEach((r) => {
                if (
                  (this._remoteStreams || (this._remoteStreams = []),
                  this._remoteStreams.includes(r))
                )
                  return;
                this._remoteStreams.push(r);
                const s = new Event("addstream");
                (s.stream = r), this.dispatchEvent(s);
              });
            }),
          );
      },
    });
    const e = n.RTCPeerConnection.prototype.setRemoteDescription;
    n.RTCPeerConnection.prototype.setRemoteDescription = function () {
      const i = this;
      return (
        this._onaddstreampoly ||
          this.addEventListener(
            "track",
            (this._onaddstreampoly = function (r) {
              r.streams.forEach((s) => {
                if (
                  (i._remoteStreams || (i._remoteStreams = []),
                  i._remoteStreams.indexOf(s) >= 0)
                )
                  return;
                i._remoteStreams.push(s);
                const o = new Event("addstream");
                (o.stream = s), i.dispatchEvent(o);
              });
            }),
          ),
        e.apply(i, arguments)
      );
    };
  }
}
function Ra(n) {
  if (typeof n != "object" || !n.RTCPeerConnection) return;
  const e = n.RTCPeerConnection.prototype,
    t = e.createOffer,
    i = e.createAnswer,
    r = e.setLocalDescription,
    s = e.setRemoteDescription,
    o = e.addIceCandidate;
  (e.createOffer = function (d, u) {
    const l = arguments.length >= 2 ? arguments[2] : arguments[0],
      h = t.apply(this, [l]);
    return u ? (h.then(d, u), Promise.resolve()) : h;
  }),
    (e.createAnswer = function (d, u) {
      const l = arguments.length >= 2 ? arguments[2] : arguments[0],
        h = i.apply(this, [l]);
      return u ? (h.then(d, u), Promise.resolve()) : h;
    });
  let a = function (c, d, u) {
    const l = r.apply(this, [c]);
    return u ? (l.then(d, u), Promise.resolve()) : l;
  };
  (e.setLocalDescription = a),
    (a = function (c, d, u) {
      const l = s.apply(this, [c]);
      return u ? (l.then(d, u), Promise.resolve()) : l;
    }),
    (e.setRemoteDescription = a),
    (a = function (c, d, u) {
      const l = o.apply(this, [c]);
      return u ? (l.then(d, u), Promise.resolve()) : l;
    }),
    (e.addIceCandidate = a);
}
function _a(n) {
  const e = n && n.navigator;
  if (e.mediaDevices && e.mediaDevices.getUserMedia) {
    const t = e.mediaDevices,
      i = t.getUserMedia.bind(t);
    e.mediaDevices.getUserMedia = (r) => i(Ia(r));
  }
  !e.getUserMedia &&
    e.mediaDevices &&
    e.mediaDevices.getUserMedia &&
    (e.getUserMedia = function (i, r, s) {
      e.mediaDevices.getUserMedia(i).then(r, s);
    }.bind(e));
}
function Ia(n) {
  return n && n.video !== void 0
    ? Object.assign({}, n, { video: oa(n.video) })
    : n;
}
function xa(n) {
  if (!n.RTCPeerConnection) return;
  const e = n.RTCPeerConnection;
  (n.RTCPeerConnection = function (i, r) {
    if (i && i.iceServers) {
      const s = [];
      for (let o = 0; o < i.iceServers.length; o++) {
        let a = i.iceServers[o];
        a.urls === void 0 && a.url
          ? (hr("RTCIceServer.url", "RTCIceServer.urls"),
            (a = JSON.parse(JSON.stringify(a))),
            (a.urls = a.url),
            delete a.url,
            s.push(a))
          : s.push(i.iceServers[o]);
      }
      i.iceServers = s;
    }
    return new e(i, r);
  }),
    (n.RTCPeerConnection.prototype = e.prototype),
    "generateCertificate" in e &&
      Object.defineProperty(n.RTCPeerConnection, "generateCertificate", {
        get() {
          return e.generateCertificate;
        },
      });
}
function Aa(n) {
  typeof n == "object" &&
    n.RTCTrackEvent &&
    "receiver" in n.RTCTrackEvent.prototype &&
    !("transceiver" in n.RTCTrackEvent.prototype) &&
    Object.defineProperty(n.RTCTrackEvent.prototype, "transceiver", {
      get() {
        return { receiver: this.receiver };
      },
    });
}
function Da(n) {
  const e = n.RTCPeerConnection.prototype.createOffer;
  n.RTCPeerConnection.prototype.createOffer = function (i) {
    if (i) {
      typeof i.offerToReceiveAudio < "u" &&
        (i.offerToReceiveAudio = !!i.offerToReceiveAudio);
      const r = this.getTransceivers().find(
        (o) => o.receiver.track.kind === "audio",
      );
      i.offerToReceiveAudio === !1 && r
        ? r.direction === "sendrecv"
          ? r.setDirection
            ? r.setDirection("sendonly")
            : (r.direction = "sendonly")
          : r.direction === "recvonly" &&
            (r.setDirection
              ? r.setDirection("inactive")
              : (r.direction = "inactive"))
        : i.offerToReceiveAudio === !0 &&
          !r &&
          this.addTransceiver("audio", { direction: "recvonly" }),
        typeof i.offerToReceiveVideo < "u" &&
          (i.offerToReceiveVideo = !!i.offerToReceiveVideo);
      const s = this.getTransceivers().find(
        (o) => o.receiver.track.kind === "video",
      );
      i.offerToReceiveVideo === !1 && s
        ? s.direction === "sendrecv"
          ? s.setDirection
            ? s.setDirection("sendonly")
            : (s.direction = "sendonly")
          : s.direction === "recvonly" &&
            (s.setDirection
              ? s.setDirection("inactive")
              : (s.direction = "inactive"))
        : i.offerToReceiveVideo === !0 &&
          !s &&
          this.addTransceiver("video", { direction: "recvonly" });
    }
    return e.apply(this, arguments);
  };
}
function Ma(n) {
  typeof n != "object" ||
    n.AudioContext ||
    (n.AudioContext = n.webkitAudioContext);
}
var rs = Object.freeze({
    __proto__: null,
    shimAudioContext: Ma,
    shimCallbacksAPI: Ra,
    shimConstraints: Ia,
    shimCreateOfferLegacy: Da,
    shimGetUserMedia: _a,
    shimLocalStreamsAPI: Ea,
    shimRTCIceServerUrls: xa,
    shimRemoteStreamsAPI: wa,
    shimTrackEventTransceiver: Aa,
  }),
  ii = { exports: {} },
  ss;
function pl() {
  return (
    ss ||
      ((ss = 1),
      (function (n) {
        const e = {};
        (e.generateIdentifier = function () {
          return Math.random().toString(36).substring(2, 12);
        }),
          (e.localCName = e.generateIdentifier()),
          (e.splitLines = function (t) {
            return t
              .trim()
              .split(
                `
`,
              )
              .map((i) => i.trim());
          }),
          (e.splitSections = function (t) {
            return t
              .split(
                `
m=`,
              )
              .map(
                (r, s) =>
                  (s > 0 ? "m=" + r : r).trim() +
                  `\r
`,
              );
          }),
          (e.getDescription = function (t) {
            const i = e.splitSections(t);
            return i && i[0];
          }),
          (e.getMediaSections = function (t) {
            const i = e.splitSections(t);
            return i.shift(), i;
          }),
          (e.matchPrefix = function (t, i) {
            return e.splitLines(t).filter((r) => r.indexOf(i) === 0);
          }),
          (e.parseCandidate = function (t) {
            let i;
            t.indexOf("a=candidate:") === 0
              ? (i = t.substring(12).split(" "))
              : (i = t.substring(10).split(" "));
            const r = {
              foundation: i[0],
              component: { 1: "rtp", 2: "rtcp" }[i[1]] || i[1],
              protocol: i[2].toLowerCase(),
              priority: parseInt(i[3], 10),
              ip: i[4],
              address: i[4],
              port: parseInt(i[5], 10),
              type: i[7],
            };
            for (let s = 8; s < i.length; s += 2)
              switch (i[s]) {
                case "raddr":
                  r.relatedAddress = i[s + 1];
                  break;
                case "rport":
                  r.relatedPort = parseInt(i[s + 1], 10);
                  break;
                case "tcptype":
                  r.tcpType = i[s + 1];
                  break;
                case "ufrag":
                  (r.ufrag = i[s + 1]), (r.usernameFragment = i[s + 1]);
                  break;
                default:
                  r[i[s]] === void 0 && (r[i[s]] = i[s + 1]);
                  break;
              }
            return r;
          }),
          (e.writeCandidate = function (t) {
            const i = [];
            i.push(t.foundation);
            const r = t.component;
            r === "rtp" ? i.push(1) : r === "rtcp" ? i.push(2) : i.push(r),
              i.push(t.protocol.toUpperCase()),
              i.push(t.priority),
              i.push(t.address || t.ip),
              i.push(t.port);
            const s = t.type;
            return (
              i.push("typ"),
              i.push(s),
              s !== "host" &&
                t.relatedAddress &&
                t.relatedPort &&
                (i.push("raddr"),
                i.push(t.relatedAddress),
                i.push("rport"),
                i.push(t.relatedPort)),
              t.tcpType &&
                t.protocol.toLowerCase() === "tcp" &&
                (i.push("tcptype"), i.push(t.tcpType)),
              (t.usernameFragment || t.ufrag) &&
                (i.push("ufrag"), i.push(t.usernameFragment || t.ufrag)),
              "candidate:" + i.join(" ")
            );
          }),
          (e.parseIceOptions = function (t) {
            return t.substring(14).split(" ");
          }),
          (e.parseRtpMap = function (t) {
            let i = t.substring(9).split(" ");
            const r = { payloadType: parseInt(i.shift(), 10) };
            return (
              (i = i[0].split("/")),
              (r.name = i[0]),
              (r.clockRate = parseInt(i[1], 10)),
              (r.channels = i.length === 3 ? parseInt(i[2], 10) : 1),
              (r.numChannels = r.channels),
              r
            );
          }),
          (e.writeRtpMap = function (t) {
            let i = t.payloadType;
            t.preferredPayloadType !== void 0 && (i = t.preferredPayloadType);
            const r = t.channels || t.numChannels || 1;
            return (
              "a=rtpmap:" +
              i +
              " " +
              t.name +
              "/" +
              t.clockRate +
              (r !== 1 ? "/" + r : "") +
              `\r
`
            );
          }),
          (e.parseExtmap = function (t) {
            const i = t.substring(9).split(" ");
            return {
              id: parseInt(i[0], 10),
              direction:
                i[0].indexOf("/") > 0 ? i[0].split("/")[1] : "sendrecv",
              uri: i[1],
              attributes: i.slice(2).join(" "),
            };
          }),
          (e.writeExtmap = function (t) {
            return (
              "a=extmap:" +
              (t.id || t.preferredId) +
              (t.direction && t.direction !== "sendrecv"
                ? "/" + t.direction
                : "") +
              " " +
              t.uri +
              (t.attributes ? " " + t.attributes : "") +
              `\r
`
            );
          }),
          (e.parseFmtp = function (t) {
            const i = {};
            let r;
            const s = t.substring(t.indexOf(" ") + 1).split(";");
            for (let o = 0; o < s.length; o++)
              (r = s[o].trim().split("=")), (i[r[0].trim()] = r[1]);
            return i;
          }),
          (e.writeFmtp = function (t) {
            let i = "",
              r = t.payloadType;
            if (
              (t.preferredPayloadType !== void 0 &&
                (r = t.preferredPayloadType),
              t.parameters && Object.keys(t.parameters).length)
            ) {
              const s = [];
              Object.keys(t.parameters).forEach((o) => {
                t.parameters[o] !== void 0
                  ? s.push(o + "=" + t.parameters[o])
                  : s.push(o);
              }),
                (i +=
                  "a=fmtp:" +
                  r +
                  " " +
                  s.join(";") +
                  `\r
`);
            }
            return i;
          }),
          (e.parseRtcpFb = function (t) {
            const i = t.substring(t.indexOf(" ") + 1).split(" ");
            return { type: i.shift(), parameter: i.join(" ") };
          }),
          (e.writeRtcpFb = function (t) {
            let i = "",
              r = t.payloadType;
            return (
              t.preferredPayloadType !== void 0 && (r = t.preferredPayloadType),
              t.rtcpFeedback &&
                t.rtcpFeedback.length &&
                t.rtcpFeedback.forEach((s) => {
                  i +=
                    "a=rtcp-fb:" +
                    r +
                    " " +
                    s.type +
                    (s.parameter && s.parameter.length
                      ? " " + s.parameter
                      : "") +
                    `\r
`;
                }),
              i
            );
          }),
          (e.parseSsrcMedia = function (t) {
            const i = t.indexOf(" "),
              r = { ssrc: parseInt(t.substring(7, i), 10) },
              s = t.indexOf(":", i);
            return (
              s > -1
                ? ((r.attribute = t.substring(i + 1, s)),
                  (r.value = t.substring(s + 1)))
                : (r.attribute = t.substring(i + 1)),
              r
            );
          }),
          (e.parseSsrcGroup = function (t) {
            const i = t.substring(13).split(" ");
            return {
              semantics: i.shift(),
              ssrcs: i.map((r) => parseInt(r, 10)),
            };
          }),
          (e.getMid = function (t) {
            const i = e.matchPrefix(t, "a=mid:")[0];
            if (i) return i.substring(6);
          }),
          (e.parseFingerprint = function (t) {
            const i = t.substring(14).split(" ");
            return { algorithm: i[0].toLowerCase(), value: i[1].toUpperCase() };
          }),
          (e.getDtlsParameters = function (t, i) {
            return {
              role: "auto",
              fingerprints: e
                .matchPrefix(t + i, "a=fingerprint:")
                .map(e.parseFingerprint),
            };
          }),
          (e.writeDtlsParameters = function (t, i) {
            let r =
              "a=setup:" +
              i +
              `\r
`;
            return (
              t.fingerprints.forEach((s) => {
                r +=
                  "a=fingerprint:" +
                  s.algorithm +
                  " " +
                  s.value +
                  `\r
`;
              }),
              r
            );
          }),
          (e.parseCryptoLine = function (t) {
            const i = t.substring(9).split(" ");
            return {
              tag: parseInt(i[0], 10),
              cryptoSuite: i[1],
              keyParams: i[2],
              sessionParams: i.slice(3),
            };
          }),
          (e.writeCryptoLine = function (t) {
            return (
              "a=crypto:" +
              t.tag +
              " " +
              t.cryptoSuite +
              " " +
              (typeof t.keyParams == "object"
                ? e.writeCryptoKeyParams(t.keyParams)
                : t.keyParams) +
              (t.sessionParams ? " " + t.sessionParams.join(" ") : "") +
              `\r
`
            );
          }),
          (e.parseCryptoKeyParams = function (t) {
            if (t.indexOf("inline:") !== 0) return null;
            const i = t.substring(7).split("|");
            return {
              keyMethod: "inline",
              keySalt: i[0],
              lifeTime: i[1],
              mkiValue: i[2] ? i[2].split(":")[0] : void 0,
              mkiLength: i[2] ? i[2].split(":")[1] : void 0,
            };
          }),
          (e.writeCryptoKeyParams = function (t) {
            return (
              t.keyMethod +
              ":" +
              t.keySalt +
              (t.lifeTime ? "|" + t.lifeTime : "") +
              (t.mkiValue && t.mkiLength
                ? "|" + t.mkiValue + ":" + t.mkiLength
                : "")
            );
          }),
          (e.getCryptoParameters = function (t, i) {
            return e.matchPrefix(t + i, "a=crypto:").map(e.parseCryptoLine);
          }),
          (e.getIceParameters = function (t, i) {
            const r = e.matchPrefix(t + i, "a=ice-ufrag:")[0],
              s = e.matchPrefix(t + i, "a=ice-pwd:")[0];
            return r && s
              ? { usernameFragment: r.substring(12), password: s.substring(10) }
              : null;
          }),
          (e.writeIceParameters = function (t) {
            let i =
              "a=ice-ufrag:" +
              t.usernameFragment +
              `\r
a=ice-pwd:` +
              t.password +
              `\r
`;
            return (
              t.iceLite &&
                (i += `a=ice-lite\r
`),
              i
            );
          }),
          (e.parseRtpParameters = function (t) {
            const i = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: [],
                rtcp: [],
              },
              s = e.splitLines(t)[0].split(" ");
            i.profile = s[2];
            for (let a = 3; a < s.length; a++) {
              const c = s[a],
                d = e.matchPrefix(t, "a=rtpmap:" + c + " ")[0];
              if (d) {
                const u = e.parseRtpMap(d),
                  l = e.matchPrefix(t, "a=fmtp:" + c + " ");
                switch (
                  ((u.parameters = l.length ? e.parseFmtp(l[0]) : {}),
                  (u.rtcpFeedback = e
                    .matchPrefix(t, "a=rtcp-fb:" + c + " ")
                    .map(e.parseRtcpFb)),
                  i.codecs.push(u),
                  u.name.toUpperCase())
                ) {
                  case "RED":
                  case "ULPFEC":
                    i.fecMechanisms.push(u.name.toUpperCase());
                    break;
                }
              }
            }
            e.matchPrefix(t, "a=extmap:").forEach((a) => {
              i.headerExtensions.push(e.parseExtmap(a));
            });
            const o = e.matchPrefix(t, "a=rtcp-fb:* ").map(e.parseRtcpFb);
            return (
              i.codecs.forEach((a) => {
                o.forEach((c) => {
                  a.rtcpFeedback.find(
                    (u) => u.type === c.type && u.parameter === c.parameter,
                  ) || a.rtcpFeedback.push(c);
                });
              }),
              i
            );
          }),
          (e.writeRtpDescription = function (t, i) {
            let r = "";
            (r += "m=" + t + " "),
              (r += i.codecs.length > 0 ? "9" : "0"),
              (r += " " + (i.profile || "UDP/TLS/RTP/SAVPF") + " "),
              (r +=
                i.codecs
                  .map((o) =>
                    o.preferredPayloadType !== void 0
                      ? o.preferredPayloadType
                      : o.payloadType,
                  )
                  .join(" ") +
                `\r
`),
              (r += `c=IN IP4 0.0.0.0\r
`),
              (r += `a=rtcp:9 IN IP4 0.0.0.0\r
`),
              i.codecs.forEach((o) => {
                (r += e.writeRtpMap(o)),
                  (r += e.writeFmtp(o)),
                  (r += e.writeRtcpFb(o));
              });
            let s = 0;
            return (
              i.codecs.forEach((o) => {
                o.maxptime > s && (s = o.maxptime);
              }),
              s > 0 &&
                (r +=
                  "a=maxptime:" +
                  s +
                  `\r
`),
              i.headerExtensions &&
                i.headerExtensions.forEach((o) => {
                  r += e.writeExtmap(o);
                }),
              r
            );
          }),
          (e.parseRtpEncodingParameters = function (t) {
            const i = [],
              r = e.parseRtpParameters(t),
              s = r.fecMechanisms.indexOf("RED") !== -1,
              o = r.fecMechanisms.indexOf("ULPFEC") !== -1,
              a = e
                .matchPrefix(t, "a=ssrc:")
                .map((h) => e.parseSsrcMedia(h))
                .filter((h) => h.attribute === "cname"),
              c = a.length > 0 && a[0].ssrc;
            let d;
            const u = e.matchPrefix(t, "a=ssrc-group:FID").map((h) =>
              h
                .substring(17)
                .split(" ")
                .map((g) => parseInt(g, 10)),
            );
            u.length > 0 && u[0].length > 1 && u[0][0] === c && (d = u[0][1]),
              r.codecs.forEach((h) => {
                if (h.name.toUpperCase() === "RTX" && h.parameters.apt) {
                  let f = {
                    ssrc: c,
                    codecPayloadType: parseInt(h.parameters.apt, 10),
                  };
                  c && d && (f.rtx = { ssrc: d }),
                    i.push(f),
                    s &&
                      ((f = JSON.parse(JSON.stringify(f))),
                      (f.fec = {
                        ssrc: c,
                        mechanism: o ? "red+ulpfec" : "red",
                      }),
                      i.push(f));
                }
              }),
              i.length === 0 && c && i.push({ ssrc: c });
            let l = e.matchPrefix(t, "b=");
            return (
              l.length &&
                (l[0].indexOf("b=TIAS:") === 0
                  ? (l = parseInt(l[0].substring(7), 10))
                  : l[0].indexOf("b=AS:") === 0
                    ? (l =
                        parseInt(l[0].substring(5), 10) * 1e3 * 0.95 -
                        50 * 40 * 8)
                    : (l = void 0),
                i.forEach((h) => {
                  h.maxBitrate = l;
                })),
              i
            );
          }),
          (e.parseRtcpParameters = function (t) {
            const i = {},
              r = e
                .matchPrefix(t, "a=ssrc:")
                .map((a) => e.parseSsrcMedia(a))
                .filter((a) => a.attribute === "cname")[0];
            r && ((i.cname = r.value), (i.ssrc = r.ssrc));
            const s = e.matchPrefix(t, "a=rtcp-rsize");
            (i.reducedSize = s.length > 0), (i.compound = s.length === 0);
            const o = e.matchPrefix(t, "a=rtcp-mux");
            return (i.mux = o.length > 0), i;
          }),
          (e.writeRtcpParameters = function (t) {
            let i = "";
            return (
              t.reducedSize &&
                (i += `a=rtcp-rsize\r
`),
              t.mux &&
                (i += `a=rtcp-mux\r
`),
              t.ssrc !== void 0 &&
                t.cname &&
                (i +=
                  "a=ssrc:" +
                  t.ssrc +
                  " cname:" +
                  t.cname +
                  `\r
`),
              i
            );
          }),
          (e.parseMsid = function (t) {
            let i;
            const r = e.matchPrefix(t, "a=msid:");
            if (r.length === 1)
              return (
                (i = r[0].substring(7).split(" ")),
                { stream: i[0], track: i[1] }
              );
            const s = e
              .matchPrefix(t, "a=ssrc:")
              .map((o) => e.parseSsrcMedia(o))
              .filter((o) => o.attribute === "msid");
            if (s.length > 0)
              return (i = s[0].value.split(" ")), { stream: i[0], track: i[1] };
          }),
          (e.parseSctpDescription = function (t) {
            const i = e.parseMLine(t),
              r = e.matchPrefix(t, "a=max-message-size:");
            let s;
            r.length > 0 && (s = parseInt(r[0].substring(19), 10)),
              isNaN(s) && (s = 65536);
            const o = e.matchPrefix(t, "a=sctp-port:");
            if (o.length > 0)
              return {
                port: parseInt(o[0].substring(12), 10),
                protocol: i.fmt,
                maxMessageSize: s,
              };
            const a = e.matchPrefix(t, "a=sctpmap:");
            if (a.length > 0) {
              const c = a[0].substring(10).split(" ");
              return {
                port: parseInt(c[0], 10),
                protocol: c[1],
                maxMessageSize: s,
              };
            }
          }),
          (e.writeSctpDescription = function (t, i) {
            let r = [];
            return (
              t.protocol !== "DTLS/SCTP"
                ? (r = [
                    "m=" +
                      t.kind +
                      " 9 " +
                      t.protocol +
                      " " +
                      i.protocol +
                      `\r
`,
                    `c=IN IP4 0.0.0.0\r
`,
                    "a=sctp-port:" +
                      i.port +
                      `\r
`,
                  ])
                : (r = [
                    "m=" +
                      t.kind +
                      " 9 " +
                      t.protocol +
                      " " +
                      i.port +
                      `\r
`,
                    `c=IN IP4 0.0.0.0\r
`,
                    "a=sctpmap:" +
                      i.port +
                      " " +
                      i.protocol +
                      ` 65535\r
`,
                  ]),
              i.maxMessageSize !== void 0 &&
                r.push(
                  "a=max-message-size:" +
                    i.maxMessageSize +
                    `\r
`,
                ),
              r.join("")
            );
          }),
          (e.generateSessionId = function () {
            return Math.random().toString().substr(2, 22);
          }),
          (e.writeSessionBoilerplate = function (t, i, r) {
            let s;
            const o = i !== void 0 ? i : 2;
            return (
              t ? (s = t) : (s = e.generateSessionId()),
              `v=0\r
o=` +
                (r || "thisisadapterortc") +
                " " +
                s +
                " " +
                o +
                ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`
            );
          }),
          (e.getDirection = function (t, i) {
            const r = e.splitLines(t);
            for (let s = 0; s < r.length; s++)
              switch (r[s]) {
                case "a=sendrecv":
                case "a=sendonly":
                case "a=recvonly":
                case "a=inactive":
                  return r[s].substring(2);
              }
            return i ? e.getDirection(i) : "sendrecv";
          }),
          (e.getKind = function (t) {
            return e.splitLines(t)[0].split(" ")[0].substring(2);
          }),
          (e.isRejected = function (t) {
            return t.split(" ", 2)[1] === "0";
          }),
          (e.parseMLine = function (t) {
            const r = e.splitLines(t)[0].substring(2).split(" ");
            return {
              kind: r[0],
              port: parseInt(r[1], 10),
              protocol: r[2],
              fmt: r.slice(3).join(" "),
            };
          }),
          (e.parseOLine = function (t) {
            const r = e.matchPrefix(t, "o=")[0].substring(2).split(" ");
            return {
              username: r[0],
              sessionId: r[1],
              sessionVersion: parseInt(r[2], 10),
              netType: r[3],
              addressType: r[4],
              address: r[5],
            };
          }),
          (e.isValidSDP = function (t) {
            if (typeof t != "string" || t.length === 0) return !1;
            const i = e.splitLines(t);
            for (let r = 0; r < i.length; r++)
              if (i[r].length < 2 || i[r].charAt(1) !== "=") return !1;
            return !0;
          }),
          (n.exports = e);
      })(ii)),
    ii.exports
  );
}
var Oa = pl(),
  Rt = il(Oa),
  ml = xd({ __proto__: null, default: Rt }, [Oa]);
function Sn(n) {
  if (
    !n.RTCIceCandidate ||
    (n.RTCIceCandidate && "foundation" in n.RTCIceCandidate.prototype)
  )
    return;
  const e = n.RTCIceCandidate;
  (n.RTCIceCandidate = function (i) {
    if (
      (typeof i == "object" &&
        i.candidate &&
        i.candidate.indexOf("a=") === 0 &&
        ((i = JSON.parse(JSON.stringify(i))),
        (i.candidate = i.candidate.substring(2))),
      i.candidate && i.candidate.length)
    ) {
      const r = new e(i),
        s = Rt.parseCandidate(i.candidate);
      for (const o in s) o in r || Object.defineProperty(r, o, { value: s[o] });
      return (
        (r.toJSON = function () {
          return {
            candidate: r.candidate,
            sdpMid: r.sdpMid,
            sdpMLineIndex: r.sdpMLineIndex,
            usernameFragment: r.usernameFragment,
          };
        }),
        r
      );
    }
    return new e(i);
  }),
    (n.RTCIceCandidate.prototype = e.prototype),
    ft(
      n,
      "icecandidate",
      (t) => (
        t.candidate &&
          Object.defineProperty(t, "candidate", {
            value: new n.RTCIceCandidate(t.candidate),
            writable: "false",
          }),
        t
      ),
    );
}
function Fi(n) {
  !n.RTCIceCandidate ||
    (n.RTCIceCandidate && "relayProtocol" in n.RTCIceCandidate.prototype) ||
    ft(n, "icecandidate", (e) => {
      if (e.candidate) {
        const t = Rt.parseCandidate(e.candidate.candidate);
        t.type === "relay" &&
          (e.candidate.relayProtocol = { 0: "tls", 1: "tcp", 2: "udp" }[
            t.priority >> 24
          ]);
      }
      return e;
    });
}
function Tn(n, e) {
  if (!n.RTCPeerConnection) return;
  "sctp" in n.RTCPeerConnection.prototype ||
    Object.defineProperty(n.RTCPeerConnection.prototype, "sctp", {
      get() {
        return typeof this._sctp > "u" ? null : this._sctp;
      },
    });
  const t = function (a) {
      if (!a || !a.sdp) return !1;
      const c = Rt.splitSections(a.sdp);
      return (
        c.shift(),
        c.some((d) => {
          const u = Rt.parseMLine(d);
          return (
            u && u.kind === "application" && u.protocol.indexOf("SCTP") !== -1
          );
        })
      );
    },
    i = function (a) {
      const c = a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
      if (c === null || c.length < 2) return -1;
      const d = parseInt(c[1], 10);
      return d !== d ? -1 : d;
    },
    r = function (a) {
      let c = 65536;
      return (
        e.browser === "firefox" &&
          (e.version < 57
            ? a === -1
              ? (c = 16384)
              : (c = 2147483637)
            : e.version < 60
              ? (c = e.version === 57 ? 65535 : 65536)
              : (c = 2147483637)),
        c
      );
    },
    s = function (a, c) {
      let d = 65536;
      e.browser === "firefox" && e.version === 57 && (d = 65535);
      const u = Rt.matchPrefix(a.sdp, "a=max-message-size:");
      return (
        u.length > 0
          ? (d = parseInt(u[0].substring(19), 10))
          : e.browser === "firefox" && c !== -1 && (d = 2147483637),
        d
      );
    },
    o = n.RTCPeerConnection.prototype.setRemoteDescription;
  n.RTCPeerConnection.prototype.setRemoteDescription = function () {
    if (((this._sctp = null), e.browser === "chrome" && e.version >= 76)) {
      const { sdpSemantics: c } = this.getConfiguration();
      c === "plan-b" &&
        Object.defineProperty(this, "sctp", {
          get() {
            return typeof this._sctp > "u" ? null : this._sctp;
          },
          enumerable: !0,
          configurable: !0,
        });
    }
    if (t(arguments[0])) {
      const c = i(arguments[0]),
        d = r(c),
        u = s(arguments[0], c);
      let l;
      d === 0 && u === 0
        ? (l = Number.POSITIVE_INFINITY)
        : d === 0 || u === 0
          ? (l = Math.max(d, u))
          : (l = Math.min(d, u));
      const h = {};
      Object.defineProperty(h, "maxMessageSize", {
        get() {
          return l;
        },
      }),
        (this._sctp = h);
    }
    return o.apply(this, arguments);
  };
}
function Cn(n) {
  if (
    !(
      n.RTCPeerConnection &&
      "createDataChannel" in n.RTCPeerConnection.prototype
    )
  )
    return;
  function e(i, r) {
    const s = i.send;
    i.send = function () {
      const a = arguments[0],
        c = a.length || a.size || a.byteLength;
      if (i.readyState === "open" && r.sctp && c > r.sctp.maxMessageSize)
        throw new TypeError(
          "Message too large (can send a maximum of " +
            r.sctp.maxMessageSize +
            " bytes)",
        );
      return s.apply(i, arguments);
    };
  }
  const t = n.RTCPeerConnection.prototype.createDataChannel;
  (n.RTCPeerConnection.prototype.createDataChannel = function () {
    const r = t.apply(this, arguments);
    return e(r, this), r;
  }),
    ft(n, "datachannel", (i) => (e(i.channel, i.target), i));
}
function ji(n) {
  if (
    !n.RTCPeerConnection ||
    "connectionState" in n.RTCPeerConnection.prototype
  )
    return;
  const e = n.RTCPeerConnection.prototype;
  Object.defineProperty(e, "connectionState", {
    get() {
      return (
        { completed: "connected", checking: "connecting" }[
          this.iceConnectionState
        ] || this.iceConnectionState
      );
    },
    enumerable: !0,
    configurable: !0,
  }),
    Object.defineProperty(e, "onconnectionstatechange", {
      get() {
        return this._onconnectionstatechange || null;
      },
      set(t) {
        this._onconnectionstatechange &&
          (this.removeEventListener(
            "connectionstatechange",
            this._onconnectionstatechange,
          ),
          delete this._onconnectionstatechange),
          t &&
            this.addEventListener(
              "connectionstatechange",
              (this._onconnectionstatechange = t),
            );
      },
      enumerable: !0,
      configurable: !0,
    }),
    ["setLocalDescription", "setRemoteDescription"].forEach((t) => {
      const i = e[t];
      e[t] = function () {
        return (
          this._connectionstatechangepoly ||
            ((this._connectionstatechangepoly = (r) => {
              const s = r.target;
              if (s._lastConnectionState !== s.connectionState) {
                s._lastConnectionState = s.connectionState;
                const o = new Event("connectionstatechange", r);
                s.dispatchEvent(o);
              }
              return r;
            }),
            this.addEventListener(
              "iceconnectionstatechange",
              this._connectionstatechangepoly,
            )),
          i.apply(this, arguments)
        );
      };
    });
}
function Bi(n, e) {
  if (
    !n.RTCPeerConnection ||
    (e.browser === "chrome" && e.version >= 71) ||
    (e.browser === "safari" && e.version >= 605)
  )
    return;
  const t = n.RTCPeerConnection.prototype.setRemoteDescription;
  n.RTCPeerConnection.prototype.setRemoteDescription = function (r) {
    if (
      r &&
      r.sdp &&
      r.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1
    ) {
      const s = r.sdp
        .split(
          `
`,
        )
        .filter((o) => o.trim() !== "a=extmap-allow-mixed").join(`
`);
      n.RTCSessionDescription && r instanceof n.RTCSessionDescription
        ? (arguments[0] = new n.RTCSessionDescription({ type: r.type, sdp: s }))
        : (r.sdp = s);
    }
    return t.apply(this, arguments);
  };
}
function Pn(n, e) {
  if (!(n.RTCPeerConnection && n.RTCPeerConnection.prototype)) return;
  const t = n.RTCPeerConnection.prototype.addIceCandidate;
  !t ||
    t.length === 0 ||
    (n.RTCPeerConnection.prototype.addIceCandidate = function () {
      return arguments[0]
        ? ((e.browser === "chrome" && e.version < 78) ||
            (e.browser === "firefox" && e.version < 68) ||
            e.browser === "safari") &&
          arguments[0] &&
          arguments[0].candidate === ""
          ? Promise.resolve()
          : t.apply(this, arguments)
        : (arguments[1] && arguments[1].apply(null), Promise.resolve());
    });
}
function En(n, e) {
  if (!(n.RTCPeerConnection && n.RTCPeerConnection.prototype)) return;
  const t = n.RTCPeerConnection.prototype.setLocalDescription;
  !t ||
    t.length === 0 ||
    (n.RTCPeerConnection.prototype.setLocalDescription = function () {
      let r = arguments[0] || {};
      if (typeof r != "object" || (r.type && r.sdp))
        return t.apply(this, arguments);
      if (((r = { type: r.type, sdp: r.sdp }), !r.type))
        switch (this.signalingState) {
          case "stable":
          case "have-local-offer":
          case "have-remote-pranswer":
            r.type = "offer";
            break;
          default:
            r.type = "answer";
            break;
        }
      return r.sdp || (r.type !== "offer" && r.type !== "answer")
        ? t.apply(this, [r])
        : (r.type === "offer" ? this.createOffer : this.createAnswer)
            .apply(this)
            .then((o) => t.apply(this, [o]));
    });
}
var gl = Object.freeze({
  __proto__: null,
  removeExtmapAllowMixed: Bi,
  shimAddIceCandidateNullOrEmpty: Pn,
  shimConnectionState: ji,
  shimMaxMessageSize: Tn,
  shimParameterlessSetLocalDescription: En,
  shimRTCIceCandidate: Sn,
  shimRTCIceCandidateRelayProtocol: Fi,
  shimSendThrowTypeError: Cn,
});
function vl() {
  let { window: n } =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { shimChrome: !0, shimFirefox: !0, shimSafari: !0 };
  const t = sa,
    i = hl(n),
    r = {
      browserDetails: i,
      commonShim: gl,
      extractVersion: kn,
      disableLog: ul,
      disableWarnings: ll,
      sdp: ml,
    };
  switch (i.browser) {
    case "chrome":
      if (!ns || !Li || !e.shimChrome)
        return t("Chrome shim is not included in this adapter release."), r;
      if (i.version === null)
        return t("Chrome shim can not determine version, not shimming."), r;
      t("adapter.js shimming chrome."),
        (r.browserShim = ns),
        Pn(n, i),
        En(n),
        aa(n, i),
        ca(n),
        Li(n, i),
        da(n),
        fa(n, i),
        ua(n),
        la(n),
        pa(n, i),
        Sn(n),
        Fi(n),
        ji(n),
        Tn(n, i),
        Cn(n),
        Bi(n, i);
      break;
    case "firefox":
      if (!is || !Ui || !e.shimFirefox)
        return t("Firefox shim is not included in this adapter release."), r;
      t("adapter.js shimming firefox."),
        (r.browserShim = is),
        Pn(n, i),
        En(n),
        ma(n, i),
        Ui(n, i),
        ga(n),
        ya(n),
        va(n),
        ba(n),
        ka(n),
        Sa(n),
        Ta(n),
        Ca(n),
        Pa(n),
        Sn(n),
        ji(n),
        Tn(n, i),
        Cn(n);
      break;
    case "safari":
      if (!rs || !e.shimSafari)
        return t("Safari shim is not included in this adapter release."), r;
      t("adapter.js shimming safari."),
        (r.browserShim = rs),
        Pn(n, i),
        En(n),
        xa(n),
        Da(n),
        Ra(n),
        Ea(n),
        wa(n),
        Aa(n),
        _a(n),
        Ma(n),
        Sn(n),
        Fi(n),
        Tn(n, i),
        Cn(n),
        Bi(n, i);
      break;
    default:
      t("Unsupported browser!");
      break;
  }
  return r;
}
vl({ window: typeof window > "u" ? void 0 : window });
const bl = 10,
  hn = "lk_e2ee",
  yl = "LKFrameEncryptionKey",
  kl = {
    sharedKey: !1,
    ratchetSalt: yl,
    ratchetWindowSize: 8,
    failureTolerance: bl,
    keyringSize: 16,
  };
var tt;
(function (n) {
  (n.SetKey = "setKey"),
    (n.RatchetRequest = "ratchetRequest"),
    (n.KeyRatcheted = "keyRatcheted");
})(tt || (tt = {}));
var os;
(function (n) {
  n.KeyRatcheted = "keyRatcheted";
})(os || (os = {}));
var et;
(function (n) {
  (n.ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged"),
    (n.EncryptionError = "encryptionError");
})(et || (et = {}));
var as;
(function (n) {
  n.Error = "cryptorError";
})(as || (as = {}));
function Sl() {
  return Tl() || Vi();
}
function Vi() {
  return typeof window.RTCRtpScriptTransform < "u";
}
function Tl() {
  return (
    typeof window.RTCRtpSender < "u" &&
    typeof window.RTCRtpSender.prototype.createEncodedStreams < "u"
  );
}
function Cl(n) {
  return m(this, void 0, void 0, function* () {
    let e = new TextEncoder();
    return yield crypto.subtle.importKey(
      "raw",
      e.encode(n),
      { name: "PBKDF2" },
      !1,
      ["deriveBits", "deriveKey"],
    );
  });
}
function Pl(n) {
  return m(this, void 0, void 0, function* () {
    return yield crypto.subtle.importKey("raw", n, "HKDF", !1, [
      "deriveBits",
      "deriveKey",
    ]);
  });
}
class El extends Be.EventEmitter {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    super(),
      (this.onKeyRatcheted = (t, i) => {
        q.debug("key ratcheted event received", { material: t, keyIndex: i });
      }),
      (this.keyInfoMap = new Map()),
      (this.options = Object.assign(Object.assign({}, kl), e)),
      this.on(tt.KeyRatcheted, this.onKeyRatcheted);
  }
  onSetEncryptionKey(e, t, i) {
    const r = { key: e, participantIdentity: t, keyIndex: i };
    if (!this.options.sharedKey && !t)
      throw new Error(
        "participant identity needs to be passed for encryption key if sharedKey option is false",
      );
    this.keyInfoMap.set("".concat(t ?? "shared", "-").concat(i ?? 0), r),
      this.emit(tt.SetKey, r);
  }
  getKeys() {
    return Array.from(this.keyInfoMap.values());
  }
  getOptions() {
    return this.options;
  }
  ratchetKey(e, t) {
    this.emit(tt.RatchetRequest, e, t);
  }
}
class fm extends El {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = Object.assign(Object.assign({}, e), {
      sharedKey: !0,
      ratchetWindowSize: 0,
      failureTolerance: -1,
    });
    super(t);
  }
  setKey(e) {
    return m(this, void 0, void 0, function* () {
      const t = typeof e == "string" ? yield Cl(e) : yield Pl(e);
      this.onSetEncryptionKey(t);
    });
  }
}
class pt extends Error {
  constructor(e, t) {
    super(t || "an error has occured"), (this.code = e);
  }
}
var me;
(function (n) {
  (n[(n.NotAllowed = 0)] = "NotAllowed"),
    (n[(n.ServerUnreachable = 1)] = "ServerUnreachable"),
    (n[(n.InternalError = 2)] = "InternalError"),
    (n[(n.Cancelled = 3)] = "Cancelled"),
    (n[(n.LeaveRequest = 4)] = "LeaveRequest");
})(me || (me = {}));
class J extends pt {
  constructor(e, t, i) {
    super(1, e), (this.status = i), (this.reason = t);
  }
}
class fr extends pt {
  constructor(e) {
    super(21, e ?? "device is unsupported");
  }
}
class Fe extends pt {
  constructor(e) {
    super(20, e ?? "track is invalid");
  }
}
class wl extends pt {
  constructor(e) {
    super(10, e ?? "unsupported server");
  }
}
class re extends pt {
  constructor(e) {
    super(12, e ?? "unexpected connection state");
  }
}
class qi extends pt {
  constructor(e) {
    super(13, e ?? "unable to negotiate");
  }
}
class cs extends pt {
  constructor(e, t) {
    super(15, e), (this.reason = t);
  }
}
var On;
(function (n) {
  (n.PermissionDenied = "PermissionDenied"),
    (n.NotFound = "NotFound"),
    (n.DeviceInUse = "DeviceInUse"),
    (n.Other = "Other");
})(On || (On = {}));
(function (n) {
  function e(t) {
    if (t && "name" in t)
      return t.name === "NotFoundError" || t.name === "DevicesNotFoundError"
        ? n.NotFound
        : t.name === "NotAllowedError" || t.name === "PermissionDeniedError"
          ? n.PermissionDenied
          : t.name === "NotReadableError" || t.name === "TrackStartError"
            ? n.DeviceInUse
            : n.Other;
  }
  n.getFailure = e;
})(On || (On = {}));
var ds;
(function (n) {
  (n[(n.InvalidKey = 0)] = "InvalidKey"),
    (n[(n.MissingKey = 1)] = "MissingKey"),
    (n[(n.InternalError = 2)] = "InternalError");
})(ds || (ds = {}));
var P;
(function (n) {
  (n.Connected = "connected"),
    (n.Reconnecting = "reconnecting"),
    (n.SignalReconnecting = "signalReconnecting"),
    (n.Reconnected = "reconnected"),
    (n.Disconnected = "disconnected"),
    (n.ConnectionStateChanged = "connectionStateChanged"),
    (n.MediaDevicesChanged = "mediaDevicesChanged"),
    (n.ParticipantConnected = "participantConnected"),
    (n.ParticipantDisconnected = "participantDisconnected"),
    (n.TrackPublished = "trackPublished"),
    (n.TrackSubscribed = "trackSubscribed"),
    (n.TrackSubscriptionFailed = "trackSubscriptionFailed"),
    (n.TrackUnpublished = "trackUnpublished"),
    (n.TrackUnsubscribed = "trackUnsubscribed"),
    (n.TrackMuted = "trackMuted"),
    (n.TrackUnmuted = "trackUnmuted"),
    (n.LocalTrackPublished = "localTrackPublished"),
    (n.LocalTrackUnpublished = "localTrackUnpublished"),
    (n.LocalAudioSilenceDetected = "localAudioSilenceDetected"),
    (n.ActiveSpeakersChanged = "activeSpeakersChanged"),
    (n.ParticipantMetadataChanged = "participantMetadataChanged"),
    (n.ParticipantNameChanged = "participantNameChanged"),
    (n.ParticipantAttributesChanged = "participantAttributesChanged"),
    (n.RoomMetadataChanged = "roomMetadataChanged"),
    (n.DataReceived = "dataReceived"),
    (n.SipDTMFReceived = "sipDTMFReceived"),
    (n.TranscriptionReceived = "transcriptionReceived"),
    (n.ConnectionQualityChanged = "connectionQualityChanged"),
    (n.TrackStreamStateChanged = "trackStreamStateChanged"),
    (n.TrackSubscriptionPermissionChanged =
      "trackSubscriptionPermissionChanged"),
    (n.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged"),
    (n.AudioPlaybackStatusChanged = "audioPlaybackChanged"),
    (n.VideoPlaybackStatusChanged = "videoPlaybackChanged"),
    (n.MediaDevicesError = "mediaDevicesError"),
    (n.ParticipantPermissionsChanged = "participantPermissionsChanged"),
    (n.SignalConnected = "signalConnected"),
    (n.RecordingStatusChanged = "recordingStatusChanged"),
    (n.ParticipantEncryptionStatusChanged =
      "participantEncryptionStatusChanged"),
    (n.EncryptionError = "encryptionError"),
    (n.DCBufferStatusChanged = "dcBufferStatusChanged"),
    (n.ActiveDeviceChanged = "activeDeviceChanged"),
    (n.ChatMessage = "chatMessage"),
    (n.LocalTrackSubscribed = "localTrackSubscribed"),
    (n.MetricsReceived = "metricsReceived");
})(P || (P = {}));
var R;
(function (n) {
  (n.TrackPublished = "trackPublished"),
    (n.TrackSubscribed = "trackSubscribed"),
    (n.TrackSubscriptionFailed = "trackSubscriptionFailed"),
    (n.TrackUnpublished = "trackUnpublished"),
    (n.TrackUnsubscribed = "trackUnsubscribed"),
    (n.TrackMuted = "trackMuted"),
    (n.TrackUnmuted = "trackUnmuted"),
    (n.LocalTrackPublished = "localTrackPublished"),
    (n.LocalTrackUnpublished = "localTrackUnpublished"),
    (n.ParticipantMetadataChanged = "participantMetadataChanged"),
    (n.ParticipantNameChanged = "participantNameChanged"),
    (n.DataReceived = "dataReceived"),
    (n.SipDTMFReceived = "sipDTMFReceived"),
    (n.TranscriptionReceived = "transcriptionReceived"),
    (n.IsSpeakingChanged = "isSpeakingChanged"),
    (n.ConnectionQualityChanged = "connectionQualityChanged"),
    (n.TrackStreamStateChanged = "trackStreamStateChanged"),
    (n.TrackSubscriptionPermissionChanged =
      "trackSubscriptionPermissionChanged"),
    (n.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged"),
    (n.MediaDevicesError = "mediaDevicesError"),
    (n.AudioStreamAcquired = "audioStreamAcquired"),
    (n.ParticipantPermissionsChanged = "participantPermissionsChanged"),
    (n.PCTrackAdded = "pcTrackAdded"),
    (n.AttributesChanged = "attributesChanged"),
    (n.LocalTrackSubscribed = "localTrackSubscribed"),
    (n.ChatMessage = "chatMessage");
})(R || (R = {}));
var O;
(function (n) {
  (n.TransportsCreated = "transportsCreated"),
    (n.Connected = "connected"),
    (n.Disconnected = "disconnected"),
    (n.Resuming = "resuming"),
    (n.Resumed = "resumed"),
    (n.Restarting = "restarting"),
    (n.Restarted = "restarted"),
    (n.SignalResumed = "signalResumed"),
    (n.SignalRestarted = "signalRestarted"),
    (n.Closing = "closing"),
    (n.MediaTrackAdded = "mediaTrackAdded"),
    (n.ActiveSpeakersUpdate = "activeSpeakersUpdate"),
    (n.DataPacketReceived = "dataPacketReceived"),
    (n.RTPVideoMapUpdate = "rtpVideoMapUpdate"),
    (n.DCBufferStatusChanged = "dcBufferStatusChanged"),
    (n.ParticipantUpdate = "participantUpdate"),
    (n.RoomUpdate = "roomUpdate"),
    (n.SpeakersChanged = "speakersChanged"),
    (n.StreamStateChanged = "streamStateChanged"),
    (n.ConnectionQualityUpdate = "connectionQualityUpdate"),
    (n.SubscriptionError = "subscriptionError"),
    (n.SubscriptionPermissionUpdate = "subscriptionPermissionUpdate"),
    (n.RemoteMute = "remoteMute"),
    (n.SubscribedQualityUpdate = "subscribedQualityUpdate"),
    (n.LocalTrackUnpublished = "localTrackUnpublished"),
    (n.LocalTrackSubscribed = "localTrackSubscribed"),
    (n.Offline = "offline"),
    (n.SignalRequestResponse = "signalRequestResponse");
})(O || (O = {}));
var M;
(function (n) {
  (n.Message = "message"),
    (n.Muted = "muted"),
    (n.Unmuted = "unmuted"),
    (n.Restarted = "restarted"),
    (n.Ended = "ended"),
    (n.Subscribed = "subscribed"),
    (n.Unsubscribed = "unsubscribed"),
    (n.UpdateSettings = "updateSettings"),
    (n.UpdateSubscription = "updateSubscription"),
    (n.AudioPlaybackStarted = "audioPlaybackStarted"),
    (n.AudioPlaybackFailed = "audioPlaybackFailed"),
    (n.AudioSilenceDetected = "audioSilenceDetected"),
    (n.VisibilityChanged = "visibilityChanged"),
    (n.VideoDimensionsChanged = "videoDimensionsChanged"),
    (n.VideoPlaybackStarted = "videoPlaybackStarted"),
    (n.VideoPlaybackFailed = "videoPlaybackFailed"),
    (n.ElementAttached = "elementAttached"),
    (n.ElementDetached = "elementDetached"),
    (n.UpstreamPaused = "upstreamPaused"),
    (n.UpstreamResumed = "upstreamResumed"),
    (n.SubscriptionPermissionChanged = "subscriptionPermissionChanged"),
    (n.SubscriptionStatusChanged = "subscriptionStatusChanged"),
    (n.SubscriptionFailed = "subscriptionFailed"),
    (n.TrackProcessorUpdate = "trackProcessorUpdate"),
    (n.AudioTrackFeatureUpdate = "audioTrackFeatureUpdate"),
    (n.TranscriptionReceived = "transcriptionReceived"),
    (n.TimeSyncUpdate = "timeSyncUpdate");
})(M || (M = {}));
function pr(n, e, t) {
  var i, r, s;
  e === void 0 && (e = 50), t === void 0 && (t = {});
  var o = (i = t.isImmediate) != null && i,
    a = (r = t.callback) != null && r,
    c = t.maxWait,
    d = Date.now(),
    u = [];
  function l() {
    if (c !== void 0) {
      var f = Date.now() - d;
      if (f + e >= c) return c - f;
    }
    return e;
  }
  var h = function () {
    var f = [].slice.call(arguments),
      g = this;
    return new Promise(function (p, b) {
      var v = o && s === void 0;
      if (
        (s !== void 0 && clearTimeout(s),
        (s = setTimeout(function () {
          if (((s = void 0), (d = Date.now()), !o)) {
            var C = n.apply(g, f);
            a && a(C),
              u.forEach(function (k) {
                return (0, k.resolve)(C);
              }),
              (u = []);
          }
        }, l())),
        v)
      ) {
        var D = n.apply(g, f);
        return a && a(D), p(D);
      }
      u.push({ resolve: p, reject: b });
    });
  };
  return (
    (h.cancel = function (f) {
      s !== void 0 && clearTimeout(s),
        u.forEach(function (g) {
          return (0, g.reject)(f);
        }),
        (u = []);
    }),
    h
  );
}
const Rl = /version\/(\d+(\.?_?\d+)+)/i;
let ri;
function Ke(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  if (typeof navigator > "u") return;
  const t = navigator.userAgent.toLowerCase();
  if (ri === void 0 || e) {
    const i = _l.find((r) => {
      let { test: s } = r;
      return s.test(t);
    });
    ri = i?.describe(t);
  }
  return ri;
}
const _l = [
  {
    test: /firefox|iceweasel|fxios/i,
    describe(n) {
      return {
        name: "Firefox",
        version: wn(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, n),
        os: n.toLowerCase().includes("fxios") ? "iOS" : void 0,
        osVersion: si(n),
      };
    },
  },
  {
    test: /chrom|crios|crmo/i,
    describe(n) {
      return {
        name: "Chrome",
        version: wn(/(?:chrome|chromium|crios|crmo)\/(\d+(\.?_?\d+)+)/i, n),
        os: n.toLowerCase().includes("crios") ? "iOS" : void 0,
        osVersion: si(n),
      };
    },
  },
  {
    test: /safari|applewebkit/i,
    describe(n) {
      return {
        name: "Safari",
        version: wn(Rl, n),
        os: n.includes("mobile/") ? "iOS" : "macOS",
        osVersion: si(n),
      };
    },
  },
];
function wn(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  const i = e.match(n);
  return (i && i.length >= t && i[t]) || "";
}
function si(n) {
  return n.includes("mac os")
    ? wn(/\(.+?(\d+_\d+(:?_\d+)?)/, n, 1).replace(/_/g, ".")
    : void 0;
}
var Il = "2.6.0";
const xl = Il,
  Al = 15;
class le {}
le.setTimeout = function () {
  return setTimeout(...arguments);
};
le.setInterval = function () {
  return setInterval(...arguments);
};
le.clearTimeout = function () {
  return clearTimeout(...arguments);
};
le.clearInterval = function () {
  return clearInterval(...arguments);
};
class K {
  constructor(e, t, i, r, s) {
    if (typeof e == "object")
      (this.width = e.width),
        (this.height = e.height),
        (this.aspectRatio = e.aspectRatio),
        (this.encoding = {
          maxBitrate: e.maxBitrate,
          maxFramerate: e.maxFramerate,
          priority: e.priority,
        });
    else if (t !== void 0 && i !== void 0)
      (this.width = e),
        (this.height = t),
        (this.aspectRatio = e / t),
        (this.encoding = { maxBitrate: i, maxFramerate: r, priority: s });
    else
      throw new TypeError(
        "Unsupported options: provide at least width, height and maxBitrate",
      );
  }
  get resolution() {
    return {
      width: this.width,
      height: this.height,
      frameRate: this.encoding.maxFramerate,
      aspectRatio: this.aspectRatio,
    };
  }
}
const Dl = ["vp8", "h264"],
  Ml = ["vp8", "h264", "vp9", "av1"];
function Ol(n) {
  return !!Dl.find((e) => e === n);
}
var zi;
(function (n) {
  (n.telephone = { maxBitrate: 12e3 }),
    (n.speech = { maxBitrate: 24e3 }),
    (n.music = { maxBitrate: 48e3 }),
    (n.musicStereo = { maxBitrate: 64e3 }),
    (n.musicHighQuality = { maxBitrate: 96e3 }),
    (n.musicHighQualityStereo = { maxBitrate: 128e3 });
})(zi || (zi = {}));
const tn = {
    h90: new K(160, 90, 9e4, 20),
    h180: new K(320, 180, 16e4, 20),
    h216: new K(384, 216, 18e4, 20),
    h360: new K(640, 360, 45e4, 20),
    h540: new K(960, 540, 8e5, 25),
    h720: new K(1280, 720, 17e5, 30),
    h1080: new K(1920, 1080, 3e6, 30),
    h1440: new K(2560, 1440, 5e6, 30),
    h2160: new K(3840, 2160, 8e6, 30),
  },
  Gi = {
    h120: new K(160, 120, 7e4, 20),
    h180: new K(240, 180, 125e3, 20),
    h240: new K(320, 240, 14e4, 20),
    h360: new K(480, 360, 33e4, 20),
    h480: new K(640, 480, 5e5, 20),
    h540: new K(720, 540, 6e5, 25),
    h720: new K(960, 720, 13e5, 30),
    h1080: new K(1440, 1080, 23e5, 30),
    h1440: new K(1920, 1440, 38e5, 30),
  },
  mr = {
    h360fps3: new K(640, 360, 2e5, 3, "medium"),
    h360fps15: new K(640, 360, 4e5, 15, "medium"),
    h720fps5: new K(1280, 720, 8e5, 5, "medium"),
    h720fps15: new K(1280, 720, 15e5, 15, "medium"),
    h720fps30: new K(1280, 720, 2e6, 30, "medium"),
    h1080fps15: new K(1920, 1080, 25e5, 15, "medium"),
    h1080fps30: new K(1920, 1080, 5e6, 30, "medium"),
    original: new K(0, 0, 7e6, 30, "medium"),
  };
function Nl(n) {
  if (!(typeof n > "u"))
    return typeof structuredClone == "function"
      ? structuredClone(n)
      : JSON.parse(JSON.stringify(n));
}
const Ll = 5e3,
  Bt = [];
var Ee;
(function (n) {
  (n[(n.LOW = 0)] = "LOW"),
    (n[(n.MEDIUM = 1)] = "MEDIUM"),
    (n[(n.HIGH = 2)] = "HIGH");
})(Ee || (Ee = {}));
class _ extends Be.EventEmitter {
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var r;
    super(),
      (this.attachedElements = []),
      (this.isMuted = !1),
      (this.streamState = _.StreamState.Active),
      (this.isInBackground = !1),
      (this._currentBitrate = 0),
      (this.log = q),
      (this.appVisibilityChangedListener = () => {
        this.backgroundTimeout && clearTimeout(this.backgroundTimeout),
          document.visibilityState === "hidden"
            ? (this.backgroundTimeout = setTimeout(
                () => this.handleAppVisibilityChanged(),
                Ll,
              ))
            : this.handleAppVisibilityChanged();
      }),
      (this.log = We(
        (r = i.loggerName) !== null && r !== void 0 ? r : Ae.Track,
      )),
      (this.loggerContextCb = i.loggerContextCb),
      this.setMaxListeners(100),
      (this.kind = t),
      (this._mediaStreamTrack = e),
      (this._mediaStreamID = e.id),
      (this.source = _.Source.Unknown);
  }
  get logContext() {
    var e;
    return Object.assign(
      Object.assign(
        {},
        (e = this.loggerContextCb) === null || e === void 0
          ? void 0
          : e.call(this),
      ),
      H(this),
    );
  }
  get currentBitrate() {
    return this._currentBitrate;
  }
  get mediaStreamTrack() {
    return this._mediaStreamTrack;
  }
  get mediaStreamID() {
    return this._mediaStreamID;
  }
  attach(e) {
    let t = "audio";
    this.kind === _.Kind.Video && (t = "video"),
      this.attachedElements.length === 0 &&
        this.kind === _.Kind.Video &&
        this.addAppVisibilityListener(),
      e ||
        (t === "audio" &&
          (Bt.forEach((s) => {
            s.parentElement === null && !e && (e = s);
          }),
          e && Bt.splice(Bt.indexOf(e), 1)),
        e || (e = document.createElement(t))),
      this.attachedElements.includes(e) || this.attachedElements.push(e),
      Ct(this.mediaStreamTrack, e);
    const i = e.srcObject.getTracks(),
      r = i.some((s) => s.kind === "audio");
    return (
      e
        .play()
        .then(() => {
          this.emit(r ? M.AudioPlaybackStarted : M.VideoPlaybackStarted);
        })
        .catch((s) => {
          s.name === "NotAllowedError"
            ? this.emit(r ? M.AudioPlaybackFailed : M.VideoPlaybackFailed, s)
            : s.name === "AbortError"
              ? q.debug(
                  "".concat(
                    r ? "audio" : "video",
                    " playback aborted, likely due to new play request",
                  ),
                )
              : q.warn("could not playback ".concat(r ? "audio" : "video"), s),
            r &&
              e &&
              i.some((o) => o.kind === "video") &&
              s.name === "NotAllowedError" &&
              ((e.muted = !0), e.play().catch(() => {}));
        }),
      this.emit(M.ElementAttached, e),
      e
    );
  }
  detach(e) {
    try {
      if (e) {
        _t(this.mediaStreamTrack, e);
        const i = this.attachedElements.indexOf(e);
        return (
          i >= 0 &&
            (this.attachedElements.splice(i, 1),
            this.recycleElement(e),
            this.emit(M.ElementDetached, e)),
          e
        );
      }
      const t = [];
      return (
        this.attachedElements.forEach((i) => {
          _t(this.mediaStreamTrack, i),
            t.push(i),
            this.recycleElement(i),
            this.emit(M.ElementDetached, i);
        }),
        (this.attachedElements = []),
        t
      );
    } finally {
      this.attachedElements.length === 0 && this.removeAppVisibilityListener();
    }
  }
  stop() {
    this.stopMonitor(), this._mediaStreamTrack.stop();
  }
  enable() {
    this._mediaStreamTrack.enabled = !0;
  }
  disable() {
    this._mediaStreamTrack.enabled = !1;
  }
  stopMonitor() {
    this.monitorInterval && clearInterval(this.monitorInterval),
      this.timeSyncHandle && cancelAnimationFrame(this.timeSyncHandle);
  }
  updateLoggerOptions(e) {
    e.loggerName && (this.log = We(e.loggerName)),
      e.loggerContextCb && (this.loggerContextCb = e.loggerContextCb);
  }
  recycleElement(e) {
    if (e instanceof HTMLAudioElement) {
      let t = !0;
      e.pause(),
        Bt.forEach((i) => {
          i.parentElement || (t = !1);
        }),
        t && Bt.push(e);
    }
  }
  handleAppVisibilityChanged() {
    return m(this, void 0, void 0, function* () {
      (this.isInBackground = document.visibilityState === "hidden"),
        !this.isInBackground &&
          this.kind === _.Kind.Video &&
          setTimeout(
            () =>
              this.attachedElements.forEach((e) => e.play().catch(() => {})),
            0,
          );
    });
  }
  addAppVisibilityListener() {
    Se()
      ? ((this.isInBackground = document.visibilityState === "hidden"),
        document.addEventListener(
          "visibilitychange",
          this.appVisibilityChangedListener,
        ))
      : (this.isInBackground = !1);
  }
  removeAppVisibilityListener() {
    Se() &&
      document.removeEventListener(
        "visibilitychange",
        this.appVisibilityChangedListener,
      );
  }
}
function Ct(n, e) {
  let t;
  e.srcObject instanceof MediaStream
    ? (t = e.srcObject)
    : (t = new MediaStream());
  let i;
  n.kind === "audio" ? (i = t.getAudioTracks()) : (i = t.getVideoTracks()),
    i.includes(n) ||
      (i.forEach((r) => {
        t.removeTrack(r);
      }),
      t.addTrack(n)),
    (!ht() || !(e instanceof HTMLVideoElement)) && (e.autoplay = !0),
    (e.muted = t.getAudioTracks().length === 0),
    e instanceof HTMLVideoElement && (e.playsInline = !0),
    e.srcObject !== t &&
      ((e.srcObject = t),
      (ht() || Mt()) &&
        e instanceof HTMLVideoElement &&
        setTimeout(() => {
          (e.srcObject = t), e.play().catch(() => {});
        }, 0));
}
function _t(n, e) {
  if (e.srcObject instanceof MediaStream) {
    const t = e.srcObject;
    t.removeTrack(n),
      t.getTracks().length > 0 ? (e.srcObject = t) : (e.srcObject = null);
  }
}
(function (n) {
  let e;
  (function (d) {
    (d.Audio = "audio"), (d.Video = "video"), (d.Unknown = "unknown");
  })((e = n.Kind || (n.Kind = {})));
  let t;
  (function (d) {
    (d.Camera = "camera"),
      (d.Microphone = "microphone"),
      (d.ScreenShare = "screen_share"),
      (d.ScreenShareAudio = "screen_share_audio"),
      (d.Unknown = "unknown");
  })((t = n.Source || (n.Source = {})));
  let i;
  (function (d) {
    (d.Active = "active"), (d.Paused = "paused"), (d.Unknown = "unknown");
  })((i = n.StreamState || (n.StreamState = {})));
  function r(d) {
    switch (d) {
      case e.Audio:
        return Ie.AUDIO;
      case e.Video:
        return Ie.VIDEO;
      default:
        return Ie.DATA;
    }
  }
  n.kindToProto = r;
  function s(d) {
    switch (d) {
      case Ie.AUDIO:
        return e.Audio;
      case Ie.VIDEO:
        return e.Video;
      default:
        return e.Unknown;
    }
  }
  n.kindFromProto = s;
  function o(d) {
    switch (d) {
      case t.Camera:
        return pe.CAMERA;
      case t.Microphone:
        return pe.MICROPHONE;
      case t.ScreenShare:
        return pe.SCREEN_SHARE;
      case t.ScreenShareAudio:
        return pe.SCREEN_SHARE_AUDIO;
      default:
        return pe.UNKNOWN;
    }
  }
  n.sourceToProto = o;
  function a(d) {
    switch (d) {
      case pe.CAMERA:
        return t.Camera;
      case pe.MICROPHONE:
        return t.Microphone;
      case pe.SCREEN_SHARE:
        return t.ScreenShare;
      case pe.SCREEN_SHARE_AUDIO:
        return t.ScreenShareAudio;
      default:
        return t.Unknown;
    }
  }
  n.sourceFromProto = a;
  function c(d) {
    switch (d) {
      case Ai.ACTIVE:
        return i.Active;
      case Ai.PAUSED:
        return i.Paused;
      default:
        return i.Unknown;
    }
  }
  n.streamStateFromProto = c;
})(_ || (_ = {}));
function Na(n, e, t) {
  var i;
  const r = (i = Nl(n)) !== null && i !== void 0 ? i : {};
  return (
    r.audio === !0 && (r.audio = {}),
    r.video === !0 && (r.video = {}),
    r.audio && Wi(r.audio, e),
    r.video && Wi(r.video, t),
    r
  );
}
function Wi(n, e) {
  return (
    Object.keys(e).forEach((t) => {
      n[t] === void 0 && (n[t] = e[t]);
    }),
    n
  );
}
function Yn(n) {
  const e = {};
  if (n.video)
    if (typeof n.video == "object") {
      const t = {},
        i = t,
        r = n.video;
      Object.keys(r).forEach((s) => {
        switch (s) {
          case "resolution":
            Wi(i, r.resolution);
            break;
          default:
            i[s] = r[s];
        }
      }),
        (e.video = t);
    } else e.video = n.video;
  else e.video = !1;
  return (
    n.audio
      ? typeof n.audio == "object"
        ? (e.audio = n.audio)
        : (e.audio = !0)
      : (e.audio = !1),
    e
  );
}
function Ul(n) {
  return m(this, arguments, void 0, function (e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 200;
    return (function* () {
      const i = La();
      if (i) {
        const r = i.createAnalyser();
        r.fftSize = 2048;
        const s = r.frequencyBinCount,
          o = new Uint8Array(s);
        i
          .createMediaStreamSource(new MediaStream([e.mediaStreamTrack]))
          .connect(r),
          yield je(t),
          r.getByteTimeDomainData(o);
        const c = o.some((d) => d !== 128 && d !== 0);
        return i.close(), !c;
      }
      return !1;
    })();
  });
}
function La() {
  const n =
    typeof window < "u" && (window.AudioContext || window.webkitAudioContext);
  if (n) return new n({ latencyHint: "interactive" });
}
function us(n) {
  return n === _.Source.Microphone
    ? "audioinput"
    : n === _.Source.Camera
      ? "videoinput"
      : void 0;
}
function Fl(n) {
  var e, t;
  let i = (e = n.video) !== null && e !== void 0 ? e : !0;
  return (
    n.resolution &&
      n.resolution.width > 0 &&
      n.resolution.height > 0 &&
      ((i = typeof i == "boolean" ? {} : i),
      ht()
        ? (i = Object.assign(Object.assign({}, i), {
            width: { max: n.resolution.width },
            height: { max: n.resolution.height },
            frameRate: n.resolution.frameRate,
          }))
        : (i = Object.assign(Object.assign({}, i), {
            width: { ideal: n.resolution.width },
            height: { ideal: n.resolution.height },
            frameRate: n.resolution.frameRate,
          }))),
    {
      audio: (t = n.audio) !== null && t !== void 0 ? t : !1,
      video: i,
      controller: n.controller,
      selfBrowserSurface: n.selfBrowserSurface,
      surfaceSwitching: n.surfaceSwitching,
      systemAudio: n.systemAudio,
      preferCurrentTab: n.preferCurrentTab,
    }
  );
}
function Rn(n) {
  return n.split("/")[1].toLowerCase();
}
function jl(n) {
  const e = [];
  return (
    n.forEach((t) => {
      t.track !== void 0 &&
        e.push(new ur({ cid: t.track.mediaStreamID, track: t.trackInfo }));
    }),
    e
  );
}
function H(n) {
  return n instanceof _
    ? {
        trackID: n.sid,
        source: n.source,
        muted: n.isMuted,
        enabled: n.mediaStreamTrack.enabled,
        kind: n.kind,
        streamID: n.mediaStreamID,
        streamTrackID: n.mediaStreamTrack.id,
      }
    : {
        trackID: n.trackSid,
        enabled: n.isEnabled,
        muted: n.isMuted,
        trackInfo: Object.assign(
          {
            mimeType: n.mimeType,
            name: n.trackName,
            encrypted: n.isEncrypted,
            kind: n.kind,
            source: n.source,
          },
          n.track ? H(n.track) : {},
        ),
      };
}
function Bl() {
  return (
    typeof RTCRtpReceiver < "u" && "getSynchronizationSources" in RTCRtpReceiver
  );
}
function Vl(n, e) {
  var t;
  n === void 0 && (n = {}), e === void 0 && (e = {});
  const i = [...Object.keys(e), ...Object.keys(n)],
    r = {};
  for (const s of i)
    n[s] !== e[s] && (r[s] = (t = e[s]) !== null && t !== void 0 ? t : "");
  return r;
}
const ql = "|",
  ls =
    "https://aomediacodec.github.io/av1-rtp-spec/#dependency-descriptor-rtp-header-extension";
function zl(n) {
  const e = n.split(ql);
  return e.length > 1 ? [e[0], n.substr(e[0].length + 1)] : [n, ""];
}
function je(n) {
  return m(this, void 0, void 0, function* () {
    return new Promise((e) => le.setTimeout(e, n));
  });
}
function Ki() {
  return "addTransceiver" in RTCPeerConnection.prototype;
}
function Hi() {
  return "addTrack" in RTCPeerConnection.prototype;
}
function Gl() {
  if (!("getCapabilities" in RTCRtpSender) || ht()) return !1;
  const n = RTCRtpSender.getCapabilities("video");
  let e = !1;
  if (n) {
    for (const t of n.codecs)
      if (t.mimeType === "video/AV1") {
        e = !0;
        break;
      }
  }
  return e;
}
function Wl() {
  if (!("getCapabilities" in RTCRtpSender) || Mt()) return !1;
  if (ht()) {
    const t = Ke();
    if (t?.version && Ot(t.version, "16") < 0) return !1;
  }
  const n = RTCRtpSender.getCapabilities("video");
  let e = !1;
  if (n) {
    for (const t of n.codecs)
      if (t.mimeType === "video/VP9") {
        e = !0;
        break;
      }
  }
  return e;
}
function Jt(n) {
  return n === "av1" || n === "vp9";
}
function Ji(n) {
  return document
    ? (n || (n = document.createElement("audio")), "setSinkId" in n)
    : !1;
}
function Kl() {
  return typeof RTCPeerConnection > "u" ? !1 : Ki() || Hi();
}
function Mt() {
  var n;
  return ((n = Ke()) === null || n === void 0 ? void 0 : n.name) === "Firefox";
}
function ht() {
  var n;
  return ((n = Ke()) === null || n === void 0 ? void 0 : n.name) === "Safari";
}
function Hl() {
  const n = Ke();
  return n?.name === "Safari" && n.version.startsWith("17.");
}
function Ua() {
  var n, e;
  return Se()
    ? (e =
        (n = navigator.userAgentData) === null || n === void 0
          ? void 0
          : n.mobile) !== null && e !== void 0
      ? e
      : /Tablet|iPad|Mobile|Android|BlackBerry/.test(navigator.userAgent)
    : !1;
}
function Jl() {
  const n = Ke(),
    e = "17.2";
  if (n)
    return (n.name !== "Safari" && n.os !== "iOS") ||
      (n.os === "iOS" && n.osVersion && Ot(e, n.osVersion) >= 0)
      ? !0
      : n.name === "Safari" && Ot(e, n.version) >= 0;
}
function Se() {
  return typeof document < "u";
}
function He() {
  return navigator.product == "ReactNative";
}
function Yi(n) {
  return (
    n.hostname.endsWith(".livekit.cloud") || n.hostname.endsWith(".livekit.run")
  );
}
function Fa() {
  if (global && global.LiveKitReactNativeGlobal)
    return global.LiveKitReactNativeGlobal;
}
function ja() {
  if (!He()) return;
  let n = Fa();
  if (n) return n.platform;
}
function hs() {
  if (Se()) return window.devicePixelRatio;
  if (He()) {
    let n = Fa();
    if (n) return n.devicePixelRatio;
  }
  return 1;
}
function Ot(n, e) {
  const t = n.split("."),
    i = e.split("."),
    r = Math.min(t.length, i.length);
  for (let s = 0; s < r; ++s) {
    const o = parseInt(t[s], 10),
      a = parseInt(i[s], 10);
    if (o > a) return 1;
    if (o < a) return -1;
    if (s === r - 1 && o === a) return 0;
  }
  return n === "" && e !== ""
    ? -1
    : e === ""
      ? 1
      : t.length == i.length
        ? 0
        : t.length < i.length
          ? -1
          : 1;
}
function Yl(n) {
  for (const e of n) e.target.handleResize(e);
}
function Ql(n) {
  for (const e of n) e.target.handleVisibilityChanged(e);
}
let oi = null;
const fs = () => (oi || (oi = new ResizeObserver(Yl)), oi);
let ai = null;
const ps = () => (
  ai || (ai = new IntersectionObserver(Ql, { root: null, rootMargin: "0px" })),
  ai
);
function $l() {
  var n;
  const e = new Mu({ sdk: zo.JS, protocol: Al, version: xl });
  return He() && (e.os = (n = ja()) !== null && n !== void 0 ? n : ""), e;
}
function ms() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 16,
    e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 16,
    t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  const r = document.createElement("canvas");
  (r.width = n), (r.height = e);
  const s = r.getContext("2d");
  s?.fillRect(0, 0, r.width, r.height),
    i &&
      s &&
      (s.beginPath(),
      s.arc(n / 2, e / 2, 50, 0, Math.PI * 2, !0),
      s.closePath(),
      (s.fillStyle = "grey"),
      s.fill());
  const o = r.captureStream(),
    [a] = o.getTracks();
  if (!a) throw Error("Could not get empty media stream video track");
  return (a.enabled = t), a;
}
let Vt;
function ci() {
  if (!Vt) {
    const n = new AudioContext(),
      e = n.createOscillator(),
      t = n.createGain();
    t.gain.setValueAtTime(0, 0);
    const i = n.createMediaStreamDestination();
    if (
      (e.connect(t),
      t.connect(i),
      e.start(),
      ([Vt] = i.stream.getAudioTracks()),
      !Vt)
    )
      throw Error("Could not get empty media stream audio track");
    Vt.enabled = !1;
  }
  return Vt.clone();
}
class Ba {
  constructor(e, t) {
    (this.onFinally = t),
      (this.promise = new Promise((i, r) =>
        m(this, void 0, void 0, function* () {
          (this.resolve = i), (this.reject = r), e && (yield e(i, r));
        }),
      ).finally(() => {
        var i;
        return (i = this.onFinally) === null || i === void 0
          ? void 0
          : i.call(this);
      }));
  }
}
function Xl(n) {
  return Ml.includes(n);
}
function Ge(n) {
  if (typeof n == "string" || typeof n == "number") return n;
  if (Array.isArray(n)) return n[0];
  if (n.exact) return Array.isArray(n.exact) ? n.exact[0] : n.exact;
  if (n.ideal) return Array.isArray(n.ideal) ? n.ideal[0] : n.ideal;
  throw Error("could not unwrap constraint");
}
function Zl(n) {
  return n.startsWith("http") ? n.replace(/^(http)/, "ws") : n;
}
function gs(n) {
  return n.startsWith("ws") ? n.replace(/^(ws)/, "http") : n;
}
function eh(n, e) {
  return n.segments.map((t) => {
    let { id: i, text: r, language: s, startTime: o, endTime: a, final: c } = t;
    var d;
    const u = (d = e.get(i)) !== null && d !== void 0 ? d : Date.now(),
      l = Date.now();
    return (
      c ? e.delete(i) : e.set(i, u),
      {
        id: i,
        text: r,
        startTime: Number.parseInt(o.toString()),
        endTime: Number.parseInt(a.toString()),
        final: c,
        language: s,
        firstReceivedTime: u,
        lastReceivedTime: l,
      }
    );
  });
}
function th(n) {
  const { id: e, timestamp: t, message: i, editTimestamp: r } = n;
  return {
    id: e,
    timestamp: Number.parseInt(t.toString()),
    editTimestamp: r ? Number.parseInt(r.toString()) : void 0,
    message: i,
  };
}
const di = "default";
class ue {
  static getInstance() {
    return (
      this.instance === void 0 && (this.instance = new ue()), this.instance
    );
  }
  getDevices(e) {
    return m(this, arguments, void 0, function (t) {
      var i = this;
      let r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return (function* () {
        var s;
        if (
          ((s = ue.userMediaPromiseMap) === null || s === void 0
            ? void 0
            : s.size) > 0
        ) {
          q.debug("awaiting getUserMedia promise");
          try {
            t
              ? yield ue.userMediaPromiseMap.get(t)
              : yield Promise.all(ue.userMediaPromiseMap.values());
          } catch {
            q.warn("error waiting for media permissons");
          }
        }
        let o = yield navigator.mediaDevices.enumerateDevices();
        if (
          r &&
          !(ht() && i.hasDeviceInUse(t)) &&
          (o.filter((c) => c.kind === t).length === 0 ||
            o.some((c) => {
              const d = c.label === "",
                u = t ? c.kind === t : !0;
              return d && u;
            }))
        ) {
          const c = {
              video: t !== "audioinput" && t !== "audiooutput",
              audio: t !== "videoinput",
            },
            d = yield navigator.mediaDevices.getUserMedia(c);
          (o = yield navigator.mediaDevices.enumerateDevices()),
            d.getTracks().forEach((u) => {
              u.stop();
            });
        }
        return t && (o = o.filter((a) => a.kind === t)), o;
      })();
    });
  }
  normalizeDeviceId(e, t, i) {
    return m(this, void 0, void 0, function* () {
      if (t !== di) return t;
      const r = yield this.getDevices(e),
        s = r.find((a) => a.deviceId === di);
      if (!s) {
        q.warn("could not reliably determine default device");
        return;
      }
      const o = r.find(
        (a) => a.deviceId !== di && a.groupId === (i ?? s.groupId),
      );
      if (!o) {
        q.warn("could not reliably determine default device");
        return;
      }
      return o?.deviceId;
    });
  }
  hasDeviceInUse(e) {
    return e ? ue.userMediaPromiseMap.has(e) : ue.userMediaPromiseMap.size > 0;
  }
}
ue.mediaDeviceKinds = ["audioinput", "audiooutput", "videoinput"];
ue.userMediaPromiseMap = new Map();
const nh = 1e3;
class It extends _ {
  get sender() {
    return this._sender;
  }
  set sender(e) {
    this._sender = e;
  }
  get constraints() {
    return this._constraints;
  }
  constructor(e, t, i) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
      s = arguments.length > 4 ? arguments[4] : void 0;
    super(e, t, s),
      (this.manuallyStopped = !1),
      (this._isUpstreamPaused = !1),
      (this.handleTrackMuteEvent = () =>
        this.debouncedTrackMuteHandler().catch(() =>
          this.log.debug(
            "track mute bounce got cancelled by an unmute event",
            this.logContext,
          ),
        )),
      (this.debouncedTrackMuteHandler = pr(
        () =>
          m(this, void 0, void 0, function* () {
            yield this.pauseUpstream();
          }),
        5e3,
      )),
      (this.handleTrackUnmuteEvent = () =>
        m(this, void 0, void 0, function* () {
          this.debouncedTrackMuteHandler.cancel("unmute"),
            yield this.resumeUpstream();
        })),
      (this.handleEnded = () => {
        this.isInBackground && (this.reacquireTrack = !0),
          this._mediaStreamTrack.removeEventListener(
            "mute",
            this.handleTrackMuteEvent,
          ),
          this._mediaStreamTrack.removeEventListener(
            "unmute",
            this.handleTrackUnmuteEvent,
          ),
          this.emit(M.Ended, this);
      }),
      (this.reacquireTrack = !1),
      (this.providedByUser = r),
      (this.muteLock = new ke()),
      (this.pauseUpstreamLock = new ke()),
      (this.processorLock = new ke()),
      (this.restartLock = new ke()),
      this.setMediaStreamTrack(e, !0),
      (this._constraints = e.getConstraints()),
      i && (this._constraints = i);
  }
  get id() {
    return this._mediaStreamTrack.id;
  }
  get dimensions() {
    if (this.kind !== _.Kind.Video) return;
    const { width: e, height: t } = this._mediaStreamTrack.getSettings();
    if (e && t) return { width: e, height: t };
  }
  get isUpstreamPaused() {
    return this._isUpstreamPaused;
  }
  get isUserProvided() {
    return this.providedByUser;
  }
  get mediaStreamTrack() {
    var e, t;
    return (t =
      (e = this.processor) === null || e === void 0
        ? void 0
        : e.processedTrack) !== null && t !== void 0
      ? t
      : this._mediaStreamTrack;
  }
  setMediaStreamTrack(e, t) {
    return m(this, void 0, void 0, function* () {
      if (e === this._mediaStreamTrack && !t) return;
      this._mediaStreamTrack &&
        (this.attachedElements.forEach((r) => {
          _t(this._mediaStreamTrack, r);
        }),
        this.debouncedTrackMuteHandler.cancel("new-track"),
        this._mediaStreamTrack.removeEventListener("ended", this.handleEnded),
        this._mediaStreamTrack.removeEventListener(
          "mute",
          this.handleTrackMuteEvent,
        ),
        this._mediaStreamTrack.removeEventListener(
          "unmute",
          this.handleTrackUnmuteEvent,
        )),
        (this.mediaStream = new MediaStream([e])),
        e &&
          (e.addEventListener("ended", this.handleEnded),
          e.addEventListener("mute", this.handleTrackMuteEvent),
          e.addEventListener("unmute", this.handleTrackUnmuteEvent),
          (this._constraints = e.getConstraints()));
      let i;
      if (this.processor && e) {
        const r = yield this.processorLock.lock();
        try {
          if (
            (this.log.debug("restarting processor", this.logContext),
            this.kind === "unknown")
          )
            throw TypeError("cannot set processor on track of unknown kind");
          this.processorElement &&
            (Ct(e, this.processorElement), (this.processorElement.muted = !0)),
            yield this.processor.restart({
              track: e,
              kind: this.kind,
              element: this.processorElement,
            }),
            (i = this.processor.processedTrack);
        } finally {
          r();
        }
      }
      this.sender && (yield this.sender.replaceTrack(i ?? e)),
        !this.providedByUser &&
          this._mediaStreamTrack !== e &&
          this._mediaStreamTrack.stop(),
        (this._mediaStreamTrack = e),
        e &&
          ((this._mediaStreamTrack.enabled = !this.isMuted),
          yield this.resumeUpstream(),
          this.attachedElements.forEach((r) => {
            Ct(i ?? e, r);
          }));
    });
  }
  waitForDimensions() {
    return m(this, arguments, void 0, function () {
      var e = this;
      let t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : nh;
      return (function* () {
        var i;
        if (e.kind === _.Kind.Audio)
          throw new Error("cannot get dimensions for audio tracks");
        ((i = Ke()) === null || i === void 0 ? void 0 : i.os) === "iOS" &&
          (yield je(10));
        const r = Date.now();
        for (; Date.now() - r < t; ) {
          const s = e.dimensions;
          if (s) return s;
          yield je(50);
        }
        throw new Fe("unable to get track dimensions after timeout");
      })();
    });
  }
  getDeviceId() {
    return m(this, arguments, void 0, function () {
      var e = this;
      let t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return (function* () {
        if (e.source === _.Source.ScreenShare) return;
        const { deviceId: i, groupId: r } = e._mediaStreamTrack.getSettings(),
          s = e.kind === _.Kind.Audio ? "audioinput" : "videoinput";
        return t ? ue.getInstance().normalizeDeviceId(s, i, r) : i;
      })();
    });
  }
  mute() {
    return m(this, void 0, void 0, function* () {
      return this.setTrackMuted(!0), this;
    });
  }
  unmute() {
    return m(this, void 0, void 0, function* () {
      return this.setTrackMuted(!1), this;
    });
  }
  replaceTrack(e, t) {
    return m(this, void 0, void 0, function* () {
      if (!this.sender) throw new Fe("unable to replace an unpublished track");
      let i, r;
      return (
        typeof t == "boolean"
          ? (i = t)
          : t !== void 0 && ((i = t.userProvidedTrack), (r = t.stopProcessor)),
        (this.providedByUser = i ?? !0),
        this.log.debug("replace MediaStreamTrack", this.logContext),
        yield this.setMediaStreamTrack(e),
        r && this.processor && (yield this.stopProcessor()),
        this
      );
    });
  }
  restart(e) {
    return m(this, void 0, void 0, function* () {
      this.manuallyStopped = !1;
      const t = yield this.restartLock.lock();
      try {
        e || (e = this._constraints),
          this.log.debug(
            "restarting track with constraints",
            Object.assign(Object.assign({}, this.logContext), {
              constraints: e,
            }),
          );
        const i = { audio: !1, video: !1 };
        this.kind === _.Kind.Video ? (i.video = e) : (i.audio = e),
          this.attachedElements.forEach((o) => {
            _t(this.mediaStreamTrack, o);
          }),
          this._mediaStreamTrack.removeEventListener("ended", this.handleEnded),
          this._mediaStreamTrack.stop();
        const s = (yield navigator.mediaDevices.getUserMedia(i)).getTracks()[0];
        return (
          s.addEventListener("ended", this.handleEnded),
          this.log.debug("re-acquired MediaStreamTrack", this.logContext),
          yield this.setMediaStreamTrack(s),
          (this._constraints = e),
          this.emit(M.Restarted, this),
          this.manuallyStopped &&
            (this.log.warn(
              "track was stopped during a restart, stopping restarted track",
              this.logContext,
            ),
            this.stop()),
          this
        );
      } finally {
        t();
      }
    });
  }
  setTrackMuted(e) {
    this.log.debug(
      "setting ".concat(this.kind, " track ").concat(e ? "muted" : "unmuted"),
      this.logContext,
    ),
      !(this.isMuted === e && this._mediaStreamTrack.enabled !== e) &&
        ((this.isMuted = e),
        (this._mediaStreamTrack.enabled = !e),
        this.emit(e ? M.Muted : M.Unmuted, this));
  }
  get needsReAcquisition() {
    return (
      this._mediaStreamTrack.readyState !== "live" ||
      this._mediaStreamTrack.muted ||
      !this._mediaStreamTrack.enabled ||
      this.reacquireTrack
    );
  }
  handleAppVisibilityChanged() {
    const e = Object.create(null, {
      handleAppVisibilityChanged: {
        get: () => super.handleAppVisibilityChanged,
      },
    });
    return m(this, void 0, void 0, function* () {
      yield e.handleAppVisibilityChanged.call(this),
        Ua() &&
          (this.log.debug(
            "visibility changed, is in Background: ".concat(
              this.isInBackground,
            ),
            this.logContext,
          ),
          !this.isInBackground &&
            this.needsReAcquisition &&
            !this.isUserProvided &&
            !this.isMuted &&
            (this.log.debug(
              "track needs to be reacquired, restarting ".concat(this.source),
              this.logContext,
            ),
            yield this.restart(),
            (this.reacquireTrack = !1)));
    });
  }
  stop() {
    var e;
    (this.manuallyStopped = !0),
      super.stop(),
      this._mediaStreamTrack.removeEventListener("ended", this.handleEnded),
      this._mediaStreamTrack.removeEventListener(
        "mute",
        this.handleTrackMuteEvent,
      ),
      this._mediaStreamTrack.removeEventListener(
        "unmute",
        this.handleTrackUnmuteEvent,
      ),
      (e = this.processor) === null || e === void 0 || e.destroy(),
      (this.processor = void 0);
  }
  pauseUpstream() {
    return m(this, void 0, void 0, function* () {
      const e = yield this.pauseUpstreamLock.lock();
      try {
        if (this._isUpstreamPaused === !0) return;
        if (!this.sender) {
          this.log.warn(
            "unable to pause upstream for an unpublished track",
            this.logContext,
          );
          return;
        }
        (this._isUpstreamPaused = !0), this.emit(M.UpstreamPaused, this);
        const t = Ke();
        if (t?.name === "Safari" && Ot(t.version, "12.0") < 0)
          throw new fr("pauseUpstream is not supported on Safari < 12.");
        yield this.sender.replaceTrack(null);
      } finally {
        e();
      }
    });
  }
  resumeUpstream() {
    return m(this, void 0, void 0, function* () {
      const e = yield this.pauseUpstreamLock.lock();
      try {
        if (this._isUpstreamPaused === !1) return;
        if (!this.sender) {
          this.log.warn(
            "unable to resume upstream for an unpublished track",
            this.logContext,
          );
          return;
        }
        (this._isUpstreamPaused = !1),
          this.emit(M.UpstreamResumed, this),
          yield this.sender.replaceTrack(this.mediaStreamTrack);
      } finally {
        e();
      }
    });
  }
  getRTCStatsReport() {
    return m(this, void 0, void 0, function* () {
      var e;
      return !((e = this.sender) === null || e === void 0) && e.getStats
        ? yield this.sender.getStats()
        : void 0;
    });
  }
  setProcessor(e) {
    return m(this, arguments, void 0, function (t) {
      var i = this;
      let r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return (function* () {
        var s;
        const o = yield i.processorLock.lock();
        try {
          i.log.debug("setting up processor", i.logContext);
          const a = document.createElement(i.kind),
            c = {
              kind: i.kind,
              track: i._mediaStreamTrack,
              element: a,
              audioContext: i.audioContext,
            };
          if (
            (yield t.init(c),
            i.log.debug("processor initialized", i.logContext),
            i.processor && (yield i.stopProcessor()),
            i.kind === "unknown")
          )
            throw TypeError("cannot set processor on track of unknown kind");
          if (
            (Ct(i._mediaStreamTrack, a),
            (a.muted = !0),
            a
              .play()
              .catch((d) =>
                i.log.error(
                  "failed to play processor element",
                  Object.assign(Object.assign({}, i.logContext), { error: d }),
                ),
              ),
            (i.processor = t),
            (i.processorElement = a),
            i.processor.processedTrack)
          ) {
            for (const d of i.attachedElements)
              d !== i.processorElement &&
                r &&
                (_t(i._mediaStreamTrack, d), Ct(i.processor.processedTrack, d));
            yield (s = i.sender) === null || s === void 0
              ? void 0
              : s.replaceTrack(i.processor.processedTrack);
          }
          i.emit(M.TrackProcessorUpdate, i.processor);
        } finally {
          o();
        }
      })();
    });
  }
  getProcessor() {
    return this.processor;
  }
  stopProcessor() {
    return m(this, arguments, void 0, function () {
      var e = this;
      let t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return (function* () {
        var i, r;
        e.processor &&
          (e.log.debug("stopping processor", e.logContext),
          (i = e.processor.processedTrack) === null || i === void 0 || i.stop(),
          yield e.processor.destroy(),
          (e.processor = void 0),
          t ||
            ((r = e.processorElement) === null || r === void 0 || r.remove(),
            (e.processorElement = void 0)),
          yield e._mediaStreamTrack.applyConstraints(e._constraints),
          yield e.setMediaStreamTrack(e._mediaStreamTrack, !0),
          e.emit(M.TrackProcessorUpdate));
      })();
    });
  }
}
class ih extends Be.EventEmitter {
  constructor(e) {
    super(),
      (this.onWorkerMessage = (t) => {
        var i, r;
        const { kind: s, data: o } = t.data;
        switch (s) {
          case "error":
            q.error(o.error.message), this.emit(et.EncryptionError, o.error);
            break;
          case "initAck":
            o.enabled &&
              this.keyProvider.getKeys().forEach((a) => {
                this.postKey(a);
              });
            break;
          case "enable":
            if (
              (o.enabled &&
                this.keyProvider.getKeys().forEach((a) => {
                  this.postKey(a);
                }),
              this.encryptionEnabled !== o.enabled &&
                o.participantIdentity ===
                  ((i = this.room) === null || i === void 0
                    ? void 0
                    : i.localParticipant.identity))
            )
              this.emit(
                et.ParticipantEncryptionStatusChanged,
                o.enabled,
                this.room.localParticipant,
              ),
                (this.encryptionEnabled = o.enabled);
            else if (o.participantIdentity) {
              const a =
                (r = this.room) === null || r === void 0
                  ? void 0
                  : r.getParticipantByIdentity(o.participantIdentity);
              if (!a)
                throw TypeError(
                  "couldn't set encryption status, participant not found".concat(
                    o.participantIdentity,
                  ),
                );
              this.emit(et.ParticipantEncryptionStatusChanged, o.enabled, a);
            }
            break;
          case "ratchetKey":
            this.keyProvider.emit(tt.KeyRatcheted, o.material, o.keyIndex);
            break;
        }
      }),
      (this.onWorkerError = (t) => {
        q.error("e2ee worker encountered an error:", { error: t.error }),
          this.emit(et.EncryptionError, t.error);
      }),
      (this.keyProvider = e.keyProvider),
      (this.worker = e.worker),
      (this.encryptionEnabled = !1);
  }
  setup(e) {
    if (!Sl())
      throw new fr(
        "tried to setup end-to-end encryption on an unsupported browser",
      );
    if ((q.info("setting up e2ee"), e !== this.room)) {
      (this.room = e), this.setupEventListeners(e, this.keyProvider);
      const t = {
        kind: "init",
        data: {
          keyProviderOptions: this.keyProvider.getOptions(),
          loglevel: ol.getLevel(),
        },
      };
      this.worker &&
        (q.info("initializing worker", { worker: this.worker }),
        (this.worker.onmessage = this.onWorkerMessage),
        (this.worker.onerror = this.onWorkerError),
        this.worker.postMessage(t));
    }
  }
  setParticipantCryptorEnabled(e, t) {
    q.debug("set e2ee to ".concat(e, " for participant ").concat(t)),
      this.postEnable(e, t);
  }
  setSifTrailer(e) {
    !e || e.length === 0
      ? q.warn("ignoring server sent trailer as it's empty")
      : this.postSifTrailer(e);
  }
  setupEngine(e) {
    e.on(O.RTPVideoMapUpdate, (t) => {
      this.postRTPMap(t);
    });
  }
  setupEventListeners(e, t) {
    e.on(P.TrackPublished, (i, r) =>
      this.setParticipantCryptorEnabled(
        i.trackInfo.encryption !== Pe.NONE,
        r.identity,
      ),
    ),
      e
        .on(P.ConnectionStateChanged, (i) => {
          i === V.Connected &&
            e.remoteParticipants.forEach((r) => {
              r.trackPublications.forEach((s) => {
                this.setParticipantCryptorEnabled(
                  s.trackInfo.encryption !== Pe.NONE,
                  r.identity,
                );
              });
            });
        })
        .on(P.TrackUnsubscribed, (i, r, s) => {
          var o;
          const a = {
            kind: "removeTransform",
            data: { participantIdentity: s.identity, trackId: i.mediaStreamID },
          };
          (o = this.worker) === null || o === void 0 || o.postMessage(a);
        })
        .on(P.TrackSubscribed, (i, r, s) => {
          this.setupE2EEReceiver(i, s.identity, r.trackInfo);
        })
        .on(P.SignalConnected, () => {
          if (!this.room)
            throw new TypeError(
              "expected room to be present on signal connect",
            );
          t.getKeys().forEach((i) => {
            this.postKey(i);
          }),
            this.setParticipantCryptorEnabled(
              this.room.localParticipant.isE2EEEnabled,
              this.room.localParticipant.identity,
            );
        }),
      e.localParticipant.on(R.LocalTrackPublished, (i) =>
        m(this, void 0, void 0, function* () {
          this.setupE2EESender(i.track, i.track.sender);
        }),
      ),
      t
        .on(tt.SetKey, (i) => this.postKey(i))
        .on(tt.RatchetRequest, (i, r) => this.postRatchetRequest(i, r));
  }
  postRatchetRequest(e, t) {
    if (!this.worker) throw Error("could not ratchet key, worker is missing");
    const i = {
      kind: "ratchetRequest",
      data: { participantIdentity: e, keyIndex: t },
    };
    this.worker.postMessage(i);
  }
  postKey(e) {
    let { key: t, participantIdentity: i, keyIndex: r } = e;
    var s;
    if (!this.worker) throw Error("could not set key, worker is missing");
    const o = {
      kind: "setKey",
      data: {
        participantIdentity: i,
        isPublisher:
          i ===
          ((s = this.room) === null || s === void 0
            ? void 0
            : s.localParticipant.identity),
        key: t,
        keyIndex: r,
      },
    };
    this.worker.postMessage(o);
  }
  postEnable(e, t) {
    if (this.worker) {
      const i = {
        kind: "enable",
        data: { enabled: e, participantIdentity: t },
      };
      this.worker.postMessage(i);
    } else
      throw new ReferenceError("failed to enable e2ee, worker is not ready");
  }
  postRTPMap(e) {
    var t;
    if (!this.worker)
      throw TypeError("could not post rtp map, worker is missing");
    if (
      !(
        !((t = this.room) === null || t === void 0) &&
        t.localParticipant.identity
      )
    )
      throw TypeError(
        "could not post rtp map, local participant identity is missing",
      );
    const i = {
      kind: "setRTPMap",
      data: {
        map: e,
        participantIdentity: this.room.localParticipant.identity,
      },
    };
    this.worker.postMessage(i);
  }
  postSifTrailer(e) {
    if (!this.worker)
      throw Error("could not post SIF trailer, worker is missing");
    const t = { kind: "setSifTrailer", data: { trailer: e } };
    this.worker.postMessage(t);
  }
  setupE2EEReceiver(e, t, i) {
    if (e.receiver) {
      if (!i?.mimeType || i.mimeType === "")
        throw new TypeError(
          "MimeType missing from trackInfo, cannot set up E2EE cryptor",
        );
      this.handleReceiver(
        e.receiver,
        e.mediaStreamID,
        t,
        e.kind === "video" ? Rn(i.mimeType) : void 0,
      );
    }
  }
  setupE2EESender(e, t) {
    if (!(e instanceof It) || !t) {
      t || q.warn("early return because sender is not ready");
      return;
    }
    this.handleSender(t, e.mediaStreamID, void 0);
  }
  handleReceiver(e, t, i, r) {
    return m(this, void 0, void 0, function* () {
      if (this.worker) {
        if (Vi()) {
          const s = {
            kind: "decode",
            participantIdentity: i,
            trackId: t,
            codec: r,
          };
          e.transform = new RTCRtpScriptTransform(this.worker, s);
        } else {
          if (hn in e && r) {
            const c = {
              kind: "updateCodec",
              data: { trackId: t, codec: r, participantIdentity: i },
            };
            this.worker.postMessage(c);
            return;
          }
          let s = e.writableStream,
            o = e.readableStream;
          if (!s || !o) {
            const c = e.createEncodedStreams();
            (e.writableStream = c.writable),
              (s = c.writable),
              (e.readableStream = c.readable),
              (o = c.readable);
          }
          const a = {
            kind: "decode",
            data: {
              readableStream: o,
              writableStream: s,
              trackId: t,
              codec: r,
              participantIdentity: i,
            },
          };
          this.worker.postMessage(a, [o, s]);
        }
        e[hn] = !0;
      }
    });
  }
  handleSender(e, t, i) {
    var r;
    if (!(hn in e || !this.worker)) {
      if (
        !(
          !((r = this.room) === null || r === void 0) &&
          r.localParticipant.identity
        ) ||
        this.room.localParticipant.identity === ""
      )
        throw TypeError(
          "local identity needs to be known in order to set up encrypted sender",
        );
      if (Vi()) {
        q.info("initialize script transform");
        const s = {
          kind: "encode",
          participantIdentity: this.room.localParticipant.identity,
          trackId: t,
          codec: i,
        };
        e.transform = new RTCRtpScriptTransform(this.worker, s);
      } else {
        q.info("initialize encoded streams");
        const s = e.createEncodedStreams(),
          o = {
            kind: "encode",
            data: {
              readableStream: s.readable,
              writableStream: s.writable,
              codec: i,
              trackId: t,
              participantIdentity: this.room.localParticipant.identity,
            },
          };
        this.worker.postMessage(o, [s.readable, s.writable]);
      }
      e[hn] = !0;
    }
  }
}
var Yt;
(function (n) {
  (n[(n.WAITING = 0)] = "WAITING"),
    (n[(n.RUNNING = 1)] = "RUNNING"),
    (n[(n.COMPLETED = 2)] = "COMPLETED");
})(Yt || (Yt = {}));
class rh {
  constructor() {
    (this.pendingTasks = new Map()),
      (this.taskMutex = new ke()),
      (this.nextTaskIndex = 0);
  }
  run(e) {
    return m(this, void 0, void 0, function* () {
      const t = {
        id: this.nextTaskIndex++,
        enqueuedAt: Date.now(),
        status: Yt.WAITING,
      };
      this.pendingTasks.set(t.id, t);
      const i = yield this.taskMutex.lock();
      try {
        return (t.executedAt = Date.now()), (t.status = Yt.RUNNING), yield e();
      } finally {
        (t.status = Yt.COMPLETED), this.pendingTasks.delete(t.id), i();
      }
    });
  }
  flush() {
    return m(this, void 0, void 0, function* () {
      return this.run(() => m(this, void 0, void 0, function* () {}));
    });
  }
  snapshot() {
    return Array.from(this.pendingTasks.values());
  }
}
const sh = ["syncState", "trickle", "offer", "answer", "simulate", "leave"];
function oh(n) {
  const e = sh.indexOf(n.case) >= 0;
  return q.trace("request allowed to bypass queue:", { canPass: e, req: n }), e;
}
var $;
(function (n) {
  (n[(n.CONNECTING = 0)] = "CONNECTING"),
    (n[(n.CONNECTED = 1)] = "CONNECTED"),
    (n[(n.RECONNECTING = 2)] = "RECONNECTING"),
    (n[(n.DISCONNECTING = 3)] = "DISCONNECTING"),
    (n[(n.DISCONNECTED = 4)] = "DISCONNECTED");
})($ || ($ = {}));
class gr {
  get currentState() {
    return this.state;
  }
  get isDisconnected() {
    return this.state === $.DISCONNECTING || this.state === $.DISCONNECTED;
  }
  get isEstablishingConnection() {
    return this.state === $.CONNECTING || this.state === $.RECONNECTING;
  }
  getNextRequestId() {
    return (this._requestId += 1), this._requestId;
  }
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var i;
    (this.rtt = 0),
      (this.state = $.DISCONNECTED),
      (this.log = q),
      (this._requestId = 0),
      (this.resetCallbacks = () => {
        (this.onAnswer = void 0),
          (this.onLeave = void 0),
          (this.onLocalTrackPublished = void 0),
          (this.onLocalTrackUnpublished = void 0),
          (this.onNegotiateRequested = void 0),
          (this.onOffer = void 0),
          (this.onRemoteMuteChanged = void 0),
          (this.onSubscribedQualityUpdate = void 0),
          (this.onTokenRefresh = void 0),
          (this.onTrickle = void 0),
          (this.onClose = void 0);
      }),
      (this.log = We(
        (i = t.loggerName) !== null && i !== void 0 ? i : Ae.Signal,
      )),
      (this.loggerContextCb = t.loggerContextCb),
      (this.useJSON = e),
      (this.requestQueue = new rh()),
      (this.queuedRequests = []),
      (this.closingLock = new ke()),
      (this.connectionLock = new ke()),
      (this.state = $.DISCONNECTED);
  }
  get logContext() {
    var e, t;
    return (t =
      (e = this.loggerContextCb) === null || e === void 0
        ? void 0
        : e.call(this)) !== null && t !== void 0
      ? t
      : {};
  }
  join(e, t, i, r) {
    return m(this, void 0, void 0, function* () {
      return (
        (this.state = $.CONNECTING),
        (this.options = i),
        yield this.connect(e, t, i, r)
      );
    });
  }
  reconnect(e, t, i, r) {
    return m(this, void 0, void 0, function* () {
      if (!this.options) {
        this.log.warn(
          "attempted to reconnect without signal options being set, ignoring",
          this.logContext,
        );
        return;
      }
      return (
        (this.state = $.RECONNECTING),
        this.clearPingInterval(),
        yield this.connect(
          e,
          t,
          Object.assign(Object.assign({}, this.options), {
            reconnect: !0,
            sid: i,
            reconnectReason: r,
          }),
        )
      );
    });
  }
  connect(e, t, i, r) {
    (this.connectOptions = i),
      (e = Zl(e)),
      (e = e.replace(/\/$/, "")),
      (e += "/rtc");
    const s = $l(),
      o = ah(t, s, i);
    return new Promise((a, c) =>
      m(this, void 0, void 0, function* () {
        const d = yield this.connectionLock.lock();
        try {
          const u = () =>
              m(this, void 0, void 0, function* () {
                this.close(),
                  clearTimeout(l),
                  c(new J("room connection has been cancelled (signal)"));
              }),
            l = setTimeout(() => {
              this.close(), c(new J("room connection has timed out (signal)"));
            }, i.websocketTimeout);
          r?.aborted && u(),
            r?.addEventListener("abort", u),
            this.log.debug("connecting to ".concat(e + o), this.logContext),
            this.ws && (yield this.close(!1)),
            (this.ws = new WebSocket(e + o)),
            (this.ws.binaryType = "arraybuffer"),
            (this.ws.onopen = () => {
              clearTimeout(l);
            }),
            (this.ws.onerror = (h) =>
              m(this, void 0, void 0, function* () {
                if (this.state !== $.CONNECTED) {
                  (this.state = $.DISCONNECTED), clearTimeout(l);
                  try {
                    const f = yield fetch(
                      "http".concat(e.substring(2), "/validate").concat(o),
                    );
                    if (f.status.toFixed(0).startsWith("4")) {
                      const g = yield f.text();
                      c(new J(g, me.NotAllowed, f.status));
                    } else
                      c(new J("Internal error", me.InternalError, f.status));
                  } catch {
                    c(new J("server was not reachable", me.ServerUnreachable));
                  }
                  return;
                }
                this.handleWSError(h);
              })),
            (this.ws.onmessage = (h) =>
              m(this, void 0, void 0, function* () {
                var f, g, p;
                let b;
                if (typeof h.data == "string") {
                  const v = JSON.parse(h.data);
                  b = Yr.fromJson(v, { ignoreUnknownFields: !0 });
                } else if (h.data instanceof ArrayBuffer)
                  b = Yr.fromBinary(new Uint8Array(h.data));
                else {
                  this.log.error(
                    "could not decode websocket message: ".concat(
                      typeof h.data,
                    ),
                    this.logContext,
                  );
                  return;
                }
                if (this.state !== $.CONNECTED) {
                  let v = !1;
                  if (
                    (((f = b.message) === null || f === void 0
                      ? void 0
                      : f.case) === "join"
                      ? ((this.state = $.CONNECTED),
                        r?.removeEventListener("abort", u),
                        (this.pingTimeoutDuration =
                          b.message.value.pingTimeout),
                        (this.pingIntervalDuration =
                          b.message.value.pingInterval),
                        this.pingTimeoutDuration &&
                          this.pingTimeoutDuration > 0 &&
                          (this.log.debug(
                            "ping config",
                            Object.assign(Object.assign({}, this.logContext), {
                              timeout: this.pingTimeoutDuration,
                              interval: this.pingIntervalDuration,
                            }),
                          ),
                          this.startPingInterval()),
                        a(b.message.value))
                      : this.state === $.RECONNECTING &&
                          b.message.case !== "leave"
                        ? ((this.state = $.CONNECTED),
                          r?.removeEventListener("abort", u),
                          this.startPingInterval(),
                          ((g = b.message) === null || g === void 0
                            ? void 0
                            : g.case) === "reconnect"
                            ? a(b.message.value)
                            : (this.log.debug(
                                "declaring signal reconnected without reconnect response received",
                                this.logContext,
                              ),
                              a(void 0),
                              (v = !0)))
                        : this.isEstablishingConnection &&
                            b.message.case === "leave"
                          ? c(
                              new J(
                                "Received leave request while trying to (re)connect",
                                me.LeaveRequest,
                              ),
                            )
                          : i.reconnect ||
                            c(
                              new J(
                                "did not receive join response, got ".concat(
                                  (p = b.message) === null || p === void 0
                                    ? void 0
                                    : p.case,
                                  " instead",
                                ),
                              ),
                            ),
                    !v)
                  )
                    return;
                }
                this.signalLatency && (yield je(this.signalLatency)),
                  this.handleSignalResponse(b);
              })),
            (this.ws.onclose = (h) => {
              this.isEstablishingConnection &&
                c(
                  new J("Websocket got closed during a (re)connection attempt"),
                ),
                this.log.warn(
                  "websocket closed",
                  Object.assign(Object.assign({}, this.logContext), {
                    reason: h.reason,
                    code: h.code,
                    wasClean: h.wasClean,
                    state: this.state,
                  }),
                ),
                this.handleOnClose(h.reason);
            });
        } finally {
          d();
        }
      }),
    );
  }
  close() {
    return m(this, arguments, void 0, function () {
      var e = this;
      let t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return (function* () {
        const i = yield e.closingLock.lock();
        try {
          if ((e.clearPingInterval(), t && (e.state = $.DISCONNECTING), e.ws)) {
            (e.ws.onmessage = null),
              (e.ws.onopen = null),
              (e.ws.onclose = null);
            const r = new Promise((s) => {
              e.ws
                ? (e.ws.onclose = () => {
                    s();
                  })
                : s();
            });
            e.ws.readyState < e.ws.CLOSING &&
              (e.ws.close(), yield Promise.race([r, je(250)])),
              (e.ws = void 0);
          }
        } finally {
          t && (e.state = $.DISCONNECTED), i();
        }
      })();
    });
  }
  sendOffer(e) {
    this.log.debug(
      "sending offer",
      Object.assign(Object.assign({}, this.logContext), { offerSdp: e.sdp }),
    ),
      this.sendRequest({ case: "offer", value: Nn(e) });
  }
  sendAnswer(e) {
    return (
      this.log.debug(
        "sending answer",
        Object.assign(Object.assign({}, this.logContext), { answerSdp: e.sdp }),
      ),
      this.sendRequest({ case: "answer", value: Nn(e) })
    );
  }
  sendIceCandidate(e, t) {
    return (
      this.log.trace(
        "sending ice candidate",
        Object.assign(Object.assign({}, this.logContext), { candidate: e }),
      ),
      this.sendRequest({
        case: "trickle",
        value: new cr({ candidateInit: JSON.stringify(e), target: t }),
      })
    );
  }
  sendMuteTrack(e, t) {
    return this.sendRequest({
      case: "mute",
      value: new dr({ sid: e, muted: t }),
    });
  }
  sendAddTrack(e) {
    return this.sendRequest({ case: "addTrack", value: e });
  }
  sendUpdateLocalMetadata(e, t) {
    return m(this, arguments, void 0, function (i, r) {
      var s = this;
      let o =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return (function* () {
        const a = s.getNextRequestId();
        return (
          yield s.sendRequest({
            case: "updateMetadata",
            value: new Yo({
              requestId: a,
              metadata: i,
              name: r,
              attributes: o,
            }),
          }),
          a
        );
      })();
    });
  }
  sendUpdateTrackSettings(e) {
    this.sendRequest({ case: "trackSetting", value: e });
  }
  sendUpdateSubscription(e) {
    return this.sendRequest({ case: "subscription", value: e });
  }
  sendSyncState(e) {
    return this.sendRequest({ case: "syncState", value: e });
  }
  sendUpdateVideoLayers(e, t) {
    return this.sendRequest({
      case: "updateLayers",
      value: new Jo({ trackSid: e, layers: t }),
    });
  }
  sendUpdateSubscriptionPermissions(e, t) {
    return this.sendRequest({
      case: "subscriptionPermission",
      value: new Xo({ allParticipants: e, trackPermissions: t }),
    });
  }
  sendSimulateScenario(e) {
    return this.sendRequest({ case: "simulate", value: e });
  }
  sendPing() {
    return Promise.all([
      this.sendRequest({ case: "ping", value: X.parse(Date.now()) }),
      this.sendRequest({
        case: "pingReq",
        value: new ta({
          timestamp: X.parse(Date.now()),
          rtt: X.parse(this.rtt),
        }),
      }),
    ]);
  }
  sendUpdateLocalAudioTrack(e, t) {
    return this.sendRequest({
      case: "updateAudioTrack",
      value: new Ho({ trackSid: e, features: t }),
    });
  }
  sendLeave() {
    return this.sendRequest({
      case: "leave",
      value: new Hn({ reason: Et.CLIENT_INITIATED, action: wt.DISCONNECT }),
    });
  }
  sendRequest(e) {
    return m(this, arguments, void 0, function (t) {
      var i = this;
      let r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return (function* () {
        if (!r && !oh(t) && i.state === $.RECONNECTING) {
          i.queuedRequests.push(() =>
            m(i, void 0, void 0, function* () {
              yield this.sendRequest(t, !0);
            }),
          );
          return;
        }
        if (
          (r || (yield i.requestQueue.flush()),
          i.signalLatency && (yield je(i.signalLatency)),
          !i.ws || i.ws.readyState !== i.ws.OPEN)
        ) {
          i.log.error(
            "cannot send signal request before connected, type: ".concat(
              t?.case,
            ),
            i.logContext,
          );
          return;
        }
        const o = new Lu({ message: t });
        try {
          i.useJSON ? i.ws.send(o.toJsonString()) : i.ws.send(o.toBinary());
        } catch (a) {
          i.log.error(
            "error sending signal message",
            Object.assign(Object.assign({}, i.logContext), { error: a }),
          );
        }
      })();
    });
  }
  handleSignalResponse(e) {
    var t, i;
    const r = e.message;
    if (r == null) {
      this.log.debug("received unsupported message", this.logContext);
      return;
    }
    let s = !1;
    if (r.case === "answer") {
      const o = vs(r.value);
      this.onAnswer && this.onAnswer(o);
    } else if (r.case === "offer") {
      const o = vs(r.value);
      this.onOffer && this.onOffer(o);
    } else if (r.case === "trickle") {
      const o = JSON.parse(r.value.candidateInit);
      this.onTrickle && this.onTrickle(o, r.value.target);
    } else
      r.case === "update"
        ? this.onParticipantUpdate &&
          this.onParticipantUpdate(
            (t = r.value.participants) !== null && t !== void 0 ? t : [],
          )
        : r.case === "trackPublished"
          ? this.onLocalTrackPublished && this.onLocalTrackPublished(r.value)
          : r.case === "speakersChanged"
            ? this.onSpeakersChanged &&
              this.onSpeakersChanged(
                (i = r.value.speakers) !== null && i !== void 0 ? i : [],
              )
            : r.case === "leave"
              ? this.onLeave && this.onLeave(r.value)
              : r.case === "mute"
                ? this.onRemoteMuteChanged &&
                  this.onRemoteMuteChanged(r.value.sid, r.value.muted)
                : r.case === "roomUpdate"
                  ? this.onRoomUpdate &&
                    r.value.room &&
                    this.onRoomUpdate(r.value.room)
                  : r.case === "connectionQuality"
                    ? this.onConnectionQuality &&
                      this.onConnectionQuality(r.value)
                    : r.case === "streamStateUpdate"
                      ? this.onStreamStateUpdate &&
                        this.onStreamStateUpdate(r.value)
                      : r.case === "subscribedQualityUpdate"
                        ? this.onSubscribedQualityUpdate &&
                          this.onSubscribedQualityUpdate(r.value)
                        : r.case === "subscriptionPermissionUpdate"
                          ? this.onSubscriptionPermissionUpdate &&
                            this.onSubscriptionPermissionUpdate(r.value)
                          : r.case === "refreshToken"
                            ? this.onTokenRefresh &&
                              this.onTokenRefresh(r.value)
                            : r.case === "trackUnpublished"
                              ? this.onLocalTrackUnpublished &&
                                this.onLocalTrackUnpublished(r.value)
                              : r.case === "subscriptionResponse"
                                ? this.onSubscriptionError &&
                                  this.onSubscriptionError(r.value)
                                : r.case === "pong" ||
                                  (r.case === "pongResp"
                                    ? ((this.rtt =
                                        Date.now() -
                                        Number.parseInt(
                                          r.value.lastPingTimestamp.toString(),
                                        )),
                                      this.resetPingTimeout(),
                                      (s = !0))
                                    : r.case === "requestResponse"
                                      ? this.onRequestResponse &&
                                        this.onRequestResponse(r.value)
                                      : r.case === "trackSubscribed"
                                        ? this.onLocalTrackSubscribed &&
                                          this.onLocalTrackSubscribed(
                                            r.value.trackSid,
                                          )
                                        : this.log.debug(
                                            "unsupported message",
                                            Object.assign(
                                              Object.assign(
                                                {},
                                                this.logContext,
                                              ),
                                              { msgCase: r.case },
                                            ),
                                          ));
    s || this.resetPingTimeout();
  }
  setReconnected() {
    for (; this.queuedRequests.length > 0; ) {
      const e = this.queuedRequests.shift();
      e && this.requestQueue.run(e);
    }
  }
  handleOnClose(e) {
    return m(this, void 0, void 0, function* () {
      if (this.state === $.DISCONNECTED) return;
      const t = this.onClose;
      yield this.close(),
        this.log.debug(
          "websocket connection closed: ".concat(e),
          Object.assign(Object.assign({}, this.logContext), { reason: e }),
        ),
        t && t(e);
    });
  }
  handleWSError(e) {
    this.log.error(
      "websocket error",
      Object.assign(Object.assign({}, this.logContext), { error: e }),
    );
  }
  resetPingTimeout() {
    if ((this.clearPingTimeout(), !this.pingTimeoutDuration)) {
      this.log.warn("ping timeout duration not set", this.logContext);
      return;
    }
    this.pingTimeout = le.setTimeout(() => {
      this.log.warn(
        "ping timeout triggered. last pong received at: ".concat(
          new Date(Date.now() - this.pingTimeoutDuration * 1e3).toUTCString(),
        ),
        this.logContext,
      ),
        this.handleOnClose("ping timeout");
    }, this.pingTimeoutDuration * 1e3);
  }
  clearPingTimeout() {
    this.pingTimeout && le.clearTimeout(this.pingTimeout);
  }
  startPingInterval() {
    if (
      (this.clearPingInterval(),
      this.resetPingTimeout(),
      !this.pingIntervalDuration)
    ) {
      this.log.warn("ping interval duration not set", this.logContext);
      return;
    }
    this.log.debug("start ping interval", this.logContext),
      (this.pingInterval = le.setInterval(() => {
        this.sendPing();
      }, this.pingIntervalDuration * 1e3));
  }
  clearPingInterval() {
    this.log.debug("clearing ping interval", this.logContext),
      this.clearPingTimeout(),
      this.pingInterval && le.clearInterval(this.pingInterval);
  }
}
function vs(n) {
  const e = { type: "offer", sdp: n.sdp };
  switch (n.type) {
    case "answer":
    case "offer":
    case "pranswer":
    case "rollback":
      e.type = n.type;
      break;
  }
  return e;
}
function Nn(n) {
  return new lt({ sdp: n.sdp, type: n.type });
}
function ah(n, e, t) {
  var i;
  const r = new URLSearchParams();
  return (
    r.set("access_token", n),
    t.reconnect && (r.set("reconnect", "1"), t.sid && r.set("sid", t.sid)),
    r.set("auto_subscribe", t.autoSubscribe ? "1" : "0"),
    r.set("sdk", He() ? "reactnative" : "js"),
    r.set("version", e.version),
    r.set("protocol", e.protocol.toString()),
    e.deviceModel && r.set("device_model", e.deviceModel),
    e.os && r.set("os", e.os),
    e.osVersion && r.set("os_version", e.osVersion),
    e.browser && r.set("browser", e.browser),
    e.browserVersion && r.set("browser_version", e.browserVersion),
    t.adaptiveStream && r.set("adaptive_stream", "1"),
    t.reconnectReason &&
      r.set("reconnect_reason", t.reconnectReason.toString()),
    !((i = navigator.connection) === null || i === void 0) &&
      i.type &&
      r.set("network", navigator.connection.type),
    "?".concat(r.toString())
  );
}
var Oe = {},
  ui = {},
  li = { exports: {} },
  bs;
function Va() {
  if (bs) return li.exports;
  bs = 1;
  var n = (li.exports = {
    v: [{ name: "version", reg: /^(\d*)$/ }],
    o: [
      {
        name: "origin",
        reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
        names: [
          "username",
          "sessionId",
          "sessionVersion",
          "netType",
          "ipVer",
          "address",
        ],
        format: "%s %s %d %s IP%d %s",
      },
    ],
    s: [{ name: "name" }],
    i: [{ name: "description" }],
    u: [{ name: "uri" }],
    e: [{ name: "email" }],
    p: [{ name: "phone" }],
    z: [{ name: "timezones" }],
    r: [{ name: "repeats" }],
    t: [
      {
        name: "timing",
        reg: /^(\d*) (\d*)/,
        names: ["start", "stop"],
        format: "%d %d",
      },
    ],
    c: [
      {
        name: "connection",
        reg: /^IN IP(\d) (\S*)/,
        names: ["version", "ip"],
        format: "IN IP%d %s",
      },
    ],
    b: [
      {
        push: "bandwidth",
        reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
        names: ["type", "limit"],
        format: "%s:%s",
      },
    ],
    m: [
      {
        reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
        names: ["type", "port", "protocol", "payloads"],
        format: "%s %d %s %s",
      },
    ],
    a: [
      {
        push: "rtp",
        reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
        names: ["payload", "codec", "rate", "encoding"],
        format: function (e) {
          return e.encoding
            ? "rtpmap:%d %s/%s/%s"
            : e.rate
              ? "rtpmap:%d %s/%s"
              : "rtpmap:%d %s";
        },
      },
      {
        push: "fmtp",
        reg: /^fmtp:(\d*) ([\S| ]*)/,
        names: ["payload", "config"],
        format: "fmtp:%d %s",
      },
      { name: "control", reg: /^control:(.*)/, format: "control:%s" },
      {
        name: "rtcp",
        reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
        names: ["port", "netType", "ipVer", "address"],
        format: function (e) {
          return e.address != null ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
        },
      },
      {
        push: "rtcpFbTrrInt",
        reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
        names: ["payload", "value"],
        format: "rtcp-fb:%s trr-int %d",
      },
      {
        push: "rtcpFb",
        reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
        names: ["payload", "type", "subtype"],
        format: function (e) {
          return e.subtype != null ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
        },
      },
      {
        push: "ext",
        reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
        names: ["value", "direction", "encrypt-uri", "uri", "config"],
        format: function (e) {
          return (
            "extmap:%d" +
            (e.direction ? "/%s" : "%v") +
            (e["encrypt-uri"] ? " %s" : "%v") +
            " %s" +
            (e.config ? " %s" : "")
          );
        },
      },
      { name: "extmapAllowMixed", reg: /^(extmap-allow-mixed)/ },
      {
        push: "crypto",
        reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
        names: ["id", "suite", "config", "sessionConfig"],
        format: function (e) {
          return e.sessionConfig != null
            ? "crypto:%d %s %s %s"
            : "crypto:%d %s %s";
        },
      },
      { name: "setup", reg: /^setup:(\w*)/, format: "setup:%s" },
      {
        name: "connectionType",
        reg: /^connection:(new|existing)/,
        format: "connection:%s",
      },
      { name: "mid", reg: /^mid:([^\s]*)/, format: "mid:%s" },
      { name: "msid", reg: /^msid:(.*)/, format: "msid:%s" },
      { name: "ptime", reg: /^ptime:(\d*(?:\.\d*)*)/, format: "ptime:%d" },
      {
        name: "maxptime",
        reg: /^maxptime:(\d*(?:\.\d*)*)/,
        format: "maxptime:%d",
      },
      { name: "direction", reg: /^(sendrecv|recvonly|sendonly|inactive)/ },
      { name: "icelite", reg: /^(ice-lite)/ },
      { name: "iceUfrag", reg: /^ice-ufrag:(\S*)/, format: "ice-ufrag:%s" },
      { name: "icePwd", reg: /^ice-pwd:(\S*)/, format: "ice-pwd:%s" },
      {
        name: "fingerprint",
        reg: /^fingerprint:(\S*) (\S*)/,
        names: ["type", "hash"],
        format: "fingerprint:%s %s",
      },
      {
        push: "candidates",
        reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
        names: [
          "foundation",
          "component",
          "transport",
          "priority",
          "ip",
          "port",
          "type",
          "raddr",
          "rport",
          "tcptype",
          "generation",
          "network-id",
          "network-cost",
        ],
        format: function (e) {
          var t = "candidate:%s %d %s %d %s %d typ %s";
          return (
            (t += e.raddr != null ? " raddr %s rport %d" : "%v%v"),
            (t += e.tcptype != null ? " tcptype %s" : "%v"),
            e.generation != null && (t += " generation %d"),
            (t += e["network-id"] != null ? " network-id %d" : "%v"),
            (t += e["network-cost"] != null ? " network-cost %d" : "%v"),
            t
          );
        },
      },
      { name: "endOfCandidates", reg: /^(end-of-candidates)/ },
      {
        name: "remoteCandidates",
        reg: /^remote-candidates:(.*)/,
        format: "remote-candidates:%s",
      },
      {
        name: "iceOptions",
        reg: /^ice-options:(\S*)/,
        format: "ice-options:%s",
      },
      {
        push: "ssrcs",
        reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
        names: ["id", "attribute", "value"],
        format: function (e) {
          var t = "ssrc:%d";
          return (
            e.attribute != null &&
              ((t += " %s"), e.value != null && (t += ":%s")),
            t
          );
        },
      },
      {
        push: "ssrcGroups",
        reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
        names: ["semantics", "ssrcs"],
        format: "ssrc-group:%s %s",
      },
      {
        name: "msidSemantic",
        reg: /^msid-semantic:\s?(\w*) (\S*)/,
        names: ["semantic", "token"],
        format: "msid-semantic: %s %s",
      },
      {
        push: "groups",
        reg: /^group:(\w*) (.*)/,
        names: ["type", "mids"],
        format: "group:%s %s",
      },
      { name: "rtcpMux", reg: /^(rtcp-mux)/ },
      { name: "rtcpRsize", reg: /^(rtcp-rsize)/ },
      {
        name: "sctpmap",
        reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
        names: ["sctpmapNumber", "app", "maxMessageSize"],
        format: function (e) {
          return e.maxMessageSize != null
            ? "sctpmap:%s %s %s"
            : "sctpmap:%s %s";
        },
      },
      {
        name: "xGoogleFlag",
        reg: /^x-google-flag:([^\s]*)/,
        format: "x-google-flag:%s",
      },
      {
        push: "rids",
        reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
        names: ["id", "direction", "params"],
        format: function (e) {
          return e.params ? "rid:%s %s %s" : "rid:%s %s";
        },
      },
      {
        push: "imageattrs",
        reg: new RegExp(
          "^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?",
        ),
        names: ["pt", "dir1", "attrs1", "dir2", "attrs2"],
        format: function (e) {
          return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "");
        },
      },
      {
        name: "simulcast",
        reg: new RegExp(
          "^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$",
        ),
        names: ["dir1", "list1", "dir2", "list2"],
        format: function (e) {
          return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "");
        },
      },
      {
        name: "simulcast_03",
        reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
        names: ["value"],
        format: "simulcast: %s",
      },
      {
        name: "framerate",
        reg: /^framerate:(\d+(?:$|\.\d+))/,
        format: "framerate:%s",
      },
      {
        name: "sourceFilter",
        reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
        names: [
          "filterMode",
          "netType",
          "addressTypes",
          "destAddress",
          "srcList",
        ],
        format: "source-filter: %s %s %s %s %s",
      },
      { name: "bundleOnly", reg: /^(bundle-only)/ },
      { name: "label", reg: /^label:(.+)/, format: "label:%s" },
      { name: "sctpPort", reg: /^sctp-port:(\d+)$/, format: "sctp-port:%s" },
      {
        name: "maxMessageSize",
        reg: /^max-message-size:(\d+)$/,
        format: "max-message-size:%s",
      },
      {
        push: "tsRefClocks",
        reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
        names: ["clksrc", "clksrcExt"],
        format: function (e) {
          return "ts-refclk:%s" + (e.clksrcExt != null ? "=%s" : "");
        },
      },
      {
        name: "mediaClk",
        reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
        names: [
          "id",
          "mediaClockName",
          "mediaClockValue",
          "rateNumerator",
          "rateDenominator",
        ],
        format: function (e) {
          var t = "mediaclk:";
          return (
            (t += e.id != null ? "id=%s %s" : "%v%s"),
            (t += e.mediaClockValue != null ? "=%s" : ""),
            (t += e.rateNumerator != null ? " rate=%s" : ""),
            (t += e.rateDenominator != null ? "/%s" : ""),
            t
          );
        },
      },
      { name: "keywords", reg: /^keywds:(.+)$/, format: "keywds:%s" },
      { name: "content", reg: /^content:(.+)/, format: "content:%s" },
      {
        name: "bfcpFloorCtrl",
        reg: /^floorctrl:(c-only|s-only|c-s)/,
        format: "floorctrl:%s",
      },
      { name: "bfcpConfId", reg: /^confid:(\d+)/, format: "confid:%s" },
      { name: "bfcpUserId", reg: /^userid:(\d+)/, format: "userid:%s" },
      {
        name: "bfcpFloorId",
        reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
        names: ["id", "mStream"],
        format: "floorid:%s mstrm:%s",
      },
      { push: "invalid", names: ["value"] },
    ],
  });
  return (
    Object.keys(n).forEach(function (e) {
      var t = n[e];
      t.forEach(function (i) {
        i.reg || (i.reg = /(.*)/), i.format || (i.format = "%s");
      });
    }),
    li.exports
  );
}
var ys;
function ch() {
  return (
    ys ||
      ((ys = 1),
      (function (n) {
        var e = function (a) {
            return String(Number(a)) === a ? Number(a) : a;
          },
          t = function (a, c, d, u) {
            if (u && !d) c[u] = e(a[1]);
            else
              for (var l = 0; l < d.length; l += 1)
                a[l + 1] != null && (c[d[l]] = e(a[l + 1]));
          },
          i = function (a, c, d) {
            var u = a.name && a.names;
            a.push && !c[a.push]
              ? (c[a.push] = [])
              : u && !c[a.name] && (c[a.name] = {});
            var l = a.push ? {} : u ? c[a.name] : c;
            t(d.match(a.reg), l, a.names, a.name), a.push && c[a.push].push(l);
          },
          r = Va(),
          s = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
        n.parse = function (a) {
          var c = {},
            d = [],
            u = c;
          return (
            a
              .split(/(\r\n|\r|\n)/)
              .filter(s)
              .forEach(function (l) {
                var h = l[0],
                  f = l.slice(2);
                h === "m" &&
                  (d.push({ rtp: [], fmtp: [] }), (u = d[d.length - 1]));
                for (var g = 0; g < (r[h] || []).length; g += 1) {
                  var p = r[h][g];
                  if (p.reg.test(f)) return i(p, u, f);
                }
              }),
            (c.media = d),
            c
          );
        };
        var o = function (a, c) {
          var d = c.split(/=(.+)/, 2);
          return (
            d.length === 2
              ? (a[d[0]] = e(d[1]))
              : d.length === 1 && c.length > 1 && (a[d[0]] = void 0),
            a
          );
        };
        (n.parseParams = function (a) {
          return a.split(/;\s?/).reduce(o, {});
        }),
          (n.parseFmtpConfig = n.parseParams),
          (n.parsePayloads = function (a) {
            return a.toString().split(" ").map(Number);
          }),
          (n.parseRemoteCandidates = function (a) {
            for (
              var c = [], d = a.split(" ").map(e), u = 0;
              u < d.length;
              u += 3
            )
              c.push({ component: d[u], ip: d[u + 1], port: d[u + 2] });
            return c;
          }),
          (n.parseImageAttributes = function (a) {
            return a.split(" ").map(function (c) {
              return c
                .substring(1, c.length - 1)
                .split(",")
                .reduce(o, {});
            });
          }),
          (n.parseSimulcastStreamList = function (a) {
            return a.split(";").map(function (c) {
              return c.split(",").map(function (d) {
                var u,
                  l = !1;
                return (
                  d[0] !== "~"
                    ? (u = e(d))
                    : ((u = e(d.substring(1, d.length))), (l = !0)),
                  { scid: u, paused: l }
                );
              });
            });
          });
      })(ui)),
    ui
  );
}
var hi, ks;
function dh() {
  if (ks) return hi;
  ks = 1;
  var n = Va(),
    e = /%[sdv%]/g,
    t = function (o) {
      var a = 1,
        c = arguments,
        d = c.length;
      return o.replace(e, function (u) {
        if (a >= d) return u;
        var l = c[a];
        switch (((a += 1), u)) {
          case "%%":
            return "%";
          case "%s":
            return String(l);
          case "%d":
            return Number(l);
          case "%v":
            return "";
        }
      });
    },
    i = function (o, a, c) {
      var d =
          a.format instanceof Function
            ? a.format(a.push ? c : c[a.name])
            : a.format,
        u = [o + "=" + d];
      if (a.names)
        for (var l = 0; l < a.names.length; l += 1) {
          var h = a.names[l];
          a.name ? u.push(c[a.name][h]) : u.push(c[a.names[l]]);
        }
      else u.push(c[a.name]);
      return t.apply(null, u);
    },
    r = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
    s = ["i", "c", "b", "a"];
  return (
    (hi = function (o, a) {
      (a = a || {}),
        o.version == null && (o.version = 0),
        o.name == null && (o.name = " "),
        o.media.forEach(function (l) {
          l.payloads == null && (l.payloads = "");
        });
      var c = a.outerOrder || r,
        d = a.innerOrder || s,
        u = [];
      return (
        c.forEach(function (l) {
          n[l].forEach(function (h) {
            h.name in o && o[h.name] != null
              ? u.push(i(l, h, o))
              : h.push in o &&
                o[h.push] != null &&
                o[h.push].forEach(function (f) {
                  u.push(i(l, h, f));
                });
          });
        }),
        o.media.forEach(function (l) {
          u.push(i("m", n.m[0], l)),
            d.forEach(function (h) {
              n[h].forEach(function (f) {
                f.name in l && l[f.name] != null
                  ? u.push(i(h, f, l))
                  : f.push in l &&
                    l[f.push] != null &&
                    l[f.push].forEach(function (g) {
                      u.push(i(h, f, g));
                    });
              });
            });
        }),
        u.join(`\r
`) +
          `\r
`
      );
    }),
    hi
  );
}
var Ss;
function uh() {
  if (Ss) return Oe;
  Ss = 1;
  var n = ch(),
    e = dh();
  return (
    (Oe.write = e),
    (Oe.parse = n.parse),
    (Oe.parseParams = n.parseParams),
    (Oe.parseFmtpConfig = n.parseFmtpConfig),
    (Oe.parsePayloads = n.parsePayloads),
    (Oe.parseRemoteCandidates = n.parseRemoteCandidates),
    (Oe.parseImageAttributes = n.parseImageAttributes),
    (Oe.parseSimulcastStreamList = n.parseSimulcastStreamList),
    Oe
  );
}
var Ze = uh();
const lh = 0.7,
  hh = 20,
  xt = {
    NegotiationStarted: "negotiationStarted",
    NegotiationComplete: "negotiationComplete",
    RTPVideoPayloadTypes: "rtpVideoPayloadTypes",
  };
class Ts extends Be.EventEmitter {
  get pc() {
    return this._pc || (this._pc = this.createPC()), this._pc;
  }
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var i;
    super(),
      (this.log = q),
      (this.ddExtID = 0),
      (this.pendingCandidates = []),
      (this.restartingIce = !1),
      (this.renegotiate = !1),
      (this.trackBitrates = []),
      (this.remoteStereoMids = []),
      (this.remoteNackMids = []),
      (this.negotiate = pr(
        (r) =>
          m(this, void 0, void 0, function* () {
            this.emit(xt.NegotiationStarted);
            try {
              yield this.createAndSendOffer();
            } catch (s) {
              if (r) r(s);
              else throw s;
            }
          }),
        hh,
      )),
      (this.close = () => {
        this._pc &&
          (this._pc.close(),
          (this._pc.onconnectionstatechange = null),
          (this._pc.oniceconnectionstatechange = null),
          (this._pc.onicegatheringstatechange = null),
          (this._pc.ondatachannel = null),
          (this._pc.onnegotiationneeded = null),
          (this._pc.onsignalingstatechange = null),
          (this._pc.onicecandidate = null),
          (this._pc.ondatachannel = null),
          (this._pc.ontrack = null),
          (this._pc.onconnectionstatechange = null),
          (this._pc.oniceconnectionstatechange = null),
          (this._pc = null));
      }),
      (this.log = We(
        (i = t.loggerName) !== null && i !== void 0 ? i : Ae.PCTransport,
      )),
      (this.loggerOptions = t),
      (this.config = e),
      (this._pc = this.createPC());
  }
  createPC() {
    const e = new RTCPeerConnection(this.config);
    return (
      (e.onicecandidate = (t) => {
        var i;
        t.candidate &&
          ((i = this.onIceCandidate) === null ||
            i === void 0 ||
            i.call(this, t.candidate));
      }),
      (e.onicecandidateerror = (t) => {
        var i;
        (i = this.onIceCandidateError) === null ||
          i === void 0 ||
          i.call(this, t);
      }),
      (e.oniceconnectionstatechange = () => {
        var t;
        (t = this.onIceConnectionStateChange) === null ||
          t === void 0 ||
          t.call(this, e.iceConnectionState);
      }),
      (e.onsignalingstatechange = () => {
        var t;
        (t = this.onSignalingStatechange) === null ||
          t === void 0 ||
          t.call(this, e.signalingState);
      }),
      (e.onconnectionstatechange = () => {
        var t;
        (t = this.onConnectionStateChange) === null ||
          t === void 0 ||
          t.call(this, e.connectionState);
      }),
      (e.ondatachannel = (t) => {
        var i;
        (i = this.onDataChannel) === null || i === void 0 || i.call(this, t);
      }),
      (e.ontrack = (t) => {
        var i;
        (i = this.onTrack) === null || i === void 0 || i.call(this, t);
      }),
      e
    );
  }
  get logContext() {
    var e, t;
    return Object.assign(
      {},
      (t = (e = this.loggerOptions).loggerContextCb) === null || t === void 0
        ? void 0
        : t.call(e),
    );
  }
  get isICEConnected() {
    return (
      this._pc !== null &&
      (this.pc.iceConnectionState === "connected" ||
        this.pc.iceConnectionState === "completed")
    );
  }
  addIceCandidate(e) {
    return m(this, void 0, void 0, function* () {
      if (this.pc.remoteDescription && !this.restartingIce)
        return this.pc.addIceCandidate(e);
      this.pendingCandidates.push(e);
    });
  }
  setRemoteDescription(e) {
    return m(this, void 0, void 0, function* () {
      var t;
      let i;
      if (e.type === "offer") {
        let { stereoMids: r, nackMids: s } = fh(e);
        (this.remoteStereoMids = r), (this.remoteNackMids = s);
      } else if (e.type === "answer") {
        const r = Ze.parse((t = e.sdp) !== null && t !== void 0 ? t : "");
        r.media.forEach((s) => {
          s.type === "audio" &&
            this.trackBitrates.some((o) => {
              if (!o.transceiver || s.mid != o.transceiver.mid) return !1;
              let a = 0;
              if (
                (s.rtp.some((d) =>
                  d.codec.toUpperCase() === o.codec.toUpperCase()
                    ? ((a = d.payload), !0)
                    : !1,
                ),
                a === 0)
              )
                return !0;
              let c = !1;
              for (const d of s.fmtp)
                if (d.payload === a) {
                  (d.config = d.config
                    .split(";")
                    .filter((u) => !u.includes("maxaveragebitrate"))
                    .join(";")),
                    o.maxbr > 0 &&
                      (d.config += ";maxaveragebitrate=".concat(o.maxbr * 1e3)),
                    (c = !0);
                  break;
                }
              return (
                c ||
                  (o.maxbr > 0 &&
                    s.fmtp.push({
                      payload: a,
                      config: "maxaveragebitrate=".concat(o.maxbr * 1e3),
                    })),
                !0
              );
            });
        }),
          (i = Ze.write(r));
      }
      yield this.setMungedSDP(e, i, !0),
        this.pendingCandidates.forEach((r) => {
          this.pc.addIceCandidate(r);
        }),
        (this.pendingCandidates = []),
        (this.restartingIce = !1),
        this.renegotiate
          ? ((this.renegotiate = !1), yield this.createAndSendOffer())
          : e.type === "answer" &&
            (this.emit(xt.NegotiationComplete),
            e.sdp &&
              Ze.parse(e.sdp).media.forEach((s) => {
                s.type === "video" && this.emit(xt.RTPVideoPayloadTypes, s.rtp);
              }));
    });
  }
  createAndSendOffer(e) {
    return m(this, void 0, void 0, function* () {
      var t;
      if (this.onOffer === void 0) return;
      if (
        (e?.iceRestart &&
          (this.log.debug("restarting ICE", this.logContext),
          (this.restartingIce = !0)),
        this._pc && this._pc.signalingState === "have-local-offer")
      ) {
        const s = this._pc.remoteDescription;
        if (e?.iceRestart && s) yield this._pc.setRemoteDescription(s);
        else {
          this.renegotiate = !0;
          return;
        }
      } else if (!this._pc || this._pc.signalingState === "closed") {
        this.log.warn(
          "could not createOffer with closed peer connection",
          this.logContext,
        );
        return;
      }
      this.log.debug("starting to negotiate", this.logContext);
      const i = yield this.pc.createOffer(e);
      this.log.debug(
        "original offer",
        Object.assign({ sdp: i.sdp }, this.logContext),
      );
      const r = Ze.parse((t = i.sdp) !== null && t !== void 0 ? t : "");
      r.media.forEach((s) => {
        s.type === "audio"
          ? Cs(s, [], [])
          : s.type === "video" &&
            this.trackBitrates.some((o) => {
              if (!s.msid || !o.cid || !s.msid.includes(o.cid)) return !1;
              let a = 0;
              if (
                (s.rtp.some((d) =>
                  d.codec.toUpperCase() === o.codec.toUpperCase()
                    ? ((a = d.payload), !0)
                    : !1,
                ),
                a === 0 ||
                  (Jt(o.codec) && this.ensureVideoDDExtensionForSVC(s, r),
                  o.codec !== "av1"))
              )
                return !0;
              const c = Math.round(o.maxbr * lh);
              for (const d of s.fmtp)
                if (d.payload === a) {
                  d.config.includes("x-google-start-bitrate") ||
                    (d.config += ";x-google-start-bitrate=".concat(c));
                  break;
                }
              return !0;
            });
      }),
        yield this.setMungedSDP(i, Ze.write(r)),
        this.onOffer(i);
    });
  }
  createAndSetAnswer() {
    return m(this, void 0, void 0, function* () {
      var e;
      const t = yield this.pc.createAnswer(),
        i = Ze.parse((e = t.sdp) !== null && e !== void 0 ? e : "");
      return (
        i.media.forEach((r) => {
          r.type === "audio" &&
            Cs(r, this.remoteStereoMids, this.remoteNackMids);
        }),
        yield this.setMungedSDP(t, Ze.write(i)),
        t
      );
    });
  }
  createDataChannel(e, t) {
    return this.pc.createDataChannel(e, t);
  }
  addTransceiver(e, t) {
    return this.pc.addTransceiver(e, t);
  }
  addTrack(e) {
    if (!this._pc) throw new re("PC closed, cannot add track");
    return this._pc.addTrack(e);
  }
  setTrackCodecBitrate(e) {
    this.trackBitrates.push(e);
  }
  setConfiguration(e) {
    var t;
    if (!this._pc) throw new re("PC closed, cannot configure");
    return (t = this._pc) === null || t === void 0
      ? void 0
      : t.setConfiguration(e);
  }
  canRemoveTrack() {
    var e;
    return !!(!((e = this._pc) === null || e === void 0) && e.removeTrack);
  }
  removeTrack(e) {
    var t;
    return (t = this._pc) === null || t === void 0 ? void 0 : t.removeTrack(e);
  }
  getConnectionState() {
    var e, t;
    return (t =
      (e = this._pc) === null || e === void 0 ? void 0 : e.connectionState) !==
      null && t !== void 0
      ? t
      : "closed";
  }
  getICEConnectionState() {
    var e, t;
    return (t =
      (e = this._pc) === null || e === void 0
        ? void 0
        : e.iceConnectionState) !== null && t !== void 0
      ? t
      : "closed";
  }
  getSignallingState() {
    var e, t;
    return (t =
      (e = this._pc) === null || e === void 0 ? void 0 : e.signalingState) !==
      null && t !== void 0
      ? t
      : "closed";
  }
  getTransceivers() {
    var e, t;
    return (t =
      (e = this._pc) === null || e === void 0
        ? void 0
        : e.getTransceivers()) !== null && t !== void 0
      ? t
      : [];
  }
  getSenders() {
    var e, t;
    return (t =
      (e = this._pc) === null || e === void 0 ? void 0 : e.getSenders()) !==
      null && t !== void 0
      ? t
      : [];
  }
  getLocalDescription() {
    var e;
    return (e = this._pc) === null || e === void 0
      ? void 0
      : e.localDescription;
  }
  getRemoteDescription() {
    var e;
    return (e = this.pc) === null || e === void 0
      ? void 0
      : e.remoteDescription;
  }
  getStats() {
    return this.pc.getStats();
  }
  getConnectedAddress() {
    return m(this, void 0, void 0, function* () {
      var e;
      if (!this._pc) return;
      let t = "";
      const i = new Map(),
        r = new Map();
      if (
        ((yield this._pc.getStats()).forEach((a) => {
          switch (a.type) {
            case "transport":
              t = a.selectedCandidatePairId;
              break;
            case "candidate-pair":
              t === "" && a.selected && (t = a.id), i.set(a.id, a);
              break;
            case "remote-candidate":
              r.set(a.id, "".concat(a.address, ":").concat(a.port));
              break;
          }
        }),
        t === "")
      )
        return;
      const o =
        (e = i.get(t)) === null || e === void 0 ? void 0 : e.remoteCandidateId;
      if (o !== void 0) return r.get(o);
    });
  }
  setMungedSDP(e, t, i) {
    return m(this, void 0, void 0, function* () {
      if (t) {
        const r = e.sdp;
        e.sdp = t;
        try {
          this.log.debug(
            "setting munged ".concat(i ? "remote" : "local", " description"),
            this.logContext,
          ),
            i
              ? yield this.pc.setRemoteDescription(e)
              : yield this.pc.setLocalDescription(e);
          return;
        } catch (s) {
          this.log.warn(
            "not able to set ".concat(
              e.type,
              ", falling back to unmodified sdp",
            ),
            Object.assign(Object.assign({}, this.logContext), {
              error: s,
              sdp: t,
            }),
          ),
            (e.sdp = r);
        }
      }
      try {
        i
          ? yield this.pc.setRemoteDescription(e)
          : yield this.pc.setLocalDescription(e);
      } catch (r) {
        let s = "unknown error";
        r instanceof Error ? (s = r.message) : typeof r == "string" && (s = r);
        const o = { error: s, sdp: e.sdp };
        throw (
          (!i &&
            this.pc.remoteDescription &&
            (o.remoteSdp = this.pc.remoteDescription),
          this.log.error(
            "unable to set ".concat(e.type),
            Object.assign(Object.assign({}, this.logContext), { fields: o }),
          ),
          new qi(s))
        );
      }
    });
  }
  ensureVideoDDExtensionForSVC(e, t) {
    var i, r;
    if (
      !((i = e.ext) === null || i === void 0
        ? void 0
        : i.some((o) => o.uri === ls))
    ) {
      if (this.ddExtID === 0) {
        let o = 0;
        t.media.forEach((a) => {
          var c;
          a.type === "video" &&
            ((c = a.ext) === null ||
              c === void 0 ||
              c.forEach((d) => {
                d.value > o && (o = d.value);
              }));
        }),
          (this.ddExtID = o + 1);
      }
      (r = e.ext) === null ||
        r === void 0 ||
        r.push({ value: this.ddExtID, uri: ls });
    }
  }
}
function Cs(n, e, t) {
  let i = 0;
  n.rtp.some((r) => (r.codec === "opus" ? ((i = r.payload), !0) : !1)),
    i > 0 &&
      (n.rtcpFb || (n.rtcpFb = []),
      t.includes(n.mid) &&
        !n.rtcpFb.some((r) => r.payload === i && r.type === "nack") &&
        n.rtcpFb.push({ payload: i, type: "nack" }),
      e.includes(n.mid) &&
        n.fmtp.some((r) =>
          r.payload === i
            ? (r.config.includes("stereo=1") || (r.config += ";stereo=1"), !0)
            : !1,
        ));
}
function fh(n) {
  var e;
  const t = [],
    i = [],
    r = Ze.parse((e = n.sdp) !== null && e !== void 0 ? e : "");
  let s = 0;
  return (
    r.media.forEach((o) => {
      var a;
      o.type === "audio" &&
        (o.rtp.some((c) => (c.codec === "opus" ? ((s = c.payload), !0) : !1)),
        !((a = o.rtcpFb) === null || a === void 0) &&
          a.some((c) => c.payload === s && c.type === "nack") &&
          i.push(o.mid),
        o.fmtp.some((c) =>
          c.payload === s
            ? (c.config.includes("sprop-stereo=1") && t.push(o.mid), !0)
            : !1,
        ));
    }),
    { stereoMids: t, nackMids: i }
  );
}
const Qi = "vp8",
  ph = {
    audioPreset: zi.music,
    dtx: !0,
    red: !0,
    forceStereo: !1,
    simulcast: !0,
    screenShareEncoding: mr.h1080fps15.encoding,
    stopMicTrackOnMute: !1,
    videoCodec: Qi,
    backupCodec: !0,
  },
  qa = { autoGainControl: !0, echoCancellation: !0, noiseSuppression: !0 },
  za = { resolution: tn.h720.resolution },
  mh = {
    adaptiveStream: !1,
    dynacast: !1,
    stopLocalTrackOnUnpublish: !0,
    reconnectPolicy: new cl(),
    disconnectOnPageLeave: !0,
    webAudioMix: !1,
  },
  vr = {
    autoSubscribe: !0,
    maxRetries: 1,
    peerConnectionTimeout: 15e3,
    websocketTimeout: 15e3,
  };
var te;
(function (n) {
  (n[(n.NEW = 0)] = "NEW"),
    (n[(n.CONNECTING = 1)] = "CONNECTING"),
    (n[(n.CONNECTED = 2)] = "CONNECTED"),
    (n[(n.FAILED = 3)] = "FAILED"),
    (n[(n.CLOSING = 4)] = "CLOSING"),
    (n[(n.CLOSED = 5)] = "CLOSED");
})(te || (te = {}));
class gh {
  get needsPublisher() {
    return this.isPublisherConnectionRequired;
  }
  get needsSubscriber() {
    return this.isSubscriberConnectionRequired;
  }
  get currentState() {
    return this.state;
  }
  constructor(e, t, i) {
    var r;
    (this.peerConnectionTimeout = vr.peerConnectionTimeout),
      (this.log = q),
      (this.updateState = () => {
        var s;
        const o = this.state,
          a = this.requiredTransports.map((c) => c.getConnectionState());
        a.every((c) => c === "connected")
          ? (this.state = te.CONNECTED)
          : a.some((c) => c === "failed")
            ? (this.state = te.FAILED)
            : a.some((c) => c === "connecting")
              ? (this.state = te.CONNECTING)
              : a.every((c) => c === "closed")
                ? (this.state = te.CLOSED)
                : a.some((c) => c === "closed")
                  ? (this.state = te.CLOSING)
                  : a.every((c) => c === "new") && (this.state = te.NEW),
          o !== this.state &&
            (this.log.debug(
              "pc state change: from "
                .concat(te[o], " to ")
                .concat(te[this.state]),
              this.logContext,
            ),
            (s = this.onStateChange) === null ||
              s === void 0 ||
              s.call(
                this,
                this.state,
                this.publisher.getConnectionState(),
                this.subscriber.getConnectionState(),
              ));
      }),
      (this.log = We(
        (r = i.loggerName) !== null && r !== void 0 ? r : Ae.PCManager,
      )),
      (this.loggerOptions = i),
      (this.isPublisherConnectionRequired = !t),
      (this.isSubscriberConnectionRequired = t),
      (this.publisher = new Ts(e, i)),
      (this.subscriber = new Ts(e, i)),
      (this.publisher.onConnectionStateChange = this.updateState),
      (this.subscriber.onConnectionStateChange = this.updateState),
      (this.publisher.onIceConnectionStateChange = this.updateState),
      (this.subscriber.onIceConnectionStateChange = this.updateState),
      (this.publisher.onSignalingStatechange = this.updateState),
      (this.subscriber.onSignalingStatechange = this.updateState),
      (this.publisher.onIceCandidate = (s) => {
        var o;
        (o = this.onIceCandidate) === null ||
          o === void 0 ||
          o.call(this, s, xe.PUBLISHER);
      }),
      (this.subscriber.onIceCandidate = (s) => {
        var o;
        (o = this.onIceCandidate) === null ||
          o === void 0 ||
          o.call(this, s, xe.SUBSCRIBER);
      }),
      (this.subscriber.onDataChannel = (s) => {
        var o;
        (o = this.onDataChannel) === null || o === void 0 || o.call(this, s);
      }),
      (this.subscriber.onTrack = (s) => {
        var o;
        (o = this.onTrack) === null || o === void 0 || o.call(this, s);
      }),
      (this.publisher.onOffer = (s) => {
        var o;
        (o = this.onPublisherOffer) === null || o === void 0 || o.call(this, s);
      }),
      (this.state = te.NEW),
      (this.connectionLock = new ke()),
      (this.remoteOfferLock = new ke());
  }
  get logContext() {
    var e, t;
    return Object.assign(
      {},
      (t = (e = this.loggerOptions).loggerContextCb) === null || t === void 0
        ? void 0
        : t.call(e),
    );
  }
  requirePublisher() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    (this.isPublisherConnectionRequired = e), this.updateState();
  }
  requireSubscriber() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    (this.isSubscriberConnectionRequired = e), this.updateState();
  }
  createAndSendPublisherOffer(e) {
    return this.publisher.createAndSendOffer(e);
  }
  setPublisherAnswer(e) {
    return this.publisher.setRemoteDescription(e);
  }
  removeTrack(e) {
    return this.publisher.removeTrack(e);
  }
  close() {
    return m(this, void 0, void 0, function* () {
      if (this.publisher && this.publisher.getSignallingState() !== "closed") {
        const e = this.publisher;
        for (const t of e.getSenders())
          try {
            e.canRemoveTrack() && e.removeTrack(t);
          } catch (i) {
            this.log.warn(
              "could not removeTrack",
              Object.assign(Object.assign({}, this.logContext), { error: i }),
            );
          }
      }
      yield Promise.all([this.publisher.close(), this.subscriber.close()]),
        this.updateState();
    });
  }
  triggerIceRestart() {
    return m(this, void 0, void 0, function* () {
      (this.subscriber.restartingIce = !0),
        this.needsPublisher &&
          (yield this.createAndSendPublisherOffer({ iceRestart: !0 }));
    });
  }
  addIceCandidate(e, t) {
    return m(this, void 0, void 0, function* () {
      t === xe.PUBLISHER
        ? yield this.publisher.addIceCandidate(e)
        : yield this.subscriber.addIceCandidate(e);
    });
  }
  createSubscriberAnswerFromOffer(e) {
    return m(this, void 0, void 0, function* () {
      this.log.debug(
        "received server offer",
        Object.assign(Object.assign({}, this.logContext), {
          RTCSdpType: e.type,
          sdp: e.sdp,
          signalingState: this.subscriber.getSignallingState().toString(),
        }),
      );
      const t = yield this.remoteOfferLock.lock();
      try {
        return (
          yield this.subscriber.setRemoteDescription(e),
          yield this.subscriber.createAndSetAnswer()
        );
      } finally {
        t();
      }
    });
  }
  updateConfiguration(e, t) {
    this.publisher.setConfiguration(e),
      this.subscriber.setConfiguration(e),
      t && this.triggerIceRestart();
  }
  ensurePCTransportConnection(e, t) {
    return m(this, void 0, void 0, function* () {
      var i;
      const r = yield this.connectionLock.lock();
      try {
        this.isPublisherConnectionRequired &&
          this.publisher.getConnectionState() !== "connected" &&
          this.publisher.getConnectionState() !== "connecting" &&
          (this.log.debug(
            "negotiation required, start negotiating",
            this.logContext,
          ),
          this.publisher.negotiate()),
          yield Promise.all(
            (i = this.requiredTransports) === null || i === void 0
              ? void 0
              : i.map((s) => this.ensureTransportConnected(s, e, t)),
          );
      } finally {
        r();
      }
    });
  }
  negotiate(e) {
    return m(this, void 0, void 0, function* () {
      return new Promise((t, i) =>
        m(this, void 0, void 0, function* () {
          const r = setTimeout(() => {
              i("negotiation timed out");
            }, this.peerConnectionTimeout),
            s = () => {
              clearTimeout(r), i("negotiation aborted");
            };
          e.signal.addEventListener("abort", s),
            this.publisher.once(xt.NegotiationStarted, () => {
              e.signal.aborted ||
                this.publisher.once(xt.NegotiationComplete, () => {
                  clearTimeout(r), t();
                });
            }),
            yield this.publisher.negotiate((o) => {
              clearTimeout(r), i(o);
            });
        }),
      );
    });
  }
  addPublisherTransceiver(e, t) {
    return this.publisher.addTransceiver(e, t);
  }
  addPublisherTrack(e) {
    return this.publisher.addTrack(e);
  }
  createPublisherDataChannel(e, t) {
    return this.publisher.createDataChannel(e, t);
  }
  getConnectedAddress(e) {
    return e === xe.PUBLISHER
      ? this.publisher.getConnectedAddress()
      : e === xe.SUBSCRIBER
        ? this.publisher.getConnectedAddress()
        : this.requiredTransports[0].getConnectedAddress();
  }
  get requiredTransports() {
    const e = [];
    return (
      this.isPublisherConnectionRequired && e.push(this.publisher),
      this.isSubscriberConnectionRequired && e.push(this.subscriber),
      e
    );
  }
  ensureTransportConnected(e, t) {
    return m(this, arguments, void 0, function (i, r) {
      var s = this;
      let o =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : this.peerConnectionTimeout;
      return (function* () {
        if (i.getConnectionState() !== "connected")
          return new Promise((c, d) =>
            m(s, void 0, void 0, function* () {
              const u = () => {
                this.log.warn("abort transport connection", this.logContext),
                  le.clearTimeout(l),
                  d(new J("room connection has been cancelled", me.Cancelled));
              };
              r?.signal.aborted && u(), r?.signal.addEventListener("abort", u);
              const l = le.setTimeout(() => {
                r?.signal.removeEventListener("abort", u),
                  d(new J("could not establish pc connection"));
              }, o);
              for (; this.state !== te.CONNECTED; )
                if ((yield je(50), r?.signal.aborted)) {
                  d(new J("room connection has been cancelled", me.Cancelled));
                  return;
                }
              le.clearTimeout(l),
                r?.signal.removeEventListener("abort", u),
                c();
            }),
          );
      })();
    });
  }
}
const br = 2e3;
function Qn(n, e) {
  if (!e) return 0;
  let t, i;
  return (
    "bytesReceived" in n
      ? ((t = n.bytesReceived), (i = e.bytesReceived))
      : "bytesSent" in n && ((t = n.bytesSent), (i = e.bytesSent)),
    t === void 0 ||
    i === void 0 ||
    n.timestamp === void 0 ||
    e.timestamp === void 0
      ? 0
      : ((t - i) * 8 * 1e3) / (n.timestamp - e.timestamp)
  );
}
class de extends It {
  get enhancedNoiseCancellation() {
    return this.isKrispNoiseFilterEnabled;
  }
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
      r = arguments.length > 3 ? arguments[3] : void 0,
      s = arguments.length > 4 ? arguments[4] : void 0;
    super(e, _.Kind.Audio, t, i, s),
      (this.stopOnMute = !1),
      (this.isKrispNoiseFilterEnabled = !1),
      (this.monitorSender = () =>
        m(this, void 0, void 0, function* () {
          if (!this.sender) {
            this._currentBitrate = 0;
            return;
          }
          let o;
          try {
            o = yield this.getSenderStats();
          } catch (a) {
            this.log.error(
              "could not get audio sender stats",
              Object.assign(Object.assign({}, this.logContext), { error: a }),
            );
            return;
          }
          o && this.prevStats && (this._currentBitrate = Qn(o, this.prevStats)),
            (this.prevStats = o);
        })),
      (this.handleKrispNoiseFilterEnable = () => {
        (this.isKrispNoiseFilterEnabled = !0),
          this.log.debug("Krisp noise filter enabled", this.logContext),
          this.emit(
            M.AudioTrackFeatureUpdate,
            this,
            Ue.TF_ENHANCED_NOISE_CANCELLATION,
            !0,
          );
      }),
      (this.handleKrispNoiseFilterDisable = () => {
        (this.isKrispNoiseFilterEnabled = !1),
          this.log.debug("Krisp noise filter disabled", this.logContext),
          this.emit(
            M.AudioTrackFeatureUpdate,
            this,
            Ue.TF_ENHANCED_NOISE_CANCELLATION,
            !1,
          );
      }),
      (this.audioContext = r),
      this.checkForSilence();
  }
  setDeviceId(e) {
    return m(this, void 0, void 0, function* () {
      return this._constraints.deviceId === e &&
        this._mediaStreamTrack.getSettings().deviceId === Ge(e)
        ? !0
        : ((this._constraints.deviceId = e),
          this.isMuted || (yield this.restartTrack()),
          this.isMuted ||
            Ge(e) === this._mediaStreamTrack.getSettings().deviceId);
    });
  }
  mute() {
    const e = Object.create(null, { mute: { get: () => super.mute } });
    return m(this, void 0, void 0, function* () {
      const t = yield this.muteLock.lock();
      try {
        return this.isMuted
          ? (this.log.debug("Track already muted", this.logContext), this)
          : (this.source === _.Source.Microphone &&
              this.stopOnMute &&
              !this.isUserProvided &&
              (this.log.debug("stopping mic track", this.logContext),
              this._mediaStreamTrack.stop()),
            yield e.mute.call(this),
            this);
      } finally {
        t();
      }
    });
  }
  unmute() {
    const e = Object.create(null, { unmute: { get: () => super.unmute } });
    return m(this, void 0, void 0, function* () {
      const t = yield this.muteLock.lock();
      try {
        if (!this.isMuted)
          return this.log.debug("Track already unmuted", this.logContext), this;
        const i =
          this._constraints.deviceId &&
          this._mediaStreamTrack.getSettings().deviceId !==
            Ge(this._constraints.deviceId);
        return (
          this.source === _.Source.Microphone &&
            (this.stopOnMute ||
              this._mediaStreamTrack.readyState === "ended" ||
              i) &&
            !this.isUserProvided &&
            (this.log.debug("reacquiring mic track", this.logContext),
            yield this.restartTrack()),
          yield e.unmute.call(this),
          this
        );
      } finally {
        t();
      }
    });
  }
  restartTrack(e) {
    return m(this, void 0, void 0, function* () {
      let t;
      if (e) {
        const i = Yn({ audio: e });
        typeof i.audio != "boolean" && (t = i.audio);
      }
      yield this.restart(t);
    });
  }
  restart(e) {
    const t = Object.create(null, { restart: { get: () => super.restart } });
    return m(this, void 0, void 0, function* () {
      const i = yield t.restart.call(this, e);
      return this.checkForSilence(), i;
    });
  }
  startMonitor() {
    Se() &&
      (this.monitorInterval ||
        (this.monitorInterval = setInterval(() => {
          this.monitorSender();
        }, br)));
  }
  setProcessor(e) {
    return m(this, void 0, void 0, function* () {
      var t;
      const i = yield this.processorLock.lock();
      try {
        if (!this.audioContext)
          throw Error(
            "Audio context needs to be set on LocalAudioTrack in order to enable processors",
          );
        this.processor && (yield this.stopProcessor());
        const r = {
          kind: this.kind,
          track: this._mediaStreamTrack,
          audioContext: this.audioContext,
        };
        this.log.debug(
          "setting up audio processor ".concat(e.name),
          this.logContext,
        ),
          yield e.init(r),
          (this.processor = e),
          this.processor.processedTrack &&
            (yield (t = this.sender) === null || t === void 0
              ? void 0
              : t.replaceTrack(this.processor.processedTrack),
            this.processor.processedTrack.addEventListener(
              "enable-lk-krisp-noise-filter",
              this.handleKrispNoiseFilterEnable,
            ),
            this.processor.processedTrack.addEventListener(
              "disable-lk-krisp-noise-filter",
              this.handleKrispNoiseFilterDisable,
            )),
          this.emit(M.TrackProcessorUpdate, this.processor);
      } finally {
        i();
      }
    });
  }
  setAudioContext(e) {
    this.audioContext = e;
  }
  getSenderStats() {
    return m(this, void 0, void 0, function* () {
      var e;
      if (!(!((e = this.sender) === null || e === void 0) && e.getStats))
        return;
      const t = yield this.sender.getStats();
      let i;
      return (
        t.forEach((r) => {
          r.type === "outbound-rtp" &&
            (i = {
              type: "audio",
              streamId: r.id,
              packetsSent: r.packetsSent,
              packetsLost: r.packetsLost,
              bytesSent: r.bytesSent,
              timestamp: r.timestamp,
              roundTripTime: r.roundTripTime,
              jitter: r.jitter,
            });
        }),
        i
      );
    });
  }
  checkForSilence() {
    return m(this, void 0, void 0, function* () {
      const e = yield Ul(this);
      return (
        e &&
          (this.isMuted ||
            this.log.warn(
              "silence detected on local audio track",
              this.logContext,
            ),
          this.emit(M.AudioSilenceDetected)),
        e
      );
    });
  }
}
function Ga(n, e, t) {
  switch (n.kind) {
    case "audio":
      return new de(n, e, !1, void 0, t);
    case "video":
      return new fe(n, e, !1, t);
    default:
      throw new Fe("unsupported track type: ".concat(n.kind));
  }
}
const vh = Object.values(tn),
  bh = Object.values(Gi),
  yh = Object.values(mr),
  kh = [tn.h180, tn.h360],
  Sh = [Gi.h180, Gi.h360],
  Th = (n) =>
    [{ scaleResolutionDownBy: 2, fps: n.encoding.maxFramerate }].map((t) => {
      var i, r;
      return new K(
        Math.floor(n.width / t.scaleResolutionDownBy),
        Math.floor(n.height / t.scaleResolutionDownBy),
        Math.max(
          15e4,
          Math.floor(
            n.encoding.maxBitrate /
              (Math.pow(t.scaleResolutionDownBy, 2) *
                (((i = n.encoding.maxFramerate) !== null && i !== void 0
                  ? i
                  : 30) /
                  ((r = t.fps) !== null && r !== void 0 ? r : 30))),
          ),
        ),
        t.fps,
        n.encoding.priority,
      );
    }),
  $i = ["q", "h", "f"];
function Xi(n, e, t, i) {
  var r, s;
  let o = i?.videoEncoding;
  n && (o = i?.screenShareEncoding);
  const a = i?.simulcast,
    c = i?.scalabilityMode,
    d = i?.videoCodec;
  if ((!o && !a && !c) || !e || !t) return [{}];
  o || ((o = Ph(n, e, t, d)), q.debug("using video encoding", o));
  const u = new K(e, t, o.maxBitrate, o.maxFramerate, o.priority);
  if (c && Jt(d)) {
    const f = new Wa(c),
      g = [];
    if (f.spatial > 3)
      throw new Error("unsupported scalabilityMode: ".concat(c));
    const p = Ke();
    if (ht() || He() || (p?.name === "Chrome" && Ot(p?.version, "113") < 0)) {
      const b = f.suffix == "h" ? 2 : 3;
      for (let v = 0; v < f.spatial; v += 1)
        g.push({
          rid: $i[2 - v],
          maxBitrate: o.maxBitrate / Math.pow(b, v),
          maxFramerate: u.encoding.maxFramerate,
        });
      g[0].scalabilityMode = c;
    } else
      g.push({
        maxBitrate: o.maxBitrate,
        maxFramerate: u.encoding.maxFramerate,
        scalabilityMode: c,
      });
    return (
      u.encoding.priority &&
        ((g[0].priority = u.encoding.priority),
        (g[0].networkPriority = u.encoding.priority)),
      q.debug("using svc encoding", { encodings: g }),
      g
    );
  }
  if (!a) return [o];
  let l = [];
  n
    ? (l =
        (r = Es(i?.screenShareSimulcastLayers)) !== null && r !== void 0
          ? r
          : Ps(n, u))
    : (l =
        (s = Es(i?.videoSimulcastLayers)) !== null && s !== void 0
          ? s
          : Ps(n, u));
  let h;
  if (l.length > 0) {
    const f = l[0];
    l.length > 1 && ([, h] = l);
    const g = Math.max(e, t);
    if (g >= 960 && h) return fi(e, t, [f, h, u]);
    if (g >= 480) return fi(e, t, [f, u]);
  }
  return fi(e, t, [u]);
}
function Ch(n, e, t) {
  var i, r, s, o;
  if (
    !t.backupCodec ||
    t.backupCodec === !0 ||
    t.backupCodec.codec === t.videoCodec
  )
    return;
  e !== t.backupCodec.codec &&
    q.warn("requested a different codec than specified as backup", {
      serverRequested: e,
      backup: t.backupCodec.codec,
    }),
    (t.videoCodec = e),
    (t.videoEncoding = t.backupCodec.encoding);
  const a = n.mediaStreamTrack.getSettings(),
    c =
      (i = a.width) !== null && i !== void 0
        ? i
        : (r = n.dimensions) === null || r === void 0
          ? void 0
          : r.width,
    d =
      (s = a.height) !== null && s !== void 0
        ? s
        : (o = n.dimensions) === null || o === void 0
          ? void 0
          : o.height;
  return Xi(n.source === _.Source.ScreenShare, c, d, t);
}
function Ph(n, e, t, i) {
  const r = Eh(n, e, t);
  let { encoding: s } = r[0];
  const o = Math.max(e, t);
  for (let a = 0; a < r.length; a += 1) {
    const c = r[a];
    if (((s = c.encoding), c.width >= o)) break;
  }
  if (i)
    switch (i) {
      case "av1":
        (s = Object.assign({}, s)), (s.maxBitrate = s.maxBitrate * 0.7);
        break;
      case "vp9":
        (s = Object.assign({}, s)), (s.maxBitrate = s.maxBitrate * 0.85);
        break;
    }
  return s;
}
function Eh(n, e, t) {
  if (n) return yh;
  const i = e > t ? e / t : t / e;
  return Math.abs(i - 16 / 9) < Math.abs(i - 4 / 3) ? vh : bh;
}
function Ps(n, e) {
  if (n) return Th(e);
  const { width: t, height: i } = e,
    r = t > i ? t / i : i / t;
  return Math.abs(r - 16 / 9) < Math.abs(r - 4 / 3) ? kh : Sh;
}
function fi(n, e, t) {
  const i = [];
  if (
    (t.forEach((r, s) => {
      if (s >= $i.length) return;
      const o = Math.min(n, e),
        c = {
          rid: $i[s],
          scaleResolutionDownBy: Math.max(1, o / Math.min(r.width, r.height)),
          maxBitrate: r.encoding.maxBitrate,
        };
      r.encoding.maxFramerate && (c.maxFramerate = r.encoding.maxFramerate);
      const d = Mt() || s === 0;
      r.encoding.priority &&
        d &&
        ((c.priority = r.encoding.priority),
        (c.networkPriority = r.encoding.priority)),
        i.push(c);
    }),
    He() && ja() === "ios")
  ) {
    let r;
    i.forEach((o) => {
      r
        ? o.maxFramerate && o.maxFramerate > r && (r = o.maxFramerate)
        : (r = o.maxFramerate);
    });
    let s = !0;
    i.forEach((o) => {
      var a;
      o.maxFramerate != r &&
        (s &&
          ((s = !1),
          q.info(
            "Simulcast on iOS React-Native requires all encodings to share the same framerate.",
          )),
        q.info(
          'Setting framerate of encoding "'
            .concat((a = o.rid) !== null && a !== void 0 ? a : "", '" to ')
            .concat(r),
        ),
        (o.maxFramerate = r));
    });
  }
  return i;
}
function Es(n) {
  if (n)
    return n.sort((e, t) => {
      const { encoding: i } = e,
        { encoding: r } = t;
      return i.maxBitrate > r.maxBitrate
        ? 1
        : i.maxBitrate < r.maxBitrate
          ? -1
          : i.maxBitrate === r.maxBitrate && i.maxFramerate && r.maxFramerate
            ? i.maxFramerate > r.maxFramerate
              ? 1
              : -1
            : 0;
    });
}
class Wa {
  constructor(e) {
    const t = e.match(/^L(\d)T(\d)(h|_KEY|_KEY_SHIFT){0,1}$/);
    if (!t) throw new Error("invalid scalability mode");
    if (
      ((this.spatial = parseInt(t[1])),
      (this.temporal = parseInt(t[2])),
      t.length > 3)
    )
      switch (t[3]) {
        case "h":
        case "_KEY":
        case "_KEY_SHIFT":
          this.suffix = t[3];
      }
  }
  toString() {
    var e;
    return "L"
      .concat(this.spatial, "T")
      .concat(this.temporal)
      .concat((e = this.suffix) !== null && e !== void 0 ? e : "");
  }
}
function wh(n) {
  return n.source === _.Source.ScreenShare ||
    (n.constraints.height && Ge(n.constraints.height) >= 1080)
    ? "maintain-resolution"
    : "balanced";
}
const Rh = 5e3;
class fe extends It {
  get sender() {
    return this._sender;
  }
  set sender(e) {
    (this._sender = e),
      this.degradationPreference &&
        this.setDegradationPreference(this.degradationPreference);
  }
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
      r = arguments.length > 3 ? arguments[3] : void 0;
    super(e, _.Kind.Video, t, i, r),
      (this.simulcastCodecs = new Map()),
      (this.degradationPreference = "balanced"),
      (this.monitorSender = () =>
        m(this, void 0, void 0, function* () {
          if (!this.sender) {
            this._currentBitrate = 0;
            return;
          }
          let s;
          try {
            s = yield this.getSenderStats();
          } catch (a) {
            this.log.error(
              "could not get audio sender stats",
              Object.assign(Object.assign({}, this.logContext), { error: a }),
            );
            return;
          }
          const o = new Map(s.map((a) => [a.rid, a]));
          if (this.prevStats) {
            let a = 0;
            o.forEach((c, d) => {
              var u;
              const l =
                (u = this.prevStats) === null || u === void 0
                  ? void 0
                  : u.get(d);
              a += Qn(c, l);
            }),
              (this._currentBitrate = a);
          }
          this.prevStats = o;
        })),
      (this.senderLock = new ke());
  }
  get isSimulcast() {
    return !!(this.sender && this.sender.getParameters().encodings.length > 1);
  }
  startMonitor(e) {
    var t;
    if (((this.signalClient = e), !Se())) return;
    const i =
      (t = this.sender) === null || t === void 0 ? void 0 : t.getParameters();
    i && (this.encodings = i.encodings),
      !this.monitorInterval &&
        (this.monitorInterval = setInterval(() => {
          this.monitorSender();
        }, br));
  }
  stop() {
    this._mediaStreamTrack.getConstraints(),
      this.simulcastCodecs.forEach((e) => {
        e.mediaStreamTrack.stop();
      }),
      super.stop();
  }
  pauseUpstream() {
    const e = Object.create(null, {
      pauseUpstream: { get: () => super.pauseUpstream },
    });
    return m(this, void 0, void 0, function* () {
      var t, i, r, s, o;
      yield e.pauseUpstream.call(this);
      try {
        for (
          var a = !0, c = kt(this.simulcastCodecs.values()), d;
          (d = yield c.next()), (t = d.done), !t;
          a = !0
        )
          (s = d.value),
            (a = !1),
            yield (o = s.sender) === null || o === void 0
              ? void 0
              : o.replaceTrack(null);
      } catch (u) {
        i = { error: u };
      } finally {
        try {
          !a && !t && (r = c.return) && (yield r.call(c));
        } finally {
          if (i) throw i.error;
        }
      }
    });
  }
  resumeUpstream() {
    const e = Object.create(null, {
      resumeUpstream: { get: () => super.resumeUpstream },
    });
    return m(this, void 0, void 0, function* () {
      var t, i, r, s, o;
      yield e.resumeUpstream.call(this);
      try {
        for (
          var a = !0, c = kt(this.simulcastCodecs.values()), d;
          (d = yield c.next()), (t = d.done), !t;
          a = !0
        ) {
          (s = d.value), (a = !1);
          const u = s;
          yield (o = u.sender) === null || o === void 0
            ? void 0
            : o.replaceTrack(u.mediaStreamTrack);
        }
      } catch (u) {
        i = { error: u };
      } finally {
        try {
          !a && !t && (r = c.return) && (yield r.call(c));
        } finally {
          if (i) throw i.error;
        }
      }
    });
  }
  mute() {
    const e = Object.create(null, { mute: { get: () => super.mute } });
    return m(this, void 0, void 0, function* () {
      const t = yield this.muteLock.lock();
      try {
        return this.isMuted
          ? (this.log.debug("Track already muted", this.logContext), this)
          : (this.source === _.Source.Camera &&
              !this.isUserProvided &&
              (this.log.debug("stopping camera track", this.logContext),
              this._mediaStreamTrack.stop()),
            yield e.mute.call(this),
            this);
      } finally {
        t();
      }
    });
  }
  unmute() {
    const e = Object.create(null, { unmute: { get: () => super.unmute } });
    return m(this, void 0, void 0, function* () {
      const t = yield this.muteLock.lock();
      try {
        return this.isMuted
          ? (this.source === _.Source.Camera &&
              !this.isUserProvided &&
              (this.log.debug("reacquiring camera track", this.logContext),
              yield this.restartTrack()),
            yield e.unmute.call(this),
            this)
          : (this.log.debug("Track already unmuted", this.logContext), this);
      } finally {
        t();
      }
    });
  }
  setTrackMuted(e) {
    super.setTrackMuted(e);
    for (const t of this.simulcastCodecs.values())
      t.mediaStreamTrack.enabled = !e;
  }
  getSenderStats() {
    return m(this, void 0, void 0, function* () {
      var e;
      if (!(!((e = this.sender) === null || e === void 0) && e.getStats))
        return [];
      const t = [],
        i = yield this.sender.getStats();
      return (
        i.forEach((r) => {
          var s;
          if (r.type === "outbound-rtp") {
            const o = {
                type: "video",
                streamId: r.id,
                frameHeight: r.frameHeight,
                frameWidth: r.frameWidth,
                framesPerSecond: r.framesPerSecond,
                framesSent: r.framesSent,
                firCount: r.firCount,
                pliCount: r.pliCount,
                nackCount: r.nackCount,
                packetsSent: r.packetsSent,
                bytesSent: r.bytesSent,
                qualityLimitationReason: r.qualityLimitationReason,
                qualityLimitationDurations: r.qualityLimitationDurations,
                qualityLimitationResolutionChanges:
                  r.qualityLimitationResolutionChanges,
                rid: (s = r.rid) !== null && s !== void 0 ? s : r.id,
                retransmittedPacketsSent: r.retransmittedPacketsSent,
                targetBitrate: r.targetBitrate,
                timestamp: r.timestamp,
              },
              a = i.get(r.remoteId);
            a &&
              ((o.jitter = a.jitter),
              (o.packetsLost = a.packetsLost),
              (o.roundTripTime = a.roundTripTime)),
              t.push(o);
          }
        }),
        t.sort((r, s) => {
          var o, a;
          return (
            ((o = s.frameWidth) !== null && o !== void 0 ? o : 0) -
            ((a = r.frameWidth) !== null && a !== void 0 ? a : 0)
          );
        }),
        t
      );
    });
  }
  setPublishingQuality(e) {
    const t = [];
    for (let i = Ee.LOW; i <= Ee.HIGH; i += 1)
      t.push(new lr({ quality: i, enabled: i <= e }));
    this.log.debug(
      "setting publishing quality. max quality ".concat(e),
      this.logContext,
    ),
      this.setPublishingLayers(t);
  }
  setDeviceId(e) {
    return m(this, void 0, void 0, function* () {
      return this._constraints.deviceId === e &&
        this._mediaStreamTrack.getSettings().deviceId === Ge(e)
        ? !0
        : ((this._constraints.deviceId = e),
          this.isMuted || (yield this.restartTrack()),
          this.isMuted ||
            Ge(e) === this._mediaStreamTrack.getSettings().deviceId);
    });
  }
  restartTrack(e) {
    return m(this, void 0, void 0, function* () {
      var t, i, r, s;
      let o;
      if (e) {
        const u = Yn({ video: e });
        typeof u.video != "boolean" && (o = u.video);
      }
      yield this.restart(o);
      try {
        for (
          var a = !0, c = kt(this.simulcastCodecs.values()), d;
          (d = yield c.next()), (t = d.done), !t;
          a = !0
        ) {
          (s = d.value), (a = !1);
          const u = s;
          u.sender &&
            ((u.mediaStreamTrack = this.mediaStreamTrack.clone()),
            yield u.sender.replaceTrack(u.mediaStreamTrack));
        }
      } catch (u) {
        i = { error: u };
      } finally {
        try {
          !a && !t && (r = c.return) && (yield r.call(c));
        } finally {
          if (i) throw i.error;
        }
      }
    });
  }
  setProcessor(e) {
    const t = Object.create(null, {
      setProcessor: { get: () => super.setProcessor },
    });
    return m(this, arguments, void 0, function (i) {
      var r = this;
      let s =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return (function* () {
        var o, a, c, d, u, l;
        if (
          (yield t.setProcessor.call(r, i, s),
          !((u = r.processor) === null || u === void 0) && u.processedTrack)
        )
          try {
            for (
              var h = !0, f = kt(r.simulcastCodecs.values()), g;
              (g = yield f.next()), (o = g.done), !o;
              h = !0
            )
              (d = g.value),
                (h = !1),
                yield (l = d.sender) === null || l === void 0
                  ? void 0
                  : l.replaceTrack(r.processor.processedTrack);
          } catch (p) {
            a = { error: p };
          } finally {
            try {
              !h && !o && (c = f.return) && (yield c.call(f));
            } finally {
              if (a) throw a.error;
            }
          }
      })();
    });
  }
  setDegradationPreference(e) {
    return m(this, void 0, void 0, function* () {
      if (((this.degradationPreference = e), this.sender))
        try {
          this.log.debug(
            "setting degradationPreference to ".concat(e),
            this.logContext,
          );
          const t = this.sender.getParameters();
          (t.degradationPreference = e), this.sender.setParameters(t);
        } catch (t) {
          this.log.warn(
            "failed to set degradationPreference",
            Object.assign({ error: t }, this.logContext),
          );
        }
    });
  }
  addSimulcastTrack(e, t) {
    if (this.simulcastCodecs.has(e)) {
      this.log.error(
        "".concat(e, " already added, skipping adding simulcast codec"),
        this.logContext,
      );
      return;
    }
    const i = {
      codec: e,
      mediaStreamTrack: this.mediaStreamTrack.clone(),
      sender: void 0,
      encodings: t,
    };
    return this.simulcastCodecs.set(e, i), i;
  }
  setSimulcastTrackSender(e, t) {
    const i = this.simulcastCodecs.get(e);
    i &&
      ((i.sender = t),
      setTimeout(() => {
        this.subscribedCodecs &&
          this.setPublishingCodecs(this.subscribedCodecs);
      }, Rh));
  }
  setPublishingCodecs(e) {
    return m(this, void 0, void 0, function* () {
      var t, i, r, s, o, a, c;
      if (
        (this.log.debug(
          "setting publishing codecs",
          Object.assign(Object.assign({}, this.logContext), {
            codecs: e,
            currentCodec: this.codec,
          }),
        ),
        !this.codec && e.length > 0)
      )
        return yield this.setPublishingLayers(e[0].qualities), [];
      this.subscribedCodecs = e;
      const d = [];
      try {
        for (
          t = !0, i = kt(e);
          (r = yield i.next()), (s = r.done), !s;
          t = !0
        ) {
          (c = r.value), (t = !1);
          const u = c;
          if (!this.codec || this.codec === u.codec)
            yield this.setPublishingLayers(u.qualities);
          else {
            const l = this.simulcastCodecs.get(u.codec);
            if (
              (this.log.debug(
                "try setPublishingCodec for ".concat(u.codec),
                Object.assign(Object.assign({}, this.logContext), {
                  simulcastCodecInfo: l,
                }),
              ),
              !l || !l.sender)
            ) {
              for (const h of u.qualities)
                if (h.enabled) {
                  d.push(u.codec);
                  break;
                }
            } else
              l.encodings &&
                (this.log.debug(
                  "try setPublishingLayersForSender ".concat(u.codec),
                  this.logContext,
                ),
                yield ws(
                  l.sender,
                  l.encodings,
                  u.qualities,
                  this.senderLock,
                  this.log,
                  this.logContext,
                ));
          }
        }
      } catch (u) {
        o = { error: u };
      } finally {
        try {
          !t && !s && (a = i.return) && (yield a.call(i));
        } finally {
          if (o) throw o.error;
        }
      }
      return d;
    });
  }
  setPublishingLayers(e) {
    return m(this, void 0, void 0, function* () {
      this.log.debug(
        "setting publishing layers",
        Object.assign(Object.assign({}, this.logContext), { qualities: e }),
      ),
        !(!this.sender || !this.encodings) &&
          (yield ws(
            this.sender,
            this.encodings,
            e,
            this.senderLock,
            this.log,
            this.logContext,
          ));
    });
  }
  handleAppVisibilityChanged() {
    const e = Object.create(null, {
      handleAppVisibilityChanged: {
        get: () => super.handleAppVisibilityChanged,
      },
    });
    return m(this, void 0, void 0, function* () {
      yield e.handleAppVisibilityChanged.call(this),
        Ua() &&
          this.isInBackground &&
          this.source === _.Source.Camera &&
          (this._mediaStreamTrack.enabled = !1);
    });
  }
}
function ws(n, e, t, i, r, s) {
  return m(this, void 0, void 0, function* () {
    const o = yield i.lock();
    r.debug(
      "setPublishingLayersForSender",
      Object.assign(Object.assign({}, s), {
        sender: n,
        qualities: t,
        senderEncodings: e,
      }),
    );
    try {
      const a = n.getParameters(),
        { encodings: c } = a;
      if (!c) return;
      if (c.length !== e.length) {
        r.warn(
          "cannot set publishing layers, encodings mismatch",
          Object.assign(Object.assign({}, s), {
            encodings: c,
            senderEncodings: e,
          }),
        );
        return;
      }
      let d = !1;
      (!1 && c[0].scalabilityMode) ||
        c.forEach((l, h) => {
          var f;
          let g = (f = l.rid) !== null && f !== void 0 ? f : "";
          g === "" && (g = "q");
          const p = Ka(g),
            b = t.find((v) => v.quality === p);
          b &&
            l.active !== b.enabled &&
            ((d = !0),
            (l.active = b.enabled),
            r.debug(
              "setting layer "
                .concat(b.quality, " to ")
                .concat(l.active ? "enabled" : "disabled"),
              s,
            ),
            Mt() &&
              (b.enabled
                ? ((l.scaleResolutionDownBy = e[h].scaleResolutionDownBy),
                  (l.maxBitrate = e[h].maxBitrate),
                  (l.maxFrameRate = e[h].maxFrameRate))
                : ((l.scaleResolutionDownBy = 4),
                  (l.maxBitrate = 10),
                  (l.maxFrameRate = 2))));
        }),
        d &&
          ((a.encodings = c),
          r.debug(
            "setting encodings",
            Object.assign(Object.assign({}, s), { encodings: a.encodings }),
          ),
          yield n.setParameters(a));
    } finally {
      o();
    }
  });
}
function Ka(n) {
  switch (n) {
    case "f":
      return Ee.HIGH;
    case "h":
      return Ee.MEDIUM;
    case "q":
      return Ee.LOW;
    default:
      return Ee.HIGH;
  }
}
function Rs(n, e, t, i) {
  if (!t)
    return [
      new dt({ quality: Ee.HIGH, width: n, height: e, bitrate: 0, ssrc: 0 }),
    ];
  if (i) {
    const r = t[0].scalabilityMode,
      s = new Wa(r),
      o = [],
      a = s.suffix == "h" ? 1.5 : 2,
      c = s.suffix == "h" ? 2 : 3;
    for (let d = 0; d < s.spatial; d += 1)
      o.push(
        new dt({
          quality: Math.min(Ee.HIGH, s.spatial - 1) - d,
          width: Math.ceil(n / Math.pow(a, d)),
          height: Math.ceil(e / Math.pow(a, d)),
          bitrate: t[0].maxBitrate
            ? Math.ceil(t[0].maxBitrate / Math.pow(c, d))
            : 0,
          ssrc: 0,
        }),
      );
    return o;
  }
  return t.map((r) => {
    var s, o, a;
    const c = (s = r.scaleResolutionDownBy) !== null && s !== void 0 ? s : 1;
    let d = Ka((o = r.rid) !== null && o !== void 0 ? o : "");
    return new dt({
      quality: d,
      width: Math.ceil(n / c),
      height: Math.ceil(e / c),
      bitrate: (a = r.maxBitrate) !== null && a !== void 0 ? a : 0,
      ssrc: 0,
    });
  });
}
const _s = "_lossy",
  Is = "_reliable",
  _h = 2 * 1e3,
  pi = "leave-reconnect";
var Re;
(function (n) {
  (n[(n.New = 0)] = "New"),
    (n[(n.Connected = 1)] = "Connected"),
    (n[(n.Disconnected = 2)] = "Disconnected"),
    (n[(n.Reconnecting = 3)] = "Reconnecting"),
    (n[(n.Closed = 4)] = "Closed");
})(Re || (Re = {}));
class Ih extends Be.EventEmitter {
  get isClosed() {
    return this._isClosed;
  }
  get pendingReconnect() {
    return !!this.reconnectTimeout;
  }
  constructor(e) {
    var t;
    super(),
      (this.options = e),
      (this.rtcConfig = {}),
      (this.peerConnectionTimeout = vr.peerConnectionTimeout),
      (this.fullReconnectOnNext = !1),
      (this.subscriberPrimary = !1),
      (this.pcState = Re.New),
      (this._isClosed = !0),
      (this.pendingTrackResolvers = {}),
      (this.reconnectAttempts = 0),
      (this.reconnectStart = 0),
      (this.attemptingReconnect = !1),
      (this.joinAttempts = 0),
      (this.maxJoinAttempts = 1),
      (this.shouldFailNext = !1),
      (this.log = q),
      (this.handleDataChannel = (i) =>
        m(this, [i], void 0, function (r) {
          var s = this;
          let { channel: o } = r;
          return (function* () {
            if (o) {
              if (o.label === Is) s.reliableDCSub = o;
              else if (o.label === _s) s.lossyDCSub = o;
              else return;
              s.log.debug(
                "on data channel ".concat(o.id, ", ").concat(o.label),
                s.logContext,
              ),
                (o.onmessage = s.handleDataMessage);
            }
          })();
        })),
      (this.handleDataMessage = (i) =>
        m(this, void 0, void 0, function* () {
          var r, s;
          const o = yield this.dataProcessLock.lock();
          try {
            let a;
            if (i.data instanceof ArrayBuffer) a = i.data;
            else if (i.data instanceof Blob) a = yield i.data.arrayBuffer();
            else {
              this.log.error(
                "unsupported data type",
                Object.assign(Object.assign({}, this.logContext), {
                  data: i.data,
                }),
              );
              return;
            }
            const c = Xe.fromBinary(new Uint8Array(a));
            ((r = c.value) === null || r === void 0 ? void 0 : r.case) ===
            "speaker"
              ? this.emit(O.ActiveSpeakersUpdate, c.value.value.speakers)
              : (((s = c.value) === null || s === void 0 ? void 0 : s.case) ===
                  "user" && Ah(c, c.value.value),
                this.emit(O.DataPacketReceived, c));
          } finally {
            o();
          }
        })),
      (this.handleDataError = (i) => {
        const s = i.currentTarget.maxRetransmits === 0 ? "lossy" : "reliable";
        if (i instanceof ErrorEvent && i.error) {
          const { error: o } = i.error;
          this.log.error(
            "DataChannel error on ".concat(s, ": ").concat(i.message),
            Object.assign(Object.assign({}, this.logContext), { error: o }),
          );
        } else
          this.log.error(
            "Unknown DataChannel error on ".concat(s),
            Object.assign(Object.assign({}, this.logContext), { event: i }),
          );
      }),
      (this.handleBufferedAmountLow = (i) => {
        const s = i.currentTarget.maxRetransmits === 0 ? Q.LOSSY : Q.RELIABLE;
        this.updateAndEmitDCBufferStatus(s);
      }),
      (this.handleDisconnect = (i, r) => {
        if (this._isClosed) return;
        this.log.warn("".concat(i, " disconnected"), this.logContext),
          this.reconnectAttempts === 0 && (this.reconnectStart = Date.now());
        const s = (c) => {
            this.log.warn(
              "could not recover connection after "
                .concat(this.reconnectAttempts, " attempts, ")
                .concat(c, "ms. giving up"),
              this.logContext,
            ),
              this.emit(O.Disconnected),
              this.close();
          },
          o = Date.now() - this.reconnectStart;
        let a = this.getNextRetryDelay({
          elapsedMs: o,
          retryCount: this.reconnectAttempts,
        });
        if (a === null) {
          s(o);
          return;
        }
        i === pi && (a = 0),
          this.log.debug("reconnecting in ".concat(a, "ms"), this.logContext),
          this.clearReconnectTimeout(),
          this.token &&
            this.regionUrlProvider &&
            this.regionUrlProvider.updateToken(this.token),
          (this.reconnectTimeout = le.setTimeout(
            () =>
              this.attemptReconnect(r).finally(
                () => (this.reconnectTimeout = void 0),
              ),
            a,
          ));
      }),
      (this.waitForRestarted = () =>
        new Promise((i, r) => {
          this.pcState === Re.Connected && i();
          const s = () => {
              this.off(O.Disconnected, o), i();
            },
            o = () => {
              this.off(O.Restarted, s), r();
            };
          this.once(O.Restarted, s), this.once(O.Disconnected, o);
        })),
      (this.updateAndEmitDCBufferStatus = (i) => {
        const r = this.isBufferStatusLow(i);
        typeof r < "u" &&
          r !== this.dcBufferStatus.get(i) &&
          (this.dcBufferStatus.set(i, r),
          this.emit(O.DCBufferStatusChanged, r, i));
      }),
      (this.isBufferStatusLow = (i) => {
        const r = this.dataChannelForKind(i);
        if (r) return r.bufferedAmount <= r.bufferedAmountLowThreshold;
      }),
      (this.handleBrowserOnLine = () => {
        this.client.currentState === $.RECONNECTING &&
          (this.clearReconnectTimeout(),
          this.attemptReconnect(vt.RR_SIGNAL_DISCONNECTED));
      }),
      (this.log = We(
        (t = e.loggerName) !== null && t !== void 0 ? t : Ae.Engine,
      )),
      (this.loggerOptions = {
        loggerName: e.loggerName,
        loggerContextCb: () => this.logContext,
      }),
      (this.client = new gr(void 0, this.loggerOptions)),
      (this.client.signalLatency = this.options.expSignalLatency),
      (this.reconnectPolicy = this.options.reconnectPolicy),
      this.registerOnLineListener(),
      (this.closingLock = new ke()),
      (this.dataProcessLock = new ke()),
      (this.dcBufferStatus = new Map([
        [Q.LOSSY, !0],
        [Q.RELIABLE, !0],
      ])),
      (this.client.onParticipantUpdate = (i) =>
        this.emit(O.ParticipantUpdate, i)),
      (this.client.onConnectionQuality = (i) =>
        this.emit(O.ConnectionQualityUpdate, i)),
      (this.client.onRoomUpdate = (i) => this.emit(O.RoomUpdate, i)),
      (this.client.onSubscriptionError = (i) =>
        this.emit(O.SubscriptionError, i)),
      (this.client.onSubscriptionPermissionUpdate = (i) =>
        this.emit(O.SubscriptionPermissionUpdate, i)),
      (this.client.onSpeakersChanged = (i) => this.emit(O.SpeakersChanged, i)),
      (this.client.onStreamStateUpdate = (i) =>
        this.emit(O.StreamStateChanged, i)),
      (this.client.onRequestResponse = (i) =>
        this.emit(O.SignalRequestResponse, i));
  }
  get logContext() {
    var e, t, i, r, s, o, a, c;
    return {
      room:
        (t =
          (e = this.latestJoinResponse) === null || e === void 0
            ? void 0
            : e.room) === null || t === void 0
          ? void 0
          : t.name,
      roomID:
        (r =
          (i = this.latestJoinResponse) === null || i === void 0
            ? void 0
            : i.room) === null || r === void 0
          ? void 0
          : r.sid,
      participant:
        (o =
          (s = this.latestJoinResponse) === null || s === void 0
            ? void 0
            : s.participant) === null || o === void 0
          ? void 0
          : o.identity,
      pID:
        (c =
          (a = this.latestJoinResponse) === null || a === void 0
            ? void 0
            : a.participant) === null || c === void 0
          ? void 0
          : c.sid,
    };
  }
  join(e, t, i, r) {
    return m(this, void 0, void 0, function* () {
      (this.url = e),
        (this.token = t),
        (this.signalOpts = i),
        (this.maxJoinAttempts = i.maxRetries);
      try {
        (this.joinAttempts += 1), this.setupSignalClientCallbacks();
        const s = yield this.client.join(e, t, i, r);
        return (
          (this._isClosed = !1),
          (this.latestJoinResponse = s),
          (this.subscriberPrimary = s.subscriberPrimary),
          this.pcManager || (yield this.configure(s)),
          (!this.subscriberPrimary || s.fastPublish) && this.negotiate(),
          (this.clientConfiguration = s.clientConfiguration),
          s
        );
      } catch (s) {
        if (
          s instanceof J &&
          s.reason === me.ServerUnreachable &&
          (this.log.warn(
            "Couldn't connect to server, attempt "
              .concat(this.joinAttempts, " of ")
              .concat(this.maxJoinAttempts),
            this.logContext,
          ),
          this.joinAttempts < this.maxJoinAttempts)
        )
          return this.join(e, t, i, r);
        throw s;
      }
    });
  }
  close() {
    return m(this, void 0, void 0, function* () {
      const e = yield this.closingLock.lock();
      if (this.isClosed) {
        e();
        return;
      }
      try {
        (this._isClosed = !0),
          (this.joinAttempts = 0),
          this.emit(O.Closing),
          this.removeAllListeners(),
          this.deregisterOnLineListener(),
          this.clearPendingReconnect(),
          yield this.cleanupPeerConnections(),
          yield this.cleanupClient();
      } finally {
        e();
      }
    });
  }
  cleanupPeerConnections() {
    return m(this, void 0, void 0, function* () {
      var e;
      yield (e = this.pcManager) === null || e === void 0 ? void 0 : e.close(),
        (this.pcManager = void 0);
      const t = (i) => {
        i &&
          (i.close(),
          (i.onbufferedamountlow = null),
          (i.onclose = null),
          (i.onclosing = null),
          (i.onerror = null),
          (i.onmessage = null),
          (i.onopen = null));
      };
      t(this.lossyDC),
        t(this.lossyDCSub),
        t(this.reliableDC),
        t(this.reliableDCSub),
        (this.lossyDC = void 0),
        (this.lossyDCSub = void 0),
        (this.reliableDC = void 0),
        (this.reliableDCSub = void 0);
    });
  }
  cleanupClient() {
    return m(this, void 0, void 0, function* () {
      yield this.client.close(), this.client.resetCallbacks();
    });
  }
  addTrack(e) {
    if (this.pendingTrackResolvers[e.cid])
      throw new Fe("a track with the same ID has already been published");
    return new Promise((t, i) => {
      const r = setTimeout(() => {
        delete this.pendingTrackResolvers[e.cid],
          i(
            new J(
              "publication of local track timed out, no response from server",
            ),
          );
      }, 1e4);
      (this.pendingTrackResolvers[e.cid] = {
        resolve: (s) => {
          clearTimeout(r), t(s);
        },
        reject: () => {
          clearTimeout(r),
            i(new Error("Cancelled publication by calling unpublish"));
        },
      }),
        this.client.sendAddTrack(e);
    });
  }
  removeTrack(e) {
    if (e.track && this.pendingTrackResolvers[e.track.id]) {
      const { reject: t } = this.pendingTrackResolvers[e.track.id];
      t && t(), delete this.pendingTrackResolvers[e.track.id];
    }
    try {
      return this.pcManager.removeTrack(e), !0;
    } catch (t) {
      this.log.warn(
        "failed to remove track",
        Object.assign(Object.assign({}, this.logContext), { error: t }),
      );
    }
    return !1;
  }
  updateMuteStatus(e, t) {
    this.client.sendMuteTrack(e, t);
  }
  get dataSubscriberReadyState() {
    var e;
    return (e = this.reliableDCSub) === null || e === void 0
      ? void 0
      : e.readyState;
  }
  getConnectedServerAddress() {
    return m(this, void 0, void 0, function* () {
      var e;
      return (e = this.pcManager) === null || e === void 0
        ? void 0
        : e.getConnectedAddress();
    });
  }
  setRegionUrlProvider(e) {
    this.regionUrlProvider = e;
  }
  configure(e) {
    return m(this, void 0, void 0, function* () {
      var t, i;
      if (this.pcManager && this.pcManager.currentState !== te.NEW) return;
      this.participantSid =
        (t = e.participant) === null || t === void 0 ? void 0 : t.sid;
      const r = this.makeRTCConfiguration(e);
      (this.pcManager = new gh(r, e.subscriberPrimary, this.loggerOptions)),
        this.emit(
          O.TransportsCreated,
          this.pcManager.publisher,
          this.pcManager.subscriber,
        ),
        (this.pcManager.onIceCandidate = (s, o) => {
          this.client.sendIceCandidate(s, o);
        }),
        (this.pcManager.onPublisherOffer = (s) => {
          this.client.sendOffer(s);
        }),
        (this.pcManager.onDataChannel = this.handleDataChannel),
        (this.pcManager.onStateChange = (s, o, a) =>
          m(this, void 0, void 0, function* () {
            if (
              (this.log.debug(
                "primary PC state changed ".concat(s),
                this.logContext,
              ),
              ["closed", "disconnected", "failed"].includes(o) &&
                (this.publisherConnectionPromise = void 0),
              s === te.CONNECTED)
            ) {
              const u = this.pcState === Re.New;
              (this.pcState = Re.Connected), u && this.emit(O.Connected, e);
            } else
              s === te.FAILED &&
                this.pcState === Re.Connected &&
                ((this.pcState = Re.Disconnected),
                this.handleDisconnect(
                  "peerconnection failed",
                  a === "failed"
                    ? vt.RR_SUBSCRIBER_FAILED
                    : vt.RR_PUBLISHER_FAILED,
                ));
            const c =
                this.client.isDisconnected ||
                this.client.currentState === $.RECONNECTING,
              d = [te.FAILED, te.CLOSING, te.CLOSED].includes(s);
            c && d && !this._isClosed && this.emit(O.Offline);
          })),
        (this.pcManager.onTrack = (s) => {
          this.emit(O.MediaTrackAdded, s.track, s.streams[0], s.receiver);
        }),
        xh((i = e.serverInfo) === null || i === void 0 ? void 0 : i.protocol) ||
          this.createDataChannels();
    });
  }
  setupSignalClientCallbacks() {
    (this.client.onAnswer = (e) =>
      m(this, void 0, void 0, function* () {
        this.pcManager &&
          (this.log.debug(
            "received server answer",
            Object.assign(Object.assign({}, this.logContext), {
              RTCSdpType: e.type,
            }),
          ),
          yield this.pcManager.setPublisherAnswer(e));
      })),
      (this.client.onTrickle = (e, t) => {
        this.pcManager &&
          (this.log.trace(
            "got ICE candidate from peer",
            Object.assign(Object.assign({}, this.logContext), {
              candidate: e,
              target: t,
            }),
          ),
          this.pcManager.addIceCandidate(e, t));
      }),
      (this.client.onOffer = (e) =>
        m(this, void 0, void 0, function* () {
          if (!this.pcManager) return;
          const t = yield this.pcManager.createSubscriberAnswerFromOffer(e);
          this.client.sendAnswer(t);
        })),
      (this.client.onLocalTrackPublished = (e) => {
        var t;
        if (
          (this.log.debug(
            "received trackPublishedResponse",
            Object.assign(Object.assign({}, this.logContext), {
              cid: e.cid,
              track: (t = e.track) === null || t === void 0 ? void 0 : t.sid,
            }),
          ),
          !this.pendingTrackResolvers[e.cid])
        ) {
          this.log.error(
            "missing track resolver for ".concat(e.cid),
            Object.assign(Object.assign({}, this.logContext), { cid: e.cid }),
          );
          return;
        }
        const { resolve: i } = this.pendingTrackResolvers[e.cid];
        delete this.pendingTrackResolvers[e.cid], i(e.track);
      }),
      (this.client.onLocalTrackUnpublished = (e) => {
        this.emit(O.LocalTrackUnpublished, e);
      }),
      (this.client.onLocalTrackSubscribed = (e) => {
        this.emit(O.LocalTrackSubscribed, e);
      }),
      (this.client.onTokenRefresh = (e) => {
        this.token = e;
      }),
      (this.client.onRemoteMuteChanged = (e, t) => {
        this.emit(O.RemoteMute, e, t);
      }),
      (this.client.onSubscribedQualityUpdate = (e) => {
        this.emit(O.SubscribedQualityUpdate, e);
      }),
      (this.client.onClose = () => {
        this.handleDisconnect("signal", vt.RR_SIGNAL_DISCONNECTED);
      }),
      (this.client.onLeave = (e) => {
        switch (
          (this.log.debug(
            "client leave request",
            Object.assign(Object.assign({}, this.logContext), {
              reason: e?.reason,
            }),
          ),
          e.regions &&
            this.regionUrlProvider &&
            (this.log.debug("updating regions", this.logContext),
            this.regionUrlProvider.setServerReportedRegions(e.regions)),
          e.action)
        ) {
          case wt.DISCONNECT:
            this.emit(O.Disconnected, e?.reason), this.close();
            break;
          case wt.RECONNECT:
            (this.fullReconnectOnNext = !0), this.handleDisconnect(pi);
            break;
          case wt.RESUME:
            this.handleDisconnect(pi);
        }
      });
  }
  makeRTCConfiguration(e) {
    var t;
    const i = Object.assign({}, this.rtcConfig);
    if (
      (!((t = this.signalOpts) === null || t === void 0) &&
        t.e2eeEnabled &&
        (this.log.debug(
          "E2EE - setting up transports with insertable streams",
          this.logContext,
        ),
        (i.encodedInsertableStreams = !0)),
      e.iceServers && !i.iceServers)
    ) {
      const r = [];
      e.iceServers.forEach((s) => {
        const o = { urls: s.urls };
        s.username && (o.username = s.username),
          s.credential && (o.credential = s.credential),
          r.push(o);
      }),
        (i.iceServers = r);
    }
    return (
      e.clientConfiguration &&
        e.clientConfiguration.forceRelay === Zt.ENABLED &&
        (i.iceTransportPolicy = "relay"),
      (i.sdpSemantics = "unified-plan"),
      (i.continualGatheringPolicy = "gather_continually"),
      i
    );
  }
  createDataChannels() {
    this.pcManager &&
      (this.lossyDC &&
        ((this.lossyDC.onmessage = null), (this.lossyDC.onerror = null)),
      this.reliableDC &&
        ((this.reliableDC.onmessage = null), (this.reliableDC.onerror = null)),
      (this.lossyDC = this.pcManager.createPublisherDataChannel(_s, {
        ordered: !0,
        maxRetransmits: 0,
      })),
      (this.reliableDC = this.pcManager.createPublisherDataChannel(Is, {
        ordered: !0,
      })),
      (this.lossyDC.onmessage = this.handleDataMessage),
      (this.reliableDC.onmessage = this.handleDataMessage),
      (this.lossyDC.onerror = this.handleDataError),
      (this.reliableDC.onerror = this.handleDataError),
      (this.lossyDC.bufferedAmountLowThreshold = 65535),
      (this.reliableDC.bufferedAmountLowThreshold = 65535),
      (this.lossyDC.onbufferedamountlow = this.handleBufferedAmountLow),
      (this.reliableDC.onbufferedamountlow = this.handleBufferedAmountLow));
  }
  createSender(e, t, i) {
    return m(this, void 0, void 0, function* () {
      if (Ki()) return yield this.createTransceiverRTCRtpSender(e, t, i);
      if (Hi())
        return (
          this.log.warn("using add-track fallback", this.logContext),
          yield this.createRTCRtpSender(e.mediaStreamTrack)
        );
      throw new re("Required webRTC APIs not supported on this device");
    });
  }
  createSimulcastSender(e, t, i, r) {
    return m(this, void 0, void 0, function* () {
      if (Ki()) return this.createSimulcastTransceiverSender(e, t, i, r);
      if (Hi())
        return (
          this.log.debug("using add-track fallback", this.logContext),
          this.createRTCRtpSender(e.mediaStreamTrack)
        );
      throw new re("Cannot stream on this device");
    });
  }
  createTransceiverRTCRtpSender(e, t, i) {
    return m(this, void 0, void 0, function* () {
      if (!this.pcManager) throw new re("publisher is closed");
      const r = [];
      e.mediaStream && r.push(e.mediaStream),
        e instanceof fe && (e.codec = t.videoCodec);
      const s = { direction: "sendonly", streams: r };
      return (
        i && (s.sendEncodings = i),
        (yield this.pcManager.addPublisherTransceiver(e.mediaStreamTrack, s))
          .sender
      );
    });
  }
  createSimulcastTransceiverSender(e, t, i, r) {
    return m(this, void 0, void 0, function* () {
      if (!this.pcManager) throw new re("publisher is closed");
      const s = { direction: "sendonly" };
      r && (s.sendEncodings = r);
      const o = yield this.pcManager.addPublisherTransceiver(
        t.mediaStreamTrack,
        s,
      );
      if (i.videoCodec)
        return e.setSimulcastTrackSender(i.videoCodec, o.sender), o.sender;
    });
  }
  createRTCRtpSender(e) {
    return m(this, void 0, void 0, function* () {
      if (!this.pcManager) throw new re("publisher is closed");
      return this.pcManager.addPublisherTrack(e);
    });
  }
  attemptReconnect(e) {
    return m(this, void 0, void 0, function* () {
      var t, i, r;
      if (!this._isClosed) {
        if (this.attemptingReconnect) {
          q.warn(
            "already attempting reconnect, returning early",
            this.logContext,
          );
          return;
        }
        (((t = this.clientConfiguration) === null || t === void 0
          ? void 0
          : t.resumeConnection) === Zt.DISABLED ||
          ((r =
            (i = this.pcManager) === null || i === void 0
              ? void 0
              : i.currentState) !== null && r !== void 0
            ? r
            : te.NEW) === te.NEW) &&
          (this.fullReconnectOnNext = !0);
        try {
          (this.attemptingReconnect = !0),
            this.fullReconnectOnNext
              ? yield this.restartConnection()
              : yield this.resumeConnection(e),
            this.clearPendingReconnect(),
            (this.fullReconnectOnNext = !1);
        } catch (s) {
          this.reconnectAttempts += 1;
          let o = !0;
          s instanceof re
            ? (this.log.debug(
                "received unrecoverable error",
                Object.assign(Object.assign({}, this.logContext), { error: s }),
              ),
              (o = !1))
            : s instanceof bt || (this.fullReconnectOnNext = !0),
            o
              ? this.handleDisconnect("reconnect", vt.RR_UNKNOWN)
              : (this.log.info(
                  "could not recover connection after "
                    .concat(this.reconnectAttempts, " attempts, ")
                    .concat(Date.now() - this.reconnectStart, "ms. giving up"),
                  this.logContext,
                ),
                this.emit(O.Disconnected),
                yield this.close());
        } finally {
          this.attemptingReconnect = !1;
        }
      }
    });
  }
  getNextRetryDelay(e) {
    try {
      return this.reconnectPolicy.nextRetryDelayInMs(e);
    } catch (t) {
      this.log.warn(
        "encountered error in reconnect policy",
        Object.assign(Object.assign({}, this.logContext), { error: t }),
      );
    }
    return null;
  }
  restartConnection(e) {
    return m(this, void 0, void 0, function* () {
      var t, i, r;
      try {
        if (!this.url || !this.token)
          throw new re("could not reconnect, url or token not saved");
        this.log.info(
          "reconnecting, attempt: ".concat(this.reconnectAttempts),
          this.logContext,
        ),
          this.emit(O.Restarting),
          this.client.isDisconnected || (yield this.client.sendLeave()),
          yield this.cleanupPeerConnections(),
          yield this.cleanupClient();
        let s;
        try {
          if (!this.signalOpts)
            throw (
              (this.log.warn(
                "attempted connection restart, without signal options present",
                this.logContext,
              ),
              new bt())
            );
          s = yield this.join(e ?? this.url, this.token, this.signalOpts);
        } catch (o) {
          throw o instanceof J && o.reason === me.NotAllowed
            ? new re("could not reconnect, token might be expired")
            : new bt();
        }
        if (this.shouldFailNext)
          throw ((this.shouldFailNext = !1), new Error("simulated failure"));
        if (
          (this.client.setReconnected(),
          this.emit(O.SignalRestarted, s),
          yield this.waitForPCReconnected(),
          this.client.currentState !== $.CONNECTED)
        )
          throw new bt("Signal connection got severed during reconnect");
        (t = this.regionUrlProvider) === null ||
          t === void 0 ||
          t.resetAttempts(),
          this.emit(O.Restarted);
      } catch (s) {
        const o = yield (i = this.regionUrlProvider) === null || i === void 0
          ? void 0
          : i.getNextBestRegionUrl();
        if (o) {
          yield this.restartConnection(o);
          return;
        } else
          throw (
            ((r = this.regionUrlProvider) === null ||
              r === void 0 ||
              r.resetAttempts(),
            s)
          );
      }
    });
  }
  resumeConnection(e) {
    return m(this, void 0, void 0, function* () {
      var t;
      if (!this.url || !this.token)
        throw new re("could not reconnect, url or token not saved");
      if (!this.pcManager)
        throw new re("publisher and subscriber connections unset");
      this.log.info(
        "resuming signal connection, attempt ".concat(this.reconnectAttempts),
        this.logContext,
      ),
        this.emit(O.Resuming);
      let i;
      try {
        this.setupSignalClientCallbacks(),
          (i = yield this.client.reconnect(
            this.url,
            this.token,
            this.participantSid,
            e,
          ));
      } catch (r) {
        let s = "";
        throw (
          (r instanceof Error &&
            ((s = r.message),
            this.log.error(
              r.message,
              Object.assign(Object.assign({}, this.logContext), { error: r }),
            )),
          r instanceof J && r.reason === me.NotAllowed
            ? new re("could not reconnect, token might be expired")
            : r instanceof J && r.reason === me.LeaveRequest
              ? r
              : new bt(s))
        );
      }
      if ((this.emit(O.SignalResumed), i)) {
        const r = this.makeRTCConfiguration(i);
        this.pcManager.updateConfiguration(r);
      } else
        this.log.warn("Did not receive reconnect response", this.logContext);
      if (this.shouldFailNext)
        throw ((this.shouldFailNext = !1), new Error("simulated failure"));
      if (
        (yield this.pcManager.triggerIceRestart(),
        yield this.waitForPCReconnected(),
        this.client.currentState !== $.CONNECTED)
      )
        throw new bt("Signal connection got severed during reconnect");
      this.client.setReconnected(),
        ((t = this.reliableDC) === null || t === void 0
          ? void 0
          : t.readyState) === "open" &&
          this.reliableDC.id === null &&
          this.createDataChannels(),
        this.emit(O.Resumed);
    });
  }
  waitForPCInitialConnection(e, t) {
    return m(this, void 0, void 0, function* () {
      if (!this.pcManager) throw new re("PC manager is closed");
      yield this.pcManager.ensurePCTransportConnection(t, e);
    });
  }
  waitForPCReconnected() {
    return m(this, void 0, void 0, function* () {
      (this.pcState = Re.Reconnecting),
        this.log.debug(
          "waiting for peer connection to reconnect",
          this.logContext,
        );
      try {
        if ((yield je(_h), !this.pcManager))
          throw new re("PC manager is closed");
        yield this.pcManager.ensurePCTransportConnection(
          void 0,
          this.peerConnectionTimeout,
        ),
          (this.pcState = Re.Connected);
      } catch (e) {
        throw (
          ((this.pcState = Re.Disconnected),
          new J("could not establish PC connection, ".concat(e.message)))
        );
      }
    });
  }
  sendDataPacket(e, t) {
    return m(this, void 0, void 0, function* () {
      const i = e.toBinary();
      yield this.ensurePublisherConnected(t);
      const r = this.dataChannelForKind(t);
      r && r.send(i), this.updateAndEmitDCBufferStatus(t);
    });
  }
  ensureDataTransportConnected(e) {
    return m(this, arguments, void 0, function (t) {
      var i = this;
      let r =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : this.subscriberPrimary;
      return (function* () {
        var s;
        if (!i.pcManager) throw new re("PC manager is closed");
        const o = r ? i.pcManager.subscriber : i.pcManager.publisher,
          a = r ? "Subscriber" : "Publisher";
        if (!o) throw new J("".concat(a, " connection not set"));
        let c = !1;
        !r && !i.dataChannelForKind(t, r) && (i.createDataChannels(), (c = !0)),
          !c &&
            !r &&
            !i.pcManager.publisher.isICEConnected &&
            i.pcManager.publisher.getICEConnectionState() !== "checking" &&
            (c = !0),
          c && i.negotiate();
        const d = i.dataChannelForKind(t, r);
        if (d?.readyState === "open") return;
        const u = new Date().getTime() + i.peerConnectionTimeout;
        for (; new Date().getTime() < u; ) {
          if (
            o.isICEConnected &&
            ((s = i.dataChannelForKind(t, r)) === null || s === void 0
              ? void 0
              : s.readyState) === "open"
          )
            return;
          yield je(50);
        }
        throw new J(
          "could not establish "
            .concat(a, " connection, state: ")
            .concat(o.getICEConnectionState()),
        );
      })();
    });
  }
  ensurePublisherConnected(e) {
    return m(this, void 0, void 0, function* () {
      this.publisherConnectionPromise ||
        (this.publisherConnectionPromise = this.ensureDataTransportConnected(
          e,
          !1,
        )),
        yield this.publisherConnectionPromise;
    });
  }
  verifyTransport() {
    return !(
      !this.pcManager ||
      this.pcManager.currentState !== te.CONNECTED ||
      !this.client.ws ||
      this.client.ws.readyState === WebSocket.CLOSED
    );
  }
  negotiate() {
    return m(this, void 0, void 0, function* () {
      return new Promise((e, t) =>
        m(this, void 0, void 0, function* () {
          if (!this.pcManager) {
            t(new qi("PC manager is closed"));
            return;
          }
          this.pcManager.requirePublisher(),
            this.pcManager.publisher.getTransceivers().length == 0 &&
              !this.lossyDC &&
              !this.reliableDC &&
              this.createDataChannels();
          const i = new AbortController(),
            r = () => {
              i.abort(),
                this.log.debug(
                  "engine disconnected while negotiation was ongoing",
                  this.logContext,
                ),
                e();
            };
          this.isClosed && t("cannot negotiate on closed engine"),
            this.on(O.Closing, r),
            this.pcManager.publisher.once(xt.RTPVideoPayloadTypes, (s) => {
              const o = new Map();
              s.forEach((a) => {
                const c = a.codec.toLowerCase();
                Xl(c) && o.set(a.payload, c);
              }),
                this.emit(O.RTPVideoMapUpdate, o);
            });
          try {
            yield this.pcManager.negotiate(i), e();
          } catch (s) {
            s instanceof qi && (this.fullReconnectOnNext = !0),
              this.handleDisconnect("negotiation", vt.RR_UNKNOWN),
              t(s);
          } finally {
            this.off(O.Closing, r);
          }
        }),
      );
    });
  }
  dataChannelForKind(e, t) {
    if (t) {
      if (e === Q.LOSSY) return this.lossyDCSub;
      if (e === Q.RELIABLE) return this.reliableDCSub;
    } else {
      if (e === Q.LOSSY) return this.lossyDC;
      if (e === Q.RELIABLE) return this.reliableDC;
    }
  }
  sendSyncState(e, t) {
    var i, r;
    if (!this.pcManager) {
      this.log.warn(
        "sync state cannot be sent without peer connection setup",
        this.logContext,
      );
      return;
    }
    const s = this.pcManager.subscriber.getLocalDescription(),
      o = this.pcManager.subscriber.getRemoteDescription(),
      a =
        (r =
          (i = this.signalOpts) === null || i === void 0
            ? void 0
            : i.autoSubscribe) !== null && r !== void 0
          ? r
          : !0,
      c = new Array(),
      d = new Array();
    e.forEach((u) => {
      u.isDesired !== a && c.push(u.trackSid),
        u.isEnabled || d.push(u.trackSid);
    }),
      this.client.sendSyncState(
        new Zo({
          answer: s ? Nn({ sdp: s.sdp, type: s.type }) : void 0,
          offer: o ? Nn({ sdp: o.sdp, type: o.type }) : void 0,
          subscription: new Kn({
            trackSids: c,
            subscribe: !a,
            participantTracks: [],
          }),
          publishTracks: jl(t),
          dataChannels: this.dataChannelsInfo(),
          trackSidsDisabled: d,
        }),
      );
  }
  failNext() {
    this.shouldFailNext = !0;
  }
  dataChannelsInfo() {
    const e = [],
      t = (i, r) => {
        i?.id !== void 0 &&
          i.id !== null &&
          e.push(new ea({ label: i.label, id: i.id, target: r }));
      };
    return (
      t(this.dataChannelForKind(Q.LOSSY), xe.PUBLISHER),
      t(this.dataChannelForKind(Q.RELIABLE), xe.PUBLISHER),
      t(this.dataChannelForKind(Q.LOSSY, !0), xe.SUBSCRIBER),
      t(this.dataChannelForKind(Q.RELIABLE, !0), xe.SUBSCRIBER),
      e
    );
  }
  clearReconnectTimeout() {
    this.reconnectTimeout && le.clearTimeout(this.reconnectTimeout);
  }
  clearPendingReconnect() {
    this.clearReconnectTimeout(), (this.reconnectAttempts = 0);
  }
  registerOnLineListener() {
    Se() && window.addEventListener("online", this.handleBrowserOnLine);
  }
  deregisterOnLineListener() {
    Se() && window.removeEventListener("online", this.handleBrowserOnLine);
  }
}
class bt extends Error {}
function xh(n) {
  return n !== void 0 && n > 13;
}
function Ah(n, e) {
  const t = n.participantIdentity
    ? n.participantIdentity
    : e.participantIdentity;
  (n.participantIdentity = t), (e.participantIdentity = t);
  const i =
    n.destinationIdentities.length !== 0
      ? n.destinationIdentities
      : e.destinationIdentities;
  (n.destinationIdentities = i), (e.destinationIdentities = i);
}
class xs {
  constructor(e, t) {
    (this.lastUpdateAt = 0),
      (this.settingsCacheTime = 3e3),
      (this.attemptedRegions = []),
      (this.serverUrl = new URL(e)),
      (this.token = t);
  }
  updateToken(e) {
    this.token = e;
  }
  isCloud() {
    return Yi(this.serverUrl);
  }
  getServerUrl() {
    return this.serverUrl;
  }
  getNextBestRegionUrl(e) {
    return m(this, void 0, void 0, function* () {
      if (!this.isCloud())
        throw Error(
          "region availability is only supported for LiveKit Cloud domains",
        );
      (!this.regionSettings ||
        Date.now() - this.lastUpdateAt > this.settingsCacheTime) &&
        (this.regionSettings = yield this.fetchRegionSettings(e));
      const t = this.regionSettings.regions.filter(
        (i) => !this.attemptedRegions.find((r) => r.url === i.url),
      );
      if (t.length > 0) {
        const i = t[0];
        return (
          this.attemptedRegions.push(i),
          q.debug("next region: ".concat(i.region)),
          i.url
        );
      } else return null;
    });
  }
  resetAttempts() {
    this.attemptedRegions = [];
  }
  fetchRegionSettings(e) {
    return m(this, void 0, void 0, function* () {
      const t = yield fetch("".concat(Dh(this.serverUrl), "/regions"), {
        headers: { authorization: "Bearer ".concat(this.token) },
        signal: e,
      });
      if (t.ok) {
        const i = yield t.json();
        return (this.lastUpdateAt = Date.now()), i;
      } else
        throw new J(
          "Could not fetch region settings: ".concat(t.statusText),
          t.status === 401 ? me.NotAllowed : void 0,
          t.status,
        );
    });
  }
  setServerReportedRegions(e) {
    (this.regionSettings = e), (this.lastUpdateAt = Date.now());
  }
}
function Dh(n) {
  return ""
    .concat(n.protocol.replace("ws", "http"), "//")
    .concat(n.host, "/settings");
}
class ee extends Error {
  constructor(e, t, i) {
    super(t),
      (this.code = e),
      (this.message = Ds(t, ee.MAX_MESSAGE_BYTES)),
      (this.data = i ? Ds(i, ee.MAX_DATA_BYTES) : void 0);
  }
  static fromProto(e) {
    return new ee(e.code, e.message, e.data);
  }
  toProto() {
    return new Bo({ code: this.code, message: this.message, data: this.data });
  }
  static builtIn(e, t) {
    return new ee(ee.ErrorCode[e], ee.ErrorMessage[e], t);
  }
}
ee.MAX_MESSAGE_BYTES = 256;
ee.MAX_DATA_BYTES = 15360;
ee.ErrorCode = {
  APPLICATION_ERROR: 1500,
  CONNECTION_TIMEOUT: 1501,
  RESPONSE_TIMEOUT: 1502,
  RECIPIENT_DISCONNECTED: 1503,
  RESPONSE_PAYLOAD_TOO_LARGE: 1504,
  SEND_FAILED: 1505,
  UNSUPPORTED_METHOD: 1400,
  RECIPIENT_NOT_FOUND: 1401,
  REQUEST_PAYLOAD_TOO_LARGE: 1402,
  UNSUPPORTED_SERVER: 1403,
  UNSUPPORTED_VERSION: 1404,
};
ee.ErrorMessage = {
  APPLICATION_ERROR: "Application error in method handler",
  CONNECTION_TIMEOUT: "Connection timeout",
  RESPONSE_TIMEOUT: "Response timeout",
  RECIPIENT_DISCONNECTED: "Recipient disconnected",
  RESPONSE_PAYLOAD_TOO_LARGE: "Response payload too large",
  SEND_FAILED: "Failed to send",
  UNSUPPORTED_METHOD: "Method not supported at destination",
  RECIPIENT_NOT_FOUND: "Recipient not found",
  REQUEST_PAYLOAD_TOO_LARGE: "Request payload too large",
  UNSUPPORTED_SERVER: "RPC not supported by server",
  UNSUPPORTED_VERSION: "Unsupported RPC version",
};
const As = 15360;
function Zi(n) {
  return new TextEncoder().encode(n).length;
}
function Ds(n, e) {
  if (Zi(n) <= e) return n;
  let t = 0,
    i = n.length;
  const r = new TextEncoder();
  for (; t < i; ) {
    const s = Math.floor((t + i + 1) / 2);
    r.encode(n.slice(0, s)).length <= e ? (t = s) : (i = s - 1);
  }
  return n.slice(0, t);
}
class Ha extends _ {
  constructor(e, t, i, r, s) {
    super(e, i, s), (this.sid = t), (this.receiver = r);
  }
  setMuted(e) {
    this.isMuted !== e &&
      ((this.isMuted = e),
      (this._mediaStreamTrack.enabled = !e),
      this.emit(e ? M.Muted : M.Unmuted, this));
  }
  setMediaStream(e) {
    this.mediaStream = e;
    const t = (i) => {
      i.track === this._mediaStreamTrack &&
        (e.removeEventListener("removetrack", t),
        this.receiver &&
          "playoutDelayHint" in this.receiver &&
          (this.receiver.playoutDelayHint = void 0),
        (this.receiver = void 0),
        (this._currentBitrate = 0),
        this.emit(M.Ended, this));
    };
    e.addEventListener("removetrack", t);
  }
  start() {
    this.startMonitor(), super.enable();
  }
  stop() {
    this.stopMonitor(), super.disable();
  }
  getRTCStatsReport() {
    return m(this, void 0, void 0, function* () {
      var e;
      return !((e = this.receiver) === null || e === void 0) && e.getStats
        ? yield this.receiver.getStats()
        : void 0;
    });
  }
  setPlayoutDelay(e) {
    this.receiver
      ? "playoutDelayHint" in this.receiver
        ? (this.receiver.playoutDelayHint = e)
        : this.log.warn("Playout delay not supported in this browser")
      : this.log.warn("Cannot set playout delay, track already ended");
  }
  getPlayoutDelay() {
    if (this.receiver) {
      if ("playoutDelayHint" in this.receiver)
        return this.receiver.playoutDelayHint;
      this.log.warn("Playout delay not supported in this browser");
    } else this.log.warn("Cannot get playout delay, track already ended");
    return 0;
  }
  startMonitor() {
    this.monitorInterval ||
      (this.monitorInterval = setInterval(() => this.monitorReceiver(), br)),
      Bl() && this.registerTimeSyncUpdate();
  }
  registerTimeSyncUpdate() {
    const e = () => {
      var t;
      this.timeSyncHandle = requestAnimationFrame(() => e());
      const i =
        (t = this.receiver) === null || t === void 0
          ? void 0
          : t.getSynchronizationSources()[0];
      if (i) {
        const { timestamp: r, rtpTimestamp: s } = i;
        s &&
          this.rtpTimestamp !== s &&
          (this.emit(M.TimeSyncUpdate, { timestamp: r, rtpTimestamp: s }),
          (this.rtpTimestamp = s));
      }
    };
    e();
  }
}
class Qt extends Ha {
  constructor(e, t, i, r, s, o) {
    super(e, t, _.Kind.Audio, i, o),
      (this.monitorReceiver = () =>
        m(this, void 0, void 0, function* () {
          if (!this.receiver) {
            this._currentBitrate = 0;
            return;
          }
          const a = yield this.getReceiverStats();
          a &&
            this.prevStats &&
            this.receiver &&
            (this._currentBitrate = Qn(a, this.prevStats)),
            (this.prevStats = a);
        })),
      (this.audioContext = r),
      (this.webAudioPluginNodes = []),
      s && (this.sinkId = s.deviceId);
  }
  setVolume(e) {
    var t;
    for (const i of this.attachedElements)
      this.audioContext
        ? (t = this.gainNode) === null ||
          t === void 0 ||
          t.gain.setTargetAtTime(e, 0, 0.1)
        : (i.volume = e);
    He() && this._mediaStreamTrack._setVolume(e), (this.elementVolume = e);
  }
  getVolume() {
    if (this.elementVolume) return this.elementVolume;
    if (He()) return 1;
    let e = 0;
    return (
      this.attachedElements.forEach((t) => {
        t.volume > e && (e = t.volume);
      }),
      e
    );
  }
  setSinkId(e) {
    return m(this, void 0, void 0, function* () {
      (this.sinkId = e),
        yield Promise.all(
          this.attachedElements.map((t) => {
            if (Ji(t)) return t.setSinkId(e);
          }),
        );
    });
  }
  attach(e) {
    const t = this.attachedElements.length === 0;
    return (
      e ? super.attach(e) : (e = super.attach()),
      this.sinkId && Ji(e) && e.setSinkId(this.sinkId),
      this.audioContext &&
        t &&
        (this.log.debug("using audio context mapping", this.logContext),
        this.connectWebAudio(this.audioContext, e),
        (e.volume = 0),
        (e.muted = !0)),
      this.elementVolume && this.setVolume(this.elementVolume),
      e
    );
  }
  detach(e) {
    let t;
    return (
      e
        ? ((t = super.detach(e)),
          this.audioContext &&
            (this.attachedElements.length > 0
              ? this.connectWebAudio(
                  this.audioContext,
                  this.attachedElements[0],
                )
              : this.disconnectWebAudio()))
        : ((t = super.detach()), this.disconnectWebAudio()),
      t
    );
  }
  setAudioContext(e) {
    (this.audioContext = e),
      e && this.attachedElements.length > 0
        ? this.connectWebAudio(e, this.attachedElements[0])
        : e || this.disconnectWebAudio();
  }
  setWebAudioPlugins(e) {
    (this.webAudioPluginNodes = e),
      this.attachedElements.length > 0 &&
        this.audioContext &&
        this.connectWebAudio(this.audioContext, this.attachedElements[0]);
  }
  connectWebAudio(e, t) {
    this.disconnectWebAudio(),
      (this.sourceNode = e.createMediaStreamSource(t.srcObject));
    let i = this.sourceNode;
    this.webAudioPluginNodes.forEach((r) => {
      i.connect(r), (i = r);
    }),
      (this.gainNode = e.createGain()),
      i.connect(this.gainNode),
      this.gainNode.connect(e.destination),
      this.elementVolume &&
        this.gainNode.gain.setTargetAtTime(this.elementVolume, 0, 0.1),
      e.state !== "running" &&
        e
          .resume()
          .then(() => {
            e.state !== "running" &&
              this.emit(
                M.AudioPlaybackFailed,
                new Error("Audio Context couldn't be started automatically"),
              );
          })
          .catch((r) => {
            this.emit(M.AudioPlaybackFailed, r);
          });
  }
  disconnectWebAudio() {
    var e, t;
    (e = this.gainNode) === null || e === void 0 || e.disconnect(),
      (t = this.sourceNode) === null || t === void 0 || t.disconnect(),
      (this.gainNode = void 0),
      (this.sourceNode = void 0);
  }
  getReceiverStats() {
    return m(this, void 0, void 0, function* () {
      if (!this.receiver || !this.receiver.getStats) return;
      const e = yield this.receiver.getStats();
      let t;
      return (
        e.forEach((i) => {
          i.type === "inbound-rtp" &&
            (t = {
              type: "audio",
              timestamp: i.timestamp,
              jitter: i.jitter,
              bytesReceived: i.bytesReceived,
              concealedSamples: i.concealedSamples,
              concealmentEvents: i.concealmentEvents,
              silentConcealedSamples: i.silentConcealedSamples,
              silentConcealmentEvents: i.silentConcealmentEvents,
              totalAudioEnergy: i.totalAudioEnergy,
              totalSamplesDuration: i.totalSamplesDuration,
            });
        }),
        t
      );
    });
  }
}
const mi = 100;
class $t extends Ha {
  constructor(e, t, i, r, s) {
    super(e, t, _.Kind.Video, i, s),
      (this.elementInfos = []),
      (this.monitorReceiver = () =>
        m(this, void 0, void 0, function* () {
          if (!this.receiver) {
            this._currentBitrate = 0;
            return;
          }
          const o = yield this.getReceiverStats();
          o &&
            this.prevStats &&
            this.receiver &&
            (this._currentBitrate = Qn(o, this.prevStats)),
            (this.prevStats = o);
        })),
      (this.debouncedHandleResize = pr(() => {
        this.updateDimensions();
      }, mi)),
      (this.adaptiveStreamSettings = r);
  }
  get isAdaptiveStream() {
    return this.adaptiveStreamSettings !== void 0;
  }
  get mediaStreamTrack() {
    return this._mediaStreamTrack;
  }
  setMuted(e) {
    super.setMuted(e),
      this.attachedElements.forEach((t) => {
        e ? _t(this._mediaStreamTrack, t) : Ct(this._mediaStreamTrack, t);
      });
  }
  attach(e) {
    if (
      (e ? super.attach(e) : (e = super.attach()),
      this.adaptiveStreamSettings &&
        this.elementInfos.find((t) => t.element === e) === void 0)
    ) {
      const t = new Mh(e);
      this.observeElementInfo(t);
    }
    return e;
  }
  observeElementInfo(e) {
    this.adaptiveStreamSettings &&
    this.elementInfos.find((t) => t === e) === void 0
      ? ((e.handleResize = () => {
          this.debouncedHandleResize();
        }),
        (e.handleVisibilityChanged = () => {
          this.updateVisibility();
        }),
        this.elementInfos.push(e),
        e.observe(),
        this.debouncedHandleResize(),
        this.updateVisibility())
      : this.log.warn(
          "visibility resize observer not triggered",
          this.logContext,
        );
  }
  stopObservingElementInfo(e) {
    if (!this.isAdaptiveStream) {
      this.log.warn("stopObservingElementInfo ignored", this.logContext);
      return;
    }
    const t = this.elementInfos.filter((i) => i === e);
    for (const i of t) i.stopObserving();
    (this.elementInfos = this.elementInfos.filter((i) => i !== e)),
      this.updateVisibility(),
      this.debouncedHandleResize();
  }
  detach(e) {
    let t = [];
    if (e) return this.stopObservingElement(e), super.detach(e);
    t = super.detach();
    for (const i of t) this.stopObservingElement(i);
    return t;
  }
  getDecoderImplementation() {
    var e;
    return (e = this.prevStats) === null || e === void 0
      ? void 0
      : e.decoderImplementation;
  }
  getReceiverStats() {
    return m(this, void 0, void 0, function* () {
      if (!this.receiver || !this.receiver.getStats) return;
      const e = yield this.receiver.getStats();
      let t,
        i = "",
        r = new Map();
      return (
        e.forEach((s) => {
          s.type === "inbound-rtp"
            ? ((i = s.codecId),
              (t = {
                type: "video",
                framesDecoded: s.framesDecoded,
                framesDropped: s.framesDropped,
                framesReceived: s.framesReceived,
                packetsReceived: s.packetsReceived,
                packetsLost: s.packetsLost,
                frameWidth: s.frameWidth,
                frameHeight: s.frameHeight,
                pliCount: s.pliCount,
                firCount: s.firCount,
                nackCount: s.nackCount,
                jitter: s.jitter,
                timestamp: s.timestamp,
                bytesReceived: s.bytesReceived,
                decoderImplementation: s.decoderImplementation,
              }))
            : s.type === "codec" && r.set(s.id, s);
        }),
        t && i !== "" && r.get(i) && (t.mimeType = r.get(i).mimeType),
        t
      );
    });
  }
  stopObservingElement(e) {
    const t = this.elementInfos.filter((i) => i.element === e);
    for (const i of t) this.stopObservingElementInfo(i);
  }
  handleAppVisibilityChanged() {
    const e = Object.create(null, {
      handleAppVisibilityChanged: {
        get: () => super.handleAppVisibilityChanged,
      },
    });
    return m(this, void 0, void 0, function* () {
      yield e.handleAppVisibilityChanged.call(this),
        this.isAdaptiveStream && this.updateVisibility();
    });
  }
  updateVisibility() {
    var e, t;
    const i = this.elementInfos.reduce(
        (a, c) => Math.max(a, c.visibilityChangedAt || 0),
        0,
      ),
      r =
        !(
          (t =
            (e = this.adaptiveStreamSettings) === null || e === void 0
              ? void 0
              : e.pauseVideoInBackground) !== null && t !== void 0
        ) || t
          ? this.isInBackground
          : !1,
      s = this.elementInfos.some((a) => a.pictureInPicture),
      o = (this.elementInfos.some((a) => a.visible) && !r) || s;
    if (this.lastVisible !== o) {
      if (!o && Date.now() - i < mi) {
        le.setTimeout(() => {
          this.updateVisibility();
        }, mi);
        return;
      }
      (this.lastVisible = o), this.emit(M.VisibilityChanged, o, this);
    }
  }
  updateDimensions() {
    var e, t;
    let i = 0,
      r = 0;
    const s = this.getPixelDensity();
    for (const o of this.elementInfos) {
      const a = o.width() * s,
        c = o.height() * s;
      a + c > i + r && ((i = a), (r = c));
    }
    (((e = this.lastDimensions) === null || e === void 0 ? void 0 : e.width) ===
      i &&
      ((t = this.lastDimensions) === null || t === void 0
        ? void 0
        : t.height) === r) ||
      ((this.lastDimensions = { width: i, height: r }),
      this.emit(M.VideoDimensionsChanged, this.lastDimensions, this));
  }
  getPixelDensity() {
    var e;
    const t =
      (e = this.adaptiveStreamSettings) === null || e === void 0
        ? void 0
        : e.pixelDensity;
    return t === "screen" ? hs() : t || (hs() > 2 ? 2 : 1);
  }
}
class Mh {
  get visible() {
    return this.isPiP || this.isIntersecting;
  }
  get pictureInPicture() {
    return this.isPiP;
  }
  constructor(e, t) {
    (this.onVisibilityChanged = (i) => {
      var r;
      const { target: s, isIntersecting: o } = i;
      s === this.element &&
        ((this.isIntersecting = o),
        (this.visibilityChangedAt = Date.now()),
        (r = this.handleVisibilityChanged) === null ||
          r === void 0 ||
          r.call(this));
    }),
      (this.onEnterPiP = () => {
        var i;
        (this.isPiP = !0),
          (i = this.handleVisibilityChanged) === null ||
            i === void 0 ||
            i.call(this);
      }),
      (this.onLeavePiP = () => {
        var i;
        (this.isPiP = !1),
          (i = this.handleVisibilityChanged) === null ||
            i === void 0 ||
            i.call(this);
      }),
      (this.element = e),
      (this.isIntersecting = t ?? Ms(e)),
      (this.isPiP = Se() && document.pictureInPictureElement === e),
      (this.visibilityChangedAt = 0);
  }
  width() {
    return this.element.clientWidth;
  }
  height() {
    return this.element.clientHeight;
  }
  observe() {
    (this.isIntersecting = Ms(this.element)),
      (this.isPiP = document.pictureInPictureElement === this.element),
      (this.element.handleResize = () => {
        var e;
        (e = this.handleResize) === null || e === void 0 || e.call(this);
      }),
      (this.element.handleVisibilityChanged = this.onVisibilityChanged),
      ps().observe(this.element),
      fs().observe(this.element),
      this.element.addEventListener("enterpictureinpicture", this.onEnterPiP),
      this.element.addEventListener("leavepictureinpicture", this.onLeavePiP);
  }
  stopObserving() {
    var e, t;
    (e = ps()) === null || e === void 0 || e.unobserve(this.element),
      (t = fs()) === null || t === void 0 || t.unobserve(this.element),
      this.element.removeEventListener(
        "enterpictureinpicture",
        this.onEnterPiP,
      ),
      this.element.removeEventListener(
        "leavepictureinpicture",
        this.onLeavePiP,
      );
  }
}
function Ms(n) {
  let e = n.offsetTop,
    t = n.offsetLeft;
  const i = n.offsetWidth,
    r = n.offsetHeight,
    { hidden: s } = n,
    { opacity: o, display: a } = getComputedStyle(n);
  for (; n.offsetParent; )
    (n = n.offsetParent), (e += n.offsetTop), (t += n.offsetLeft);
  return (
    e < window.pageYOffset + window.innerHeight &&
    t < window.pageXOffset + window.innerWidth &&
    e + r > window.pageYOffset &&
    t + i > window.pageXOffset &&
    !s &&
    (o !== "" ? parseFloat(o) > 0 : !0) &&
    a !== "none"
  );
}
class qe extends Be.EventEmitter {
  constructor(e, t, i, r) {
    var s;
    super(),
      (this.metadataMuted = !1),
      (this.encryption = Pe.NONE),
      (this.log = q),
      (this.handleMuted = () => {
        this.emit(M.Muted);
      }),
      (this.handleUnmuted = () => {
        this.emit(M.Unmuted);
      }),
      (this.log = We(
        (s = r?.loggerName) !== null && s !== void 0 ? s : Ae.Publication,
      )),
      (this.loggerContextCb = this.loggerContextCb),
      this.setMaxListeners(100),
      (this.kind = e),
      (this.trackSid = t),
      (this.trackName = i),
      (this.source = _.Source.Unknown);
  }
  setTrack(e) {
    this.track &&
      (this.track.off(M.Muted, this.handleMuted),
      this.track.off(M.Unmuted, this.handleUnmuted)),
      (this.track = e),
      e &&
        (e.on(M.Muted, this.handleMuted), e.on(M.Unmuted, this.handleUnmuted));
  }
  get logContext() {
    var e;
    return Object.assign(
      Object.assign(
        {},
        (e = this.loggerContextCb) === null || e === void 0
          ? void 0
          : e.call(this),
      ),
      H(this),
    );
  }
  get isMuted() {
    return this.metadataMuted;
  }
  get isEnabled() {
    return !0;
  }
  get isSubscribed() {
    return this.track !== void 0;
  }
  get isEncrypted() {
    return this.encryption !== Pe.NONE;
  }
  get audioTrack() {
    if (this.track instanceof de || this.track instanceof Qt) return this.track;
  }
  get videoTrack() {
    if (this.track instanceof fe || this.track instanceof $t) return this.track;
  }
  updateInfo(e) {
    (this.trackSid = e.sid),
      (this.trackName = e.name),
      (this.source = _.sourceFromProto(e.source)),
      (this.mimeType = e.mimeType),
      this.kind === _.Kind.Video &&
        e.width > 0 &&
        ((this.dimensions = { width: e.width, height: e.height }),
        (this.simulcasted = e.simulcast)),
      (this.encryption = e.encryption),
      (this.trackInfo = e),
      this.log.debug(
        "update publication info",
        Object.assign(Object.assign({}, this.logContext), { info: e }),
      );
  }
}
(function (n) {
  (function (e) {
    (e.Desired = "desired"),
      (e.Subscribed = "subscribed"),
      (e.Unsubscribed = "unsubscribed");
  })(n.SubscriptionStatus || (n.SubscriptionStatus = {})),
    (function (e) {
      (e.Allowed = "allowed"), (e.NotAllowed = "not_allowed");
    })(n.PermissionStatus || (n.PermissionStatus = {}));
})(qe || (qe = {}));
class Ln extends qe {
  get isUpstreamPaused() {
    var e;
    return (e = this.track) === null || e === void 0
      ? void 0
      : e.isUpstreamPaused;
  }
  constructor(e, t, i, r) {
    super(e, t.sid, t.name, r),
      (this.track = void 0),
      (this.handleTrackEnded = () => {
        this.emit(M.Ended);
      }),
      this.updateInfo(t),
      this.setTrack(i);
  }
  setTrack(e) {
    this.track && this.track.off(M.Ended, this.handleTrackEnded),
      super.setTrack(e),
      e && e.on(M.Ended, this.handleTrackEnded);
  }
  get isMuted() {
    return this.track ? this.track.isMuted : super.isMuted;
  }
  get audioTrack() {
    return super.audioTrack;
  }
  get videoTrack() {
    return super.videoTrack;
  }
  mute() {
    return m(this, void 0, void 0, function* () {
      var e;
      return (e = this.track) === null || e === void 0 ? void 0 : e.mute();
    });
  }
  unmute() {
    return m(this, void 0, void 0, function* () {
      var e;
      return (e = this.track) === null || e === void 0 ? void 0 : e.unmute();
    });
  }
  pauseUpstream() {
    return m(this, void 0, void 0, function* () {
      var e;
      yield (e = this.track) === null || e === void 0
        ? void 0
        : e.pauseUpstream();
    });
  }
  resumeUpstream() {
    return m(this, void 0, void 0, function* () {
      var e;
      yield (e = this.track) === null || e === void 0
        ? void 0
        : e.resumeUpstream();
    });
  }
  getTrackFeatures() {
    var e;
    if (this.track instanceof de) {
      const t = this.track.mediaStreamTrack.getSettings(),
        i = new Set();
      return (
        t.autoGainControl && i.add(Ue.TF_AUTO_GAIN_CONTROL),
        t.echoCancellation && i.add(Ue.TF_ECHO_CANCELLATION),
        t.noiseSuppression && i.add(Ue.TF_NOISE_SUPPRESSION),
        t.channelCount && t.channelCount > 1 && i.add(Ue.TF_STEREO),
        (!((e = this.options) === null || e === void 0) && e.dtx) ||
          i.add(Ue.TF_NO_DTX),
        this.track.enhancedNoiseCancellation &&
          i.add(Ue.TF_ENHANCED_NOISE_CANCELLATION),
        Array.from(i.values())
      );
    } else return [];
  }
}
function Ja(n) {
  let e, t;
  return (
    typeof n.audio == "object" && n.audio.processor && (e = n.audio.processor),
    typeof n.video == "object" && n.video.processor && (t = n.video.processor),
    { audioProcessor: e, videoProcessor: t }
  );
}
function Ya(n) {
  return m(this, void 0, void 0, function* () {
    var e, t;
    n ?? (n = {}),
      ((e = n.audio) !== null && e !== void 0) || (n.audio = !0),
      ((t = n.video) !== null && t !== void 0) || (n.video = !0);
    const { audioProcessor: i, videoProcessor: r } = Ja(n),
      s = Na(n, qa, za),
      o = Yn(s),
      a = navigator.mediaDevices.getUserMedia(o);
    n.audio &&
      (ue.userMediaPromiseMap.set("audioinput", a),
      a.catch(() => ue.userMediaPromiseMap.delete("audioinput"))),
      n.video &&
        (ue.userMediaPromiseMap.set("videoinput", a),
        a.catch(() => ue.userMediaPromiseMap.delete("videoinput")));
    const c = yield a;
    return Promise.all(
      c.getTracks().map((d) =>
        m(this, void 0, void 0, function* () {
          const u = d.kind === "audio";
          u ? s.audio : s.video;
          let l;
          const h = u ? o.audio : o.video;
          typeof h != "boolean" && (l = h),
            l
              ? (l.deviceId = d.getSettings().deviceId)
              : (l = { deviceId: d.getSettings().deviceId });
          const f = Ga(d, l);
          return (
            f.kind === _.Kind.Video
              ? (f.source = _.Source.Camera)
              : f.kind === _.Kind.Audio && (f.source = _.Source.Microphone),
            (f.mediaStream = c),
            f instanceof de && i
              ? yield f.setProcessor(i)
              : f instanceof fe && r && (yield f.setProcessor(r)),
            f
          );
        }),
      ),
    );
  });
}
function Oh(n) {
  return m(this, void 0, void 0, function* () {
    return (yield Ya({ audio: !1, video: n }))[0];
  });
}
function Nh(n) {
  return m(this, void 0, void 0, function* () {
    return (yield Ya({ audio: n, video: !1 }))[0];
  });
}
var ye;
(function (n) {
  (n.Excellent = "excellent"),
    (n.Good = "good"),
    (n.Poor = "poor"),
    (n.Lost = "lost"),
    (n.Unknown = "unknown");
})(ye || (ye = {}));
function Lh(n) {
  switch (n) {
    case Wt.EXCELLENT:
      return ye.Excellent;
    case Wt.GOOD:
      return ye.Good;
    case Wt.POOR:
      return ye.Poor;
    case Wt.LOST:
      return ye.Lost;
    default:
      return ye.Unknown;
  }
}
class Qa extends Be.EventEmitter {
  get logContext() {
    var e, t;
    return Object.assign(
      {},
      (t =
        (e = this.loggerOptions) === null || e === void 0
          ? void 0
          : e.loggerContextCb) === null || t === void 0
        ? void 0
        : t.call(e),
    );
  }
  get isEncrypted() {
    return (
      this.trackPublications.size > 0 &&
      Array.from(this.trackPublications.values()).every((e) => e.isEncrypted)
    );
  }
  get isAgent() {
    var e;
    return (
      ((e = this.permissions) === null || e === void 0 ? void 0 : e.agent) ||
      this.kind === Mn.AGENT
    );
  }
  get kind() {
    return this._kind;
  }
  get attributes() {
    return Object.freeze(Object.assign({}, this._attributes));
  }
  constructor(e, t, i, r, s) {
    let o =
      arguments.length > 5 && arguments[5] !== void 0
        ? arguments[5]
        : Mn.STANDARD;
    var a;
    super(),
      (this.audioLevel = 0),
      (this.isSpeaking = !1),
      (this._connectionQuality = ye.Unknown),
      (this.log = q),
      (this.log = We(
        (a = s?.loggerName) !== null && a !== void 0 ? a : Ae.Participant,
      )),
      (this.loggerOptions = s),
      this.setMaxListeners(100),
      (this.sid = e),
      (this.identity = t),
      (this.name = i),
      (this.metadata = r),
      (this.audioTrackPublications = new Map()),
      (this.videoTrackPublications = new Map()),
      (this.trackPublications = new Map()),
      (this._kind = o),
      (this._attributes = {});
  }
  getTrackPublications() {
    return Array.from(this.trackPublications.values());
  }
  getTrackPublication(e) {
    for (const [, t] of this.trackPublications) if (t.source === e) return t;
  }
  getTrackPublicationByName(e) {
    for (const [, t] of this.trackPublications) if (t.trackName === e) return t;
  }
  get connectionQuality() {
    return this._connectionQuality;
  }
  get isCameraEnabled() {
    var e;
    const t = this.getTrackPublication(_.Source.Camera);
    return !(!((e = t?.isMuted) !== null && e !== void 0) || e);
  }
  get isMicrophoneEnabled() {
    var e;
    const t = this.getTrackPublication(_.Source.Microphone);
    return !(!((e = t?.isMuted) !== null && e !== void 0) || e);
  }
  get isScreenShareEnabled() {
    return !!this.getTrackPublication(_.Source.ScreenShare);
  }
  get isLocal() {
    return !1;
  }
  get joinedAt() {
    return this.participantInfo
      ? new Date(
          Number.parseInt(this.participantInfo.joinedAt.toString()) * 1e3,
        )
      : new Date();
  }
  updateInfo(e) {
    return this.participantInfo &&
      this.participantInfo.sid === e.sid &&
      this.participantInfo.version > e.version
      ? !1
      : ((this.identity = e.identity),
        (this.sid = e.sid),
        this._setName(e.name),
        this._setMetadata(e.metadata),
        this._setAttributes(e.attributes),
        e.permission && this.setPermissions(e.permission),
        (this.participantInfo = e),
        this.log.trace(
          "update participant info",
          Object.assign(Object.assign({}, this.logContext), { info: e }),
        ),
        !0);
  }
  _setMetadata(e) {
    const t = this.metadata !== e,
      i = this.metadata;
    (this.metadata = e), t && this.emit(R.ParticipantMetadataChanged, i);
  }
  _setName(e) {
    const t = this.name !== e;
    (this.name = e), t && this.emit(R.ParticipantNameChanged, e);
  }
  _setAttributes(e) {
    const t = Vl(this.attributes, e);
    (this._attributes = e),
      Object.keys(t).length > 0 && this.emit(R.AttributesChanged, t);
  }
  setPermissions(e) {
    var t, i, r, s, o, a;
    const c = this.permissions,
      d =
        e.canPublish !==
          ((t = this.permissions) === null || t === void 0
            ? void 0
            : t.canPublish) ||
        e.canSubscribe !==
          ((i = this.permissions) === null || i === void 0
            ? void 0
            : i.canSubscribe) ||
        e.canPublishData !==
          ((r = this.permissions) === null || r === void 0
            ? void 0
            : r.canPublishData) ||
        e.hidden !==
          ((s = this.permissions) === null || s === void 0
            ? void 0
            : s.hidden) ||
        e.recorder !==
          ((o = this.permissions) === null || o === void 0
            ? void 0
            : o.recorder) ||
        e.canPublishSources.length !==
          this.permissions.canPublishSources.length ||
        e.canPublishSources.some((u, l) => {
          var h;
          return (
            u !==
            ((h = this.permissions) === null || h === void 0
              ? void 0
              : h.canPublishSources[l])
          );
        }) ||
        e.canSubscribeMetrics !==
          ((a = this.permissions) === null || a === void 0
            ? void 0
            : a.canSubscribeMetrics);
    return (
      (this.permissions = e),
      d && this.emit(R.ParticipantPermissionsChanged, c),
      d
    );
  }
  setIsSpeaking(e) {
    e !== this.isSpeaking &&
      ((this.isSpeaking = e),
      e && (this.lastSpokeAt = new Date()),
      this.emit(R.IsSpeakingChanged, e));
  }
  setConnectionQuality(e) {
    const t = this._connectionQuality;
    (this._connectionQuality = Lh(e)),
      t !== this._connectionQuality &&
        this.emit(R.ConnectionQualityChanged, this._connectionQuality);
  }
  setAudioContext(e) {
    (this.audioContext = e),
      this.audioTrackPublications.forEach(
        (t) =>
          (t.track instanceof Qt || t.track instanceof de) &&
          t.track.setAudioContext(e),
      );
  }
  addTrackPublication(e) {
    e.on(M.Muted, () => {
      this.emit(R.TrackMuted, e);
    }),
      e.on(M.Unmuted, () => {
        this.emit(R.TrackUnmuted, e);
      });
    const t = e;
    switch (
      (t.track && (t.track.sid = e.trackSid),
      this.trackPublications.set(e.trackSid, e),
      e.kind)
    ) {
      case _.Kind.Audio:
        this.audioTrackPublications.set(e.trackSid, e);
        break;
      case _.Kind.Video:
        this.videoTrackPublications.set(e.trackSid, e);
        break;
    }
  }
}
function Uh(n) {
  var e, t, i;
  if (!n.participantSid && !n.participantIdentity)
    throw new Error(
      "Invalid track permission, must provide at least one of participantIdentity and participantSid",
    );
  return new $o({
    participantIdentity:
      (e = n.participantIdentity) !== null && e !== void 0 ? e : "",
    participantSid: (t = n.participantSid) !== null && t !== void 0 ? t : "",
    allTracks: (i = n.allowAll) !== null && i !== void 0 ? i : !1,
    trackSids: n.allowedTrackSids || [],
  });
}
class Un extends Qa {
  constructor(e, t, i, r) {
    super(e, t, void 0, void 0, {
      loggerName: r.loggerName,
      loggerContextCb: () => this.engine.logContext,
    }),
      (this.pendingPublishing = new Set()),
      (this.pendingPublishPromises = new Map()),
      (this.participantTrackPermissions = []),
      (this.allParticipantsAllowedToSubscribe = !0),
      (this.encryptionType = Pe.NONE),
      (this.enabledPublishVideoCodecs = []),
      (this.rpcHandlers = new Map()),
      (this.pendingAcks = new Map()),
      (this.pendingResponses = new Map()),
      (this.handleReconnecting = () => {
        this.reconnectFuture || (this.reconnectFuture = new Ba());
      }),
      (this.handleReconnected = () => {
        var s, o;
        (o =
          (s = this.reconnectFuture) === null || s === void 0
            ? void 0
            : s.resolve) === null ||
          o === void 0 ||
          o.call(s),
          (this.reconnectFuture = void 0),
          this.updateTrackSubscriptionPermissions();
      }),
      (this.handleDisconnected = () => {
        var s, o;
        this.reconnectFuture &&
          (this.reconnectFuture.promise.catch((a) =>
            this.log.warn(a.message, this.logContext),
          ),
          (o =
            (s = this.reconnectFuture) === null || s === void 0
              ? void 0
              : s.reject) === null ||
            o === void 0 ||
            o.call(s, "Got disconnected during reconnection attempt"),
          (this.reconnectFuture = void 0));
      }),
      (this.handleSignalRequestResponse = (s) => {
        const { requestId: o, reason: a, message: c } = s,
          d = this.pendingSignalRequests.get(o);
        d &&
          (a !== na.OK && d.reject(new cs(c, a)),
          this.pendingSignalRequests.delete(o));
      }),
      (this.handleDataPacket = (s) => {
        switch (s.value.case) {
          case "rpcRequest":
            let o = s.value.value;
            this.handleIncomingRpcRequest(
              s.participantIdentity,
              o.id,
              o.method,
              o.payload,
              o.responseTimeoutMs,
              o.version,
            );
            break;
          case "rpcResponse":
            let a = s.value.value,
              c = null,
              d = null;
            a.value.case === "payload"
              ? (c = a.value.value)
              : a.value.case === "error" && (d = ee.fromProto(a.value.value)),
              this.handleIncomingRpcResponse(a.requestId, c, d);
            break;
          case "rpcAck":
            let u = s.value.value;
            this.handleIncomingRpcAck(u.requestId);
            break;
        }
      }),
      (this.updateTrackSubscriptionPermissions = () => {
        this.log.debug(
          "updating track subscription permissions",
          Object.assign(Object.assign({}, this.logContext), {
            allParticipantsAllowed: this.allParticipantsAllowedToSubscribe,
            participantTrackPermissions: this.participantTrackPermissions,
          }),
        ),
          this.engine.client.sendUpdateSubscriptionPermissions(
            this.allParticipantsAllowedToSubscribe,
            this.participantTrackPermissions.map((s) => Uh(s)),
          );
      }),
      (this.onTrackUnmuted = (s) => {
        this.onTrackMuted(s, s.isUpstreamPaused);
      }),
      (this.onTrackMuted = (s, o) => {
        if ((o === void 0 && (o = !0), !s.sid)) {
          this.log.error(
            "could not update mute status for unpublished track",
            Object.assign(Object.assign({}, this.logContext), H(s)),
          );
          return;
        }
        this.engine.updateMuteStatus(s.sid, o);
      }),
      (this.onTrackUpstreamPaused = (s) => {
        this.log.debug(
          "upstream paused",
          Object.assign(Object.assign({}, this.logContext), H(s)),
        ),
          this.onTrackMuted(s, !0);
      }),
      (this.onTrackUpstreamResumed = (s) => {
        this.log.debug(
          "upstream resumed",
          Object.assign(Object.assign({}, this.logContext), H(s)),
        ),
          this.onTrackMuted(s, s.isMuted);
      }),
      (this.onTrackFeatureUpdate = (s) => {
        const o = this.audioTrackPublications.get(s.sid);
        if (!o) {
          this.log.warn(
            "Could not update local audio track settings, missing publication for track ".concat(
              s.sid,
            ),
            this.logContext,
          );
          return;
        }
        this.engine.client.sendUpdateLocalAudioTrack(
          o.trackSid,
          o.getTrackFeatures(),
        );
      }),
      (this.handleSubscribedQualityUpdate = (s) =>
        m(this, void 0, void 0, function* () {
          var o, a, c, d, u, l;
          if (
            !(!((u = this.roomOptions) === null || u === void 0) && u.dynacast)
          )
            return;
          const h = this.videoTrackPublications.get(s.trackSid);
          if (!h) {
            this.log.warn(
              "received subscribed quality update for unknown track",
              Object.assign(Object.assign({}, this.logContext), {
                trackSid: s.trackSid,
              }),
            );
            return;
          }
          if (s.subscribedCodecs.length > 0) {
            if (!h.videoTrack) return;
            const b = yield h.videoTrack.setPublishingCodecs(
              s.subscribedCodecs,
            );
            try {
              for (
                var f = !0, g = kt(b), p;
                (p = yield g.next()), (o = p.done), !o;
                f = !0
              ) {
                (d = p.value), (f = !1);
                const v = d;
                Ol(v) &&
                  (this.log.debug(
                    "publish ".concat(v, " for ").concat(h.videoTrack.sid),
                    Object.assign(Object.assign({}, this.logContext), H(h)),
                  ),
                  yield this.publishAdditionalCodecForTrack(
                    h.videoTrack,
                    v,
                    h.options,
                  ));
              }
            } catch (v) {
              a = { error: v };
            } finally {
              try {
                !f && !o && (c = g.return) && (yield c.call(g));
              } finally {
                if (a) throw a.error;
              }
            }
          } else
            s.subscribedQualities.length > 0 &&
              (yield (l = h.videoTrack) === null || l === void 0
                ? void 0
                : l.setPublishingLayers(s.subscribedQualities));
        })),
      (this.handleLocalTrackUnpublished = (s) => {
        const o = this.trackPublications.get(s.trackSid);
        if (!o) {
          this.log.warn(
            "received unpublished event for unknown track",
            Object.assign(Object.assign({}, this.logContext), {
              trackSid: s.trackSid,
            }),
          );
          return;
        }
        this.unpublishTrack(o.track);
      }),
      (this.handleTrackEnded = (s) =>
        m(this, void 0, void 0, function* () {
          if (
            s.source === _.Source.ScreenShare ||
            s.source === _.Source.ScreenShareAudio
          )
            this.log.debug(
              "unpublishing local track due to TrackEnded",
              Object.assign(Object.assign({}, this.logContext), H(s)),
            ),
              this.unpublishTrack(s);
          else if (s.isUserProvided) yield s.mute();
          else if (s instanceof de || s instanceof fe)
            try {
              if (Se())
                try {
                  const o = yield navigator?.permissions.query({
                    name:
                      s.source === _.Source.Camera ? "camera" : "microphone",
                  });
                  if (o && o.state === "denied")
                    throw (
                      (this.log.warn(
                        "user has revoked access to ".concat(s.source),
                        Object.assign(Object.assign({}, this.logContext), H(s)),
                      ),
                      (o.onchange = () => {
                        o.state !== "denied" &&
                          (s.isMuted || s.restartTrack(), (o.onchange = null));
                      }),
                      new Error("GetUserMedia Permission denied"))
                    );
                } catch {}
              s.isMuted ||
                (this.log.debug(
                  "track ended, attempting to use a different device",
                  Object.assign(Object.assign({}, this.logContext), H(s)),
                ),
                s instanceof de
                  ? yield s.restartTrack({ deviceId: "default" })
                  : yield s.restartTrack());
            } catch {
              this.log.warn(
                "could not restart track, muting instead",
                Object.assign(Object.assign({}, this.logContext), H(s)),
              ),
                yield s.mute();
            }
        })),
      (this.audioTrackPublications = new Map()),
      (this.videoTrackPublications = new Map()),
      (this.trackPublications = new Map()),
      (this.engine = i),
      (this.roomOptions = r),
      this.setupEngine(i),
      (this.activeDeviceMap = new Map()),
      (this.pendingSignalRequests = new Map());
  }
  get lastCameraError() {
    return this.cameraError;
  }
  get lastMicrophoneError() {
    return this.microphoneError;
  }
  get isE2EEEnabled() {
    return this.encryptionType !== Pe.NONE;
  }
  getTrackPublication(e) {
    const t = super.getTrackPublication(e);
    if (t) return t;
  }
  getTrackPublicationByName(e) {
    const t = super.getTrackPublicationByName(e);
    if (t) return t;
  }
  setupEngine(e) {
    (this.engine = e),
      this.engine.on(O.RemoteMute, (t, i) => {
        const r = this.trackPublications.get(t);
        !r || !r.track || (i ? r.mute() : r.unmute());
      }),
      this.engine
        .on(O.Connected, this.handleReconnected)
        .on(O.SignalRestarted, this.handleReconnected)
        .on(O.SignalResumed, this.handleReconnected)
        .on(O.Restarting, this.handleReconnecting)
        .on(O.Resuming, this.handleReconnecting)
        .on(O.LocalTrackUnpublished, this.handleLocalTrackUnpublished)
        .on(O.SubscribedQualityUpdate, this.handleSubscribedQualityUpdate)
        .on(O.Disconnected, this.handleDisconnected)
        .on(O.SignalRequestResponse, this.handleSignalRequestResponse)
        .on(O.DataPacketReceived, this.handleDataPacket);
  }
  setMetadata(e) {
    return m(this, void 0, void 0, function* () {
      yield this.requestMetadataUpdate({ metadata: e });
    });
  }
  setName(e) {
    return m(this, void 0, void 0, function* () {
      yield this.requestMetadataUpdate({ name: e });
    });
  }
  setAttributes(e) {
    return m(this, void 0, void 0, function* () {
      yield this.requestMetadataUpdate({ attributes: e });
    });
  }
  requestMetadataUpdate(e) {
    return m(this, arguments, void 0, function (t) {
      var i = this;
      let { metadata: r, name: s, attributes: o } = t;
      return (function* () {
        return new Promise((a, c) =>
          m(i, void 0, void 0, function* () {
            var d, u;
            try {
              let l = !1;
              const h = yield this.engine.client.sendUpdateLocalMetadata(
                  (d = r ?? this.metadata) !== null && d !== void 0 ? d : "",
                  (u = s ?? this.name) !== null && u !== void 0 ? u : "",
                  o,
                ),
                f = performance.now();
              for (
                this.pendingSignalRequests.set(h, {
                  resolve: a,
                  reject: (g) => {
                    c(g), (l = !0);
                  },
                  values: { name: s, metadata: r, attributes: o },
                });
                performance.now() - f < 5e3 && !l;

              ) {
                if (
                  (!s || this.name === s) &&
                  (!r || this.metadata === r) &&
                  (!o ||
                    Object.entries(o).every((g) => {
                      let [p, b] = g;
                      return (
                        this.attributes[p] === b ||
                        (b === "" && !this.attributes[p])
                      );
                    }))
                ) {
                  this.pendingSignalRequests.delete(h), a();
                  return;
                }
                yield je(50);
              }
              c(
                new cs(
                  "Request to update local metadata timed out",
                  "TimeoutError",
                ),
              );
            } catch (l) {
              l instanceof Error && c(l);
            }
          }),
        );
      })();
    });
  }
  setCameraEnabled(e, t, i) {
    return this.setTrackEnabled(_.Source.Camera, e, t, i);
  }
  setMicrophoneEnabled(e, t, i) {
    return this.setTrackEnabled(_.Source.Microphone, e, t, i);
  }
  setScreenShareEnabled(e, t, i) {
    return this.setTrackEnabled(_.Source.ScreenShare, e, t, i);
  }
  setPermissions(e) {
    const t = this.permissions,
      i = super.setPermissions(e);
    return i && t && this.emit(R.ParticipantPermissionsChanged, t), i;
  }
  setE2EEEnabled(e) {
    return m(this, void 0, void 0, function* () {
      (this.encryptionType = e ? Pe.GCM : Pe.NONE),
        yield this.republishAllTracks(void 0, !1);
    });
  }
  setTrackEnabled(e, t, i, r) {
    return m(this, void 0, void 0, function* () {
      var s, o;
      this.log.debug(
        "setTrackEnabled",
        Object.assign(Object.assign({}, this.logContext), {
          source: e,
          enabled: t,
        }),
      ),
        this.republishPromise && (yield this.republishPromise);
      let a = this.getTrackPublication(e);
      if (t)
        if (a) yield a.unmute();
        else {
          let c;
          if (this.pendingPublishing.has(e)) {
            const d = yield this.waitForPendingPublicationOfSource(e);
            return (
              d ||
                this.log.info(
                  "skipping duplicate published source",
                  Object.assign(Object.assign({}, this.logContext), {
                    source: e,
                  }),
                ),
              yield d?.unmute(),
              d
            );
          }
          this.pendingPublishing.add(e);
          try {
            switch (e) {
              case _.Source.Camera:
                c = yield this.createTracks({
                  video: (s = i) !== null && s !== void 0 ? s : !0,
                });
                break;
              case _.Source.Microphone:
                c = yield this.createTracks({
                  audio: (o = i) !== null && o !== void 0 ? o : !0,
                });
                break;
              case _.Source.ScreenShare:
                c = yield this.createScreenTracks(Object.assign({}, i));
                break;
              default:
                throw new Fe(e);
            }
            const d = [];
            for (const l of c)
              this.log.info(
                "publishing track",
                Object.assign(Object.assign({}, this.logContext), H(l)),
              ),
                d.push(this.publishTrack(l, r));
            [a] = yield Promise.all(d);
          } catch (d) {
            throw (
              (c?.forEach((u) => {
                u.stop();
              }),
              d instanceof Error &&
                !(d instanceof Fe) &&
                this.emit(R.MediaDevicesError, d),
              d)
            );
          } finally {
            this.pendingPublishing.delete(e);
          }
        }
      else if (
        (a?.track || (a = yield this.waitForPendingPublicationOfSource(e)),
        a && a.track)
      )
        if (e === _.Source.ScreenShare) {
          a = yield this.unpublishTrack(a.track);
          const c = this.getTrackPublication(_.Source.ScreenShareAudio);
          c && c.track && this.unpublishTrack(c.track);
        } else yield a.mute();
      return a;
    });
  }
  enableCameraAndMicrophone() {
    return m(this, void 0, void 0, function* () {
      if (
        !(
          this.pendingPublishing.has(_.Source.Camera) ||
          this.pendingPublishing.has(_.Source.Microphone)
        )
      ) {
        this.pendingPublishing.add(_.Source.Camera),
          this.pendingPublishing.add(_.Source.Microphone);
        try {
          const e = yield this.createTracks({ audio: !0, video: !0 });
          yield Promise.all(e.map((t) => this.publishTrack(t)));
        } finally {
          this.pendingPublishing.delete(_.Source.Camera),
            this.pendingPublishing.delete(_.Source.Microphone);
        }
      }
    });
  }
  createTracks(e) {
    return m(this, void 0, void 0, function* () {
      var t, i;
      e ?? (e = {});
      const { audioProcessor: r, videoProcessor: s } = Ja(e),
        o = Na(
          e,
          (t = this.roomOptions) === null || t === void 0
            ? void 0
            : t.audioCaptureDefaults,
          (i = this.roomOptions) === null || i === void 0
            ? void 0
            : i.videoCaptureDefaults,
        ),
        a = Yn(o);
      let c;
      try {
        c = yield navigator.mediaDevices.getUserMedia(a);
      } catch (d) {
        throw (
          (d instanceof Error &&
            (a.audio && (this.microphoneError = d),
            a.video && (this.cameraError = d)),
          d)
        );
      }
      return (
        a.audio &&
          ((this.microphoneError = void 0), this.emit(R.AudioStreamAcquired)),
        a.video && (this.cameraError = void 0),
        Promise.all(
          c.getTracks().map((d) =>
            m(this, void 0, void 0, function* () {
              const u = d.kind === "audio";
              u ? o.audio : o.video;
              let l;
              const h = u ? a.audio : a.video;
              typeof h != "boolean" && (l = h);
              const f = Ga(d, l, {
                loggerName: this.roomOptions.loggerName,
                loggerContextCb: () => this.logContext,
              });
              return (
                f.kind === _.Kind.Video
                  ? (f.source = _.Source.Camera)
                  : f.kind === _.Kind.Audio &&
                    ((f.source = _.Source.Microphone),
                    f.setAudioContext(this.audioContext)),
                (f.mediaStream = c),
                f instanceof de && r
                  ? yield f.setProcessor(r)
                  : f instanceof fe && s && (yield f.setProcessor(s)),
                f
              );
            }),
          ),
        )
      );
    });
  }
  createScreenTracks(e) {
    return m(this, void 0, void 0, function* () {
      if (
        (e === void 0 && (e = {}),
        navigator.mediaDevices.getDisplayMedia === void 0)
      )
        throw new fr("getDisplayMedia not supported");
      e.resolution === void 0 &&
        !Hl() &&
        (e.resolution = mr.h1080fps30.resolution);
      const t = Fl(e),
        i = yield navigator.mediaDevices.getDisplayMedia(t),
        r = i.getVideoTracks();
      if (r.length === 0) throw new Fe("no video track found");
      const s = new fe(r[0], void 0, !1, {
        loggerName: this.roomOptions.loggerName,
        loggerContextCb: () => this.logContext,
      });
      (s.source = _.Source.ScreenShare),
        e.contentHint && (s.mediaStreamTrack.contentHint = e.contentHint);
      const o = [s];
      if (i.getAudioTracks().length > 0) {
        this.emit(R.AudioStreamAcquired);
        const a = new de(i.getAudioTracks()[0], void 0, !1, this.audioContext, {
          loggerName: this.roomOptions.loggerName,
          loggerContextCb: () => this.logContext,
        });
        (a.source = _.Source.ScreenShareAudio), o.push(a);
      }
      return o;
    });
  }
  publishTrack(e, t) {
    return m(this, void 0, void 0, function* () {
      return this.publishOrRepublishTrack(e, t);
    });
  }
  publishOrRepublishTrack(e, t) {
    return m(this, arguments, void 0, function (i, r) {
      var s = this;
      let o =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      return (function* () {
        var a, c, d, u;
        i instanceof de && i.setAudioContext(s.audioContext),
          yield (a = s.reconnectFuture) === null || a === void 0
            ? void 0
            : a.promise,
          s.republishPromise && !o && (yield s.republishPromise),
          i instanceof It &&
            s.pendingPublishPromises.has(i) &&
            (yield s.pendingPublishPromises.get(i));
        let l;
        if (i instanceof MediaStreamTrack) l = i.getConstraints();
        else {
          l = i.constraints;
          let v;
          switch (i.source) {
            case _.Source.Microphone:
              v = "audioinput";
              break;
            case _.Source.Camera:
              v = "videoinput";
          }
          v &&
            s.activeDeviceMap.has(v) &&
            (l = Object.assign(Object.assign({}, l), {
              deviceId: s.activeDeviceMap.get(v),
            }));
        }
        if (i instanceof MediaStreamTrack)
          switch (i.kind) {
            case "audio":
              i = new de(i, l, !0, s.audioContext, {
                loggerName: s.roomOptions.loggerName,
                loggerContextCb: () => s.logContext,
              });
              break;
            case "video":
              i = new fe(i, l, !0, {
                loggerName: s.roomOptions.loggerName,
                loggerContextCb: () => s.logContext,
              });
              break;
            default:
              throw new Fe("unsupported MediaStreamTrack kind ".concat(i.kind));
          }
        else
          i.updateLoggerOptions({
            loggerName: s.roomOptions.loggerName,
            loggerContextCb: () => s.logContext,
          });
        let h;
        if (
          (s.trackPublications.forEach((v) => {
            v.track && v.track === i && (h = v);
          }),
          h)
        )
          return (
            s.log.warn(
              "track has already been published, skipping",
              Object.assign(Object.assign({}, s.logContext), H(h)),
            ),
            h
          );
        const f =
            ("channelCount" in i.mediaStreamTrack.getSettings() &&
              i.mediaStreamTrack.getSettings().channelCount === 2) ||
            i.mediaStreamTrack.getConstraints().channelCount === 2,
          g = (c = r?.forceStereo) !== null && c !== void 0 ? c : f;
        g &&
          (r || (r = {}),
          r.dtx === void 0 &&
            s.log.info(
              "Opus DTX will be disabled for stereo tracks by default. Enable them explicitly to make it work.",
              Object.assign(Object.assign({}, s.logContext), H(i)),
            ),
          r.red === void 0 &&
            s.log.info(
              "Opus RED will be disabled for stereo tracks by default. Enable them explicitly to make it work.",
            ),
          ((d = r.dtx) !== null && d !== void 0) || (r.dtx = !1),
          ((u = r.red) !== null && u !== void 0) || (r.red = !1));
        const p = Object.assign(
          Object.assign({}, s.roomOptions.publishDefaults),
          r,
        );
        !Jl() &&
          s.roomOptions.e2ee &&
          (s.log.info(
            "End-to-end encryption is set up, simulcast publishing will be disabled on Safari versions and iOS browsers running iOS < v17.2",
            Object.assign({}, s.logContext),
          ),
          (p.simulcast = !1)),
          p.source && (i.source = p.source);
        const b = s.publish(i, p, g);
        s.pendingPublishPromises.set(i, b);
        try {
          return yield b;
        } catch (v) {
          throw v;
        } finally {
          s.pendingPublishPromises.delete(i);
        }
      })();
    });
  }
  publish(e, t, i) {
    return m(this, void 0, void 0, function* () {
      var r, s, o, a, c, d, u, l, h, f;
      Array.from(this.trackPublications.values()).find(
        (y) => e instanceof It && y.source === e.source,
      ) &&
        e.source !== _.Source.Unknown &&
        this.log.info(
          "publishing a second track with the same source: ".concat(e.source),
          Object.assign(Object.assign({}, this.logContext), H(e)),
        ),
        t.stopMicTrackOnMute && e instanceof de && (e.stopOnMute = !0),
        e.source === _.Source.ScreenShare && Mt() && (t.simulcast = !1),
        t.videoCodec === "av1" && !Gl() && (t.videoCodec = void 0),
        t.videoCodec === "vp9" && !Wl() && (t.videoCodec = void 0),
        t.videoCodec === void 0 && (t.videoCodec = Qi),
        this.enabledPublishVideoCodecs.length > 0 &&
          (this.enabledPublishVideoCodecs.some(
            (y) => t.videoCodec === Rn(y.mime),
          ) ||
            (t.videoCodec = Rn(this.enabledPublishVideoCodecs[0].mime)));
      const p = t.videoCodec;
      e.on(M.Muted, this.onTrackMuted),
        e.on(M.Unmuted, this.onTrackUnmuted),
        e.on(M.Ended, this.handleTrackEnded),
        e.on(M.UpstreamPaused, this.onTrackUpstreamPaused),
        e.on(M.UpstreamResumed, this.onTrackUpstreamResumed),
        e.on(M.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate);
      const b = new Mi({
        cid: e.mediaStreamTrack.id,
        name: t.name,
        type: _.kindToProto(e.kind),
        muted: e.isMuted,
        source: _.sourceToProto(e.source),
        disableDtx: !(!((r = t.dtx) !== null && r !== void 0) || r),
        encryption: this.encryptionType,
        stereo: i,
        disableRed:
          this.isE2EEEnabled || !(!((s = t.red) !== null && s !== void 0) || s),
        stream: t?.stream,
      });
      let v;
      if (e.kind === _.Kind.Video) {
        let y = { width: 0, height: 0 };
        try {
          y = yield e.waitForDimensions();
        } catch {
          const S =
            (a =
              (o = this.roomOptions.videoCaptureDefaults) === null ||
              o === void 0
                ? void 0
                : o.resolution) !== null && a !== void 0
              ? a
              : tn.h720.resolution;
          (y = { width: S.width, height: S.height }),
            this.log.error(
              "could not determine track dimensions, using defaults",
              Object.assign(
                Object.assign(Object.assign({}, this.logContext), H(e)),
                { dims: y },
              ),
            );
        }
        (b.width = y.width),
          (b.height = y.height),
          e instanceof fe &&
            (Jt(p) &&
              (e.source === _.Source.ScreenShare &&
                ((t.scalabilityMode = "L1T3"),
                "contentHint" in e.mediaStreamTrack &&
                  ((e.mediaStreamTrack.contentHint = "motion"),
                  this.log.info(
                    "forcing contentHint to motion for screenshare with SVC codecs",
                    Object.assign(Object.assign({}, this.logContext), H(e)),
                  ))),
              (t.scalabilityMode =
                (c = t.scalabilityMode) !== null && c !== void 0
                  ? c
                  : "L3T3_KEY")),
            (b.simulcastCodecs = [
              new Di({ codec: p, cid: e.mediaStreamTrack.id }),
            ]),
            t.backupCodec === !0 && (t.backupCodec = { codec: Qi }),
            t.backupCodec &&
              p !== t.backupCodec.codec &&
              b.encryption === Pe.NONE &&
              (this.roomOptions.dynacast || (this.roomOptions.dynacast = !0),
              b.simulcastCodecs.push(
                new Di({ codec: t.backupCodec.codec, cid: "" }),
              ))),
          (v = Xi(e.source === _.Source.ScreenShare, b.width, b.height, t)),
          (b.layers = Rs(b.width, b.height, v, Jt(t.videoCodec)));
      } else
        e.kind === _.Kind.Audio &&
          (v = [
            {
              maxBitrate:
                (d = t.audioPreset) === null || d === void 0
                  ? void 0
                  : d.maxBitrate,
              priority:
                (l =
                  (u = t.audioPreset) === null || u === void 0
                    ? void 0
                    : u.priority) !== null && l !== void 0
                  ? l
                  : "high",
              networkPriority:
                (f =
                  (h = t.audioPreset) === null || h === void 0
                    ? void 0
                    : h.priority) !== null && f !== void 0
                  ? f
                  : "high",
            },
          ]);
      if (!this.engine || this.engine.isClosed)
        throw new re("cannot publish track when not connected");
      const D = () =>
        m(this, void 0, void 0, function* () {
          var y, w, S;
          if (!this.engine.pcManager) throw new re("pcManager is not ready");
          if (
            ((e.sender = yield this.engine.createSender(e, t, v)),
            e instanceof fe &&
              (((y = t.degradationPreference) !== null && y !== void 0) ||
                (t.degradationPreference = wh(e)),
              e.setDegradationPreference(t.degradationPreference)),
            v)
          )
            if (Mt() && e.kind === _.Kind.Audio) {
              let A;
              for (const N of this.engine.pcManager.publisher.getTransceivers())
                if (N.sender === e.sender) {
                  A = N;
                  break;
                }
              A &&
                this.engine.pcManager.publisher.setTrackCodecBitrate({
                  transceiver: A,
                  codec: "opus",
                  maxbr:
                    !((w = v[0]) === null || w === void 0) && w.maxBitrate
                      ? v[0].maxBitrate / 1e3
                      : 0,
                });
            } else
              e.codec &&
                Jt(e.codec) &&
                !((S = v[0]) === null || S === void 0) &&
                S.maxBitrate &&
                this.engine.pcManager.publisher.setTrackCodecBitrate({
                  cid: b.cid,
                  codec: e.codec,
                  maxbr: v[0].maxBitrate / 1e3,
                });
          yield this.engine.negotiate();
        });
      let C;
      if (this.enabledPublishVideoCodecs.length > 0)
        C = (yield Promise.all([this.engine.addTrack(b), D()]))[0];
      else {
        C = yield this.engine.addTrack(b);
        let y;
        if (
          (C.codecs.forEach((w) => {
            y === void 0 && (y = w.mimeType);
          }),
          y && e.kind === _.Kind.Video)
        ) {
          const w = Rn(y);
          w !== p &&
            (this.log.debug(
              "falling back to server selected codec",
              Object.assign(
                Object.assign(Object.assign({}, this.logContext), H(e)),
                { codec: w },
              ),
            ),
            (t.videoCodec = w),
            (v = Xi(e.source === _.Source.ScreenShare, b.width, b.height, t)));
        }
        yield D();
      }
      const k = new Ln(e.kind, C, e, {
        loggerName: this.roomOptions.loggerName,
        loggerContextCb: () => this.logContext,
      });
      return (
        (k.options = t),
        (e.sid = C.sid),
        this.log.debug(
          "publishing ".concat(e.kind, " with encodings"),
          Object.assign(Object.assign({}, this.logContext), {
            encodings: v,
            trackInfo: C,
          }),
        ),
        e instanceof fe
          ? e.startMonitor(this.engine.client)
          : e instanceof de && e.startMonitor(),
        this.addTrackPublication(k),
        this.emit(R.LocalTrackPublished, k),
        k
      );
    });
  }
  get isLocal() {
    return !0;
  }
  publishAdditionalCodecForTrack(e, t, i) {
    return m(this, void 0, void 0, function* () {
      var r;
      if (this.encryptionType !== Pe.NONE) return;
      let s;
      if (
        (this.trackPublications.forEach((f) => {
          f.track && f.track === e && (s = f);
        }),
        !s)
      )
        throw new Fe("track is not published");
      if (!(e instanceof fe)) throw new Fe("track is not a video track");
      const o = Object.assign(
          Object.assign(
            {},
            (r = this.roomOptions) === null || r === void 0
              ? void 0
              : r.publishDefaults,
          ),
          i,
        ),
        a = Ch(e, t, o);
      if (!a) {
        this.log.info(
          "backup codec has been disabled, ignoring request to add additional codec for track",
          Object.assign(Object.assign({}, this.logContext), H(e)),
        );
        return;
      }
      const c = e.addSimulcastTrack(t, a);
      if (!c) return;
      const d = new Mi({
        cid: c.mediaStreamTrack.id,
        type: _.kindToProto(e.kind),
        muted: e.isMuted,
        source: _.sourceToProto(e.source),
        sid: e.sid,
        simulcastCodecs: [{ codec: o.videoCodec, cid: c.mediaStreamTrack.id }],
      });
      if (
        ((d.layers = Rs(d.width, d.height, a)),
        !this.engine || this.engine.isClosed)
      )
        throw new re("cannot publish track when not connected");
      const u = () =>
          m(this, void 0, void 0, function* () {
            yield this.engine.createSimulcastSender(e, c, o, a),
              yield this.engine.negotiate();
          }),
        h = (yield Promise.all([this.engine.addTrack(d), u()]))[0];
      this.log.debug(
        "published ".concat(t, " for track ").concat(e.sid),
        Object.assign(Object.assign({}, this.logContext), {
          encodings: a,
          trackInfo: h,
        }),
      );
    });
  }
  unpublishTrack(e, t) {
    return m(this, void 0, void 0, function* () {
      var i, r;
      if (e instanceof It) {
        const d = this.pendingPublishPromises.get(e);
        d &&
          (this.log.info(
            "awaiting publish promise before attempting to unpublish",
            Object.assign(Object.assign({}, this.logContext), H(e)),
          ),
          yield d);
      }
      const s = this.getPublicationForTrack(e),
        o = s ? H(s) : void 0;
      if (
        (this.log.debug(
          "unpublishing track",
          Object.assign(Object.assign({}, this.logContext), o),
        ),
        !s || !s.track)
      ) {
        this.log.warn(
          "track was not unpublished because no publication was found",
          Object.assign(Object.assign({}, this.logContext), o),
        );
        return;
      }
      (e = s.track),
        e.off(M.Muted, this.onTrackMuted),
        e.off(M.Unmuted, this.onTrackUnmuted),
        e.off(M.Ended, this.handleTrackEnded),
        e.off(M.UpstreamPaused, this.onTrackUpstreamPaused),
        e.off(M.UpstreamResumed, this.onTrackUpstreamResumed),
        e.off(M.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate),
        t === void 0 &&
          (t =
            (r =
              (i = this.roomOptions) === null || i === void 0
                ? void 0
                : i.stopLocalTrackOnUnpublish) !== null && r !== void 0
              ? r
              : !0),
        t && e.stop();
      let a = !1;
      const c = e.sender;
      if (
        ((e.sender = void 0),
        this.engine.pcManager &&
          this.engine.pcManager.currentState < te.FAILED &&
          c)
      )
        try {
          for (const d of this.engine.pcManager.publisher.getTransceivers())
            d.sender === c && ((d.direction = "inactive"), (a = !0));
          if ((this.engine.removeTrack(c) && (a = !0), e instanceof fe)) {
            for (const [, d] of e.simulcastCodecs)
              d.sender &&
                (this.engine.removeTrack(d.sender) && (a = !0),
                (d.sender = void 0));
            e.simulcastCodecs.clear();
          }
        } catch (d) {
          this.log.warn(
            "failed to unpublish track",
            Object.assign(
              Object.assign(Object.assign({}, this.logContext), o),
              { error: d },
            ),
          );
        }
      switch ((this.trackPublications.delete(s.trackSid), s.kind)) {
        case _.Kind.Audio:
          this.audioTrackPublications.delete(s.trackSid);
          break;
        case _.Kind.Video:
          this.videoTrackPublications.delete(s.trackSid);
          break;
      }
      return (
        this.emit(R.LocalTrackUnpublished, s),
        s.setTrack(void 0),
        a && (yield this.engine.negotiate()),
        s
      );
    });
  }
  unpublishTracks(e) {
    return m(this, void 0, void 0, function* () {
      return (yield Promise.all(e.map((i) => this.unpublishTrack(i)))).filter(
        (i) => i instanceof Ln,
      );
    });
  }
  republishAllTracks(e) {
    return m(this, arguments, void 0, function (t) {
      var i = this;
      let r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return (function* () {
        i.republishPromise && (yield i.republishPromise),
          (i.republishPromise = new Promise((s, o) =>
            m(i, void 0, void 0, function* () {
              try {
                const a = [];
                this.trackPublications.forEach((c) => {
                  c.track &&
                    (t &&
                      (c.options = Object.assign(
                        Object.assign({}, c.options),
                        t,
                      )),
                    a.push(c));
                }),
                  yield Promise.all(
                    a.map((c) =>
                      m(this, void 0, void 0, function* () {
                        const d = c.track;
                        yield this.unpublishTrack(d, !1),
                          r &&
                            !d.isMuted &&
                            d.source !== _.Source.ScreenShare &&
                            d.source !== _.Source.ScreenShareAudio &&
                            (d instanceof de || d instanceof fe) &&
                            !d.isUserProvided &&
                            (this.log.debug(
                              "restarting existing track",
                              Object.assign(
                                Object.assign({}, this.logContext),
                                { track: c.trackSid },
                              ),
                            ),
                            yield d.restartTrack()),
                          yield this.publishOrRepublishTrack(d, c.options, !0);
                      }),
                    ),
                  ),
                  s();
              } catch (a) {
                o(a);
              } finally {
                this.republishPromise = void 0;
              }
            }),
          )),
          yield i.republishPromise;
      })();
    });
  }
  publishData(e) {
    return m(this, arguments, void 0, function (t) {
      var i = this;
      let r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return (function* () {
        const s = r.reliable ? Q.RELIABLE : Q.LOSSY,
          o = r.destinationIdentities,
          a = r.topic,
          c = new Xe({
            kind: s,
            value: {
              case: "user",
              value: new No({
                participantIdentity: i.identity,
                payload: t,
                destinationIdentities: o,
                topic: a,
              }),
            },
          });
        yield i.engine.sendDataPacket(c, s);
      })();
    });
  }
  publishDtmf(e, t) {
    return m(this, void 0, void 0, function* () {
      const i = new Xe({
        kind: Q.RELIABLE,
        value: { case: "sipDtmf", value: new Lo({ code: e, digit: t }) },
      });
      yield this.engine.sendDataPacket(i, Q.RELIABLE);
    });
  }
  sendChatMessage(e) {
    return m(this, void 0, void 0, function* () {
      const t = { id: crypto.randomUUID(), message: e, timestamp: Date.now() },
        i = new Xe({
          value: {
            case: "chatMessage",
            value: new xi(
              Object.assign(Object.assign({}, t), {
                timestamp: X.parse(t.timestamp),
              }),
            ),
          },
        });
      return (
        yield this.engine.sendDataPacket(i, Q.RELIABLE),
        this.emit(R.ChatMessage, t),
        t
      );
    });
  }
  editChatMessage(e, t) {
    return m(this, void 0, void 0, function* () {
      const i = Object.assign(Object.assign({}, t), {
          message: e,
          editTimestamp: Date.now(),
        }),
        r = new Xe({
          value: {
            case: "chatMessage",
            value: new xi(
              Object.assign(Object.assign({}, i), {
                timestamp: X.parse(i.timestamp),
                editTimestamp: X.parse(i.editTimestamp),
              }),
            ),
          },
        });
      return (
        yield this.engine.sendDataPacket(r, Q.RELIABLE),
        this.emit(R.ChatMessage, i),
        i
      );
    });
  }
  performRpc(e) {
    return m(this, arguments, void 0, function (t) {
      var i = this;
      let {
        destinationIdentity: r,
        method: s,
        payload: o,
        responseTimeout: a = 1e4,
      } = t;
      return (function* () {
        return new Promise((d, u) =>
          m(i, void 0, void 0, function* () {
            var l, h, f, g;
            if (Zi(o) > As) {
              u(ee.builtIn("REQUEST_PAYLOAD_TOO_LARGE"));
              return;
            }
            if (
              !(
                (h =
                  (l = this.engine.latestJoinResponse) === null || l === void 0
                    ? void 0
                    : l.serverInfo) === null || h === void 0
              ) &&
              h.version &&
              Ot(
                (g =
                  (f = this.engine.latestJoinResponse) === null || f === void 0
                    ? void 0
                    : f.serverInfo) === null || g === void 0
                  ? void 0
                  : g.version,
                "1.8.0",
              ) < 0
            ) {
              u(ee.builtIn("UNSUPPORTED_SERVER"));
              return;
            }
            const p = crypto.randomUUID();
            yield this.publishRpcRequest(r, p, s, o, a - 2e3);
            const b = setTimeout(() => {
              this.pendingAcks.delete(p),
                u(ee.builtIn("CONNECTION_TIMEOUT")),
                this.pendingResponses.delete(p),
                clearTimeout(v);
            }, 2e3);
            this.pendingAcks.set(p, {
              resolve: () => {
                clearTimeout(b);
              },
              participantIdentity: r,
            });
            const v = setTimeout(() => {
              this.pendingResponses.delete(p),
                u(ee.builtIn("RESPONSE_TIMEOUT"));
            }, a);
            this.pendingResponses.set(p, {
              resolve: (D, C) => {
                clearTimeout(v),
                  this.pendingAcks.has(p) &&
                    (console.warn("RPC response received before ack", p),
                    this.pendingAcks.delete(p),
                    clearTimeout(b)),
                  C ? u(C) : d(D ?? "");
              },
              participantIdentity: r,
            });
          }),
        );
      })();
    });
  }
  registerRpcMethod(e, t) {
    this.rpcHandlers.set(e, t);
  }
  unregisterRpcMethod(e) {
    this.rpcHandlers.delete(e);
  }
  setTrackSubscriptionPermissions(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (this.participantTrackPermissions = t),
      (this.allParticipantsAllowedToSubscribe = e),
      this.engine.client.isDisconnected ||
        this.updateTrackSubscriptionPermissions();
  }
  handleIncomingRpcAck(e) {
    const t = this.pendingAcks.get(e);
    t
      ? (t.resolve(), this.pendingAcks.delete(e))
      : console.error("Ack received for unexpected RPC request", e);
  }
  handleIncomingRpcResponse(e, t, i) {
    const r = this.pendingResponses.get(e);
    r
      ? (r.resolve(t, i), this.pendingResponses.delete(e))
      : console.error("Response received for unexpected RPC request", e);
  }
  handleIncomingRpcRequest(e, t, i, r, s, o) {
    return m(this, void 0, void 0, function* () {
      if ((yield this.publishRpcAck(e, t), o !== 1)) {
        yield this.publishRpcResponse(
          e,
          t,
          null,
          ee.builtIn("UNSUPPORTED_VERSION"),
        );
        return;
      }
      const a = this.rpcHandlers.get(i);
      if (!a) {
        yield this.publishRpcResponse(
          e,
          t,
          null,
          ee.builtIn("UNSUPPORTED_METHOD"),
        );
        return;
      }
      let c = null,
        d = null;
      try {
        const u = yield a({
          requestId: t,
          callerIdentity: e,
          payload: r,
          responseTimeout: s,
        });
        Zi(u) > As
          ? ((c = ee.builtIn("RESPONSE_PAYLOAD_TOO_LARGE")),
            console.warn("RPC Response payload too large for ".concat(i)))
          : (d = u);
      } catch (u) {
        u instanceof ee
          ? (c = u)
          : (console.warn(
              "Uncaught error returned by RPC handler for ".concat(
                i,
                ". Returning APPLICATION_ERROR instead.",
              ),
              u,
            ),
            (c = ee.builtIn("APPLICATION_ERROR")));
      }
      yield this.publishRpcResponse(e, t, d, c);
    });
  }
  publishRpcRequest(e, t, i, r, s) {
    return m(this, void 0, void 0, function* () {
      const o = new Xe({
        destinationIdentities: [e],
        kind: Q.RELIABLE,
        value: {
          case: "rpcRequest",
          value: new Uo({
            id: t,
            method: i,
            payload: r,
            responseTimeoutMs: s,
            version: 1,
          }),
        },
      });
      yield this.engine.sendDataPacket(o, Q.RELIABLE);
    });
  }
  publishRpcResponse(e, t, i, r) {
    return m(this, void 0, void 0, function* () {
      const s = new Xe({
        destinationIdentities: [e],
        kind: Q.RELIABLE,
        value: {
          case: "rpcResponse",
          value: new jo({
            requestId: t,
            value: r
              ? { case: "error", value: r.toProto() }
              : { case: "payload", value: i ?? "" },
          }),
        },
      });
      yield this.engine.sendDataPacket(s, Q.RELIABLE);
    });
  }
  publishRpcAck(e, t) {
    return m(this, void 0, void 0, function* () {
      const i = new Xe({
        destinationIdentities: [e],
        kind: Q.RELIABLE,
        value: { case: "rpcAck", value: new Fo({ requestId: t }) },
      });
      yield this.engine.sendDataPacket(i, Q.RELIABLE);
    });
  }
  handleParticipantDisconnected(e) {
    for (const [t, { participantIdentity: i }] of this.pendingAcks)
      i === e && this.pendingAcks.delete(t);
    for (const [t, { participantIdentity: i, resolve: r }] of this
      .pendingResponses)
      i === e &&
        (r(null, ee.builtIn("RECIPIENT_DISCONNECTED")),
        this.pendingResponses.delete(t));
  }
  setEnabledPublishCodecs(e) {
    this.enabledPublishVideoCodecs = e.filter(
      (t) => t.mime.split("/")[0].toLowerCase() === "video",
    );
  }
  updateInfo(e) {
    return e.sid !== this.sid || !super.updateInfo(e)
      ? !1
      : (e.tracks.forEach((t) => {
          var i, r;
          const s = this.trackPublications.get(t.sid);
          if (s) {
            const o =
              s.isMuted ||
              ((r =
                (i = s.track) === null || i === void 0
                  ? void 0
                  : i.isUpstreamPaused) !== null && r !== void 0
                ? r
                : !1);
            o !== t.muted &&
              (this.log.debug(
                "updating server mute state after reconcile",
                Object.assign(
                  Object.assign(Object.assign({}, this.logContext), H(s)),
                  { mutedOnServer: o },
                ),
              ),
              this.engine.client.sendMuteTrack(t.sid, o));
          }
        }),
        !0);
  }
  getPublicationForTrack(e) {
    let t;
    return (
      this.trackPublications.forEach((i) => {
        const r = i.track;
        r &&
          (e instanceof MediaStreamTrack
            ? (r instanceof de || r instanceof fe) &&
              r.mediaStreamTrack === e &&
              (t = i)
            : e === r && (t = i));
      }),
      t
    );
  }
  waitForPendingPublicationOfSource(e) {
    return m(this, void 0, void 0, function* () {
      const t = Array.from(this.pendingPublishPromises.entries()).find((i) => {
        let [r] = i;
        return r.source === e;
      });
      if (t) return t[1];
    });
  }
}
class $a extends qe {
  constructor(e, t, i, r) {
    super(e, t.sid, t.name, r),
      (this.track = void 0),
      (this.allowed = !0),
      (this.disabled = !1),
      (this.currentVideoQuality = Ee.HIGH),
      (this.handleEnded = (s) => {
        this.setTrack(void 0), this.emit(M.Ended, s);
      }),
      (this.handleVisibilityChange = (s) => {
        this.log.debug(
          "adaptivestream video visibility "
            .concat(this.trackSid, ", visible=")
            .concat(s),
          this.logContext,
        ),
          (this.disabled = !s),
          this.emitTrackUpdate();
      }),
      (this.handleVideoDimensionsChange = (s) => {
        this.log.debug(
          "adaptivestream video dimensions "
            .concat(s.width, "x")
            .concat(s.height),
          this.logContext,
        ),
          (this.videoDimensions = s),
          this.emitTrackUpdate();
      }),
      (this.subscribed = i),
      this.updateInfo(t);
  }
  setSubscribed(e) {
    const t = this.subscriptionStatus,
      i = this.permissionStatus;
    (this.subscribed = e), e && (this.allowed = !0);
    const r = new Kn({
      trackSids: [this.trackSid],
      subscribe: this.subscribed,
      participantTracks: [
        new Vo({ participantSid: "", trackSids: [this.trackSid] }),
      ],
    });
    this.emit(M.UpdateSubscription, r),
      this.emitSubscriptionUpdateIfChanged(t),
      this.emitPermissionUpdateIfChanged(i);
  }
  get subscriptionStatus() {
    return this.subscribed === !1
      ? qe.SubscriptionStatus.Unsubscribed
      : super.isSubscribed
        ? qe.SubscriptionStatus.Subscribed
        : qe.SubscriptionStatus.Desired;
  }
  get permissionStatus() {
    return this.allowed
      ? qe.PermissionStatus.Allowed
      : qe.PermissionStatus.NotAllowed;
  }
  get isSubscribed() {
    return this.subscribed === !1 ? !1 : super.isSubscribed;
  }
  get isDesired() {
    return this.subscribed !== !1;
  }
  get isEnabled() {
    return !this.disabled;
  }
  setEnabled(e) {
    !this.isManualOperationAllowed() ||
      this.disabled === !e ||
      ((this.disabled = !e), this.emitTrackUpdate());
  }
  setVideoQuality(e) {
    !this.isManualOperationAllowed() ||
      this.currentVideoQuality === e ||
      ((this.currentVideoQuality = e),
      (this.videoDimensions = void 0),
      this.emitTrackUpdate());
  }
  setVideoDimensions(e) {
    var t, i;
    this.isManualOperationAllowed() &&
      ((((t = this.videoDimensions) === null || t === void 0
        ? void 0
        : t.width) === e.width &&
        ((i = this.videoDimensions) === null || i === void 0
          ? void 0
          : i.height) === e.height) ||
        (this.track instanceof $t && (this.videoDimensions = e),
        (this.currentVideoQuality = void 0),
        this.emitTrackUpdate()));
  }
  setVideoFPS(e) {
    this.isManualOperationAllowed() &&
      this.track instanceof $t &&
      this.fps !== e &&
      ((this.fps = e), this.emitTrackUpdate());
  }
  get videoQuality() {
    return this.currentVideoQuality;
  }
  setTrack(e) {
    const t = this.subscriptionStatus,
      i = this.permissionStatus,
      r = this.track;
    r !== e &&
      (r &&
        (r.off(M.VideoDimensionsChanged, this.handleVideoDimensionsChange),
        r.off(M.VisibilityChanged, this.handleVisibilityChange),
        r.off(M.Ended, this.handleEnded),
        r.detach(),
        r.stopMonitor(),
        this.emit(M.Unsubscribed, r)),
      super.setTrack(e),
      e &&
        ((e.sid = this.trackSid),
        e.on(M.VideoDimensionsChanged, this.handleVideoDimensionsChange),
        e.on(M.VisibilityChanged, this.handleVisibilityChange),
        e.on(M.Ended, this.handleEnded),
        this.emit(M.Subscribed, e)),
      this.emitPermissionUpdateIfChanged(i),
      this.emitSubscriptionUpdateIfChanged(t));
  }
  setAllowed(e) {
    const t = this.subscriptionStatus,
      i = this.permissionStatus;
    (this.allowed = e),
      this.emitPermissionUpdateIfChanged(i),
      this.emitSubscriptionUpdateIfChanged(t);
  }
  setSubscriptionError(e) {
    this.emit(M.SubscriptionFailed, e);
  }
  updateInfo(e) {
    super.updateInfo(e);
    const t = this.metadataMuted;
    (this.metadataMuted = e.muted),
      this.track
        ? this.track.setMuted(e.muted)
        : t !== e.muted && this.emit(e.muted ? M.Muted : M.Unmuted);
  }
  emitSubscriptionUpdateIfChanged(e) {
    const t = this.subscriptionStatus;
    e !== t && this.emit(M.SubscriptionStatusChanged, t, e);
  }
  emitPermissionUpdateIfChanged(e) {
    this.permissionStatus !== e &&
      this.emit(M.SubscriptionPermissionChanged, this.permissionStatus, e);
  }
  isManualOperationAllowed() {
    return this.kind === _.Kind.Video && this.isAdaptiveStream
      ? (this.log.warn(
          "adaptive stream is enabled, cannot change video track settings",
          this.logContext,
        ),
        !1)
      : this.isDesired
        ? !0
        : (this.log.warn(
            "cannot update track settings when not subscribed",
            this.logContext,
          ),
          !1);
  }
  get isAdaptiveStream() {
    return this.track instanceof $t && this.track.isAdaptiveStream;
  }
  emitTrackUpdate() {
    const e = new Ko({
      trackSids: [this.trackSid],
      disabled: this.disabled,
      fps: this.fps,
    });
    this.videoDimensions
      ? ((e.width = Math.ceil(this.videoDimensions.width)),
        (e.height = Math.ceil(this.videoDimensions.height)))
      : this.currentVideoQuality !== void 0
        ? (e.quality = this.currentVideoQuality)
        : (e.quality = Ee.HIGH),
      this.emit(M.UpdateSettings, e);
  }
}
class Fn extends Qa {
  static fromParticipantInfo(e, t, i) {
    return new Fn(e, t.sid, t.identity, t.name, t.metadata, i, t.kind);
  }
  get logContext() {
    return Object.assign(Object.assign({}, super.logContext), {
      rpID: this.sid,
      remoteParticipant: this.identity,
    });
  }
  constructor(e, t, i, r, s, o) {
    let a =
      arguments.length > 6 && arguments[6] !== void 0
        ? arguments[6]
        : Mn.STANDARD;
    super(t, i || "", r, s, o, a),
      (this.signalClient = e),
      (this.trackPublications = new Map()),
      (this.audioTrackPublications = new Map()),
      (this.videoTrackPublications = new Map()),
      (this.volumeMap = new Map());
  }
  addTrackPublication(e) {
    super.addTrackPublication(e),
      e.on(M.UpdateSettings, (t) => {
        this.log.debug(
          "send update settings",
          Object.assign(Object.assign({}, this.logContext), H(e)),
        ),
          this.signalClient.sendUpdateTrackSettings(t);
      }),
      e.on(M.UpdateSubscription, (t) => {
        t.participantTracks.forEach((i) => {
          i.participantSid = this.sid;
        }),
          this.signalClient.sendUpdateSubscription(t);
      }),
      e.on(M.SubscriptionPermissionChanged, (t) => {
        this.emit(R.TrackSubscriptionPermissionChanged, e, t);
      }),
      e.on(M.SubscriptionStatusChanged, (t) => {
        this.emit(R.TrackSubscriptionStatusChanged, e, t);
      }),
      e.on(M.Subscribed, (t) => {
        this.emit(R.TrackSubscribed, t, e);
      }),
      e.on(M.Unsubscribed, (t) => {
        this.emit(R.TrackUnsubscribed, t, e);
      }),
      e.on(M.SubscriptionFailed, (t) => {
        this.emit(R.TrackSubscriptionFailed, e.trackSid, t);
      });
  }
  getTrackPublication(e) {
    const t = super.getTrackPublication(e);
    if (t) return t;
  }
  getTrackPublicationByName(e) {
    const t = super.getTrackPublicationByName(e);
    if (t) return t;
  }
  setVolume(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : _.Source.Microphone;
    this.volumeMap.set(t, e);
    const i = this.getTrackPublication(t);
    i && i.track && i.track.setVolume(e);
  }
  getVolume() {
    let e =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : _.Source.Microphone;
    const t = this.getTrackPublication(e);
    return t && t.track ? t.track.getVolume() : this.volumeMap.get(e);
  }
  addSubscribedMediaTrack(e, t, i, r, s, o) {
    let a = this.getTrackPublicationBySid(t);
    if (
      (a ||
        t.startsWith("TR") ||
        this.trackPublications.forEach((u) => {
          !a && e.kind === u.kind.toString() && (a = u);
        }),
      !a)
    ) {
      if (o === 0) {
        this.log.error(
          "could not find published track",
          Object.assign(Object.assign({}, this.logContext), { trackSid: t }),
        ),
          this.emit(R.TrackSubscriptionFailed, t);
        return;
      }
      o === void 0 && (o = 20),
        setTimeout(() => {
          this.addSubscribedMediaTrack(e, t, i, r, s, o - 1);
        }, 150);
      return;
    }
    if (e.readyState === "ended") {
      this.log.error(
        "unable to subscribe because MediaStreamTrack is ended. Do not call MediaStreamTrack.stop()",
        Object.assign(Object.assign({}, this.logContext), H(a)),
      ),
        this.emit(R.TrackSubscriptionFailed, t);
      return;
    }
    const c = e.kind === "video";
    let d;
    return (
      c
        ? (d = new $t(e, t, r, s))
        : (d = new Qt(e, t, r, this.audioContext, this.audioOutput)),
      (d.source = a.source),
      (d.isMuted = a.isMuted),
      d.setMediaStream(i),
      d.start(),
      a.setTrack(d),
      this.volumeMap.has(a.source) &&
        d instanceof Qt &&
        d.setVolume(this.volumeMap.get(a.source)),
      a
    );
  }
  get hasMetadata() {
    return !!this.participantInfo;
  }
  getTrackPublicationBySid(e) {
    return this.trackPublications.get(e);
  }
  updateInfo(e) {
    if (!super.updateInfo(e)) return !1;
    const t = new Map(),
      i = new Map();
    return (
      e.tracks.forEach((r) => {
        var s, o;
        let a = this.getTrackPublicationBySid(r.sid);
        if (a) a.updateInfo(r);
        else {
          const c = _.kindFromProto(r.type);
          if (!c) return;
          (a = new $a(
            c,
            r,
            (s = this.signalClient.connectOptions) === null || s === void 0
              ? void 0
              : s.autoSubscribe,
            {
              loggerContextCb: () => this.logContext,
              loggerName:
                (o = this.loggerOptions) === null || o === void 0
                  ? void 0
                  : o.loggerName,
            },
          )),
            a.updateInfo(r),
            i.set(r.sid, a);
          const d = Array.from(this.trackPublications.values()).find(
            (u) => u.source === a?.source,
          );
          d &&
            a.source !== _.Source.Unknown &&
            this.log.debug(
              "received a second track publication for "
                .concat(this.identity, " with the same source: ")
                .concat(a.source),
              Object.assign(Object.assign({}, this.logContext), {
                oldTrack: H(d),
                newTrack: H(a),
              }),
            ),
            this.addTrackPublication(a);
        }
        t.set(r.sid, a);
      }),
      this.trackPublications.forEach((r) => {
        t.has(r.trackSid) ||
          (this.log.trace(
            "detected removed track on remote participant, unpublishing",
            Object.assign(Object.assign({}, this.logContext), H(r)),
          ),
          this.unpublishTrack(r.trackSid, !0));
      }),
      i.forEach((r) => {
        this.emit(R.TrackPublished, r);
      }),
      !0
    );
  }
  unpublishTrack(e, t) {
    const i = this.trackPublications.get(e);
    if (!i) return;
    const { track: r } = i;
    switch (
      (r && (r.stop(), i.setTrack(void 0)),
      this.trackPublications.delete(e),
      i.kind)
    ) {
      case _.Kind.Audio:
        this.audioTrackPublications.delete(e);
        break;
      case _.Kind.Video:
        this.videoTrackPublications.delete(e);
        break;
    }
    t && this.emit(R.TrackUnpublished, i);
  }
  setAudioOutput(e) {
    return m(this, void 0, void 0, function* () {
      this.audioOutput = e;
      const t = [];
      this.audioTrackPublications.forEach((i) => {
        var r;
        i.track instanceof Qt &&
          t.push(
            i.track.setSinkId(
              (r = e.deviceId) !== null && r !== void 0 ? r : "default",
            ),
          );
      }),
        yield Promise.all(t);
    });
  }
  emit(e) {
    for (
      var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      i[r - 1] = arguments[r];
    return (
      this.log.trace(
        "participant event",
        Object.assign(Object.assign({}, this.logContext), {
          event: e,
          args: i,
        }),
      ),
      super.emit(e, ...i)
    );
  }
}
var V;
(function (n) {
  (n.Disconnected = "disconnected"),
    (n.Connecting = "connecting"),
    (n.Connected = "connected"),
    (n.Reconnecting = "reconnecting"),
    (n.SignalReconnecting = "signalReconnecting");
})(V || (V = {}));
const Fh = 4 * 1e3;
class jh extends Be.EventEmitter {
  constructor(e) {
    var t, i, r;
    super(),
      (t = this),
      (this.state = V.Disconnected),
      (this.activeSpeakers = []),
      (this.isE2EEEnabled = !1),
      (this.audioEnabled = !0),
      (this.isVideoPlaybackBlocked = !1),
      (this.log = q),
      (this.bufferedEvents = []),
      (this.isResuming = !1),
      (this.connect = (s, o, a) =>
        m(this, void 0, void 0, function* () {
          var c;
          if (!Kl())
            throw He()
              ? Error("WebRTC isn't detected, have you called registerGlobals?")
              : Error(
                  "LiveKit doesn't seem to be supported on this browser. Try to update your browser and make sure no browser extensions are disabling webRTC.",
                );
          const d = yield this.disconnectLock.lock();
          if (this.state === V.Connected)
            return (
              this.log.info(
                "already connected to room ".concat(this.name),
                this.logContext,
              ),
              d(),
              Promise.resolve()
            );
          if (this.connectFuture) return d(), this.connectFuture.promise;
          this.setAndEmitConnectionState(V.Connecting),
            ((c = this.regionUrlProvider) === null || c === void 0
              ? void 0
              : c.getServerUrl().toString()) !== s &&
              ((this.regionUrl = void 0), (this.regionUrlProvider = void 0)),
            Yi(new URL(s)) &&
              (this.regionUrlProvider === void 0
                ? (this.regionUrlProvider = new xs(s, o))
                : this.regionUrlProvider.updateToken(o),
              this.regionUrlProvider
                .fetchRegionSettings()
                .then((h) => {
                  var f;
                  (f = this.regionUrlProvider) === null ||
                    f === void 0 ||
                    f.setServerReportedRegions(h);
                })
                .catch((h) => {
                  this.log.warn(
                    "could not fetch region settings",
                    Object.assign(Object.assign({}, this.logContext), {
                      error: h,
                    }),
                  );
                }));
          const u = (h, f, g) =>
              m(this, void 0, void 0, function* () {
                var p, b;
                this.abortController && this.abortController.abort();
                const v = new AbortController();
                (this.abortController = v), d?.();
                try {
                  yield this.attemptConnection(g ?? s, o, a, v),
                    (this.abortController = void 0),
                    h();
                } catch (D) {
                  if (
                    this.regionUrlProvider &&
                    D instanceof J &&
                    D.reason !== me.Cancelled &&
                    D.reason !== me.NotAllowed
                  ) {
                    let C = null;
                    try {
                      C = yield this.regionUrlProvider.getNextBestRegionUrl(
                        (p = this.abortController) === null || p === void 0
                          ? void 0
                          : p.signal,
                      );
                    } catch (k) {
                      if (
                        k instanceof J &&
                        (k.status === 401 || k.reason === me.Cancelled)
                      ) {
                        this.handleDisconnect(
                          this.options.stopLocalTrackOnUnpublish,
                        ),
                          f(k);
                        return;
                      }
                    }
                    C &&
                    !(
                      !((b = this.abortController) === null || b === void 0) &&
                      b.signal.aborted
                    )
                      ? (this.log.info(
                          "Initial connection failed with ConnectionError: "
                            .concat(
                              D.message,
                              ". Retrying with another region: ",
                            )
                            .concat(C),
                          this.logContext,
                        ),
                        this.recreateEngine(),
                        yield u(h, f, C))
                      : (this.handleDisconnect(
                          this.options.stopLocalTrackOnUnpublish,
                        ),
                        f(D));
                  } else
                    this.handleDisconnect(
                      this.options.stopLocalTrackOnUnpublish,
                    ),
                      f(D);
                }
              }),
            l = this.regionUrl;
          return (
            (this.regionUrl = void 0),
            (this.connectFuture = new Ba(
              (h, f) => {
                u(h, f, l);
              },
              () => {
                this.clearConnectionFutures();
              },
            )),
            this.connectFuture.promise
          );
        })),
      (this.connectSignal = (s, o, a, c, d, u) =>
        m(this, void 0, void 0, function* () {
          var l, h, f;
          const g = yield a.join(
            s,
            o,
            {
              autoSubscribe: c.autoSubscribe,
              adaptiveStream:
                typeof d.adaptiveStream == "object" ? !0 : d.adaptiveStream,
              maxRetries: c.maxRetries,
              e2eeEnabled: !!this.e2eeManager,
              websocketTimeout: c.websocketTimeout,
            },
            u.signal,
          );
          let p = g.serverInfo;
          if (
            (p || (p = { version: g.serverVersion, region: g.serverRegion }),
            (this.serverInfo = p),
            this.log.debug(
              "connected to Livekit Server ".concat(
                Object.entries(p)
                  .map((b) => {
                    let [v, D] = b;
                    return "".concat(v, ": ").concat(D);
                  })
                  .join(", "),
              ),
              {
                room: (l = g.room) === null || l === void 0 ? void 0 : l.name,
                roomSid: (h = g.room) === null || h === void 0 ? void 0 : h.sid,
                identity:
                  (f = g.participant) === null || f === void 0
                    ? void 0
                    : f.identity,
              },
            ),
            !p.version)
          )
            throw new wl("unknown server version");
          return (
            p.version === "0.15.1" &&
              this.options.dynacast &&
              (this.log.debug(
                "disabling dynacast due to server version",
                this.logContext,
              ),
              (d.dynacast = !1)),
            g
          );
        })),
      (this.applyJoinResponse = (s) => {
        const o = s.participant;
        if (
          ((this.localParticipant.sid = o.sid),
          (this.localParticipant.identity = o.identity),
          this.localParticipant.setEnabledPublishCodecs(s.enabledPublishCodecs),
          this.options.e2ee && this.e2eeManager)
        )
          try {
            this.e2eeManager.setSifTrailer(s.sifTrailer);
          } catch (a) {
            this.log.error(
              a instanceof Error ? a.message : "Could not set SifTrailer",
              Object.assign(Object.assign({}, this.logContext), { error: a }),
            );
          }
        this.handleParticipantUpdates([o, ...s.otherParticipants]),
          s.room && this.handleRoomUpdate(s.room);
      }),
      (this.attemptConnection = (s, o, a, c) =>
        m(this, void 0, void 0, function* () {
          var d, u, l;
          this.state === V.Reconnecting ||
          this.isResuming ||
          (!((d = this.engine) === null || d === void 0) && d.pendingReconnect)
            ? (this.log.info(
                "Reconnection attempt replaced by new connection attempt",
                this.logContext,
              ),
              this.recreateEngine())
            : this.maybeCreateEngine(),
            !((u = this.regionUrlProvider) === null || u === void 0) &&
              u.isCloud() &&
              this.engine.setRegionUrlProvider(this.regionUrlProvider),
            this.acquireAudioContext(),
            (this.connOptions = Object.assign(Object.assign({}, vr), a)),
            this.connOptions.rtcConfig &&
              (this.engine.rtcConfig = this.connOptions.rtcConfig),
            this.connOptions.peerConnectionTimeout &&
              (this.engine.peerConnectionTimeout =
                this.connOptions.peerConnectionTimeout);
          try {
            const h = yield this.connectSignal(
              s,
              o,
              this.engine,
              this.connOptions,
              this.options,
              c,
            );
            this.applyJoinResponse(h),
              this.setupLocalParticipantEvents(),
              this.emit(P.SignalConnected);
          } catch (h) {
            yield this.engine.close(), this.recreateEngine();
            const f = new J("could not establish signal connection");
            throw (
              (h instanceof Error &&
                (f.message = "".concat(f.message, ": ").concat(h.message)),
              h instanceof J && ((f.reason = h.reason), (f.status = h.status)),
              this.log.debug(
                "error trying to establish signal connection",
                Object.assign(Object.assign({}, this.logContext), { error: h }),
              ),
              f)
            );
          }
          if (c.signal.aborted)
            throw (
              (yield this.engine.close(),
              this.recreateEngine(),
              new J("Connection attempt aborted"))
            );
          try {
            yield this.engine.waitForPCInitialConnection(
              this.connOptions.peerConnectionTimeout,
              c,
            );
          } catch (h) {
            throw (yield this.engine.close(), this.recreateEngine(), h);
          }
          Se() &&
            this.options.disconnectOnPageLeave &&
            (window.addEventListener("pagehide", this.onPageLeave),
            window.addEventListener("beforeunload", this.onPageLeave)),
            Se() &&
              (document.addEventListener("freeze", this.onPageLeave),
              (l = navigator.mediaDevices) === null ||
                l === void 0 ||
                l.addEventListener("devicechange", this.handleDeviceChange)),
            this.setAndEmitConnectionState(V.Connected),
            this.emit(P.Connected),
            this.registerConnectionReconcile();
        })),
      (this.disconnect = function () {
        for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++)
          o[a] = arguments[a];
        return m(t, [...o], void 0, function () {
          var c = this;
          let d =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
          return (function* () {
            var u, l, h, f;
            const g = yield c.disconnectLock.lock();
            try {
              if (c.state === V.Disconnected) {
                c.log.debug("already disconnected", c.logContext);
                return;
              }
              c.log.info(
                "disconnect from room",
                Object.assign({}, c.logContext),
              ),
                (c.state === V.Connecting ||
                  c.state === V.Reconnecting ||
                  c.isResuming) &&
                  (c.log.warn("abort connection attempt", c.logContext),
                  (u = c.abortController) === null || u === void 0 || u.abort(),
                  (h =
                    (l = c.connectFuture) === null || l === void 0
                      ? void 0
                      : l.reject) === null ||
                    h === void 0 ||
                    h.call(l, new J("Client initiated disconnect")),
                  (c.connectFuture = void 0)),
                (!((f = c.engine) === null || f === void 0) &&
                  f.client.isDisconnected) ||
                  (yield c.engine.client.sendLeave()),
                c.engine && (yield c.engine.close()),
                c.handleDisconnect(d, Et.CLIENT_INITIATED),
                (c.engine = void 0);
            } finally {
              g();
            }
          })();
        });
      }),
      (this.onPageLeave = () =>
        m(this, void 0, void 0, function* () {
          this.log.info("Page leave detected, disconnecting", this.logContext),
            yield this.disconnect();
        })),
      (this.startAudio = () =>
        m(this, void 0, void 0, function* () {
          const s = [],
            o = Ke();
          if (o && o.os === "iOS") {
            const a = "livekit-dummy-audio-el";
            let c = document.getElementById(a);
            if (!c) {
              (c = document.createElement("audio")),
                (c.id = a),
                (c.autoplay = !0),
                (c.hidden = !0);
              const d = ci();
              d.enabled = !0;
              const u = new MediaStream([d]);
              (c.srcObject = u),
                document.addEventListener("visibilitychange", () => {
                  c &&
                    ((c.srcObject = document.hidden ? null : u),
                    document.hidden ||
                      (this.log.debug(
                        "page visible again, triggering startAudio to resume playback and update playback status",
                        this.logContext,
                      ),
                      this.startAudio()));
                }),
                document.body.append(c),
                this.once(P.Disconnected, () => {
                  c?.remove(), (c = null);
                });
            }
            s.push(c);
          }
          this.remoteParticipants.forEach((a) => {
            a.audioTrackPublications.forEach((c) => {
              c.track &&
                c.track.attachedElements.forEach((d) => {
                  s.push(d);
                });
            });
          });
          try {
            yield Promise.all([
              this.acquireAudioContext(),
              ...s.map((a) => ((a.muted = !1), a.play())),
            ]),
              this.handleAudioPlaybackStarted();
          } catch (a) {
            throw (this.handleAudioPlaybackFailed(a), a);
          }
        })),
      (this.startVideo = () =>
        m(this, void 0, void 0, function* () {
          const s = [];
          for (const o of this.remoteParticipants.values())
            o.videoTrackPublications.forEach((a) => {
              var c;
              (c = a.track) === null ||
                c === void 0 ||
                c.attachedElements.forEach((d) => {
                  s.includes(d) || s.push(d);
                });
            });
          yield Promise.all(s.map((o) => o.play()))
            .then(() => {
              this.handleVideoPlaybackStarted();
            })
            .catch((o) => {
              o.name === "NotAllowedError"
                ? this.handleVideoPlaybackFailed()
                : this.log.warn(
                    "Resuming video playback failed, make sure you call `startVideo` directly in a user gesture handler",
                    this.logContext,
                  );
            });
        })),
      (this.handleRestarting = () => {
        this.clearConnectionReconcile(), (this.isResuming = !1);
        for (const s of this.remoteParticipants.values())
          this.handleParticipantDisconnected(s.identity, s);
        this.setAndEmitConnectionState(V.Reconnecting) &&
          this.emit(P.Reconnecting);
      }),
      (this.handleSignalRestarted = (s) =>
        m(this, void 0, void 0, function* () {
          this.log.debug(
            "signal reconnected to server, region ".concat(s.serverRegion),
            Object.assign(Object.assign({}, this.logContext), {
              region: s.serverRegion,
            }),
          ),
            (this.bufferedEvents = []),
            this.applyJoinResponse(s);
          try {
            yield this.localParticipant.republishAllTracks(void 0, !0);
          } catch (o) {
            this.log.error(
              "error trying to re-publish tracks after reconnection",
              Object.assign(Object.assign({}, this.logContext), { error: o }),
            );
          }
          try {
            yield this.engine.waitForRestarted(),
              this.log.debug(
                "fully reconnected to server",
                Object.assign(Object.assign({}, this.logContext), {
                  region: s.serverRegion,
                }),
              );
          } catch {
            return;
          }
          this.setAndEmitConnectionState(V.Connected),
            this.emit(P.Reconnected),
            this.registerConnectionReconcile(),
            this.emitBufferedEvents();
        })),
      (this.handleParticipantUpdates = (s) => {
        s.forEach((o) => {
          var a;
          if (o.identity === this.localParticipant.identity) {
            this.localParticipant.updateInfo(o);
            return;
          }
          o.identity === "" &&
            (o.identity =
              (a = this.sidToIdentity.get(o.sid)) !== null && a !== void 0
                ? a
                : "");
          let c = this.remoteParticipants.get(o.identity);
          o.state === Ii.DISCONNECTED
            ? this.handleParticipantDisconnected(o.identity, c)
            : (c = this.getOrCreateParticipant(o.identity, o));
        });
      }),
      (this.handleActiveSpeakersUpdate = (s) => {
        const o = [],
          a = {};
        s.forEach((c) => {
          if (((a[c.sid] = !0), c.sid === this.localParticipant.sid))
            (this.localParticipant.audioLevel = c.level),
              this.localParticipant.setIsSpeaking(!0),
              o.push(this.localParticipant);
          else {
            const d = this.getRemoteParticipantBySid(c.sid);
            d && ((d.audioLevel = c.level), d.setIsSpeaking(!0), o.push(d));
          }
        }),
          a[this.localParticipant.sid] ||
            ((this.localParticipant.audioLevel = 0),
            this.localParticipant.setIsSpeaking(!1)),
          this.remoteParticipants.forEach((c) => {
            a[c.sid] || ((c.audioLevel = 0), c.setIsSpeaking(!1));
          }),
          (this.activeSpeakers = o),
          this.emitWhenConnected(P.ActiveSpeakersChanged, o);
      }),
      (this.handleSpeakersChanged = (s) => {
        const o = new Map();
        this.activeSpeakers.forEach((c) => {
          const d = this.remoteParticipants.get(c.identity);
          (d && d.sid !== c.sid) || o.set(c.sid, c);
        }),
          s.forEach((c) => {
            let d = this.getRemoteParticipantBySid(c.sid);
            c.sid === this.localParticipant.sid && (d = this.localParticipant),
              d &&
                ((d.audioLevel = c.level),
                d.setIsSpeaking(c.active),
                c.active ? o.set(c.sid, d) : o.delete(c.sid));
          });
        const a = Array.from(o.values());
        a.sort((c, d) => d.audioLevel - c.audioLevel),
          (this.activeSpeakers = a),
          this.emitWhenConnected(P.ActiveSpeakersChanged, a);
      }),
      (this.handleStreamStateUpdate = (s) => {
        s.streamStates.forEach((o) => {
          const a = this.getRemoteParticipantBySid(o.participantSid);
          if (!a) return;
          const c = a.getTrackPublicationBySid(o.trackSid);
          if (!c || !c.track) return;
          const d = _.streamStateFromProto(o.state);
          d !== c.track.streamState &&
            ((c.track.streamState = d),
            a.emit(R.TrackStreamStateChanged, c, c.track.streamState),
            this.emitWhenConnected(
              P.TrackStreamStateChanged,
              c,
              c.track.streamState,
              a,
            ));
        });
      }),
      (this.handleSubscriptionPermissionUpdate = (s) => {
        const o = this.getRemoteParticipantBySid(s.participantSid);
        if (!o) return;
        const a = o.getTrackPublicationBySid(s.trackSid);
        a && a.setAllowed(s.allowed);
      }),
      (this.handleSubscriptionError = (s) => {
        const o = Array.from(this.remoteParticipants.values()).find((c) =>
          c.trackPublications.has(s.trackSid),
        );
        if (!o) return;
        const a = o.getTrackPublicationBySid(s.trackSid);
        a && a.setSubscriptionError(s.err);
      }),
      (this.handleDataPacket = (s) => {
        const o = this.remoteParticipants.get(s.participantIdentity);
        s.value.case === "user"
          ? this.handleUserPacket(o, s.value.value, s.kind)
          : s.value.case === "transcription"
            ? this.handleTranscription(o, s.value.value)
            : s.value.case === "sipDtmf"
              ? this.handleSipDtmf(o, s.value.value)
              : s.value.case === "chatMessage"
                ? this.handleChatMessage(o, s.value.value)
                : s.value.case === "metrics" &&
                  this.handleMetrics(s.value.value, o);
      }),
      (this.handleUserPacket = (s, o, a) => {
        this.emit(P.DataReceived, o.payload, s, a, o.topic),
          s?.emit(R.DataReceived, o.payload, a);
      }),
      (this.handleSipDtmf = (s, o) => {
        this.emit(P.SipDTMFReceived, o, s), s?.emit(R.SipDTMFReceived, o);
      }),
      (this.bufferedSegments = new Map()),
      (this.handleTranscription = (s, o) => {
        const a =
            o.transcribedParticipantIdentity === this.localParticipant.identity
              ? this.localParticipant
              : this.getParticipantByIdentity(o.transcribedParticipantIdentity),
          c = a?.trackPublications.get(o.trackId),
          d = eh(o, this.transcriptionReceivedTimes);
        c?.emit(M.TranscriptionReceived, d),
          a?.emit(R.TranscriptionReceived, d, c),
          this.emit(P.TranscriptionReceived, d, a, c);
      }),
      (this.handleChatMessage = (s, o) => {
        const a = th(o);
        this.emit(P.ChatMessage, a, s);
      }),
      (this.handleMetrics = (s, o) => {
        this.emit(P.MetricsReceived, s, o);
      }),
      (this.handleAudioPlaybackStarted = () => {
        this.canPlaybackAudio ||
          ((this.audioEnabled = !0),
          this.emit(P.AudioPlaybackStatusChanged, !0));
      }),
      (this.handleAudioPlaybackFailed = (s) => {
        this.log.warn(
          "could not playback audio",
          Object.assign(Object.assign({}, this.logContext), { error: s }),
        ),
          this.canPlaybackAudio &&
            ((this.audioEnabled = !1),
            this.emit(P.AudioPlaybackStatusChanged, !1));
      }),
      (this.handleVideoPlaybackStarted = () => {
        this.isVideoPlaybackBlocked &&
          ((this.isVideoPlaybackBlocked = !1),
          this.emit(P.VideoPlaybackStatusChanged, !0));
      }),
      (this.handleVideoPlaybackFailed = () => {
        this.isVideoPlaybackBlocked ||
          ((this.isVideoPlaybackBlocked = !0),
          this.emit(P.VideoPlaybackStatusChanged, !1));
      }),
      (this.handleDeviceChange = () =>
        m(this, void 0, void 0, function* () {
          const s = yield ue.getInstance().getDevices(void 0, !1),
            o = ["audiooutput"];
          for (let a of o) {
            const c = s.filter((d) => d.kind === a);
            c.length > 0 &&
              !c.find((d) => d.deviceId === this.getActiveDevice(a)) &&
              (yield this.switchActiveDevice(a, c[0].deviceId));
          }
          this.emit(P.MediaDevicesChanged);
        })),
      (this.handleRoomUpdate = (s) => {
        const o = this.roomInfo;
        (this.roomInfo = s),
          o &&
            o.metadata !== s.metadata &&
            this.emitWhenConnected(P.RoomMetadataChanged, s.metadata),
          o?.activeRecording !== s.activeRecording &&
            this.emitWhenConnected(P.RecordingStatusChanged, s.activeRecording);
      }),
      (this.handleConnectionQualityUpdate = (s) => {
        s.updates.forEach((o) => {
          if (o.participantSid === this.localParticipant.sid) {
            this.localParticipant.setConnectionQuality(o.quality);
            return;
          }
          const a = this.getRemoteParticipantBySid(o.participantSid);
          a && a.setConnectionQuality(o.quality);
        });
      }),
      (this.onLocalParticipantMetadataChanged = (s) => {
        this.emit(P.ParticipantMetadataChanged, s, this.localParticipant);
      }),
      (this.onLocalParticipantNameChanged = (s) => {
        this.emit(P.ParticipantNameChanged, s, this.localParticipant);
      }),
      (this.onLocalAttributesChanged = (s) => {
        this.emit(P.ParticipantAttributesChanged, s, this.localParticipant);
      }),
      (this.onLocalTrackMuted = (s) => {
        this.emit(P.TrackMuted, s, this.localParticipant);
      }),
      (this.onLocalTrackUnmuted = (s) => {
        this.emit(P.TrackUnmuted, s, this.localParticipant);
      }),
      (this.onTrackProcessorUpdate = (s) => {
        var o;
        (o = s?.onPublish) === null || o === void 0 || o.call(s, this);
      }),
      (this.onLocalTrackPublished = (s) =>
        m(this, void 0, void 0, function* () {
          var o, a, c, d, u, l;
          (o = s.track) === null ||
            o === void 0 ||
            o.on(M.TrackProcessorUpdate, this.onTrackProcessorUpdate),
            (a = s.track) === null ||
              a === void 0 ||
              a.on(M.Restarted, this.onLocalTrackRestarted),
            (u =
              (d =
                (c = s.track) === null || c === void 0
                  ? void 0
                  : c.getProcessor()) === null || d === void 0
                ? void 0
                : d.onPublish) === null ||
              u === void 0 ||
              u.call(d, this),
            this.emit(P.LocalTrackPublished, s, this.localParticipant),
            s.track instanceof de &&
              (yield s.track.checkForSilence()) &&
              this.emit(P.LocalAudioSilenceDetected, s);
          const h = yield (l = s.track) === null || l === void 0
              ? void 0
              : l.getDeviceId(),
            f = us(s.source);
          f &&
            h &&
            h !== this.localParticipant.activeDeviceMap.get(f) &&
            (this.localParticipant.activeDeviceMap.set(f, h),
            this.emit(P.ActiveDeviceChanged, f, h));
        })),
      (this.onLocalTrackUnpublished = (s) => {
        var o, a;
        (o = s.track) === null ||
          o === void 0 ||
          o.off(M.TrackProcessorUpdate, this.onTrackProcessorUpdate),
          (a = s.track) === null ||
            a === void 0 ||
            a.off(M.Restarted, this.onLocalTrackRestarted),
          this.emit(P.LocalTrackUnpublished, s, this.localParticipant);
      }),
      (this.onLocalTrackRestarted = (s) =>
        m(this, void 0, void 0, function* () {
          const o = yield s.getDeviceId(!1),
            a = us(s.source);
          a &&
            o &&
            o !== this.localParticipant.activeDeviceMap.get(a) &&
            (this.log.debug(
              "local track restarted, setting "
                .concat(a, " ")
                .concat(o, " active"),
              this.logContext,
            ),
            this.localParticipant.activeDeviceMap.set(a, o),
            this.emit(P.ActiveDeviceChanged, a, o));
        })),
      (this.onLocalConnectionQualityChanged = (s) => {
        this.emit(P.ConnectionQualityChanged, s, this.localParticipant);
      }),
      (this.onMediaDevicesError = (s) => {
        this.emit(P.MediaDevicesError, s);
      }),
      (this.onLocalParticipantPermissionsChanged = (s) => {
        this.emit(P.ParticipantPermissionsChanged, s, this.localParticipant);
      }),
      (this.onLocalChatMessageSent = (s) => {
        this.emit(P.ChatMessage, s, this.localParticipant);
      }),
      this.setMaxListeners(100),
      (this.remoteParticipants = new Map()),
      (this.sidToIdentity = new Map()),
      (this.options = Object.assign(Object.assign({}, mh), e)),
      (this.log = We(
        (i = this.options.loggerName) !== null && i !== void 0 ? i : Ae.Room,
      )),
      (this.transcriptionReceivedTimes = new Map()),
      (this.options.audioCaptureDefaults = Object.assign(
        Object.assign({}, qa),
        e?.audioCaptureDefaults,
      )),
      (this.options.videoCaptureDefaults = Object.assign(
        Object.assign({}, za),
        e?.videoCaptureDefaults,
      )),
      (this.options.publishDefaults = Object.assign(
        Object.assign({}, ph),
        e?.publishDefaults,
      )),
      this.maybeCreateEngine(),
      (this.disconnectLock = new ke()),
      (this.localParticipant = new Un("", "", this.engine, this.options)),
      this.options.videoCaptureDefaults.deviceId &&
        this.localParticipant.activeDeviceMap.set(
          "videoinput",
          Ge(this.options.videoCaptureDefaults.deviceId),
        ),
      this.options.audioCaptureDefaults.deviceId &&
        this.localParticipant.activeDeviceMap.set(
          "audioinput",
          Ge(this.options.audioCaptureDefaults.deviceId),
        ),
      !((r = this.options.audioOutput) === null || r === void 0) &&
        r.deviceId &&
        this.switchActiveDevice(
          "audiooutput",
          Ge(this.options.audioOutput.deviceId),
        ).catch((s) =>
          this.log.warn(
            "Could not set audio output: ".concat(s.message),
            this.logContext,
          ),
        ),
      this.options.e2ee && this.setupE2EE();
  }
  setE2EEEnabled(e) {
    return m(this, void 0, void 0, function* () {
      if (this.e2eeManager)
        yield Promise.all([this.localParticipant.setE2EEEnabled(e)]),
          this.localParticipant.identity !== "" &&
            this.e2eeManager.setParticipantCryptorEnabled(
              e,
              this.localParticipant.identity,
            );
      else
        throw Error(
          "e2ee not configured, please set e2ee settings within the room options",
        );
    });
  }
  setupE2EE() {
    var e;
    this.options.e2ee &&
      ((this.e2eeManager = new ih(this.options.e2ee)),
      this.e2eeManager.on(et.ParticipantEncryptionStatusChanged, (t, i) => {
        i instanceof Un && (this.isE2EEEnabled = t),
          this.emit(P.ParticipantEncryptionStatusChanged, t, i);
      }),
      this.e2eeManager.on(et.EncryptionError, (t) =>
        this.emit(P.EncryptionError, t),
      ),
      (e = this.e2eeManager) === null || e === void 0 || e.setup(this));
  }
  get logContext() {
    var e;
    return {
      room: this.name,
      roomID: (e = this.roomInfo) === null || e === void 0 ? void 0 : e.sid,
      participant: this.localParticipant.identity,
      pID: this.localParticipant.sid,
    };
  }
  get isRecording() {
    var e, t;
    return (t =
      (e = this.roomInfo) === null || e === void 0
        ? void 0
        : e.activeRecording) !== null && t !== void 0
      ? t
      : !1;
  }
  getSid() {
    return m(this, void 0, void 0, function* () {
      return this.state === V.Disconnected
        ? ""
        : this.roomInfo && this.roomInfo.sid !== ""
          ? this.roomInfo.sid
          : new Promise((e, t) => {
              const i = (r) => {
                r.sid !== "" && (this.engine.off(O.RoomUpdate, i), e(r.sid));
              };
              this.engine.on(O.RoomUpdate, i),
                this.once(P.Disconnected, () => {
                  this.engine.off(O.RoomUpdate, i),
                    t("Room disconnected before room server id was available");
                });
            });
    });
  }
  get name() {
    var e, t;
    return (t =
      (e = this.roomInfo) === null || e === void 0 ? void 0 : e.name) !==
      null && t !== void 0
      ? t
      : "";
  }
  get metadata() {
    var e;
    return (e = this.roomInfo) === null || e === void 0 ? void 0 : e.metadata;
  }
  get numParticipants() {
    var e, t;
    return (t =
      (e = this.roomInfo) === null || e === void 0
        ? void 0
        : e.numParticipants) !== null && t !== void 0
      ? t
      : 0;
  }
  get numPublishers() {
    var e, t;
    return (t =
      (e = this.roomInfo) === null || e === void 0
        ? void 0
        : e.numPublishers) !== null && t !== void 0
      ? t
      : 0;
  }
  maybeCreateEngine() {
    (this.engine && !this.engine.isClosed) ||
      ((this.engine = new Ih(this.options)),
      this.engine
        .on(O.ParticipantUpdate, this.handleParticipantUpdates)
        .on(O.RoomUpdate, this.handleRoomUpdate)
        .on(O.SpeakersChanged, this.handleSpeakersChanged)
        .on(O.StreamStateChanged, this.handleStreamStateUpdate)
        .on(O.ConnectionQualityUpdate, this.handleConnectionQualityUpdate)
        .on(O.SubscriptionError, this.handleSubscriptionError)
        .on(
          O.SubscriptionPermissionUpdate,
          this.handleSubscriptionPermissionUpdate,
        )
        .on(O.MediaTrackAdded, (e, t, i) => {
          this.onTrackAdded(e, t, i);
        })
        .on(O.Disconnected, (e) => {
          this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, e);
        })
        .on(O.ActiveSpeakersUpdate, this.handleActiveSpeakersUpdate)
        .on(O.DataPacketReceived, this.handleDataPacket)
        .on(O.Resuming, () => {
          this.clearConnectionReconcile(),
            (this.isResuming = !0),
            this.log.info("Resuming signal connection", this.logContext),
            this.setAndEmitConnectionState(V.SignalReconnecting) &&
              this.emit(P.SignalReconnecting);
        })
        .on(O.Resumed, () => {
          this.registerConnectionReconcile(),
            (this.isResuming = !1),
            this.log.info("Resumed signal connection", this.logContext),
            this.updateSubscriptions(),
            this.emitBufferedEvents(),
            this.setAndEmitConnectionState(V.Connected) &&
              this.emit(P.Reconnected);
        })
        .on(O.SignalResumed, () => {
          (this.bufferedEvents = []),
            (this.state === V.Reconnecting || this.isResuming) &&
              this.sendSyncState();
        })
        .on(O.Restarting, this.handleRestarting)
        .on(O.SignalRestarted, this.handleSignalRestarted)
        .on(O.Offline, () => {
          this.setAndEmitConnectionState(V.Reconnecting) &&
            this.emit(P.Reconnecting);
        })
        .on(O.DCBufferStatusChanged, (e, t) => {
          this.emit(P.DCBufferStatusChanged, e, t);
        })
        .on(O.LocalTrackSubscribed, (e) => {
          const t = this.localParticipant.getTrackPublications().find((i) => {
            let { trackSid: r } = i;
            return r === e;
          });
          if (!t) {
            this.log.warn(
              "could not find local track subscription for subscribed event",
              this.logContext,
            );
            return;
          }
          this.localParticipant.emit(R.LocalTrackSubscribed, t),
            this.emitWhenConnected(
              P.LocalTrackSubscribed,
              t,
              this.localParticipant,
            );
        }),
      this.localParticipant && this.localParticipant.setupEngine(this.engine),
      this.e2eeManager && this.e2eeManager.setupEngine(this.engine));
  }
  static getLocalDevices(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return ue.getInstance().getDevices(e, t);
  }
  prepareConnection(e, t) {
    return m(this, void 0, void 0, function* () {
      if (this.state === V.Disconnected) {
        this.log.debug("prepareConnection to ".concat(e), this.logContext);
        try {
          if (Yi(new URL(e)) && t) {
            this.regionUrlProvider = new xs(e, t);
            const i = yield this.regionUrlProvider.getNextBestRegionUrl();
            i &&
              this.state === V.Disconnected &&
              ((this.regionUrl = i),
              yield fetch(gs(i), { method: "HEAD" }),
              this.log.debug(
                "prepared connection to ".concat(i),
                this.logContext,
              ));
          } else yield fetch(gs(e), { method: "HEAD" });
        } catch (i) {
          this.log.warn(
            "could not prepare connection",
            Object.assign(Object.assign({}, this.logContext), { error: i }),
          );
        }
      }
    });
  }
  getParticipantByIdentity(e) {
    return this.localParticipant.identity === e
      ? this.localParticipant
      : this.remoteParticipants.get(e);
  }
  clearConnectionFutures() {
    this.connectFuture = void 0;
  }
  simulateScenario(e, t) {
    return m(this, void 0, void 0, function* () {
      let i = () => {},
        r;
      switch (e) {
        case "signal-reconnect":
          yield this.engine.client.handleOnClose("simulate disconnect");
          break;
        case "speaker":
          r = new Ne({ scenario: { case: "speakerUpdate", value: 3 } });
          break;
        case "node-failure":
          r = new Ne({ scenario: { case: "nodeFailure", value: !0 } });
          break;
        case "server-leave":
          r = new Ne({ scenario: { case: "serverLeave", value: !0 } });
          break;
        case "migration":
          r = new Ne({ scenario: { case: "migration", value: !0 } });
          break;
        case "resume-reconnect":
          this.engine.failNext(),
            yield this.engine.client.handleOnClose(
              "simulate resume-disconnect",
            );
          break;
        case "disconnect-signal-on-resume":
          (i = () =>
            m(this, void 0, void 0, function* () {
              yield this.engine.client.handleOnClose(
                "simulate resume-disconnect",
              );
            })),
            (r = new Ne({
              scenario: { case: "disconnectSignalOnResume", value: !0 },
            }));
          break;
        case "disconnect-signal-on-resume-no-messages":
          (i = () =>
            m(this, void 0, void 0, function* () {
              yield this.engine.client.handleOnClose(
                "simulate resume-disconnect",
              );
            })),
            (r = new Ne({
              scenario: {
                case: "disconnectSignalOnResumeNoMessages",
                value: !0,
              },
            }));
          break;
        case "full-reconnect":
          (this.engine.fullReconnectOnNext = !0),
            yield this.engine.client.handleOnClose("simulate full-reconnect");
          break;
        case "force-tcp":
        case "force-tls":
          (r = new Ne({
            scenario: {
              case: "switchCandidateProtocol",
              value: e === "force-tls" ? 2 : 1,
            },
          })),
            (i = () =>
              m(this, void 0, void 0, function* () {
                const s = this.engine.client.onLeave;
                s &&
                  s(
                    new Hn({
                      reason: Et.CLIENT_INITIATED,
                      action: wt.RECONNECT,
                    }),
                  );
              }));
          break;
        case "subscriber-bandwidth":
          if (t === void 0 || typeof t != "number")
            throw new Error(
              "subscriber-bandwidth requires a number as argument",
            );
          r = new Ne({
            scenario: { case: "subscriberBandwidth", value: BigInt(t) },
          });
          break;
        case "leave-full-reconnect":
          r = new Ne({
            scenario: { case: "leaveRequestFullReconnect", value: !0 },
          });
      }
      r && (yield this.engine.client.sendSimulateScenario(r), yield i());
    });
  }
  get canPlaybackAudio() {
    return this.audioEnabled;
  }
  get canPlaybackVideo() {
    return !this.isVideoPlaybackBlocked;
  }
  getActiveDevice(e) {
    return this.localParticipant.activeDeviceMap.get(e);
  }
  switchActiveDevice(e, t) {
    return m(this, arguments, void 0, function (i, r) {
      var s = this;
      let o =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      return (function* () {
        var a, c, d, u, l, h, f;
        let g = !1,
          p = !0;
        const b = o ? { exact: r } : r;
        if (i === "audioinput") {
          const v =
            (a = s.getActiveDevice(i)) !== null && a !== void 0
              ? a
              : s.options.audioCaptureDefaults.deviceId;
          (s.options.audioCaptureDefaults.deviceId = b), (g = v !== b);
          const D = Array.from(
            s.localParticipant.audioTrackPublications.values(),
          ).filter((C) => C.source === _.Source.Microphone);
          try {
            p = (yield Promise.all(
              D.map((C) => {
                var k;
                return (k = C.audioTrack) === null || k === void 0
                  ? void 0
                  : k.setDeviceId(b);
              }),
            )).every((C) => C === !0);
          } catch (C) {
            throw ((s.options.audioCaptureDefaults.deviceId = v), C);
          }
        } else if (i === "videoinput") {
          const v =
            (c = s.getActiveDevice(i)) !== null && c !== void 0
              ? c
              : s.options.videoCaptureDefaults.deviceId;
          (s.options.videoCaptureDefaults.deviceId = b), (g = v !== b);
          const D = Array.from(
            s.localParticipant.videoTrackPublications.values(),
          ).filter((C) => C.source === _.Source.Camera);
          try {
            p = (yield Promise.all(
              D.map((C) => {
                var k;
                return (k = C.videoTrack) === null || k === void 0
                  ? void 0
                  : k.setDeviceId(b);
              }),
            )).every((C) => C === !0);
          } catch (C) {
            throw ((s.options.videoCaptureDefaults.deviceId = v), C);
          }
        } else if (i === "audiooutput") {
          if (
            (!Ji() && !s.options.webAudioMix) ||
            (s.options.webAudioMix &&
              s.audioContext &&
              !("setSinkId" in s.audioContext))
          )
            throw new Error(
              "cannot switch audio output, setSinkId not supported",
            );
          s.options.webAudioMix &&
            (r =
              (d = yield ue
                .getInstance()
                .normalizeDeviceId("audiooutput", r)) !== null && d !== void 0
                ? d
                : ""),
            ((u = (f = s.options).audioOutput) !== null && u !== void 0) ||
              (f.audioOutput = {});
          const v =
            (l = s.getActiveDevice(i)) !== null && l !== void 0
              ? l
              : s.options.audioOutput.deviceId;
          (s.options.audioOutput.deviceId = r), (g = v !== b);
          try {
            s.options.webAudioMix &&
              ((h = s.audioContext) === null || h === void 0 || h.setSinkId(r)),
              yield Promise.all(
                Array.from(s.remoteParticipants.values()).map((D) =>
                  D.setAudioOutput({ deviceId: r }),
                ),
              );
          } catch (D) {
            throw ((s.options.audioOutput.deviceId = v), D);
          }
        }
        return (
          g &&
            p &&
            (s.localParticipant.activeDeviceMap.set(i, r),
            s.emit(P.ActiveDeviceChanged, i, r)),
          p
        );
      })();
    });
  }
  setupLocalParticipantEvents() {
    this.localParticipant
      .on(R.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged)
      .on(R.ParticipantNameChanged, this.onLocalParticipantNameChanged)
      .on(R.AttributesChanged, this.onLocalAttributesChanged)
      .on(R.TrackMuted, this.onLocalTrackMuted)
      .on(R.TrackUnmuted, this.onLocalTrackUnmuted)
      .on(R.LocalTrackPublished, this.onLocalTrackPublished)
      .on(R.LocalTrackUnpublished, this.onLocalTrackUnpublished)
      .on(R.ConnectionQualityChanged, this.onLocalConnectionQualityChanged)
      .on(R.MediaDevicesError, this.onMediaDevicesError)
      .on(R.AudioStreamAcquired, this.startAudio)
      .on(R.ChatMessage, this.onLocalChatMessageSent)
      .on(
        R.ParticipantPermissionsChanged,
        this.onLocalParticipantPermissionsChanged,
      );
  }
  recreateEngine() {
    var e;
    (e = this.engine) === null || e === void 0 || e.close(),
      (this.engine = void 0),
      (this.isResuming = !1),
      this.remoteParticipants.clear(),
      this.sidToIdentity.clear(),
      (this.bufferedEvents = []),
      this.maybeCreateEngine();
  }
  onTrackAdded(e, t, i) {
    if (this.state === V.Connecting || this.state === V.Reconnecting) {
      const u = () => {
          this.onTrackAdded(e, t, i), l();
        },
        l = () => {
          this.off(P.Reconnected, u),
            this.off(P.Connected, u),
            this.off(P.Disconnected, l);
        };
      this.once(P.Reconnected, u),
        this.once(P.Connected, u),
        this.once(P.Disconnected, l);
      return;
    }
    if (this.state === V.Disconnected) {
      this.log.warn(
        "skipping incoming track after Room disconnected",
        this.logContext,
      );
      return;
    }
    const r = zl(t.id),
      s = r[0];
    let o = r[1],
      a = e.id;
    if ((o && o.startsWith("TR") && (a = o), s === this.localParticipant.sid)) {
      this.log.warn(
        "tried to create RemoteParticipant for local participant",
        this.logContext,
      );
      return;
    }
    const c = Array.from(this.remoteParticipants.values()).find(
      (u) => u.sid === s,
    );
    if (!c) {
      this.log.error(
        "Tried to add a track for a participant, that's not present. Sid: ".concat(
          s,
        ),
        this.logContext,
      );
      return;
    }
    let d;
    this.options.adaptiveStream &&
      (typeof this.options.adaptiveStream == "object"
        ? (d = this.options.adaptiveStream)
        : (d = {})),
      c.addSubscribedMediaTrack(e, a, t, i, d);
  }
  handleDisconnect() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
      t = arguments.length > 1 ? arguments[1] : void 0;
    var i;
    if (
      (this.clearConnectionReconcile(),
      (this.isResuming = !1),
      (this.bufferedEvents = []),
      this.transcriptionReceivedTimes.clear(),
      this.state !== V.Disconnected)
    ) {
      this.regionUrl = void 0;
      try {
        this.remoteParticipants.forEach((r) => {
          r.trackPublications.forEach((s) => {
            r.unpublishTrack(s.trackSid);
          });
        }),
          this.localParticipant.trackPublications.forEach((r) => {
            var s, o;
            r.track && this.localParticipant.unpublishTrack(r.track, e),
              e &&
                ((s = r.track) === null || s === void 0 || s.detach(),
                (o = r.track) === null || o === void 0 || o.stop());
          }),
          this.localParticipant
            .off(
              R.ParticipantMetadataChanged,
              this.onLocalParticipantMetadataChanged,
            )
            .off(R.ParticipantNameChanged, this.onLocalParticipantNameChanged)
            .off(R.AttributesChanged, this.onLocalAttributesChanged)
            .off(R.TrackMuted, this.onLocalTrackMuted)
            .off(R.TrackUnmuted, this.onLocalTrackUnmuted)
            .off(R.LocalTrackPublished, this.onLocalTrackPublished)
            .off(R.LocalTrackUnpublished, this.onLocalTrackUnpublished)
            .off(
              R.ConnectionQualityChanged,
              this.onLocalConnectionQualityChanged,
            )
            .off(R.MediaDevicesError, this.onMediaDevicesError)
            .off(R.AudioStreamAcquired, this.startAudio)
            .off(R.ChatMessage, this.onLocalChatMessageSent)
            .off(
              R.ParticipantPermissionsChanged,
              this.onLocalParticipantPermissionsChanged,
            ),
          this.localParticipant.trackPublications.clear(),
          this.localParticipant.videoTrackPublications.clear(),
          this.localParticipant.audioTrackPublications.clear(),
          this.remoteParticipants.clear(),
          this.sidToIdentity.clear(),
          (this.activeSpeakers = []),
          this.audioContext &&
            typeof this.options.webAudioMix == "boolean" &&
            (this.audioContext.close(), (this.audioContext = void 0)),
          Se() &&
            (window.removeEventListener("beforeunload", this.onPageLeave),
            window.removeEventListener("pagehide", this.onPageLeave),
            window.removeEventListener("freeze", this.onPageLeave),
            (i = navigator.mediaDevices) === null ||
              i === void 0 ||
              i.removeEventListener("devicechange", this.handleDeviceChange));
      } finally {
        this.setAndEmitConnectionState(V.Disconnected),
          this.emit(P.Disconnected, t);
      }
    }
  }
  handleParticipantDisconnected(e, t) {
    var i;
    this.remoteParticipants.delete(e),
      t &&
        (t.trackPublications.forEach((r) => {
          t.unpublishTrack(r.trackSid, !0);
        }),
        this.emit(P.ParticipantDisconnected, t),
        (i = this.localParticipant) === null ||
          i === void 0 ||
          i.handleParticipantDisconnected(t.identity));
  }
  acquireAudioContext() {
    return m(this, void 0, void 0, function* () {
      var e, t;
      if (
        (typeof this.options.webAudioMix != "boolean" &&
        this.options.webAudioMix.audioContext
          ? (this.audioContext = this.options.webAudioMix.audioContext)
          : (!this.audioContext || this.audioContext.state === "closed") &&
            (this.audioContext =
              (e = La()) !== null && e !== void 0 ? e : void 0),
        this.audioContext && this.audioContext.state === "suspended")
      )
        try {
          yield this.audioContext.resume();
        } catch (r) {
          this.log.warn(
            "Could not resume audio context",
            Object.assign(Object.assign({}, this.logContext), { error: r }),
          );
        }
      this.options.webAudioMix &&
        this.remoteParticipants.forEach((r) =>
          r.setAudioContext(this.audioContext),
        ),
        this.localParticipant.setAudioContext(this.audioContext);
      const i =
        ((t = this.audioContext) === null || t === void 0
          ? void 0
          : t.state) === "running";
      i !== this.canPlaybackAudio &&
        ((this.audioEnabled = i), this.emit(P.AudioPlaybackStatusChanged, i));
    });
  }
  createParticipant(e, t) {
    var i;
    let r;
    return (
      t
        ? (r = Fn.fromParticipantInfo(this.engine.client, t, {
            loggerContextCb: () => this.logContext,
            loggerName: this.options.loggerName,
          }))
        : (r = new Fn(this.engine.client, "", e, void 0, void 0, {
            loggerContextCb: () => this.logContext,
            loggerName: this.options.loggerName,
          })),
      this.options.webAudioMix && r.setAudioContext(this.audioContext),
      !((i = this.options.audioOutput) === null || i === void 0) &&
        i.deviceId &&
        r
          .setAudioOutput(this.options.audioOutput)
          .catch((s) =>
            this.log.warn(
              "Could not set audio output: ".concat(s.message),
              this.logContext,
            ),
          ),
      r
    );
  }
  getOrCreateParticipant(e, t) {
    if (this.remoteParticipants.has(e)) {
      const r = this.remoteParticipants.get(e);
      return (
        t && r.updateInfo(t) && this.sidToIdentity.set(t.sid, t.identity), r
      );
    }
    const i = this.createParticipant(e, t);
    return (
      this.remoteParticipants.set(e, i),
      this.sidToIdentity.set(t.sid, t.identity),
      this.emitWhenConnected(P.ParticipantConnected, i),
      i
        .on(R.TrackPublished, (r) => {
          this.emitWhenConnected(P.TrackPublished, r, i);
        })
        .on(R.TrackSubscribed, (r, s) => {
          r.kind === _.Kind.Audio
            ? (r.on(M.AudioPlaybackStarted, this.handleAudioPlaybackStarted),
              r.on(M.AudioPlaybackFailed, this.handleAudioPlaybackFailed))
            : r.kind === _.Kind.Video &&
              (r.on(M.VideoPlaybackFailed, this.handleVideoPlaybackFailed),
              r.on(M.VideoPlaybackStarted, this.handleVideoPlaybackStarted)),
            this.emit(P.TrackSubscribed, r, s, i);
        })
        .on(R.TrackUnpublished, (r) => {
          this.emit(P.TrackUnpublished, r, i);
        })
        .on(R.TrackUnsubscribed, (r, s) => {
          this.emit(P.TrackUnsubscribed, r, s, i);
        })
        .on(R.TrackSubscriptionFailed, (r) => {
          this.emit(P.TrackSubscriptionFailed, r, i);
        })
        .on(R.TrackMuted, (r) => {
          this.emitWhenConnected(P.TrackMuted, r, i);
        })
        .on(R.TrackUnmuted, (r) => {
          this.emitWhenConnected(P.TrackUnmuted, r, i);
        })
        .on(R.ParticipantMetadataChanged, (r) => {
          this.emitWhenConnected(P.ParticipantMetadataChanged, r, i);
        })
        .on(R.ParticipantNameChanged, (r) => {
          this.emitWhenConnected(P.ParticipantNameChanged, r, i);
        })
        .on(R.AttributesChanged, (r) => {
          this.emitWhenConnected(P.ParticipantAttributesChanged, r, i);
        })
        .on(R.ConnectionQualityChanged, (r) => {
          this.emitWhenConnected(P.ConnectionQualityChanged, r, i);
        })
        .on(R.ParticipantPermissionsChanged, (r) => {
          this.emitWhenConnected(P.ParticipantPermissionsChanged, r, i);
        })
        .on(R.TrackSubscriptionStatusChanged, (r, s) => {
          this.emitWhenConnected(P.TrackSubscriptionStatusChanged, r, s, i);
        })
        .on(R.TrackSubscriptionFailed, (r, s) => {
          this.emit(P.TrackSubscriptionFailed, r, i, s);
        })
        .on(R.TrackSubscriptionPermissionChanged, (r, s) => {
          this.emitWhenConnected(P.TrackSubscriptionPermissionChanged, r, s, i);
        }),
      t && i.updateInfo(t),
      i
    );
  }
  sendSyncState() {
    const e = Array.from(this.remoteParticipants.values()).reduce(
        (i, r) => (i.push(...r.getTrackPublications()), i),
        [],
      ),
      t = this.localParticipant.getTrackPublications();
    this.engine.sendSyncState(e, t);
  }
  updateSubscriptions() {
    for (const e of this.remoteParticipants.values())
      for (const t of e.videoTrackPublications.values())
        t.isSubscribed && t instanceof $a && t.emitTrackUpdate();
  }
  getRemoteParticipantBySid(e) {
    const t = this.sidToIdentity.get(e);
    if (t) return this.remoteParticipants.get(t);
  }
  registerConnectionReconcile() {
    this.clearConnectionReconcile();
    let e = 0;
    this.connectionReconcileInterval = le.setInterval(() => {
      !this.engine || this.engine.isClosed || !this.engine.verifyTransport()
        ? (e++,
          this.log.warn(
            "detected connection state mismatch",
            Object.assign(Object.assign({}, this.logContext), {
              numFailures: e,
              engine: {
                closed: this.engine.isClosed,
                transportsConnected: this.engine.verifyTransport(),
              },
            }),
          ),
          e >= 3 &&
            (this.recreateEngine(),
            this.handleDisconnect(
              this.options.stopLocalTrackOnUnpublish,
              Et.STATE_MISMATCH,
            )))
        : (e = 0);
    }, Fh);
  }
  clearConnectionReconcile() {
    this.connectionReconcileInterval &&
      le.clearInterval(this.connectionReconcileInterval);
  }
  setAndEmitConnectionState(e) {
    return e === this.state
      ? !1
      : ((this.state = e), this.emit(P.ConnectionStateChanged, this.state), !0);
  }
  emitBufferedEvents() {
    this.bufferedEvents.forEach((e) => {
      let [t, i] = e;
      this.emit(t, ...i);
    }),
      (this.bufferedEvents = []);
  }
  emitWhenConnected(e) {
    for (
      var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      i[r - 1] = arguments[r];
    if (
      this.state === V.Reconnecting ||
      this.isResuming ||
      !this.engine ||
      this.engine.pendingReconnect
    )
      this.bufferedEvents.push([e, i]);
    else if (this.state === V.Connected) return this.emit(e, ...i);
    return !1;
  }
  simulateParticipants(e) {
    return m(this, void 0, void 0, function* () {
      var t, i;
      const r = Object.assign(
          { audio: !0, video: !0, useRealTracks: !1 },
          e.publish,
        ),
        s = Object.assign(
          { count: 9, audio: !1, video: !0, aspectRatios: [1.66, 1.7, 1.3] },
          e.participants,
        );
      if (
        (this.handleDisconnect(),
        (this.roomInfo = new ar({
          sid: "RM_SIMULATED",
          name: "simulated-room",
          emptyTimeout: 0,
          maxParticipants: 0,
          creationTime: X.parse(new Date().getTime()),
          metadata: "",
          numParticipants: 1,
          numPublishers: 1,
          turnPassword: "",
          enabledCodecs: [],
          activeRecording: !1,
        })),
        this.localParticipant.updateInfo(
          new en({ identity: "simulated-local", name: "local-name" }),
        ),
        this.setupLocalParticipantEvents(),
        this.emit(P.SignalConnected),
        this.emit(P.Connected),
        this.setAndEmitConnectionState(V.Connected),
        r.video)
      ) {
        const o = new Ln(
          _.Kind.Video,
          new Tt({
            source: pe.CAMERA,
            sid: Math.floor(Math.random() * 1e4).toString(),
            type: Ie.AUDIO,
            name: "video-dummy",
          }),
          new fe(
            r.useRealTracks
              ? (yield window.navigator.mediaDevices.getUserMedia({
                  video: !0,
                })).getVideoTracks()[0]
              : ms(
                  160 *
                    ((t = s.aspectRatios[0]) !== null && t !== void 0 ? t : 1),
                  160,
                  !0,
                  !0,
                ),
            void 0,
            !1,
            {
              loggerName: this.options.loggerName,
              loggerContextCb: () => this.logContext,
            },
          ),
          {
            loggerName: this.options.loggerName,
            loggerContextCb: () => this.logContext,
          },
        );
        this.localParticipant.addTrackPublication(o),
          this.localParticipant.emit(R.LocalTrackPublished, o);
      }
      if (r.audio) {
        const o = new Ln(
          _.Kind.Audio,
          new Tt({
            source: pe.MICROPHONE,
            sid: Math.floor(Math.random() * 1e4).toString(),
            type: Ie.AUDIO,
          }),
          new de(
            r.useRealTracks
              ? (yield navigator.mediaDevices.getUserMedia({
                  audio: !0,
                })).getAudioTracks()[0]
              : ci(),
            void 0,
            !1,
            this.audioContext,
            {
              loggerName: this.options.loggerName,
              loggerContextCb: () => this.logContext,
            },
          ),
          {
            loggerName: this.options.loggerName,
            loggerContextCb: () => this.logContext,
          },
        );
        this.localParticipant.addTrackPublication(o),
          this.localParticipant.emit(R.LocalTrackPublished, o);
      }
      for (let o = 0; o < s.count - 1; o += 1) {
        let a = new en({
          sid: Math.floor(Math.random() * 1e4).toString(),
          identity: "simulated-".concat(o),
          state: Ii.ACTIVE,
          tracks: [],
          joinedAt: X.parse(Date.now()),
        });
        const c = this.getOrCreateParticipant(a.identity, a);
        if (s.video) {
          const d = ms(
              160 *
                ((i = s.aspectRatios[o % s.aspectRatios.length]) !== null &&
                i !== void 0
                  ? i
                  : 1),
              160,
              !1,
              !0,
            ),
            u = new Tt({
              source: pe.CAMERA,
              sid: Math.floor(Math.random() * 1e4).toString(),
              type: Ie.AUDIO,
            });
          c.addSubscribedMediaTrack(
            d,
            u.sid,
            new MediaStream([d]),
            new RTCRtpReceiver(),
          ),
            (a.tracks = [...a.tracks, u]);
        }
        if (s.audio) {
          const d = ci(),
            u = new Tt({
              source: pe.MICROPHONE,
              sid: Math.floor(Math.random() * 1e4).toString(),
              type: Ie.AUDIO,
            });
          c.addSubscribedMediaTrack(
            d,
            u.sid,
            new MediaStream([d]),
            new RTCRtpReceiver(),
          ),
            (a.tracks = [...a.tracks, u]);
        }
        c.updateInfo(a);
      }
    });
  }
  emit(e) {
    for (
      var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      i[r - 1] = arguments[r];
    if (e !== P.ActiveSpeakersChanged) {
      const s = Xa(i).filter((o) => o !== void 0);
      this.log.debug(
        "room event ".concat(e),
        Object.assign(Object.assign({}, this.logContext), {
          event: e,
          args: s,
        }),
      );
    }
    return super.emit(e, ...i);
  }
}
function Xa(n) {
  return n.map((e) => {
    if (e)
      return Array.isArray(e)
        ? Xa(e)
        : typeof e == "object"
          ? "logContext" in e && e.logContext
          : e;
  });
}
var _e;
(function (n) {
  (n[(n.IDLE = 0)] = "IDLE"),
    (n[(n.RUNNING = 1)] = "RUNNING"),
    (n[(n.SKIPPED = 2)] = "SKIPPED"),
    (n[(n.SUCCESS = 3)] = "SUCCESS"),
    (n[(n.FAILED = 4)] = "FAILED");
})(_e || (_e = {}));
class Lt extends Be.EventEmitter {
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    super(),
      (this.status = _e.IDLE),
      (this.logs = []),
      (this.errorsAsWarnings = !1),
      (this.url = e),
      (this.token = t),
      (this.name = this.constructor.name),
      (this.room = new jh(i.roomOptions)),
      (this.connectOptions = i.connectOptions),
      i.errorsAsWarnings && (this.errorsAsWarnings = i.errorsAsWarnings);
  }
  run(e) {
    return m(this, void 0, void 0, function* () {
      if (this.status !== _e.IDLE) throw Error("check is running already");
      this.setStatus(_e.RUNNING);
      try {
        yield this.perform();
      } catch (t) {
        t instanceof Error &&
          (this.errorsAsWarnings
            ? this.appendWarning(t.message)
            : this.appendError(t.message));
      }
      return (
        yield this.disconnect(),
        yield new Promise((t) => setTimeout(t, 500)),
        this.status !== _e.SKIPPED &&
          this.setStatus(this.isSuccess() ? _e.SUCCESS : _e.FAILED),
        e && e(),
        this.getInfo()
      );
    });
  }
  isSuccess() {
    return !this.logs.some((e) => e.level === "error");
  }
  connect() {
    return m(this, void 0, void 0, function* () {
      return this.room.state === V.Connected
        ? this.room
        : (yield this.room.connect(this.url, this.token, this.connectOptions),
          this.room);
    });
  }
  disconnect() {
    return m(this, void 0, void 0, function* () {
      this.room &&
        this.room.state !== V.Disconnected &&
        (yield this.room.disconnect(),
        yield new Promise((e) => setTimeout(e, 500)));
    });
  }
  skip() {
    this.setStatus(_e.SKIPPED);
  }
  appendMessage(e) {
    this.logs.push({ level: "info", message: e }),
      this.emit("update", this.getInfo());
  }
  appendWarning(e) {
    this.logs.push({ level: "warning", message: e }),
      this.emit("update", this.getInfo());
  }
  appendError(e) {
    this.logs.push({ level: "error", message: e }),
      this.emit("update", this.getInfo());
  }
  setStatus(e) {
    (this.status = e), this.emit("update", this.getInfo());
  }
  get engine() {
    var e;
    return (e = this.room) === null || e === void 0 ? void 0 : e.engine;
  }
  getInfo() {
    return {
      logs: this.logs,
      name: this.name,
      status: this.status,
      description: this.description,
    };
  }
}
class Bh extends Lt {
  get description() {
    return "Can publish audio";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      var e;
      const t = yield this.connect(),
        i = yield Nh();
      t.localParticipant.publishTrack(i),
        yield new Promise((o) => setTimeout(o, 3e3));
      const r = yield (e = i.sender) === null || e === void 0
        ? void 0
        : e.getStats();
      if (!r) throw new Error("Could not get RTCStats");
      let s = 0;
      if (
        (r.forEach((o) => {
          o.type === "outbound-rtp" &&
            (o.kind === "audio" || (!o.kind && o.mediaType === "audio")) &&
            (s = o.packetsSent);
        }),
        s === 0)
      )
        throw new Error("Could not determine packets are sent");
      this.appendMessage("published ".concat(s, " audio packets"));
    });
  }
}
class Vh extends Lt {
  get description() {
    return "Can publish video";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      var e;
      const t = yield this.connect(),
        i = yield Oh();
      t.localParticipant.publishTrack(i),
        yield new Promise((o) => setTimeout(o, 5e3));
      const r = yield (e = i.sender) === null || e === void 0
        ? void 0
        : e.getStats();
      if (!r) throw new Error("Could not get RTCStats");
      let s = 0;
      if (
        (r.forEach((o) => {
          o.type === "outbound-rtp" &&
            (o.kind === "video" || (!o.kind && o.mediaType === "video")) &&
            (s += o.packetsSent);
        }),
        s === 0)
      )
        throw new Error("Could not determine packets are sent");
      this.appendMessage("published ".concat(s, " video packets"));
    });
  }
}
class qh extends Lt {
  get description() {
    return "Resuming connection after interruption";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      var e;
      const t = yield this.connect();
      let i = !1,
        r = !1,
        s;
      const o = new Promise((d) => {
          setTimeout(d, 5e3), (s = d);
        }),
        a = () => {
          i = !0;
        };
      t
        .on(P.SignalReconnecting, a)
        .on(P.Reconnecting, a)
        .on(P.Reconnected, () => {
          (r = !0), s(!0);
        }),
        (e = t.engine.client.ws) === null || e === void 0 || e.close();
      const c = t.engine.client.onClose;
      if ((c && c(""), yield o, i)) {
        if (!r || t.state !== V.Connected)
          throw (
            (this.appendWarning(
              "reconnection is only possible in Redis-based configurations",
            ),
            new Error("Not able to reconnect"))
          );
      } else throw new Error("Did not attempt to reconnect");
    });
  }
}
class zh extends Lt {
  get description() {
    return "Can connect via TURN";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      var e, t;
      const i = new gr(),
        r = yield i.join(this.url, this.token, {
          autoSubscribe: !0,
          maxRetries: 0,
          e2eeEnabled: !1,
          websocketTimeout: 15e3,
        });
      let s = !1,
        o = !1,
        a = !1;
      for (let c of r.iceServers)
        for (let d of c.urls)
          d.startsWith("turn:")
            ? ((o = !0), (a = !0))
            : d.startsWith("turns:") && ((o = !0), (a = !0), (s = !0)),
            d.startsWith("stun:") && (a = !0);
      a
        ? o &&
          !s &&
          this.appendWarning(
            "TURN is configured server side, but TURN/TLS is unavailable.",
          )
        : this.appendWarning("No STUN servers configured on server side."),
        yield i.close(),
        (!(
          (t =
            (e = this.connectOptions) === null || e === void 0
              ? void 0
              : e.rtcConfig) === null || t === void 0
        ) &&
          t.iceServers) ||
        o
          ? yield this.room.connect(this.url, this.token, {
              rtcConfig: { iceTransportPolicy: "relay" },
            })
          : (this.appendWarning("No TURN servers configured."),
            this.skip(),
            yield new Promise((c) => setTimeout(c, 0)));
    });
  }
}
class Gh extends Lt {
  get description() {
    return "Establishing WebRTC connection";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      let e = !1,
        t = !1;
      this.room.on(P.SignalConnected, () => {
        const i = this.room.engine.client.onTrickle;
        (this.room.engine.client.onTrickle = (r, s) => {
          if (r.candidate) {
            const o = new RTCIceCandidate(r);
            let a = ""
              .concat(o.protocol, " ")
              .concat(o.address, ":")
              .concat(o.port, " ")
              .concat(o.type);
            o.address &&
              (Wh(o.address)
                ? (a += " (private)")
                : o.protocol === "tcp" && o.tcpType === "passive"
                  ? ((e = !0), (a += " (passive)"))
                  : o.protocol === "udp" && (t = !0)),
              this.appendMessage(a);
          }
          i && i(r, s);
        }),
          this.room.engine.pcManager &&
            (this.room.engine.pcManager.subscriber.onIceCandidateError = (
              r,
            ) => {
              r instanceof RTCPeerConnectionIceErrorEvent &&
                this.appendWarning(
                  "error with ICE candidate: "
                    .concat(r.errorCode, " ")
                    .concat(r.errorText, " ")
                    .concat(r.url),
                );
            });
      });
      try {
        yield this.connect(), q.info("now the room is connected");
      } catch (i) {
        throw (
          (this.appendWarning(
            "ports need to be open on firewall in order to connect.",
          ),
          i)
        );
      }
      e || this.appendWarning("Server is not configured for ICE/TCP"),
        t ||
          this.appendWarning(
            "No public IPv4 UDP candidates were found. Your server is likely not configured correctly",
          );
    });
  }
}
function Wh(n) {
  const e = n.split(".");
  if (e.length === 4) {
    if (e[0] === "10") return !0;
    if (e[0] === "192" && e[1] === "168") return !0;
    if (e[0] === "172") {
      const t = parseInt(e[1], 10);
      if (t >= 16 && t <= 31) return !0;
    }
  }
  return !1;
}
class Kh extends Lt {
  get description() {
    return "Connecting to signal connection via WebSocket";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      var e, t, i;
      (this.url.startsWith("ws:") || this.url.startsWith("http:")) &&
        this.appendWarning(
          "Server is insecure, clients may block connections to it",
        );
      let r = new gr();
      const s = yield r.join(this.url, this.token, {
        autoSubscribe: !0,
        maxRetries: 0,
        e2eeEnabled: !1,
        websocketTimeout: 15e3,
      });
      this.appendMessage(
        "Connected to server, version ".concat(s.serverVersion, "."),
      ),
        ((e = s.serverInfo) === null || e === void 0 ? void 0 : e.edition) ===
          qo.Cloud &&
          !((t = s.serverInfo) === null || t === void 0) &&
          t.region &&
          this.appendMessage(
            "LiveKit Cloud: ".concat(
              (i = s.serverInfo) === null || i === void 0 ? void 0 : i.region,
            ),
          ),
        yield r.close();
    });
  }
}
class pm extends Be.EventEmitter {
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    super(),
      (this.options = {}),
      (this.checkResults = new Map()),
      (this.url = e),
      (this.token = t),
      (this.options = i);
  }
  getNextCheckId() {
    const e = this.checkResults.size;
    return (
      this.checkResults.set(e, {
        logs: [],
        status: _e.IDLE,
        name: "",
        description: "",
      }),
      e
    );
  }
  updateCheck(e, t) {
    this.checkResults.set(e, t), this.emit("checkUpdate", e, t);
  }
  isSuccess() {
    return Array.from(this.checkResults.values()).every(
      (e) => e.status !== _e.FAILED,
    );
  }
  getResults() {
    return Array.from(this.checkResults.values());
  }
  createAndRunCheck(e) {
    return m(this, void 0, void 0, function* () {
      const t = this.getNextCheckId(),
        i = new e(this.url, this.token, this.options),
        r = (o) => {
          this.updateCheck(t, o);
        };
      i.on("update", r);
      const s = yield i.run();
      return i.off("update", r), s;
    });
  }
  checkWebsocket() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(Kh);
    });
  }
  checkWebRTC() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(Gh);
    });
  }
  checkTURN() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(zh);
    });
  }
  checkReconnect() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(qh);
    });
  }
  checkPublishAudio() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(Bh);
    });
  }
  checkPublishVideo() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(Vh);
    });
  }
}
var Hh =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Jh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Za = { exports: {} };
(function (n) {
  (function (e, t) {
    n.exports ? (n.exports = t()) : (e.log = t());
  })(Hh, function () {
    var e = function () {},
      t = "undefined",
      i =
        typeof window !== t &&
        typeof window.navigator !== t &&
        /Trident\/|MSIE /.test(window.navigator.userAgent),
      r = ["trace", "debug", "info", "warn", "error"],
      s = {},
      o = null;
    function a(p, b) {
      var v = p[b];
      if (typeof v.bind == "function") return v.bind(p);
      try {
        return Function.prototype.bind.call(v, p);
      } catch {
        return function () {
          return Function.prototype.apply.apply(v, [p, arguments]);
        };
      }
    }
    function c() {
      console.log &&
        (console.log.apply
          ? console.log.apply(console, arguments)
          : Function.prototype.apply.apply(console.log, [console, arguments])),
        console.trace && console.trace();
    }
    function d(p) {
      return (
        p === "debug" && (p = "log"),
        typeof console === t
          ? !1
          : p === "trace" && i
            ? c
            : console[p] !== void 0
              ? a(console, p)
              : console.log !== void 0
                ? a(console, "log")
                : e
      );
    }
    function u() {
      for (var p = this.getLevel(), b = 0; b < r.length; b++) {
        var v = r[b];
        this[v] = b < p ? e : this.methodFactory(v, p, this.name);
      }
      if (
        ((this.log = this.debug),
        typeof console === t && p < this.levels.SILENT)
      )
        return "No console available for logging";
    }
    function l(p) {
      return function () {
        typeof console !== t && (u.call(this), this[p].apply(this, arguments));
      };
    }
    function h(p, b, v) {
      return d(p) || l.apply(this, arguments);
    }
    function f(p, b) {
      var v = this,
        D,
        C,
        k,
        y = "loglevel";
      typeof p == "string"
        ? (y += ":" + p)
        : typeof p == "symbol" && (y = void 0);
      function w(x) {
        var U = (r[x] || "silent").toUpperCase();
        if (!(typeof window === t || !y)) {
          try {
            window.localStorage[y] = U;
            return;
          } catch {}
          try {
            window.document.cookie = encodeURIComponent(y) + "=" + U + ";";
          } catch {}
        }
      }
      function S() {
        var x;
        if (!(typeof window === t || !y)) {
          try {
            x = window.localStorage[y];
          } catch {}
          if (typeof x === t)
            try {
              var U = window.document.cookie,
                Y = encodeURIComponent(y),
                ae = U.indexOf(Y + "=");
              ae !== -1 && (x = /^([^;]+)/.exec(U.slice(ae + Y.length + 1))[1]);
            } catch {}
          return v.levels[x] === void 0 && (x = void 0), x;
        }
      }
      function A() {
        if (!(typeof window === t || !y)) {
          try {
            window.localStorage.removeItem(y);
          } catch {}
          try {
            window.document.cookie =
              encodeURIComponent(y) +
              "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
          } catch {}
        }
      }
      function N(x) {
        var U = x;
        if (
          (typeof U == "string" &&
            v.levels[U.toUpperCase()] !== void 0 &&
            (U = v.levels[U.toUpperCase()]),
          typeof U == "number" && U >= 0 && U <= v.levels.SILENT)
        )
          return U;
        throw new TypeError("log.setLevel() called with invalid level: " + x);
      }
      (v.name = p),
        (v.levels = {
          TRACE: 0,
          DEBUG: 1,
          INFO: 2,
          WARN: 3,
          ERROR: 4,
          SILENT: 5,
        }),
        (v.methodFactory = b || h),
        (v.getLevel = function () {
          return k ?? C ?? D;
        }),
        (v.setLevel = function (x, U) {
          return (k = N(x)), U !== !1 && w(k), u.call(v);
        }),
        (v.setDefaultLevel = function (x) {
          (C = N(x)), S() || v.setLevel(x, !1);
        }),
        (v.resetLevel = function () {
          (k = null), A(), u.call(v);
        }),
        (v.enableAll = function (x) {
          v.setLevel(v.levels.TRACE, x);
        }),
        (v.disableAll = function (x) {
          v.setLevel(v.levels.SILENT, x);
        }),
        (v.rebuild = function () {
          if ((o !== v && (D = N(o.getLevel())), u.call(v), o === v))
            for (var x in s) s[x].rebuild();
        }),
        (D = N(o ? o.getLevel() : "WARN"));
      var L = S();
      L != null && (k = N(L)), u.call(v);
    }
    (o = new f()),
      (o.getLogger = function (p) {
        if ((typeof p != "symbol" && typeof p != "string") || p === "")
          throw new TypeError("You must supply a name when creating a logger.");
        var b = s[p];
        return b || (b = s[p] = new f(p, o.methodFactory)), b;
      });
    var g = typeof window !== t ? window.log : void 0;
    return (
      (o.noConflict = function () {
        return typeof window !== t && window.log === o && (window.log = g), o;
      }),
      (o.getLoggers = function () {
        return s;
      }),
      (o.default = o),
      o
    );
  });
})(Za);
var Yh = Za.exports;
const Qh = Jh(Yh);
var er = function (n, e) {
  return (
    (er =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, i) {
          t.__proto__ = i;
        }) ||
      function (t, i) {
        for (var r in i)
          Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
      }),
    er(n, e)
  );
};
function Je(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Class extends value " + String(e) + " is not a constructor or null",
    );
  er(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
function $h(n, e, t, i) {
  function r(s) {
    return s instanceof t
      ? s
      : new t(function (o) {
          o(s);
        });
  }
  return new (t || (t = Promise))(function (s, o) {
    function a(u) {
      try {
        d(i.next(u));
      } catch (l) {
        o(l);
      }
    }
    function c(u) {
      try {
        d(i.throw(u));
      } catch (l) {
        o(l);
      }
    }
    function d(u) {
      u.done ? s(u.value) : r(u.value).then(a, c);
    }
    d((i = i.apply(n, [])).next());
  });
}
function ec(n, e) {
  var t = {
      label: 0,
      sent: function () {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: [],
    },
    i,
    r,
    s,
    o = Object.create(
      (typeof Iterator == "function" ? Iterator : Object).prototype,
    );
  return (
    (o.next = a(0)),
    (o.throw = a(1)),
    (o.return = a(2)),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function a(d) {
    return function (u) {
      return c([d, u]);
    };
  }
  function c(d) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; o && ((o = 0), d[0] && (t = 0)), t; )
      try {
        if (
          ((i = 1),
          r &&
            (s =
              d[0] & 2
                ? r.return
                : d[0]
                  ? r.throw || ((s = r.return) && s.call(r), 0)
                  : r.next) &&
            !(s = s.call(r, d[1])).done)
        )
          return s;
        switch (((r = 0), s && (d = [d[0] & 2, s.value]), d[0])) {
          case 0:
          case 1:
            s = d;
            break;
          case 4:
            return t.label++, { value: d[1], done: !1 };
          case 5:
            t.label++, (r = d[1]), (d = [0]);
            continue;
          case 7:
            (d = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((s = t.trys),
              !(s = s.length > 0 && s[s.length - 1]) &&
                (d[0] === 6 || d[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (d[0] === 3 && (!s || (d[1] > s[0] && d[1] < s[3]))) {
              t.label = d[1];
              break;
            }
            if (d[0] === 6 && t.label < s[1]) {
              (t.label = s[1]), (s = d);
              break;
            }
            if (s && t.label < s[2]) {
              (t.label = s[2]), t.ops.push(d);
              break;
            }
            s[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        d = e.call(n, t);
      } catch (u) {
        (d = [6, u]), (r = 0);
      } finally {
        i = s = 0;
      }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}
function Nt(n) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && n[e],
    i = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function () {
        return (
          n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function jn(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var i = t.call(n),
    r,
    s = [],
    o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; ) s.push(r.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      r && !r.done && (t = i.return) && t.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}
function Bn(n, e, t) {
  if (arguments.length === 2)
    for (var i = 0, r = e.length, s; i < r; i++)
      (s || !(i in e)) &&
        (s || (s = Array.prototype.slice.call(e, 0, i)), (s[i] = e[i]));
  return n.concat(s || Array.prototype.slice.call(e));
}
function At(n) {
  return this instanceof At ? ((this.v = n), this) : new At(n);
}
function Xh(n, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(n, e || []),
    r,
    s = [];
  return (
    (r = Object.create(
      (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype,
    )),
    a("next"),
    a("throw"),
    a("return", o),
    (r[Symbol.asyncIterator] = function () {
      return this;
    }),
    r
  );
  function o(f) {
    return function (g) {
      return Promise.resolve(g).then(f, l);
    };
  }
  function a(f, g) {
    i[f] &&
      ((r[f] = function (p) {
        return new Promise(function (b, v) {
          s.push([f, p, b, v]) > 1 || c(f, p);
        });
      }),
      g && (r[f] = g(r[f])));
  }
  function c(f, g) {
    try {
      d(i[f](g));
    } catch (p) {
      h(s[0][3], p);
    }
  }
  function d(f) {
    f.value instanceof At
      ? Promise.resolve(f.value.v).then(u, l)
      : h(s[0][2], f);
  }
  function u(f) {
    c("next", f);
  }
  function l(f) {
    c("throw", f);
  }
  function h(f, g) {
    f(g), s.shift(), s.length && c(s[0][0], s[0][1]);
  }
}
function Zh(n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = n[Symbol.asyncIterator],
    t;
  return e
    ? e.call(n)
    : ((n = typeof Nt == "function" ? Nt(n) : n[Symbol.iterator]()),
      (t = {}),
      i("next"),
      i("throw"),
      i("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function i(s) {
    t[s] =
      n[s] &&
      function (o) {
        return new Promise(function (a, c) {
          (o = n[s](o)), r(a, c, o.done, o.value);
        });
      };
  }
  function r(s, o, a, c) {
    Promise.resolve(c).then(function (d) {
      s({ value: d, done: a });
    }, o);
  }
}
function se(n) {
  return typeof n == "function";
}
function yr(n) {
  var e = function (i) {
      Error.call(i), (i.stack = new Error().stack);
    },
    t = n(e);
  return (
    (t.prototype = Object.create(Error.prototype)),
    (t.prototype.constructor = t),
    t
  );
}
var gi = yr(function (n) {
  return function (e) {
    n(this),
      (this.message = e
        ? e.length +
          ` errors occurred during unsubscription:
` +
          e.map(function (t, i) {
            return i + 1 + ") " + t.toString();
          }).join(`
  `)
        : ""),
      (this.name = "UnsubscriptionError"),
      (this.errors = e);
  };
});
function Vn(n, e) {
  if (n) {
    var t = n.indexOf(e);
    0 <= t && n.splice(t, 1);
  }
}
var nn = (function () {
    function n(e) {
      (this.initialTeardown = e),
        (this.closed = !1),
        (this._parentage = null),
        (this._finalizers = null);
    }
    return (
      (n.prototype.unsubscribe = function () {
        var e, t, i, r, s;
        if (!this.closed) {
          this.closed = !0;
          var o = this._parentage;
          if (o)
            if (((this._parentage = null), Array.isArray(o)))
              try {
                for (var a = Nt(o), c = a.next(); !c.done; c = a.next()) {
                  var d = c.value;
                  d.remove(this);
                }
              } catch (p) {
                e = { error: p };
              } finally {
                try {
                  c && !c.done && (t = a.return) && t.call(a);
                } finally {
                  if (e) throw e.error;
                }
              }
            else o.remove(this);
          var u = this.initialTeardown;
          if (se(u))
            try {
              u();
            } catch (p) {
              s = p instanceof gi ? p.errors : [p];
            }
          var l = this._finalizers;
          if (l) {
            this._finalizers = null;
            try {
              for (var h = Nt(l), f = h.next(); !f.done; f = h.next()) {
                var g = f.value;
                try {
                  Os(g);
                } catch (p) {
                  (s = s ?? []),
                    p instanceof gi
                      ? (s = Bn(Bn([], jn(s)), jn(p.errors)))
                      : s.push(p);
                }
              }
            } catch (p) {
              i = { error: p };
            } finally {
              try {
                f && !f.done && (r = h.return) && r.call(h);
              } finally {
                if (i) throw i.error;
              }
            }
          }
          if (s) throw new gi(s);
        }
      }),
      (n.prototype.add = function (e) {
        var t;
        if (e && e !== this)
          if (this.closed) Os(e);
          else {
            if (e instanceof n) {
              if (e.closed || e._hasParent(this)) return;
              e._addParent(this);
            }
            (this._finalizers =
              (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e);
          }
      }),
      (n.prototype._hasParent = function (e) {
        var t = this._parentage;
        return t === e || (Array.isArray(t) && t.includes(e));
      }),
      (n.prototype._addParent = function (e) {
        var t = this._parentage;
        this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
      }),
      (n.prototype._removeParent = function (e) {
        var t = this._parentage;
        t === e ? (this._parentage = null) : Array.isArray(t) && Vn(t, e);
      }),
      (n.prototype.remove = function (e) {
        var t = this._finalizers;
        t && Vn(t, e), e instanceof n && e._removeParent(this);
      }),
      (n.EMPTY = (function () {
        var e = new n();
        return (e.closed = !0), e;
      })()),
      n
    );
  })(),
  tc = nn.EMPTY;
function nc(n) {
  return (
    n instanceof nn ||
    (n && "closed" in n && se(n.remove) && se(n.add) && se(n.unsubscribe))
  );
}
function Os(n) {
  se(n) ? n() : n.unsubscribe();
}
var ef = { Promise: void 0 },
  tf = {
    setTimeout: function (n, e) {
      for (var t = [], i = 2; i < arguments.length; i++)
        t[i - 2] = arguments[i];
      return setTimeout.apply(void 0, Bn([n, e], jn(t)));
    },
    clearTimeout: function (n) {
      return clearTimeout(n);
    },
    delegate: void 0,
  };
function ic(n) {
  tf.setTimeout(function () {
    throw n;
  });
}
function Ns() {}
function _n(n) {
  n();
}
var kr = (function (n) {
    Je(e, n);
    function e(t) {
      var i = n.call(this) || this;
      return (
        (i.isStopped = !1),
        t ? ((i.destination = t), nc(t) && t.add(i)) : (i.destination = sf),
        i
      );
    }
    return (
      (e.create = function (t, i, r) {
        return new tr(t, i, r);
      }),
      (e.prototype.next = function (t) {
        this.isStopped || this._next(t);
      }),
      (e.prototype.error = function (t) {
        this.isStopped || ((this.isStopped = !0), this._error(t));
      }),
      (e.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (e.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0),
          n.prototype.unsubscribe.call(this),
          (this.destination = null));
      }),
      (e.prototype._next = function (t) {
        this.destination.next(t);
      }),
      (e.prototype._error = function (t) {
        try {
          this.destination.error(t);
        } finally {
          this.unsubscribe();
        }
      }),
      (e.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      e
    );
  })(nn),
  nf = (function () {
    function n(e) {
      this.partialObserver = e;
    }
    return (
      (n.prototype.next = function (e) {
        var t = this.partialObserver;
        if (t.next)
          try {
            t.next(e);
          } catch (i) {
            fn(i);
          }
      }),
      (n.prototype.error = function (e) {
        var t = this.partialObserver;
        if (t.error)
          try {
            t.error(e);
          } catch (i) {
            fn(i);
          }
        else fn(e);
      }),
      (n.prototype.complete = function () {
        var e = this.partialObserver;
        if (e.complete)
          try {
            e.complete();
          } catch (t) {
            fn(t);
          }
      }),
      n
    );
  })(),
  tr = (function (n) {
    Je(e, n);
    function e(t, i, r) {
      var s = n.call(this) || this,
        o;
      return (
        se(t) || !t
          ? (o = {
              next: t ?? void 0,
              error: i ?? void 0,
              complete: r ?? void 0,
            })
          : (o = t),
        (s.destination = new nf(o)),
        s
      );
    }
    return e;
  })(kr);
function fn(n) {
  ic(n);
}
function rf(n) {
  throw n;
}
var sf = { closed: !0, next: Ns, error: rf, complete: Ns },
  Sr = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })();
function rc(n) {
  return n;
}
function of(n) {
  return n.length === 0
    ? rc
    : n.length === 1
      ? n[0]
      : function (e) {
          return n.reduce(function (t, i) {
            return i(t);
          }, e);
        };
}
var be = (function () {
  function n(e) {
    e && (this._subscribe = e);
  }
  return (
    (n.prototype.lift = function (e) {
      var t = new n();
      return (t.source = this), (t.operator = e), t;
    }),
    (n.prototype.subscribe = function (e, t, i) {
      var r = this,
        s = cf(e) ? e : new tr(e, t, i);
      return (
        _n(function () {
          var o = r,
            a = o.operator,
            c = o.source;
          s.add(a ? a.call(s, c) : c ? r._subscribe(s) : r._trySubscribe(s));
        }),
        s
      );
    }),
    (n.prototype._trySubscribe = function (e) {
      try {
        return this._subscribe(e);
      } catch (t) {
        e.error(t);
      }
    }),
    (n.prototype.forEach = function (e, t) {
      var i = this;
      return (
        (t = Ls(t)),
        new t(function (r, s) {
          var o = new tr({
            next: function (a) {
              try {
                e(a);
              } catch (c) {
                s(c), o.unsubscribe();
              }
            },
            error: s,
            complete: r,
          });
          i.subscribe(o);
        })
      );
    }),
    (n.prototype._subscribe = function (e) {
      var t;
      return (t = this.source) === null || t === void 0
        ? void 0
        : t.subscribe(e);
    }),
    (n.prototype[Sr] = function () {
      return this;
    }),
    (n.prototype.pipe = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return of(e)(this);
    }),
    (n.prototype.toPromise = function (e) {
      var t = this;
      return (
        (e = Ls(e)),
        new e(function (i, r) {
          var s;
          t.subscribe(
            function (o) {
              return (s = o);
            },
            function (o) {
              return r(o);
            },
            function () {
              return i(s);
            },
          );
        })
      );
    }),
    (n.create = function (e) {
      return new n(e);
    }),
    n
  );
})();
function Ls(n) {
  var e;
  return (e = n ?? ef.Promise) !== null && e !== void 0 ? e : Promise;
}
function af(n) {
  return n && se(n.next) && se(n.error) && se(n.complete);
}
function cf(n) {
  return (n && n instanceof kr) || (af(n) && nc(n));
}
function df(n) {
  return se(n?.lift);
}
function rn(n) {
  return function (e) {
    if (df(e))
      return e.lift(function (t) {
        try {
          return n(t, this);
        } catch (i) {
          this.error(i);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function qn(n, e, t, i, r) {
  return new uf(n, e, t, i, r);
}
var uf = (function (n) {
    Je(e, n);
    function e(t, i, r, s, o, a) {
      var c = n.call(this, t) || this;
      return (
        (c.onFinalize = o),
        (c.shouldUnsubscribe = a),
        (c._next = i
          ? function (d) {
              try {
                i(d);
              } catch (u) {
                t.error(u);
              }
            }
          : n.prototype._next),
        (c._error = s
          ? function (d) {
              try {
                s(d);
              } catch (u) {
                t.error(u);
              } finally {
                this.unsubscribe();
              }
            }
          : n.prototype._error),
        (c._complete = r
          ? function () {
              try {
                r();
              } catch (d) {
                t.error(d);
              } finally {
                this.unsubscribe();
              }
            }
          : n.prototype._complete),
        c
      );
    }
    return (
      (e.prototype.unsubscribe = function () {
        var t;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var i = this.closed;
          n.prototype.unsubscribe.call(this),
            !i &&
              ((t = this.onFinalize) === null || t === void 0 || t.call(this));
        }
      }),
      e
    );
  })(kr),
  lf = yr(function (n) {
    return function () {
      n(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    };
  }),
  sc = (function (n) {
    Je(e, n);
    function e() {
      var t = n.call(this) || this;
      return (
        (t.closed = !1),
        (t.currentObservers = null),
        (t.observers = []),
        (t.isStopped = !1),
        (t.hasError = !1),
        (t.thrownError = null),
        t
      );
    }
    return (
      (e.prototype.lift = function (t) {
        var i = new Us(this, this);
        return (i.operator = t), i;
      }),
      (e.prototype._throwIfClosed = function () {
        if (this.closed) throw new lf();
      }),
      (e.prototype.next = function (t) {
        var i = this;
        _n(function () {
          var r, s;
          if ((i._throwIfClosed(), !i.isStopped)) {
            i.currentObservers ||
              (i.currentObservers = Array.from(i.observers));
            try {
              for (
                var o = Nt(i.currentObservers), a = o.next();
                !a.done;
                a = o.next()
              ) {
                var c = a.value;
                c.next(t);
              }
            } catch (d) {
              r = { error: d };
            } finally {
              try {
                a && !a.done && (s = o.return) && s.call(o);
              } finally {
                if (r) throw r.error;
              }
            }
          }
        });
      }),
      (e.prototype.error = function (t) {
        var i = this;
        _n(function () {
          if ((i._throwIfClosed(), !i.isStopped)) {
            (i.hasError = i.isStopped = !0), (i.thrownError = t);
            for (var r = i.observers; r.length; ) r.shift().error(t);
          }
        });
      }),
      (e.prototype.complete = function () {
        var t = this;
        _n(function () {
          if ((t._throwIfClosed(), !t.isStopped)) {
            t.isStopped = !0;
            for (var i = t.observers; i.length; ) i.shift().complete();
          }
        });
      }),
      (e.prototype.unsubscribe = function () {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }),
      Object.defineProperty(e.prototype, "observed", {
        get: function () {
          var t;
          return (
            ((t = this.observers) === null || t === void 0
              ? void 0
              : t.length) > 0
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype._trySubscribe = function (t) {
        return this._throwIfClosed(), n.prototype._trySubscribe.call(this, t);
      }),
      (e.prototype._subscribe = function (t) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(t),
          this._innerSubscribe(t)
        );
      }),
      (e.prototype._innerSubscribe = function (t) {
        var i = this,
          r = this,
          s = r.hasError,
          o = r.isStopped,
          a = r.observers;
        return s || o
          ? tc
          : ((this.currentObservers = null),
            a.push(t),
            new nn(function () {
              (i.currentObservers = null), Vn(a, t);
            }));
      }),
      (e.prototype._checkFinalizedStatuses = function (t) {
        var i = this,
          r = i.hasError,
          s = i.thrownError,
          o = i.isStopped;
        r ? t.error(s) : o && t.complete();
      }),
      (e.prototype.asObservable = function () {
        var t = new be();
        return (t.source = this), t;
      }),
      (e.create = function (t, i) {
        return new Us(t, i);
      }),
      e
    );
  })(be),
  Us = (function (n) {
    Je(e, n);
    function e(t, i) {
      var r = n.call(this) || this;
      return (r.destination = t), (r.source = i), r;
    }
    return (
      (e.prototype.next = function (t) {
        var i, r;
        (r =
          (i = this.destination) === null || i === void 0 ? void 0 : i.next) ===
          null ||
          r === void 0 ||
          r.call(i, t);
      }),
      (e.prototype.error = function (t) {
        var i, r;
        (r =
          (i = this.destination) === null || i === void 0
            ? void 0
            : i.error) === null ||
          r === void 0 ||
          r.call(i, t);
      }),
      (e.prototype.complete = function () {
        var t, i;
        (i =
          (t = this.destination) === null || t === void 0
            ? void 0
            : t.complete) === null ||
          i === void 0 ||
          i.call(t);
      }),
      (e.prototype._subscribe = function (t) {
        var i, r;
        return (r =
          (i = this.source) === null || i === void 0
            ? void 0
            : i.subscribe(t)) !== null && r !== void 0
          ? r
          : tc;
      }),
      e
    );
  })(sc);
(function (n) {
  Je(e, n);
  function e(t) {
    var i = n.call(this) || this;
    return (i._value = t), i;
  }
  return (
    Object.defineProperty(e.prototype, "value", {
      get: function () {
        return this.getValue();
      },
      enumerable: !1,
      configurable: !0,
    }),
    (e.prototype._subscribe = function (t) {
      var i = n.prototype._subscribe.call(this, t);
      return !i.closed && t.next(this._value), i;
    }),
    (e.prototype.getValue = function () {
      var t = this,
        i = t.hasError,
        r = t.thrownError,
        s = t._value;
      if (i) throw r;
      return this._throwIfClosed(), s;
    }),
    (e.prototype.next = function (t) {
      n.prototype.next.call(this, (this._value = t));
    }),
    e
  );
})(sc);
var hf = {
    now: function () {
      return Date.now();
    },
  },
  ff = (function (n) {
    Je(e, n);
    function e(t, i) {
      return n.call(this) || this;
    }
    return (
      (e.prototype.schedule = function (t, i) {
        return this;
      }),
      e
    );
  })(nn),
  Fs = {
    setInterval: function (n, e) {
      for (var t = [], i = 2; i < arguments.length; i++)
        t[i - 2] = arguments[i];
      return setInterval.apply(void 0, Bn([n, e], jn(t)));
    },
    clearInterval: function (n) {
      return clearInterval(n);
    },
    delegate: void 0,
  },
  pf = (function (n) {
    Je(e, n);
    function e(t, i) {
      var r = n.call(this, t, i) || this;
      return (r.scheduler = t), (r.work = i), (r.pending = !1), r;
    }
    return (
      (e.prototype.schedule = function (t, i) {
        var r;
        if ((i === void 0 && (i = 0), this.closed)) return this;
        this.state = t;
        var s = this.id,
          o = this.scheduler;
        return (
          s != null && (this.id = this.recycleAsyncId(o, s, i)),
          (this.pending = !0),
          (this.delay = i),
          (this.id =
            (r = this.id) !== null && r !== void 0
              ? r
              : this.requestAsyncId(o, this.id, i)),
          this
        );
      }),
      (e.prototype.requestAsyncId = function (t, i, r) {
        return (
          r === void 0 && (r = 0), Fs.setInterval(t.flush.bind(t, this), r)
        );
      }),
      (e.prototype.recycleAsyncId = function (t, i, r) {
        if (
          (r === void 0 && (r = 0),
          r != null && this.delay === r && this.pending === !1)
        )
          return i;
        i != null && Fs.clearInterval(i);
      }),
      (e.prototype.execute = function (t, i) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        var r = this._execute(t, i);
        if (r) return r;
        this.pending === !1 &&
          this.id != null &&
          (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }),
      (e.prototype._execute = function (t, i) {
        var r = !1,
          s;
        try {
          this.work(t);
        } catch (o) {
          (r = !0), (s = o || new Error("Scheduled action threw falsy error"));
        }
        if (r) return this.unsubscribe(), s;
      }),
      (e.prototype.unsubscribe = function () {
        if (!this.closed) {
          var t = this,
            i = t.id,
            r = t.scheduler,
            s = r.actions;
          (this.work = this.state = this.scheduler = null),
            (this.pending = !1),
            Vn(s, this),
            i != null && (this.id = this.recycleAsyncId(r, i, null)),
            (this.delay = null),
            n.prototype.unsubscribe.call(this);
        }
      }),
      e
    );
  })(ff),
  js = (function () {
    function n(e, t) {
      t === void 0 && (t = n.now),
        (this.schedulerActionCtor = e),
        (this.now = t);
    }
    return (
      (n.prototype.schedule = function (e, t, i) {
        return (
          t === void 0 && (t = 0),
          new this.schedulerActionCtor(this, e).schedule(i, t)
        );
      }),
      (n.now = hf.now),
      n
    );
  })(),
  mf = (function (n) {
    Je(e, n);
    function e(t, i) {
      i === void 0 && (i = js.now);
      var r = n.call(this, t, i) || this;
      return (r.actions = []), (r._active = !1), r;
    }
    return (
      (e.prototype.flush = function (t) {
        var i = this.actions;
        if (this._active) {
          i.push(t);
          return;
        }
        var r;
        this._active = !0;
        do if ((r = t.execute(t.state, t.delay))) break;
        while ((t = i.shift()));
        if (((this._active = !1), r)) {
          for (; (t = i.shift()); ) t.unsubscribe();
          throw r;
        }
      }),
      e
    );
  })(js);
new mf(pf);
function gf(n) {
  return n && se(n.schedule);
}
function vf(n) {
  return n[n.length - 1];
}
function oc(n) {
  return gf(vf(n)) ? n.pop() : void 0;
}
var ac = function (n) {
  return n && typeof n.length == "number" && typeof n != "function";
};
function cc(n) {
  return se(n?.then);
}
function dc(n) {
  return se(n[Sr]);
}
function uc(n) {
  return Symbol.asyncIterator && se(n?.[Symbol.asyncIterator]);
}
function lc(n) {
  return new TypeError(
    "You provided " +
      (n !== null && typeof n == "object"
        ? "an invalid object"
        : "'" + n + "'") +
      " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.",
  );
}
function bf() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var hc = bf();
function fc(n) {
  return se(n?.[hc]);
}
function pc(n) {
  return Xh(this, arguments, function () {
    var e, t, i, r;
    return ec(this, function (s) {
      switch (s.label) {
        case 0:
          (e = n.getReader()), (s.label = 1);
        case 1:
          s.trys.push([1, , 9, 10]), (s.label = 2);
        case 2:
          return [4, At(e.read())];
        case 3:
          return (
            (t = s.sent()),
            (i = t.value),
            (r = t.done),
            r ? [4, At(void 0)] : [3, 5]
          );
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, At(i)];
        case 6:
          return [4, s.sent()];
        case 7:
          return s.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return e.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function mc(n) {
  return se(n?.getReader);
}
function sn(n) {
  if (n instanceof be) return n;
  if (n != null) {
    if (dc(n)) return yf(n);
    if (ac(n)) return kf(n);
    if (cc(n)) return Sf(n);
    if (uc(n)) return gc(n);
    if (fc(n)) return Tf(n);
    if (mc(n)) return Cf(n);
  }
  throw lc(n);
}
function yf(n) {
  return new be(function (e) {
    var t = n[Sr]();
    if (se(t.subscribe)) return t.subscribe(e);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable",
    );
  });
}
function kf(n) {
  return new be(function (e) {
    for (var t = 0; t < n.length && !e.closed; t++) e.next(n[t]);
    e.complete();
  });
}
function Sf(n) {
  return new be(function (e) {
    n.then(
      function (t) {
        e.closed || (e.next(t), e.complete());
      },
      function (t) {
        return e.error(t);
      },
    ).then(null, ic);
  });
}
function Tf(n) {
  return new be(function (e) {
    var t, i;
    try {
      for (var r = Nt(n), s = r.next(); !s.done; s = r.next()) {
        var o = s.value;
        if ((e.next(o), e.closed)) return;
      }
    } catch (a) {
      t = { error: a };
    } finally {
      try {
        s && !s.done && (i = r.return) && i.call(r);
      } finally {
        if (t) throw t.error;
      }
    }
    e.complete();
  });
}
function gc(n) {
  return new be(function (e) {
    Pf(n, e).catch(function (t) {
      return e.error(t);
    });
  });
}
function Cf(n) {
  return gc(pc(n));
}
function Pf(n, e) {
  var t, i, r, s;
  return $h(this, void 0, void 0, function () {
    var o, a;
    return ec(this, function (c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), (t = Zh(n)), (c.label = 1);
        case 1:
          return [4, t.next()];
        case 2:
          if (((i = c.sent()), !!i.done)) return [3, 4];
          if (((o = i.value), e.next(o), e.closed)) return [2];
          c.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return (a = c.sent()), (r = { error: a }), [3, 11];
        case 6:
          return (
            c.trys.push([6, , 9, 10]),
            i && !i.done && (s = t.return) ? [4, s.call(t)] : [3, 8]
          );
        case 7:
          c.sent(), (c.label = 8);
        case 8:
          return [3, 10];
        case 9:
          if (r) throw r.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function ut(n, e, t, i, r) {
  i === void 0 && (i = 0), r === void 0 && (r = !1);
  var s = e.schedule(function () {
    t(), r ? n.add(this.schedule(null, i)) : this.unsubscribe();
  }, i);
  if ((n.add(s), !r)) return s;
}
function vc(n, e) {
  return (
    e === void 0 && (e = 0),
    rn(function (t, i) {
      t.subscribe(
        qn(
          i,
          function (r) {
            return ut(
              i,
              n,
              function () {
                return i.next(r);
              },
              e,
            );
          },
          function () {
            return ut(
              i,
              n,
              function () {
                return i.complete();
              },
              e,
            );
          },
          function (r) {
            return ut(
              i,
              n,
              function () {
                return i.error(r);
              },
              e,
            );
          },
        ),
      );
    })
  );
}
function bc(n, e) {
  return (
    e === void 0 && (e = 0),
    rn(function (t, i) {
      i.add(
        n.schedule(function () {
          return t.subscribe(i);
        }, e),
      );
    })
  );
}
function Ef(n, e) {
  return sn(n).pipe(bc(e), vc(e));
}
function wf(n, e) {
  return sn(n).pipe(bc(e), vc(e));
}
function Rf(n, e) {
  return new be(function (t) {
    var i = 0;
    return e.schedule(function () {
      i === n.length
        ? t.complete()
        : (t.next(n[i++]), t.closed || this.schedule());
    });
  });
}
function _f(n, e) {
  return new be(function (t) {
    var i;
    return (
      ut(t, e, function () {
        (i = n[hc]()),
          ut(
            t,
            e,
            function () {
              var r, s, o;
              try {
                (r = i.next()), (s = r.value), (o = r.done);
              } catch (a) {
                t.error(a);
                return;
              }
              o ? t.complete() : t.next(s);
            },
            0,
            !0,
          );
      }),
      function () {
        return se(i?.return) && i.return();
      }
    );
  });
}
function yc(n, e) {
  if (!n) throw new Error("Iterable cannot be null");
  return new be(function (t) {
    ut(t, e, function () {
      var i = n[Symbol.asyncIterator]();
      ut(
        t,
        e,
        function () {
          i.next().then(function (r) {
            r.done ? t.complete() : t.next(r.value);
          });
        },
        0,
        !0,
      );
    });
  });
}
function If(n, e) {
  return yc(pc(n), e);
}
function xf(n, e) {
  if (n != null) {
    if (dc(n)) return Ef(n, e);
    if (ac(n)) return Rf(n, e);
    if (cc(n)) return wf(n, e);
    if (uc(n)) return yc(n, e);
    if (fc(n)) return _f(n, e);
    if (mc(n)) return If(n, e);
  }
  throw lc(n);
}
function Af(n, e) {
  return e ? xf(n, e) : sn(n);
}
yr(function (n) {
  return function (e) {
    e === void 0 && (e = null),
      n(this),
      (this.message = "Timeout has occurred"),
      (this.name = "TimeoutError"),
      (this.info = e);
  };
});
function on(n, e) {
  return rn(function (t, i) {
    var r = 0;
    t.subscribe(
      qn(i, function (s) {
        i.next(n.call(e, s, r++));
      }),
    );
  });
}
function Df(n, e, t, i, r, s, o, a) {
  var c = [],
    d = 0,
    u = 0,
    l = !1,
    h = function () {
      l && !c.length && !d && e.complete();
    },
    f = function (p) {
      return d < i ? g(p) : c.push(p);
    },
    g = function (p) {
      d++;
      var b = !1;
      sn(t(p, u++)).subscribe(
        qn(
          e,
          function (v) {
            e.next(v);
          },
          function () {
            b = !0;
          },
          void 0,
          function () {
            if (b)
              try {
                d--;
                for (
                  var v = function () {
                    var D = c.shift();
                    o || g(D);
                  };
                  c.length && d < i;

                )
                  v();
                h();
              } catch (D) {
                e.error(D);
              }
          },
        ),
      );
    };
  return (
    n.subscribe(
      qn(e, f, function () {
        (l = !0), h();
      }),
    ),
    function () {}
  );
}
function kc(n, e, t) {
  return (
    t === void 0 && (t = 1 / 0),
    se(e)
      ? kc(function (i, r) {
          return on(function (s, o) {
            return e(i, s, r, o);
          })(sn(n(i, r)));
        }, t)
      : (typeof e == "number" && (t = e),
        rn(function (i, r) {
          return Df(i, r, n, t);
        }))
  );
}
function Mf(n) {
  return kc(rc, n);
}
function Of() {
  return Mf(1);
}
function Bs() {
  for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
  return Of()(Af(n, oc(n)));
}
function an() {
  for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
  var t = oc(n);
  return rn(function (i, r) {
    (t ? Bs(n, i, t) : Bs(n, i)).subscribe(r);
  });
}
var Nf = "lk";
function Sc(n) {
  return typeof n > "u" ? !1 : Lf(n) || Uf(n);
}
function Lf(n) {
  var e;
  return n
    ? n.hasOwnProperty("participant") &&
        n.hasOwnProperty("source") &&
        n.hasOwnProperty("track") &&
        typeof ((e = n.publication) == null ? void 0 : e.track) < "u"
    : !1;
}
function Uf(n) {
  return n
    ? n.hasOwnProperty("participant") &&
        n.hasOwnProperty("source") &&
        n.hasOwnProperty("publication") &&
        typeof n.publication < "u"
    : !1;
}
function Ff(n) {
  return n
    ? n.hasOwnProperty("participant") &&
        n.hasOwnProperty("source") &&
        typeof n.publication > "u"
    : !1;
}
function mm(n) {
  if (typeof n == "string" || typeof n == "number") return `${n}`;
  if (Ff(n)) return `${n.participant.identity}_${n.source}_placeholder`;
  if (Sc(n))
    return `${n.participant.identity}_${n.publication.source}_${n.publication.trackSid}`;
  throw new Error(`Can't generate a id for the given track reference: ${n}`);
}
function gm(n) {
  return n instanceof Un;
}
var jf = [
    P.ConnectionStateChanged,
    P.RoomMetadataChanged,
    P.ActiveSpeakersChanged,
    P.ConnectionQualityChanged,
    P.ParticipantConnected,
    P.ParticipantDisconnected,
    P.ParticipantPermissionsChanged,
    P.ParticipantMetadataChanged,
    P.ParticipantNameChanged,
    P.ParticipantAttributesChanged,
    P.TrackMuted,
    P.TrackUnmuted,
    P.TrackPublished,
    P.TrackUnpublished,
    P.TrackStreamStateChanged,
    P.TrackSubscriptionFailed,
    P.TrackSubscriptionPermissionChanged,
    P.TrackSubscriptionStatusChanged,
  ],
  Bf = [...jf, P.LocalTrackPublished, P.LocalTrackUnpublished];
R.TrackPublished,
  R.TrackUnpublished,
  R.TrackMuted,
  R.TrackUnmuted,
  R.TrackStreamStateChanged,
  R.TrackSubscribed,
  R.TrackUnsubscribed,
  R.TrackSubscriptionPermissionChanged,
  R.TrackSubscriptionFailed,
  R.LocalTrackPublished,
  R.LocalTrackUnpublished;
var Vf = [
  R.ConnectionQualityChanged,
  R.IsSpeakingChanged,
  R.ParticipantMetadataChanged,
  R.ParticipantPermissionsChanged,
  R.TrackMuted,
  R.TrackUnmuted,
  R.TrackPublished,
  R.TrackUnpublished,
  R.TrackStreamStateChanged,
  R.TrackSubscriptionFailed,
  R.TrackSubscriptionPermissionChanged,
  R.TrackSubscriptionStatusChanged,
];
[...Vf, R.LocalTrackPublished, R.LocalTrackUnpublished];
var zn = Qh.getLogger("lk-components-js");
zn.setDefaultLevel("WARN");
function Tc(n) {
  return typeof n == "object";
}
function Cc(n) {
  return Array.isArray(n) && n.filter(Tc).length > 0;
}
function qf(n) {
  return `${Nf}-${n}`;
}
function vm(n) {
  const e = Vs(n),
    t = Pc(n.participant).pipe(
      on(() => Vs(n)),
      an(e),
    );
  return {
    className: qf(
      n.source === _.Source.Camera || n.source === _.Source.ScreenShare
        ? "participant-media-video"
        : "participant-media-audio",
    ),
    trackObserver: t,
  };
}
function Vs(n) {
  if (Sc(n)) return n.publication;
  {
    const { source: e, name: t, participant: i } = n;
    if (e && t)
      return i
        .getTrackPublications()
        .find((r) => r.source === e && r.trackName === t);
    if (t) return i.getTrackPublicationByName(t);
    if (e) return i.getTrackPublication(e);
    throw new Error("At least one of source and name needs to be defined");
  }
}
function zf(n, ...e) {
  return new be((t) => {
    const i = () => {
      t.next(n);
    };
    return (
      e.forEach((r) => {
        n.on(r, i);
      }),
      () => {
        e.forEach((r) => {
          n.off(r, i);
        });
      }
    );
  }).pipe(an(n));
}
function Gf(n, e) {
  return new be((t) => {
    const i = (...r) => {
      t.next(r);
    };
    return (
      n.on(e, i),
      () => {
        n.off(e, i);
      }
    );
  });
}
function Wf(n) {
  return Gf(n, P.ConnectionStateChanged).pipe(
    on(([e]) => e),
    an(n.state),
  );
}
function Kf(n, ...e) {
  return new be((t) => {
    const i = () => {
      t.next(n);
    };
    return (
      e.forEach((r) => {
        n.on(r, i);
      }),
      () => {
        e.forEach((r) => {
          n.off(r, i);
        });
      }
    );
  }).pipe(an(n));
}
function Pc(n) {
  return Kf(
    n,
    R.TrackMuted,
    R.TrackUnmuted,
    R.ParticipantPermissionsChanged,
    R.TrackPublished,
    R.TrackUnpublished,
    R.LocalTrackPublished,
    R.LocalTrackUnpublished,
    R.MediaDevicesError,
    R.TrackSubscriptionStatusChanged,
  ).pipe(
    on((e) => {
      const {
          isMicrophoneEnabled: t,
          isCameraEnabled: i,
          isScreenShareEnabled: r,
        } = e,
        s = e.getTrackPublication(_.Source.Microphone),
        o = e.getTrackPublication(_.Source.Camera);
      return {
        isCameraEnabled: i,
        isMicrophoneEnabled: t,
        isScreenShareEnabled: r,
        cameraTrack: o,
        microphoneTrack: s,
        participant: e,
      };
    }),
  );
}
new TextEncoder();
new TextDecoder();
function bm() {
  return { className: "lk-room-container" };
}
function qs(n, e, t = !0) {
  const i = [n.localParticipant, ...Array.from(n.remoteParticipants.values())],
    r = [];
  return (
    i.forEach((s) => {
      e.forEach((o) => {
        const a = Array.from(s.trackPublications.values())
          .filter((c) => c.source === o && (!t || c.track))
          .map((c) => ({ participant: s, publication: c, source: c.source }));
        r.push(...a);
      });
    }),
    { trackReferences: r, participants: i }
  );
}
function Hf(n, e, t) {
  var i, r;
  const s = (i = t.additionalRoomEvents) != null ? i : Bf,
    o = (r = t.onlySubscribed) != null ? r : !0,
    a = Array.from(
      new Set([
        P.ParticipantConnected,
        P.ParticipantDisconnected,
        P.ConnectionStateChanged,
        P.LocalTrackPublished,
        P.LocalTrackUnpublished,
        P.TrackPublished,
        P.TrackUnpublished,
        P.TrackSubscriptionStatusChanged,
        ...s,
      ]).values(),
    );
  return zf(n, ...a).pipe(
    on((c) => {
      const d = qs(c, e, o);
      return (
        zn.debug(
          `TrackReference[] was updated. (length ${d.trackReferences.length})`,
          d,
        ),
        d
      );
    }),
    an(qs(n, e, o)),
  );
}
T.createContext(void 0);
const Jf = T.createContext(void 0);
function Yf() {
  return T.useContext(Jf);
}
function ym(n) {
  const e = Yf(),
    t = n ?? e;
  if (!t)
    throw new Error(
      "No TrackRef, make sure you are inside a TrackRefContext or pass the TrackRef explicitly",
    );
  return t;
}
T.createContext(void 0);
const Qf = T.createContext(void 0);
function Ec() {
  return T.useContext(Qf);
}
function Tr(n) {
  const e = Ec(),
    t = n ?? e;
  if (!t)
    throw new Error(
      "No room provided, make sure you are inside a Room context or pass the room explicitly",
    );
  return t;
}
const km = T.createContext(void 0);
function $f(n, e, t = !0) {
  const [i, r] = T.useState(e);
  return (
    T.useEffect(() => {
      if ((t && r(e), typeof window > "u" || !n)) return;
      const s = n.subscribe(r);
      return () => s.unsubscribe();
    }, [n, t]),
    i
  );
}
function Xf(n) {
  const e = Tr(n),
    t = T.useMemo(() => Wf(e), [e]);
  return $f(t, e.state);
}
function Sm(n = {}) {
  const e = Tr(n.room),
    [t, i] = T.useState(e.localParticipant),
    [r, s] = T.useState(t.isMicrophoneEnabled),
    [o, a] = T.useState(t.isMicrophoneEnabled),
    [c, d] = T.useState(t.lastMicrophoneError),
    [u, l] = T.useState(t.lastCameraError),
    [h, f] = T.useState(t.isMicrophoneEnabled),
    [g, p] = T.useState(void 0),
    [b, v] = T.useState(void 0),
    D = (C) => {
      a(C.isCameraEnabled),
        s(C.isMicrophoneEnabled),
        f(C.isScreenShareEnabled),
        v(C.cameraTrack),
        p(C.microphoneTrack),
        d(C.participant.lastMicrophoneError),
        l(C.participant.lastCameraError),
        i(C.participant);
    };
  return (
    T.useEffect(() => {
      const C = Pc(e.localParticipant).subscribe(D);
      return () => C.unsubscribe();
    }, [e]),
    {
      isMicrophoneEnabled: r,
      isScreenShareEnabled: h,
      isCameraEnabled: o,
      microphoneTrack: g,
      cameraTrack: b,
      lastMicrophoneError: c,
      lastCameraError: u,
      localParticipant: t,
    }
  );
}
function Zf(
  n = [
    _.Source.Camera,
    _.Source.Microphone,
    _.Source.ScreenShare,
    _.Source.ScreenShareAudio,
    _.Source.Unknown,
  ],
  e = {},
) {
  const t = Tr(e.room),
    [i, r] = T.useState([]),
    [s, o] = T.useState([]),
    a = T.useMemo(
      () => n.map((c) => (Tc(c) ? c.source : c)),
      [JSON.stringify(n)],
    );
  return (
    T.useEffect(() => {
      const c = Hf(t, a, {
        additionalRoomEvents: e.updateOnlyOn,
        onlySubscribed: e.onlySubscribed,
      }).subscribe(({ trackReferences: d, participants: u }) => {
        zn.debug("setting track bundles", d, u), r(d), o(u);
      });
      return () => c.unsubscribe();
    }, [
      t,
      JSON.stringify(e.onlySubscribed),
      JSON.stringify(e.updateOnlyOn),
      JSON.stringify(n),
    ]),
    T.useMemo(() => {
      if (Cc(n)) {
        const c = tp(n, s),
          d = Array.from(i);
        return (
          s.forEach((u) => {
            c.has(u.identity) &&
              (c.get(u.identity) ?? []).forEach((l) => {
                if (
                  i.find(
                    ({ participant: f, publication: g }) =>
                      u.identity === f.identity && g.source === l,
                  )
                )
                  return;
                zn.debug(`Add ${l} placeholder for participant ${u.identity}.`);
                const h = { participant: u, source: l };
                d.push(h);
              });
          }),
          d
        );
      } else return i;
    }, [i, s, n])
  );
}
function ep(n, e) {
  const t = new Set(n);
  for (const i of e) t.delete(i);
  return t;
}
function tp(n, e) {
  const t = new Map();
  if (Cc(n)) {
    const i = n.filter((r) => r.withPlaceholder).map((r) => r.source);
    e.forEach((r) => {
      const s = r
          .getTrackPublications()
          .map((a) => {
            var c;
            return (c = a.track) == null ? void 0 : c.source;
          })
          .filter((a) => a !== void 0),
        o = Array.from(ep(new Set(i), new Set(s)));
      o.length > 0 && t.set(r.identity, o);
    });
  }
  return t;
}
var nr = ((n) => ((n.Local = "local"), (n.Remote = "remote"), n))(nr || {}),
  ir = ((n) => (
    (n.Camera = "camera"),
    (n.Microphone = "microphone"),
    (n.ScreenShare = "screen_share"),
    n
  ))(ir || {});
const np = (n) =>
    n.flatMap((e) => {
      const t = [],
        i = e.publication.trackName,
        r = e.participant.identity,
        s = e.participant.isLocal ? "local" : "remote";
      let o;
      e.publication.source === _.Source.Camera
        ? (o = "camera")
        : e.publication.source === _.Source.ScreenShare
          ? (o = "screen_share")
          : (o = "microphone");
      const a = (c, d) => {
        c &&
          t.push({
            id: c.mediaStreamTrack.id,
            source: o,
            name: i,
            userName: r,
            origin: s,
            media: d,
            track: c.mediaStreamTrack,
            isMuted: c.isMuted,
            setMuted: (u) => {
              c.mediaStreamTrack.enabled = !u;
            },
            onEnded: (u) => {
              c.on("ended", u);
            },
            offEnded: (u) => {
              c.off("ended", u);
            },
          });
      };
      return (
        a(e.publication.audioTrack, "audio"),
        a(e.publication.videoTrack, "video"),
        t
      );
    }),
  zs = (n, e) => {
    const t = {
      id: n.id,
      source: e.source,
      name: e.name,
      userName: e.userName,
      media: n.kind === "audio" ? "audio" : "video",
      origin: e.origin,
      track: n,
      get isMuted() {
        return !n.enabled || n.muted;
      },
      setMuted: (i) => {
        (n.enabled = !i), e.mutedCb?.(i);
      },
      onEnded: (i) => {
        n.onended = i;
      },
      offEnded: (i) => {
        n.onended = null;
      },
    };
    return (
      (n.onmute = () => {
        e.mutedCb?.(t.isMuted);
      }),
      (n.onunmute = () => {
        e.mutedCb?.(t.isMuted);
      }),
      e.mutedCb?.(t.isMuted),
      t
    );
  },
  Gs = "User",
  Ws = "Assistant",
  Ks = "https://realtime.chatgpt.com",
  ip = [],
  Cr = T.createContext({
    room: void 0,
    getTracks: () => ip,
    getConnectionState: () => null,
    selectVoiceModeMetadata: () => {
      throw new Error("Null implementation - please provide a proper context");
    },
    initVoiceMode: () =>
      Promise.reject(
        new Error("Null implementation - please provide a proper context"),
      ),
  }),
  Pr = () => T.useContext(Cr),
  Tm = ({ children: n }) => {
    const e = Ec(),
      t = Zf(),
      i = Xf(e),
      r = we(),
      s = T.useCallback(
        (u) => {
          const l = np(t);
          return u ? l.filter((h) => u.includes(h.source)) : l;
        },
        [t],
      ),
      o = T.useCallback(() => i, [i]),
      a = T.useCallback((u) => {
        const { default_voice_mode: l, modes: h } = u,
          f = h.find((g) => g.mode === l);
        if (!f)
          throw new Error("No voice status mode found for default mode " + l);
        return f;
      }, []),
      c = T.useCallback(
        async (u, l) => {
          const h = await sd.getVoiceToken(
            u,
            l.eventSource,
            l.proofOfWorkAnswer,
          );
          return h.token && h.url && h.e2ee_key
            ? (Ri(
                {
                  conversationId: u.conversation_id ?? l.clientThreadId,
                  voiceSessionId: u.voice_session_id,
                  voiceMode: h.voice_mode_decision.voice_mode,
                  credentials: { ...h, e2eeKey: h.e2ee_key },
                },
                r,
              ),
              { type: "livekit", success: !0 })
            : {
                type: "livekit",
                success: !1,
                error:
                  "get_token failed to return expected fields .token, .url and .e2ee_key",
                response: h,
              };
        },
        [r],
      ),
      d = T.useMemo(
        () => ({
          room: e,
          getTracks: s,
          getConnectionState: o,
          initVoiceMode: c,
          selectVoiceModeMetadata: a,
        }),
        [e, s, o, c, a],
      );
    return F.jsx(Cr.Provider, { value: d, children: n });
  };
let vi;
const rp = () => (vi === void 0 && (vi = new TextEncoder()), vi);
function sp(n) {
  switch (n) {
    case "checking":
      return V.Connecting;
    case "connected":
    case "completed":
      return V.Connected;
    case "disconnected":
      return V.Reconnecting;
    case "new":
    case "failed":
    case "closed":
      return V.Disconnected;
  }
}
const Cm = ({ children: n }) => {
  const e = we(),
    t = Uc(Vc()),
    i = T.useRef(null),
    [r, s] = T.useState(void 0),
    [o, a] = T.useState(void 0),
    [c, d] = T.useState(void 0),
    [u, l] = T.useState(void 0),
    [h, f] = T.useState(void 0),
    g = e((G) => G.voiceMode),
    [p, b] = T.useState(null),
    v = T.useCallback(() => p, [p]),
    D = T.useCallback((G) => {
      N((B) =>
        cn(B, (j) => {
          j &&
            (j.activeSpeakers.some((z) => z.identity === G) ||
              j.activeSpeakers.push({ identity: G }));
        }),
      );
    }, []),
    C = T.useCallback((G) => {
      N((B) =>
        cn(B, (j) => {
          j &&
            (j.activeSpeakers = j.activeSpeakers.filter(
              (z) => z.identity !== G,
            ));
        }),
      );
    }, []),
    k = T.useRef(null),
    y = T.useRef([]),
    w = T.useRef([]),
    S = T.useRef(void 0);
  T.useEffect(() => {
    S.current = r;
  }, [r]);
  const [A, N] = T.useState(() => ({
      localParticipant: {
        isMicrophoneEnabled: !1,
        setMicrophoneEnabled: function (B) {
          return S.current?.setMuted(!B), Promise.resolve(void 0);
        },
        setCameraEnabled: function (B, j, z) {
          return (
            at.error("setCameraEnabled is not implemented for transceiver"),
            Promise.resolve(void 0)
          );
        },
        setScreenShareEnabled: function (B, j, z) {
          return (
            at.error(
              "setScreenShareEnabled is not implemented for transceiver",
            ),
            Promise.resolve(void 0)
          );
        },
        publishData: async function (B, j) {
          const z = k.current;
          if (!z || z.readyState !== "open")
            throw new Error("Data channel is not open");
          const Te = new TextDecoder().decode(B),
            he = JSON.stringify({ type: "data_message", data: Te });
          z.send(he);
        },
        on: function (B, j) {},
        off: function (B, j) {},
      },
      getActiveDevice: (B) => {
        switch (B) {
          case "audioinput":
            return c;
          case "videoinput":
            return u;
          case "audiooutput":
            return h;
        }
      },
      disconnect: async function (B = !0) {
        B &&
          x.current &&
          x.current.getSenders().forEach((j) => {
            j.track && j.track.stop();
          }),
          x.current && (x.current.close(), (x.current = void 0)),
          i.current && (i.current.srcObject = null);
      },
      name: "",
      switchActiveDevice: async (B, j, z) => {
        switch (B) {
          case "audioinput":
            return d(j), !0;
          case "videoinput":
            return l(j), !0;
          case "audiooutput":
            return f(j), !0;
        }
      },
      on: function (B, j) {
        switch (B) {
          case P.DataReceived:
            y.current.push(j);
            break;
          case P.Disconnected:
            w.current.push(j);
            break;
          case P.TrackPublished:
            break;
          case P.ConnectionQualityChanged:
            break;
        }
      },
      off: function (B, j) {
        switch (B) {
          case P.DataReceived:
            y.current = y.current.filter((z) => z !== j);
            break;
          case P.Disconnected:
            w.current = w.current.filter((z) => z !== j);
            break;
          case P.TrackPublished:
            break;
          case P.ConnectionQualityChanged:
            break;
        }
      },
      state: V.Disconnected,
      numParticipants: 0,
      activeSpeakers: [],
    })),
    L = T.useRef(!1),
    x = T.useRef(void 0),
    U = () => (
      x.current === void 0 &&
        (x.current = new RTCPeerConnection({ bundlePolicy: "max-bundle" })),
      x.current
    ),
    Y = T.useCallback(
      (G) => {
        N((B) =>
          cn(B, (j) => {
            j &&
              ((j.localParticipant.isMicrophoneEnabled = !G),
              G ? C(Gs) : D(Gs));
          }),
        );
      },
      [D, C],
    ),
    ae = T.useCallback(() => [r, o].filter((G) => G !== void 0), [r, o]),
    Ye = T.useCallback(async () => {
      const B = (
        await navigator.mediaDevices.getUserMedia({ audio: !0 })
      ).getTracks();
      if (B.length !== 1)
        throw (
          (at.error(
            "[transceiver] Only one input is supported for now, detected these tracks",
            B,
          ),
          new Error("Only one input is supported for now"))
        );
      const j = B[0];
      d(j.getSettings().deviceId), U().addTransceiver(j);
      const z = zs(j, {
        source: ir.Microphone,
        name: "user",
        userName: "User",
        origin: nr.Local,
        mutedCb: Y,
      });
      s(z), Y(j.muted);
    }, [Y]),
    it = T.useCallback((G) => {
      const { default_voice_mode: B, modes: j } = G,
        z = j.find((Te) => Te.mode === B && Fc(Te.features?.transceiver_url));
      if (!z || !z.features?.transceiver_url)
        throw new Error(
          "No voice status mode found for default mode " +
            B +
            " with transceiver url",
        );
      return z;
    }, []),
    rt = T.useCallback(
      async (G, B) => {
        const j = G.voice_mode === "advanced" ? `${Ks}/v1/vp` : `${Ks}/v1/vps`;
        if (L.current)
          throw new Error(
            `Not ready to connect, ${JSON.stringify({ isConnecting: L.current })}`,
          );
        L.current = !0;
        const z = U().createDataChannel("");
        (k.current = z),
          (z.onopen = () => {
            z.send(
              JSON.stringify({
                type: "data_message",
                data: JSON.stringify({ token: t, ...G }),
              }),
            );
          }),
          (z.onmessage = (ge) => {
            const Ce = JSON.parse(ge.data);
            if (Ce.type === "data_message") {
              const Qe = rp().encode(Ce.data);
              y.current.forEach((mt) => mt(Qe));
            }
          }),
          (z.onclose = () => {
            w.current.forEach((ge) => ge()), C(Ws);
          }),
          (U().oniceconnectionstatechange = () => {
            const ge = U().iceConnectionState,
              Ce = sp(ge);
            b(Ce),
              e.setState((Qe) => {
                Qe.server.connectionState = Ce;
              });
          }),
          (U().ontrack = (ge) => {
            if (i.current != null) {
              i.current.srcObject = ge.streams[0];
              const Ce = ge.streams[0].getTracks();
              if (Ce.length !== 1)
                throw (
                  (at.error(
                    "[transceiver] Only one remote track is supported for now, detected these tracks",
                    Ce,
                  ),
                  new Error(
                    "Only one remote track is supported for transceiver",
                  ))
                );
              const Qe = zs(Ce[0], {
                source: ir.Microphone,
                name: g === "advanced" ? "audio" : "shout",
                userName: "Assistant",
                origin: nr.Remote,
              });
              a(Qe),
                N((mt) =>
                  cn(mt, (Z) => {
                    Z && (Z.numParticipants = 2);
                  }),
                ),
                D(Ws);
            }
          }),
          await Ye();
        const Te = await U().createOffer();
        U().setLocalDescription(Te);
        const he = jc({ accessToken: t }),
          Ut = new FormData();
        Ut.append("sdp", Te.sdp), Ut.append("session", JSON.stringify(G));
        const Xn = await fetch(j, {
          method: "POST",
          body: Ut,
          headers: {
            ...he,
            ...(B.proofOfWorkAnswer
              ? { [Bc.ProofToken]: B.proofOfWorkAnswer }
              : {}),
          },
        });
        return (
          await U().setRemoteDescription({
            sdp: await Xn.text(),
            type: "answer",
          }),
          e.setState((ge) => {
            (ge.conversationId = G.conversation_id ?? B.clientThreadId),
              (ge.voiceSessionId = G.voice_session_id),
              (ge.voiceMode = G.voice_mode);
          }),
          (L.current = !1),
          b(V.Connected),
          { type: "transceiver", success: !0 }
        );
      },
      [t, Ye, D, C, g, e],
    ),
    st = T.useMemo(
      () => ({
        room: A,
        getTracks: ae,
        getConnectionState: v,
        initVoiceMode: rt,
        selectVoiceModeMetadata: it,
      }),
      [A, ae, v, rt, it],
    );
  return F.jsxs(Cr.Provider, {
    value: st,
    children: [F.jsx("audio", { ref: i, autoPlay: !0, playsInline: !0 }), n],
  });
};
function De() {
  const { room: n } = Pr(),
    e = T.useRef({
      debug: (...t) => at.debug(`[${n?.name ?? "no room"}]`, ...t),
      encoder: new TextEncoder(),
      decoder: new TextDecoder(),
    }).current;
  return { room: n, ...e };
}
function op() {
  cp(), dp(), up(), ap();
}
function ap() {
  const { room: n, debug: e } = De(),
    i = mo().video,
    r = T.useMemo(() => {
      const s = ["audioinput", "audiooutput"];
      return i && s.push("videoinput"), s;
    }, [i]);
  T.useEffect(() => {
    async function s() {
      Promise.all(
        r.map(async (o) => {
          const a = await Ed.getLocalDevices(o),
            c = n?.getActiveDevice(o);
          if (!a.find((u) => u.deviceId === c)) {
            const u = await Xt(o);
            let l = null;
            u ? (l = u.deviceId) : a[0] && (l = a[0].deviceId),
              e(`switching ${o} to ${l}`),
              l && (await n?.switchActiveDevice(o, l));
          }
        }),
      );
    }
    if (navigator)
      return (
        navigator.mediaDevices.addEventListener("devicechange", s),
        () => {
          navigator.mediaDevices.removeEventListener("devicechange", s);
        }
      );
  }, [n, e, r]);
}
function cp() {
  const { room: n, debug: e } = De(),
    t = n?.getActiveDevice("audioinput"),
    i = n?.getActiveDevice("audiooutput");
  T.useEffect(() => {
    async function r() {
      const s = (await Xt("audioinput"))?.deviceId,
        o = (await Xt("audiooutput"))?.deviceId,
        a = async () => {
          s &&
            t !== s &&
            (e("switching audio input to default"),
            await n?.switchActiveDevice("audioinput", s));
        },
        c = async () => {
          if (o && i !== o) {
            e("switching audio output to default");
            try {
              await n?.switchActiveDevice("audiooutput", o);
            } catch (d) {
              e("failed to switch audio output", d);
            }
          }
        };
      await Promise.all([a(), c()]);
    }
    r();
  }, [t, i, e, n]);
}
function dp() {
  const { isVideoEnabled: n, endStartingVideo: e } = od(),
    { room: t, debug: i } = De(),
    s = mo().video,
    o = s ? t?.getActiveDevice("videoinput") : void 0;
  T.useEffect(() => {
    async function a() {
      if (n)
        try {
          await t?.localParticipant.setCameraEnabled(!0), e(!0);
        } catch {
          e(!1);
        }
      else await t?.localParticipant.setCameraEnabled(!1);
    }
    t && a();
  }, [n, e, t]),
    T.useEffect(() => {
      async function a() {
        const c = (await Xt("videoinput"))?.deviceId;
        await (async () => {
          c &&
            o !== c &&
            (i("switching video input to default"),
            await t?.switchActiveDevice("videoinput", c));
        })();
      }
      s && a();
    }, [o, i, t, s]);
}
function up() {
  const { room: n } = De(),
    { isScreenshareEnabled: e, endStartingScreenshare: t } = ad();
  T.useEffect(() => {
    async function i() {
      if (e)
        try {
          await n?.localParticipant.setScreenShareEnabled(!0, {
            video: { displaySurface: "monitor" },
          }),
            t(!0);
        } catch {
          t(!1);
        }
      else await n?.localParticipant.setScreenShareEnabled(!1);
    }
    n && i();
  }, [n, e, t]);
}
function wc() {
  const { debug: n } = De(),
    e = Pt((i) => i.conversationId),
    t = oo();
  return T.useCallback(
    async (i) => {
      const r = i,
        s = e && !ao(e) ? e : void 0,
        o = r ?? s;
      if (o) {
        n(`refetch conversationId ${o}`);
        try {
          await cd(o);
        } catch (a) {
          const c = "Failed to update conversation";
          n(c, a), t.danger(c);
        }
      }
    },
    [e, n, t],
  );
}
var lp = ((n) => (
  (n.EXCELLENT = "excellent"),
  (n.GOOD = "good"),
  (n.POOR = "poor"),
  (n.LOST = "lost"),
  (n.UNKNOWN = "unknown"),
  n
))(lp || {});
const hp = {
    [ye.Excellent]: "excellent",
    [ye.Good]: "good",
    [ye.Poor]: "poor",
    [ye.Lost]: "lost",
    [ye.Unknown]: "unknown",
  },
  fp = 5e3,
  pp = 2e3,
  mp = (n) => {
    const e = we(),
      { room: t } = De(),
      i = Pt((g) => g.disconnectPending),
      r = Pt((g) => g.server.remoteState === ce.Speaking),
      s = Pt((g) => g.conversationId) ?? void 0,
      o = qc(s),
      a = T.useRef(!1),
      c = wc(),
      d = Oc(),
      u = ro();
    a.current = r || a.current;
    const l = T.useCallback(
        async (g) => {
          clearTimeout(i),
            e.setState((b) => {
              b.disconnectPending = void 0;
            }),
            t?.disconnect(),
            await c(o),
            e.setState(dd);
          const p = o ?? g;
          p && uo(d, u, p),
            n?.refetchLater &&
              window.setTimeout(() => {
                c(o);
              }, pp);
        },
        [i, t, c, o, n?.refetchLater, d, u, e],
      ),
      h = a.current && !o,
      f = T.useCallback(() => {
        e.setState((g) => {
          g.disconnectPending = window.setTimeout(l, fp);
        });
      }, [l, e]);
    return {
      disconnectPending: i !== void 0,
      shouldDelayDisconnect: h,
      delayDisconnect: f,
      immediateDisconnect: l,
    };
  };
function gp() {
  const n = ro(),
    e = we(),
    { room: t, debug: i, decoder: r } = De(),
    {
      disconnectPending: s,
      shouldDelayDisconnect: o,
      delayDisconnect: a,
      immediateDisconnect: c,
    } = mp(),
    d = wc(),
    u = T.useRef(!1),
    l = T.useRef(!1),
    h = T.useRef(!1),
    f = T.useRef(!1),
    g = In((p) => p.lastVoiceSessionStartTime);
  T.useEffect(() => {
    const p = async (w) => {
        const { new_state: S } = w;
        if (
          (e.setState((A) => {
            (A.voiceMode !== "advanced" || S !== ce.Thinking) &&
              (A.server.remoteState = S);
          }),
          S === ce.Listening && !l.current && g instanceof Date)
        ) {
          const N = new Date().getTime() - g.getTime();
          oe.firstListeningLatency.success({ durationMs: N }), (l.current = !0);
        }
        if (S === ce.ListeningIntently)
          oe.voiceSessionListeningIntently.stateChange();
        else if (S === ce.Listening) {
          if (
            (e.setState((A) => {
              A.metrics.numListening += 1;
            }),
            !h.current)
          ) {
            const A = e.getState().voiceSessionId;
            oe.voiceSessionFirstListening.stateChange({
              voice_session_id: A ?? "unknown",
            }),
              (h.current = !0);
          }
          (h.current = !0), oe.voiceSessionListening.stateChange();
        } else if (S === ce.Thinking)
          e.setState((A) => {
            A.metrics.numThinking += 1;
          }),
            oe.voiceSessionThinking.stateChange();
        else if (S === ce.Speaking) {
          if (
            (e.setState((A) => {
              A.metrics.numSpeaking += 1;
            }),
            !f.current)
          ) {
            const A = e.getState().voiceSessionId;
            oe.voiceSessionFirstSpeaking.stateChange({
              voice_session_id: A ?? "unknown",
            }),
              (f.current = !0);
          }
          oe.voiceSessionSpeaking.stateChange();
        } else S === ce.Halted && oe.voiceSessionHalted.stateChange();
      },
      b = async (w) => {
        e.setState((S) => {
          S.server.usage = w;
        });
      },
      v = async (w) => {
        e.setState((S) => {
          S.server.toolUpdate = { ...w };
        }),
          w.update_type === "hangup" && (o ? a() : c());
      },
      D = async (w) => {
        let S;
        try {
          (S = JSON.parse(r.decode(w))), i("data recevied", S);
        } catch (A) {
          i("error parsing data", A);
          return;
        }
        switch (
          (e.setState(
            (A) => (
              A.server.messages.push({
                ...S,
                timestamp: new Date(),
                source: "remote",
              }),
              A
            ),
          ),
          S.type)
        ) {
          case yt.StateUpdate:
            i("state update", S.payload);
            const { new_state: A, delay_s: N } = S.payload;
            if (
              ([ce.Thinking, ce.Speaking].includes(A) &&
                e.getState().server.turnContext.clear(),
              A === ce.Listening && !u.current)
            ) {
              (u.current = !0), performance.mark("voice_mode.end");
              const L = performance
                .measure("voice_mode", "voice_mode.start", "voice_mode.end")
                .duration.toFixed(0);
              oe.voiceMode.connect({ durationMs: L }),
                e.setState((x) => {
                  (x.metrics.livekitConnectSuccessTime = new Date()),
                    (x.metrics.sessionConnectedTime = new Date());
                });
            }
            A === ce.Thinking &&
              N &&
              (i(`${t?.name} delay thinking state by ${N} seconds`),
              p({ new_state: ce.ListeningIntently }),
              await new Promise((L) => setTimeout(L, N * 1e3))),
              p(S.payload);
            break;
          case yt.ConversationUpdate: {
            i("conversation update", S.payload);
            const L = e.getState().conversationId,
              { conversation_id: x } = S.payload;
            if (L && ao(L)) {
              Ir.initThread(L, { kind: Pi.PrimaryAssistant }),
                S.payload.response?.error &&
                  !e.getState().metrics.conversationStartSuccessTime &&
                  e.setState((Y) => {
                    Y.metrics.conversationStartFailTime = new Date();
                  }),
                Ir.setServerIdForNewThread(L, x),
                e.setState((Y) => {
                  (Y.conversationId = x),
                    Y.metrics.conversationStartSuccessTime ||
                      (Y.metrics.conversationStartSuccessTime = new Date());
                }),
                uo(lo, n, x);
              const U = Ei.getGizmoId(wi(L));
              ud(n, U);
            }
            await d(x), s && c(x);
            break;
          }
          case yt.UsageUpdate:
            b(S.payload);
            break;
          case yt.ToolUpdate:
            v(S.payload);
            break;
          case yt.Performance: {
            const L = S.payload.metrics;
            e.setState((x) => {
              L.forEach((U) => {
                U.name === "total_latency_ms"
                  ? x.metrics.totalLatencyMs.push(U.ms)
                  : U.name === "current_rtt_ms" &&
                    x.metrics.currentRttMs.push(U.ms);
              });
            });
            break;
          }
        }
      },
      C = (w, S) => {
        i("track published", w, S);
      },
      k = () => {
        i("disconnected"),
          e.setState((w) => {
            w.metrics.sessionEndTime = new Date();
          }),
          ld(e),
          oe.voiceSessionDisconnected.stateChange();
      },
      y = (w, S) => {
        S instanceof Un &&
          (i(`Connection quality changed for participant ${S.identity}: ${w}`),
          e.setState((A) => {
            A.server.voiceConnectionQuality = hp[w];
          }));
      };
    return (
      t?.on(P.DataReceived, D),
      t?.on(P.TrackPublished, C),
      t?.on(P.ConnectionQualityChanged, y),
      t?.on(P.Disconnected, k),
      () => {
        t?.off(P.DataReceived, D),
          t?.off(P.TrackPublished, C),
          t?.off(P.ConnectionQualityChanged, y),
          t?.off(P.Disconnected, k);
      }
    );
  }, [i, r, a, s, c, g, n, d, t, o, e]);
}
function vp() {
  bp(), yp(), kp(), Sp(), Tp();
}
function bp() {
  const { room: n } = De(),
    e = we();
  T.useEffect(() => {
    e.setState((t) => {
      t.dev.room = n;
    });
  }, [n, e]);
}
function yp() {
  const { getConnectionState: n } = Pr(),
    e = n(),
    t = we();
  T.useEffect(() => {
    t.setState((i) => {
      i.server.connectionState = e;
    });
  }, [e, t]);
}
function kp() {
  const { room: n, debug: e, encoder: t } = De(),
    i = we();
  T.useEffect(() => {
    const r = !!i.getState().server.actions;
    if (n && !r) {
      const s = async (o) => {
        e("publishing action", o);
        const a = { type: yt.ActionRequest, payload: { action: o } };
        await n.localParticipant.publishData(t.encode(JSON.stringify(a)), {
          reliable: !0,
        }),
          i.setState((c) => {
            c.server.messages.push({
              ...a,
              timestamp: new Date(),
              source: "local",
            });
          });
      };
      i.setState((o) => {
        o.server.actions = {
          [Me.StartListeningIntently]: () => s(Me.StartListeningIntently),
          [Me.StopListeningIntently]: () => s(Me.StopListeningIntently),
          [Me.HaltAllActivity]: () => s(Me.HaltAllActivity),
          [Me.ResumeListening]: () => s(Me.ResumeListening),
          [Me.RelayMessage]: () => s(Me.RelayMessage),
        };
      });
    }
  }, [n, e, t, i]);
}
function Sp() {
  const e = we()((t) => t.isVoiceModeActive);
  T.useEffect(
    () => (
      In.setState({ isVoiceActive: e }),
      () => {
        In.setState({ isVoiceActive: !1 });
      }
    ),
    [e],
  );
}
function Tp() {
  const n = we(),
    { room: e, encoder: t } = De(),
    i = T.useCallback(
      async (r) => {
        await e?.localParticipant.publishData(t.encode(JSON.stringify(r)), {
          reliable: !0,
        }),
          n.setState((s) => {
            s.server.messages.push({
              ...r,
              timestamp: new Date(),
              source: "local",
            });
          });
      },
      [e, t, n],
    );
  T.useEffect(() => {
    n.setState((r) => {
      r.server.turnContext.setPublisher(i);
    });
  }, [i, n]);
}
const Pm = T.memo(function () {
  return gp(), vp(), op(), null;
});
function Em(n) {
  return {
    conversation_id: n.serverThreadId,
    parent_message_id: n.parentMessageId,
    voice_mode: n.isAdvancedMode ? "advanced" : "standard",
    eventSource: n.eventSource,
    clientThreadId: n.clientThreadId,
    gizmo_id: n.gizmoId,
    voice: n.voice,
  };
}
function Cp({ requestMicPermissions: n } = { requestMicPermissions: !1 }) {
  const e = so(),
    t = we(),
    i = Id(),
    {
      voiceName: r,
      voiceMainLanguage: s,
      voiceTrainingAllowed: o,
      videoTrainingAllowed: a,
    } = ho(),
    c = Pt((C) => C.isVoiceModeActive),
    d = hd(),
    { room: u } = De(),
    { initVoiceMode: l, selectVoiceModeMetadata: h } = Pr(),
    f = fd(),
    g = wd(),
    p = zc(),
    b = e.formatMessage({
      id: "useVoiceModeButtonAction.error",
      defaultMessage: "Failed to start voice mode",
    }),
    v = T.useCallback(async () => {
      d &&
        (await u?.disconnect(),
        Ri(null, t),
        t.setState((C) => {
          C.server.remoteState = ce.Halted;
        }));
    }, [d, u, t]);
  return {
    startVoiceMode: T.useCallback(
      async (C) => {
        d && (await u?.disconnect(), Ri(null, t)), n && (await g());
        const k = await Xt("audioinput");
        t.setState((S) => {
          (S.audioInputDevice = k),
            (S.isVoiceModeActive = !0),
            (S.voiceMode = C.voice_mode),
            (S.server.remoteState = ce.Connecting),
            (S.metrics.sessionCreateTime = new Date()),
            (S.metrics.totalLatencyMs = []),
            (S.metrics.currentRttMs = []),
            (S.metrics.numSpeaking = 0),
            (S.metrics.numThinking = 0),
            (S.metrics.numListening = 0),
            (S.metrics.getStatusSentTime = void 0),
            (S.metrics.getStatusSuccessTime = void 0),
            (S.metrics.getStatusFailedTime = void 0),
            (S.metrics.getTokenSentTime = void 0),
            (S.metrics.getTokenSuccessTime = void 0),
            (S.metrics.getTokenFailedTime = void 0),
            (S.metrics.livekitConnectTime = void 0),
            (S.metrics.livekitConnectSuccessTime = void 0),
            (S.metrics.livekitConnectFailTime = void 0),
            (S.metrics.conversationStartSuccessTime = void 0),
            (S.metrics.conversationStartFailTime = void 0),
            (S.metrics.sessionConnectedTime = void 0);
        });
        const y = performance.now(),
          w = [8, 4, 4, 4, 12]
            .map((S) =>
              Math.floor(Math.random() * Math.pow(10, S))
                .toString(16)
                .padStart(S, "0")
                .toUpperCase(),
            )
            .join("-");
        try {
          oe.livekit.connectCalled(),
            t.setState((he) => {
              he.metrics.getStatusSentTime = new Date();
            });
          const S = pd(),
            A = S?.proofOfWorkPromise,
            N =
              C.useVoiceStatusCache && S
                ? S
                : await f(
                    {
                      conversation_id: C.conversation_id ?? null,
                      requested_voice_mode: C.voice_mode ?? null,
                      gizmo_id: C.gizmo_id ?? null,
                      voice: C.voice,
                      requested_default_model:
                        C.requested_default_model ?? null,
                    },
                    C.eventSource,
                  );
          t.setState((he) => {
            he.metrics.getStatusSuccessTime = new Date();
          });
          const { default_voice_mode: L, chatreq: x } = N;
          performance.mark("livekit.start"),
            performance.mark("voice_mode.start");
          const {
              eventSource: U,
              voice: Y,
              clientThreadId: ae,
              voice_mode: Ye,
              gizmo_id: it,
              ...rt
            } = C,
            G = h(N).default_model_slug,
            B = L === "advanced" ? G : void 0,
            j =
              C.useVoiceStatusCache && A
                ? await A
                : x
                  ? await Gc.getEnforcementToken(x)
                  : null,
            z = C.gizmo_id
              ? { kind: Pi.GizmoInteraction, gizmo_id: C.gizmo_id }
              : { kind: Pi.PrimaryAssistant };
          t.setState((he) => {
            he.metrics.getTokenSentTime = new Date();
          }),
            md(rt),
            (
              await l(
                {
                  ...rt,
                  voice: Y ?? r,
                  language_code: s,
                  voice_session_id: w,
                  timezone_offset_min: new Date().getTimezoneOffset(),
                  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                  voice_mode: L,
                  model_slug: G,
                  model_slug_advanced: B,
                  chatreq_token: x?.token,
                  history_and_training_disabled: p,
                  conversation_mode: z,
                  voice_training_allowed: o,
                  video_training_allowed: a,
                },
                {
                  eventSource: C.eventSource,
                  clientThreadId: C.clientThreadId,
                  proofOfWorkAnswer: j,
                },
              )
            ).success &&
              (t.setState((he) => {
                (he.metrics.getTokenSuccessTime = new Date()),
                  (he.metrics.livekitConnectTime = new Date());
              }),
              In.setState({ lastVoiceSessionStartTime: new Date() }),
              t.setState((he) => {
                he.server.remoteState = ce.Listening;
              }),
              performance.mark("livekit.end"),
              oe.livekit.success({
                durationMs: performance
                  .measure("livekit", "livekit.start", "livekit.end")
                  .duration.toFixed(0),
                voice_session_id: w,
              }),
              oe.connectionLatency.success({
                durationMs: performance.now() - y,
              }));
        } catch (S) {
          t.setState((N) => {
            N.metrics.getStatusSuccessTime ||
              (N.metrics.getStatusFailedTime = new Date()),
              N.metrics.getTokenSuccessTime ||
                (N.metrics.getTokenFailedTime = new Date());
          });
          const A = Rd(t.getState());
          throw (
            (oe.livekit.failure(S, {
              ...A,
              voice_session_id: w,
              eventSource: C.eventSource,
              voice: C.voice ?? "(undefined)",
              requested_voice_mode: C.voice_mode ?? "(undefined)",
              gizmo_id: C.gizmo_id ?? "(undefined)",
            }),
            at.debug("failed to get voice token", S),
            t.setState((N) => {
              N.server.remoteState = ce.Halted;
            }),
            oe.connectionLatency.failure({ durationMs: performance.now() - y }),
            i.danger(b),
            S)
          );
        }
      },
      [g, b, f, d, p, n, u, i, a, s, r, t, o, l, h],
    ),
    stopVoiceMode: v,
    isConnected: d,
    isVoiceModeActive: c,
  };
}
const Pp = () => fo().some((e) => e.voice === "shade"),
  Hs = Wc.JumpToShade,
  Ep = () => {
    const n = xr.getItem(Hs) === "true",
      e = T.useCallback(() => {
        xr.setItem(Hs, "true");
      }, []);
    return { alreadyTriggered: n, setAlreadyTriggered: e };
  },
  wp = 2,
  Rp = ({ viewport: n, canvasSize: e, shouldMeasurePerf: t, source: i }) => {
    const r = T.useRef({}),
      s = T.useCallback((o) => {
        const a = o.getExtension("WEBGL_debug_renderer_info");
        a &&
          ((r.current.vendor = o.getParameter(a.UNMASKED_VENDOR_WEBGL)),
          (r.current.renderer = o.getParameter(a.UNMASKED_RENDERER_WEBGL)));
      }, []);
    return (
      T.useEffect(() => {
        const o = {
          vendor: r.current.vendor ?? "(unavailable)",
          renderer: r.current.renderer ?? "(unavailable)",
          width: n[0],
          height: n[1],
          canvasWidth: e[0],
          canvasHeight: e[1],
          dpr: window.devicePixelRatio,
          source: i,
        };
        !Kc(o, r.current) &&
          t &&
          ((r.current = o),
          po(wp).then((c) => {
            oe.bloop.performance({ ...o, fps: c });
          }));
      }, [e, t, n, i]),
      s
    );
  },
  _p = 0.25,
  Ip = 3,
  Js = 28,
  bi = 55,
  yi = 200,
  Ys = 1.1,
  xp = ({ viewport: n, initialScale: e, shouldCalibrate: t }) => {
    const [i, r] = T.useState(e),
      s = T.useRef(void 0),
      o = T.useRef(void 0),
      a = T.useRef(void 0),
      c = T.useRef("down"),
      d = T.useCallback(() => {
        const u = c.current === "up" ? Ip : _p;
        po(u).then((l) => {
          if (l < Js) {
            c.current = "down";
            const h = Math.max(l, 1),
              f = Math.sqrt(h / Js);
            r((g) => g * f), (o.current = window.setTimeout(d, yi));
          } else if (a.current) {
            const h = l >= bi,
              f = l >= a.current * Ys;
            if (h || f)
              (c.current = "up"),
                r((g) => g * Ys),
                (o.current = window.setTimeout(d, yi));
            else if (l < bi) {
              c.current = "down";
              const g = Math.sqrt(l / bi);
              r((p) => p * g);
            }
          }
          a.current = l;
        });
      }, []);
    return (
      T.useEffect(() => {
        const [u, l] = n,
          [h, f] = s.current ?? [];
        return (
          t &&
            (h !== u || f !== l) &&
            ((s.current = n),
            clearTimeout(o.current),
            r(e),
            (o.current = window.setTimeout(d, yi))),
          () => {
            clearTimeout(o.current);
          }
        );
      }, [t, d, e, n]),
      i
    );
  };
var ki, Qs;
function Ap() {
  if (Qs) return ki;
  Qs = 1;
  var n = Hc(),
    e = Jc(),
    t = Yc(),
    i = Qc(),
    r = gd(),
    s = Math.max;
  function o(a) {
    if (!(a && a.length)) return [];
    var c = 0;
    return (
      (a = n(a, function (d) {
        if (r(d)) return (c = s(d.length, c)), !0;
      })),
      i(c, function (d) {
        return e(a, t(d));
      })
    );
  }
  return (ki = o), ki;
}
var Si, $s;
function Dp() {
  if ($s) return Si;
  $s = 1;
  var n = vd(),
    e = Ap(),
    t = n(e);
  return (Si = t), Si;
}
var Mp = Dp();
const Ti = Nc(Mp),
  Op = {
    bands: 5,
    loPass: 100,
    hiPass: 600,
    updateInterval: 32,
    analyserOptions: { fftSize: 2048 },
  },
  Np = (n) => {
    const e = (t) => {
      let s = 1 - (Math.max(-100, Math.min(-10, t)) * -1) / 100;
      return (s = Math.sqrt(s)), s;
    };
    return n.map((t) => (t === -1 / 0 ? 0 : e(t)));
  };
function Er(n, e = {}) {
  const t = { ...Op, ...e },
    [i, r] = T.useState(new Array(t.bands).fill(0));
  return (
    T.useEffect(() => {
      if (!n) return;
      const { analyser: s, cleanup: o } = Lp(n, t.analyserOptions),
        a = s.frequencyBinCount,
        c = new Float32Array(a),
        u = setInterval(() => {
          s.getFloatFrequencyData(c);
          let l = new Float32Array(c.length);
          for (let p = 0; p < c.length; p++) l[p] = c[p];
          l = l.slice(t.loPass, t.hiPass);
          const h = Np(l),
            f = Math.ceil(h.length / t.bands),
            g = [];
          for (let p = 0; p < t.bands; p++) {
            const b = h.slice(p * f, (p + 1) * f).reduce((v, D) => (v += D), 0);
            g.push(b / f);
          }
          r(g);
        }, t.updateInterval);
      return () => {
        o(), clearInterval(u);
      };
    }, [n, JSON.stringify(e)]),
    i
  );
}
function Lp(n, e) {
  const t = {
      fftSize: 2048,
      smoothingTimeConstant: 0.8,
      minDecibels: -100,
      maxDecibels: -80,
      ...e,
    },
    i = Up();
  if (!i) throw new Error("Audio Context not supported on this browser");
  let r;
  n instanceof HTMLAudioElement
    ? (r = i.createMediaElementSource(n))
    : (r = i.createMediaStreamSource(new MediaStream([n])));
  const s = i.createAnalyser();
  (s.minDecibels = t.minDecibels),
    (s.maxDecibels = t.maxDecibels),
    (s.fftSize = t.fftSize),
    (s.smoothingTimeConstant = t.smoothingTimeConstant),
    r.connect(s),
    n instanceof HTMLAudioElement && s.connect(i.destination);
  const o = new Uint8Array(s.frequencyBinCount);
  return {
    calculateVolume: () => {
      s.getByteFrequencyData(o);
      let d = 0;
      for (const l of o) d += Math.pow(l / 255, 2);
      return Math.sqrt(d / o.length);
    },
    analyser: s,
    cleanup: async () => {
      await i.close();
    },
  };
}
function Up() {
  const n =
    typeof window < "u" && (window.AudioContext || window.webkitAudioContext);
  if (n) return new n({ latencyHint: "interactive" });
}
const Fp = 60,
  $n = Math.floor(1e3 / Fp),
  wr = 240,
  Rc = 2048,
  _c = new Array(wr).fill(0),
  jp = (n) => {
    const e = Er(n, {
      bands: wr,
      updateInterval: $n,
      loPass: 0,
      hiPass: 400,
      analyserOptions: { fftSize: Rc },
    });
    return e.length === 0 ? _c : e;
  },
  Rr = (n) => {
    const { magnitudes: e, binCount: t, gainMultiplier: i } = n;
    if (e.length === 0) return new Array(t).fill(0);
    const r = Math.ceil(e.length / t),
      s = [];
    for (let o = 0; o < e.length; o += r) {
      const a = Math.min(o + r, e.length),
        c = e.slice(o, a).sort((h, f) => h - f),
        d = Math.floor(c.length / 2);
      let u;
      c.length % 2 === 0 ? (u = (c[d - 1] + c[d]) / 2) : (u = c[d]),
        (u = Math.abs(u)),
        (u *= i);
      const l = u / (u + 1);
      s.push(l);
    }
    return s;
  },
  Ic = (n, e) => {
    const t = e.sampleRate,
      i = n.length,
      r = e.bandCount,
      s = e.binCount,
      o = e.gainMultipliers;
    if (o.length !== r)
      throw new Error("gainMultipliers must have length equal to bandCount");
    const a = i * 2,
      c = t / a,
      d = n.map((g, p) => p * c),
      u = 20,
      l = t / 2,
      h = new Array(r + 1).fill(0).map((g, p) => u * Math.pow(l / u, p / r)),
      f = new Array(r).fill(null).map(() => []);
    for (let g = 0; g < d.length; g += 1)
      for (let p = 0; p < r; p += 1)
        if (d[g] >= h[p] && d[g] < h[p + 1]) {
          f[p].push(n[g]);
          break;
        }
    for (let g = 0; g < r; g += 1) {
      const p = f[g],
        b = o[g];
      f[g] = Rr({ magnitudes: p, binCount: s, gainMultiplier: b });
    }
    return f;
  },
  Xs = 60,
  xc = 48e3,
  Bp = 1,
  Vp = 2,
  qp = 40,
  zp = 2;
function Zs({ time: n, timeConstant: e }) {
  return 1 - Math.exp(-n / e);
}
function eo(n, e) {
  const t = e[1] - e[0];
  return e[0] + n * t;
}
const Ci = (n) => {
    if (
      !Array.isArray(n) ||
      n.length !== 2 ||
      typeof n[0] != "number" ||
      typeof n[1] != "number"
    )
      throw new Error(
        "zip failed - received a value that is not a [number, number] tuple",
      );
  },
  Gp = (n) => {
    const {
        prevAudioData: e,
        prevCumulativeAudioData: t,
        deltaTimeS: i,
        audioDataRaw: r,
      } = n,
      s = r.map((h) => h * i * Xs * Bp),
      o = Zs({ time: i, timeConstant: Vp }),
      a = Ti(e, s).map((h) => (Ci(h), eo(o, h))),
      c = r.map((h) => h * i * Xs * qp),
      d = Ti(t, c).map((h) => (Ci(h), h[0] + h[1])),
      u = Zs({ time: i, timeConstant: zp }),
      l = Ti(t, d).map((h) => (Ci(h), eo(u, h)));
    return { audioData: a, cumulativeAudioData: l };
  },
  wm = (n, e) => {
    const t = jp(n),
      i = Ic(t, {
        sampleRate: xc,
        binCount: e.bins,
        bandCount: e.bands,
        gainMultipliers: e.gainMultipliers,
      }),
      r = Rr({ magnitudes: t, binCount: 1, gainMultiplier: 1 });
    return { bandMagnitudes: i, cumulativeMagnitude: r };
  };
function Wp() {
  let n = null,
    e,
    t = 0;
  const i = 350;
  let r;
  const s = (a, c, d) => a + (c - a) * d,
    o = (a, c) => {
      if (a.length !== c.length) return !1;
      for (let d = 0; d < a.length; d++) if (a[d] !== c[d]) return !1;
      return !0;
    };
  return function (c) {
    const d = performance.now();
    if (!n)
      return (
        (e = {
          bloopColorMain: new Float32Array(c.bloopColorMain),
          bloopColorLow: new Float32Array(c.bloopColorLow),
          bloopColorMid: new Float32Array(c.bloopColorMid),
          bloopColorHigh: new Float32Array(c.bloopColorHigh),
        }),
        (n = {
          bloopColorMain: new Float32Array(c.bloopColorMain),
          bloopColorLow: new Float32Array(c.bloopColorLow),
          bloopColorMid: new Float32Array(c.bloopColorMid),
          bloopColorHigh: new Float32Array(c.bloopColorHigh),
        }),
        (t = d),
        (r = e),
        r
      );
    let u = !1;
    const l = [
      "bloopColorMain",
      "bloopColorLow",
      "bloopColorMid",
      "bloopColorHigh",
    ];
    for (const g of l)
      if (!o(c[g], n[g])) {
        u = !0;
        break;
      }
    u &&
      ((e = {
        bloopColorMain: new Float32Array(r.bloopColorMain),
        bloopColorLow: new Float32Array(r.bloopColorLow),
        bloopColorMid: new Float32Array(r.bloopColorMid),
        bloopColorHigh: new Float32Array(r.bloopColorHigh),
      }),
      (t = d),
      (n = {
        bloopColorMain: new Float32Array(c.bloopColorMain),
        bloopColorLow: new Float32Array(c.bloopColorLow),
        bloopColorMid: new Float32Array(c.bloopColorMid),
        bloopColorHigh: new Float32Array(c.bloopColorHigh),
      }));
    let h = (d - t) / i;
    h > 1 && (h = 1);
    const f = {
      bloopColorMain: new Float32Array(e.bloopColorMain.length),
      bloopColorLow: new Float32Array(e.bloopColorLow.length),
      bloopColorMid: new Float32Array(e.bloopColorMid.length),
      bloopColorHigh: new Float32Array(e.bloopColorHigh.length),
    };
    for (const g of l) {
      const p = e[g].length;
      for (let b = 0; b < p; b++) {
        const v = e[g][b],
          D = c[g][b];
        f[g][b] = s(v, D, h);
      }
    }
    return (r = f), f;
  };
}
const qt = at.createChild("GLCanvas");
function Kp({
  className: n,
  vert: e,
  frag: t,
  Behaviors: i,
  onViewportUpdate: r,
  onRenderComplete: s,
  onGlAvailable: o,
  onCanvasSizeUpdate: a,
  scale: c,
}) {
  const d = T.useRef(null),
    u = T.useRef(null),
    [l, h] = T.useState(null),
    [f, g] = T.useState(),
    p = T.useRef(
      bd((D) => {
        const { width: C, height: k } = D.contentRect,
          y = Math.floor(Math.min(C ?? 0, k ?? 0));
        h(y), r?.({ width: y, height: y });
      }, 100),
    ),
    b = yd(p.current);
  if (
    (Ar(() => {
      const D = d.current,
        { width: C, height: k } = D ?? {};
      if (D && l != null && C && k) {
        const y = D.getContext("webgl2", { premultipliedAlpha: !0 });
        y ? g(y) : qt.error("webgl2 context not supported");
      }
    }, [l]),
    Ar(() => {
      if (!f) return;
      const D = f.createProgram(),
        C = f.createShader(f.VERTEX_SHADER),
        k = f.createShader(f.FRAGMENT_SHADER);
      if (!D) {
        qt.debug("failed to create program");
        return;
      }
      if (!C || !k) {
        qt.debug("failed to create shaders", C, k);
        return;
      }
      let y = "";
      if (
        (f.shaderSource(C, e),
        f.compileShader(C),
        (y += `vertShader:
${f.getShaderInfoLog(C)}
`),
        f.attachShader(D, C),
        f.shaderSource(k, t),
        f.compileShader(k),
        (y += `fragShader:
${f.getShaderInfoLog(k)}
`),
        f.attachShader(D, k),
        f.linkProgram(D),
        f.useProgram(D),
        (y += f.getProgramInfoLog(D)),
        !f.getProgramParameter(D, f.LINK_STATUS))
      )
        throw `Could not compile WebGL program. 

${y}`;
      (u.current = D), qt.debug("program created"), o?.(f, D);
      const w = f.fenceSync(f.SYNC_GPU_COMMANDS_COMPLETE, 0);
      return (
        w && (f.waitSync(w, 0, f.TIMEOUT_IGNORED), s?.()),
        () => {
          qt.debug("cleaning up"),
            (u.current = null),
            f.detachShader(D, C),
            f.detachShader(D, k),
            f.deleteShader(C),
            f.deleteShader(k),
            f.deleteProgram(D);
        }
      );
    }, [f, t, e]),
    l != null && f && d.current)
  ) {
    const D = d.current,
      C = l * window.devicePixelRatio * (c ?? 1);
    (D.width = C),
      (D.height = C),
      f.viewport(0, 0, C, C),
      a?.({ width: C, height: C });
  }
  const v = u.current;
  return F.jsxs("div", {
    className: n,
    ref: b,
    children: [
      F.jsx(
        "canvas",
        { ref: d, style: { width: l ?? void 0, height: l ?? void 0 } },
        l,
      ),
      f && v && i && F.jsx(i, { ctx: f, program: v }),
    ],
  });
}
function Hp({
  GLUniformsSetter: n,
  textureImage: e,
  textureName: t,
  variablesRef: i,
  className: r,
  vert: s,
  frag: o,
  onViewportUpdate: a,
  onRenderComplete: c,
  onGlAvailable: d,
  onCanvasSizeUpdate: u,
  scale: l,
}) {
  const h = T.useRef(void 0),
    f = T.useCallback(
      async (b, v) => {
        if (((h.current = new n(b, v)), e && t)) {
          const D = b.createTexture();
          b.bindTexture(b.TEXTURE_2D, D),
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE),
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE),
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR),
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR),
            b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, e);
          const C = b.getUniformLocation(v, t);
          b.activeTexture(b.TEXTURE0),
            b.bindTexture(b.TEXTURE_2D, D),
            b.uniform1i(C, 0);
        }
        d?.(b, v);
      },
      [n, e, t, d],
    ),
    g = T.useRef(void 0),
    p = T.useCallback(() => {
      h.current && i.current && h.current.setVariablesAndRender(i.current),
        (g.current = requestAnimationFrame(p));
    }, [i]);
  return (
    T.useEffect(
      () => (
        p(),
        () => {
          g.current && cancelAnimationFrame(g.current);
        }
      ),
      [p],
    ),
    F.jsx(Kp, {
      className: r,
      vert: s,
      frag: o,
      onViewportUpdate: a,
      onRenderComplete: c,
      onGlAvailable: f,
      onCanvasSizeUpdate: u,
      scale: l,
      Behaviors: () => null,
    })
  );
}
const Jp = "https://cdn.oaistatic.com/assets/noise-watercolor-m3j88gni.webp",
  Yp = { src: Jp };
let Ac;
const Gn = new window.Image();
Gn.crossOrigin = "anonymous";
Gn.src = Yp.src;
Gn.onload = () => {
  Ac = Gn;
};
var Qp = `#version 300 es
#define E (2.71828182846)
#define pi (3.14159265358979323844)
#define NUM_OCTAVES (4)

precision highp float;

struct ColoredSDF {
  float distance;
  vec4 color;
};

struct SDFArgs {
  vec2 st;
  float amount;
  float duration;
  float time;
  float mainRadius;
};

float triangle(float t, float p) {
  return 2.0 * abs(t / p - floor(t / p + 0.5));
}

float spring(float t, float d) {
  return 1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t);
}

float silkySmooth(float t, float k) {
  return atan(k * sin((t - 0.5) * pi)) / atan(k) * 0.5 + 0.5;
}

float scaled(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), float(0), float(1));
}

float fixedSpring(float t, float d) {
  float s = mix(
    1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t),
    1.0,
    scaled(0.0, 1.0, t)
  );
  return s * (1.0 - t) + t;
}

float bounce(float t, float d) {
  return -sin(pi * (1.0 - d) * t) *
  (1.0 - t) *
  exp(-2.71828182846 * 2.0 * t) *
  t *
  10.0;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float random(ivec2 st) {
  return random(vec2(st));
}

float random(float p) {
  return random(vec2(p));
}

float opSmoothUnion(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

float opSmoothSubtraction(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 - 0.5 * (d2 + d1) / k, 0.0, 1.0);
  return mix(d2, -d1, h) + k * h * (1.0 - h);
}

float opSmoothIntersection(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 - 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) + k * h * (1.0 - h);
}

float sdRoundedBox(vec2 p, vec2 b, vec4 r) {
  r.xy = p.x > 0.0 ? r.xy : r.zw;
  r.x = p.y > 0.0 ? r.x : r.y;
  vec2 q = abs(p) - b + r.x;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;
}

float sdSegment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

float sdArc(vec2 p, vec2 sca, vec2 scb, float ra, float rb) {
  p *= mat2(sca.x, sca.y, -sca.y, sca.x);
  p.x = abs(p.x);
  return scb.y * p.x > scb.x * p.y
    ? length(p - ra * scb) - rb
    : abs(length(p) - ra) - rb;
}

float arc(vec2 st, float startAngle, float length, float radius, float width) {
  return sdArc(
    st,
    vec2(sin(startAngle), cos(startAngle)),
    vec2(sin(length), cos(length)),
    radius,
    width
  );
}

vec2 rotate(vec2 v, float a) {
  float s = sin(a);
  float c = cos(a);
  mat2 m = mat2(c, s, -s, c);
  return m * v;
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend) {
  
  return max(base + blend - vec3(1.0), vec3(0.0));
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend, float opacity) {
  return blendLinearBurn_13_5(base, blend) * opacity + base * (1.0 - opacity);
}

vec4 permute(vec4 x) {
  return mod((x * 34.0 + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float cnoise(vec3 P) {
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = vec4(Pi0.z);
  vec4 iz1 = vec4(Pi1.z);

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(vec4(0.0), gx0) - 0.5);
  gy0 -= sz0 * (step(vec4(0.0), gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(vec4(0.0), gx1) - 0.5);
  gy1 -= sz1 * (step(vec4(0.0), gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = taylorInvSqrt(
    vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110))
  );
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(
    vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111))
  );
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(
    vec4(n000, n100, n010, n110),
    vec4(n001, n101, n011, n111),
    fade_xyz.z
  );
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

float rand(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u * u * (3.0 - 2.0 * u);

  float res = mix(
    mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
    mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
    u.y
  );
  return res * res;
}

float fbm(vec2 x) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100.0);
  
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < NUM_OCTAVES; ++i) {
    v += a * noise(x);
    x = rot * x * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

/**
 * End new code for colored orb
 */

ColoredSDF applyIdleState(
  ColoredSDF sdf,
  SDFArgs args,
  bool isDarkMode /**
 * new bool
 */
) {
  float midRadius = 0.12; 
  float maxRadius = 0.3; 
  float t1 = 1.0; 
  float gamma = 3.0; 
  float omega = pi / 2.0; 

  
  float k = exp(-gamma) * omega;

  float radius;
  if (args.time <= t1) {
    
    float t_prime = args.time / t1;
    
    float springValue = 1.0 - exp(-gamma * t_prime) * cos(omega * t_prime);
    radius = midRadius * springValue;
  } else {
    
    float adjustedTime = args.time - t1;
    
    radius =
      midRadius + (maxRadius - midRadius) * (1.0 - exp(-k * adjustedTime));
  }

  
  float distance = length(args.st) - radius;

  
  sdf.distance = mix(sdf.distance, distance, args.amount);

  
  
  float alpha = sin(pi / 0.7 * args.time) * 0.3 + 0.7;
  vec4 color = vec4(isDarkMode ? vec3(1.0) : vec3(0.0), alpha);

  
  sdf.color = mix(sdf.color, color, args.amount);

  return sdf;
}

ColoredSDF applyIdleStateLegacy(ColoredSDF sdf, SDFArgs args, bool isDarkMode) {
  float connectedLinearAnimation = scaled(0.0, 2.0, args.duration);
  float connectedAnimation = fixedSpring(connectedLinearAnimation, 0.96);
  float circleSize =
    mix(
      pow(scaled(0.0, 3.0, args.time), 2.0) * 0.75 + 0.1,
      1.0,
      connectedAnimation
    ) *
    0.33;
  vec2 rotatedCoords = rotate(
    args.st,
    -args.time * pi -
      connectedAnimation * pi * 2.0 -
      pi * 2.0 * 5.0 * silkySmooth(scaled(0.0, 5.0, args.time), 2.0)
  );

  float strokeWidth = mix(circleSize / 2.0, circleSize, connectedAnimation);
  float connecting = abs(length(args.st) - circleSize) - strokeWidth;

  float connected = length(args.st) - circleSize;
  float idleDist = mix(connecting, connected, connectedAnimation);

  float d = min(sdf.distance, idleDist);
  sdf.distance = mix(sdf.distance, d, args.amount);
  float angle = atan(rotatedCoords.y, rotatedCoords.x);
  float alpha = mix(
    min(1.0, scaled(-pi, pi, angle)),
    1.0,
    connectedLinearAnimation
  );

  float spinningCircleDist =
    length(
      rotatedCoords -
        vec2(-mix(circleSize, strokeWidth, connectedAnimation), 0.0)
    ) -
    strokeWidth;

  alpha = min(
    1.0,
    max(
      alpha,
      smoothstep(0.005, 0.0, spinningCircleDist) + connectedAnimation * 4.0
    )
  );

  sdf.color = mix(
    sdf.color,
    vec4(isDarkMode ? vec3(1.0) : vec3(0.0), alpha),
    args.amount
  );
  return sdf;
}

ColoredSDF applyListenState(
  ColoredSDF sdf,
  SDFArgs args,
  float micLevel,
  float listenTimestamp, /* new */
  float touchDownTimestamp, /* new */
  float touchUpTimestamp, /* new */
  bool fadeBloopWhileListening /* new */
) {
  float breathingSequence = sin(args.time) * 0.5 + 0.5;
  float entryAnimation = fixedSpring(scaled(0.0, 3.0, args.duration), 0.9);

  float touch =
    fixedSpring(scaled(0.0, 1.0, args.time - touchDownTimestamp), 0.99) -
    fixedSpring(scaled(0.0, 0.8, args.time - touchUpTimestamp), 1.0);

  float listenAnimation = clamp(
    spring(scaled(0.0, 0.9, args.duration), 1.0),
    0.0,
    1.0
  );
  float radius = 0.0;
  float smoothlevel = micLevel;
  float l1 = smoothlevel;
  radius = 0.38 + l1 * 0.05 + breathingSequence * 0.03;
  radius *= 1.0 - (1.0 - entryAnimation) * 0.25;

  float ring = 10000.0;

  
  if (touch > 0.0) {
    touch = min(touch, listenAnimation); 
    float arcWidth = radius * 0.1;

    
    radius -= touch * arcWidth * 2.3;
    
    radius = min(
      radius,
      mix(radius, args.mainRadius - arcWidth * 2.3 - l1 * 0.01, touch)
    );

    float startAngle = 0.0;
    float arcLengthTouch =
      smoothstep(0.04, 1.0, touch) * pi * (1.0 - arcWidth / 3.0 / radius);

    float arcLength = 0.0;
    float radiusTouch =
      radius * fixedSpring(scaled(0.0, 1.0, args.duration), 1.0) * args.amount +
      l1 * 0.01;

    radiusTouch +=
      arcWidth * 1.3 * mix(-1.0, 1.0, smoothstep(0.0, 0.12, touch));

    float ringRadius = 0.0;
    arcLength = arcLengthTouch;
    ringRadius = radiusTouch;
    startAngle = pi / 2.0 - (args.time - touchDownTimestamp) / 2.0;

    ring = arc(args.st, startAngle, arcLength, ringRadius, arcWidth); 
  }

  float d = length(args.st) - radius;

  d = min(d, ring);

  sdf.distance = mix(sdf.distance, d, args.amount);

  if (fadeBloopWhileListening) {
    
    sdf.color.a = mix(
      sdf.color.a,
      mix(1.0, 1.0 - l1 * 0.6, listenAnimation),
      args.amount
    );
  } else {
    sdf.color.a = 1.0;
  }

  return sdf;
}

ColoredSDF applyThinkState(ColoredSDF sdf, SDFArgs args) {
  float d = 1000.0; 
  int count = 5; 
  float entryAnimation = spring(scaled(0.0, 1.0, args.duration), 1.0);

  float thinkingDotEntryAnimation = spring(
    scaled(0.1, 1.1, args.duration),
    1.0
  );
  float thinkingDotRadius =
    mix(0.2, 0.06, thinkingDotEntryAnimation) * args.amount;

  
  args.st.x -= thinkingDotRadius * 0.5 * thinkingDotEntryAnimation;

  for (int i = 0; i < count; i++) {
    float f = float(float(i) + 0.5) / float(count); 
    float a =
      -f * pi * 2.0 +
      args.time / 3.0 +
      spring(scaled(0.0, 10.0, args.duration), 1.0) * pi / 2.0;
    float ringRadi = args.mainRadius * 0.45 * entryAnimation;

    
    ringRadi -=
      (sin(
        entryAnimation * pi * 4.0 +
          a * pi * 2.0 +
          args.time * 3.0 -
          silkySmooth(args.time / 4.0, 2.0) * pi * 1.0
      ) *
        0.5 +
        0.5) *
      args.mainRadius *
      0.1;

    vec2 pos = vec2(cos(a), sin(a)) * ringRadi;
    float dd = length(args.st - pos) - args.mainRadius * 0.5;

    
    d = opSmoothUnion(
      d,
      dd,
      0.03 * scaled(0.0, 10.0, args.duration) + 0.8 * (1.0 - entryAnimation)
    );

    
    float dotAngle = f * pi * 2.0;
    float dotRingRadius =
      (sin(
        thinkingDotEntryAnimation * pi * 4.0 +
          a * pi * 2.0 +
          args.time * 0.1 * pi * 4.0
      ) *
        0.5 +
        0.5) *
      thinkingDotRadius *
      0.3;
    vec2 dotPos =
      vec2(-args.mainRadius, args.mainRadius) * 0.8 * thinkingDotEntryAnimation;
    vec2 dotOffset =
      vec2(cos(dotAngle + args.time), sin(dotAngle + args.time)) *
      dotRingRadius;
    float dotD = length(args.st - dotPos - dotOffset) - thinkingDotRadius * 0.8;
    d = opSmoothUnion(
      d,
      dotD,
      (1.0 - min(thinkingDotEntryAnimation, args.amount)) * thinkingDotRadius
    );
  }
  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

ColoredSDF applySpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float silenceAmount,
  float silenceDuration
) {
  float d = 1000.0;
  int barCount = 4;
  for (int i = 0; i < barCount; i++) {
    float f = float(float(i) + 0.5) / float(barCount); 

    
    float w = 1.0 / float(barCount) * 0.44;
    float h = w;

    
    float wave = sin(f * pi * 0.8 + args.time) * 0.5 + 0.5;
    float entryAnimation = spring(
      scaled(0.1 + wave * 0.4, 1.0 + wave * 0.4, args.duration),
      0.98
    );
    vec2 pos = vec2(f - 0.5, 0.0) * args.mainRadius * 1.9;
    pos.y = 0.25 * (1.0 - entryAnimation);

    
    if (silenceAmount > 0.0) {
      float bounceStagger = f / 5.0;
      float bounceDelay = 0.6;
      float bounceTimer = scaled(
        bounceDelay,
        bounceDelay + 1.0,
        fract((silenceDuration + bounceStagger) / 2.0) * 2.0
      );
      pos.y +=
        bounce(bounceTimer, 6.0) *
        w *
        0.25 *
        silenceAmount *
        pow(entryAnimation, 4.0) *
        pow(args.amount, 4.0); 
    }

    
    h += avgMag[i] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1);

    float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
    d = opSmoothUnion(d, dd, 0.2 * (1.0 - args.amount));

  }

  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

ColoredSDF applyListenAndSpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  float micLevel,
  vec4 avgMag,
  vec4 cumulativeAudio,
  int binCount,
  vec3 bloopColorMain,
  vec3 bloopColorLow,
  vec3 bloopColorMid,
  vec3 bloopColorHigh,
  sampler2D uTextureNoise,
  bool listening,
  bool isAdvancedBloop
) {
  float entryAnimation = fixedSpring(scaled(0.0, 2.0, args.duration), 0.92);

  
  
  float radius =
    (listening ? 0.37 : 0.43) * (1.0 - (1.0 - entryAnimation) * 0.25) +
    micLevel * 0.065;

  
  
  
  float maxDisplacement = 0.01;

  
  float oscillationPeriod = 4.0;
  
  float displacementOffset =
    maxDisplacement * sin(2.0 * pi / oscillationPeriod * args.time);
  
  vec2 adjusted_st = args.st - vec2(0.0, displacementOffset);

  
  if (!isAdvancedBloop) {
    sdf.color = mix(sdf.color, vec4(bloopColorMain, 1.0), args.amount);
    sdf.distance = mix(sdf.distance, length(adjusted_st) - radius, args.amount);
    return sdf;
  }

  
  
  vec4 uAudioAverage = avgMag;
  vec4 uCumulativeAudio = cumulativeAudio;

  
  float scaleFactor = 1.0 / (2.0 * radius);
  vec2 uv = adjusted_st * scaleFactor + 0.5;
  uv.y = 1.0 - uv.y;

  
  float noiseScale = 1.25; 
  float windSpeed = 0.075; 
  float warpPower = 0.19; 
  float waterColorNoiseScale = 18.0; 
  float waterColorNoiseStrength = 0.01; 
  float textureNoiseScale = 1.0; 
  float textureNoiseStrength = 0.08; 
  float verticalOffset = 0.09; 
  float waveSpread = 1.0; 
  float layer1Amplitude = 1.0; 
  float layer1Frequency = 1.0; 
  float layer2Amplitude = 1.0; 
  float layer2Frequency = 1.0; 
  float layer3Amplitude = 1.0; 
  float layer3Frequency = 1.0; 
  float fbmStrength = 1.0; 
  float fbmPowerDamping = 0.55; 
  float overallSoundScale = 1.0; 
  float blurRadius = 1.0;
  float timescale = 1.0;

  
  float time = args.time * timescale * 0.85;

  vec3 sinOffsets = vec3(
    uCumulativeAudio.x * 0.15 * overallSoundScale,
    -uCumulativeAudio.y * 0.5 * overallSoundScale,
    uCumulativeAudio.z * 1.5 * overallSoundScale
  );
  verticalOffset += 1.0 - waveSpread;

  
  float noiseX = cnoise(
    vec3(
      uv * 1.0 + vec2(0.0, 74.8572),
      (time + uCumulativeAudio.x * 0.05 * overallSoundScale) * 0.3
    )
  );
  float noiseY = cnoise(
    vec3(
      uv * 1.0 + vec2(203.91282, 10.0),
      (time + uCumulativeAudio.z * 0.05 * overallSoundScale) * 0.3
    )
  );

  uv += vec2(noiseX * 2.0, noiseY) * warpPower;

  
  float noiseA =
    cnoise(vec3(uv * waterColorNoiseScale + vec2(344.91282, 0.0), time * 0.3)) +
    cnoise(
      vec3(uv * waterColorNoiseScale * 2.2 + vec2(723.937, 0.0), time * 0.4)
    ) *
      0.5;
  uv += noiseA * waterColorNoiseStrength;
  uv.y -= verticalOffset;

  
  vec2 textureUv = uv * textureNoiseScale;
  float textureSampleR0 = texture(uTextureNoise, textureUv).r;
  float textureSampleG0 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp0 =
    mix(
      textureSampleR0 - 0.5,
      textureSampleG0 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  textureUv += vec2(63.861 + uCumulativeAudio.x * 0.05, 368.937);
  float textureSampleR1 = texture(uTextureNoise, textureUv).r;
  float textureSampleG1 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp1 =
    mix(
      textureSampleR1 - 0.5,
      textureSampleG1 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  textureUv += vec2(272.861, 829.937 + uCumulativeAudio.y * 0.1);
  textureUv += vec2(180.302 - uCumulativeAudio.z * 0.1, 819.871);
  float textureSampleR3 = texture(uTextureNoise, textureUv).r;
  float textureSampleG3 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp3 =
    mix(
      textureSampleR3 - 0.5,
      textureSampleG3 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  uv += textureNoiseDisp0;

  
  vec2 st = uv * noiseScale;

  vec2 q = vec2(0.0);
  q.x = fbm(
    st * 0.5 +
      windSpeed * (time + uCumulativeAudio.a * 0.175 * overallSoundScale)
  );
  q.y = fbm(
    st * 0.5 +
      windSpeed * (time + uCumulativeAudio.x * 0.136 * overallSoundScale)
  );

  vec2 r = vec2(0.0);
  r.x = fbm(
    st +
      1.0 * q +
      vec2(0.3, 9.2) +
      0.15 * (time + uCumulativeAudio.y * 0.234 * overallSoundScale)
  );
  r.y = fbm(
    st +
      1.0 * q +
      vec2(8.3, 0.8) +
      0.126 * (time + uCumulativeAudio.z * 0.165 * overallSoundScale)
  );

  float f = fbm(st + r - q);
  float fullFbm = (f + 0.6 * f * f + 0.7 * f + 0.5) * 0.5;
  fullFbm = pow(fullFbm, fbmPowerDamping);
  fullFbm *= fbmStrength;

  
  blurRadius = blurRadius * 1.5;
  vec2 snUv =
    (uv + vec2((fullFbm - 0.5) * 1.2) + vec2(0.0, 0.025) + textureNoiseDisp0) *
    vec2(layer1Frequency, 1.0);
  float sn =
    noise(
      snUv * 2.0 + vec2(sin(sinOffsets.x * 0.25), time * 0.5 + sinOffsets.x)
    ) *
    2.0 *
    layer1Amplitude;
  float sn2 = smoothstep(
    sn - 1.2 * blurRadius,
    sn + 1.2 * blurRadius,
    (snUv.y - 0.5 * waveSpread) *
      (5.0 - uAudioAverage.x * 0.1 * overallSoundScale * 0.5) +
      0.5
  );

  vec2 snUvBis =
    (uv + vec2((fullFbm - 0.5) * 0.85) + vec2(0.0, 0.025) + textureNoiseDisp1) *
    vec2(layer2Frequency, 1.0);
  float snBis =
    noise(
      snUvBis * 4.0 +
        vec2(
          sin(sinOffsets.y * 0.15) * 2.4 + 293.0,
          time * 1.0 + sinOffsets.y * 0.5
        )
    ) *
    2.0 *
    layer2Amplitude;
  float sn2Bis = smoothstep(
    snBis - (0.9 + uAudioAverage.y * 0.4 * overallSoundScale) * blurRadius,
    snBis + (0.9 + uAudioAverage.y * 0.8 * overallSoundScale) * blurRadius,
    (snUvBis.y - 0.6 * waveSpread) * (5.0 - uAudioAverage.y * 0.75) + 0.5
  );

  vec2 snUvThird =
    (uv + vec2((fullFbm - 0.5) * 1.1) + textureNoiseDisp3) *
    vec2(layer3Frequency, 1.0);
  float snThird =
    noise(
      snUvThird * 6.0 +
        vec2(
          sin(sinOffsets.z * 0.1) * 2.4 + 153.0,
          time * 1.2 + sinOffsets.z * 0.8
        )
    ) *
    2.0 *
    layer3Amplitude;
  float sn2Third = smoothstep(
    snThird - 0.7 * blurRadius,
    snThird + 0.7 * blurRadius,
    (snUvThird.y - 0.9 * waveSpread) * 6.0 + 0.5
  );

  sn2 = pow(sn2, 0.8);
  sn2Bis = pow(sn2Bis, 0.9);

  
  vec3 sinColor;
  sinColor = blendLinearBurn_13_5(bloopColorMain, bloopColorLow, 1.0 - sn2);
  sinColor = blendLinearBurn_13_5(
    sinColor,
    mix(bloopColorMain, bloopColorMid, 1.0 - sn2Bis),
    sn2
  );
  sinColor = mix(
    sinColor,
    mix(bloopColorMain, bloopColorHigh, 1.0 - sn2Third),
    sn2 * sn2Bis
  );

  
  sdf.color = mix(sdf.color, vec4(sinColor, 1), args.amount);

  
  sdf.distance = mix(sdf.distance, length(adjusted_st) - radius, args.amount);

  return sdf;
}

float micSdf(vec2 st, float muted) {
  float d = 100.0;
  float strokeWidth = 0.03;
  vec2 elementSize = vec2(0.12, 0.26);
  vec2 elementPos = vec2(0.0, elementSize.y * 0.585);
  float element = sdRoundedBox(
    st - elementPos,
    elementSize,
    vec4(min(elementSize.x, elementSize.y))
  );
  element = element - strokeWidth;
  d = min(d, element);

  vec2 standSize = elementSize * 2.2;
  vec2 standPos = vec2(elementPos.x, elementPos.y - 0.05);
  st.y += 0.08;
  float ta = -pi / 2.0; 
  float tb = pi / 2.0; 
  float w = 0.0;
  float stand = sdArc(
    st - standPos,
    vec2(sin(ta), cos(ta)),
    vec2(sin(tb), cos(tb)),
    standSize.x,
    w
  );
  stand = min(
    stand,
    sdSegment(st - standPos, vec2(standSize.x, 0.06), vec2(standSize.x, 0.0))
  );
  stand = min(
    stand,
    sdSegment(st - standPos, vec2(-standSize.x, 0.06), vec2(-standSize.x, 0.0))
  );

  float foot = sdSegment(
    st - standPos,
    vec2(0.0, -standSize.x),
    vec2(0.0, -standSize.x * 1.66)
  );
  foot = min(
    foot,
    sdSegment(
      st - standPos,
      vec2(-standSize.x * 0.68, -standSize.x * 1.66),
      vec2(standSize.x * 0.68, -standSize.x * 1.66)
    )
  );
  stand = min(stand, foot);

  d = min(d, abs(stand) - strokeWidth);

  return d;
}

ColoredSDF applyBottomAlignedBarsAndMicState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float micLevel,
  bool isDarkMode
) {
  float d = 1000.0;
  int barCount = 5;
  int loopCount = barCount;
  if (args.amount == 0.0) {
    loopCount = 1; 
  }
  for (int i = 0; i < loopCount; i++) {
    float f = float(float(i) + 0.5) / float(barCount); 

    
    float w = 1.0 / float(barCount) * 0.42;
    float h = w;

    
    float entryDuration = 1.8;
    float entryAnimation =
      fixedSpring(scaled(0.0, entryDuration, args.duration), 0.94) *
      args.amount;
    vec2 pos = vec2(f - 0.5, 0.0) * args.mainRadius * 1.9;
    pos.x *= entryAnimation;

    if (i == 0) {
      float micScale = mix(6.0 - micLevel * 2.0, 6.0, args.amount);
      float yOffset = w * 2.0;
      d =
        micSdf(
          (args.st - pos + vec2(-w * 0.15 * args.amount, yOffset)) * micScale,
          1.0 - args.amount
        ) /
        micScale;
    } else {
      
      h += avgMag[i - 1] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1) * 0.7;
      h = mix(w, h, smoothstep(0.8, 1.0, entryAnimation));

      float bubbleInDur = 0.5;
      float bubbleOutDur = 0.4;

      
      float bubbleEffect =
        fixedSpring(
          scaled(
            f / 4.0,
            f / 4.0 + bubbleInDur,
            args.duration - entryDuration / 8.0
          ),
          1.0
        ) *
        pow(
          1.0 -
            scaled(
              f / 8.0 + bubbleInDur / 8.0,
              f / 4.0 + bubbleInDur / 8.0 + bubbleOutDur,
              args.duration - entryDuration / 8.0
            ),
          2.0
        );

      h += bubbleEffect * min(h, w);

      
      w *= args.amount;
      h *= args.amount;

      h = min(h, 0.23); 

      pos.y -= 0.25;
      pos.y += h;
      pos.y += bubbleEffect * w * 0.5;

      float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
      d = min(d, dd);
    }
  }

  sdf.distance = d; 
  sdf.color = mix(
    sdf.color,
    isDarkMode
      ? vec4(1.0)
      : vec4(0.0, 0.0, 0.0, 1.0),
    args.amount
  );
  return sdf;
}

ColoredSDF applyHaltState(ColoredSDF sdf, SDFArgs args) {
  
  float radius = mix(
    0.4,
    mix(0.4, 0.45, args.amount),
    sin(args.time * 0.25) * 0.5 + 0.5
  );
  float strokeWidth = mix(radius / 2.0, 0.02, args.amount);

  
  radius -= strokeWidth;

  radius *= mix(0.7, 1.0, args.amount);
  float circle = abs(length(args.st) - radius) - strokeWidth;

  sdf.distance = mix(sdf.distance, circle, args.amount);
  sdf.color.a = mix(sdf.color.a, pow(0.8, 2.2), scaled(0.5, 1.0, args.amount));
  return sdf;
}

vec3 blendNormal(vec3 base, vec3 blend) {
  return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
  return blendNormal(base, blend) * opacity + base * (1.0 - opacity);
}

in vec2 out_uv;
out vec4 fragColor;

layout(std140) uniform BlorbUniformsObject {
  float time;
  float micLevel;
  float touchDownTimestamp;
  float touchUpTimestamp;
  float stateListen;
  float listenTimestamp;
  float stateThink;
  float thinkTimestamp;
  float stateSpeak;
  float speakTimestamp;
  float readyTimestamp;
  float stateHalt;
  float haltTimestamp;
  float stateFailedToConnect;
  float failedToConnectTimestamp;
  vec4 avgMag;
  vec4 cumulativeAudio;
  vec2 viewport;
  float screenScaleFactor;
  float silenceAmount;
  float silenceTimestamp;
  bool isDarkMode;
  bool fadeBloopWhileListening;
  bool isNewBloop;
  bool isAdvancedBloop;
  vec3 bloopColorMain;
  vec3 bloopColorLow;
  vec3 bloopColorMid;
  vec3 bloopColorHigh;
} ubo; 

uniform sampler2D uTextureNoise; 

void main() {
  vec2 st = out_uv - 0.5;
  float viewRatio = ubo.viewport.y / ubo.viewport.x;
  st.y *= viewRatio;

  ColoredSDF sdf;
  sdf.distance = 1000.0;
  sdf.color = vec4(1.0);

  SDFArgs args;
  args.st = st;
  args.time = ubo.time;
  args.mainRadius = 0.49;

  SDFArgs idleArgs = args;
  SDFArgs listenArgs = args;
  SDFArgs thinkArgs = args;
  SDFArgs speakArgs = args;
  SDFArgs haltArgs = args;
  SDFArgs failedToConnectArgs = args;

  idleArgs.amount = 1.0;
  listenArgs.amount = ubo.stateListen;
  thinkArgs.amount = ubo.stateThink;
  speakArgs.amount = ubo.stateSpeak;
  haltArgs.amount = ubo.stateHalt;
  failedToConnectArgs.amount = ubo.stateFailedToConnect;

  idleArgs.duration = ubo.time - ubo.readyTimestamp;
  listenArgs.duration = ubo.time - ubo.listenTimestamp;
  thinkArgs.duration = ubo.time - ubo.thinkTimestamp;
  speakArgs.duration = ubo.time - ubo.speakTimestamp;
  haltArgs.duration = ubo.time - ubo.haltTimestamp;
  failedToConnectArgs.duration = ubo.time - ubo.failedToConnectTimestamp;

  if (ubo.isNewBloop) {
    sdf = applyIdleState(sdf, idleArgs, ubo.isDarkMode);
  } else {
    sdf = applyIdleStateLegacy(sdf, idleArgs, ubo.isDarkMode);
  }

  if (failedToConnectArgs.amount > 0.0) {
    sdf = applyHaltState(sdf, failedToConnectArgs);
  }

  if (listenArgs.amount > 0.0) {
    if (ubo.isAdvancedBloop) {
      if (speakArgs.amount > 0.0) {
        listenArgs.amount = 1.0;
      }

      
      int binCount = 1;
      sdf = applyListenAndSpeakState(
        sdf,
        listenArgs,
        ubo.micLevel,
        ubo.avgMag,
        ubo.cumulativeAudio,
        binCount,
        ubo.bloopColorMain,
        ubo.bloopColorLow,
        ubo.bloopColorMid,
        ubo.bloopColorHigh,
        uTextureNoise,
        true,
        ubo.isAdvancedBloop
      );
    } else {
      sdf = applyListenState(
        sdf,
        listenArgs,
        ubo.micLevel,
        ubo.listenTimestamp,
        ubo.touchDownTimestamp,
        ubo.touchUpTimestamp,
        ubo.fadeBloopWhileListening
      );
    }
  }

  if (thinkArgs.amount > 0.0) {
    sdf = applyThinkState(sdf, thinkArgs);
  }

  if (speakArgs.amount > 0.0) {
    if (ubo.isAdvancedBloop) {
      int binCount = 1;
      sdf = applyListenAndSpeakState(
        sdf,
        speakArgs,
        ubo.micLevel,
        ubo.avgMag,
        ubo.cumulativeAudio,
        binCount,
        ubo.bloopColorMain,
        ubo.bloopColorLow,
        ubo.bloopColorMid,
        ubo.bloopColorHigh,
        uTextureNoise,
        false,
        ubo.isAdvancedBloop
      );
    } else {
      float silenceDuration = ubo.time - ubo.silenceTimestamp;
      sdf = applySpeakState(
        sdf,
        speakArgs,
        ubo.avgMag,
        ubo.silenceAmount,
        silenceDuration
      );
    }
  }

  if (haltArgs.amount > 0.0) {
    sdf = applyHaltState(sdf, haltArgs);
  }

  float clampingTolerance = 0.0075 / ubo.screenScaleFactor;
  float clampedShape = smoothstep(clampingTolerance, 0.0, sdf.distance);
  float alpha = sdf.color.a * clampedShape;
  if (!ubo.isNewBloop) {
    alpha *= scaled(0.0, 1.0, ubo.time);
  }
  fragColor = vec4(sdf.color.rgb * alpha, alpha);
}`,
  $p = `#version 300 es

out vec4 out_position;
out vec2 out_uv;

const vec4 blitFullscreenTrianglePositions[6] = vec4[](
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0),
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0)
);

void main() {
  out_position = blitFullscreenTrianglePositions[gl_VertexID];
  out_uv = out_position.xy * 0.5 + 0.5;
  out_uv.y = 1.0 - out_uv.y;
  gl_Position = out_position;
}`;
class _r {
  #i;
  #o;
  #e;
  #r = [];
  #s = {};
  #t;
  #n;
  static #a = "BlorbUniformsObject";
  constructor(e, t) {
    this.#e = e;
    const i = e.getUniformBlockIndex(t, _r.#a),
      r = e.getActiveUniformBlockParameter(t, i, e.UNIFORM_BLOCK_DATA_SIZE);
    (this.#t = e.createBuffer()),
      e.bindBuffer(e.UNIFORM_BUFFER, this.#t),
      e.bufferData(e.UNIFORM_BUFFER, r, e.DYNAMIC_DRAW);
    const s = 0;
    e.bindBufferBase(e.UNIFORM_BUFFER, s, this.#t),
      e.uniformBlockBinding(t, i, s);
    const o = e.getActiveUniformBlockParameter(
      t,
      i,
      e.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES,
    );
    (this.#r = []), (this.#s = {});
    for (let a = 0; a < o.length; a++) {
      const c = o[a],
        d = e.getActiveUniform(t, c);
      if (!d) throw new Error("No uniformInfo for index " + c);
      let u = d.name;
      u = u.replace(/\[0\]$/, "");
      const l = e.getActiveUniforms(t, [c], e.UNIFORM_OFFSET)[0];
      this.#r.push(u), (this.#s[u] = l);
    }
    (this.#n = new ArrayBuffer(r)),
      (this.#i = new Float32Array(this.#n)),
      (this.#o = new Int32Array(this.#n));
  }
  setVariablesAndRender(e) {
    for (const t of this.#r) {
      const [, i] = t.split("."),
        s = this.#s[t] / 4,
        o = e[i];
      typeof o == "number"
        ? (this.#i[s] = o)
        : typeof o == "boolean"
          ? (this.#o[s] = o ? 1 : 0)
          : Array.isArray(o) && this.#i.set(o, s);
    }
    this.#e.bindBuffer(this.#e.UNIFORM_BUFFER, this.#t),
      this.#e.bufferSubData(this.#e.UNIFORM_BUFFER, 0, this.#n),
      this.#e.drawArrays(this.#e.TRIANGLE_STRIP, 0, 6);
  }
}
function W(n) {
  const e = n.replace("#", ""),
    t = parseInt(e.substring(0, 2), 16) / 255,
    i = parseInt(e.substring(2, 4), 16) / 255,
    r = parseInt(e.substring(4, 6), 16) / 255;
  return new Float32Array([t, i, r]);
}
const zt = {
    BLUE: {
      bloopColorMain: W("#DCF7FF"),
      bloopColorLow: W("#0181FE"),
      bloopColorMid: W("#A4EFFF"),
      bloopColorHigh: W("#FFFDEF"),
    },
    DARK_BLUE: {
      bloopColorMain: W("#DAF5FF"),
      bloopColorLow: W("#0066CC"),
      bloopColorMid: W("#2EC6F5"),
      bloopColorHigh: W("#72EAF5"),
    },
    GREYSCALE: {
      bloopColorMain: W("#D7D7D7"),
      bloopColorLow: W("#303030"),
      bloopColorMid: W("#989898"),
      bloopColorHigh: W("#FFFFFF"),
    },
    WHITE: {
      bloopColorMain: W("#FFFFFF"),
      bloopColorLow: W("#FFFFFF"),
      bloopColorMid: W("#FFFFFF"),
      bloopColorHigh: W("#FFFFFF"),
    },
    BLACK: {
      bloopColorMain: W("#000000"),
      bloopColorLow: W("#000000"),
      bloopColorMid: W("#000000"),
      bloopColorHigh: W("#000000"),
    },
    ANGSTY_BLACK: {
      bloopColorMain: W("#494949"),
      bloopColorLow: W("#000000"),
      bloopColorMid: W("#7F7F7F"),
      bloopColorHigh: W("#696969"),
    },
    HELLO_TIBOR: {
      bloopColorMain: W("#FFE987"),
      bloopColorLow: W("#E58B28"),
      bloopColorMid: W("#FB7256"),
      bloopColorHigh: W("#F3FDFE"),
    },
  },
  Xp = ({ isAdvanced: n, overrideColor: e }) => {
    const t = co();
    return e && zt[e] ? zt[e] : n ? zt.BLUE : t ? zt.WHITE : zt.BLACK;
  },
  to = [300, 300],
  Zp = { bands: 4, loPass: 0, hiPass: 400 },
  em = (n) => {
    const e = Er(n, {
      bands: wr,
      updateInterval: $n,
      loPass: 0,
      hiPass: 400,
      analyserOptions: { fftSize: Rc },
    });
    return e.length === 0 ? _c : e;
  },
  tm = (n, e) => {
    const t = em(n),
      i = Ic(t, {
        sampleRate: xc,
        binCount: e.bins,
        bandCount: e.bands,
        gainMultipliers: e.gainMultipliers,
      }),
      r = Rr({ magnitudes: t, binCount: 1, gainMultiplier: 1 });
    return { bandMagnitudes: i, cumulativeMagnitude: r };
  },
  nm = (n) => {
    const [e, t] = T.useState({
        audioData: [0, 0, 0, 0],
        cumulativeAudioData: [0, 0, 0, 0],
      }),
      i = T.useRef([0, 0, 0, 0]),
      r = T.useRef(void 0),
      s = T.useRef(performance.now()),
      { bandMagnitudes: o, cumulativeMagnitude: a } = tm(n, {
        bands: 3,
        bins: 1,
        gainMultipliers: [10, 1, 1],
      });
    i.current = [...o, a].flat();
    const c = T.useCallback(() => {
      const d = performance.now(),
        u = (d - s.current) / 1e3;
      s.current = d;
      const l = i.current,
        { audioData: h, cumulativeAudioData: f } = e,
        g = Gp({
          deltaTimeS: u,
          audioDataRaw: l,
          prevAudioData: h,
          prevCumulativeAudioData: f,
        });
      t(g);
    }, [e]);
    return (
      T.useEffect(
        () => (
          r.current || (r.current = window.setInterval(c, $n)),
          () => {
            clearInterval(r.current), (r.current = void 0);
          }
        ),
        [c],
      ),
      e
    );
  },
  no = Promise.resolve();
function Dc({ url: n, readyToPlay: e }) {
  const t = T.useRef(void 0),
    i = T.useRef(no);
  return (
    T.useEffect(
      () => (
        t.current || (t.current = document.createElement("audio")),
        () => {
          i.current.then(() => {
            t.current &&
              (t.current.pause(),
              t.current.removeAttribute("src"),
              t.current.remove(),
              (i.current = no));
          });
        }
      ),
      [],
    ),
    T.useEffect(() => {
      n &&
        t.current &&
        t.current.src !== n &&
        e &&
        i.current.then(() => {
          t.current &&
            ((t.current.crossOrigin = "anonymous"),
            (t.current.src = n),
            (i.current = t.current.play()));
        });
    }, [e, n]),
    t.current
  );
}
function im({ className: n, url: e }) {
  const [t, i] = T.useState(!1),
    r = Dc({ url: e, readyToPlay: t }),
    s = Er(r, Zp),
    o = T.useMemo(() => [0, 0, 0, 0], []);
  return F.jsx(Mc, {
    className: n,
    isAdvanced: !1,
    avgMag: s,
    cumulativeAudioData: o,
    onRenderComplete: () => i(!0),
  });
}
function rm({ className: n, url: e, overrideColor: t }) {
  const [i, r] = T.useState(!1),
    s = Dc({ url: e, readyToPlay: i }),
    o = nm(s),
    { audioData: a, cumulativeAudioData: c } = o;
  return F.jsx(Mc, {
    className: n,
    isAdvanced: !0,
    overrideColor: t,
    avgMag: a,
    cumulativeAudioData: c,
    onRenderComplete: () => r(!0),
  });
}
const Mc = ({
  className: n,
  avgMag: e,
  cumulativeAudioData: t,
  isAdvanced: i,
  overrideColor: r,
  onRenderComplete: s,
}) => {
  const o = co(),
    a = T.useMemo(() => performance.now() / 1e3, []),
    c = T.useMemo(() => performance.now() / 1e3, []),
    d = T.useRef(void 0),
    u = T.useRef(Wp()),
    [l, h] = T.useState(to),
    { canvasSizeRef: f, handleCanvasSizeUpdate: g } = _d(to),
    p = T.useCallback((w) => {
      h([w.width, w.height]);
    }, []),
    [b, v] = T.useState(performance.now() / 1e3);
  T.useEffect(() => {
    const w = setInterval(() => {
      v(performance.now() / 1e3);
    }, $n);
    return () => clearInterval(w);
  }, []);
  const D = Xp({ isAdvanced: i, overrideColor: r }),
    C = u.current(D),
    k = Rp({
      viewport: l,
      canvasSize: f.current,
      shouldMeasurePerf: !0,
      source: "VoicePicker",
    }),
    y = xp({ shouldCalibrate: !0, viewport: l, initialScale: 1 });
  return (
    (d.current = {
      time: b,
      micLevel: 0,
      stateListen: 0,
      listenTimestamp: 0,
      stateThink: 0,
      thinkTimestamp: 0,
      stateSpeak: 1,
      speakTimestamp: c,
      readyTimestamp: a,
      stateHalt: 0,
      haltTimestamp: 0,
      touchDownTimestamp: 0,
      touchUpTimestamp: 0,
      stateFailedToConnect: 0,
      failedToConnectTimestamp: 0,
      avgMag: e,
      cumulativeAudio: t,
      isNewBloop: !0,
      isAdvancedBloop: i,
      bloopColorMain: Array.from(C.bloopColorMain),
      bloopColorLow: Array.from(C.bloopColorLow),
      bloopColorMid: Array.from(C.bloopColorMid),
      bloopColorHigh: Array.from(C.bloopColorHigh),
      isDarkMode: o,
      screenScaleFactor: window.devicePixelRatio,
      viewport: l,
      silenceAmount: 0,
      silenceTimestamp: 0,
      fadeBloopWhileListening: !1,
    }),
    F.jsx(Hp, {
      className: St("flex items-center justify-center", n),
      variablesRef: d,
      onViewportUpdate: p,
      onRenderComplete: s,
      textureImage: Ac,
      textureName: "uTextureNoise",
      onGlAvailable: k,
      onCanvasSizeUpdate: g,
      scale: y,
      GLUniformsSetter: _r,
      vert: $p,
      frag: Qp,
    })
  );
};
function sm({
  isUnauthenticated: n,
  loading: e,
  handleLoginClick: t,
  handleCancelClick: i,
  handleConfirmClick: r,
  selectedVoice: s,
  currentVoiceName: o,
  cameFromNux: a,
}) {
  const c = "w-52 whitespace-nowrap rounded-full px-20 py-3 font-semibold";
  return n
    ? F.jsxs(F.Fragment, {
        children: [
          F.jsx(dn, {
            className: St(c, "text-white"),
            onClick: t,
            children: e
              ? F.jsx(Dr, {})
              : F.jsx(ot, { id: "IRALWH", defaultMessage: "Log in" }),
          }),
          F.jsx(dn, {
            className: St(c, "text-black dark:text-white"),
            color: "ghost",
            onClick: i,
            children: F.jsx(ot, {
              id: "8fumUc",
              defaultMessage: "Back to chat",
            }),
          }),
        ],
      })
    : F.jsxs(F.Fragment, {
        children: [
          F.jsx(dn, {
            className: St(c, "text-white"),
            onClick: r,
            children: e
              ? F.jsx(Dr, {})
              : s?.voice === o && !a
                ? F.jsx(ot, { id: "MyKAgb", defaultMessage: "Done" })
                : F.jsx(ot, { id: "7+3LaJ", defaultMessage: "Start new chat" }),
          }),
          F.jsx(dn, {
            className: St(c, "text-black dark:text-white"),
            color: "ghost",
            onClick: i,
            children: F.jsx(ot, { id: "dUn4Wd", defaultMessage: "Cancel" }),
          }),
        ],
      });
}
const om = {
  offscreenLeft: { x: "-24rem", opacity: 0 },
  left: { x: "-12rem", opacity: 0.5 },
  center: { x: "0", opacity: 1 },
  right: { x: "12rem", opacity: 0.5 },
  offscreenRight: { x: "24rem", opacity: 0 },
};
function Rm({
  conversationId: n,
  onClose: e,
  cameFromNux: t = !1,
  initialVoiceName: i,
}) {
  const { isUnauthenticated: r } = $c(),
    s = kd(),
    { voiceName: o } = ho(),
    a = we(),
    c = Xc(),
    d = fo(),
    [u, l] = T.useState(!1),
    h = Ei.getGizmoId(wi(n)),
    [f, g] = T.useState(!1),
    [p, b] = T.useState(!1);
  T.useEffect(() => {
    requestAnimationFrame(() => g(!0));
  }, []);
  const [v, D] = T.useState(!1),
    [C, k] = T.useState(null);
  T.useEffect(() => {
    if (d.length > 0) {
      const Z = d.findIndex((Ve) => Ve.voice === (i || o));
      Z >= 0 ? k(Z) : k(2), D(!0);
    }
  }, [d, o, i]);
  const y = C != null ? (C - 2 + d.length) % d.length : 0,
    w = C != null ? (C - 1 + d.length) % d.length : 1,
    S = C != null ? (C + 1) % d.length : 3,
    A = C != null ? (C + 2) % d.length : 4,
    N = d[C ?? 0],
    L = d[y],
    x = d[w],
    U = d[S],
    Y = d[A],
    ae = Pp(),
    { alreadyTriggered: Ye, setAlreadyTriggered: it } = Ep();
  T.useEffect(() => {
    if (ae && !Ye) {
      const Z = d.findIndex((Ve) => Ve.voice === "shade");
      Z !== -1 && (k(Z), it());
    }
    return () => {
      ae && it();
    };
  }, [ae, Ye, d, k, it]);
  const rt = T.useMemo(() => {
      if (ae && N?.voice === "shade") return "ANGSTY_BLACK";
    }, [N?.voice, ae]),
    st = (Z) => {
      k(Z);
    },
    { stopVoiceMode: G, startVoiceMode: B } = Cp({ requestMicPermissions: t }),
    { setValue: j } = Cd(Zc.VoiceName),
    z = Pt((Z) => Z.voiceMode),
    Te = t && !h ? "advanced" : z,
    he = T.useCallback(() => {
      b(!t),
        setTimeout(() => {
          const Z = C != null ? d[C]?.voice : d[0]?.voice;
          sessionStorage.setItem("selectedVoiceName", Z),
            s({
              authType: "login",
              callback: (Ve) => {
                ed.logLogInButtonClicked({
                  provider: Ve,
                  location: "Voice Picker Page",
                });
              },
            });
        }, Zn);
    }, [t, s, C, d]),
    Ut = T.useCallback(async () => {
      b(!t),
        setTimeout(async () => {
          l(!0);
          const Z = C != null ? d[C]?.voice : d[0]?.voice;
          if (t || Z !== o) {
            t || oe.voiceSelected.click({ action: "changed", voice: Z }),
              j(Z),
              await G(),
              lo("/");
            try {
              t
                ? a.setState((Ve) => {
                    Ve.isVoiceModeActive = !0;
                  })
                : await B({
                    conversation_id: void 0,
                    eventSource: "voice_picker",
                    voice_mode: Te,
                    voice: Z,
                    clientThreadId: td(),
                    gizmo_id: Ei.getGizmoId(wi(n)),
                  });
            } catch (Ve) {
              nd.addError(
                `Failed to start voice mode after voice picker: ${Ve}`,
                { protocol: c },
              );
            }
          } else oe.voiceSelected.click({ action: "kept", voice: o });
          l(!1), e();
        }, Zn);
    }, [t, n, o, e, C, j, B, G, Te, d, a, c]),
    Xn = () => {
      b(!0), setTimeout(e, Zn);
    };
  Pd({ setSelectedVoiceIndex: k, prevVoiceIndex: w, nextVoiceIndex: S });
  const [ge, Ce] = T.useState(!1),
    Qe = (Z) => {
      Z === "prev" ? st(w) : Z === "next" && st(S),
        Ce(!0),
        setTimeout(() => {
          Ce(!1);
        }, 175);
    },
    mt = T.useMemo(
      () => ({
        className: "h-max min-h-bloop w-max min-w-bloop",
        url: N?.preview_url,
      }),
      [N?.preview_url],
    );
  return !v || C == null
    ? F.jsx("div", {
        className:
          "bg-token-main-surface-primary fixed start-0 top-0 z-50 flex h-full w-full",
      })
    : F.jsxs("div", {
        className: `fixed start-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-white transition-opacity duration-300 dark:bg-gray-800 ${f && !p ? "opacity-100" : "opacity-0"}`,
        children: [
          F.jsx("h1", {
            className: "mt-36 mb-8 text-3xl font-semibold",
            children: r
              ? F.jsx(ot, {
                  id: "P4GR/e",
                  defaultMessage: "Try voice mode for free",
                })
              : F.jsx(ot, { id: "2whyE9", defaultMessage: "Choose a voice" }),
          }),
          F.jsx("div", {
            className: "flex h-full w-full items-center justify-center",
            children: N
              ? (t && !h) || Te === "advanced"
                ? F.jsx(rm, { ...mt, overrideColor: rt })
                : F.jsx(im, { ...mt })
              : null,
          }),
          F.jsx("div", {
            className: "mb-8 flex items-center justify-between text-center",
            children: F.jsxs("div", {
              className: "relative flex h-24 w-48",
              children: [
                F.jsx(Gt, { voice: L, variant: "offscreenLeft" }, L?.name),
                F.jsx(
                  Gt,
                  { voice: x, variant: "left", onClick: () => st(w) },
                  x?.name,
                ),
                F.jsx(io, {
                  direction: "prev",
                  onClick: () => Qe("prev"),
                  isFading: ge,
                }),
                F.jsx(Gt, { voice: N, variant: "center" }, N?.name),
                F.jsx(io, {
                  direction: "next",
                  onClick: () => Qe("next"),
                  isFading: ge,
                }),
                F.jsx(
                  Gt,
                  { voice: U, variant: "right", onClick: () => st(S) },
                  U?.name,
                ),
                F.jsx(Gt, { voice: Y, variant: "offscreenRight" }, Y?.name),
                F.jsx("div", {
                  className:
                    "pointer-events-none absolute h-full w-full -translate-x-52 transform bg-linear-to-r from-[var(--main-surface-background)] to-transparent",
                }),
                F.jsx("div", {
                  className:
                    "pointer-events-none absolute h-full w-full translate-x-52 transform bg-linear-to-l from-[var(--main-surface-background)] to-transparent",
                }),
                F.jsx("div", {
                  className:
                    "pointer-events-none absolute h-full w-full -translate-x-96 transform bg-white dark:bg-gray-800",
                }),
                F.jsx("div", {
                  className:
                    "pointer-events-none absolute h-full w-full translate-x-96 transform bg-white dark:bg-gray-800",
                }),
              ],
            }),
          }),
          F.jsx("div", {
            className: "mb-36 flex flex-col space-y-3",
            children: F.jsx(sm, {
              isUnauthenticated: r,
              loading: u,
              handleLoginClick: he,
              handleCancelClick: Xn,
              handleConfirmClick: Ut,
              selectedVoice: N,
              currentVoiceName: o,
              cameFromNux: t,
            }),
          }),
        ],
      });
}
function Gt({ voice: n, variant: e, onClick: t }) {
  return F.jsxs(Lc.button, {
    onClick: t,
    className:
      "absolute flex w-48 flex-col items-center justify-center select-none",
    variants: om,
    animate: e,
    initial: e,
    transition: { duration: 0.25, ease: "easeInOut" },
    children: [
      F.jsx("p", {
        className: `text-lg ${e === "center" ? "font-semibold" : ""}`,
        children: n?.name,
      }),
      F.jsx("p", {
        className: "text-sm text-gray-600 dark:text-[var(--text-secondary)]",
        children: n?.description,
      }),
    ],
  });
}
function io({ direction: n, onClick: e, isFading: t }) {
  const i = n === "prev" ? Sd : Td,
    r = so(),
    s =
      n === "prev"
        ? r.formatMessage({ id: "ajuz05", defaultMessage: "Previous voice" })
        : r.formatMessage({ id: "Dr8wrw", defaultMessage: "Next voice" });
  return F.jsx("button", {
    className: St(
      "absolute top-2 z-50 transition-opacity duration-175",
      n === "prev" ? "-start-4" : "-end-4",
      t ? "opacity-20" : "opacity-100",
    ),
    onClick: e,
    "aria-label": s,
    children: F.jsx(i, {
      className:
        "text-token-text-quaternary hover:text-token-text-secondary h-6 w-6",
    }),
  });
}
export {
  Qf as $,
  ir as A,
  $n as B,
  km as C,
  Sm as D,
  fm as E,
  Sc as F,
  Hp as G,
  Cm as H,
  ym as I,
  Tm as J,
  Pm as K,
  de as L,
  On as M,
  mm as N,
  gm as O,
  jh as R,
  Hh as S,
  _ as T,
  Rm as V,
  Zf as W,
  vm as Y,
  zn as _,
  Id as a,
  P as b,
  V as c,
  Qt as d,
  $a as e,
  Vs as f,
  Em as g,
  mp as h,
  lp as i,
  mo as j,
  Pr as k,
  nr as l,
  wm as m,
  Xp as n,
  Rp as o,
  xp as p,
  Qp as q,
  _r as r,
  Gp as s,
  Ac as t,
  Cp as u,
  $p as v,
  Er as w,
  Pp as x,
  bm as y,
  Ep as z,
};
//# sourceMappingURL=esv8bq6wmes9vj4c.js.map
