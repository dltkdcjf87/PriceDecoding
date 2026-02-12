import React from 'react';
import './Button.css';

interface ButtonProps {
    /** 버튼 텍스트 */
    children: React.ReactNode;
    /** 버튼 변형 스타일 */
    variant?: 'primary' | 'secondary' | 'outline';
    /** 버튼 크기 */
    size?: 'sm' | 'md' | 'lg';
    /** 전체 너비 사용 여부 */
    fullWidth?: boolean;
    /** 로딩 상태 */
    loading?: boolean;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 버튼 타입 */
    type?: 'button' | 'submit' | 'reset';
    /** 접근성을 위한 aria-label */
    ariaLabel?: string;
}

/**
 * 공통 버튼 컴포넌트
 * Primary, Secondary, Outline 3가지 변형 지원
 */
const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    disabled = false,
    onClick,
    type = 'button',
    ariaLabel
}) => {
    const className = [
        'button',
        `button--${variant}`,
        `button--${size}`,
        fullWidth && 'button--full-width',
        loading && 'button--loading',
        disabled && 'button--disabled'
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled || loading}
            aria-label={ariaLabel}
            aria-busy={loading}
        >
            {loading ? (
                <span className="button__spinner" aria-hidden="true">
                    <span className="spinner"></span>
                    처리 중...
                </span>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
