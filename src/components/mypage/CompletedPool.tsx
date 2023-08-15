import { DateDropdown } from "./DateDropdown";
import { Pool } from "./pool";

interface CompletedPoolProps {
  joinDate: string;
  completedList: number[];
}

const completedPoolTitleTextstyle = {
  fontFamily: "BoldFont",
  fontSize: "16px",
};

const comletedPoolDropdownStyle = {
  marginLeft: "auto",
  marginRight: "5px",
};

export function CompletedPool({ joinDate, completedList }: CompletedPoolProps) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "12px 0px 0px 26px",
          alignItems: "center",
        }}
      >
        <p style={completedPoolTitleTextstyle}>오운완 POOL</p>
        <div style={comletedPoolDropdownStyle}>
          <DateDropdown joinDate={joinDate} />
        </div>
      </div>
      <div
        style={{
          overflowX: "auto",
        }}
      >
        <Pool completedList={completedList} />
      </div>
      <hr
        style={{
          margin: "0 15px",
        }}
      ></hr>
    </div>
  );
}
