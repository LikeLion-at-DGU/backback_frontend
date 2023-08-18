export interface PostPageProps {
  page: number;
  isNext: boolean;
  isPrevious: boolean;
  total: number;
  setPage: (newValue: number) => void;
}

const postPageIconStyle = {
  width: "6px",
  height: "11px",
};

const postPageTextStyle = {
  fontFamily: "MainFont",
  fontSize: "14px",
  margin: "10px 13px",
};

export function PostPage({
  page,
  isNext,
  isPrevious,
  setPage,
  total,
}: PostPageProps) {
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
      {isPrevious && (
        <img
          src={categoryLeftIconPath}
          style={postPageIconStyle}
          onClick={() => setPage(page - 1)}
        />
      )}
      <p style={postPageTextStyle}>
        {page}/{total}
      </p>
      {isNext && (
        <img
          src={categoryRightIconPath}
          style={postPageIconStyle}
          onClick={() => setPage(page + 1)}
        />
      )}
    </div>
  );
}
