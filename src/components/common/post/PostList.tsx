import { useState } from "react";
import Post, { PostProps } from "./Post";
import { ScrollContent } from "./PostDetail";
import CategoryBox from "./Category";
import { useRouter } from "next/router";
import { purpose_options } from "@/components/write/PurposeChoice";

export interface PostListProps {
  posts: PostProps[];
}
const PostList: React.FC<PostListProps> = ({ ...prop }) => {
  const listItems = prop.posts.map((item, index) => (
    <Post
      id={item.id}
      key={index.toString()}
      writer={item.writer}
      content={item.content}
      commentsCnt={item.commentsCnt}
      likesCnt={item.likesCnt}
      createdAt={item.createdAt}
      title={item.title}
      category={item.category}
    />
  ));

  return (
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
      {listItems}
    </div>
  );
};

export default PostList;
