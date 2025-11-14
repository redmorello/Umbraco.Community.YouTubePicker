import { LitElement as w, html as n, css as k, property as f, state as l, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalToken as P, UMB_MODAL_MANAGER_CONTEXT as A } from "@umbraco-cms/backoffice/modal";
import { UmbChangeEvent as v } from "@umbraco-cms/backoffice/event";
import { UmbElementMixin as C } from "@umbraco-cms/backoffice/element-api";
const B = new P("youtube-picker-modal", {
  modal: {
    type: "custom",
    size: "medium"
  }
});
function p(e) {
  return e === "0" || typeof e == "string" && e.toLowerCase() === "false" ? !1 : !!e;
}
function S(e) {
  const t = Number(e);
  return Number.isNaN(t) ? void 0 : t;
}
var M = Object.defineProperty, V = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, a = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? V(t, i) : t, h = e.length - 1, d; h >= 0; h--)
    (d = e[h]) && (r = (o ? d(t, i, r) : d(r)) || r);
  return o && r && M(t, i, r), r;
}, g = (e, t, i) => t.has(e) || b("Cannot " + i), c = (e, t, i) => (g(e, t, "read from private field"), i ? i.call(e) : t.get(e)), y = (e, t, i) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), I = (e, t, i, o) => (g(e, t, "write to private field"), t.set(e, i), i), u, _, m;
let s = class extends C(w) {
  constructor() {
    super(), this.value = "", this._hasError = !1, y(this, u), y(this, _, async (e) => {
      const t = e.target;
      t.state = "waiting", this.value = "", t.state = "success", this.dispatchEvent(new v());
    }), y(this, m, async (e) => {
      var o;
      const t = e.target;
      t.state = "waiting";
      const i = (o = c(this, u)) == null ? void 0 : o.open(
        this,
        B,
        {
          data: {
            headline: "Choose a video or playlist",
            apiKey: this._apiKey || "",
            channelId: this._channelId || "",
            perPage: this._perPage || 50
          }
        }
      );
      i == null || i.onSubmit().then((r) => {
        this._handleSubmit(!0, r.value), this.dispatchEvent(new v());
      }).catch(() => {
        this._handleSubmit(!1);
      }), t.state = "success";
    }), this.consumeContext(A, (e) => {
      I(this, u, e);
    });
  }
  set config(e) {
    e && (this._apiKey = e.getValueByAlias("apiKey"), this._channelId = e.getValueByAlias("channelId"), this._perPage = S(e.getValueByAlias("perPage")) || 50, this._nocookie = p(e.getValueByAlias("nocookie")) || !1, this._rel = p(e.getValueByAlias("rel")) || !1, this._modestbranding = p(e.getValueByAlias("modestbranding")) || !1, this._autoplay = p(e.getValueByAlias("autoplay")) || !1, this._fs = p(e.getValueByAlias("fs")) || !1, this._perPage > 50 && (this._perPage = 50), (this._apiKey === void 0 || this._apiKey === null || this._apiKey === "") && (this._hasError = !0, this._error = "API key is required"));
  }
  _handleSubmit(e, t) {
    var i;
    if (e) {
      let o = this._nocookie === !0 ? "https://www.youtube-nocookie.com/embed/" : "https://www.youtube.com/embed/";
      (t == null ? void 0 : t.id.kind) === "youtube#video" ? o += (i = t.id) == null ? void 0 : i.videoId : (t == null ? void 0 : t.id.kind) === "youtube#playlist" && (o += "videoseries?list=" + t.id.playlistId);
      const r = new URL(o);
      r.searchParams.set("rel", this._rel === !0 ? "1" : "0"), r.searchParams.set("modestbranding", this._modestbranding === !0 ? "1" : "0"), r.searchParams.set("autoplay", this._autoplay === !0 ? "1" : "0"), r.searchParams.set("fs", this._fs === !0 ? "1" : "0"), this.value = r.toString();
    }
  }
  render() {
    return n`
        ${this.value != "" && this.value != null && this.value != null ? n`<div id="video-wrapper">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              style="width: 25rem; height: 15rem"
              src="${this.value}"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>

          <uui-button @click="${c(this, _)}"
            id="video-delete"
            class="element"
            color="warning" look="primary"
            label="Delete"
          >
            Delete
          </uui-button>
        </div>` : n`<div id="wrapper">
            ${this._hasError ? n`<p>${this._error}</p>` : n`
                <uui-button @click="${c(this, m)}"
                  id="video-overlay"
                  class="element"
                  look="primary"
                  label="Select video"
                >
                  Select video
                </uui-button>`}
              </div>`}
    `;
  }
};
u = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
s.styles = [
  k`
            :host {
                display: grid;
                gap: var(--uui-size-layout-1);
                grid-template-columns: 1fr 1fr 1fr;
            }

            uui-box {
                margin-bottom: var(--uui-size-layout-1);
            }

            h2 {
                margin-top:0;
            }

            .wide {
                grid-column: span 3;
            }
    `
];
a([
  f({ type: String })
], s.prototype, "value", 2);
a([
  l()
], s.prototype, "_apiKey", 2);
a([
  l()
], s.prototype, "_channelId", 2);
a([
  l()
], s.prototype, "_perPage", 2);
a([
  l()
], s.prototype, "_nocookie", 2);
a([
  l()
], s.prototype, "_rel", 2);
a([
  l()
], s.prototype, "_modestbranding", 2);
a([
  l()
], s.prototype, "_autoplay", 2);
a([
  l()
], s.prototype, "_fs", 2);
a([
  l()
], s.prototype, "_error", 2);
a([
  l()
], s.prototype, "_hasError", 2);
a([
  f({ attribute: !1 })
], s.prototype, "config", 1);
s = a([
  E("youtube-picker-property-editor-ui")
], s);
export {
  s as default
};
//# sourceMappingURL=propertyeditor.element-BJMvN_sF.js.map
