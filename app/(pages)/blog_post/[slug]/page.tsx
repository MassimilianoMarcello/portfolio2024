"use client";



import React, { useState, useEffect } from 'react';
import Header from '@/components/Blog Single Post/Header';
import { getPosts } from "@/sanity/sanity.query"; 
import { PortableText } from '@portabletext/react';
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '@/sanity/sanity.client';
import { getImageDimensions } from '@sanity/asset-utils';
import urlBuilder from '@sanity/image-url';

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
      <img
        src={imageUrl}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          display: isInline ? 'inline-block' : 'block',
          aspectRatio: width / height,
        }}
      />
    );
  };

  const components = {
    types: {
      image: SampleImageComponent,
    },
  };

  return (
    <div>
      {post ? (
        <div>
          <Header title={post.title} image={post.imageURL} />
          <div>
            <PortableText value={post.body} components={components} />
          </div>
        </div>
      ) : (
        <p>Caricamento in corso...</p>
      )}
    </div>
  );
}

export default Post;

