import { useState } from "react";

interface DateDropdownProps {
  joinDate: string;
}

const dateDropdownTextStyle = {
  fontWeight: 500,
  fontSize: "12px",
  marginRight: "5px",
};

const dateDropdownImageStyle = {
  width: "14px",
  height: "8px",
  marginRight: "34px",
};

const dateDropdownStyle = {
  zIndex: 100,
  width: "110%",
  top: "1px",
  right: "15px",
  position: "absolute",
  backgroundColor: "#fff",
  border: "1px solid #B7BBC8",
  maxHeight: "180px",
  overflowY: "auto",
  padding: "14px 5px 14px 19px",
} as React.CSSProperties;

const dateDropdownBoxTextStyle = {
  fontWeight: 500,
  fontSize: "14px",
  margin: "1px 0px 0px ",
} as React.CSSProperties;

export function DateDropdown({ joinDate }: DateDropdownProps) {
  const categotyUnderIconPath = "/assets/images/Category_Under_icon.png";

  const joinDateForm = new Date(joinDate);
  const joinYear = joinDateForm.getFullYear();
  const joinMonth = joinDateForm.getMonth() + 1;
  const currentDateForm = new Date();
  const currentYear = currentDateForm.getFullYear();
  const currentMonth = currentDateForm.getMonth() + 1;

  const dateOptions = [];

  for (let year = joinYear; year <= currentYear; year++) {
    const startMonth = year === joinYear ? joinMonth : 1;
    const endMonth = year === currentYear ? currentMonth : 12;

    for (let month = startMonth; month <= endMonth; month++) {
      dateOptions.push(`${year}년 ${month}월`);
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    dateOptions[dateOptions.length - 1]
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
        onClick={handleToggle}
      >
        <p style={dateDropdownTextStyle}>{selectedOption}</p>
        <img src={categotyUnderIconPath} style={dateDropdownImageStyle} />
      </div>
      {isOpen && (
        <div style={{ position: "relative" }}>
          <div style={dateDropdownStyle}>
            <ul
              style={{
                listStyle: "none",
              }}
            >
              {dateOptions.map((option: string, index: number) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  style={dateDropdownBoxTextStyle}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
