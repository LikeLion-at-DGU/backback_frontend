import Post, { PostProps } from "../post/Post";
import { ScrollContent } from "../post/PostDetail";
import ImageSwiper from "../core/ImageSwiper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useCookies } from "react-cookie";
import RouterLink from "../core/RouterLink";

export interface HomeProps {
  posts: PostProps[];
  images: string[];
}

const Homepage: React.FC<HomeProps> = ({ ...prop }) => {
  const [cookies] = useCookies(["uid"]);
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
        {cookies.uid !== undefined ? (
          prop.posts.length ? (
            listItems
          ) : (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              팔로우한 사람이 없거나, <br />
              팔로워가 올린 게시글이 없습니다.
            </div>
          )
        ) : (
          <div
            style={{
              textAlign: "center",
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            로그인하고 팔로우한 사람의 <br />
            게시글을 받아보세요!
            <div style={{ padding: "10px" }}></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "50%",
                alignItems: "center",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "lightpink",
                height: "30px",
                fontSize: "14px",
                cursor: "pointer",
                fontFamily: "MainFont",
                padding: "20px",
              }}
            >
              <RouterLink href="/login">간편 로그인하러가기</RouterLink>
            </div>
          </div>
        )}
      </div>
    </ScrollContent>
  );
};

export default Homepage;
