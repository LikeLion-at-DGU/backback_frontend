import postApi from "@/apis/postApi";
import Find from "@/components/common/Find";
import { HotColumnProps } from "@/components/common/HotColumn";
import { PostProps } from "@/components/post/Post";
import { useEffect, useState } from "react";

export default function ExportFind() {
  const [hotColumns, setHotColumns] = useState<HotColumnProps[]>([]);
  useEffect(() => {
    postApi()
      .getHotProPosts()
      .then((res) => {
        setHotColumns(res.data);
      });
  }, []);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "50px",
        }}
      ></div>
      {hotColumns && <Find columns={hotColumns} />}
    </>
  );
}
