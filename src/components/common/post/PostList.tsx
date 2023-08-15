import { useState } from "react";
import Post, { PostProps } from "./Post";
import { ScrollContent } from "./PostDetail";
import CategoryBox from "./Category";

export interface PostListProps {
  posts: PostProps[];
}
const PostList: React.FC<PostListProps> = ({ ...prop }) => {
  const choose: string[] = [];
  const category = [
    "체중 증가",
    "체중 감량",
    "재활",
    "체형 개선",
    "대회 준비",
    "체력 증진",
    "근육 증가",
    "기타",
  ];
  const [open, setOpen] = useState(false);
  const handlechoose = (e: string) => {
    if (choose.includes(e)) {
      choose.splice(choose.indexOf(e), 1);
    } else {
      choose.push(e);
    }
    console.log(choose);
  };
  const handleopen = () => {
    setOpen(!open);
  };
  const categorylist = category.map((item, index) => (
    <CategoryBox key={index.toString()} onClick={() => handlechoose(item)}>
      {item}
    </CategoryBox>
  ));
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
      <div style={{ width: "100%", padding: "0px 15px 0px 15px" }}>
        <div
          style={{
            width: "100%",
            height: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            borderBottom: "1px solid #B7BBC8",
          }}
        >
          <div
            style={{
              textAlign: "left",
              flex: "1",
              fontSize: "14px",
            }}
          >
            글쓰기
          </div>
          <div
            style={{
              flex: "1",
            }}
          ></div>
          <div
            style={{
              flex: "1",
            }}
          >
            <div
              style={{ textAlign: "right", fontSize: "14px", height: "100%" }}
              onClick={handleopen}
            >
              모든 카테고리
              {open ? (
                <>
                  <img
                    src="../../../../assets/images/Category_Up.png"
                    style={{ width: "14px", height: "8px", marginLeft: "5px" }}
                  ></img>
                </>
              ) : (
                <img
                  src="../../../../assets/images/Category_Under_icon.png"
                  style={{ width: "14px", height: "8px", marginLeft: "5px" }}
                ></img>
              )}
            </div>
            {open && (
              <div
                style={{
                  position: "absolute",
                  top: "135px",
                  left: "260px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="../../../../assets/images/category.png"
                  style={{ height: "10px" }}
                ></img>
                <div
                  style={{
                    width: "110px",
                    height: "auto",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                >
                  {categorylist}
                  <div
                    style={{
                      width: "70px",
                      height: "25px",
                      marginBottom: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                  >
                    선택완료
                  </div>
                </div>
              </div>
            )}
          </div>
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
        {listItems}
      </div>
    </ScrollContent>
  );
};

export default PostList;
