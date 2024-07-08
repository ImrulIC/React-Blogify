import React from "react";

export default function BlogPost({ postData }) {
  const { title, content, author, createdAt, tags, thumbnail, likes } =
    postData;
  console.log("this is data");
  console.log(postData);
  const tagsArray = tags.split(",");
  return (
    <section>
      <div className="container text-center py-8">
        <h1 className="font-bold text-3xl md:text-5xl">{title}</h1>
        <div className="flex justify-center items-center my-4 gap-4">
          <div className="flex items-center capitalize space-x-2">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">S</span>
            </div>
            <h5 className="text-slate-500 text-sm">
              {author.firstName} {author.lastName}
            </h5>
          </div>
          <span className="text-sm text-slate-700 dot">{createdAt}</span>
          <span className="text-sm text-slate-700 dot">
            {likes.length} Likes
          </span>
        </div>
        <img
          className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
          src={`${
            import.meta.env.VITE_SERVER_BASE_URL
          }/uploads/blog/${thumbnail}`}
          alt=""
        />

        {/* <!-- Tags --> */}
        <ul className="tags">
          {tagsArray.map((item, id) => {
            return (
              <>
                <li key={id}>{item}</li>
              </>
            );
          })}
        </ul>

        {/* <!-- Content --> */}
        <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
          {content}
        </div>
      </div>
    </section>
  );
}
