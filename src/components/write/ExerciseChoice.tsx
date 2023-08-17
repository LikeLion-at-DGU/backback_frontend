import React, { useState } from "react";
import styles from "../../styles/CategoryChoice.module.css";

export const exercise_options = [
  "헬스",
  "필라테스",
  "요가",
  "복싱",
  "수영",
  "축구",
  "농구",
  "크로스핏",
  "골프",
  "스쿼시",
  "태권도",
  "기타",
];

const ExerciseChoice = ({ onExerciseSelect }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(-1);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
    onExerciseSelect(option);
  };
  return (
    <div>
      <div className={styles.dropdown}>
        <div
          className={styles.selectedOption}
          onClick={handleToggle}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div style={{ textAlign: "left", flex: "2" }}>
            {exercise_options[selectedOption] || "운동 종목"}
          </div>
          <div
            style={{
              alignItems: "right",
              justifyContent: "flex-end",
              flex: "1",
            }}
          >
            <img
              src="../../../assets/images/Category_Under_icon.png"
              style={{ marginLeft: "50px", height: "8px", width: "13px" }}
              alt="cancel_logo"
            />
          </div>
        </div>
        {isOpen && (
          <div className={styles.options}>
            <ul className={styles.options__list}>
              {exercise_options.map((option, index) => (
                <li
                  className={styles.option}
                  key={index}
                  onClick={() => handleOptionClick(index)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseChoice;
