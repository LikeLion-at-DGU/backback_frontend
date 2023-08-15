import { ExpertInfo } from "@/components/mypage/ExpertInfo";
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

    const expertInfo = [
        "생활스포츠지도사 2급",
        "EPCI 필라테스 지도자 자격증 LV.1",
        "경희대학교 스포츠의학과 졸업",
        "나의근육사용설명서 근막스트레칭 마스터"
    ]

    const isMine = false;

    return (
        <div>
            <Profile profile={profileData} is_mine={isMine} />
            <hr
                style={{
                    margin: '0 15px'
                }}
            ></hr>
            <ExpertInfo infoList={expertInfo} />
        </div>
    )
}