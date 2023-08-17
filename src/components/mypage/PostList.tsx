import { useEffect, useState } from "react";
import { PostPage } from "./PostPage";
import profileApi from "@/apis/profileApi";
import Post, { PostProps } from "../common/post/Post";

interface PostListProps {
  isMine: boolean;
  userId: number;
}

const postListTitleTextstyle = {
  fontFamily: "BoldFont",
  fontSize: "16px",
  margin: "12px 0px 2px 26px",
};

export function PostList({ isMine, userId }: PostListProps) {
  const [postList, setPostList] = useState<PostProps[]>([]);
  const [isNext, setIsNext] = useState<boolean>(false);
  const [isPrevious, setIsPrevious] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    profileApi()
      .getProfilePosts(userId, { page })
      .then((res) => {
        setPostList(res.data.results);
        setIsNext(res.data.next !== null);
        setIsPrevious(res.data.previous !== null);
        setTotal(Math.ceil(res.data.count / 10));
      });
  }, [page, userId]);
  return (
    <div>
      <p style={postListTitleTextstyle}>
        {isMine ? "내가 쓴 글" : "모든 게시물"}
      </p>
      {total ? (
        <>
          <div style={{ width: "90%", margin: "0 auto" }}>
            {postList.map((post: PostProps, index: number) => (
              <Post {...post} />
            ))}
          </div>
          <PostPage
            page={page}
            isNext={isNext}
            isPrevious={isPrevious}
            setPage={setPage}
            total={total}
          />
        </>
      ) : (
        <div style={{ textAlign: "center", padding: "1rem" }}>
          아직 작성한 글이 없습니다.
        </div>
      )}
    </div>
  );
}
