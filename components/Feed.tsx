"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }: any) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post: any) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText] = useState<string>("");
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const res = await fetch("/api/prompt");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPrompts();
  }, []);

  const handleSearchChange = (e: any) => {};
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
