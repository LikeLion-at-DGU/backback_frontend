import PostDetail from "@/components/common/PostDetail";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PostDetail
        id={"1"}
        category={["헬스", "요가"]}
        title={"안녕하세요"}
        createdAt={"2023-08-14"}
        images={[
          "../../../assets/icons/icon-152x152.png",
          "../../../assets/icons/icon-152x152.png",
          "../../../assets/icons/icon-152x152.png",
          "../../../assets/icons/icon-152x152.png",
        ]}
        content={"이거 예시작성하는게 젤 귀찮네"}
        like_count={6}
        comments_count={6}
        comments={[
          {
            nickname: "닉네임1",
            type: "../../../assets/icons/icon-48x48.png",
            profileimage: "../../../assets/icons/icon-48x48.png",
            comment: "comment",
          },
          {
            nickname: "닉네임1",
            type: "../../../assets/icons/icon-48x48.png",
            profileimage: "../../../assets/icons/icon-48x48.png",
            comment: "comment",
          },
          {
            nickname: "닉네임1",
            type: "../../../assets/icons/icon-48x48.png",
            profileimage: "../../../assets/icons/icon-48x48.png",
            comment: "comment",
          },
          {
            nickname: "닉네임1",
            type: "../../../assets/icons/icon-48x48.png",
            profileimage: "../../../assets/icons/icon-48x48.png",
            comment: "comment",
          },
        ]}
        nickname={"박상준"}
        type={"../../../assets/icons/icon-48x48.png"}
        profileimage={"../../../assets/icons/icon-48x48.png"}
      />
    </>
  );
}