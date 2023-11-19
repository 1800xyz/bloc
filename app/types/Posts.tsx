import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  publishedAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  body: PortableTextBlock[];
}