import React, { useState } from "react";
import EditIcon from "../../assets/icons/edit.svg";
import DeleteIcon from "../../assets/icons/delete.svg";
import DotsIcon from "../../assets/icons/3dots.svg";
import { Link } from "react-router-dom";

export default function BlogCard({ postData }) {
  const [showOptions, setShowOptions] = useState(false);
  const toggleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const {
    author,
    comments,
    content,
    createdAt,
    id,
    likes,
    tags,
    thumbnail,
    title,
  } = postData;
  console.log(postData);

  return (
    <div className="blog-card">
      <img
        className="blog-thumb"
        src={`${
          import.meta.env.VITE_SERVER_BASE_URL
        }/uploads/blog/${thumbnail}`}
        alt=""
      />
      <div className="mt-2 relative">
        <Link href="./single-blog.html">
          <h3 className="text-slate-300 text-xl lg:text-2xl">
            <Link href="./single-blog.html">{title}</Link>
          </h3>
        </Link>
        <p className="mb-6 text-base text-slate-500 mt-1">{content}</p>

        {/* <!-- Meta Informations --> */}
        <div className="flex justify-between items-center">
          <div className="flex items-center capitalize space-x-2">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">S</span>
            </div>

            <div>
              <h5 className="text-slate-500 text-sm">
                <Link href="./profile.html">
                  {author.firstName} {author.lastName}
                </Link>
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

        {/* <!-- action dot --> */}
        <div className="absolute right-0 top-0">
          <button onClick={toggleShowOptions}>
            <img src={DotsIcon} alt="3dots of Action" />
          </button>

          {/* <!-- Action Menus Popup --> */}
          {showOptions && (
            <div className="action-modal-container">
              <button className="action-menu-item hover:text-lwsGreen">
                <img src={EditIcon} alt="Edit" />
                Edit
              </button>
              <button className="action-menu-item hover:text-red-500">
                <img src={DeleteIcon} alt="Delete" />
                Delete
              </button>
            </div>
          )}
        </div>
        {/* <!-- action dot ends --> */}
      </div>
    </div>
  );
}
