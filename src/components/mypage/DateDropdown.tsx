import { useState } from "react";

interface DateDropdownProps {
  dateOptions: string[];
  selectedDate: string;
  setSelectedDate: (newValue: string) => void;
}

const dateDropdownTextStyle = {
  fontFamily: "MainFont",
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
  fontFamily: "MainFont",
  fontSize: "14px",
  margin: "1px 0px 0px ",
} as React.CSSProperties;

function convertToYYYYMM(dateString: string) {
  const parts = dateString.split(" ");
  const year = parts[0].slice(0, -1);
  const month = parts[1].slice(0, -1);
  const formattedDate = `${year}-${month.padStart(2, "0")}`;
  return formattedDate;
}

function convertToDate(dateString: string) {
  const parts = dateString.split("-");
  const year = parts[0];
  const month = parseInt(parts[1], 10);

  const date = `${year}년 ${month}월`;
  return date;
}

export function DateDropdown({
  dateOptions,
  selectedDate,
  setSelectedDate,
}: DateDropdownProps) {
  const categotyUnderIconPath = "/assets/images/Category_Under_icon.png";

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedDate(option);
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
        <p style={dateDropdownTextStyle}>{convertToDate(selectedDate)}</p>
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
                  onClick={() => handleOptionClick(convertToYYYYMM(option))}
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
