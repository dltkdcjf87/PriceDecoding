import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions, TOTAL_QUESTIONS } from '@data/questions';
import { QuizAnswer } from '../types/quiz';
import { calculateQuizResult } from '@utils/calculatePersonality';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import ProgressBar from '@components/common/ProgressBar';
import './Quiz.css';

/**
 * 퀴즈 페이지
 * 12문항의 질문을 순차적으로 표시하고 답변 수집
 */
const Quiz: React.FC = () => {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<QuizAnswer[]>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    // 로컬 스토리지에서 이전 답변 불러오기
    useEffect(() => {
        const savedAnswers = localStorage.getItem('quizAnswers');
        if (savedAnswers) {
            const parsedAnswers = JSON.parse(savedAnswers) as QuizAnswer[];
            setAnswers(parsedAnswers);
            setCurrentQuestionIndex(parsedAnswers.length);
        }
    }, []);

    // 답변 저장 (로컬 스토리지)
    useEffect(() => {
        if (answers.length > 0) {
            localStorage.setItem('quizAnswers', JSON.stringify(answers));
        }
    }, [answers]);

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === TOTAL_QUESTIONS - 1;

    // 옵션 선택 핸들러
    const handleOptionSelect = (optionIndex: number) => {
        setSelectedOption(optionIndex);
    };

    // 다음 질문으로 이동
    const handleNext = () => {
        if (selectedOption === null) return;

        const newAnswer: QuizAnswer = {
            questionId: currentQuestion.id,
            selectedOptionIndex: selectedOption
        };

        const updatedAnswers = [...answers, newAnswer];
        setAnswers(updatedAnswers);
        setSelectedOption(null);

        if (isLastQuestion) {
            // 마지막 질문이면 결과 계산 후 결과 페이지로 이동
            const result = calculateQuizResult(updatedAnswers);
            localStorage.setItem('quizResult', JSON.stringify(result));
            localStorage.removeItem('quizAnswers'); // 답변 초기화
            navigate('/result');
        } else {
            // 다음 질문으로
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    // 이전 질문으로 이동
    const handlePrevious = () => {
        if (currentQuestionIndex === 0) return;

        // 마지막 답변 제거
        const updatedAnswers = answers.slice(0, -1);
        setAnswers(updatedAnswers);
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setSelectedOption(null);
    };

    return (
        <div className="quiz">
            <div className="quiz__container">
                {/* 진행률 표시 */}
                <div className="quiz__progress">
                    <ProgressBar
                        current={currentQuestionIndex + 1}
                        total={TOTAL_QUESTIONS}
                    />
                </div>

                {/* 질문 카드 */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestion.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="quiz__question-wrapper"
                    >
                        <Card glass>
                            <div className="quiz__question">
                                <div className="quiz__question-header">
                                    <span className="quiz__question-number">
                                        Q{currentQuestion.id}
                                    </span>
                                    <span className="quiz__question-category">
                                        {getCategoryLabel(currentQuestion.category)}
                                    </span>
                                </div>
                                <h2 className="quiz__question-text">{currentQuestion.text}</h2>
                            </div>

                            {/* 옵션 목록 */}
                            <div className="quiz__options">
                                {currentQuestion.options.map((option, index) => (
                                    <motion.button
                                        key={index}
                                        className={`quiz__option ${selectedOption === index ? 'quiz__option--selected' : ''
                                            }`}
                                        onClick={() => handleOptionSelect(index)}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="quiz__option-number">{index + 1}</span>
                                        <span className="quiz__option-text">{option.text}</span>
                                        {selectedOption === index && (
                                            <motion.div
                                                className="quiz__option-check"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                            >
                                                ✓
                                            </motion.div>
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                </AnimatePresence>

                {/* 네비게이션 버튼 */}
                <div className="quiz__navigation">
                    {currentQuestionIndex === 0 ? (
                        <Button
                            variant="outline"
                            onClick={() => navigate('/')}
                        >
                            ← 홈으로
                        </Button>
                    ) : (
                        <Button
                            variant="outline"
                            onClick={handlePrevious}
                        >
                            ← 이전
                        </Button>
                    )}
                    <Button
                        variant="primary"
                        onClick={handleNext}
                        disabled={selectedOption === null}
                    >
                        {isLastQuestion ? '결과 보기 →' : '다음 →'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

// 카테고리 라벨 변환 헬퍼 함수
const getCategoryLabel = (category: string): string => {
    const labels: Record<string, string> = {
        decision: '구매 결정',
        brand: '브랜드 인식',
        price: '가격 민감도',
        behavior: '소비 행동'
    };
    return labels[category] || category;
};

export default Quiz;
