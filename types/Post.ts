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
//     imageURL?: string; // Assuming imageURL is optional
//     paragraph: string;
//     asset?: {
//       url: string;
//       // Add other properties of asset if needed
//     };
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
  author: {
    name: string;
    bio: string;
    createdAt: Date;
  };
  body: PortableTextBlock[]; // Utilizzare il nuovo tipo PortableTextBlock
  categories: {
    title: string;
    _id: string;
  }[];
  mainImage: string;
  imageURL:string;
  slug: string;
};

// Definizione di PortableTextBlock
export type PortableTextBlock = {
  _key: string;
  _type: 'block';
  children: PortableTextSpan[];
};

export type PortableTextSpan = {
  _key: string;
  _type: 'span';
  text: string;
  marks: string[]; // Aggiungere i segni necessari
};

// Se hai bisogno di supportare altri tipi di blocchi, aggiungili qui come union type
export type PortableTextBlockType = PortableTextBlock ;

// Aggiungi altre interfacce o tipi se necessario per altri tipi di b