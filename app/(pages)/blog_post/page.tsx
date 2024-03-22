"use client"



import { getPost } from "@/sanity/sanity.query";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

export default async function PostList() {
  const posts = await getPost();

  return (
    <Section>
<TextContainer>
<p className="greeting">Hello everyone! Check out my blog!</p>
      <h2 className="section-title">My Posts</h2>


</TextContainer>
      
      <PostContainer className="post-container">
        {posts.map((post) => (
           <li key={post._id} className="post-list">
            <Link
            href={`/blog_post/${post.slug}`}
            key={post._id}
            className="post-link"
          >
            <PostContent className="post-content">
            <h3>{post.title}</h3>
            {post.mainImage && (
              <Image
                src={post.mainImage}
                alt={post.title}
                width={350}
                height={300}
                className="post-image"
              />
            )}
            </PostContent>
          
           
            
            <div className="post-name">{post.title}</div>
          </Link>
           </li>
          
        ))}
      </PostContainer>
    </Section>
  );
}

const Section = styled.section`
  /* background: url("/decoration_logoe.png") repeat;
  background-size: 60px 60px; */
  background-color: #171d35;
  height: 100vh;
  margin-left: -1rem;
  margin-right: -1rem;
  margin: 0 -1rem;
  @media (max-width: 600px) {
    height: 220vh;
  }
`;





const PostContent = styled.div`
position: relative;
img{
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -2rem;
  margin-left:0rem;
}
&:hover {
      transform: scale(1.05);
    }
`

const TextContainer = styled.div`
  text-align: center;
  color: #0f2556;
  margin: 5rem auto;
  font-family: "Amatic SC", sans-serif;

  padding-top: 1rem;

  background-color: #0f2556;
  background-color: #feeb64;
  box-shadow: 0 8px 32px 0 rgba(7, 12, 74, 0.37);

  border-bottom-right-radius: 3rem;
  border-bottom-left-radius: 3rem;
  
  .greeting {
    margin-top: -1rem;
    font-size: 1.7rem;
  }

  .section-title {
    font-size: 3rem;
    margin-top: -2.5rem;
    padding: 0;
    color: #b29d6e;
    margin-bottom: 0rem;
  }
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 999;
  @media (max-width: 600px) {
    margin-top: 5.1rem;

    .section-title {
      font-size: 2rem;
      margin-top: -2rem;
      padding: 0;
      color: #b29d6e;
    }
  }
`;



const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 20rem;

  text-align: center;


  grid-auto-flow: column;
  .post-list {
  
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    height: 20rem;
    width: 20rem;
    margin: 2rem;
    /* border-left: solid 1rem rgba(2, 6, 52, 0.8); */
    border-left: solid .7rem   #feeb64;
  
    background-color: #f0fff4;
    list-style-type: none;
    font-size:3rem;
    align-items:center;
    color:#afae7f;
    font-family: "Amatic SC", sans-serif;
    &:hover {
      transform: scale(1.05);
    }
  }
  .post-link{
    text-decoration:none;
  }
  /* .project-image {
    width: 100%;
    height: 100%;
  } */
  @media (max-width: 600px) {
    padding-top: 12rem;
    flex-direction: column;
    
  }
`;