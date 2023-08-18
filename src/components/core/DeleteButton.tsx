import completionApi from "@/apis/completionApi";
import gymApi from "@/apis/gymApi";
import postApi from "@/apis/postApi";
import { AxiosError, isAxiosError } from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import RouterLink from "./RouterLink";
import Button from "./Button";

export const DeleteBox = styled.div`
  width: 100%;
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #b7bbc8;
  font-size: 14px;
  :hover {
    font-weight: 700;
  }
`;

interface DeleteButtonProps {
  type: "comment" | "post" | "completion" | "column";
  id: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ ...prop }) => {
  const [isopen, setIsopen] = useState(false);
  const [isdelete, setIsDelete] = useState(false);
  const [deleteType, setDeleteType] = useState("");
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const handleDropdownToggle = (e: any) => {
    setIsopen(!isopen);

    const rect = e.currentTarget.getBoundingClientRect();
    const top = rect.bottom + window.scrollY;
    const left = rect.left + window.scrollX;

    setDropdownPosition({ top, left });
  };

  const handleGoBack = () => {
    setIsDelete(!isdelete);
  };
  const handleDelete = () => {
    if (prop.type === "comment") {
      setDeleteType("댓글");
    } else if (
      prop.type === "post" ||
      prop.type === "column" ||
      prop.type === "completion"
    ) {
      setDeleteType("게시글");
    }
    setIsDelete(!isdelete);
    setIsopen(!isopen);
  };

  const Delete = async () => {
    let redirectTo = "";
    try {
      if (prop.type === "comment") {
        await postApi().deleteComment(prop.id);
      } else if (prop.type === "post" || prop.type === "column") {
        await postApi().deletePost(prop.id);
      } else if (prop.type === "completion") {
        await completionApi().deleteCompletion(prop.id);
      }
      if (prop.type === "comment") {
        window.location.href = redirectTo;
      } else if (prop.type === "post") {
        window.location.href = `/post`;
      } else if (prop.type === "completion") {
        window.location.href = `/completion`;
      } else if (prop.type === "column") {
        window.location.href = `/column`;
      }
    } catch (error) {}
  };
  const Private = async () => {
    try {
      await completionApi()
        .privateCompletion(prop.id, { isPrivate: true })
        .then(() => {
          alert("비공개 처리가 완료되었습니다.");
          window.location.reload();
        });
    } catch (error) {}
  };
  return (
    <div style={{ placeItems: "center", fontSize: "14px" }}>
      {isopen && (
        <div
          style={{
            position: "absolute",
            top: dropdownPosition.top,
            left: dropdownPosition.left,
            transform: "translate(-70%, 0)",
            zIndex: "10",
            width: "110px",
            height: `${
              prop.type === "comment"
                ? "30px"
                : prop.type === "completion"
                ? "90px"
                : "60px"
            }`,
            display: "flex",
            backgroundColor: "white",
          }}
        >
          {prop.type === "comment" ? (
            <div
              style={{
                border: "0.5px solid black",
                width: "100px",
                height: "100%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                padding: "0px 5px 0px 5px",
              }}
              onClick={handleDelete}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  height: "100%",
                  flex: "2",
                  fontSize: "14px",
                }}
              >
                삭제하기
              </div>
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  flex: "1",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <img
                  src="../../../assets/images/Delete_icon.png"
                  style={{ height: "14px" }}
                ></img>
              </div>
            </div>
          ) : prop.type === "completion" ? (
            <div
              style={{
                width: "100px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Button
                name={"나만보기"}
                image={"../../../assets/images/Lock_icon.png"}
                onClick={Private}
              />
              <div
                style={{
                  border: "0.5px solid black",
                  width: "100%",
                  flex: "1",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  padding: "0px 5px 0px 5px",
                }}
              >
                <RouterLink href={`/${prop.type}/${prop.id}/edit`}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      height: "100%",
                      flex: "3",
                      fontSize: "14px",
                    }}
                  >
                    수정하기
                  </div>
                </RouterLink>
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    flex: "1",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <img
                    src={"../../../assets/images/Update_icon.png"}
                    style={{ height: "14px" }}
                  ></img>
                </div>
              </div>
              <Button
                name={"삭제하기"}
                image={"../../../assets/images/Delete_icon.png"}
                onClick={Delete}
              />
            </div>
          ) : (
            <div
              style={{
                width: "100px",
                height: "100%",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "0px 5px 0px 5px",
                flex: "1",
              }}
            >
              <div
                style={{
                  border: "0.5px solid black",
                  width: "100%",
                  flex: "1",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  padding: "0px 5px 0px 5px",
                }}
              >
                <RouterLink href={`${prop.type}/${prop.id}/edit`}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      height: "100%",
                      flex: "3",
                      fontSize: "14px",
                    }}
                  >
                    수정하기
                  </div>
                </RouterLink>
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    flex: "1",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <img
                    src={"../../../assets/images/Update_icon.png"}
                    style={{ height: "14px" }}
                  ></img>
                </div>
              </div>
              <Button
                name={"삭제하기"}
                image={"../../../assets/images/Delete_icon.png"}
                onClick={Delete}
              />
            </div>
          )}
        </div>
      )}
      <div
        style={{
          cursor: "pointer",
          placeItems: "center",
        }}
        onClick={handleDropdownToggle}
      >
        <img
          src="../../../assets/images/Three_Dots_icon.png"
          style={{ height: "17px" }}
        ></img>
      </div>
      {isdelete && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "210px",
            height: "140px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "20",
          }}
        >
          <div
            style={{
              width: "100%",
              flex: "1",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "12px",
              textAlign: "center",
              border: "1px solid #B7BBC8",
            }}
          >
            해당 {deleteType}을 삭제하시겠습니까?
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "35px",
              fontSize: "12px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "100%",
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                border: "1px solid #B7BBC8",
                borderRadius: "0px 0px 0px 10px",
              }}
              onClick={handleGoBack}
            >
              취소
            </div>
            <div
              style={{
                height: "100%",
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                border: "1px solid #B7BBC8",
                borderRadius: "0px 0px 10px 0px",
              }}
              onClick={() => Delete()}
            >
              확인
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteButton;
