import postApi from "@/apis/postApi";
import {
  PopularColumnList,
  PopularPostList,
} from "@/components/common/Popular";
import { ScrollContent } from "@/components/post/PostDetail";
import NavBar from "@/layouts/components/NavBar";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    postApi()
      .getHotOrdinaryPosts()
      .then((res: any) => {
        setPosts(res.data);
      });
  }, []);
  useEffect(() => {
    postApi()
      .getHotProPosts()
      .then((res: any) => {
        setColumns(res.data);
      });
  }, []);
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
