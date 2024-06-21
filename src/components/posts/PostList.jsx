import React, { useEffect, useState } from "react";
import { api } from "../auth/api";
import BlogCard from "./BlogCard";
import { usePost } from "../../hooks/usePost";
import { actions } from "../../actions";

export default function PostList() {
  const { state, dispatch } = usePost();

  useEffect(() => {
    const fetchPost = async () => {
      dispatch({
        type: actions.post.DATA_FETCHING,
      });

      try {
        const response = await api.get("http://localhost:3000/blogs");

        if (response.status === 200) {
          dispatch({
            type: actions.post.DATA_FETCHED,
            posts: response.data.blogs,
          });
        }
      } catch (error) {
        dispatch({
          type: actions.post.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fetchPost();
  }, []);

  return (
    <div className="space-y-3 md:col-span-5">
      {state.posts.map((item) => {
        return <BlogCard key={item.id} postData={item} />;
      })}
    </div>
  );
}
