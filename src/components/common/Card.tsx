import React from 'react';
import './Card.css';

interface CardProps {
    /** 카드 내용 */
    children: React.ReactNode;
    /** 글래스모피즘 효과 사용 여부 */
    glass?: boolean;
    /** 호버 리프트 효과 사용 여부 */
    hoverable?: boolean;
    /** 클릭 가능 여부 */
    clickable?: boolean;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

/**
 * 공통 카드 컴포넌트
 * 글래스모피즘 효과와 호버 애니메이션 지원
 */
const Card: React.FC<CardProps> = ({
    children,
    glass = false,
    hoverable = false,
    clickable = false,
    onClick,
    className = ''
}) => {
    const cardClassName = [
        'card',
        glass && 'card--glass',
        hoverable && 'card--hoverable',
        clickable && 'card--clickable',
        className
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div
            className={cardClassName}
            onClick={clickable ? onClick : undefined}
            role={clickable ? 'button' : undefined}
            tabIndex={clickable ? 0 : undefined}
            onKeyDown={
                clickable
                    ? (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onClick?.();
                        }
                    }
                    : undefined
            }
        >
            {children}
        </div>
    );
};

export default Card;
