import React from "react";
import { Outlet } from "react-router-dom";
import PostProvider from "../providers/PostProvider";
import { AuthProvider } from "../providers/AuthProvider";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ProfileProvider from "../providers/ProfileProvider";

function PrivateRoute() {
  return (
    <>
      <AuthProvider>
        <ProfileProvider>
          <PostProvider>
            <Header />
            <Outlet />
            <Footer />
          </PostProvider>
        </ProfileProvider>
      </AuthProvider>
    </>
  );
}

export default PrivateRoute;
