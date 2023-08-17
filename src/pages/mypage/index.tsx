import { ExpertInfo } from "@/components/mypage/ExpertInfo";
import { PostList } from "@/components/mypage/PostList";
import { Profile, ProfileData } from "@/components/mypage/profile";
import { ScrollContent } from "@/components/common/post/PostDetail";
import { CompletedPool } from "@/components/mypage/CompletedPool";
import profileApi from "@/apis/profileApi";
import { useEffect, useState } from "react";

export default function MyPage() {
  const isMine: boolean = true;
  const [profileData, setProfileData] = useState<ProfileData>({
    id: 0,
    nickname: "",
    intro: "",
    level: 0,
    following_cnt: 0,
    follower_cnt: 0,
    type: "",
    user_id: 0,
  });
  const [expertInfoData, setExportInfo] = useState<string[]>([]);
  const [joinDate, setJoinDate] = useState<string>("");
  const [userId, setUserId] = useState<number>(0);
  const processProfileData = (data: any) => {
    setProfileData({
      id: data.id,
      nickname: data.nickname,
      intro: data.intro,
      level: 3,
      following_cnt: data.followingCnt,
      follower_cnt: data.followerCnt,
      type: data.type,
      user_id: data.userId,
    });
  };
  useEffect(() => {
    profileApi()
      .getMe()
      .then((res) => {
        processProfileData(res.data);
        setExportInfo(Object.values(res.data.info));
        setJoinDate(res.data.joinedAt);
        setUserId(res.data.userId);
      });
  }, []);

  const postList = [
    {
      id: 1,
      createdAt: "2023.08.05 14:29",
      writer: {
        profileId: 1,
        nickname: "재니재니",
        level: 3,
        type: "TRAINER",
      },
      title: "복부비만 다이어트 식단 정리 공유",
      content:
        "안녕하세요! 오늘은 복부비만 체형을 가지신 분들을 위해 다이어트 식단을 공유해볼까 해요 :) 직접 겪으면서 만든 식단이라 꿀팁까지 적어놨으니까 유용하게 사용해주세요 ^^ 어쩌구 저쩌구,,,,",
      likesCnt: 10,
      commentsCnt: 100,
    },
  ];

  return (
    <ScrollContent>
      <div
        style={{
          width: "100%",
          display: "block",
          flexDirection: "column",
          alignItems: "center",
          flex: "1",
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <div>
          <Profile profile={profileData} is_mine={isMine} />
          <hr
            style={{
              margin: "0 15px",
            }}
          ></hr>
          <CompletedPool joinDate={joinDate} userId={userId} />
          {profileData.type !== "COMMON" && (
            <ExpertInfo infoList={expertInfoData} />
          )}
          <PostList
            isMine={isMine}
            currentPage={3}
            totalPages={5}
            postList={postList}
          />
        </div>
      </div>
    </ScrollContent>
  );
}
