import { listItemStyle, listItemTextStyle, listItemProfileStyle } from "./mypagedropdown";

export function ReportDropDown() {
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
                >
                    <p style={listItemTextStyle}>신고하기</p>
                    <img src={reportIconPath} style={listItemProfileStyle}/>
                </li>
            </ul>
        </div>
    )
}