import { LitElement as V, html as d, css as B, property as A, state as r, customElement as L } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalToken as x, UMB_MODAL_MANAGER_CONTEXT as M } from "@umbraco-cms/backoffice/modal";
import { UmbChangeEvent as g } from "@umbraco-cms/backoffice/event";
import { p } from "./parse-int.function-BryTI7A1.js";
import { UmbElementMixin as z } from "@umbraco-cms/backoffice/element-api";
function h(e) {
  return e === "0" || typeof e == "string" && e.toLowerCase() === "false" ? !1 : !!e;
}
const I = new x("youtube-picker-modal", {
  modal: {
    type: "custom",
    size: "medium"
  }
});
var K = Object.defineProperty, T = Object.getOwnPropertyDescriptor, S = (e) => {
  throw TypeError(e);
}, a = (e, t, i, c) => {
  for (var n = c > 1 ? void 0 : c ? T(t, i) : t, v = e.length - 1, f; v >= 0; v--)
    (f = e[v]) && (n = (c ? f(t, i, n) : f(n)) || n);
  return c && n && K(t, i, n), n;
}, E = (e, t, i) => t.has(e) || S("Cannot " + i), b = (e, t, i) => (E(e, t, "read from private field"), i ? i.call(e) : t.get(e)), _ = (e, t, i) => t.has(e) ? S("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), O = (e, t, i, c) => (E(e, t, "write to private field"), t.set(e, i), i), l = (e, t, i) => (E(e, t, "access private method"), i), m, o, w, y, P, u, k, $, C;
let s = class extends z(V) {
  constructor() {
    super(), _(this, o), this.value = "", this._hasError = !1, _(this, m), _(this, k, async (e) => {
      const t = e.target;
      t.state = "waiting", this.value = "", t.state = "success", this.dispatchEvent(new g());
    }), _(this, $, async (e) => {
      var c;
      const t = e.target;
      t.state = "waiting";
      const i = (c = b(this, m)) == null ? void 0 : c.open(
        this,
        I,
        {
          data: {
            headline: "Choose a video or playlist",
            apiKey: this._apiKey || "",
            channelId: this._channelId || "",
            perPage: this._perPage || 50
          }
        }
      );
      i == null || i.onSubmit().then((n) => {
        this._handleSubmit(!0, n.value), this.dispatchEvent(new g());
      }).catch(() => {
        this._handleSubmit(!1);
      }), t.state = "success";
    }), this.consumeContext(M, (e) => {
      O(this, m, e);
    });
  }
  set config(e) {
    if (!e) return;
    this._apiKey = e.getValueByAlias("apiKey"), this._channelId = e.getValueByAlias("channelId"), this._perPage = p(e.getValueByAlias("perPage")) || 50, this._alloweditors = h(e.getValueByAlias("alloweditors")) || !1, this._nocookie = h(e.getValueByAlias("nocookie")) || !1, this._rel = h(e.getValueByAlias("rel")) || !1, this._autoplay = h(e.getValueByAlias("autoplay")) || !1, this._fs = h(e.getValueByAlias("fs")) || !1;
    const t = e.getValueByAlias("controls");
    this._controls = t == null ? !0 : h(t), this._loop = h(e.getValueByAlias("loop")) || !1, this._start = p(e.getValueByAlias("start")) || 0, this._end = p(e.getValueByAlias("end")) || 0, this._ccLoadPolicy = h(e.getValueByAlias("ccLoadPolicy")) || !1, this._alloweditors && this.value && l(this, o, w).call(this), this._perPage > 50 && (this._perPage = 50), (this._apiKey === void 0 || this._apiKey === null || this._apiKey === "") && (this._hasError = !0, this._error = "API key is required");
  }
  updated(e) {
    e.has("value") && this.value && this._alloweditors && l(this, o, w).call(this);
  }
  _handleSubmit(e, t) {
    var i;
    if (e) {
      let c = this._nocookie === !0 ? "https://www.youtube-nocookie.com/embed/" : "https://www.youtube.com/embed/";
      (t == null ? void 0 : t.id.kind) === "youtube#video" ? c += (i = t.id) == null ? void 0 : i.videoId : (t == null ? void 0 : t.id.kind) === "youtube#playlist" && (c += "videoseries?list=" + t.id.playlistId), this.value = l(this, o, y).call(this, new URL(c)).toString();
    }
  }
  render() {
    return d`
        ${this.value != "" && this.value != null && this.value != null ? d`<div id="video-wrapper">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              style="width: 25rem; height: 15rem"
              src="${this.value}"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>

          <uui-button @click="${b(this, k)}"
            id="video-delete"
            class="element"
            color="warning" look="primary"
            label="Delete"
          >
            Delete
          </uui-button>
        </div>` : d`<div id="wrapper">
            ${this._hasError ? d`<p>${this._error}</p>` : d`
                <uui-button @click="${b(this, $)}"
                  id="video-overlay"
                  class="element"
                  look="primary"
                  label="Select video"
                >
                  Select video
                </uui-button>`}
              </div>`}
        ${this._alloweditors ? l(this, o, C).call(this) : d``}
    `;
  }
};
m = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
w = function() {
  try {
    const e = new URL(this.value);
    this._nocookie = e.hostname === "www.youtube-nocookie.com", this._rel = e.searchParams.get("rel") === "1", this._autoplay = e.searchParams.get("autoplay") === "1", this._fs = e.searchParams.get("fs") === "0";
    const t = e.searchParams.get("controls");
    this._controls = t === null ? !0 : t !== "0", this._loop = e.searchParams.get("loop") === "1", this._start = p(e.searchParams.get("start")) || 0, this._end = p(e.searchParams.get("end")) || 0, this._ccLoadPolicy = e.searchParams.get("cc_load_policy") === "1";
  } catch {
  }
};
y = function(e) {
  e.searchParams.set("rel", this._rel === !0 ? "1" : "0"), e.searchParams.set("autoplay", this._autoplay === !0 ? "1" : "0"), e.searchParams.set("mute", this._autoplay === !0 ? "1" : "0"), e.searchParams.set("fs", this._fs === !0 ? "0" : "1"), e.searchParams.set("controls", this._controls === !1 ? "0" : "1");
  const t = e.pathname.includes("videoseries");
  if (this._loop) {
    if (e.searchParams.set("loop", "1"), !t) {
      const i = e.pathname.split("/").pop();
      i && e.searchParams.set("playlist", i);
    }
  } else
    e.searchParams.set("loop", "0"), t || e.searchParams.delete("playlist");
  return this._start && this._start > 0 ? e.searchParams.set("start", this._start.toString()) : e.searchParams.delete("start"), this._end && this._end > 0 ? e.searchParams.set("end", this._end.toString()) : e.searchParams.delete("end"), this._ccLoadPolicy ? e.searchParams.set("cc_load_policy", "1") : e.searchParams.delete("cc_load_policy"), e;
};
P = function(e, t) {
  if (this[`_${e}`] = p(t) || 0, this.value)
    try {
      this.value = l(this, o, y).call(this, new URL(this.value)).toString(), this.dispatchEvent(new g());
    } catch {
    }
};
u = function(e, t) {
  if (this[`_${e}`] = t, this.value)
    try {
      const i = new URL(this.value);
      e === "nocookie" && (i.hostname = t ? "www.youtube-nocookie.com" : "www.youtube.com"), this.value = l(this, o, y).call(this, i).toString(), this.dispatchEvent(new g());
    } catch {
    }
};
k = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
C = function() {
  return d`
      <div id="editor-controls">
        <div id="editor-toggles">
          <uui-toggle ?checked=${this._nocookie} @change=${(e) => l(this, o, u).call(this, "nocookie", e.target.checked)} label="No Cookie"></uui-toggle>
          <uui-toggle ?checked=${this._rel} @change=${(e) => l(this, o, u).call(this, "rel", e.target.checked)} label="Related Videos"></uui-toggle>
          <uui-toggle ?checked=${this._autoplay} @change=${(e) => l(this, o, u).call(this, "autoplay", e.target.checked)} label="Autoplay"></uui-toggle>
          <uui-toggle ?checked=${this._fs} @change=${(e) => l(this, o, u).call(this, "fs", e.target.checked)} label="Prevent Fullscreen"></uui-toggle>
          <uui-toggle ?checked=${this._controls} @change=${(e) => l(this, o, u).call(this, "controls", e.target.checked)} label="Player Controls"></uui-toggle>
          <uui-toggle ?checked=${this._loop} @change=${(e) => l(this, o, u).call(this, "loop", e.target.checked)} label="Loop"></uui-toggle>
          <uui-toggle ?checked=${this._ccLoadPolicy} @change=${(e) => l(this, o, u).call(this, "ccLoadPolicy", e.target.checked)} label="Show Captions"></uui-toggle>
        </div>
        <div id="editor-numbers">
          <div class="number-field">
            <label>Start Time (seconds)</label>
            <uui-input type="number" min="0" .value=${(this._start ?? 0).toString()} @change=${(e) => l(this, o, P).call(this, "start", e.target.value)}></uui-input>
          </div>
          <div class="number-field">
            <label>End Time (seconds)</label>
            <uui-input type="number" min="0" .value=${(this._end ?? 0).toString()} @change=${(e) => l(this, o, P).call(this, "end", e.target.value)}></uui-input>
          </div>
        </div>
      </div>
    `;
};
s.styles = [
  B`
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

            #editor-controls {
                display: grid;
                grid-template-columns: auto auto;
                gap: var(--uui-size-6);
                padding: var(--uui-size-3) 0;
                align-items: start;
            }

            #editor-toggles {
                display: flex;
                flex-direction: column;
                gap: var(--uui-size-3);
            }

            #editor-numbers {
                display: flex;
                flex-direction: column;
                gap: var(--uui-size-4);
            }

            .number-field {
                display: flex;
                flex-direction: column;
                gap: var(--uui-size-1);
            }

            .number-field label {
                font-size: var(--uui-type-small-size);
                color: var(--uui-color-text-alt);
            }

            .number-field uui-input {
                width: 8rem;
            }
    `
];
a([
  A({ type: String })
], s.prototype, "value", 2);
a([
  r()
], s.prototype, "_apiKey", 2);
a([
  r()
], s.prototype, "_channelId", 2);
a([
  r()
], s.prototype, "_perPage", 2);
a([
  r()
], s.prototype, "_alloweditors", 2);
a([
  r()
], s.prototype, "_nocookie", 2);
a([
  r()
], s.prototype, "_rel", 2);
a([
  r()
], s.prototype, "_autoplay", 2);
a([
  r()
], s.prototype, "_fs", 2);
a([
  r()
], s.prototype, "_controls", 2);
a([
  r()
], s.prototype, "_loop", 2);
a([
  r()
], s.prototype, "_start", 2);
a([
  r()
], s.prototype, "_end", 2);
a([
  r()
], s.prototype, "_ccLoadPolicy", 2);
a([
  r()
], s.prototype, "_error", 2);
a([
  r()
], s.prototype, "_hasError", 2);
a([
  A({ attribute: !1 })
], s.prototype, "config", 1);
s = a([
  L("youtube-picker-property-editor-ui")
], s);
export {
  s as default
};
//# sourceMappingURL=propertyeditor.element-D5dXCNvz.js.map
