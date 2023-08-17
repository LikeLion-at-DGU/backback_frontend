import {
  PopularColumnList,
  PopularPostList,
} from "@/components/common/Popular";
import NavBar from "@/layouts/components/NavBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <NavBar />
      <PopularPostList
        posts={[
          {
            id: "1",
            category: ["ㅋ"],
            nickname: "닉네임",
            type: "../../../assets/icons/icon-48x48.png",
            profileId: "2",
            level: 1,
            title: "abc",
            createdAt: "2021-01-01",
            like_count: 1,
            comments_count: 6,
            content:
              "abcdeafwㅁㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷefew",
          },
          {
            id: "2",
            category: ["ㅋ"],
            nickname: "닉네임",
            type: "../../../assets/icons/icon-48x48.png",
            profileId: "2",
            level: 1,
            title: "abc",
            createdAt: "2021-01-01",
            like_count: 1,
            comments_count: 6,
            content:
              "abcdeafwㅁㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷefew",
          },
        ]}
      />

      <PopularColumnList
        columns={[
          {
            id: "1",
            nickname: "요가마스터",
            createdAt: "August 06 2023",
            title: "쌩초보를 위한 아쉬탕가 요가의 시작",
            type: "../../../assets/images/Expert_icon.png",
            content:
              "인도의 파탄잘리가 고안한 요가 수련의 8단계를 기초로 둔 8개의 자기라는 뜻의 요가로, 인도 마이소르에 있는 아쉬탕가의 어쩌구저쩌구",
            views: 13048,
            image: "../../../assets/images/Column_img.png",
            profileId: "2",
          },
          {
            id: "2",
            nickname: "요가마스터",
            createdAt: "August 06 2023",
            title: "쌩초보를 위한 아쉬탕가 요가의 시작",
            type: "../../../assets/images/Expert_icon.png",
            content:
              "인도의 파탄잘리가 고안한 요가 수련의 8단계를 기초로 둔 8개의 자기라는 뜻의 요가로, 인도 마이소르에 있는 아쉬탕가의 어쩌구저쩌구",
            views: 13048,
            image: "../../../assets/images/Column_img.png",
            profileId: "2",
          },
          {
            id: "3",
            nickname: "요가마스터",
            createdAt: "August 06 2023",
            title: "쌩초보를 위한 아쉬탕가 요가의 시작",
            type: "../../../assets/images/Expert_icon.png",
            content:
              "인도의 파탄잘리가 고안한 요가 수련의 8단계를 기초로 둔 8개의 자기라는 뜻의 요가로, 인도 마이소르에 있는 아쉬탕가의 어쩌구저쩌구",
            views: 13048,
            image: "../../../assets/images/Column_img.png",
            profileId: "2",
          },
        ]}
      />
    </>
  );
}
