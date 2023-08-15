interface Writer {
  profileId: number;
  nickname: string;
  level: number;
  type: string;
}

export interface Post {
  id: number;
  createdAt: string;
  writer: Writer;
  title: string;
  content: string;
  likesCnt: number;
  commentsCnt: number;
}

interface PostProps {
  post: Post;
}

const postProfileImageStyle = {
  width: "25px",
  height: "25px",
  marginRight: "8px",
};

const postProfileNicknameStyle = {
  fontWeight: 500,
  fontSize: "14px",
};

const postProfileDateStyle = {
  fontWeight: 500,
  fontSize: "10px",
  marginLeft: "auto",
};

const postDetailStyle = {
  marginLeft: "39px",
  marginRight: "39px",
};

const postDetailTitleStyle = {
  fontWeight: 700,
  fontSize: "14px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%",
} as React.CSSProperties;

const postSubTextStyle = {
  fontWeight: 500,
  fontSize: "10px",
} as React.CSSProperties;

export function Post({ post }: PostProps) {
  const profileImagePath = `/assets/images/Character${post.writer.level}.png`;
  const exportIconPath = "/assets/images/Expert_icon.png";
  const likeIconPath = "/assets/images/Like_icon.png";
  const messageIconPath = "/assets/images/Message_icon.png";

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "10px 37px 9px 26px",
        }}
      >
        <img src={profileImagePath} style={postProfileImageStyle} />
        <p style={postProfileNicknameStyle}>{post.writer.nickname}</p>
        {post.writer.type != "COMMON" && (
          <img
            src={exportIconPath}
            style={{
              width: "16px",
              height: "16px",
              marginLeft: "3px",
            }}
          />
        )}
        <p style={postProfileDateStyle}>{post.createdAt}</p>
      </div>
      <div style={postDetailStyle}>
        <p style={postDetailTitleStyle}>{post.title}</p>
        <p style={postSubTextStyle}>{post.content}</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "2px 22px 6px 35px",
        }}
      >
        <img
          src={likeIconPath}
          style={{
            width: "16px",
            height: "16px",
            marginRight: "4px",
          }}
        />
        <p
          style={{
            ...postSubTextStyle,
            marginRight: "4px",
          }}
        >
          {post.likesCnt}
        </p>
        <img
          src={messageIconPath}
          style={{
            width: "10px",
            height: "11px",
            marginRight: "4px",
          }}
        />
        <p style={postSubTextStyle}>{post.commentsCnt}</p>
      </div>
      <hr
        style={{
          margin: "0 15px",
        }}
      ></hr>
    </div>
  );
}
