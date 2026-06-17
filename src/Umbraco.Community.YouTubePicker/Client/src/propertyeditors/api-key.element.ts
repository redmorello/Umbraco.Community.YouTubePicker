import { css, html, LitElement, customElement, property, state } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { UmbChangeEvent } from "@umbraco-cms/backoffice/event";

@customElement('youtube-picker-api-key')
export default class YoutubePickerApiKeyElement extends UmbElementMixin(LitElement) {

  @property({ type: String })
  public value: string = '';

  @state()
  private _touched = false;

  #onInput(e: InputEvent) {
    this.value = (e.target as HTMLInputElement).value;
    this.dispatchEvent(new UmbChangeEvent());
  }

  #onBlur() {
    this._touched = true;
  }

  render() {
    const invalid = this._touched && !this.value?.trim();
    return html`
      <uui-input
        type="text"
        .value=${this.value ?? ''}
        ?invalid=${invalid}
        @input=${this.#onInput}
        @blur=${this.#onBlur}>
      </uui-input>
      ${invalid
        ? html`<uui-form-validation-message>A YouTube API Key is required.</uui-form-validation-message>`
        : ''}
    `;
  }

  static override styles = css`
    :host { display: block; }
    uui-input { width: 100%; }
    uui-form-validation-message {
      display: block;
      margin-top: var(--uui-size-1);
      color: var(--uui-color-danger-standalone, #d42054);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'youtube-picker-api-key': YoutubePickerApiKeyElement;
  }
}
