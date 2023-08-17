import postApi from "@/apis/postApi";
import { ScrollContent } from "@/components/post/PostDetail";
import FindList, { FindPostProps } from "@/components/post/FindList";
import React, { useEffect } from "react";

export async function getServerSideProps(context: any) {
  const params = context.params;
  const q = params.q;

  return { props: { q } };
}

export default function Home(props: { q: string }) {
  const [posts, setPosts] = React.useState<FindPostProps[]>([]);

  useEffect(() => {
    postApi()
      .getPosts({ search: props.q })
      .then((res) => {
        setPosts(res.data.results);
      });
  }, [props.q]);

  return (
    <>
      <ScrollContent>
        <div
          style={{
            width: "100%",
            height: "50px",
            padding: "0px 15px 0px 15px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "0px 15px 0px 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              fontSize: "14px",
              borderBottom: "1px solid #B7BBC8",
            }}
          >
            "{props.q}" 검색 결과
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
          <FindList posts={...posts} />
        </div>
      </ScrollContent>
    </>
  );
}
