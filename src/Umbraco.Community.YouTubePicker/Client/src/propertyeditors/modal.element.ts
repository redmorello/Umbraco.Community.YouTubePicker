import { css, html, LitElement, customElement, state, property, repeat } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { UmbracoCommunityYouTubePickerService } from "../api";
import { YouTubeItem, YouTubeSearchResult } from "../api/types.gen";
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

  constructor() {
    super();

    this._searchTypes = [
      { name: 'Video', value: 'video', selected: true },
      { name: 'Playlist', value: 'playlist' }
    ];
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

  #renderCard(item: YouTubeItem) {
    //const canNavigate = true; // this.#allowNavigateToMedia(item);
    //const selectable = true; // this._selectableFilter(item);
    //const disabled = false; // !(selectable || canNavigate);

    //class=${ifDefined(disabled ? 'not-allowed' : undefined)}
    //@open=${() => this.#onOpen(item)}
    //@selected=${() => this.#onSelected(item)}
    //@deselected=${() => this.#onDeselected(item)}
    //?selected = ${this.value?.selection?.find((value) => value === item.unique)}
    //?selectable = ${selectable}
    //?select-only=${this._isSelectionMode || canNavigate === false}
    return html`
          <uui-card-media
            .name=${ item.snippet.title }
            data-mark="${item.kind}:${item.id.videoId}"
            class=${this._selectedItem === item ? 'selected' : ''}
            @deselected=${() => this.#onDeselected()}
            @open=${() => this.#onSelected(item)}
            >
          <img
            src="${item.snippet.thumbnails !== null && item.snippet.thumbnails.default !== null ? item.snippet.thumbnails.default.url : ""}"
            alt="${item.snippet.title}" />
          </uui-card-media>
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

  #renderToolbar() {
    return html`
        <div id="toolbar">
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
				gap: var(--uui-size-6);
				align-items: flex-start;
				margin-bottom: var(--uui-size-3);
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
				grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
				grid-auto-rows: 150px;
				gap: var(--uui-size-space-5);
				padding-bottom: 5px; /** The modal is a bit jumpy due to the img card focus/hover border. This fixes the issue. */
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
