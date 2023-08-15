import React, { useState, ChangeEvent } from "react";
import InputTitle from "@/components/write/InputTitle";
import InputContent from "@/components/write/InputContent";
import InputImage from "@/components/write/InputImage";
import { ScrollContent } from "@/components/common/post/PostDetail";

export default function Home() {
  const [selectedImages, setSelectedImages] = useState<FileList | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [previewImageCount, setPreviewImageCount] = useState(0);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };
  const handleImageChange = (files: FileList | null) => {
    setSelectedImages(files);
    setPreviewImageCount(files?.length || 0);
  };
  return (
    <ScrollContent>
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
            justifyContent: "center",
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
          <InputImage
            onChange={handleImageChange}
            previewCount={previewImageCount}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "MainFont",
          }}
        >
          <img
            src="../../../assets/images/Quotation_icon1.png"
            style={{
              height: "22px",
              width: "22px",
              marginBottom: "50px",
              marginRight: "10px",
            }}
          />
          <div style={{ textAlign: "center" }}>
            오운완 기록은 사진 한 장이 필수입니다.
            <br />
            운동을 완료한 사진을 첨부해주세요.
          </div>
          <img
            src="../../../assets/images/Quotation_icon2.png"
            style={{
              height: "22px",
              width: "22px",
              marginBottom: "50px",
              marginLeft: "10px",
            }}
          />
        </div>
      </div>
    </ScrollContent>
  );
}
