import { groq } from "next-sanity";
import client from "./sanity.client";
import { Project } from "@/types/Projects";
import  {Post}  from "@/types/Post";
import { AboutMe } from "@/types/AboutMe";

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"]{
name,
    _id,
     _key,
      technologies,
    _createdAt,
    _updatedAt,
   _type,
   url,
    githubUrl,
   "slug": slug.current,
    // 'content': content[].children[].text,
    content,
     'image' :image.asset->url,
     'imageAlt':image.alt,
  status, 
   }`,
    {
      next: {
        revalidate: 63,
      },
    }
  );
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      author->,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      githubUrl
    }`,
    { slug },
    {
      next: {
        revalidate: 63,
      },
    }
  );
}

export async function getPost(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == 'post' ] {
      _id,
      title,
      author->{name, "bio":bio[].children[].text,_createdAt},
      "body": body[]{
        ...,
        _type == 'block' => {
          ...,
          "children": children[]{
            ...,
            _type == 'span' => {
              ...,
              "marks": marks[]->{
                _type,
              }
            },
            _type == 'image' => {
              ...,
              "asset": asset->{
                ...
              }
            },
            _type == 'link' => {
              ...,
              "href": href
            }
          }
        }
      },
      categories[]->{title,_Id},
      "imageURL": mainImage.asset->url,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      // Aggiungi campi separati per le immagini e i link
      "images": body[][_type == 'image'].asset->url,
      "links": body[][_type == 'link'].href
    }`,
    {
      next: {
        revalidate: 63,
      },
    }
  );
}


export async function getPosts(slug: string): Promise<Post> {
  return client.fetch(
    groq`*[_type == 'post' && slug.current == $slug][0]{
      _id,
      title,
      author->{name, "bio":bio[].children[].text,_createdAt},
      "body": body[]{
        ...,
        _type == 'block' => {
          ...,
          "children": children[]{
            ...,
            _type == 'span' => {
              ...,
              "marks": marks[]->{
                _type,
              }
            },
            _type == 'image' => {
              ...,
              "asset": asset->{
                ...
              }
            },
            _type == 'link' => {
              ...,
              "href": href
            }
          }
        }
      },
      categories[]->{title,_Id},
      "imageURL": mainImage.asset->url,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      // Aggiungi campi separati per le immagini e i link
      "images": body[][_type == 'image'].asset->url,
      "links": body[][_type == 'link'].href
    }`,
     {slug},
    {
      next: {
        revalidate: 63,
      },
    }
  );
}

export async function getAboutMe(): Promise<AboutMe[]> {
  return client.fetch(
    groq`*[_type == 'aboutMe' ]{
      _id,
      _type,
      description,
      "skillsName":skills[]{"skillIconImage":icon.asset->url,name},
    }`,
    {
      next: {
        revalidate: 67,
      },
    }
  );
}


