interface ExpertInfoProps {
    infoList: string[]
}

const profileTitleTextStyle = {
    fontWeight: 700,
    fontSize: '16px',
    margin: '13px 0px 6px 26px' 
}

const exportTextStyle = {
    fontWeight: 500,
    fontSize: '12px',
    marginLeft: '26px'
}

export function ExpertInfo({infoList}: ExpertInfoProps) {
    if (!infoList || infoList.length === 0) {
        return null;
    }

    return (
        <div>
            <p
                style={profileTitleTextStyle}
            >
                전문가 정보
            </p>
            <div>
                {infoList.map((info:string, index:number) => (
                    <p
                        style={exportTextStyle}
                    >
                        {info}
                    </p>
                ))}
            </div>
            <hr
                style={{
                    margin: '14px 15px 0px 15px'
                }}
            ></hr>
        </div>
    )
}