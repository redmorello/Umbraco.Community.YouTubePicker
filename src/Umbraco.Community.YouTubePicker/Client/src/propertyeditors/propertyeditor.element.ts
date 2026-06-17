import { css, html, LitElement, customElement, property, state } from "@umbraco-cms/backoffice/external/lit";
import { UUIButtonElement } from "@umbraco-cms/backoffice/external/uui";
import { type UmbPropertyEditorConfigCollection } from '@umbraco-cms/backoffice/property-editor';
import { UMB_MODAL_MANAGER_CONTEXT } from '@umbraco-cms/backoffice/modal';
import { MODAL_TOKEN } from './modal-token.js';
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event';
import { parseBoolean, parseInt } from '../utils';
import {YouTubeItem} from "../api";
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';

@customElement('youtube-picker-property-editor-ui')
export default class YoutubePickerElement extends UmbElementMixin(LitElement) {

  @property({ type: String })
  public value = '';

  //@state()
  //private _selectedItem?: YouTubeItem;

  @state()
  private _apiKey?: string;

  @state()
  private _channelId?: string;

  @state()
  private _perPage?: number;

  @state()
  private _alloweditors?: boolean;

  @state()
  private _nocookie?: boolean;

  @state()
  private _rel?: boolean;

  @state()
  private _autoplay?: boolean;

  @state()
  private _fs?: boolean;

  @state()
  private _controls?: boolean;

  @state()
  private _loop?: boolean;

  @state()
  private _start?: number;

  @state()
  private _end?: number;

  @state()
  private _ccLoadPolicy?: boolean;

  @state()
  private _error?: string;

  @state()
  private _hasError?: boolean = false;

  @property({ attribute: false })
  public set config(config: UmbPropertyEditorConfigCollection) {
    if (!config) return;

    this._apiKey = config.getValueByAlias('apiKey');
    this._channelId = config.getValueByAlias('channelId');
    this._perPage = parseInt(config.getValueByAlias('perPage')) || 50;
    this._alloweditors = parseBoolean(config.getValueByAlias('alloweditors')) || false;
    this._nocookie = parseBoolean(config.getValueByAlias('nocookie')) || false;
    this._rel = parseBoolean(config.getValueByAlias('rel')) || false;
    this._autoplay = parseBoolean(config.getValueByAlias('autoplay')) || false;
    this._fs = parseBoolean(config.getValueByAlias('fs')) || false;
    const controlsValue = config.getValueByAlias('controls');
    this._controls = (controlsValue === null || controlsValue === undefined) ? true : parseBoolean(controlsValue);
    this._loop = parseBoolean(config.getValueByAlias('loop')) || false;
    this._start = parseInt(config.getValueByAlias('start')) || 0;
    this._end = parseInt(config.getValueByAlias('end')) || 0;
    this._ccLoadPolicy = parseBoolean(config.getValueByAlias('ccLoadPolicy')) || false;

    if (this._alloweditors && this.value) {
      this.#syncFromUrl();
    }

    if(this._perPage > 50)
    {
      this._perPage = 50
    }

    if(this._apiKey === undefined || this._apiKey === null || this._apiKey === "")
    {
      this._hasError = true;
      this._error = "API key is required";
    }
  }

  #modalManagerContext?: typeof UMB_MODAL_MANAGER_CONTEXT.TYPE;

  constructor() {
    super();
    this.consumeContext(UMB_MODAL_MANAGER_CONTEXT, (instance) => {
      this.#modalManagerContext = instance;
    });
  }

  override updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('value') && this.value && this._alloweditors) {
      this.#syncFromUrl();
    }
  }

  #syncFromUrl() {
    try {
      const url = new URL(this.value);
      this._nocookie = url.hostname === 'www.youtube-nocookie.com';
      this._rel = url.searchParams.get('rel') === '1';
      this._autoplay = url.searchParams.get('autoplay') === '1';
      this._fs = url.searchParams.get('fs') === '0';
      const controlsParam = url.searchParams.get('controls');
      this._controls = controlsParam === null ? true : controlsParam !== '0';
      this._loop = url.searchParams.get('loop') === '1';
      this._start = parseInt(url.searchParams.get('start')) || 0;
      this._end = parseInt(url.searchParams.get('end')) || 0;
      this._ccLoadPolicy = url.searchParams.get('cc_load_policy') === '1';
    } catch { /* invalid URL, leave toggle states as-is */ }
  }

  private _handleSubmit(isPositive?: boolean, data?: YouTubeItem) {
    if(isPositive)
    {
      let url = this._nocookie === true ? "https://www.youtube-nocookie.com/embed/" : "https://www.youtube.com/embed/";

      if (data?.id.kind === 'youtube#video') {
        url += data.id?.videoId;
      } else if (data?.id.kind === 'youtube#playlist') {
        url += 'videoseries?list=' + data.id.playlistId;
      }

      this.value = this.#applyParams(new URL(url)).toString();
    }
  }

  #applyParams(playerUrl: URL): URL {
    playerUrl.searchParams.set('rel', this._rel === true ? '1' : '0');
    playerUrl.searchParams.set('autoplay', this._autoplay === true ? '1' : '0');
    playerUrl.searchParams.set('mute', this._autoplay === true ? '1' : '0');
    playerUrl.searchParams.set('fs', this._fs === true ? '0' : '1');
    playerUrl.searchParams.set('controls', this._controls === false ? '0' : '1');

    const isPlaylist = playerUrl.pathname.includes('videoseries');
    if (this._loop) {
      playerUrl.searchParams.set('loop', '1');
      if (!isPlaylist) {
        const videoId = playerUrl.pathname.split('/').pop();
        if (videoId) playerUrl.searchParams.set('playlist', videoId);
      }
    } else {
      playerUrl.searchParams.set('loop', '0');
      if (!isPlaylist) playerUrl.searchParams.delete('playlist');
    }

    if (this._start && this._start > 0) {
      playerUrl.searchParams.set('start', this._start.toString());
    } else {
      playerUrl.searchParams.delete('start');
    }
    if (this._end && this._end > 0) {
      playerUrl.searchParams.set('end', this._end.toString());
    } else {
      playerUrl.searchParams.delete('end');
    }

    if (this._ccLoadPolicy) {
      playerUrl.searchParams.set('cc_load_policy', '1');
    } else {
      playerUrl.searchParams.delete('cc_load_policy');
    }

    return playerUrl;
  }

  #onEditorNumberChange(prop: 'start' | 'end', value: string) {
    this[`_${prop}`] = parseInt(value) || 0;
    if (this.value) {
      try {
        this.value = this.#applyParams(new URL(this.value)).toString();
        this.dispatchEvent(new UmbChangeEvent());
      } catch { /* invalid stored URL */ }
    }
  }

  #onEditorToggle(prop: 'nocookie' | 'rel' | 'autoplay' | 'fs' | 'controls' | 'loop' | 'ccLoadPolicy', checked: boolean) {
    this[`_${prop}`] = checked;
    if (this.value) {
      try {
        const playerUrl = new URL(this.value);
        if (prop === 'nocookie') {
          playerUrl.hostname = checked ? 'www.youtube-nocookie.com' : 'www.youtube.com';
        }
        this.value = this.#applyParams(playerUrl).toString();
        this.dispatchEvent(new UmbChangeEvent());
      } catch { /* invalid stored URL, leave as-is */ }
    }
  }

  #onClickVideoDelete = async (ev: Event) => {
    const buttonElement = ev.target as UUIButtonElement;
    buttonElement.state = "waiting";
    this.value = "";
    buttonElement.state = "success";
    this.dispatchEvent(new UmbChangeEvent());
  }

  #onClickSelectVideo = async (ev: Event) => {
    const buttonElement = ev.target as UUIButtonElement;
    buttonElement.state = "waiting";

    const ctx = this.#modalManagerContext?.open(this, MODAL_TOKEN,
      {
        data: {
          headline: 'Choose a video or playlist',
          apiKey: this._apiKey || "",
          channelId: this._channelId || "",
          perPage: this._perPage || 50
        }
      });

    ctx
      ?.onSubmit()
      .then((value) => {
        //console.log("Submitted", value);
        this._handleSubmit(true, value.value as YouTubeItem);
        this.dispatchEvent(new UmbChangeEvent());
      })
      .catch(() => {
        this._handleSubmit(false);
      });

    buttonElement.state = "success";
  }

  render() {
    return html`
        ${this.value != "" && this.value != null && this.value != undefined
      ? html`<div id="video-wrapper">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              style="width: 25rem; height: 15rem"
              src="${this.value}"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>

          <uui-button @click="${this.#onClickVideoDelete}"
            id="video-delete"
            class="element"
            color="warning" look="primary"
            label="Delete"
          >
            Delete
          </uui-button>
        </div>`
      : html`<div id="wrapper">
            ${!this._hasError ? html`
                <uui-button @click="${this.#onClickSelectVideo}"
                  id="video-overlay"
                  class="element"
                  look="primary"
                  label="Select video"
                >
                  Select video
                </uui-button>`
            : html`<p>${this._error}</p>`}
              </div>`}
        ${this._alloweditors ? this.#renderEditorControls() : html``}
    `;
  }

  #renderEditorControls() {
    return html`
      <div id="editor-controls">
        <div id="editor-toggles">
          <uui-toggle ?checked=${this._nocookie} @change=${(e: any) => this.#onEditorToggle('nocookie', e.target.checked)} label="No Cookie"></uui-toggle>
          <uui-toggle ?checked=${this._rel} @change=${(e: any) => this.#onEditorToggle('rel', e.target.checked)} label="Related Videos"></uui-toggle>
          <uui-toggle ?checked=${this._autoplay} @change=${(e: any) => this.#onEditorToggle('autoplay', e.target.checked)} label="Autoplay"></uui-toggle>
          <uui-toggle ?checked=${this._fs} @change=${(e: any) => this.#onEditorToggle('fs', e.target.checked)} label="Prevent Fullscreen"></uui-toggle>
          <uui-toggle ?checked=${this._controls} @change=${(e: any) => this.#onEditorToggle('controls', e.target.checked)} label="Player Controls"></uui-toggle>
          <uui-toggle ?checked=${this._loop} @change=${(e: any) => this.#onEditorToggle('loop', e.target.checked)} label="Loop"></uui-toggle>
          <uui-toggle ?checked=${this._ccLoadPolicy} @change=${(e: any) => this.#onEditorToggle('ccLoadPolicy', e.target.checked)} label="Show Captions"></uui-toggle>
        </div>
        <div id="editor-numbers">
          <div class="number-field">
            <label>Start Time (seconds)</label>
            <uui-input type="number" min="0" .value=${(this._start ?? 0).toString()} @change=${(e: any) => this.#onEditorNumberChange('start', e.target.value)}></uui-input>
          </div>
          <div class="number-field">
            <label>End Time (seconds)</label>
            <uui-input type="number" min="0" .value=${(this._end ?? 0).toString()} @change=${(e: any) => this.#onEditorNumberChange('end', e.target.value)}></uui-input>
          </div>
        </div>
      </div>
    `;
  }

  static styles = [
    css`
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
    `];
}

declare global {
  interface HTMLElementTagNameMap {
    'youtube-picker-property-editor-ui': YoutubePickerElement;
  }
}
