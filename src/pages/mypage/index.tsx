import { ExpertInfo } from "@/components/mypage/ExpertInfo";
import { PostList } from "@/components/mypage/PostList";
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

    const postList = [
        {
            id: 1,
            createdAt: "2023.08.05 14:29",
            writer: {
                profileId: 1,
                nickname: "재니재니",
                level: 3,
                type: "TRAINER"
            },
            title: "복부비만 다이어트 식단 정리 공유",
            content: "안녕하세요! 오늘은 복부비만 체형을 가지신 분들을 위해 다이어트 식단을 공유해볼까 해요 :) 직접 겪으면서 만든 식단이라 꿀팁까지 적어놨으니까 유용하게 사용해주세요 ^^ 어쩌구 저쩌구,,,,",
            likesCnt: 10,
            commentsCnt: 100
        },
        {
            id: 2,
            createdAt: "2023.08.05 15:33",
            writer: {
                profileId: 1,
                nickname: "재니재니",
                level: 3,
                type: "TRAINER"
            },
            title: "복부비만 다이어트 식단 정리 공유",
            content: "안녕하세요! 오늘은 복부비만 체형을 가지신 분들을 위해 다이어트 식단을 공유해볼까 해요 :) 직접 겪으면서 만든 식단이라 꿀팁까지 적어놨으니까 유용하게 사용해주세요 ^^ 어쩌구 저쩌구,,,,",
            likesCnt: 9,
            commentsCnt: 12
        },
        {
            id: 3,
            createdAt: "2023.08.13 18:03",
            writer: {
                profileId: 1,
                nickname: "재니재니",
                level: 3,
                type: "TRAINER"
            },
            title: "복부비만 다이어트 식단 정리 공유",
            content: "안녕하세요! 오늘은 복부비만 체형을 가지신 분들을 위해 다이어트 식단을 공유해볼까 해요 :) 직접 겪으면서 만든 식단이라 꿀팁까지 적어놨으니까 유용하게 사용해주세요 ^^ 어쩌구 저쩌구,,,,",
            likesCnt: 1,
            commentsCnt: 192
        }
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
            <PostList isMine={isMine} currentPage={3} totalPages={5} postList={postList} />
        </div>
    )
}