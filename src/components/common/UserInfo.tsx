import React from "react";

export interface UserInfoProps {
  profileId: string;
  nickname: string;
  type: string;
  level?: number;
}

const UserInfo: React.FC<UserInfoProps> = ({
  profileId,
  nickname,
  type,
  level,
}) => {
  let profileimage = "";
  if (level) {
    profileimage = `../../../assets/images/Character${level}.png`;
  }
  let typeimage = "";
  if (type !== "COMMON") {
    typeimage = "../../../assets/images/Expert_icon.png";
  }
  return (
    <div
      style={{
        height: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {profileimage && (
        <img
          src={profileimage}
          alt="profile"
          style={{
            height: "100%",
            borderRadius: "50%",
            flex: "1",
            marginRight: "7px",
          }}
        ></img>
      )}
      <div
        style={{
          flex: "1",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        {nickname}
      </div>
      {typeimage && (
        <img
          src={typeimage}
          alt="profile"
          style={{
            height: "14px",
            flex: "1",
            marginLeft: "3px",
          }}
        ></img>
      )}
    </div>
  );
};

export default UserInfo;
