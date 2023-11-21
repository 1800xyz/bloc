import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  publishedAt: Date;
  title: string;
  slug: string;
  image: string;
  url: string;
  body: PortableTextBlock[];
}