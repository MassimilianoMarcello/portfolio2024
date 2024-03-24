"use client";



import React, { useState, useEffect } from 'react';
import Header from '@/components/Blog Single Post/Header';
import { getPosts } from "@/sanity/sanity.query"; 
import { PortableText } from '@portabletext/react';
import styled from '@emotion/styled';
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '@/sanity/sanity.client';
import { getImageDimensions } from '@sanity/asset-utils';
import urlBuilder from '@sanity/image-url';

import theme from '@/app/theme_emotion';


const PostContainer = styled.div`
p{
 font-size:${theme.fontSize.paragraph};
}
`;

const Image = styled.img`


`;

const Post = ({ params }) => {
  const [post, setPost] = useState(null);
  const [client, setClient] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getPosts(params.slug);
      setPost(postData);
    };

    if (!client) {
      const sanityClient = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: false
      });
      setClient(sanityClient);
    }

    fetchPost();
  }, [params.slug, client]);

  const SampleImageComponent = ({ value, isInline }) => {
    const { width, height } = getImageDimensions(value);
    const imageUrl = urlBuilder(client)
      .image(value)
      .width(isInline ? 100 : 800)
      .fit('max')
      .auto('format')
      .url();

    return (
      <Image
        src={imageUrl}
        alt={value.alt || ' '}
        loading="lazy"
     
        width={200}
        height={100}
      />
    );
  };

  const components = {
    types: {
      image: SampleImageComponent,
    },
  };

  return (
    <PostContainer>
      {post ? (
        <div>
          <Header title={post.title} image={post.imageURL} />
          <div>
            <PortableText value={post.body} components={components} />
          </div>
        </div>
      ) : (
        <p>Wait a minute...</p>
      )}
    </PostContainer>
  );
}

export default Post;
