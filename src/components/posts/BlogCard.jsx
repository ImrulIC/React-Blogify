import React, { useEffect, useRef, useState } from "react";
import EditIcon from "../../assets/icons/edit.svg";
import DeleteIcon from "../../assets/icons/delete.svg";
import DotsIcon from "../../assets/icons/3dots.svg";
import { Link, useNavigate } from "react-router-dom";
import { getDateDifferenceFromNow } from "../../utils";

export default function BlogCard({ postData }) {
  const [showOptions, setShowOptions] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();

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

  const redirectToBlog = (index) => {
    navigate("/blogs", { state: { index: id } });
  };

  const toggleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    if (showOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOptions]);

  return (
    <div className="blog-card" ref={modalRef}>
      <img
        onClick={(id) => redirectToBlog()}
        className="blog-thumb"
        src={`${
          import.meta.env.VITE_SERVER_BASE_URL
        }/uploads/blog/${thumbnail}`}
        alt=""
      />
      <div className="mt-2 relative">
        <h3
          onClick={(id) => redirectToBlog()}
          className="text-slate-300 text-xl lg:text-2xl"
        >
          {title}
        </h3>
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
                <span>{getDateDifferenceFromNow(createdAt)}</span>
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
