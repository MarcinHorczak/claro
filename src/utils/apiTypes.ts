export enum EndpointName {
  Workshops = "workshops",
  MeetingsCategories = "meeting-categories",
  Meetings = "meetings",
}

type ImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

type Image = {
  id: string;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Workshop = {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  key: string;
  image: Image;
  active: boolean;
};

export type Meeting = {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  key: string;
  image: Image;
  registrationLink: string;
  startDate: string;
  endDate: string;
  active: boolean;
};

export type MeetingCategory = {
  id: string;
  name: string;
  description: string;
  location: string;
  meetings: Meeting[];
  active: boolean;
};
