import Post, { PostProps } from "../post/Post";
import { ScrollContent } from "../post/PostDetail";
import ImageSwiper from "../core/ImageSwiper";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export interface HomeProps {
  posts: PostProps[];
  images: string[];
}

const Homepage: React.FC<HomeProps> = ({ ...prop }) => {
  const listItems = prop.posts.map((item, index) => (
    <Post
      id={item.id}
      key={index.toString()}
      writer={item.writer}
      contentShort={item.contentShort}
      commentsCnt={item.commentsCnt}
      likesCnt={item.likesCnt}
      createdAt={item.createdAt}
      title={item.title}
      category={item.category}
      updatedAt={item.updatedAt}
      viewCnt={item.viewCnt}
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
        <ImageSwiper images={prop.images} />
        <div
          style={{
            display: "flex",
            padding: "15px 0px 10px 13px",
            width: "100%",
            fontSize: "14px",
            borderBottom: "1px solid #B7BBC8",
          }}
        >
          내 팔로워 게시물
        </div>
        {listItems}
      </div>
    </ScrollContent>
  );
};

export default Homepage;
