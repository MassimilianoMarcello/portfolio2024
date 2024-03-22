
"use client"


import React, { useEffect, useState } from 'react';

import { getPost } from '@/sanity/sanity.query';



const PostList = ({ posts }) => {
    return (
      <div>
        <h1>Lista dei Post</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
          {posts.map((post) => (
            <div key={post._id}>
              {post.mainImage && (
                <img src={post.mainImage.asset.url} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              )}
              <h2>{post.title}</h2>
              <p>Data di creazione: {post._createdAt && new Date(post._createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PostList;