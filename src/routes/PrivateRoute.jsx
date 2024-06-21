import React from "react";
import { Outlet } from "react-router-dom";
import PostProvider from "../providers/PostProvider";

function PrivateRoute() {
  return (
    <>
      <PostProvider>
        <Outlet />
      </PostProvider>
    </>
  );
}

export default PrivateRoute;
