import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '@components/common/Button';
import './Landing.css';

/**
 * 랜딩 페이지
 * 사용자를 맞이하고 퀴즈 시작을 유도하는 히어로 섹션
 */
const Landing: React.FC = () => {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        navigate('/quiz');
    };

    return (
        <div className="landing">
            <div className="landing__container">
                {/* 히어로 섹션 */}
                <motion.div
                    className="landing__hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="landing__title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        당신이 낸 돈,
                        <br />
                        <span className="landing__title-highlight">어디로 가나요?</span>
                    </motion.h1>

                    <motion.p
                        className="landing__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        가격표 뒤에 숨겨진 진실을 밝혀드립니다.
                        <br />
                        12개의 질문으로 당신의 소비 성향을 분석해보세요.
                    </motion.p>

                    <motion.div
                        className="landing__cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={handleStartQuiz}
                            ariaLabel="소비 성향 테스트 시작하기"
                        >
                            🔍 소비 성향 테스트 시작하기
                        </Button>
                    </motion.div>
                </motion.div>

                {/* 특징 섹션 */}
                <motion.div
                    className="landing__features"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <div className="landing__feature">
                        <div className="landing__feature-icon">🔬</div>
                        <h3 className="landing__feature-title">급진적 투명성</h3>
                        <p className="landing__feature-description">
                            가격의 진실을 데이터 기반으로 분석합니다
                        </p>
                    </div>

                    <div className="landing__feature">
                        <div className="landing__feature-icon">🎯</div>
                        <h3 className="landing__feature-title">맞춤형 분석</h3>
                        <p className="landing__feature-description">
                            당신만의 소비 패턴을 정확히 파악합니다
                        </p>
                    </div>

                    <div className="landing__feature">
                        <div className="landing__feature-icon">💡</div>
                        <h3 className="landing__feature-title">합리적 선택</h3>
                        <p className="landing__feature-description">
                            더 나은 소비 결정을 도와드립니다
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Landing;
