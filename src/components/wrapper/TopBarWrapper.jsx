"use client";

import dynamic from "next/dynamic";
const TopBarWrapper = dynamic(() => import("../common/ui/TopBar"), {
  ssr: false,
});
export default TopBarWrapper;
