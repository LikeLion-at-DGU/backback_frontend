import { useState } from "react";
import { listItemStyle, listItemTextStyle, listItemProfileStyle } from "./MypageDropdown";

interface ReportDropDownProps {
    reportDropDown: any;
}

export function ReportDropDown({reportDropDown: reportDropDown}: ReportDropDownProps) {
    const reportIconPath = '/assets/images/Report_icon.png';

    const [isReportModalOpen, setIsReportModalOpen] = useState(false);
    const handleReportItemClick = () => {
        setIsReportModalOpen(true);
        reportDropDown();
    }

    return(
        <div
        style={{
            position:'absolute',
            top:'21px',
            right:'0px',
            backgroundColor: 'white',
            zIndex: 1000,
        }}
        >
            <ul
                style={{
                    listStyle: 'none'
                }}
            >
                <li
                    style={listItemStyle}
                    onClick={reportDropDown}
                >
                    <p style={listItemTextStyle}>신고하기</p>
                    <img src={reportIconPath} style={listItemProfileStyle}/>
                </li>
            </ul>
        </div>
    )
}