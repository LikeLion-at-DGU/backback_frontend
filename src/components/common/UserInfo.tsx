import React from "react";

export interface UserInfoProps {
  nickname: string;
  type: string;
  image: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ nickname, type, image }) => {
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
        src={image}
        alt="profile"
        style={{
          height: "100%",
          borderRadius: "50%",
          flex: "1",
          marginRight: "5px",
        }}
      ></img>
      <div
        style={{
          flex: "1",
          textAlign: "center",
          whiteSpace: "nowrap",
          fontSize: "18px",
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
          marginLeft: "5px",
        }}
      ></img>
    </div>
  );
};

export default UserInfo;
