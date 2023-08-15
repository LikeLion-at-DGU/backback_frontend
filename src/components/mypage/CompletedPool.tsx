import { Pool } from "./pool"

interface CompletedPoolProps {
    joinDate: string,
    completedList: number[]
}

const completedPoolTitleTextstyle = {
    fontWeight: 700,
    fontSize: '16px'
}

const comletedPoolDateTextStyle = {
    fontWeight: 500,
    fontSize: '12px',
    marginLeft: 'auto',
    marginRight: '5px'
}

const completedPoolImageStyle = {
    width: '14px',
    height: '8px',
    marginRight: '34px'
}

export function CompletedPool({joinDate, completedList}: CompletedPoolProps) {
    const categotyUnderIconPath = '/assets/images/Category_Under_icon.png'
    const joinDateForm = new Date(joinDate);
    const joinYear = joinDateForm.getFullYear();
    const joinMonth = joinDateForm.getMonth() + 1;

    return(
        <div>
            <div
                style={{
                    display: 'flex',
                    margin: '12px 0px 0px 26px',
                    alignItems: "center"
                }}
            >
                <p
                    style={completedPoolTitleTextstyle}
                >
                    오운완 POOL
                </p>
                <p
                    style={comletedPoolDateTextStyle}
                >
                    {joinYear}년 {joinMonth}월
                </p>
                <img
                    src={categotyUnderIconPath}
                    style={completedPoolImageStyle}
                />
            </div>
            <div
                style={{
                    overflowX: 'auto'
                }}
            >
                <Pool completedList={completedList}/>
            </div>
            <hr
                style={{
                    margin: '0 15px'
                }}
            ></hr>
        </div>
    )
}