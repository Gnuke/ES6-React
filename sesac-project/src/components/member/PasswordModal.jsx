import React, { useState } from 'react';
import '../styles/PasswordModal.css';  // 스타일 파일을 불러옵니다.
import PropTypes from "prop-types";

const PasswordModal = ({ onSubmit, onCancel }) => {
    PasswordModal.propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
    };
    
    const [check, setCheck] = useState('');

    const handleSubmit = () => {
        if (check) {
            onSubmit(check);
        } else {
            alert('비밀번호를 입력하세요.');
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>비밀번호를 입력하세요</h2>
                <input
                    type="password"
                    value={check}
                    onChange={(e) => setCheck(e.target.value)}
                    placeholder="비밀번호"
                />
                <div className="button-group">
                    <button onClick={handleSubmit}>확인</button>
                    <button className="cancel" onClick={onCancel}>취소</button>
                </div>
            </div>
        </div>
    );
};

export default PasswordModal;