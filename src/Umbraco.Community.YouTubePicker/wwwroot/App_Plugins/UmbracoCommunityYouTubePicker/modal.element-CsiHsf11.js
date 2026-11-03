import { LitElement as vt, html as O, css as Ot, property as Be, state as A, customElement as Ct, repeat as At, nothing as q } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as Pt } from "@umbraco-cms/backoffice/element-api";
import { UmbChangeEvent as be } from "@umbraco-cms/backoffice/event";
function $e(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: kt } = Object.prototype, { getPrototypeOf: ge } = Object, te = /* @__PURE__ */ ((e) => (t) => {
  const n = kt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), U = (e) => (e = e.toLowerCase(), (t) => te(t) === e), ne = (e) => (t) => typeof t === e, { isArray: z } = Array, J = ne("undefined");
function Nt(e) {
  return e !== null && !J(e) && e.constructor !== null && !J(e.constructor) && N(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ie = U("ArrayBuffer");
function Ut(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ie(e.buffer), t;
}
const Ft = ne("string"), N = ne("function"), je = ne("number"), re = (e) => e !== null && typeof e == "object", Lt = (e) => e === !0 || e === !1, G = (e) => {
  if (te(e) !== "object")
    return !1;
  const t = ge(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Dt = U("Date"), Bt = U("File"), $t = U("Blob"), It = U("FileList"), jt = (e) => re(e) && N(e.pipe), qt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || N(e.append) && ((t = te(e)) === "formdata" || // detect form-data instance
  t === "object" && N(e.toString) && e.toString() === "[object FormData]"));
}, zt = U("URLSearchParams"), [Mt, Ht, Jt, Vt] = ["ReadableStream", "Request", "Response", "Headers"].map(U), Wt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function V(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), z(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function qe(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const $ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ze = (e) => !J(e) && e !== $;
function ue() {
  const { caseless: e } = ze(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && qe(t, s) || s;
    G(t[o]) && G(r) ? t[o] = ue(t[o], r) : G(r) ? t[o] = ue({}, r) : z(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && V(arguments[r], n);
  return t;
}
const Kt = (e, t, n, { allOwnKeys: r } = {}) => (V(t, (s, o) => {
  n && N(s) ? e[o] = $e(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Xt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Gt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Qt = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && ge(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Yt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Zt = (e) => {
  if (!e) return null;
  if (z(e)) return e;
  let t = e.length;
  if (!je(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, en = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ge(Uint8Array)), tn = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, nn = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, rn = U("HTMLFormElement"), sn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Se = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), on = U("RegExp"), Me = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  V(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, an = (e) => {
  Me(e, (t, n) => {
    if (N(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (N(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ln = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return z(e) ? r(e) : r(String(e).split(t)), n;
}, cn = () => {
}, un = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function dn(e) {
  return !!(e && N(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const fn = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (re(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = z(r) ? [] : {};
        return V(r, (i, l) => {
          const d = n(i, s + 1);
          !J(d) && (o[l] = d);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, hn = U("AsyncFunction"), pn = (e) => e && (re(e) || N(e)) && N(e.then) && N(e.catch), He = ((e, t) => e ? setImmediate : t ? ((n, r) => ($.addEventListener("message", ({ source: s, data: o }) => {
  s === $ && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), $.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  N($.postMessage)
), mn = typeof queueMicrotask < "u" ? queueMicrotask.bind($) : typeof process < "u" && process.nextTick || He, a = {
  isArray: z,
  isArrayBuffer: Ie,
  isBuffer: Nt,
  isFormData: qt,
  isArrayBufferView: Ut,
  isString: Ft,
  isNumber: je,
  isBoolean: Lt,
  isObject: re,
  isPlainObject: G,
  isReadableStream: Mt,
  isRequest: Ht,
  isResponse: Jt,
  isHeaders: Vt,
  isUndefined: J,
  isDate: Dt,
  isFile: Bt,
  isBlob: $t,
  isRegExp: on,
  isFunction: N,
  isStream: jt,
  isURLSearchParams: zt,
  isTypedArray: en,
  isFileList: It,
  forEach: V,
  merge: ue,
  extend: Kt,
  trim: Wt,
  stripBOM: Xt,
  inherits: Gt,
  toFlatObject: Qt,
  kindOf: te,
  kindOfTest: U,
  endsWith: Yt,
  toArray: Zt,
  forEachEntry: tn,
  matchAll: nn,
  isHTMLForm: rn,
  hasOwnProperty: Se,
  hasOwnProp: Se,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Me,
  freezeMethods: an,
  toObjectSet: ln,
  toCamelCase: sn,
  noop: cn,
  toFiniteNumber: un,
  findKey: qe,
  global: $,
  isContextDefined: ze,
  isSpecCompliantForm: dn,
  toJSONObject: fn,
  isAsyncFn: hn,
  isThenable: pn,
  setImmediate: He,
  asap: mn
};
function y(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(y, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Je = y.prototype, Ve = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Ve[e] = { value: e };
});
Object.defineProperties(y, Ve);
Object.defineProperty(Je, "isAxiosError", { value: !0 });
y.from = (e, t, n, r, s, o) => {
  const i = Object.create(Je);
  return a.toFlatObject(e, i, function(d) {
    return d !== Error.prototype;
  }, (l) => l !== "isAxiosError"), y.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const yn = null;
function de(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function We(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function xe(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = We(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function bn(e) {
  return a.isArray(e) && !e.some(de);
}
const gn = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function se(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, f) {
    return !a.isUndefined(f[m]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (a.isDate(p))
      return p.toISOString();
    if (!d && a.isBlob(p))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(p) || a.isTypedArray(p) ? d && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, m, f) {
    let R = p;
    if (p && !f && typeof p == "object") {
      if (a.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (a.isArray(p) && bn(p) || (a.isFileList(p) || a.endsWith(m, "[]")) && (R = a.toArray(p)))
        return m = We(m), R.forEach(function(T, L) {
          !(a.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? xe([m], L, o) : i === null ? m : m + "[]",
            c(T)
          );
        }), !1;
    }
    return de(p) ? !0 : (t.append(xe(f, m, o), c(p)), !1);
  }
  const h = [], b = Object.assign(gn, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: de
  });
  function w(p, m) {
    if (!a.isUndefined(p)) {
      if (h.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      h.push(p), a.forEach(p, function(R, _) {
        (!(a.isUndefined(R) || R === null) && s.call(
          t,
          R,
          a.isString(_) ? _.trim() : _,
          m,
          b
        )) === !0 && w(R, m ? m.concat(_) : [_]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function Te(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function we(e, t) {
  this._pairs = [], e && se(e, this, t);
}
const Ke = we.prototype;
Ke.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ke.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Te);
  } : Te;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function wn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Xe(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || wn;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new we(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class ve {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ge = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Rn = typeof URLSearchParams < "u" ? URLSearchParams : we, En = typeof FormData < "u" ? FormData : null, _n = typeof Blob < "u" ? Blob : null, Sn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Rn,
    FormData: En,
    Blob: _n
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Re = typeof window < "u" && typeof document < "u", fe = typeof navigator == "object" && navigator || void 0, xn = Re && (!fe || ["ReactNative", "NativeScript", "NS"].indexOf(fe.product) < 0), Tn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", vn = Re && window.location.href || "http://localhost", On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Re,
  hasStandardBrowserEnv: xn,
  hasStandardBrowserWebWorkerEnv: Tn,
  navigator: fe,
  origin: vn
}, Symbol.toStringTag, { value: "Module" })), C = {
  ...On,
  ...Sn
};
function Cn(e, t) {
  return se(e, new C.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return C.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function An(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Pn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Qe(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), d = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, d ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Pn(s[i])), !l);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(An(r), s, n, 0);
    }), n;
  }
  return null;
}
function kn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const W = {
  transitional: Ge,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(Qe(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Cn(t, this.formSerializer).toString();
      if ((l = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return se(
          l ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), kn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || W.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? y.from(l, y.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: C.classes.FormData,
    Blob: C.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  W.headers[e] = {};
});
const Nn = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Un = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Nn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Oe = Symbol("internals");
function H(e) {
  return e && String(e).trim().toLowerCase();
}
function Q(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(Q) : String(e);
}
function Fn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Ln = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ae(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Dn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Bn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let k = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, d, c) {
      const u = H(d);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(s, u);
      (!h || s[h] === void 0 || c === !0 || c === void 0 && s[h] !== !1) && (s[h || d] = Q(l));
    }
    const i = (l, d) => a.forEach(l, (c, u) => o(c, u, d));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !Ln(t))
      i(Un(t), n);
    else if (a.isHeaders(t))
      for (const [l, d] of t.entries())
        o(d, l, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = H(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Fn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = H(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ae(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = H(i), i) {
        const l = a.findKey(r, i);
        l && (!n || ae(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ae(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = Q(s), delete n[o];
        return;
      }
      const l = t ? Dn(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Q(s), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Oe] = this[Oe] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const l = H(i);
      r[l] || (Bn(s, i), r[l] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
k.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(k.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(k);
function le(e, t) {
  const n = this || W, r = t || n, s = k.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Ye(e) {
  return !!(e && e.__CANCEL__);
}
function M(e, t, n) {
  y.call(this, e ?? "canceled", y.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(M, y, {
  __CANCEL__: !0
});
function Ze(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new y(
    "Request failed with status code " + n.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function $n(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function In(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const c = Date.now(), u = r[o];
    i || (i = c), n[s] = d, r[s] = c;
    let h = o, b = 0;
    for (; h !== s; )
      b += n[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), c - i < t)
      return;
    const w = u && c - u;
    return w ? Math.round(b * 1e3 / w) : void 0;
  };
}
function jn(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (c, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), e.apply(null, c);
  };
  return [(...c) => {
    const u = Date.now(), h = u - n;
    h >= r ? i(c, u) : (s = c, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - h)));
  }, () => s && i(s)];
}
const Z = (e, t, n = 3) => {
  let r = 0;
  const s = In(50, 250);
  return jn((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, d = i - r, c = s(d), u = i <= l;
    r = i;
    const h = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: d,
      rate: c || void 0,
      estimated: c && l && u ? (l - i) / c : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, Ce = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Ae = (e) => (...t) => a.asap(() => e(...t)), qn = C.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, C.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(C.origin),
  C.navigator && /(msie|trident)/i.test(C.navigator.userAgent)
) : () => !0, zn = C.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Mn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Hn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function et(e, t, n) {
  let r = !Mn(t);
  return e && r || n == !1 ? Hn(e, t) : t;
}
const Pe = (e) => e instanceof k ? { ...e } : e;
function j(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, h, b) {
    return a.isPlainObject(c) && a.isPlainObject(u) ? a.merge.call({ caseless: b }, c, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(c, u, h, b) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(c))
        return r(void 0, c, h, b);
    } else return r(c, u, h, b);
  }
  function o(c, u) {
    if (!a.isUndefined(u))
      return r(void 0, u);
  }
  function i(c, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, u);
  }
  function l(c, u, h) {
    if (h in t)
      return r(c, u);
    if (h in e)
      return r(void 0, c);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (c, u, h) => s(Pe(c), Pe(u), h, !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const h = d[u] || s, b = h(e[u], t[u], u);
    a.isUndefined(b) && h !== l || (n[u] = b);
  }), n;
}
const tt = (e) => {
  const t = j({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = k.from(i), t.url = Xe(et(t.baseURL, t.url), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let d;
  if (a.isFormData(n)) {
    if (C.hasStandardBrowserEnv || C.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((d = i.getContentType()) !== !1) {
      const [c, ...u] = d ? d.split(";").map((h) => h.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (C.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && qn(t.url))) {
    const c = s && o && zn.read(o);
    c && i.set(s, c);
  }
  return t;
}, Jn = typeof XMLHttpRequest < "u", Vn = Jn && function(e) {
  return new Promise(function(n, r) {
    const s = tt(e);
    let o = s.data;
    const i = k.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: d, onDownloadProgress: c } = s, u, h, b, w, p;
    function m() {
      w && w(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let f = new XMLHttpRequest();
    f.open(s.method.toUpperCase(), s.url, !0), f.timeout = s.timeout;
    function R() {
      if (!f)
        return;
      const T = k.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), P = {
        data: !l || l === "text" || l === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: T,
        config: e,
        request: f
      };
      Ze(function(B) {
        n(B), m();
      }, function(B) {
        r(B), m();
      }, P), f = null;
    }
    "onloadend" in f ? f.onloadend = R : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, f.onabort = function() {
      f && (r(new y("Request aborted", y.ECONNABORTED, e, f)), f = null);
    }, f.onerror = function() {
      r(new y("Network Error", y.ERR_NETWORK, e, f)), f = null;
    }, f.ontimeout = function() {
      let L = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const P = s.transitional || Ge;
      s.timeoutErrorMessage && (L = s.timeoutErrorMessage), r(new y(
        L,
        P.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        f
      )), f = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in f && a.forEach(i.toJSON(), function(L, P) {
      f.setRequestHeader(P, L);
    }), a.isUndefined(s.withCredentials) || (f.withCredentials = !!s.withCredentials), l && l !== "json" && (f.responseType = s.responseType), c && ([b, p] = Z(c, !0), f.addEventListener("progress", b)), d && f.upload && ([h, w] = Z(d), f.upload.addEventListener("progress", h), f.upload.addEventListener("loadend", w)), (s.cancelToken || s.signal) && (u = (T) => {
      f && (r(!T || T.type ? new M(null, e, f) : T), f.abort(), f = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const _ = $n(s.url);
    if (_ && C.protocols.indexOf(_) === -1) {
      r(new y("Unsupported protocol " + _ + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    f.send(o || null);
  });
}, Wn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(c) {
      if (!s) {
        s = !0, l();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof y ? u : new M(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", o));
    const { signal: d } = r;
    return d.unsubscribe = () => a.asap(l), d;
  }
}, Kn = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Xn = async function* (e, t) {
  for await (const n of Gn(e))
    yield* Kn(n, t);
}, Gn = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, ke = (e, t, n, r) => {
  const s = Xn(e, t);
  let o = 0, i, l = (d) => {
    i || (i = !0, r && r(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: c, value: u } = await s.next();
        if (c) {
          l(), d.close();
          return;
        }
        let h = u.byteLength;
        if (n) {
          let b = o += h;
          n(b);
        }
        d.enqueue(new Uint8Array(u));
      } catch (c) {
        throw l(c), c;
      }
    },
    cancel(d) {
      return l(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, oe = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", nt = oe && typeof ReadableStream == "function", Qn = oe && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), rt = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Yn = nt && rt(() => {
  let e = !1;
  const t = new Request(C.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Ne = 64 * 1024, he = nt && rt(() => a.isReadableStream(new Response("").body)), ee = {
  stream: he && ((e) => e.body)
};
oe && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ee[t] && (ee[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new y(`Response type '${t}' is not supported`, y.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Zn = async (e) => {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (await new Request(C.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (await Qn(e)).byteLength;
}, er = async (e, t) => {
  const n = a.toFiniteNumber(e.getContentLength());
  return n ?? Zn(t);
}, tr = oe && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: d,
    responseType: c,
    headers: u,
    withCredentials: h = "same-origin",
    fetchOptions: b
  } = tt(e);
  c = c ? (c + "").toLowerCase() : "text";
  let w = Wn([s, o && o.toAbortSignal()], i), p;
  const m = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let f;
  try {
    if (d && Yn && n !== "get" && n !== "head" && (f = await er(u, r)) !== 0) {
      let P = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), D;
      if (a.isFormData(r) && (D = P.headers.get("content-type")) && u.setContentType(D), P.body) {
        const [B, X] = Ce(
          f,
          Z(Ae(d))
        );
        r = ke(P.body, Ne, B, X);
      }
    }
    a.isString(h) || (h = h ? "include" : "omit");
    const R = "credentials" in Request.prototype;
    p = new Request(t, {
      ...b,
      signal: w,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: R ? h : void 0
    });
    let _ = await fetch(p);
    const T = he && (c === "stream" || c === "response");
    if (he && (l || T && m)) {
      const P = {};
      ["status", "statusText", "headers"].forEach((_e) => {
        P[_e] = _[_e];
      });
      const D = a.toFiniteNumber(_.headers.get("content-length")), [B, X] = l && Ce(
        D,
        Z(Ae(l), !0)
      ) || [];
      _ = new Response(
        ke(_.body, Ne, B, () => {
          X && X(), m && m();
        }),
        P
      );
    }
    c = c || "text";
    let L = await ee[a.findKey(ee, c) || "text"](_, e);
    return !T && m && m(), await new Promise((P, D) => {
      Ze(P, D, {
        data: L,
        headers: k.from(_.headers),
        status: _.status,
        statusText: _.statusText,
        config: e,
        request: p
      });
    });
  } catch (R) {
    throw m && m(), R && R.name === "TypeError" && /fetch/i.test(R.message) ? Object.assign(
      new y("Network Error", y.ERR_NETWORK, e, p),
      {
        cause: R.cause || R
      }
    ) : y.from(R, R && R.code, e, p);
  }
}), pe = {
  http: yn,
  xhr: Vn,
  fetch: tr
};
a.forEach(pe, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ue = (e) => `- ${e}`, nr = (e) => a.isFunction(e) || e === null || e === !1, st = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !nr(n) && (r = pe[(i = String(n)).toLowerCase()], r === void 0))
        throw new y(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([l, d]) => `adapter ${l} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Ue).join(`
`) : " " + Ue(o[0]) : "as no adapter specified";
      throw new y(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: pe
};
function ce(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new M(null, e);
}
function Fe(e) {
  return ce(e), e.headers = k.from(e.headers), e.data = le.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), st.getAdapter(e.adapter || W.adapter)(e).then(function(r) {
    return ce(e), r.data = le.call(
      e,
      e.transformResponse,
      r
    ), r.headers = k.from(r.headers), r;
  }, function(r) {
    return Ye(r) || (ce(e), r && r.response && (r.response.data = le.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = k.from(r.response.headers))), Promise.reject(r);
  });
}
const ot = "1.8.2", ie = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ie[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Le = {};
ie.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + ot + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new y(
        s(i, " has been removed" + (n ? " in " + n : "")),
        y.ERR_DEPRECATED
      );
    return n && !Le[i] && (Le[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
ie.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function rr(e, t, n) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const l = e[o], d = l === void 0 || i(l, o, e);
      if (d !== !0)
        throw new y("option " + o + " must be " + d, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new y("Unknown option " + o, y.ERR_BAD_OPTION);
  }
}
const Y = {
  assertOptions: rr,
  validators: ie
}, F = Y.validators;
let I = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ve(),
      response: new ve()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = j(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Y.assertOptions(r, {
      silentJSONParsing: F.transitional(F.boolean),
      forcedJSONParsing: F.transitional(F.boolean),
      clarifyTimeoutError: F.transitional(F.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Y.assertOptions(s, {
      encode: F.function,
      serialize: F.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Y.assertOptions(n, {
      baseUrl: F.spelling("baseURL"),
      withXsrfToken: F.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = k.concat(i, o);
    const l = [];
    let d = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (d = d && m.synchronous, l.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let u, h = 0, b;
    if (!d) {
      const p = [Fe.bind(this), void 0];
      for (p.unshift.apply(p, l), p.push.apply(p, c), b = p.length, u = Promise.resolve(n); h < b; )
        u = u.then(p[h++], p[h++]);
      return u;
    }
    b = l.length;
    let w = n;
    for (h = 0; h < b; ) {
      const p = l[h++], m = l[h++];
      try {
        w = p(w);
      } catch (f) {
        m.call(this, f);
        break;
      }
    }
    try {
      u = Fe.call(this, w);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, b = c.length; h < b; )
      u = u.then(c[h++], c[h++]);
    return u;
  }
  getUri(t) {
    t = j(this.defaults, t);
    const n = et(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Xe(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  I.prototype[t] = function(n, r) {
    return this.request(j(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request(j(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  I.prototype[t] = n(), I.prototype[t + "Form"] = n(!0);
});
let sr = class it {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((l) => {
        r.subscribe(l), o = l;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, l) {
      r.reason || (r.reason = new M(o, i, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new it(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function or(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function ir(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const me = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(me).forEach(([e, t]) => {
  me[t] = e;
});
function at(e) {
  const t = new I(e), n = $e(I.prototype.request, t);
  return a.extend(n, I.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return at(j(e, s));
  }, n;
}
const g = at(W);
g.Axios = I;
g.CanceledError = M;
g.CancelToken = sr;
g.isCancel = Ye;
g.VERSION = ot;
g.toFormData = se;
g.AxiosError = y;
g.Cancel = g.CanceledError;
g.all = function(t) {
  return Promise.all(t);
};
g.spread = or;
g.isAxiosError = ir;
g.mergeConfig = j;
g.AxiosHeaders = k;
g.formToJSON = (e) => Qe(a.isHTMLForm(e) ? new FormData(e) : e);
g.getAdapter = st.getAdapter;
g.HttpStatusCode = me;
g.default = g;
const {
  Axios: pr,
  AxiosError: mr,
  CanceledError: yr,
  isCancel: br,
  CancelToken: gr,
  VERSION: wr,
  all: Rr,
  Cancel: Er,
  isAxiosError: _r,
  spread: Sr,
  toFormData: xr,
  AxiosHeaders: Tr,
  HttpStatusCode: vr,
  formToJSON: Or,
  getAdapter: Cr,
  mergeConfig: Ar
} = g;
class lt {
  static Search(t, n, r, s, o, i) {
    let l = t !== void 0 ? "&key=" + t : "", d = r !== null && r !== "" && r !== void 0 ? "&channelId=" + r : "", c = "&type=" + n, u = "&maxResults=" + (s !== void 0 ? s : 50), h = i !== void 0 ? "&pageToken=" + i : "", b = o != null && o !== "" ? "&q=" + encodeURI(o) : "";
    return new Promise((w, p) => {
      let m = "https://www.googleapis.com/youtube/v3/search?part=snippet" + l + d + c + u + h + b;
      console.log(m), g.get(m).then(function(f) {
        return w(f.data), f;
      }).catch(function(f) {
        return p(f), console.log(f), null;
      });
    });
  }
  static GetChannel(t, n) {
    let r = t !== void 0 ? "&key=" + t : "", s = "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=" + encodeURIComponent(n) + r;
    return g.get(s).then((o) => {
      var i;
      return ((i = o.data.items) == null ? void 0 : i[0]) ?? null;
    });
  }
}
var ar = Object.defineProperty, lr = Object.getOwnPropertyDescriptor, ct = (e) => {
  throw TypeError(e);
}, x = (e, t, n, r) => {
  for (var s = r > 1 ? void 0 : r ? lr(t, n) : t, o = e.length - 1, i; o >= 0; o--)
    (i = e[o]) && (s = (r ? i(t, n, s) : i(s)) || s);
  return r && s && ar(t, n, s), s;
}, ut = (e, t, n) => t.has(e) || ct("Cannot " + n), Ee = (e, t, n) => (ut(e, t, "read from private field"), n ? n.call(e) : t.get(e)), De = (e, t, n) => t.has(e) ? ct("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), v = (e, t, n) => (ut(e, t, "access private method"), n), S, dt, ft, ht, pt, mt, yt, bt, gt, K, wt, Rt, Et, _t, St, ye, xt, Tt;
let E = class extends Pt(vt) {
  constructor() {
    super(), De(this, S), this._searchQuery = "", this._searchType = "video", this._searchResults = null, this._searching = !1, this._hasResults = !1, this._perPage = 50, this._loadingChannel = !1, De(this, K, async () => {
      var t, n, r, s, o, i, l;
      this._searching = !0, this._apiKey = (t = this.modalContext) == null ? void 0 : t.data.apiKey, this._channelId = ((n = this.modalContext) == null ? void 0 : n.data.channelId) || "", this._perPage = ((r = this.modalContext) == null ? void 0 : r.data.perPage) || 25;
      let e = await lt.Search(this._apiKey, this._searchType, this._channelId, this._perPage, this._searchQuery, this._pageToken).then(function(d) {
        return d;
      });
      this._searchResults = e, this._searchResults !== null && (this._hasResults = !0, this._totalResults = ((o = (s = this._searchResults) == null ? void 0 : s.pageInfo) == null ? void 0 : o.totalResults) || 0, this._nextPageToken = (i = this._searchResults) == null ? void 0 : i.nextPageToken, this._previousPageToken = (l = this._searchResults) == null ? void 0 : l.previousPageToken), this._searching = !1;
    }), this._searchTypes = [
      { name: "Video", value: "video", selected: !0 },
      { name: "Playlist", value: "playlist" }
    ];
  }
  firstUpdated() {
    v(this, S, dt).call(this).then();
  }
  render() {
    var e;
    return O`
       <uui-modal-container>
          <uui-modal-sidebar>
            <umb-body-layout headline=${(e = this.modalContext) == null ? void 0 : e.data.headline} headline-variant="h5">
            ${v(this, S, Tt).call(this)}
				    ${v(this, S, St).call(this)}
				    <div slot="actions">
					    <uui-button
                label="Close"
                @click=${this._handleCancel}></uui-button>
					    <uui-button
						    label="Choose"
						    look="primary"
						    color="positive"
                @click=${this._handleSubmit}></uui-button>
				    </div>
			      </umb-body-layout>
          </uui-modal-sidebar>
        </uui-modal-container>
    `;
  }
  _handleCancel() {
    var e;
    (e = this.modalContext) == null || e.reject();
  }
  _handleSubmit() {
    var e, t;
    (e = this.modalContext) == null || e.updateValue({ value: this._selectedItem }), (t = this.modalContext) == null || t.submit();
  }
};
S = /* @__PURE__ */ new WeakSet();
dt = async function() {
  var t, n;
  const e = (t = this.modalContext) == null ? void 0 : t.data.channelId;
  if (e) {
    this._loadingChannel = !0;
    try {
      this._channel = await lt.GetChannel((n = this.modalContext) == null ? void 0 : n.data.apiKey, e) ?? void 0;
    } catch (r) {
      console.log(r), this._channel = void 0;
    }
    this._loadingChannel = !1;
  }
};
ft = function(e) {
  this._searchQuery = e.target.value, v(this, S, ht).call(this);
};
ht = function() {
  this.dispatchEvent(new be());
};
pt = function(e) {
  this._selectedItem = e;
};
mt = function() {
  this._selectedItem = void 0;
};
yt = function(e) {
  this._searchType = e.target.value, e.stopPropagation();
};
bt = function() {
  this._pageToken = this._previousPageToken, this.dispatchEvent(new be()), Ee(this, K).call(this).then();
};
gt = function() {
  this._pageToken = this._nextPageToken, this.dispatchEvent(new be()), Ee(this, K).call(this).then();
};
K = /* @__PURE__ */ new WeakMap();
wt = function() {
  if (this._searchResults !== null && this._searchResults.items !== null)
    return O`
          <div id="media-grid">
						${At(
      this._searchResults.items,
      (e) => e.id.videoId,
      (e) => v(this, S, Et).call(this, e)
    )}
					</div>

          <div style="resize: horizontal; overflow: hidden; padding: 6px;">
            <p>Total results: ${this._totalResults}</p>
            <uui-button
              ?disabled=${this._previousPageToken == null}
              class="element"
              color="positive"
              look="primary"
              label="Previous"
              @click=${v(this, S, bt)}
            >Prev</uui-button>
            <uui-button
              ?disabled=${this._nextPageToken == null}
              class="element"
              color="positive"
              look="primary"
              label="Next"
              @click=${v(this, S, gt)}
            >Next</uui-button>
          </div>
		      `;
};
Rt = function(e) {
  return new DOMParser().parseFromString(e, "text/html").documentElement.textContent ?? e;
};
Et = function(e) {
  var r, s, o, i;
  const t = v(this, S, Rt).call(this, e.snippet.title), n = this._selectedItem === e;
  return O`
          <button
            type="button"
            class="result-card ${n ? "selected" : ""}"
            title=${t}
            aria-pressed=${n}
            data-mark="${e.kind}:${e.id.videoId}"
            @click=${() => n ? v(this, S, mt).call(this) : v(this, S, pt).call(this, e)}>
            <img
              src="${((s = (r = e.snippet.thumbnails) == null ? void 0 : r.medium) == null ? void 0 : s.url) ?? ((i = (o = e.snippet.thumbnails) == null ? void 0 : o.default) == null ? void 0 : i.url) ?? ""}"
              alt=""
              loading="lazy" />
            <span class="result-title">${t}</span>
          </button>
      `;
};
_t = function() {
  return O`
            <div class="container">
              <p>No results found.</p>
            </div>
      `;
};
St = function() {
  return O`
        ${this._hasResults ? v(this, S, wt).call(this) : v(this, S, _t).call(this)} `;
};
ye = function(e) {
  return new Intl.NumberFormat(void 0, { notation: "compact" }).format(Number(e));
};
xt = function() {
  var s, o, i;
  const e = (s = this.modalContext) == null ? void 0 : s.data.channelId;
  if (!e) return q;
  if (this._loadingChannel)
    return O`
          <div id="channel-notice">
            <uui-loader-circle></uui-loader-circle>
            <span>Loading channel details...</span>
          </div>
      `;
  const t = this._channel;
  if (!t)
    return O`
          <div id="channel-notice">
            <div class="channel-details">
              <strong>Results are limited to a single channel</strong>
              <span class="channel-meta">Channel ID: ${e}</span>
            </div>
          </div>
      `;
  const n = t.statistics, r = (i = (o = t.snippet.thumbnails) == null ? void 0 : o.default) == null ? void 0 : i.url;
  return O`
        <div id="channel-notice">
          ${r ? O`<img class="channel-avatar" src=${r} alt="" />` : q}
          <div class="channel-details">
            <span class="channel-label">Results are limited to this channel</span>
            <a
              class="channel-title"
              href="https://www.youtube.com/channel/${t.id}"
              target="_blank"
              rel="noopener noreferrer">${t.snippet.title}</a>
            <span class="channel-meta">
              ${t.snippet.customUrl ? O`${t.snippet.customUrl} · ` : q}
              ${n && !n.hiddenSubscriberCount ? O`${v(this, S, ye).call(this, n.subscriberCount)} subscribers · ` : q}
              ${n ? O`${v(this, S, ye).call(this, n.videoCount)} videos` : q}
            </span>
            ${t.snippet.description ? O`<p class="channel-description">${t.snippet.description}</p>` : q}
          </div>
        </div>
    `;
};
Tt = function() {
  return O`
        <div id="toolbar">
          ${v(this, S, xt).call(this)}
          <div id="search">
            <uui-input
              label="Search"
              placeholder="keyword search term..."
              .value=${this._searchQuery}
              @input=${v(this, S, ft)}>
              <div slot="prepend">
                ${this._searching ? O`<uui-loader-circle id="searching-indicator"></uui-loader-circle>` : O`<uui-icon name="search"></uui-icon>`}
              </div>
            </uui-input>
          </div>
          <div id="type">
            <uui-select
              label="Option"
              placeholder="Select an option"
              .options="${this._searchTypes}"
              @change=${v(this, S, yt)}></uui-select>
          </div>
          <div id="type">
            <uui-button
              label="Search"
              look="primary"
              color="positive"

              ${this._searching ? "disabled='' state='waiting' " : ""}

              @click=${Ee(this, K)}
              ></uui-button>
          </div>
        </div>
      `;
};
E.styles = [
  Ot`
			#toolbar {
				display: flex;
				flex-wrap: wrap;
				gap: var(--uui-size-6);
				align-items: flex-start;
				margin-bottom: var(--uui-size-3);
			}

			#channel-notice {
				flex-basis: 100%;
				display: flex;
				align-items: center;
				gap: var(--uui-size-space-4);
				padding: var(--uui-size-space-4) var(--uui-size-space-5);
				background: var(--uui-color-surface-alt);
				border: 1px solid var(--uui-color-border);
				border-left: 4px solid var(--uui-color-selected);
				border-radius: var(--uui-border-radius);
			}

			#channel-notice .channel-avatar {
				flex-shrink: 0;
				width: 48px;
				height: 48px;
				border-radius: 50%;
				background-image: none;
			}

			#channel-notice .channel-details {
				display: flex;
				flex-direction: column;
				min-width: 0;
			}

			#channel-notice .channel-label,
			#channel-notice .channel-meta {
				font-size: var(--uui-type-small-size);
				color: var(--uui-color-text-alt);
			}

			#channel-notice .channel-title {
				font-weight: 700;
				color: var(--uui-color-interactive);
				text-decoration: none;
			}

			#channel-notice .channel-title:hover {
				color: var(--uui-color-interactive-emphasis);
				text-decoration: underline;
			}

			#channel-notice .channel-description {
				margin: var(--uui-size-space-1) 0 0;
				font-size: var(--uui-type-small-size);
				display: -webkit-box;
				-webkit-line-clamp: 4;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
			#search {
				flex: 1;
			}

			#search uui-input {
				width: 100%;
				margin-bottom: var(--uui-size-3);
			}

			#searching-indicator {
				margin-left: 7px;
				margin-top: 4px;
			}

			#media-grid {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
				align-items: start;
				gap: var(--uui-size-space-5);
				padding-bottom: 5px; /** The modal is a bit jumpy due to the img card focus/hover border. This fixes the issue. */
			}

			.result-card {
				display: flex;
				flex-direction: column;
				width: 100%;
				padding: 0;
				font: inherit;
				text-align: left;
				color: var(--uui-color-interactive);
				background: var(--uui-color-surface);
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
				overflow: hidden;
				cursor: pointer;
			}

			.result-card:hover {
				color: var(--uui-color-interactive-emphasis);
				border-color: var(--uui-color-border-emphasis);
			}

			.result-card:hover .result-title {
				text-decoration: underline;
			}

			.result-card:focus-visible {
				outline: 2px solid var(--uui-color-focus);
				outline-offset: 2px;
			}

			.result-card.selected {
				border-color: var(--uui-color-selected);
				box-shadow: 0 0 0 2px var(--uui-color-selected);
			}

			.result-card img {
				display: block;
				width: 100%;
				aspect-ratio: 16 / 9;
				object-fit: cover;
			}

			.result-title {
				padding: var(--uui-size-space-3) var(--uui-size-space-4);
				font-weight: 700;
				line-height: 1.3;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}

			/** TODO: Remove this fix when UUI gets upgrade to 1.3 */
			umb-imaging-thumbnail {
				pointer-events: none;
			}

			umb-icon {
				font-size: var(--uui-size-8);
			}

			img {
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}

			#actions {
				max-width: 100%;
			}

			.not-allowed {
				cursor: not-allowed;
				opacity: 0.5;
			}

			uui-pagination {
				display: block;
				margin-top: var(--uui-size-layout-1);
			}
		`
];
x([
  Be({ attribute: !1 })
], E.prototype, "modalContext", 2);
x([
  Be({ attribute: !1 })
], E.prototype, "data", 2);
x([
  A()
], E.prototype, "_searchQuery", 2);
x([
  A()
], E.prototype, "_searchType", 2);
x([
  A()
], E.prototype, "_searchResults", 2);
x([
  A()
], E.prototype, "_searching", 2);
x([
  A()
], E.prototype, "_hasResults", 2);
x([
  A()
], E.prototype, "_searchTypes", 2);
x([
  A()
], E.prototype, "_apiKey", 2);
x([
  A()
], E.prototype, "_channelId", 2);
x([
  A()
], E.prototype, "_perPage", 2);
x([
  A()
], E.prototype, "_selectedItem", 2);
x([
  A()
], E.prototype, "_totalResults", 2);
x([
  A()
], E.prototype, "_previousPageToken", 2);
x([
  A()
], E.prototype, "_nextPageToken", 2);
x([
  A()
], E.prototype, "_pageToken", 2);
x([
  A()
], E.prototype, "_channel", 2);
x([
  A()
], E.prototype, "_loadingChannel", 2);
E = x([
  Ct("youtube-picker-modal")
], E);
export {
  E as default
};
//# sourceMappingURL=modal.element-CsiHsf11.js.map
