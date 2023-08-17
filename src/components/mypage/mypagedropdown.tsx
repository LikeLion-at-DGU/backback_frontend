interface MyPageDropDownProps {
  handleExpertItemClick: any;
  handleDeleteItemClick: any;
  handleLogoutItemClick: any;
  handleUpdateItemClick: any;
}

const listItemStyle = {
  border: "1px solid rgba(183, 187, 200, 1)",
  display: "flex",
  alignItems: "center",
};

const listItemTextStyle = {
  marginLeft: "10px",
  marginTop: "5px",
  marginBottom: "4px",
  marginRight: "10px",
  fontFamily: "MainFont",
  fontSize: "14px",
  whiteSpace: "nowrap",
} as React.CSSProperties;

const redListItemTextStyle = {
  ...listItemTextStyle,
  color: "rgba(248, 51, 61, 1)",
};

const listItemProfileStyle = {
  marginLeft: "auto",
  width: "15px",
  height: "15px",
  marginRight: "10px",
};

export { listItemStyle, listItemTextStyle, listItemProfileStyle };

export function MyPageDropDown({
  handleExpertItemClick: handleExpertItemClick,
  handleDeleteItemClick: handleDeleteItemClick,
  handleLogoutItemClick: handleLogoutItemClick,
  handleUpdateItemClick: handelUpdateItemClick,
}: MyPageDropDownProps) {
  const updateIconPath = "/assets/images/Update_icon.png";
  const logoutIconPath = "/assets/images/Logout_icon.png";
  const expertIconPath = "/assets/images/Expert_Check_icon.png";
  const deleteIconPath = "/assets/images/Delete_Red_icon.png";

  return (
    <div
      style={{
        position: "absolute",
        top: "26px",
        right: "0px",
        backgroundColor: "white",
        zIndex: 1000,
      }}
    >
      <ul
        style={{
          listStyle: "none",
        }}
      >
        <li
          style={{
            ...listItemStyle,
            borderBottom: "none",
          }}
          onClick={handelUpdateItemClick}
        >
          <p style={listItemTextStyle}>수정하기</p>
          <img src={updateIconPath} style={listItemProfileStyle} />
        </li>
        <li
          style={{
            ...listItemStyle,
            borderBottom: "none",
          }}
          onClick={handleLogoutItemClick}
        >
          <p style={listItemTextStyle}>로그아웃</p>
          <img src={logoutIconPath} style={listItemProfileStyle} />
        </li>
        <li
          style={{
            ...listItemStyle,
            borderBottom: "none",
          }}
          onClick={handleExpertItemClick}
        >
          <p style={listItemTextStyle}>전문가 인증</p>
          <img src={expertIconPath} style={listItemProfileStyle} />
        </li>
        <li style={listItemStyle} onClick={handleDeleteItemClick}>
          <p style={redListItemTextStyle}>탈퇴하기</p>
          <img src={deleteIconPath} style={listItemProfileStyle} />
        </li>
      </ul>
    </div>
  );
}
