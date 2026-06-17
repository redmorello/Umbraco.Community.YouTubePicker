import { LitElement as d, html as p, css as _, property as f, state as E, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as y } from "@umbraco-cms/backoffice/element-api";
import { UMB_PROPERTY_DATASET_CONTEXT as C } from "@umbraco-cms/backoffice/property";
import { UmbChangeEvent as P } from "@umbraco-cms/backoffice/event";
import { p as T } from "./parse-int.function-BryTI7A1.js";
var b = Object.defineProperty, w = Object.getOwnPropertyDescriptor, m = (t) => {
  throw TypeError(t);
}, l = (t, e, a, i) => {
  for (var r = i > 1 ? void 0 : i ? w(e, a) : e, o = t.length - 1, u; o >= 0; o--)
    (u = t[o]) && (r = (i ? u(e, a, r) : u(r)) || r);
  return i && r && b(e, a, r), r;
}, v = (t, e, a) => e.has(t) || m("Cannot " + a), O = (t, e, a) => (v(t, e, "read from private field"), a ? a.call(t) : e.get(t)), V = (t, e, a) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), $ = (t, e, a) => (v(t, e, "access private method"), a), n, c, h;
let s = class extends y(d) {
  constructor() {
    super(), V(this, n), this.value = 0, this._startValue = 0, this.consumeContext(C, async (t) => {
      const e = await t.propertyValueByAlias("start");
      e && this.observe(e, (a) => {
        this._startValue = a ?? 0;
      });
    });
  }
  render() {
    const t = O(this, n, c);
    return p`
      <uui-input
        type="number"
        min="0"
        .value=${(this.value ?? 0).toString()}
        ?invalid=${!!t}
        @change=${$(this, n, h)}>
      </uui-input>
      ${t ? p`<uui-form-validation-message>${t}</uui-form-validation-message>` : ""}
    `;
  }
};
n = /* @__PURE__ */ new WeakSet();
c = function() {
  const t = this.value ?? 0, e = this._startValue ?? 0;
  return t > 0 && e > 0 && t <= e ? "End time must be greater than start time." : "";
};
h = function(t) {
  this.value = T(t.target.value) ?? 0, this.dispatchEvent(new P());
};
s.styles = _`
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
], s.prototype, "value", 2);
l([
  E()
], s.prototype, "_startValue", 2);
s = l([
  g("youtube-picker-end-time")
], s);
export {
  s as default
};
//# sourceMappingURL=end-time.element-DwVneqVS.js.map
