import React, { useState } from "react";
import styled from "styled-components";

export const ReportBox = styled.div`
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

const ReportButton = () => {
  const [isopen, setIsopen] = useState(false);
  const [report, setReport] = useState(false);
  const [reportReason, setReportReason] = useState("");
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const handleDropdownToggle = (e: any) => {
    setIsopen(!isopen);

    // Calculate dropdown position based on the clicked Comment's position
    const rect = e.currentTarget.getBoundingClientRect();
    const top = rect.bottom + window.scrollY;
    const left = rect.left + window.scrollX;

    setDropdownPosition({ top, left });
  };

  const handleGoBack = () => {
    setIsopen(!isopen);
  };
  const handleReport = () => {
    setReport(!report);
    setIsopen(!isopen);
  };
  const handleReportReason = (e: string) => {
    setReport(!report);
    setReportReason(e);
  };
  const handleReportCancel = () => {
    setReportReason("");
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
            height: "30px",
            display: "flex",
            padding: "0px 5px 0px 5px",
            backgroundColor: "white",
          }}
          onClick={handleReport}
        >
          <div
            style={{
              border: "0.5px solid black",
              width: "100px",
              height: "100%",
              fontSize: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              padding: "0px 5px 0px 5px",
            }}
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
              신고하기
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
                src="../../../assets/images/Report_icon.png"
                style={{ height: "14px" }}
              ></img>
            </div>
          </div>
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
      {report && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "230px",
            height: "286px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "10",
          }}
        >
          <div
            style={{
              width: "100%",
              flex: "1",
              backgroundColor: "#B7BBC8",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ flex: "1" }}></div>
            <div
              style={{
                flex: "5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              신고 사유
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="../../../assets/images/Cancel_icon.png"
                style={{
                  width: "15px",
                  height: "15px",
                  cursor: "pointer",
                }}
                onClick={handleReport}
              ></img>
            </div>
          </div>
          <ReportBox
            onClick={() => handleReportReason("게시판 성격에 부적절함")}
          >
            게시판 성격에 부적절함
          </ReportBox>
          <ReportBox
            onClick={() => handleReportReason("정당/정치인 비하 및 선거운동")}
          >
            정당/정치인 비하 및 선거운동
          </ReportBox>
          <ReportBox
            onClick={() => handleReportReason("음란물/불건전한 만남 및 대화")}
          >
            음란물/불건전한 만남 및 대화
          </ReportBox>
          <ReportBox onClick={() => handleReportReason("유출/사칭/사기")}>
            유출/사칭/사기
          </ReportBox>
          <ReportBox onClick={() => handleReportReason("욕설/비하")}>
            욕설/비하
          </ReportBox>
          <ReportBox onClick={() => handleReportReason("낚시/놀람/도배")}>
            낚시/놀람/도배
          </ReportBox>
          <ReportBox onClick={() => handleReportReason("상업적 광고 및 판매")}>
            상업적 광고 및 판매
          </ReportBox>
        </div>
      )}
      {reportReason && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "235px",
            height: "210px",
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
              height: "40px",
              backgroundColor: "#B7BBC8",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "14px",
              borderRadius: "10px 10px 0px 0px",
            }}
          >
            {reportReason}
          </div>
          <div
            style={{
              width: "100%",
              flex: "1",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "10px",
              textAlign: "center",
              border: "1px solid #B7BBC8",
            }}
          >
            게시물의 주제가 게시판의 성격에 크게 벗어나,
            <br />
            다른 이용자에게 불편을 끼칠 수 있는 게시물입니다.
            <br />
            <br />
            신고는 반대 의견을 나타내는 기능이 아닙니다.
            <br />
            신고 사유에 맞지 않는 신고를 했을 경우,
            <br />
            해당 신고는 처리되지 않습니다.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "40px",
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
              onClick={handleReportCancel}
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
              onClick={handleReportCancel}
            >
              확인
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportButton;
