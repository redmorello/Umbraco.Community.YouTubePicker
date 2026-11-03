import { css, html, LitElement, customElement, state, property, repeat, nothing } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { UmbracoCommunityYouTubePickerService } from "../api";
import { YouTubeChannel, YouTubeItem, YouTubeSearchResult } from "../api/types.gen";
import { UmbModalExtensionElement } from '@umbraco-cms/backoffice/modal';
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event';
import type { UmbModalContext } from '@umbraco-cms/backoffice/modal';
import type { SidebarData, SidebarValue } from './modal-token.js';

@customElement('youtube-picker-modal')
export default class YoutubePickerModalElement
  extends UmbElementMixin(LitElement)
  implements UmbModalExtensionElement<SidebarData, SidebarValue> {

  @property({ attribute: false })
  modalContext?: UmbModalContext<SidebarData, SidebarValue>;

  @property({ attribute: false })
  data?: SidebarData;

  @state()
  private _searchQuery = '';

  @state()
  private _searchType = 'video';

  @state()
  private _searchResults: YouTubeSearchResult | null = null;

  @state()
  private _searching: boolean = false;

  @state()
  private _hasResults: boolean = false;

  @state()
  private _searchTypes: Option[];

  @state()
  private _apiKey: string | undefined;

  @state()
  private _channelId?: string;

  @state()
  private _perPage: number = 50;

  @state()
  private _selectedItem?: YouTubeItem;

  @state()
  private _totalResults?: number;

  @state()
  private _previousPageToken?: string;

  @state()
  private _nextPageToken?: string;

  @state()
  private _pageToken?: string;

  @state()
  private _channel?: YouTubeChannel;

  @state()
  private _loadingChannel: boolean = false;

  constructor() {
    super();

    this._searchTypes = [
      { name: 'Video', value: 'video', selected: true },
      { name: 'Playlist', value: 'playlist' }
    ];
  }

  override firstUpdated() {
    this.#loadChannel().then();
  }

  async #loadChannel() {
    const channelId = this.modalContext?.data.channelId;
    if (!channelId) return;

    this._loadingChannel = true;

    try {
      this._channel = await UmbracoCommunityYouTubePickerService.GetChannel(this.modalContext?.data.apiKey, channelId) ?? undefined;
    } catch (error) {
      // the notice falls back to showing the raw channel id
      console.log(error);
      this._channel = undefined;
    }

    this._loadingChannel = false;
  }

  override render() {
    return html`
       <uui-modal-container>
          <uui-modal-sidebar>
            <umb-body-layout headline=${this.modalContext?.data.headline} headline-variant="h5">
            ${this.#renderToolbar()}
				    ${this.#renderBody()}
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

  private _handleCancel() {
    this.modalContext?.reject();
  }

  private _handleSubmit() {
    this.modalContext?.updateValue({ value: this._selectedItem });
    this.modalContext?.submit();
  }

  #onInput(e: InputEvent) {
    this._searchQuery = (e.target as HTMLInputElement).value;
    this.#dispatchChangeEvent();
  }

  #dispatchChangeEvent() {
    this.dispatchEvent(new UmbChangeEvent());
  }

  #onSelected(item : YouTubeItem) {
    this._selectedItem = item;
  }

  #onDeselected() {
    this._selectedItem = undefined;
  }

  #onSearchTypeChange(e:any) {
    this._searchType = e.target.value;
    e.stopPropagation();
  }

  #onPagePrevious() {
    this._pageToken = this._previousPageToken;
    this.dispatchEvent(new UmbChangeEvent());
    this.#onSearch().then();
  }

  #onPageNext() {
    this._pageToken = this._nextPageToken;
    this.dispatchEvent(new UmbChangeEvent());
    this.#onSearch().then();
  }

  #onSearch = async () => {

    this._searching = true;

    this._apiKey = this.modalContext?.data.apiKey;
    this._channelId = this.modalContext?.data.channelId || "";
    this._perPage = this.modalContext?.data.perPage || 25;

    let results = await UmbracoCommunityYouTubePickerService.Search(this._apiKey, this._searchType, this._channelId, this._perPage, this._searchQuery, this._pageToken)
      .then(function (data) {
        return data
      });

    //console.log(results);

    this._searchResults = results;
    if (this._searchResults !== null) {
      this._hasResults = true;

      this._totalResults = this._searchResults?.pageInfo?.totalResults || 0;
      this._nextPageToken = this._searchResults?.nextPageToken;
      this._previousPageToken = this._searchResults?.previousPageToken;
    }

    this._searching = false;
  }

  #renderSearchResults() {
    if (this._searchResults !== null && this._searchResults.items !== null) {
      return html`
          <div id="media-grid">
						${repeat(
        this._searchResults.items,
        (item) => item.id.videoId,
        (item) => this.#renderCard(item),
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
              @click=${this.#onPagePrevious}
            >Prev</uui-button>
            <uui-button
              ?disabled=${this._nextPageToken == null}
              class="element"
              color="positive"
              look="primary"
              label="Next"
              @click=${this.#onPageNext}
            >Next</uui-button>
          </div>
		      `;
    }
}

  // the YouTube search API returns titles HTML-encoded, e.g. Here&#39;s
  #decodeHtml(value: string) {
    return new DOMParser().parseFromString(value, 'text/html').documentElement.textContent ?? value;
  }

  #renderCard(item: YouTubeItem) {
    const title = this.#decodeHtml(item.snippet.title);
    const selected = this._selectedItem === item;

    return html`
          <button
            type="button"
            class="result-card ${selected ? 'selected' : ''}"
            title=${title}
            aria-pressed=${selected}
            data-mark="${item.kind}:${item.id.videoId}"
            @click=${() => selected ? this.#onDeselected() : this.#onSelected(item)}>
            <img
              src="${item.snippet.thumbnails?.medium?.url ?? item.snippet.thumbnails?.default?.url ?? ""}"
              alt=""
              loading="lazy" />
            <span class="result-title">${title}</span>
          </button>
      `;
  }

  #renderNoResults() {
    return html`
            <div class="container">
              <p>No results found.</p>
            </div>
      `;
  }

  #renderBody() {
    return html`
        ${this._hasResults ? this.#renderSearchResults() : this.#renderNoResults()} `;
  }

  #formatCount(value: string) {
    return new Intl.NumberFormat(undefined, { notation: 'compact' }).format(Number(value));
  }

  #renderChannelNotice() {
    const channelId = this.modalContext?.data.channelId;
    if (!channelId) return nothing;

    if (this._loadingChannel) {
      return html`
          <div id="channel-notice">
            <uui-loader-circle></uui-loader-circle>
            <span>Loading channel details...</span>
          </div>
      `;
    }

    const channel = this._channel;
    if (!channel) {
      return html`
          <div id="channel-notice">
            <div class="channel-details">
              <strong>Results are limited to a single channel</strong>
              <span class="channel-meta">Channel ID: ${channelId}</span>
            </div>
          </div>
      `;
    }

    const stats = channel.statistics;
    const avatar = channel.snippet.thumbnails?.default?.url;

    return html`
        <div id="channel-notice">
          ${avatar ? html`<img class="channel-avatar" src=${avatar} alt="" />` : nothing}
          <div class="channel-details">
            <span class="channel-label">Results are limited to this channel</span>
            <a
              class="channel-title"
              href="https://www.youtube.com/channel/${channel.id}"
              target="_blank"
              rel="noopener noreferrer">${channel.snippet.title}</a>
            <span class="channel-meta">
              ${channel.snippet.customUrl ? html`${channel.snippet.customUrl} · ` : nothing}
              ${stats && !stats.hiddenSubscriberCount ? html`${this.#formatCount(stats.subscriberCount)} subscribers · ` : nothing}
              ${stats ? html`${this.#formatCount(stats.videoCount)} videos` : nothing}
            </span>
            ${channel.snippet.description
              ? html`<p class="channel-description">${channel.snippet.description}</p>`
              : nothing}
          </div>
        </div>
    `;
  }

  #renderToolbar() {
    return html`
        <div id="toolbar">
          ${this.#renderChannelNotice()}
          <div id="search">
            <uui-input
              label="Search"
              placeholder="keyword search term..."
              .value=${this._searchQuery}
              @input=${this.#onInput}>
              <div slot="prepend">
                ${this._searching
        ? html`<uui-loader-circle id="searching-indicator"></uui-loader-circle>`
        : html`<uui-icon name="search"></uui-icon>`}
              </div>
            </uui-input>
          </div>
          <div id="type">
            <uui-select
              label="Option"
              placeholder="Select an option"
              .options="${this._searchTypes}"
              @change=${this.#onSearchTypeChange}></uui-select>
          </div>
          <div id="type">
            <uui-button
              label="Search"
              look="primary"
              color="positive"

              ${this._searching ? "disabled='' state='waiting' " : ""}

              @click=${this.#onSearch}
              ></uui-button>
          </div>
        </div>
      `;
  }

  static override styles = [
  css`
			#toolbar {
				display: flex;
				flex-wrap: wrap;
				gap: var(--uui-size-6);
				align-items: flex-start;
				margin-bottom: var(--uui-size-3);
			}

			#channel-notice {
				flex-basis: 100%;
				display: flex;
				align-items: center;
				gap: var(--uui-size-space-4);
				padding: var(--uui-size-space-4) var(--uui-size-space-5);
				background: var(--uui-color-surface-alt);
				border: 1px solid var(--uui-color-border);
				border-left: 4px solid var(--uui-color-selected);
				border-radius: var(--uui-border-radius);
			}

			#channel-notice .channel-avatar {
				flex-shrink: 0;
				width: 48px;
				height: 48px;
				border-radius: 50%;
				background-image: none;
			}

			#channel-notice .channel-details {
				display: flex;
				flex-direction: column;
				min-width: 0;
			}

			#channel-notice .channel-label,
			#channel-notice .channel-meta {
				font-size: var(--uui-type-small-size);
				color: var(--uui-color-text-alt);
			}

			#channel-notice .channel-title {
				font-weight: 700;
				color: var(--uui-color-interactive);
				text-decoration: none;
			}

			#channel-notice .channel-title:hover {
				color: var(--uui-color-interactive-emphasis);
				text-decoration: underline;
			}

			#channel-notice .channel-description {
				margin: var(--uui-size-space-1) 0 0;
				font-size: var(--uui-type-small-size);
				display: -webkit-box;
				-webkit-line-clamp: 4;
				-webkit-box-orient: vertical;
				overflow: hidden;
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
				grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
				align-items: start;
				gap: var(--uui-size-space-5);
				padding-bottom: 5px; /** The modal is a bit jumpy due to the img card focus/hover border. This fixes the issue. */
			}

			.result-card {
				display: flex;
				flex-direction: column;
				width: 100%;
				padding: 0;
				font: inherit;
				text-align: left;
				color: var(--uui-color-interactive);
				background: var(--uui-color-surface);
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
				overflow: hidden;
				cursor: pointer;
			}

			.result-card:hover {
				color: var(--uui-color-interactive-emphasis);
				border-color: var(--uui-color-border-emphasis);
			}

			.result-card:hover .result-title {
				text-decoration: underline;
			}

			.result-card:focus-visible {
				outline: 2px solid var(--uui-color-focus);
				outline-offset: 2px;
			}

			.result-card.selected {
				border-color: var(--uui-color-selected);
				box-shadow: 0 0 0 2px var(--uui-color-selected);
			}

			.result-card img {
				display: block;
				width: 100%;
				aspect-ratio: 16 / 9;
				object-fit: cover;
			}

			.result-title {
				padding: var(--uui-size-space-3) var(--uui-size-space-4);
				font-weight: 700;
				line-height: 1.3;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
				overflow: hidden;
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
		`,
];
}

declare global {
  interface HTMLElementTagNameMap {
    'youtube-picker-modal-ui': YoutubePickerModalElement;
  }
}
