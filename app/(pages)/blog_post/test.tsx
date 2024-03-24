// "use client"



// import { useState, useEffect } from 'react';
// import { getPost } from '@/sanity/sanity.query';
// import Image from 'next/image';
// import Link from 'next/link';
// import styled from '@emotion/styled';
// import Header from '@/components/Blog Posts Grid/Header';
// import PostFilter from '@/components/Blog Posts Grid/PostFilter';

// export default function PostList() {
//   const [posts, setPosts] = useState([]);
//   const [filteredPosts, setFilteredPosts] = useState([]);

//   useEffect(() => {
//     async function fetchPosts() {
//       try {
//         const fetchedPosts = await getPost();
//         setPosts(fetchedPosts);
//         setFilteredPosts(fetchedPosts); // Imposta anche i post filtrati come quelli iniziali
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     }

//     fetchPosts();
//   }, []);

//   return (
//     <Section>
//       <Header />
//       <PostFilter posts={posts} setFilteredPosts={setFilteredPosts} />
//       <PostContainer className="post-container">
//         {filteredPosts.map((post) => (
          
//           <li key={post._id} className="post-list">
//             <Link href={`/blog_post/${post.slug}`} key={post._id} className="post-link">
//               <PostContent className="post-content">
//                 <h3>{post.title}</h3>
//                 {post.mainImage && (
//                   <Image
//                     src={post.mainImage}
//                     alt={post.title}
//                     width={350}
//                     height={300}
//                     className="post-image"
//                   />
//                 )}
//               </PostContent>

//               <div className="post-categories">
//                 Categories: {post.categories.map((category) => category.title).join(', ')}
//               </div>
//               <div className="post-name">{post.title}</div>
//             </Link>
//           </li>
//         ))}
//       </PostContainer>
 
   
//     </Section>
//   );
// }

// const Section = styled.section`
//   background-color: #171d35;
//   height: 100vh;
//   margin-left: -1rem;
//   margin-right: -1rem;
//   margin: 0 -1rem;
//   @media (max-width: 600px) {
//     height: 220vh;
//   }
// `;

// const PostContent = styled.div`
//   position: relative;
//   img {
//     position: absolute;
//     top: 0;
//     left: 0;
//     margin-top: -2rem;
//     margin-left: 0rem;
//   }
//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const PostContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   padding-top: 20rem;
//   text-align: center;
//   grid-auto-flow: column;
//   .post-list {
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     overflow: hidden;
//     transition: transform 0.3s ease;
//     height: 20rem;
//     width: 20rem;
//     margin: 2rem;
//     border-left: solid 0.7rem #feeb64;
//     background-color: #f0fff4;
//     list-style-type: none;
//     font-size: 3rem;
//     align-items: center;
//     color: #afae7f;
//     font-family: 'Amatic SC', sans-serif;
//     &:hover {
//       transform: scale(1.05);
//     }
//   }
//   .post-link {
//     text-decoration: none;
//   }
//   @media (max-width: 600px) {
//     padding-top: 12rem;
//     flex-direction: column;
//   }
// `;
