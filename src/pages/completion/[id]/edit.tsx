import React, { useState, ChangeEvent, useEffect } from "react";
import InputTitle from "@/components/write/InputTitle";
import InputContent from "@/components/write/InputContent";
import { ScrollContent } from "@/components/post/PostDetail";
import RouterLink from "@/components/core/RouterLink";
import completionApi from "@/apis/completionApi";

export async function getServerSideProps(context: any) {
  const params = context.params;
  const id = params.id;

  return { props: { id } };
}

export default function Home(props: { id: string }) {
  useEffect(() => {
    completionApi()
      .getCompletion(props.id)
      .then((res: any) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      });
  }, [props.id]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };
  const handleSubmit = () => {
    if (title && content) {
      completionApi().patchCompletion(props.id, {
        title: title,
        content: content,
      });
      window.location.href = `/completion/${props.id}`;
    }
  };
  return (
    <ScrollContent>
      <div
        style={{
          width: "100%",
          height: "50px",
          padding: "0px 15px 0px 15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          fontSize: "16px",
          borderBottom: "1px solid #B7BBC8",
        }}
      >
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            fontFamily: "MainFont",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={() => {
            handleSubmit();
          }}
        >
          수정
        </button>
      </div>
      <div
        style={{
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          padding: "15px",
          flex: "1",
          overflow: "auto",
          scrollBehavior: "smooth",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: "1",
          }}
        >
          <div>
            <InputTitle title={title} onTitleChange={handleTitleChange} />
          </div>
          <div style={{ marginTop: "20px" }}>
            <InputContent
              content={content}
              onContentChange={handleContentChange}
            />
          </div>
        </div>
      </div>
    </ScrollContent>
  );
}
