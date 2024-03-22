import { groq } from "next-sanity";
import client from "./sanity.client";
import { Project } from "@/types/Projects";
import { Post } from "@/types/Post";
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
      author,
      categories[]->{title,description,_createdAt,_updatedAt,_id},

      "imageBlog":body[0].asset->url,
     name,
      _ref,
     _type,
     "body":body[].children[].text,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
        //     postContent[] {
  //   title,
  //   "imageURL": image.asset->url, 
  //   paragraph
  // } ,
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
      title,
      author->,
      postContent[] {
    title,
    "imageURL": image.asset->url, 
    paragraph
  } ,
      "imageBlog":body[0].asset->url,
      _id,
      name,
      _ref,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
    }`,
    { slug },
    {
      next: {
        revalidate: 61,
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
       }
    
    `,
    {
      next: {
        revalidate: 67,
      },
    }
  );
}
