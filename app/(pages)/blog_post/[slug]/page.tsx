"use client";

import { getPosts } from "@/sanity/sanity.query";
// import { PortableText } from "@portabletext/react";
import PortableText from '@sanity/block-content-to-react';


import styled from "@emotion/styled";

type Props = {
  params: { slug: string };
};
const PostWrapper = styled.section`
  margin-top: 6rem;
`;

const TitleWrapper = styled.section`
  height: 20rem;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Amatic SC", sans-serif;
  color: #b29d6e;
  padding-top: 1rem;

  .title-project {
    position: absolute;
    background-color: #0f2556;
    padding: 1rem;
    z-index: 1;
    font-size: 3rem;
    box-shadow: 0 8px 32px 0 rgba(7, 12, 74, 0.37);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .image-project {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(2px);
  }
  @media (min-width: 600px) {
    .title-project {
      font-size: 5rem;
    }
  }
`;

const Paragraph = styled.section`
  background-color: white;
  padding: 2rem 10%;
  margin: auto 10rem;
  margin-top: 2rem;
  position: relative;
  h2 {
    font-size: 2.5rem;
  }
  img {
    width: 100%;
    height: 40rem;
  }
  p {
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    background-color: white;
    padding: 2rem 10%;
    margin: auto 0rem;
    margin-top: 2rem;
    position: relative;
    h2 {
      font-size: 2rem;
    }
    img {
      width: 100%;
      height: 20rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
export default async function Post({ params }: Props) {
  const post = await getPosts(params.slug);

  return (
    <PostWrapper>
      <TitleWrapper>
        <h1 className="title-project">{post.title}</h1>
        <img src={post.mainImage} alt="imagine" className="image-project" />
      </TitleWrapper>
      <Paragraph>
        {/* Utilizza PortableText per il rendering del corpo del post */}
        <PortableText blocks={post.body} />
      </Paragraph>
    </PostWrapper>
  );
  }  