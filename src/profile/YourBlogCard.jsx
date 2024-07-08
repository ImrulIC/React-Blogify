import React from "react";
import { useProfile } from "../hooks/useProfile";

export default function YourBlogCard() {
  const { state } = useProfile();
  const { blogs } = state?.user || { blogs: [] };

  return (
    <>
      {blogs.map((item) => {
        const { id, title, likes, author, thumbnail, createdAt } = item;

        return (
          <div key={id} className="blog-card">
            <img
              className="blog-thumb"
              src={`${
                import.meta.env.VITE_SERVER_BASE_URL
              }/uploads/blog/${thumbnail}`}
              alt=""
            />
            <div className="mt-2">
              <h3 className="text-slate-300 text-xl lg:text-2xl">{title}</h3>
              <p className="mb-6 text-base text-slate-500 mt-1">
                Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
                dolor pretium donec dictum. Vici consequat justo enim. Venenatis
                eget adipiscing luctus lorem.
              </p>

              {/* <!-- Meta Informations --> */}
              <div className="flex justify-between items-center">
                <div className="flex items-center capitalize space-x-2">
                  <div className="avater-img bg-indigo-600 text-white">
                    <span className="">S</span>
                  </div>

                  <div>
                    <h5 className="text-slate-500 text-sm">
                      {author.firstName} {author.lastName}
                    </h5>
                    <div className="flex items-center text-xs text-slate-700">
                      <span>{createdAt}</span>
                    </div>
                  </div>
                </div>

                <div className="text-sm px-2 py-1 text-slate-700">
                  <span>{likes.length} Likes</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
