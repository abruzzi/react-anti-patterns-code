import React, { useState, useEffect } from "react";
import fetchPostById from "./fetchPostById";

interface PostType {
  id: string;
  title: string;
  summary: string;
}

const EmptyBlogPost = {
  id: "",
  title: "A title",
  summary: "A short summary of a title",
};

const useFetchPost = (id: string): PostType => {
  const [post, setPost] = useState<PostType>(EmptyBlogPost);

  useEffect(() => {
    fetchPostById(id).then((post) => setPost(post));
  }, [id]);

  return post;
};

const LikeButton: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return <button onClick={handleClick}>{isLiked ? "Unlike" : "Like"}</button>;
};

const BlogPost = ({ id }: { id: string }) => {
  const post = useFetchPost(id);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.summary}</p>
      <LikeButton />
    </div>
  );
};

export default BlogPost;
