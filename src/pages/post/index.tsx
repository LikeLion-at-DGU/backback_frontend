import postApi from "@/apis/postApi";
import CategoryBox from "@/components/post/Category";
import { PostProps } from "@/components/post/Post";
import { ScrollContent } from "@/components/post/PostDetail";
import PostList from "@/components/post/PostList";
import RouterLink from "@/components/core/RouterLink";
import { purpose_options } from "@/components/write/PurposeChoice";
import NavBar from "@/layouts/components/NavBar";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useCallback, useState } from "react";
import { useCookies } from "react-cookie";
import MustLogin from "@/components/core/LoginModal";
import { PostPage } from "@/components/mypage/PostPage";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const result = await postApi()
    .getPosts({ type: "ORDINARY", page: 1 })
    .then((res: any) => {
      return res.data;
    })
    .catch((err) => {});

  return {
    props: {
      posts: result.results,
      next: result.next !== null,
      previous: result.previous !== null,
      total: Math.ceil(result.count / 20),
    },
  };
}

export default function Home(props) {
  const [choose, setChoose] = useState<number[]>([]); // choose 배열을 상태로 선언
  const [find, setFind] = React.useState<number[]>([]);
  const [posts, setPosts] = React.useState<PostProps[]>(props.posts);
  const [isNext, setIsNext] = React.useState<boolean>(props.next);
  const [isPrevious, setIsPrevious] = React.useState<boolean>(props.previous);
  const [page, setPage] = React.useState<number>(1);
  const [total, setTotal] = React.useState<number>(props.total);
  const [open, setOpen] = useState(false);
  const [cookies] = useCookies(["uid"]);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    if (cookies.uid) setIsLogin(true);
    else setIsLogin(false);
  }, [cookies]);
  const [isopen, setIsopen] = useState(false);

  const handlechoose = (e: number) => {
    if (choose.includes(e)) {
      // setChoose를 통해 choose 배열을 업데이트
      setChoose(choose.filter((item) => item !== e));
    } else {
      setChoose([...choose, e]);
    }
  };
  const modalOpen = () => {
    setIsopen(!isopen);
  };

  const handleopen = () => {
    setOpen(!open);
  };
  const getPosts = useCallback(async () => {
    await postApi()
      .getPosts({ type: "ORDINARY", page: page })
      .then((res: any) => {
        setPosts(res.data.results);
        setIsNext(res.data.next !== null);
        setIsPrevious(res.data.previous !== null);
        setTotal(Math.ceil(res.data.count / 20));
      })
      .catch((err) => {});
  }, [setPosts, postApi, page]);

  const getPostsByCategory = useCallback(
    async (choose: string) => {
      try {
        const res = await postApi().getPosts({
          type: "ORDINARY",
          purpose: choose,
        });
        return res.data.results;
      } catch (error) {
        return [];
      }
    },
    [postApi]
  );

  useEffect(() => {
    if (!find.length) {
      getPosts();
    } else {
      const fetchData = async () => {
        const newSearch: PostProps[] = [];
        for (const item of find) {
          const categoryPosts = await getPostsByCategory(purpose_options[item]);
          newSearch.push(...categoryPosts);
        }
        setPosts(newSearch);
      };
      fetchData();
    }
  }, [getPosts, getPostsByCategory, setPosts, find]);

  const handlesearch = async () => {
    if (choose.length) {
      setFind(choose);
    } else {
      getPosts();
    }
  };

  const categorylist = purpose_options.map((item, index) => (
    <CategoryBox
      key={index.toString()}
      onClick={() => handlechoose(index)}
      find={choose.includes(index)}
    >
      {item}
    </CategoryBox>
  ));
  return (
    <>
      <NavBar />
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
            {isLogin ? (
              <RouterLink href="/post/write">
                <div
                  style={{
                    textAlign: "left",
                    flex: "1",
                    fontSize: "14px",
                    fontFamily: "MainFont",
                  }}
                >
                  글쓰기
                </div>
              </RouterLink>
            ) : (
              <>
                <div
                  style={{
                    textAlign: "left",
                    flex: "1",
                    fontSize: "14px",
                    fontFamily: "MainFont",
                  }}
                  onClick={() => setIsopen(true)}
                >
                  글쓰기
                </div>
                {isopen && <MustLogin onClick={modalOpen} />}
              </>
            )}
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
                style={{
                  textAlign: "right",
                  fontSize: "14px",
                  height: "100%",
                  position: "relative",
                }}
                onClick={handleopen}
              >
                모든 카테고리
                {open ? (
                  <>
                    <img
                      src="../../../../assets/images/Category_Up.png"
                      style={{
                        width: "14px",
                        height: "8px",
                        marginLeft: "5px",
                      }}
                    ></img>
                  </>
                ) : (
                  <img
                    src="../../../../assets/images/Category_Under_icon.png"
                    style={{ width: "14px", height: "8px", marginLeft: "5px" }}
                  ></img>
                )}
                {open && (
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "0px",
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
                        onClick={handlesearch}
                      >
                        선택완료
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* {open && (
                <div
                  style={{
                    position: "absolute",
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
                      onClick={handlesearch}
                    >
                      선택완료
                    </div>
                  </div>
                </div>
              )} */}
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
          <PostList posts={...posts} />
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
