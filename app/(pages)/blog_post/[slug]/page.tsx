"use client";



// import PortableText from "@sanity/block-content-to-react";
import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";
import Image from "next/image";
import { useState, useEffect } from 'react';
import Header from '@/components/Blog Single Post/Header';

import { getPosts } from "@/sanity/sanity.query"; 
import {PortableText} from '@portabletext/react'
import { Post as PostType } from '@/types/Post'; 



interface Props {
  params: {
    slug: string;
  };
}

const Post = ({ params }: Props) => {
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getPosts(params.slug);
      setPost(postData);
    };

    fetchPost();
  }, [params.slug]);

  return (
    <div>
      {post ? (
        <div>
          <Header title={post.title} image={post.imageURL} />
          <div>
            {/* Utilizza il componente PortableText per renderizzare il contenuto del campo body */}
            <PortableText value={post.body} />
          </div>
        </div>
      ) : (
        <p>Caricamento in corso...</p>
      )}
    </div>
  );
}

export default Post;
