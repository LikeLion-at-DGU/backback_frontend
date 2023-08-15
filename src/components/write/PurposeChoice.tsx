import React, { useState } from 'react';
import styles from '../../styles/CategoryChoice.module.css'

const purpose_options = [
    '바디프로필',
    '근육 증가',
    '체중 증가',
    '체중 감량',
    '체형 개선',
    '재활',
    '대회 준비',
    '청소년 성장',
    '학교 체육',
    '체력 강화',
    '관절 보호',
    '기타',
];

const PurposeChoice = () => {
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
                    {selectedOption || '운동 목적'}
                    <img src="../../../assets/images/Category_Under_icon.png" style={{ marginLeft: "50px", height: "8px", width: "13px" }} alt="cancel_logo" />
                </div>
                {isOpen && (
                    <div className={styles.options}>
                        <ul className={styles.options__list}>
                            {purpose_options.map((option, index) => (
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

export default PurposeChoice;