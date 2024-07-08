import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import Comments from "./Comments";
import FloatingReactions from "./FloatingReactions";
import { useLocation } from "react-router-dom";
import { api } from "../components/auth/api";

export default function SinglePage() {
  const location = useLocation();
  console.log("This is location");
  console.log(location);
  const { state } = useLocation();

  const [data, setData] = useState({
    title: "",
    content: "",
    author: {},
    createdAt: "",
    tags: "",
    likes: [],
    comments: [],
    thumbnail: "",
  });

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/${state.index}`
        );
        console.log("this is res");
        console.log(response);

        if (response.status === 200) {
          setData(response.data);
        } else {
          throw new Error(`An error occurred. status: ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleBlog();
  }, []);

  return (
    <main>
      <BlogPost postData={data} />
      <Comments postData={data} />
      <FloatingReactions />
    </main>
  );
}
