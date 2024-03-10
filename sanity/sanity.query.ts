import { groq } from "next-sanity";
import client from "./sanity.client";
// import { Project } from "@/types/Projects";
// import { Post } from "@/types/Post";
import { AboutMe } from "@/types/AboutMe";

// export async function getProjects(): Promise<Project[]> {
//   return client.fetch(
//     groq`*[_type == "project"]{
//       _id,
//       _createdAt,
//       name,
//       "slug": slug.current,
//       "image": image.asset->url,
//       url,
//       content,
//       githubUrl,
  

//     }`,
//     {
//       next: {
//         revalidate: 63,
//       },
//     }
//   );
// }

// export async function getProject(slug: string): Promise<Project> {
//   return client.fetch(
//     groq`*[_type == "project" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       name,
//       "slug": slug.current,
//       "image": image.asset->url,
//       url,
//       content,
//       githubUrl
//     }`,
//     { slug },
//     {
//       next: {
//         revalidate: 63,
//       },
//     }
//   );
// }

// export async function getPost(): Promise<Post[]> {
//   return client.fetch(
//     groq`*[_type == 'post' ] {
//        _id,
//       title,
//       author,
//       postContent[] {
//     title,
//     "imageURL": image.asset->url, 
//     paragraph
//   } ,
//   "body":body[].children[].text,
//       "imageBlog":body[0].asset->url,
//      name,
//       _ref,
//      _type,
//       "slug": slug.current,
//       "mainImage": mainImage.asset->url,
//     }`,
//     {
//       next: {
//         revalidate: 63,
//       },
//     }
//   );
// }

// export async function getPosts(slug: string): Promise<Post> {
//   return client.fetch(
//     groq`*[_type == 'post' && slug.current == $slug][0]{
//       title,
//       author->,
//       postContent[] {
//     title,
//     "imageURL": image.asset->url, 
//     paragraph
//   } ,
//       "imageBlog":body[0].asset->url,
//       _id,
//       name,
//       _ref,
//       "slug": slug.current,
//       "mainImage": mainImage.asset->url,
//     }`,
//     { slug },
//     {
//       next: {
//         revalidate: 61,
//       },
//     }
//   );
// }

export async function getAboutMe(): Promise<AboutMe[]> {
  return client.fetch(
    groq`*[_type == 'aboutMe' ]{
      _id,
        _type,
        description,
        "socialLinks":socialLinks[]{platform,url,"socialIconImage":icon.asset->url},
         "skillsName":skills[]{"skillIconImage":icon.asset->url,name},
          "profileImage":profileImage.asset->url,
        
    }
    
    `,
    {
      next: {
        revalidate: 68,
      },
    }
  );
}
