import { UmbModalToken } from "@umbraco-cms/backoffice/modal";
import {YouTubeItem} from "../api";

export interface SidebarData {
  headline: string;
  apiKey:string;
  channelId:string;
  perPage:number;
}

export interface SidebarValue {
  value: YouTubeItem;
}

export const MODAL_TOKEN = new UmbModalToken<SidebarData, SidebarValue>('youtube-picker-modal', {
  modal: {
    type: 'custom',
    size:'medium'
  }
});
