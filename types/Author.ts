import { PortableTextBlock } from "sanity";

export type Author = {
    author:string,
    _id: string;
    createdAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
  }