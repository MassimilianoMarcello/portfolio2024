"use client";

import { useState, useEffect } from 'react';
import { getPost } from '@/sanity/sanity.query';

import Link from 'next/link';
import styled from '@emotion/styled';
import Header from '@/components/Blog Posts Grid/Header';
import PostFilter from '@/components/Blog Posts Grid/PostFilter';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getPost();
        setPosts(fetchedPosts);
        setFilteredPosts(fetchedPosts); // Imposta anche i post filtrati come quelli iniziali
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <Section>
      <Header />
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
                <h3>{post.title}</h3>
                <div className="post-details">
                  <span className="author">Author: John Doe</span>
                  <span className="date">Date: Aug. 24, 2015</span>
                  <div className="tags">
                    Tags:
                    <ul>
                      {post.categories.map((category) => (
                        <li key={category.id}>
                          <a href="#">{category.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p>{post.description}</p>
                <ReadMore>
                  <Link href={`/blog_post/${post.slug}`}>Read More</Link>
                </ReadMore>
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

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PostCard = styled.div`
  margin: 1rem;
  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.2s;
  cursor: pointer;
  width: 320px;
  &:hover {
    transform: translateY(-3px);
  }
`;

const PostImage = styled.div`
  height: 200px;
  background-size: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
  .post-details {
    margin-bottom: 0.5rem;
    span {
      margin-right: 1rem;
      font-size: 0.9rem;
    }
    .tags {
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        li {
          margin-right: 0.5rem;
          a {
            text-decoration: none;
            color: #5ad67d;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  p {
    margin-bottom: 0.5rem;
  }
`;

const ReadMore = styled.div`
  a {
    color: #5ad67d;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
