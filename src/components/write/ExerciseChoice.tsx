import React, { useState } from 'react';
import styles from '../../styles/CategoryChoice.module.css'

const exercise_options = [
    '헬스',
    '필라테스',
    '요가',
    '복싱',
    '수영',
    '축구',
    '농구',
    '기타',
];

const ExerciseChoice = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: any) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div>
            <div className={styles.dropdown}>
                <div className={styles.selectedOption} onClick={handleToggle}>
                    {selectedOption || '운동 종목'}
                    <img src="../../../assets/images/Category_Under_icon.png" style={{ marginLeft: "50px", height: "8px", width: "13px" }} alt="cancel_logo" />
                </div>
                {isOpen && (
                    <div className={styles.options}>
                        <ul className={styles.options__list}>
                            {exercise_options.map((option, index) => (
                                <li className={styles.option} key={index} onClick={() => handleOptionClick(option)}>
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