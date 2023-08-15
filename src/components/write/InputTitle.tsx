import React, { ChangeEvent, useRef } from 'react';

interface InputTitleProps {
    title: string;
    onTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputTitle: React.FC<InputTitleProps> = ({ title, onTitleChange }) => {

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={onTitleChange}
                placeholder='   제목'
                style={{
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderBottom: '1px solid #B7BBC8',
                    width: '360px',
                    height: '45px',
                    display: 'inline-block',
                    cursor: 'pointer',
                    fontSize: '18px',
                    color: '#B3B3B3',
                    fontFamily: 'MainFont',
                }}
            />
        </div>

    );
};

export default InputTitle;
