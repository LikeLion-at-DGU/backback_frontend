import React from "react";

export interface UserInfoProps {
  nickname: string;
  type: string;
  profileimage: string;
}

const UserInfo: React.FC<UserInfoProps> = ({
  nickname,
  type,
  profileimage,
}) => {
  return (
    <div
      style={{
        height: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <img
        src={profileimage}
        alt="profile"
        style={{
          height: "100%",
          borderRadius: "50%",
          flex: "1",
          marginRight: "10px",
        }}
      ></img>
      <div
        style={{
          flex: "1",
          textAlign: "center",
          whiteSpace: "nowrap",
          fontSize: "16px",
        }}
      >
        {nickname}
      </div>
      <img
        src={type}
        alt="profile"
        style={{
          height: "100%",
          borderRadius: "50%",
          flex: "1",
          marginLeft: "10px",
        }}
      ></img>
    </div>
  );
};

export default UserInfo;
