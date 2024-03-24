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


// types.ts

// Definizione del tipo per l'oggetto autore
export interface Author {
  name: string;
  bio: string;
  _createdAt: string;
}

// Definizione del tipo per l'oggetto categoria
export interface Category {
  title: string;
  _Id: string;
}

// Definizione del tipo per un singolo blocco di testo all'interno del campo Portable Text
export interface TextBlock {
  _key: string;
  _type: 'block';
  children: Array<TextSpan>;
  style?: string;
  markDefs?: Array<any>;
}

// Definizione del tipo per un singolo frammento di testo all'interno di un blocco di testo
export interface TextSpan {
  _key: string;
  _type: 'span';
  text: string;
  marks?: Array<any>;
}

// Definizione del tipo per un'immagine all'interno del campo Portable Text
export interface ImageBlock {
  _key: string;
  _type: 'image';
  asset: {
    _ref: string;
  };
}

// Definizione del tipo per un link all'interno del campo Portable Text
export interface LinkBlock {
  _key: string;
  _type: 'link';
  href: string;
}

// Definizione del tipo per un singolo post
export interface Post {
  _id: string;
  title: string;
  author: Author;
  body: Array<TextBlock | ImageBlock | LinkBlock>;
  categories: Array<Category>;
  imageURL: string;
  slug: string;
  mainImage: string;
  plaintext?: string; // Campo opzionale per il testo normale
  images?: Array<string>; // Campo opzionale per gli URL delle immagini
  links?: Array<string>; // Campo opzionale per gli URL dei link
}
