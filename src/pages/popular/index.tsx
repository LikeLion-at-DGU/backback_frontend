import postApi from "@/apis/postApi";
import {
  PopularColumnList,
  PopularPostList,
} from "@/components/common/Popular";
import { ScrollContent } from "@/components/post/PostDetail";
import NavBar from "@/layouts/components/NavBar";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  const ords = await postApi()
    .getHotOrdinaryPosts()
    .then((res: any) => {
      return res.data;
    });

  const pros = await postApi()
    .getHotProPosts()
    .then((res: any) => {
      return res.data;
    });

  return {
    props: {
      posts: ords,
      columns: pros,
    },
  };
}

export default function Home(props) {
  const [posts, setPosts] = useState(props.posts);
  const [columns, setColumns] = useState(props.columns);
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "start",
        }}
      >
        <PopularPostList posts={...posts} />
        <div style={{ padding: "10px" }} />
        <PopularColumnList columns={...columns} />
      </div>
    </>
  );
}
