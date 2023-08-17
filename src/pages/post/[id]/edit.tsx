import { useRouter } from "next/router";
import React, { useState, useEffect, ChangeEvent } from "react";
import InputTitle from "@/components/write/InputTitle";
import InputContent from "@/components/write/InputContent";
import postApi from "@/apis/postApi";
import { ScrollContent } from "@/components/post/PostDetail";
import ExerciseChoice from "@/components/write/ExerciseChoice";
import PurposeChoice from "@/components/write/PurposeChoice";

export async function getServerSideProps(context: any) {
  const params = context.params;
  const id = params.id;

  return { props: { id } };
}

export default function EditPost(props: { id: string }) {
  const router = useRouter();
  const [selectedImages, setSelectedImages] = useState<FileList | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [previewImageCount, setPreviewImageCount] = useState(0);
  const [selectedPurpose, setSelectedPurpose] = useState(0);
  const [selectedExercise, setSelectedExercise] = useState(0);

  useEffect(() => {
    postApi()
      .getPost(props.id)
      .then((res: any) => {
        setTitle(res.data.title);
        setContent(res.data.content);
        setPreviewImageCount(res.data.images.length);
        setSelectedPurpose(res.data.purpose);
        setSelectedExercise(res.data.exercise);
      });
  }, []);
  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };
  const handleImageChange = (files: FileList | null) => {
    setSelectedImages(files);
    setPreviewImageCount(files?.length || 0);
  };
  const handlePurposeSelect = (purpose: number) => {
    setSelectedPurpose(purpose);
  };
  const handleExerciseSelect = (exercise: number) => {
    setSelectedExercise(exercise);
  };
  const handleSubmit = () => {
    if (title && content && selectedPurpose && selectedExercise) {
      const data = {
        title: title,
        content: content,
        purpose: selectedPurpose,
        exercise: selectedExercise,
        type: "ORDINARY",
      };
      postApi()
        .patchPost(props.id, data)
        .then(() => (window.location.href = `/post/${props.id}`));
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
          onClick={() => {
            handleSubmit();
          }}
          style={{
            border: "none",
            backgroundColor: "transparent",
            fontFamily: "MainFont",
            fontSize: "16px",
            cursor: "pointer",
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
        <div style={{ flex: "1" }}>
          <div
            style={{
              width: "100%",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div style={{ width: "45%", margin: "-5px" }}>
              <ExerciseChoice onExerciseSelect={handleExerciseSelect} />
            </div>
            <div style={{ width: "45%", marginLeft: "20px" }}>
              <PurposeChoice onPurposeSelect={handlePurposeSelect} />
            </div>
          </div>
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
          </div>
        </div>
      </div>
    </ScrollContent>
  );
}
