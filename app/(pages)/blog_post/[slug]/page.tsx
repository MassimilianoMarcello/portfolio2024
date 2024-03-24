"use client";

import { getPosts } from "@/sanity/sanity.query";
import PortableText from "@sanity/block-content-to-react";
import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";
import Image from "next/image";
import Header from '@/components/Blog Single Post/Header';

type Props = {
  params: { slug: string };
};

const PostWrapper = styled.section`
  margin-top: 6rem;
`;

const Paragraph = styled.section`
  // Stili del paragrafo
`;

const StyledPortableText = styled(PortableText)`
  /* Altri stili globali */

  /* Stili per i tag h1 */
  h1 {
    font-size: 2rem;
    font-weight: bold;
    /* Altri stili desiderati */
  }

  /* Stili per i tag h2 */
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    /* Altri stili desiderati */
  }

  /* Stili per i tag h3 */
  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    /* Altri stili desiderati */
  }

  /* Stili per i tag h4 */
  h4 {
    font-size: 1rem;
    font-weight: bold;
    /* Altri stili desiderati */
  }

  /* Stili per i tag blockquote */
  blockquote {
    /* Stili desiderati per blockquote */
  }

  /* Stili per i tag di elenchi */
  ul, ol {
    /* Stili desiderati per elenchi */
  }

  /* Stili per i tag dei paragrafi */
  p {
   font-size:2rem;
  }

  /* Stili per i tag di forte enfasi */
  strong {
    /* Stili desiderati per strong */
  }

  /* Stili per i tag di enfasi */
  em {
    /* Stili desiderati per em */
  }

  /* Stili per i tag di collegamento */
  a {
    /* Stili desiderati per i collegamenti */
  }
`;


export default async function Post({ params }: Props) {
  const post = await getPosts(params.slug);

  return (
    <PostWrapper>
   <Header title={post.title} image={post.imageURL}/>
    

      {/* Paragrafo */}
      <Paragraph>
        {/* Testo del paragrafo */}
        <StyledPortableText
  blocks={post.body}
  projectId="53nq60u1"
  dataset="production"
  theme={theme}
  components={{
    block: {
      h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
      customHeading: ({ children }) => (
        <h2 className="text-lg text-primary text-purple-700">
          {children}
        </h2>
      ),
      image: ({ node }) => (
        <Image
          src={node.asset.url}
          alt={node.alt}
          className="image"
          height={100}
          width={1400}
        />
      )
    },
  }}
/>
      </Paragraph>
    </PostWrapper>
  );
}
