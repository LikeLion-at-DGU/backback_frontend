import HomePage from "@/components/home/HomePage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <HomePage
      images={[
        "./../../assets/images/Column_img.png",
        "../../assets/images/Column_img.png",
        "../../assets/images/Column_img.png",
        "../../assets/images/Column_img.png",
      ]}
      posts={[
        {
          id: "1",
          category: ["ㅋ"],
          nickname: "닉네임",
          type: "../../../assets/icons/icon-48x48.png",
          profileimage: "../../../assets/icons/icon-48x48.png",
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
          profileimage: "../../../assets/icons/icon-48x48.png",
          title: "abc",
          createdAt: "2021-01-01",
          like_count: 1,
          comments_count: 6,
          content:
            "abcdeafwㅁㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷefew",
        },
        {
          id: "3",
          category: ["ㅋ"],
          nickname: "닉네임",
          type: "../../../assets/icons/icon-48x48.png",
          profileimage: "../../../assets/icons/icon-48x48.png",
          title: "abc",
          createdAt: "2021-01-01",
          like_count: 1,
          comments_count: 6,
          content:
            "abcdeafwㅁㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷefew",
        },
        {
          id: "4",
          category: ["ㅋ"],
          nickname: "닉네임",
          type: "../../../assets/icons/icon-48x48.png",
          profileimage: "../../../assets/icons/icon-48x48.png",
          title: "abc",
          createdAt: "2021-01-01",
          like_count: 1,
          comments_count: 6,
          content:
            "abcdeafwㅁㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷefew",
        },
        {
          id: "5",
          category: ["ㅋ"],
          nickname: "닉네임",
          type: "../../../assets/icons/icon-48x48.png",
          profileimage: "../../../assets/icons/icon-48x48.png",
          title: "abc",
          createdAt: "2021-01-01",
          like_count: 1,
          comments_count: 6,
          content:
            "abcdeafwㅁㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷefew",
        },
        {
          id: "6",
          category: ["ㅋ"],
          nickname: "닉네임",
          type: "../../../assets/icons/icon-48x48.png",
          profileimage: "../../../assets/icons/icon-48x48.png",
          title: "abc",
          createdAt: "2021-01-01",
          like_count: 1,
          comments_count: 6,
          content:
            "abcdeafwㅁㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷefew",
        },
        {
          id: "7",
          category: ["ㅋ"],
          nickname: "닉네임",
          type: "../../../assets/icons/icon-48x48.png",
          profileimage: "../../../assets/icons/icon-48x48.png",
          title: "abc",
          createdAt: "2021-01-01",
          like_count: 1,
          comments_count: 6,
          content:
            "abcdeafwㅁㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷefew",
        },
      ]}
    />
  );
}
