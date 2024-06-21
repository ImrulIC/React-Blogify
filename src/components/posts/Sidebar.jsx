import React from "react";
import MostPopular from "./MostPopular";
import Favorites from "./Favorites";

export default function Sidebar() {
  return (
    <div className="md:col-span-2 h-full w-full space-y-5">
      <MostPopular />
      <Favorites />
    </div>
  );
}
