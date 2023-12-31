import postApi from "@/apis/postApi";
import { UserInfoProps } from "@/components/common/UserInfo";
import { ScrollContent } from "@/components/post/PostDetail";
import ScrapList from "@/components/post/ScrapList";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useCallback } from "react";
import { PostPage } from "@/components/mypage/PostPage";

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
  const [isNext, setIsNext] = React.useState<boolean>(false);
  const [isPrevious, setIsPrevious] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(1);
  const [total, setTotal] = React.useState<number>(0);

  const getPosts = useCallback(async () => {
    await postApi()
      .scrappedPost({ page })
      .then((res: any) => {
        setPosts(res.data.results);
        setIsNext(res.data.next !== null);
        setIsPrevious(res.data.previous !== null);
        setTotal(Math.ceil(res.data.count / 20));
      })
      .catch((err) => {});
  }, [setPosts, postApi, page]);

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
        <PostPage
          page={page}
          isNext={isNext}
          isPrevious={isPrevious}
          setPage={setPage}
          total={total}
        />
      </ScrollContent>
    </>
  );
}
