"use client";

import { useState, useEffect } from "react";
import { getPost } from "@/sanity/sanity.query";
import theme from "@/app/theme_emotion";

import Link from "next/link";
import styled from "@emotion/styled";
import HeaderSection from "@/components/Blog Posts Grid/HeaderSection";
import PostFilter from "@/components/Blog Posts Grid/PostFilter";
import MediumBlueBorder from "@/components/borders/MediumBlueBorder";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getPost();
        setPosts(fetchedPosts);
        setFilteredPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <Section>
      <HeaderSection />
      <MediumBlueBorder />
      <PostFilter posts={posts} setFilteredPosts={setFilteredPosts} />
      <PostContainer>
        {filteredPosts.map((post) => (
          <PostCard key={post._id}>
            <Link href={`/blog_post/${post.slug}`} className="post-link">
              <PostImage
                style={{ backgroundImage: `url(${post.mainImage})` }}
                className="post-image"
              />
              <CardContent>
                <AuthorData>
                  <p className="author">{post.author.name}</p>
                  <p className="date"> Aug. 24, 2015</p>
                </AuthorData>

                <Title>{post.title}</Title>
                <PostDetails className="post-details">
                  <TopicPost>
                    <li>
                      <p>Tags:</p>
                    </li>

                    {post.categories.map((category) => (
                      <li key={category.id}>
                        <a href="#">{category.title}</a>
                      </li>
                    ))}
                  </TopicPost>
                </PostDetails>
                <p>{post.description}</p>
              </CardContent>
            </Link>
          </PostCard>
        ))}
      </PostContainer>
    </Section>
  );
}

const Section = styled.section`
  background-color: #f1f1f1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AuthorData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -1rem;
`;

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
`;

const PostCard = styled.div`
  margin: 1rem;
  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 5px;
  /* overflow: hidden; */
  transition: transform 0.2s;
  cursor: pointer;
  height: auto;
  width: 20rem;
  &:hover {
    transform: translateY(-3px);
  }
`;

const PostImage = styled.div`
  height: 14rem;
  background-size: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
  text-decoration: none;
  font-family: ${theme.fontFamily.customFont};
  letter-spacing: 0.07rem;
  cursor: pointer;
  font-weight: 700;
  color: ${theme.colors.blueDark};
  background-color: ${theme.colors.white};
  display: inline-block;
  height: auto;

  .post-details {
    margin-bottom: 0.5rem;

    .tags {
    }
  }
  p {
    margin-bottom: 0.5rem;
  }
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  margin: 2rem auto;
  height: 5rem;
  font-size: 1.5rem;
`;

const TopicPost = styled.div`
  list-style-type: none;
  /* padding: 0;
  margin: 0; */
  margin-bottom: 0;
  padding-bottom: 0;

  display: flex;

  align-items: center;
  justify-content: flex-end;
  /* flex-wrap: wrap; */
  p {
    margin-bottom: 1rem;
    margin-left: 0.4rem;
  }
  li {
    margin-right: 0.5rem;

    a {
      font-family: ${theme.fontFamily.headersFont};
      letter-spacing: 0.07rem;

      border: none;
      border-radius: 0.5rem;
      transition: background-color 0.3s ease, color 0.3s ease;
      cursor: pointer;
      margin-bottom: -4rem;
      margin-top: 1rem;

      font-size: 0.6rem;
      font-weight: 700;

      display: inline-block;
      padding: 0.5rem;

      color: ${theme.colors.blueDark};
      text-decoration: none;
      background-color: ${theme.colors.azure};

      transition: all 0.3s ease;
      &:hover {
        color: ${theme.colors.yellow};
      }
    }
  }
`;

const PostDetails = styled.div`
  display: flex;
  flex-direction: row;

  margin-right: 1rem;
  font-size: 0.9rem;
`;
