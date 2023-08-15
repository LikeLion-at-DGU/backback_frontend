interface PostPageProps {
  currentPage: number;
  totalPages: number;
}

const postPageIconStyle = {
  width: "6px",
  height: "11px",
};

const postPageTextStyle = {
  fontWeight: 400,
  fontSize: "14px",
  margin: "10px 13px",
};

export function PostPage({ currentPage, totalPages }: PostPageProps) {
  const categoryLeftIconPath = "/assets/images/Category_Left_icon.png";
  const categoryRightIconPath = "/assets/images/Category_right_icon.png";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={categoryLeftIconPath} style={postPageIconStyle} />
      <p style={postPageTextStyle}>
        {currentPage}/{totalPages}
      </p>
      <img src={categoryRightIconPath} style={postPageIconStyle} />
    </div>
  );
}
