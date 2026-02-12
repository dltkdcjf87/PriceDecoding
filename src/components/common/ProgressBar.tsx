import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
    /** 현재 진행률 (0-100) */
    current: number;
    /** 전체 단계 수 */
    total: number;
    /** 진행률 표시 여부 */
    showLabel?: boolean;
}

/**
 * 진행률 표시 컴포넌트
 * 퀴즈 진행 상황을 시각적으로 표시
 */
const ProgressBar: React.FC<ProgressBarProps> = ({
    current,
    total,
    showLabel = true
}) => {
    const percentage = Math.round((current / total) * 100);

    return (
        <div className="progress-bar">
            {showLabel && (
                <div className="progress-bar__label">
                    <span className="progress-bar__text">
                        {current} / {total}
                    </span>
                    <span className="progress-bar__percentage">{percentage}%</span>
                </div>
            )}
            <div className="progress-bar__track">
                <div
                    className="progress-bar__fill"
                    style={{ width: `${percentage}%` }}
                    role="progressbar"
                    aria-valuenow={current}
                    aria-valuemin={0}
                    aria-valuemax={total}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
