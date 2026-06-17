import { LitElement as m, html as l, css as _, property as f, state as y, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as E } from "@umbraco-cms/backoffice/element-api";
import { UmbChangeEvent as b } from "@umbraco-cms/backoffice/event";
var P = Object.defineProperty, w = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, p = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? w(t, i) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (r = (s ? n(t, i, r) : n(r)) || r);
  return s && r && P(t, i, r), r;
}, A = (e, t, i) => t.has(e) || c("Cannot " + i), C = (e, t, i) => t.has(e) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), v = (e, t, i) => (A(e, t, "access private method"), i), u, h, d;
let a = class extends E(m) {
  constructor() {
    super(...arguments), C(this, u), this.value = "", this._touched = !1;
  }
  render() {
    var t;
    const e = this._touched && !((t = this.value) != null && t.trim());
    return l`
      <uui-input
        type="text"
        .value=${this.value ?? ""}
        ?invalid=${e}
        @input=${v(this, u, h)}
        @blur=${v(this, u, d)}>
      </uui-input>
      ${e ? l`<uui-form-validation-message>A YouTube API Key is required.</uui-form-validation-message>` : ""}
    `;
  }
};
u = /* @__PURE__ */ new WeakSet();
h = function(e) {
  this.value = e.target.value, this.dispatchEvent(new b());
};
d = function() {
  this._touched = !0;
};
a.styles = _`
    :host { display: block; }
    uui-input { width: 100%; }
    uui-form-validation-message {
      display: block;
      margin-top: var(--uui-size-1);
      color: var(--uui-color-danger-standalone, #d42054);
    }
  `;
p([
  f({ type: String })
], a.prototype, "value", 2);
p([
  y()
], a.prototype, "_touched", 2);
a = p([
  g("youtube-picker-api-key")
], a);
export {
  a as default
};
//# sourceMappingURL=api-key.element-Coqx-8K4.js.map
