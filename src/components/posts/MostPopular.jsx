import React, { useEffect } from "react";
import { api } from "../auth/api";
import { usePost } from "../../hooks/usePost";
import { actions } from "../../actions";
import { useAuth } from "../../hooks/useAuth";

export default function MostPopular({}) {
  const { state, dispatch } = usePost();
  const { auth } = useAuth();
  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/popular`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.post.DATA_FETCH_POPULAR,
            popular: response.data.blogs,
          });
        }
      } catch (error) {}
    };

    fetchPopular();
  }, []);

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Most Popular 👍️
      </h3>

      <ul className="space-y-5 my-5">
        {state &&
          state.popular.map((item) => {
            return (
              <li key={item.id}>
                <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  by{" "}
                  <a href="./profile.html">
                    {item.author.firstName} {item.author.lastName}
                  </a>
                  <span>·</span> {item.likes.length} Likes
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
