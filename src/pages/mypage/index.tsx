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
  const [isFollow, setIsFollow] = useState(false);
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
          <Profile
            profile={profileData}
            is_mine={isMine}
            isFollow={isFollow}
            setIsFollow={setIsFollow}
          />
          <hr
            style={{
              margin: "0 15px",
            }}
          ></hr>
          <CompletedPool joinDate={joinDate} userId={userId} />
          {profileData.type !== "COMMON" && (
            <ExpertInfo infoList={expertInfoData} />
          )}
          <PostList isMine={isMine} userId={userId} />
        </div>
      </div>
    </ScrollContent>
  );
}
