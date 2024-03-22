import { PortableTextBlock } from "sanity";

export type Post = {
  [x: string]: any;
    title:string,
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  mainImage: string;
  url: string;
  content:string;
  author:string;
  body:string;
  blockContent:string;
  bio:string;
  imageBlog:string;

  postContent: {
    title: string;
    imageURL: string;  
    paragraph: string;
  }[];
}