import { useCallback, useEffect, useState } from "react";
import { DateDropdown } from "./DateDropdown";
import { Pool } from "./pool";
import profileApi from "@/apis/profileApi";

interface CompletedPoolProps {
  joinDate: string;
  userId: number;
}

const completedPoolTitleTextstyle = {
  fontFamily: "BoldFont",
  fontSize: "16px",
};

const comletedPoolDropdownStyle = {
  marginLeft: "auto",
  marginRight: "5px",
};

export function CompletedPool({ joinDate, userId }: CompletedPoolProps) {
  const [completedList, setCompletedList] = useState<number[]>([]);
  const [selectedDate, setSelectedDate] = useState("1000-01");

  const joinDateForm = new Date(joinDate);
  const joinYear = joinDateForm.getFullYear();
  const joinMonth = joinDateForm.getMonth() + 1;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const dateOptions = [];

  for (let year = joinYear; year <= currentYear; year++) {
    const startMonth = year === joinYear ? joinMonth : 1;
    const endMonth = year === currentYear ? currentMonth : 12;

    for (let month = startMonth; month <= endMonth; month++) {
      dateOptions.push(`${year}년 ${month}월`);
    }
  }

  const getDateFormat = useCallback(() => {
    return `${currentYear}-${String(currentMonth).padStart(2, "0")}`;
  }, []);

  useEffect(() => {
    setSelectedDate(getDateFormat);
  }, []);

  useEffect(() => {
    profileApi()
      .getProfileCompletions(userId, { range: selectedDate })
      .then((res: any) => {
        setCompletedList(res.data.postCounts);
      });
  }, [userId, selectedDate]);

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
          <DateDropdown
            dateOptions={dateOptions}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
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
