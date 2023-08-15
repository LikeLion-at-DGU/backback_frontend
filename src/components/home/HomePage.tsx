import { useState } from "react";
import Post, { PostProps } from "../common/post/Post";
import { ScrollContent } from "../common/post/PostDetail";

export interface HomeProps {
  posts: PostProps[];
  images: string[];
}
const Homepage: React.FC<HomeProps> = ({ ...prop }) => {
  const listItems = prop.posts.map((item, index) => (
    <Post
      id={item.id}
      key={index.toString()}
      nickname={item.nickname}
      type={item.type}
      profileimage={item.profileimage}
      content={item.content}
      comments_count={item.comments_count}
      like_count={item.like_count}
      createdAt={item.createdAt}
      title={item.title}
      category={item.category}
    />
  ));

  return (
    <ScrollContent>
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
        {/* 여기다가 캐러셀 넣으면돼 */}
        {listItems}
      </div>
    </ScrollContent>
  );
};

export default Homepage;
