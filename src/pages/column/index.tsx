import { ScrollContent } from "@/components/post/PostDetail";
import ColumnList from "@/components/common/ColumnList";
import { ColumnProps } from "@/components/common/Column";
import { useCallback, useEffect, useState } from "react";
import NavBar from "@/layouts/components/NavBar";
import postApi from "@/apis/postApi";
import RouterLink from "@/components/core/RouterLink";
import profileApi from "@/apis/profileApi";
import { useCookies } from "react-cookie";
import { PostPage } from "@/components/mypage/PostPage";

export async function getServerSideProps() {
  const result = await postApi()
    .getPosts({ type: "PRO", page: 1 })
    .then((res: any) => {
      return res.data;
    })
    .catch((err) => {});

  return {
    props: {
      columns: result.results,
      next: result.next !== null,
      previous: result.previous !== null,
      total: Math.ceil(result.count / 20),
    },
  };
}

export default function Home(props) {
  const allowedTypes = ["DOCTOR", "TRAINER"];
  const [columns, setColumns] = useState<ColumnProps[]>(props.columns);
  const [isNext, setIsNext] = useState<boolean>(props.next);
  const [isPrevious, setIsPrevious] = useState<boolean>(props.previous);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(props.total);
  const [userType, setUserType] = useState<string>("");
  const [cookies] = useCookies(["uid"]);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    if (cookies.uid) setIsLogin(true);
    else setIsLogin(false);
  }, [cookies]);
  useEffect(() => {
    if (!isLogin) return;
    profileApi()
      .getMe()
      .then((res) => {
        setUserType(res.data.type);
      });
  }, [userType, isLogin]);
  const getColumns = useCallback(() => {
    postApi()
      .getPosts({ type: "PRO", page: page })
      .then((res: any) => {
        setColumns(res.data.results);
        setIsNext(res.data.next !== null);
        setIsPrevious(res.data.previous !== null);
        setTotal(Math.ceil(res.data.count / 20));
      })
      .catch((err) => {});
  }, [postApi, setColumns, page]);
  useEffect(() => {
    getColumns();
  }, [getColumns]);
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
            {allowedTypes.includes(userType) ? (
              <div
                style={{
                  fontFamily: "MainFont",
                  fontSize: "14px",
                  marginRight: "auto",
                  marginLeft: "12px",
                }}
              >
                <RouterLink href="/column/write">칼럼 작성하기</RouterLink>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <ColumnList columns={...columns} />
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
