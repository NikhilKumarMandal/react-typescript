export interface VideoResponse {
  statusCode: number;
  data: Data;
  message: string;
  success: boolean;
}

export interface Data {
  page: number;
  limit: number;
  totalPages: number;
  previousPage: boolean;
  nextPage: boolean;
  totalItems: number;
  currentPageItems: number;
  data: Video[];
}

export interface Video {
  kind: string;
  items: Items;
}

export interface Items {
  kind: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
  standard: Standard;
  maxres: Maxres;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
}

export interface High {
  url: string;
  width: number;
  height: number;
}

export interface Standard {
  url: string;
  width: number;
  height: number;
}

export interface Maxres {
  url: string;
  width: number;
  height: number;
}

export interface Localized {
  title: string;
  description: string;
}

export interface ContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  contentRating: ContentRating;
  projection: string;
}

export interface ContentRating {}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}