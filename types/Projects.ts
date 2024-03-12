import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _key:string;
  _type:string;
  technologies:string;
  _createdAt: Date;
  _updateAt:Date;
  name: string;
  slug: string;
  image: string;
  imageAlt:string;
  status:string;
  url: string;
  content:PortableTextBlock[];
  githubUrl:string;
}