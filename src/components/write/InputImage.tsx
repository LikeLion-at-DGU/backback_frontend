import React, { useState } from "react";

interface InputImageProps {
  onChange: (files: FileList | null) => void;
  previewCount: number;
}

const InputImage: React.FC<InputImageProps> = ({ onChange, previewCount }) => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const previewURLs: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const imageURL = URL.createObjectURL(files[i]);
        previewURLs.push(imageURL);
      }
      setPreviewImages(previewURLs);
      onChange(files);
    }
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label
        htmlFor="inputFile"
        style={{
          border: "1px solid #B7BBC8",
          borderRadius: "10px",
          height: "45px",
          width: "360px",
          marginTop: "13px",
          padding: "10px 0px 0px 120px",
          display: "flex",
        }}
      >
        <img
          src="../../../assets/images/Camera_icon.png"
          style={{ height: "20px", width: "20px", alignItems: "vertical" }}
          alt="camera"
        />
        <div style={{ marginLeft: "10px", cursor: "pointer" }}>
          {previewCount === 0 ? "사진 첨부하기" : `${previewCount}장의 사진`}
        </div>
        <input
          id="inputFile"
          type="file"
          multiple
          onChange={handleImageChange}
          accept="image/*"
          style={{ display: "none" }}
        />
      </label>
      <div
        style={{
          width: "100%",
          overflow: "auto",
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        {previewImages.map((item, index) => (
          <div key={index}>
            <img
              src={item}
              alt={`Slide ${index}`}
              style={{
                borderRadius: "10px",
                marginRight: "10px",
                height: "160px",
                width: "160px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputImage;
