import { LitElement as h, html as p, css as _, property as f, state as y, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as E } from "@umbraco-cms/backoffice/element-api";
import { UMB_PROPERTY_DATASET_CONTEXT as C } from "@umbraco-cms/backoffice/property";
import { UmbChangeEvent as P } from "@umbraco-cms/backoffice/event";
import { p as T } from "./parse-int.function-BryTI7A1.js";
var b = Object.defineProperty, w = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, l = (e, t, a, s) => {
  for (var r = s > 1 ? void 0 : s ? w(t, a) : t, o = e.length - 1, u; o >= 0; o--)
    (u = e[o]) && (r = (s ? u(t, a, r) : u(r)) || r);
  return s && r && b(t, a, r), r;
}, v = (e, t, a) => t.has(e) || m("Cannot " + a), S = (e, t, a) => (v(e, t, "read from private field"), a ? a.call(e) : t.get(e)), O = (e, t, a) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), V = (e, t, a) => (v(e, t, "access private method"), a), n, c, d;
let i = class extends E(h) {
  constructor() {
    super(), O(this, n), this.value = 0, this._endValue = 0, this.consumeContext(C, async (e) => {
      const t = await e.propertyValueByAlias("end");
      t && this.observe(t, (a) => {
        this._endValue = a ?? 0;
      });
    });
  }
  render() {
    const e = S(this, n, c);
    return p`
      <uui-input
        type="number"
        min="0"
        .value=${(this.value ?? 0).toString()}
        ?invalid=${!!e}
        @change=${V(this, n, d)}>
      </uui-input>
      ${e ? p`<uui-form-validation-message>${e}</uui-form-validation-message>` : ""}
    `;
  }
};
n = /* @__PURE__ */ new WeakSet();
c = function() {
  const e = this.value ?? 0, t = this._endValue ?? 0;
  return e > 0 && t > 0 && e >= t ? "Start time must be less than end time." : "";
};
d = function(e) {
  this.value = T(e.target.value) ?? 0, this.dispatchEvent(new P());
};
i.styles = _`
    :host { display: block; }
    uui-input { width: 8rem; }
    uui-form-validation-message {
      display: block;
      margin-top: var(--uui-size-1);
      color: var(--uui-color-danger-standalone, #d42054);
    }
  `;
l([
  f({ type: Number })
], i.prototype, "value", 2);
l([
  y()
], i.prototype, "_endValue", 2);
i = l([
  g("youtube-picker-start-time")
], i);
export {
  i as default
};
//# sourceMappingURL=start-time.element-ClZ1RjBk.js.map
