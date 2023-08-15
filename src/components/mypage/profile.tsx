import { useState } from "react";
import { MyPageDropDown } from "./MypageDropdown";
import { ReportDropDown } from "./ReportDropdown";
import Modal from "./Modal";

interface Profile {
    id: number;
    nickname: string;
    intro: string;
    level: number
    following_cnt: number;
    follower_cnt: number;
    type: string;
    user_id: number;
}

interface ProfileProps {
    profile: Profile;
    is_mine: boolean;
}

export function Profile({profile, is_mine}: ProfileProps) {
    const imagePath = `/assets/images/Character${profile.level}.png`;
    const exportIconPath = '/assets/images/Expert_icon.png';
    const threeDotIconPath = '/assets/images/Three_Dots_icon.png';

    const [isMyPageDropdownOpen, setIsMyPageDropDownOpen] = useState(false);
    const myPageDropdown = () => {
        setIsMyPageDropDownOpen(!isMyPageDropdownOpen)
    }

    const [isFollow, setIsFollow] = useState(false);
    const follow = () => {
        setIsFollow(!isFollow)
    }

    const [isReportDropdownOpen, setIsReportDropdownOpen] = useState(false);
    const reportDropDown = () => {
        setIsReportDropdownOpen(!isReportDropdownOpen)
    }

    const [isReportModalOpen, setIsReportModalOpen] = useState(false);
    const handleReportItemClick = () => {
        setIsReportModalOpen(true);
        reportDropDown();
    }

    const closeReportModal = () => {
        setIsReportModalOpen(false);
    }

    const confirmReportModal = () => {
        // 동작 추가해야함~
        setIsReportModalOpen(false);
    }

    return (
        <div
            style={{
                display: "flex"
            }}
        >
            <img 
                src={imagePath} 
                style={{ 
                    width: '125px',
                    height: '129px',
                    margin: '19px 25px 17px 17px'
                }}
            />
            <div
                style={{
                    margin: '21px 15px 19px 0px'
                }}
            >
                <div
                    style={{
                        fontWeight: 700,
                        fontSize: '22px',
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    {profile.nickname}
                    {profile.type !== 'COMMON' && (
                        <img
                            src={exportIconPath}
                            style={{
                                width: '16px',
                                height: '16px',
                                marginLeft: '3px'

                            }}
                        />
                    )}
                    <div 
                    style={{
                        position: 'relative',
                        marginLeft: 'auto'
                    }}
                    >
                        {is_mine && (
                            <img
                                src={threeDotIconPath}
                                style={{
                                    width: '17px',
                                    height: '17px',
                                    marginLeft: 'auto',
                                    marginRight: '12px'
                                }}
                                onClick={myPageDropdown}
                            />
                        )}
                        {isMyPageDropdownOpen && (
                            <MyPageDropDown/>
                        )}
                    </div>
                    {!is_mine && (
                        <p
                            style={{
                                fontSize: '12px',
                                fontWeight: 500,
                                marginLeft: 'auto',
                                border: '1px solid rgba(183, 187, 200, 1)',
                                padding: '2px 12px 1px 12px',
                                borderRadius: '10px',
                                backgroundColor: isFollow ? 'rgba(183, 187, 200, 1)' : 'white',
                                color: isFollow ? 'white' : 'rgba(0, 0, 0, 1)',
                            }}
                            onClick={follow}
                        >
                            {isFollow ? '팔로잉' : '팔로우'}
                        </p>
                    )}
                </div>
                <p
                    style={{
                        marginTop: '5px',
                        width: "100%",
                        fontWeight: 500,
                        fontSize: '14px'
                    }}
                >
                    {profile.intro}
                </p>
                <div
                   style={{
                        marginTop: '26px',
                        fontWeight: 500,
                        display: "flex"
                   }} 
                >
                    <p
                        style={{
                            marginRight: '20px'
                        }}
                    >
                        팔로워 {profile.follower_cnt}
                    </p>
                    <p>
                        팔로잉 {profile.following_cnt}
                    </p>
                    <div
                        style={{
                            position: 'relative',
                            marginLeft: 'auto'
                        }}
                    >
                        {!is_mine && (
                            <img
                                src={threeDotIconPath}
                                style={{
                                    width: '17px',
                                    height: '17px',
                                    marginLeft: 'auto',
                                    marginRight: '2px'
                                }}
                                onClick={reportDropDown}
                            />
                        )}
                        {isReportDropdownOpen && (
                            <ReportDropDown handleReportItemClick={handleReportItemClick}/>
                        )}
                        {isReportModalOpen && (
                            <Modal onClose={closeReportModal} onConfirm={confirmReportModal}>
                                <p>해당 신고는 익명으로 처리됩니다. 해당 계정을 신고하시겠습니까?</p>
                            </Modal>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}