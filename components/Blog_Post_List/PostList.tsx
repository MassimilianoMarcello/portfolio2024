"use client"



import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import HeaderSection from "./Header";
import PostFilter from "./PostFilter"; // Importa il componente PostFilter

import { getPost } from "@/sanity/sanity.query";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPost();
      setPosts(allPosts);
      setFilteredPosts(allPosts); // Inizialmente, i post filtrati sono gli stessi di quelli non filtrati
    };

    fetchPosts();
  }, []);

  const handleFilteredPosts = (filteredPosts) => {
    setFilteredPosts(filteredPosts);
  };

  return (
    <Section>
      <HeaderSection />
      <PostFilter posts={posts} setFilteredPosts={handleFilteredPosts} /> {/* Passa i dati dei post e la funzione per gestire i post filtrati */}
      <PostContainer className="post-container">
        {filteredPosts.map((post) => (
          <PostCard key={post._id}>
            <Link href={`/blog_post/${post.slug}`} key={post._id} className="post-link">
              <PostContent className="post-content">
                <h3>{post.title}</h3>
                {post.mainImage && (
                  <ImageWrapper>
                    <Image
                      src={post.mainImage}
                      alt={post.title}
                      width={350}
                      height={300}
                      className="post-image"
                    />
                  </ImageWrapper>
                )}
              </PostContent>
              {post.categories.map((category, index) => (
                <span key={index}>{category.title}</span>
              ))}
              <PostName>{post.name}</PostName>
            </Link>
          </PostCard>
        ))}
      </PostContainer>
      <Footer>Questo è il footer</Footer>
    </Section>
  );
}

const Section = styled.section`
  background-color: #171d35;
  min-height: 100vh; /* Assicura che il contenuto riempia almeno tutta l'altezza della viewport */
  display: flex;
  flex-direction: column;
`;

const PostContainer = styled.div`
  flex: 1; /* Il contenuto dei post occupa lo spazio disponibile */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const PostCard = styled.div`
  min-width: 30rem;
  max-width: 40rem;
  max-height: 30rem;
  margin: 4rem;
  background-color: #fff;
  border: 0.2rem solid #afae7f;
  transition: all 0.2s ease;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: 14px 14px 0 -4px black, 14px 14px 0 0 black;
`;

const PostContent = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  margin-bottom: 1rem; /* Aggiunge spaziatura sotto l'immagine */
`;

const PostName = styled.div`
  margin: 0.5rem 0;
  margin-left: 0.5rem;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem 0;
  background-color: #0f2556;
  color: #fff;
`;
