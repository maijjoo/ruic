"use client";

import { useRouter } from "next/navigation";

const HomeMenus = () => {
  const router = useRouter();
  return (
    <section>
      <div className="">
        <button onClick={() => router.push("chart")}>차트</button>
        <button onClick={() => router.push("status")}>전역상태관리</button>
        <button onClick={() => router.push("tanstack")}>탄스택쿼리</button>
        <button onClick={() => router.push("sass")}>싸쓰</button>
      </div>
    </section>
  );
};

export default HomeMenus;
