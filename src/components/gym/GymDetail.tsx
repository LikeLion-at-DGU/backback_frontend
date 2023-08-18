import styled from "styled-components";
import { ScrollContent } from "../post/PostDetail";
import ReportButton from "@/components/core/ReportButton";
import KakaoMap from "./map";
import ReviewList, { ReviewListProps } from "./ReviewList";
import React, { useRef } from "react";
import gymApi from "@/apis/gymApi";
import { AxiosError, isAxiosError } from "axios";
import { useCookies } from "react-cookie";

interface ContentProps {
  content: string;
  key: string;
}
export interface GymDetailProps extends ReviewListProps {
  id: string;
  name: string;
  squareFeet: number;
  address: string;
  info: {
    exercises: string[];
    machines: string[];
    certifications: string[];
  };
  image: string;
  createdAt: string;
  updatedAt: string;
  latitude: number;
  longitude: number;
  reviewCnt: string;
}

export const ContainerBox = styled.div`
  margin-top: 20px;
  width: 100%;
  padding: 15px;
  background-color: #f8f4f4;
  display: flex;
  flex-direction: column;
`;

const GymDetail: React.FC<GymDetailProps> = ({ ...prop }) => {
  const [cookies] = useCookies(["uid"]);
  const exercises = prop.info.exercises.join(" / ");
  const certifications = prop.info.certifications?.join("\n");
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const keyRef = useRef<HTMLInputElement | null>(null);

  const postReviews = async ({ content, key }: ContentProps) => {
    try {
      await gymApi()
        .postGymReview(prop.id, { content: content, key: key })
        .then(() => window.location.reload());
    } catch (error) {}
  };
  const handleSubmit = () => {
    const inputValue = inputRef.current?.value;
    const keyValue = keyRef.current?.value;
    if (inputValue !== undefined && keyValue !== undefined) {
      postReviews({ content: inputValue, key: keyValue });
    }
  };
  return (
    <ScrollContent>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "15px",
          flex: "1",
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <img
          src={prop.image}
          alt={prop.name}
          style={{
            width: "100%",
            height: "240px",
            objectFit: "cover",
            // objectPositon: "center",
          }}
        />
        <ContainerBox>
          <div
            style={{
              width: "100%",
              height: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "10px 0px 10px 0px",
            }}
          >
            <div
              style={{
                width: "100%",
                fontSize: "22px",
                fontFamily: "BoldFont",
                marginBottom: "5px",
              }}
            >
              {prop.name}
            </div>
            {cookies.uid && <ReportButton id={prop.id} type={"gym"} />}
          </div>
          <div style={{ width: "100%", fontSize: "16px", marginBottom: "5px" }}>
            {prop.address}
          </div>
          <div style={{ width: "100%", fontSize: "16px", marginBottom: "5px" }}>
            {prop.squareFeet} 평
          </div>
        </ContainerBox>
        <ContainerBox>
          <div
            style={{
              width: "100%",
              fontSize: "18px",
              fontFamily: "BoldFont",
              marginBottom: "5px",
            }}
          >
            운동종목
          </div>
          <div style={{ width: "100%", fontSize: "16px", marginBottom: "5px" }}>
            {exercises}
          </div>
        </ContainerBox>
        <ContainerBox>
          <div
            style={{
              width: "100%",
              fontSize: "18px",
              fontFamily: "BoldFont",
              marginBottom: "5px",
            }}
          >
            보유 자격증
          </div>
          <div
            style={{
              width: "100%",
              fontSize: "16px",
              marginBottom: "5px",
            }}
          >
            {certifications?.split("\n").map((cert, index) => (
              <React.Fragment key={index}>
                {cert}
                <br />
              </React.Fragment>
            ))}
          </div>
        </ContainerBox>
        <KakaoMap latitude={prop.latitude} longitude={prop.longitude} />
        <div
          style={{
            width: "100%",
            height: "25px",
            display: "flex",
            alignItems: "center",
            margin: "15px 0px 15px 0px",
            padding: "0px 15px 0px 15px",
          }}
        >
          <img
            src="../../../assets/images/Message_icon.png"
            style={{ height: "21px", width: "21px" }}
          ></img>
          <div
            style={{
              marginLeft: "5px",
              fontSize: "16px",
              fontFamily: "MainFont",
            }}
          >
            리뷰 {prop.reviewCnt}
          </div>
        </div>
        <ReviewList reviews={...prop.reviews} />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "10px 0px 10px 0px",
            height: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "15px 20px 15px 20px",
              border: "1px solid #B7BBC8",
              borderRadius: "10px",
              height: "auto",
            }}
          >
            익명
            <textarea
              placeholder="헬스장 코드를 통해 리뷰를 남겨보세요"
              style={{
                border: "none",
                resize: "none",
                overflow: "hidden",
                outline: "none",
                minHeight: "60px",
                scrollBehavior: "smooth",
                marginTop: "5px",
                fontFamily: "MainFont",
              }}
              ref={inputRef}
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: "10px",
            }}
          >
            <input
              placeholder="헬스장 코드"
              style={{
                borderRadius: "10px",
                height: "30px",
                width: "150px",
                marginRight: "5px",
                border: "1px solid #B7BBC8",
                padding: "12px",
                fontFamily: "MainFont",
              }}
              ref={keyRef}
            ></input>
            <button
              style={{
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#B7BBC8",
                width: "38px",
                height: "30px",
                fontSize: "14px",
                cursor: "pointer",
                fontFamily: "MainFont",
              }}
              onClick={handleSubmit}
            >
              등록
            </button>
          </div>
        </div>
      </div>
    </ScrollContent>
  );
};

export default GymDetail;
