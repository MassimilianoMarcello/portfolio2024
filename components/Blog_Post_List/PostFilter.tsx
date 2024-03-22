import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const PostFilter = ({ posts, setFilteredPosts }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const categories = posts.reduce((allCategories, post) => {
      post.categories.forEach((category) => {
        if (!allCategories.includes(category.title)) {
          allCategories.push(category.title);
        }
      });
      return allCategories;
    }, []);
    setAllCategories(categories);
  }, [posts]);

  useEffect(() => {
    const filteredPosts = posts.filter((post) =>
      selectedCategories.every((category) =>
        post.categories.map((c) => c.title).includes(category)
      )
    );
    setFilteredPosts(filteredPosts);
  }, [selectedCategories, posts, setFilteredPosts]);

  const handleToggleCategory = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((c) => c !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  const handleClearSelection = () => {
    setSelectedCategories([]);
  };

  return (
    <Filter>
      {allCategories.map((category) => (
        <TheButton
          key={category}
          onClick={() => handleToggleCategory(category)}
          style={{
            backgroundColor: selectedCategories.includes(category)
              ? "#feeb64"
              : "#1d3b7a",
            color: selectedCategories.includes(category) ? "#1d3b7a" : "#fff",
          }}
        >
          {category}
        </TheButton>
      ))}
      <ClearButton onClick={handleClearSelection}>Clear</ClearButton>
    </Filter>
  );
};

export default PostFilter;

const Filter = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const TheButton = styled.button`
  font-family: "Arial", sans-serif;
  letter-spacing: 0.07rem;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #feeb64;
  }
`;

const ClearButton = styled.button`
  background-color: white;
  color: #1d3b7a;
  border: 2px solid #1d3b7a;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #feeb64;
    color: #1d3b7a;
  }
`;
