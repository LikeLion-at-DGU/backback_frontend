import { Profile } from "@/components/mypage/Profile";
import { Inter } from "next/font/google";

export default function MyPage(){
    const profileData = {
        id: 1,
        nickname: "재니재니",
        intro: "헬스장 한 달 이용권 끊으면 삼일 정도 출석하는 헬린이🥲",
        level: 3,
        following_cnt: 100,
        follower_cnt: 100,
        type: "TRAINER",
        user_id: 1
    };

    return (
        <div>
            <Profile profile={profileData} is_mine={false} />
            <hr
                style={{
                    margin: '0 15px'
                }}
            ></hr>
        </div>
    )
}