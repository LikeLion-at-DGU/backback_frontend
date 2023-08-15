import React, { useState } from "react";
import styles from "../../styles/PostForm.module.css";

interface PostWriteProps {
  onSubmit: (title: string, content: string, images: File[]) => void;
}

const PostWrite: React.FC<PostWriteProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImages = e.target.files;
    if (selectedImages) {
      setImages(Array.from(selectedImages));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content, images);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label
        htmlFor="inputTitle"
        style={{
          borderBottom: "1px solid #B7BBC8",
          width: "360px",
          height: "45px",
        }}
      ></label>
      <input
        id="inputTitle"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        hidden
      />
      <label
        htmlFor="inputContent"
        style={{
          marginTop: "23px",
          border: "1px solid #B7BBC8",
          width: "360px",
          height: "150px",
        }}
      ></label>
      <textarea
        placeholder="내용을 입력해주세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={styles.contentForm}
        hidden
      />
      <label
        htmlFor="inputFile"
        style={{
          border: "1px solid #B7BBC8",
          borderRadius: "10px",
          height: "45px",
          width: "360px",
          marginTop: "23px",
          padding: "10px 0px 0px 120px",
          display: "flex",
        }}
      >
        <img
          src="../../../assets/images/Camera_icon.png"
          style={{ height: "20px", width: "20px" }}
          alt="camera"
        />
        <div style={{ marginLeft: "10px", fontFamily: "MainFont" }}>
          사진 첨부하기
        </div>
      </label>
      <input
        type="file"
        id="inputFile"
        multiple
        onChange={handleImageChange}
        accept="image/*"
        hidden
      />
      {/* <button type="submit">등록</button> */}
    </form>
  );
};

export default PostWrite;
