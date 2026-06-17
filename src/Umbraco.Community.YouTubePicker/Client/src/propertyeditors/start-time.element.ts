import { css, html, LitElement, customElement, property, state } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { UMB_PROPERTY_DATASET_CONTEXT } from "@umbraco-cms/backoffice/property";
import { UmbChangeEvent } from "@umbraco-cms/backoffice/event";
import { parseInt } from "../utils/index.js";

@customElement('youtube-picker-start-time')
export default class YoutubePickerStartTimeElement extends UmbElementMixin(LitElement) {

  @property({ type: Number })
  public value: number = 0;

  @state()
  private _endValue: number = 0;

  constructor() {
    super();
    this.consumeContext(UMB_PROPERTY_DATASET_CONTEXT, async (context) => {
      const obs = await context.propertyValueByAlias<number>('end');
      if (obs) {
        this.observe(obs, (endValue) => {
          this._endValue = endValue ?? 0;
        });
      }
    });
  }

  get #validationMessage(): string {
    const start = this.value ?? 0;
    const end = this._endValue ?? 0;
    return start > 0 && end > 0 && start >= end
      ? 'Start time must be less than end time.'
      : '';
  }

  #onChange(e: Event) {
    this.value = parseInt((e.target as HTMLInputElement).value) ?? 0;
    this.dispatchEvent(new UmbChangeEvent());
  }

  render() {
    const message = this.#validationMessage;
    return html`
      <uui-input
        type="number"
        min="0"
        .value=${(this.value ?? 0).toString()}
        ?invalid=${!!message}
        @change=${this.#onChange}>
      </uui-input>
      ${message
        ? html`<uui-form-validation-message>${message}</uui-form-validation-message>`
        : ''}
    `;
  }

  static override styles = css`
    :host { display: block; }
    uui-input { width: 8rem; }
    uui-form-validation-message {
      display: block;
      margin-top: var(--uui-size-1);
      color: var(--uui-color-danger-standalone, #d42054);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'youtube-picker-start-time': YoutubePickerStartTimeElement;
  }
}
