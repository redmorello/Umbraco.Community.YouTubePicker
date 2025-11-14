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

  //@state()
  //private _alloweditors?: boolean;

  @state()
  private _nocookie?: boolean;

  @state()
  private _rel?: boolean;

  @state()
  private _modestbranding?: boolean;

  @state()
  private _autoplay?: boolean;

  @state()
  private _fs?: boolean;

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
    //this._alloweditors = parseBoolean(config.getValueByAlias('alloweditors')) || false;
    this._nocookie = parseBoolean(config.getValueByAlias('nocookie')) || false;
    this._rel = parseBoolean(config.getValueByAlias('rel')) || false;
    this._modestbranding = parseBoolean(config.getValueByAlias('modestbranding')) || false;
    this._autoplay = parseBoolean(config.getValueByAlias('autoplay')) || false;
    this._fs = parseBoolean(config.getValueByAlias('fs')) || false;

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
      // modalManagerContext is now ready to be used.
    });
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

      const playerUrl = new URL(url);
      playerUrl.searchParams.set('rel', this._rel === true ? '1' : '0');
      playerUrl.searchParams.set('modestbranding', this._modestbranding === true ? '1' : '0');
      playerUrl.searchParams.set('autoplay', this._autoplay === true ? '1' : '0');
      playerUrl.searchParams.set('fs', this._fs === true ? '1' : '0');
      this.value = playerUrl.toString();

      //console.log("Player url: " + this.value);
    }else{
      //console.log("Cancelled");
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
    `];
}

declare global {
  interface HTMLElementTagNameMap {
    'youtube-picker-property-editor-ui': YoutubePickerElement;
  }
}
