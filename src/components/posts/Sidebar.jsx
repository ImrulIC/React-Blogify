import React from "react";
import MostPopular from "./MostPopular";
import Favorites from "./Favorites";
import { usePost } from "../../hooks/usePost";

export default function Sidebar({ data }) {
  return (
    <div className="md:col-span-2 h-full w-full space-y-5">
      <MostPopular data={data} />
      <Favorites data={data} />
    </div>
  );
}
