import { useEffect, useState } from "react";
import { MyPageDropDown } from "./mypagedropdown";
import { ReportDropDown } from "./reportdropdown";
import Modal from "./Modal";
import profileApi from "@/apis/profileApi";

export interface ProfileData {
  id: number;
  nickname: string;
  intro: string;
  level: number;
  following_cnt: number;
  follower_cnt: number;
  type: string;
  user_id: number;
}

interface ProfileProps {
  profile: ProfileData;
  is_mine: boolean;
}

const copyIconStyle = {
  marginLeft: "14px",
  width: "16px",
  height: "14px",
};

const updateTitleStyle = {
  fontFamily: "MainFont",
  fontSize: "14px",
  marginRight: "15px",
};

const updateInputStyle = {
  marginLeft: "auto",
  fontFamily: "MainFont",
  fontSize: "12px",
  padding: "5px 10px 3px 10px",
  border: "1px solid rgba(183, 187, 200, 1)",
  borderRadius: "10px",
};

export function Profile({ profile, is_mine }: ProfileProps) {
  const imagePath = `/assets/images/Character${profile.level}.png`;
  const exportIconPath = "/assets/images/Expert_icon.png";
  const threeDotIconPath = "/assets/images/Three_Dots_icon.png";
  const copyIconPath = "assets/images/Copy_icon.png";

  const [nickname, setNickname] = useState("");
  const [intro, setIntro] = useState("");

  const handleNicknameChange = (event: any) => {
    setNickname(event.target.value);
  };

  const handleIntroChange = (event: any) => {
    setIntro(event.target.value);
  };

  const [isMyPageDropdownOpen, setIsMyPageDropDownOpen] = useState(false);
  const myPageDropdown = () => {
    setIsMyPageDropDownOpen(!isMyPageDropdownOpen);
  };

  const [isFollow, setIsFollow] = useState(false);
  const follow = () => {
    setIsFollow(!isFollow);
  };

  const [isReportDropdownOpen, setIsReportDropdownOpen] = useState(false);
  const reportDropdown = () => {
    setIsReportDropdownOpen(!isReportDropdownOpen);
  };

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const handleReportItemClick = () => {
    setIsReportModalOpen(true);
    reportDropdown();
  };

  const closeReportModal = () => {
    setIsReportModalOpen(false);
  };

  const confirmReportModal = () => {
    // 동작 추가해야함~
    setIsReportModalOpen(false);
  };

  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  const handleExpertItemClick = () => {
    setIsExpertModalOpen(true);
    myPageDropdown();
  };

  const colseExpertModal = () => {
    setIsExpertModalOpen(false);
  };

  const confirmExpertModal = () => {
    setIsExpertModalOpen(false);
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDeleteItemClick = () => {
    setIsDeleteModalOpen(true);
    myPageDropdown();
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const confirmDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const handelUpdateItemClick = () => {
    setIsUpdateModalOpen(true);
    myPageDropdown();
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  const confirmUpdateModal = () => {
    profileApi()
      .patchMe({
        nickname: nickname,
        intro: intro,
      })
      .then((res) => {
        window.location.reload();
      });
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <img
        src={imagePath}
        style={{
          width: "125px",
          height: "129px",
          margin: "19px 25px 17px 17px",
        }}
      />
      <div
        style={{
          width: "100%",
          margin: "21px 15px 19px 0px",
        }}
      >
        <div
          style={{
            fontFamily: "BoldFont",
            fontSize: "22px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          {profile.nickname}
          {profile.type !== "COMMON" && (
            <img
              src={exportIconPath}
              style={{
                width: "16px",
                height: "16px",
                marginLeft: "3px",
              }}
            />
          )}
          <div
            style={{
              position: "relative",
              width: "17px",
              height: "17px",
              marginLeft: "auto",
              marginRight: "12px",
              marginBottom: "15px",
            }}
            onClick={myPageDropdown}
          >
            {is_mine && (
              <img src={threeDotIconPath} style={{ width: "100%" }} />
            )}
            {isMyPageDropdownOpen && (
              <MyPageDropDown
                handleExpertItemClick={handleExpertItemClick}
                handleDeleteItemClick={handleDeleteItemClick}
                handleUpdateItemClick={handelUpdateItemClick}
              />
            )}
            {isUpdateModalOpen && (
              <Modal
                onClose={closeUpdateModal}
                onConfirm={confirmUpdateModal}
                title={"프로필 수정"}
                isRed={false}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p style={updateTitleStyle}>닉네임</p>
                  <textarea
                    style={updateInputStyle}
                    rows={1}
                    value={nickname}
                    onChange={handleNicknameChange}
                  ></textarea>
                </div>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <p style={updateTitleStyle}>한줄 소개</p>
                  <textarea
                    style={updateInputStyle}
                    rows={3}
                    value={intro}
                    onChange={handleIntroChange}
                  ></textarea>
                </div>
              </Modal>
            )}
            {isExpertModalOpen && (
              <Modal
                onClose={colseExpertModal}
                onConfirm={confirmExpertModal}
                title={"전문가 인증"}
                isRed={false}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "MainFont",
                      fontSize: "16px",
                      color: "rgba(77, 46, 39, 1)",
                    }}
                  >
                    ulkkeun.official@gmail.com
                  </p>
                  <img
                    src={copyIconPath}
                    style={copyIconStyle}
                    onClick={() => copyClipBoard("ulkkeun.official@gmail.com")}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "MainFont",
                    fontSize: "14px",
                  }}
                >
                  전문가 인증 마크를 위해 전문가 관련 자격증, 서류등의 사진을 위
                  이메일로 보내주세요.<br></br>주민등록번호 등의 개인정보는
                  가려서 첨부해주세요.<br></br>
                  <br></br>예시) 생활스포츠지도사, 필라테스 지도사 자격증 등
                  <br></br>
                  <br></br>해당 인증 마크는 관리자의 확인을 거쳐 부여됩니다.
                </p>
              </Modal>
            )}
            {isDeleteModalOpen && (
              <Modal
                onClose={closeDeleteModal}
                onConfirm={confirmDeleteModal}
                title={"탈퇴하기"}
                isRed={true}
              >
                <p>
                  정말로 탈퇴하시겠습니까?<br></br>모든 게시물과 댓글 등의
                  데이터가 모두 삭제됩니다
                </p>
              </Modal>
            )}
          </div>
          {!is_mine && (
            <p
              style={{
                fontSize: "12px",
                fontFamily: "MainFont",
                marginLeft: "auto",
                border: "1px solid rgba(183, 187, 200, 1)",
                padding: "2px 12px 1px 12px",
                borderRadius: "10px",
                backgroundColor: isFollow ? "rgba(183, 187, 200, 1)" : "white",
                color: isFollow ? "white" : "rgba(0, 0, 0, 1)",
              }}
              onClick={follow}
            >
              {isFollow ? "팔로잉" : "팔로우"}
            </p>
          )}
        </div>
        <p
          style={{
            marginTop: "5px",
            width: "100%",
            fontFamily: "MainFont",
            fontSize: "14px",
          }}
        >
          {profile.intro}
        </p>
        <div
          style={{
            marginTop: "26px",
            fontFamily: "MainFont",
            display: "flex",
          }}
        >
          <p
            style={{
              marginRight: "20px",
            }}
          >
            팔로워 {profile.follower_cnt}
          </p>
          <p>팔로잉 {profile.following_cnt}</p>
          <div
            style={{
              position: "relative",
              marginLeft: "auto",
            }}
          >
            {!is_mine && (
              <img
                src={threeDotIconPath}
                style={{
                  width: "17px",
                  height: "17px",
                  marginLeft: "auto",
                  marginRight: "2px",
                }}
                onClick={reportDropdown}
              />
            )}
            {isReportDropdownOpen && (
              <ReportDropDown handleReportItemClick={handleReportItemClick} />
            )}
            {isReportModalOpen && (
              <Modal
                onClose={closeReportModal}
                onConfirm={confirmReportModal}
                title={"계정 신고"}
                isRed={false}
              >
                <p>
                  해당 신고는 익명으로 처리됩니다. 해당 계정을 신고하시겠습니까?
                </p>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const copyClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("클립보드에 링크가 복사되었어요.");
  } catch (err) {
    console.log(err);
  }
};
