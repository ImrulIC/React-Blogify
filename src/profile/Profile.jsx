import React, { useEffect } from "react";
import { useProfile } from "../hooks/useProfile";
import { api } from "../components/auth/api";
import { useAuth } from "../hooks/useAuth";
import { actions } from "../actions";
import ProfileInfo from "./ProfileInfo";
import YourBlogCard from "./YourBlogCard";

export default function Profile() {
  const { state, dispatch } = useProfile();
  const { auth } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        console.dir(response);
        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            user: response.data || {},
            favorites: response.data.favourites || [],
          });
        } else {
          console.error("Unexpected response status: ", response.status);
        }
      } catch (error) {
        console.error("An error occurred while fetching profile data: ", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <main class="mx-auto max-w-[1020px] py-8">
      <div class="container">
        {/* <!-- profile info --> */}

        <ProfileInfo />
        {/* <!-- end profile info --> */}

        <h4 class="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
        <div class="my-6 space-y-4">
          {/* <!-- Blog Card Start --> */}
          <YourBlogCard />
          {/* <!-- Blog Card End --> */}
        </div>
      </div>
    </main>
  );
}
