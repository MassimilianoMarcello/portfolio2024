// import { PortableTextBlock } from "sanity";

// export type Post = {
//   [x: string]: any;
//     title:string,
//   _id: string;
//   createdAt: Date;
//   name: string;
//   slug: string;
//   mainImage: string;
//   url: string;
//   content:string;
//   author:string;
//   body:string;
//   blockContent:string;
//   bio:string;
//   imageBlog:string;

//   postContent: {
//     title: string;
//     imageURL: string;  
//     paragraph: string;
//   }[];
// }

// import { PortableTextBlock } from "sanity";

// export type Post = {
//     title:string,
//   _id: string;
//   createdAt: Date;
//   name: string;
//   slug: string;
//   mainImage: string;
//   url: string;
//   content:string;
//   author:string;
//   body:string;
//   blockContent:string;
//   bio:string;
//   imageBlog:string;

//   postContent: {
//     title: string;
//     imageURL: string;  
//     paragraph: string;
//   }[];
// }

// export type Post = {
//   _id: string;
//   title: string;
//   createdAt: Date;
//   author: {
//     name: string;
//     bio: string;
//     createdAt: Date;
//   };
//   body: {
//     title: string;
//     imageURL: string;
//     paragraph: string;
//   }[];
//   categories: {
//     title: string;
//     _id: string;
//   }[];
//   mainImage: string;
//   slug: string;
// };



export type Post = {
  _id: string;
  title: string;
  createdAt: Date;
  author: {
    name: string;
    bio: string;
    createdAt: Date;
  };
  body: {
    title: string;
    imageURL?: string; // Assuming imageURL is optional
    paragraph: string;
    asset?: {
      url: string;
      // Add other properties of asset if needed
    };
  }[];
  categories: {
    title: string;
    _id: string;
  }[];
  mainImage: string;
  slug: string;
};


