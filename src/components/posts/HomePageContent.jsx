import React from "react";
import Sidebar from "./Sidebar";
import PostList from "./PostList";

export default function HomePageContent() {
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
