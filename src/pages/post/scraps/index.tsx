import postApi from "@/apis/postApi";
import { UserInfoProps } from "@/components/common/UserInfo";
import { ScrollContent } from "@/components/post/PostDetail";
import ScrapList from "@/components/post/ScrapList";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useCallback } from "react";

const inter = Inter({ subsets: ["latin"] });

export interface ScrapPostProps {
  id: string;
  createdAt: string;
  updatedAt: string;
  writer: UserInfoProps;
  title: string;
  contentShort: string;
  commentsCnt: number;
  viewCnt: number;
  likesCnt: number;
}
export interface ScrapProps {
  id: string;
  post: ScrapPostProps;
  createdAt: string;
  updatedAt: string;
  user: string;
}
export default function Home() {
  const router = useRouter();
  const [posts, setPosts] = React.useState<ScrapProps[]>([]);

  const getPosts = useCallback(async () => {
    await postApi()
      .scrappedPost()
      .then((res) => {
        console.log(res.data.results);
        setPosts(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setPosts, postApi]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <ScrollContent>
        <div
          style={{
            width: "100%",
            height: "50px",
            padding: "0px 15px 0px 15px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "0px 15px 0px 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              fontSize: "14px",
              borderBottom: "1px solid #B7BBC8",
            }}
          >
            스크랩한 글
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "block",
            flexDirection: "column",
            alignItems: "center",
            padding: "0px 15px 0px 15px",
            flex: "1",
            overflow: "auto",
            scrollBehavior: "smooth",
          }}
        >
          <ScrapList posts={...posts} />
        </div>
      </ScrollContent>
    </>
  );
}
