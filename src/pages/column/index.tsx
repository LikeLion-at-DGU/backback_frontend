import { ScrollContent } from "@/components/post/PostDetail";
import ColumnList from "@/components/common/ColumnList";
import { ColumnProps } from "@/components/common/Column";
import { useCallback, useEffect, useState } from "react";
import NavBar from "@/layouts/components/NavBar";
import postApi from "@/apis/postApi";
import RouterLink from "@/components/core/RouterLink";

export default function Home() {
  const [columns, setColumns] = useState<ColumnProps[]>([]);
  const getColumns = useCallback(() => {
    postApi()
      .getPosts({ type: "PRO" })
      .then((res: any) => {
        setColumns(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postApi, setColumns]);
  useEffect(() => {
    getColumns();
  }, [getColumns]);
  return (
    <ScrollContent>
      <NavBar />
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
              fontFamily: "MainFont",
              fontSize: "14px",
              marginRight: "auto",
              marginLeft: "12px",
            }}
          >
            <RouterLink href="/column/write">칼럼 작성하기</RouterLink>
          </div>
        </div>
      </div>
      <ColumnList columns={...columns} />
    </ScrollContent>
  );
}
