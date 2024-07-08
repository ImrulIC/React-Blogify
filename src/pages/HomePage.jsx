import React from "react";
import PostList from "../components/posts/PostList";
import Sidebar from "../components/posts/Sidebar";

export default function HomePage() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            <PostList />
            <Sidebar />
          </div>
        </div>
      </section>
    </main>
  );
}
