import { listItemStyle, listItemTextStyle, listItemProfileStyle } from "./MypageDropdown";

interface ReportDropDownProps {
    handleReportItemClick: any;
}

export function ReportDropDown({handleReportItemClick: handleReportItemClick}: ReportDropDownProps) {
    const reportIconPath = '/assets/images/Report_icon.png';

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
                    onClick={handleReportItemClick}
                >
                    <p style={listItemTextStyle}>신고하기</p>
                    <img src={reportIconPath} style={listItemProfileStyle}/>
                </li>
            </ul>
        </div>
    )
}