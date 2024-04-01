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
          <ContentWrapper>
        
        <TitleContainer className="button-container">
         <UnleashingTheCode className="HowIMade">Unleashing the Code</UnleashingTheCode>
         <PostName className="title-project">{post.title} </PostName>
 
      </TitleContainer> 
       <PostDescription className="project-description">
       <PortableText value={post.body} components={components} />
       </PostDescription>
       
     </ContentWrapper>
       
        </div>
      ) : (
        <p>Wait a minute...</p>
      )}
    </PostContainer>
  );
}

export default Post;


const ContentWrapper = styled.div`

  `;

const TitleContainer =styled.div`
  text-align: center;
  margin-top:4rem;
  border-bottom: 4px solid ${theme.colors.yellow};

`

const UnleashingTheCode=styled.h1`
 font-family:${theme.fontFamily.primaryFont};
    background-color:${theme.colors.blueContrast};
  font-size: 5rem;
    margin-top: 0rem;
    padding-top: 4rem;
    color: ${theme.colors.blueDarkest};
    margin-bottom: 0rem;
    @media screen and (max-width: 600px){
      font-size: 4rem;
    }
`
const PostName =styled.h1`
 font-family:${theme.fontFamily.primaryFont};
    background-color:${theme.colors.blueDarkest} ;
  font-size: 5rem;
  margin-top: 0rem;
    padding: 1rem;
    color: ${theme.colors.blueContrast};
    margin-bottom: 0rem;
    @media screen and (max-width: 600px){
      font-size: 3rem;
    }
`

const PostDescription = styled.div`
  margin: 1rem 3rem;
  color: #333333;
  line-height: 1.6;
  letter-spacing: 0.05em;
  margin-top: 3rem;
  font-size:1.3rem;
`;
