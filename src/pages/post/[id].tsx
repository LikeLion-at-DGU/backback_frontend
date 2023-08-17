import postApi from "@/apis/postApi";
import { CommentProps } from "@/components/post/Comment";
import PostDetail, { PostDetailProps } from "@/components/post/PostDetail";
import NavBar from "@/layouts/components/NavBar";
import { Inter } from "next/font/google";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context: any) {
  const params = context.params;
  const id = params.id;

  return { props: { id } };
}

export default function Home(props: { id: string }) {
  const [post, setPost] = useState<PostDetailProps>();
  const [comments, setcomments] = useState<CommentProps[]>([]);
  const getPost = useCallback(() => {
    postApi()
      .getPost(props.id)
      .then((res: any) => {
        setPost(res.data);
      })
      .catch((err) => {});
  }, [setPost, postApi]);

  const getComments = useCallback(() => {
    postApi()
      .getPostComments(props.id)
      .then((res: any) => {
        setcomments(res.data);
      })
      .catch((err) => {});
  }, [setcomments, postApi]);
  useEffect(() => {
    getPost();
    getComments();
  }, [getPost, getComments]);

  return (
    <>
      <NavBar />
      {post && (
        <PostDetail
          id={post.id}
          isLiked={post.isLiked}
          isClipped={post.isClipped}
          viewCnt={post.viewCnt}
          type={post.type}
          purpose={post.purpose}
          exercise={post.exercise}
          title={post.title}
          createdAt={post.createdAt}
          images={post.images}
          content={post.content}
          likesCnt={post.likesCnt}
          commentsCnt={post.commentsCnt}
          writer={post.writer}
          comments={comments}
        />
      )}
    </>
  );
}
