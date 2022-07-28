import { BaseRecord } from "@pankod/refine-core";

export interface ICategory {
  id: number;
  title: string;
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  status: "published" | "draft" | "rejected";
  createdAt: string;
  category: { id: number };
}

export interface IEpisode {
  position: number;
  id: string;
  licensorEpisodeId: string?;
  seriesId: string;
  title: string;
  kind: string;
  description: string;
  duration: string;
  publishedAt: string;
  thumbnailUrl: string;
  autoThumbnailUrls: string[];
  mediaUrl: string;
  seasonNumber: number;
  episodeNumber: number;
}

export interface ISeries extends BaseRecord {
  id: string;
  title: string;
  thumbnailUrl: string;
  mode: string;
  developmentAreaMain: any;
  developmentAreaSub: any;
  reviewed: boolean;
  licensorSeriesId: string;
  ageMin: number;
  ageMax: number;
  episodes: IEpisode[];
}

export interface IInternalSeriesResponse {
  result: ISeries[];
}