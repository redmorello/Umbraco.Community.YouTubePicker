import { LitElement as Et, html as D, css as Rt, property as Le, state as P, customElement as St, repeat as _t } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as Tt } from "@umbraco-cms/backoffice/element-api";
import { UmbChangeEvent as me } from "@umbraco-cms/backoffice/event";
function De(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ot } = Object.prototype, { getPrototypeOf: ye } = Object, ee = /* @__PURE__ */ ((e) => (t) => {
  const n = Ot.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), v = (e) => (e = e.toLowerCase(), (t) => ee(t) === e), te = (e) => (t) => typeof t === e, { isArray: I } = Array, z = te("undefined");
function xt(e) {
  return e !== null && !z(e) && e.constructor !== null && !z(e.constructor) && N(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Be = v("ArrayBuffer");
function At(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Be(e.buffer), t;
}
const Ct = te("string"), N = te("function"), je = te("number"), ne = (e) => e !== null && typeof e == "object", Pt = (e) => e === !0 || e === !1, X = (e) => {
  if (ee(e) !== "object")
    return !1;
  const t = ye(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Nt = v("Date"), kt = v("File"), vt = v("Blob"), Ut = v("FileList"), Ft = (e) => ne(e) && N(e.pipe), Lt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || N(e.append) && ((t = ee(e)) === "formdata" || // detect form-data instance
  t === "object" && N(e.toString) && e.toString() === "[object FormData]"));
}, Dt = v("URLSearchParams"), [Bt, jt, qt, $t] = ["ReadableStream", "Request", "Response", "Headers"].map(v), It = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function J(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), I(e))
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
const j = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, $e = (e) => !z(e) && e !== j;
function ce() {
  const { caseless: e } = $e(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && qe(t, s) || s;
    X(t[o]) && X(r) ? t[o] = ce(t[o], r) : X(r) ? t[o] = ce({}, r) : I(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && J(arguments[r], n);
  return t;
}
const Mt = (e, t, n, { allOwnKeys: r } = {}) => (J(t, (s, o) => {
  n && N(s) ? e[o] = De(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Ht = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), zt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Jt = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && ye(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Vt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Wt = (e) => {
  if (!e) return null;
  if (I(e)) return e;
  let t = e.length;
  if (!je(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Kt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ye(Uint8Array)), Xt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Qt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Gt = v("HTMLFormElement"), Yt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Re = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Zt = v("RegExp"), Ie = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  J(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, en = (e) => {
  Ie(e, (t, n) => {
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
}, tn = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return I(e) ? r(e) : r(String(e).split(t)), n;
}, nn = () => {
}, rn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function sn(e) {
  return !!(e && N(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const on = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (ne(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = I(r) ? [] : {};
        return J(r, (i, l) => {
          const f = n(i, s + 1);
          !z(f) && (o[l] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, an = v("AsyncFunction"), ln = (e) => e && (ne(e) || N(e)) && N(e.then) && N(e.catch), Me = ((e, t) => e ? setImmediate : t ? ((n, r) => (j.addEventListener("message", ({ source: s, data: o }) => {
  s === j && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), j.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  N(j.postMessage)
), cn = typeof queueMicrotask < "u" ? queueMicrotask.bind(j) : typeof process < "u" && process.nextTick || Me, a = {
  isArray: I,
  isArrayBuffer: Be,
  isBuffer: xt,
  isFormData: Lt,
  isArrayBufferView: At,
  isString: Ct,
  isNumber: je,
  isBoolean: Pt,
  isObject: ne,
  isPlainObject: X,
  isReadableStream: Bt,
  isRequest: jt,
  isResponse: qt,
  isHeaders: $t,
  isUndefined: z,
  isDate: Nt,
  isFile: kt,
  isBlob: vt,
  isRegExp: Zt,
  isFunction: N,
  isStream: Ft,
  isURLSearchParams: Dt,
  isTypedArray: Kt,
  isFileList: Ut,
  forEach: J,
  merge: ce,
  extend: Mt,
  trim: It,
  stripBOM: Ht,
  inherits: zt,
  toFlatObject: Jt,
  kindOf: ee,
  kindOfTest: v,
  endsWith: Vt,
  toArray: Wt,
  forEachEntry: Xt,
  matchAll: Qt,
  isHTMLForm: Gt,
  hasOwnProperty: Re,
  hasOwnProp: Re,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ie,
  freezeMethods: en,
  toObjectSet: tn,
  toCamelCase: Yt,
  noop: nn,
  toFiniteNumber: rn,
  findKey: qe,
  global: j,
  isContextDefined: $e,
  isSpecCompliantForm: sn,
  toJSONObject: on,
  isAsyncFn: an,
  isThenable: ln,
  setImmediate: Me,
  asap: cn
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
const He = y.prototype, ze = {};
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
  ze[e] = { value: e };
});
Object.defineProperties(y, ze);
Object.defineProperty(He, "isAxiosError", { value: !0 });
y.from = (e, t, n, r, s, o) => {
  const i = Object.create(He);
  return a.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (l) => l !== "isAxiosError"), y.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const un = null;
function ue(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Je(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Se(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Je(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function fn(e) {
  return a.isArray(e) && !e.some(ue);
}
const dn = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function re(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, d) {
    return !a.isUndefined(d[m]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (a.isDate(p))
      return p.toISOString();
    if (!f && a.isBlob(p))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(p) || a.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, m, d) {
    let w = p;
    if (p && !d && typeof p == "object") {
      if (a.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (a.isArray(p) && fn(p) || (a.isFileList(p) || a.endsWith(m, "[]")) && (w = a.toArray(p)))
        return m = Je(m), w.forEach(function(_, F) {
          !(a.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Se([m], F, o) : i === null ? m : m + "[]",
            c(_)
          );
        }), !1;
    }
    return ue(p) ? !0 : (t.append(Se(d, m, o), c(p)), !1);
  }
  const h = [], b = Object.assign(dn, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: ue
  });
  function g(p, m) {
    if (!a.isUndefined(p)) {
      if (h.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      h.push(p), a.forEach(p, function(w, R) {
        (!(a.isUndefined(w) || w === null) && s.call(
          t,
          w,
          a.isString(R) ? R.trim() : R,
          m,
          b
        )) === !0 && g(w, m ? m.concat(R) : [R]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function _e(e) {
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
function be(e, t) {
  this._pairs = [], e && re(e, this, t);
}
const Ve = be.prototype;
Ve.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ve.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, _e);
  } : _e;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function hn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function We(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || hn;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new be(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Te {
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
const Ke = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, pn = typeof URLSearchParams < "u" ? URLSearchParams : be, mn = typeof FormData < "u" ? FormData : null, yn = typeof Blob < "u" ? Blob : null, bn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: pn,
    FormData: mn,
    Blob: yn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ge = typeof window < "u" && typeof document < "u", fe = typeof navigator == "object" && navigator || void 0, gn = ge && (!fe || ["ReactNative", "NativeScript", "NS"].indexOf(fe.product) < 0), wn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", En = ge && window.location.href || "http://localhost", Rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ge,
  hasStandardBrowserEnv: gn,
  hasStandardBrowserWebWorkerEnv: wn,
  navigator: fe,
  origin: En
}, Symbol.toStringTag, { value: "Module" })), O = {
  ...Rn,
  ...bn
};
function Sn(e, t) {
  return re(e, new O.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return O.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function _n(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Tn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Xe(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), f = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, f ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Tn(s[i])), !l);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(_n(r), s, n, 0);
    }), n;
  }
  return null;
}
function On(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const V = {
  transitional: Ke,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(Xe(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Sn(t, this.formSerializer).toString();
      if ((l = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return re(
          l ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), On(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || V.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
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
    FormData: O.classes.FormData,
    Blob: O.classes.Blob
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
  V.headers[e] = {};
});
const xn = a.toObjectSet([
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
]), An = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && xn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Oe = Symbol("internals");
function H(e) {
  return e && String(e).trim().toLowerCase();
}
function Q(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(Q) : String(e);
}
function Cn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Pn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ie(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Nn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function kn(e, t) {
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
let A = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, f, c) {
      const u = H(f);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(s, u);
      (!h || s[h] === void 0 || c === !0 || c === void 0 && s[h] !== !1) && (s[h || f] = Q(l));
    }
    const i = (l, f) => a.forEach(l, (c, u) => o(c, u, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !Pn(t))
      i(An(t), n);
    else if (a.isHeaders(t))
      for (const [l, f] of t.entries())
        o(f, l, r);
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
          return Cn(s);
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
      return !!(r && this[r] !== void 0 && (!n || ie(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = H(i), i) {
        const l = a.findKey(r, i);
        l && (!n || ie(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ie(this, this[o], o, t, !0)) && (delete this[o], s = !0);
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
      const l = t ? Nn(o) : String(o).trim();
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
      r[l] || (kn(s, i), r[l] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
A.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(A.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(A);
function ae(e, t) {
  const n = this || V, r = t || n, s = A.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Qe(e) {
  return !!(e && e.__CANCEL__);
}
function M(e, t, n) {
  y.call(this, e ?? "canceled", y.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(M, y, {
  __CANCEL__: !0
});
function Ge(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new y(
    "Request failed with status code " + n.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function vn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Un(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const c = Date.now(), u = r[o];
    i || (i = c), n[s] = f, r[s] = c;
    let h = o, b = 0;
    for (; h !== s; )
      b += n[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), c - i < t)
      return;
    const g = u && c - u;
    return g ? Math.round(b * 1e3 / g) : void 0;
  };
}
function Fn(e, t) {
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
const Y = (e, t, n = 3) => {
  let r = 0;
  const s = Un(50, 250);
  return Fn((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, f = i - r, c = s(f), u = i <= l;
    r = i;
    const h = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: f,
      rate: c || void 0,
      estimated: c && l && u ? (l - i) / c : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, xe = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Ae = (e) => (...t) => a.asap(() => e(...t)), Ln = O.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, O.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(O.origin),
  O.navigator && /(msie|trident)/i.test(O.navigator.userAgent)
) : () => !0, Dn = O.hasStandardBrowserEnv ? (
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
function Bn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function jn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ye(e, t, n) {
  let r = !Bn(t);
  return e && r || n == !1 ? jn(e, t) : t;
}
const Ce = (e) => e instanceof A ? { ...e } : e;
function $(e, t) {
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
  const f = {
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
    headers: (c, u, h) => s(Ce(c), Ce(u), h, !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const h = f[u] || s, b = h(e[u], t[u], u);
    a.isUndefined(b) && h !== l || (n[u] = b);
  }), n;
}
const Ze = (e) => {
  const t = $({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = A.from(i), t.url = We(Ye(t.baseURL, t.url), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let f;
  if (a.isFormData(n)) {
    if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((f = i.getContentType()) !== !1) {
      const [c, ...u] = f ? f.split(";").map((h) => h.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (O.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && Ln(t.url))) {
    const c = s && o && Dn.read(o);
    c && i.set(s, c);
  }
  return t;
}, qn = typeof XMLHttpRequest < "u", $n = qn && function(e) {
  return new Promise(function(n, r) {
    const s = Ze(e);
    let o = s.data;
    const i = A.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: c } = s, u, h, b, g, p;
    function m() {
      g && g(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let d = new XMLHttpRequest();
    d.open(s.method.toUpperCase(), s.url, !0), d.timeout = s.timeout;
    function w() {
      if (!d)
        return;
      const _ = A.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), x = {
        data: !l || l === "text" || l === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: _,
        config: e,
        request: d
      };
      Ge(function(B) {
        n(B), m();
      }, function(B) {
        r(B), m();
      }, x), d = null;
    }
    "onloadend" in d ? d.onloadend = w : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, d.onabort = function() {
      d && (r(new y("Request aborted", y.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      r(new y("Network Error", y.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let F = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const x = s.transitional || Ke;
      s.timeoutErrorMessage && (F = s.timeoutErrorMessage), r(new y(
        F,
        x.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        d
      )), d = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in d && a.forEach(i.toJSON(), function(F, x) {
      d.setRequestHeader(x, F);
    }), a.isUndefined(s.withCredentials) || (d.withCredentials = !!s.withCredentials), l && l !== "json" && (d.responseType = s.responseType), c && ([b, p] = Y(c, !0), d.addEventListener("progress", b)), f && d.upload && ([h, g] = Y(f), d.upload.addEventListener("progress", h), d.upload.addEventListener("loadend", g)), (s.cancelToken || s.signal) && (u = (_) => {
      d && (r(!_ || _.type ? new M(null, e, d) : _), d.abort(), d = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const R = vn(s.url);
    if (R && O.protocols.indexOf(R) === -1) {
      r(new y("Unsupported protocol " + R + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(o || null);
  });
}, In = (e, t) => {
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
    const { signal: f } = r;
    return f.unsubscribe = () => a.asap(l), f;
  }
}, Mn = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Hn = async function* (e, t) {
  for await (const n of zn(e))
    yield* Mn(n, t);
}, zn = async function* (e) {
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
}, Pe = (e, t, n, r) => {
  const s = Hn(e, t);
  let o = 0, i, l = (f) => {
    i || (i = !0, r && r(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: c, value: u } = await s.next();
        if (c) {
          l(), f.close();
          return;
        }
        let h = u.byteLength;
        if (n) {
          let b = o += h;
          n(b);
        }
        f.enqueue(new Uint8Array(u));
      } catch (c) {
        throw l(c), c;
      }
    },
    cancel(f) {
      return l(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, se = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", et = se && typeof ReadableStream == "function", Jn = se && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), tt = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Vn = et && tt(() => {
  let e = !1;
  const t = new Request(O.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Ne = 64 * 1024, de = et && tt(() => a.isReadableStream(new Response("").body)), Z = {
  stream: de && ((e) => e.body)
};
se && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Z[t] && (Z[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new y(`Response type '${t}' is not supported`, y.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Wn = async (e) => {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (await new Request(O.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (await Jn(e)).byteLength;
}, Kn = async (e, t) => {
  const n = a.toFiniteNumber(e.getContentLength());
  return n ?? Wn(t);
}, Xn = se && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: f,
    responseType: c,
    headers: u,
    withCredentials: h = "same-origin",
    fetchOptions: b
  } = Ze(e);
  c = c ? (c + "").toLowerCase() : "text";
  let g = In([s, o && o.toAbortSignal()], i), p;
  const m = g && g.unsubscribe && (() => {
    g.unsubscribe();
  });
  let d;
  try {
    if (f && Vn && n !== "get" && n !== "head" && (d = await Kn(u, r)) !== 0) {
      let x = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), L;
      if (a.isFormData(r) && (L = x.headers.get("content-type")) && u.setContentType(L), x.body) {
        const [B, K] = xe(
          d,
          Y(Ae(f))
        );
        r = Pe(x.body, Ne, B, K);
      }
    }
    a.isString(h) || (h = h ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    p = new Request(t, {
      ...b,
      signal: g,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: w ? h : void 0
    });
    let R = await fetch(p);
    const _ = de && (c === "stream" || c === "response");
    if (de && (l || _ && m)) {
      const x = {};
      ["status", "statusText", "headers"].forEach((Ee) => {
        x[Ee] = R[Ee];
      });
      const L = a.toFiniteNumber(R.headers.get("content-length")), [B, K] = l && xe(
        L,
        Y(Ae(l), !0)
      ) || [];
      R = new Response(
        Pe(R.body, Ne, B, () => {
          K && K(), m && m();
        }),
        x
      );
    }
    c = c || "text";
    let F = await Z[a.findKey(Z, c) || "text"](R, e);
    return !_ && m && m(), await new Promise((x, L) => {
      Ge(x, L, {
        data: F,
        headers: A.from(R.headers),
        status: R.status,
        statusText: R.statusText,
        config: e,
        request: p
      });
    });
  } catch (w) {
    throw m && m(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(
      new y("Network Error", y.ERR_NETWORK, e, p),
      {
        cause: w.cause || w
      }
    ) : y.from(w, w && w.code, e, p);
  }
}), he = {
  http: un,
  xhr: $n,
  fetch: Xn
};
a.forEach(he, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ke = (e) => `- ${e}`, Qn = (e) => a.isFunction(e) || e === null || e === !1, nt = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Qn(n) && (r = he[(i = String(n)).toLowerCase()], r === void 0))
        throw new y(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([l, f]) => `adapter ${l} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(ke).join(`
`) : " " + ke(o[0]) : "as no adapter specified";
      throw new y(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: he
};
function le(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new M(null, e);
}
function ve(e) {
  return le(e), e.headers = A.from(e.headers), e.data = ae.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), nt.getAdapter(e.adapter || V.adapter)(e).then(function(r) {
    return le(e), r.data = ae.call(
      e,
      e.transformResponse,
      r
    ), r.headers = A.from(r.headers), r;
  }, function(r) {
    return Qe(r) || (le(e), r && r.response && (r.response.data = ae.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = A.from(r.response.headers))), Promise.reject(r);
  });
}
const rt = "1.8.2", oe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  oe[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ue = {};
oe.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + rt + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new y(
        s(i, " has been removed" + (n ? " in " + n : "")),
        y.ERR_DEPRECATED
      );
    return n && !Ue[i] && (Ue[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
oe.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Gn(e, t, n) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const l = e[o], f = l === void 0 || i(l, o, e);
      if (f !== !0)
        throw new y("option " + o + " must be " + f, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new y("Unknown option " + o, y.ERR_BAD_OPTION);
  }
}
const G = {
  assertOptions: Gn,
  validators: oe
}, U = G.validators;
let q = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Te(),
      response: new Te()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = $(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && G.assertOptions(r, {
      silentJSONParsing: U.transitional(U.boolean),
      forcedJSONParsing: U.transitional(U.boolean),
      clarifyTimeoutError: U.transitional(U.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : G.assertOptions(s, {
      encode: U.function,
      serialize: U.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), G.assertOptions(n, {
      baseUrl: U.spelling("baseURL"),
      withXsrfToken: U.spelling("withXSRFToken")
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
    ), n.headers = A.concat(i, o);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (f = f && m.synchronous, l.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let u, h = 0, b;
    if (!f) {
      const p = [ve.bind(this), void 0];
      for (p.unshift.apply(p, l), p.push.apply(p, c), b = p.length, u = Promise.resolve(n); h < b; )
        u = u.then(p[h++], p[h++]);
      return u;
    }
    b = l.length;
    let g = n;
    for (h = 0; h < b; ) {
      const p = l[h++], m = l[h++];
      try {
        g = p(g);
      } catch (d) {
        m.call(this, d);
        break;
      }
    }
    try {
      u = ve.call(this, g);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, b = c.length; h < b; )
      u = u.then(c[h++], c[h++]);
    return u;
  }
  getUri(t) {
    t = $(this.defaults, t);
    const n = Ye(t.baseURL, t.url, t.allowAbsoluteUrls);
    return We(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  q.prototype[t] = function(n, r) {
    return this.request($(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request($(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  q.prototype[t] = n(), q.prototype[t + "Form"] = n(!0);
});
let Yn = class st {
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
      token: new st(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Zn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function er(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const pe = {
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
Object.entries(pe).forEach(([e, t]) => {
  pe[t] = e;
});
function ot(e) {
  const t = new q(e), n = De(q.prototype.request, t);
  return a.extend(n, q.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return ot($(e, s));
  }, n;
}
const E = ot(V);
E.Axios = q;
E.CanceledError = M;
E.CancelToken = Yn;
E.isCancel = Qe;
E.VERSION = rt;
E.toFormData = re;
E.AxiosError = y;
E.Cancel = E.CanceledError;
E.all = function(t) {
  return Promise.all(t);
};
E.spread = Zn;
E.isAxiosError = er;
E.mergeConfig = $;
E.AxiosHeaders = A;
E.formToJSON = (e) => Xe(a.isHTMLForm(e) ? new FormData(e) : e);
E.getAdapter = nt.getAdapter;
E.HttpStatusCode = pe;
E.default = E;
const {
  Axios: cr,
  AxiosError: ur,
  CanceledError: fr,
  isCancel: dr,
  CancelToken: hr,
  VERSION: pr,
  all: mr,
  Cancel: yr,
  isAxiosError: br,
  spread: gr,
  toFormData: wr,
  AxiosHeaders: Er,
  HttpStatusCode: Rr,
  formToJSON: Sr,
  getAdapter: _r,
  mergeConfig: Tr
} = E;
class tr {
  static Search(t, n, r, s, o, i) {
    let l = t !== void 0 ? "&key=" + t : "", f = r !== null && r !== "" && r !== void 0 ? "&channelId=" + r : "", c = "&type=" + n, u = "&maxResults=" + (s !== void 0 ? s : 50), h = i !== void 0 ? "&pageToken=" + i : "", b = o != null && o !== "" ? "&q=" + encodeURI(o) : "";
    return new Promise((g, p) => {
      let m = "https://www.googleapis.com/youtube/v3/search?part=snippet" + l + f + c + u + h + b;
      console.log(m), E.get(m).then(function(d) {
        return g(d.data), d;
      }).catch(function(d) {
        return p(d), console.log(d), null;
      });
    });
  }
}
var nr = Object.defineProperty, rr = Object.getOwnPropertyDescriptor, it = (e) => {
  throw TypeError(e);
}, T = (e, t, n, r) => {
  for (var s = r > 1 ? void 0 : r ? rr(t, n) : t, o = e.length - 1, i; o >= 0; o--)
    (i = e[o]) && (s = (r ? i(t, n, s) : i(s)) || s);
  return r && s && nr(t, n, s), s;
}, at = (e, t, n) => t.has(e) || it("Cannot " + n), we = (e, t, n) => (at(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Fe = (e, t, n) => t.has(e) ? it("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), k = (e, t, n) => (at(e, t, "access private method"), n), C, lt, ct, ut, ft, dt, ht, pt, W, mt, yt, bt, gt, wt;
let S = class extends Tt(Et) {
  constructor() {
    super(), Fe(this, C), this._searchQuery = "", this._searchType = "video", this._searchResults = null, this._searching = !1, this._hasResults = !1, this._perPage = 50, Fe(this, W, async () => {
      var t, n, r, s, o, i, l;
      this._searching = !0, this._apiKey = (t = this.modalContext) == null ? void 0 : t.data.apiKey, this._channelId = ((n = this.modalContext) == null ? void 0 : n.data.channelId) || "", this._perPage = ((r = this.modalContext) == null ? void 0 : r.data.perPage) || 25;
      let e = await tr.Search(this._apiKey, this._searchType, this._channelId, this._perPage, this._searchQuery, this._pageToken).then(function(f) {
        return f;
      });
      this._searchResults = e, this._searchResults !== null && (this._hasResults = !0, this._totalResults = ((o = (s = this._searchResults) == null ? void 0 : s.pageInfo) == null ? void 0 : o.totalResults) || 0, this._nextPageToken = (i = this._searchResults) == null ? void 0 : i.nextPageToken, this._previousPageToken = (l = this._searchResults) == null ? void 0 : l.previousPageToken), this._searching = !1;
    }), this._searchTypes = [
      { name: "Video", value: "video", selected: !0 },
      { name: "Playlist", value: "playlist" }
    ];
  }
  render() {
    var e;
    return D`
       <uui-modal-container>
          <uui-modal-sidebar>
            <umb-body-layout headline=${(e = this.modalContext) == null ? void 0 : e.data.headline} headline-variant="h5">
            ${k(this, C, wt).call(this)}
				    ${k(this, C, gt).call(this)}
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
C = /* @__PURE__ */ new WeakSet();
lt = function(e) {
  this._searchQuery = e.target.value, k(this, C, ct).call(this);
};
ct = function() {
  this.dispatchEvent(new me());
};
ut = function(e) {
  this._selectedItem = e;
};
ft = function() {
  this._selectedItem = void 0;
};
dt = function(e) {
  this._searchType = e.target.value, e.stopPropagation();
};
ht = function() {
  this._pageToken = this._previousPageToken, this.dispatchEvent(new me()), we(this, W).call(this).then();
};
pt = function() {
  this._pageToken = this._nextPageToken, this.dispatchEvent(new me()), we(this, W).call(this).then();
};
W = /* @__PURE__ */ new WeakMap();
mt = function() {
  if (this._searchResults !== null && this._searchResults.items !== null)
    return D`
          <div id="media-grid">
						${_t(
      this._searchResults.items,
      (e) => e.id.videoId,
      (e) => k(this, C, yt).call(this, e)
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
              @click=${k(this, C, ht)}
            >Prev</uui-button>
            <uui-button
              ?disabled=${this._nextPageToken == null}
              class="element"
              color="positive"
              look="primary"
              label="Next"
              @click=${k(this, C, pt)}
            >Next</uui-button>
          </div>
		      `;
};
yt = function(e) {
  return D`
          <uui-card-media
            .name=${e.snippet.title}
            data-mark="${e.kind}:${e.id.videoId}"
            class=${this._selectedItem === e ? "selected" : ""}
            @deselected=${() => k(this, C, ft).call(this)}
            @open=${() => k(this, C, ut).call(this, e)}
            >
          <img
            src="${e.snippet.thumbnails !== null && e.snippet.thumbnails.default !== null ? e.snippet.thumbnails.default.url : ""}"
            alt="${e.snippet.title}" />
          </uui-card-media>
      `;
};
bt = function() {
  return D`
            <div class="container">
              <p>No results found.</p>
            </div>
      `;
};
gt = function() {
  return D`
        ${this._hasResults ? k(this, C, mt).call(this) : k(this, C, bt).call(this)} `;
};
wt = function() {
  return D`
        <div id="toolbar">
          <div id="search">
            <uui-input
              label="Search"
              placeholder="keyword search term..."
              .value=${this._searchQuery}
              @input=${k(this, C, lt)}>
              <div slot="prepend">
                ${this._searching ? D`<uui-loader-circle id="searching-indicator"></uui-loader-circle>` : D`<uui-icon name="search"></uui-icon>`}
              </div>
            </uui-input>
          </div>
          <div id="type">
            <uui-select
              label="Option"
              placeholder="Select an option"
              .options="${this._searchTypes}"
              @change=${k(this, C, dt)}></uui-select>
          </div>
          <div id="type">
            <uui-button
              label="Search"
              look="primary"
              color="positive"

              ${this._searching ? "disabled='' state='waiting' " : ""}

              @click=${we(this, W)}
              ></uui-button>
          </div>
        </div>
      `;
};
S.styles = [
  Rt`
			#toolbar {
				display: flex;
				gap: var(--uui-size-6);
				align-items: flex-start;
				margin-bottom: var(--uui-size-3);
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
				grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
				grid-auto-rows: 150px;
				gap: var(--uui-size-space-5);
				padding-bottom: 5px; /** The modal is a bit jumpy due to the img card focus/hover border. This fixes the issue. */
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
T([
  Le({ attribute: !1 })
], S.prototype, "modalContext", 2);
T([
  Le({ attribute: !1 })
], S.prototype, "data", 2);
T([
  P()
], S.prototype, "_searchQuery", 2);
T([
  P()
], S.prototype, "_searchType", 2);
T([
  P()
], S.prototype, "_searchResults", 2);
T([
  P()
], S.prototype, "_searching", 2);
T([
  P()
], S.prototype, "_hasResults", 2);
T([
  P()
], S.prototype, "_searchTypes", 2);
T([
  P()
], S.prototype, "_apiKey", 2);
T([
  P()
], S.prototype, "_channelId", 2);
T([
  P()
], S.prototype, "_perPage", 2);
T([
  P()
], S.prototype, "_selectedItem", 2);
T([
  P()
], S.prototype, "_totalResults", 2);
T([
  P()
], S.prototype, "_previousPageToken", 2);
T([
  P()
], S.prototype, "_nextPageToken", 2);
T([
  P()
], S.prototype, "_pageToken", 2);
S = T([
  St("youtube-picker-modal")
], S);
export {
  S as default
};
//# sourceMappingURL=modal.element-DchFO-bi.js.map
