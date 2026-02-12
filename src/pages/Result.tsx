import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { QuizResult } from '../types/quiz';
import { getPersonalityType } from '@data/personalities';
import { normalizeScores } from '@utils/calculatePersonality';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import './Result.css';

/**
 * 결과 페이지
 * 소비 성향 분석 결과 표시 및 SNS 공유 기능
 */
const Result: React.FC = () => {
    const navigate = useNavigate();
    const [result, setResult] = useState<QuizResult | null>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // 로컬 스토리지에서 결과 불러오기
        const savedResult = localStorage.getItem('quizResult');
        if (!savedResult) {
            // 결과가 없으면 홈으로 리다이렉트
            navigate('/');
            return;
        }
        setResult(JSON.parse(savedResult));
    }, [navigate]);

    if (!result) {
        return null;
    }

    const primaryPersonality = getPersonalityType(result.primaryType);
    const secondaryPersonality = getPersonalityType(result.secondaryType);
    const normalizedScores = normalizeScores(result.scores);

    // 차트 데이터 준비
    const chartData = [
        { subject: '성분 해독가', value: normalizedScores.analyzer, fullMark: 100 },
        { subject: '실내가 추구자', value: normalizedScores.trustSeeker, fullMark: 100 },
        { subject: '희소성 수집가', value: normalizedScores.collector, fullMark: 100 },
        { subject: '가성비 헌터', value: normalizedScores.hunter, fullMark: 100 },
        { subject: '브랜드 로열티스트', value: normalizedScores.loyalist, fullMark: 100 },
        { subject: '미니멀 소비자', value: normalizedScores.minimalist, fullMark: 100 }
    ];

    // 다시 테스트하기
    const handleRetry = () => {
        localStorage.removeItem('quizResult');
        localStorage.removeItem('quizAnswers');
        navigate('/');
    };

    // 링크 복사
    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.origin);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // SNS 공유
    const handleShareTwitter = () => {
        const text = `나의 소비 성향은 "${primaryPersonality.name}" ${primaryPersonality.emoji}\n\n당신의 소비 성향은? Price Decoder에서 확인해보세요!`;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.origin)}`;
        window.open(url, '_blank');
    };

    const handleShareFacebook = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="result">
            <div className="result__container">
                {/* 주 성향 카드 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Card glass>
                        <div className="result__header">
                            <h1 className="result__title">당신의 소비 성향은</h1>
                            <div className="result__type">
                                <span className="result__type-emoji">{primaryPersonality.emoji}</span>
                                <h2 className="result__type-name">{primaryPersonality.name}</h2>
                            </div>
                            <p className="result__description">{primaryPersonality.description}</p>
                        </div>
                    </Card>
                </motion.div>

                {/* 레이더 차트 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="result__chart-wrapper"
                >
                    <Card glass>
                        <h3 className="result__section-title">성향 분석 차트</h3>
                        <div className="result__chart">
                            <ResponsiveContainer width="100%" height={400}>
                                <RadarChart data={chartData}>
                                    <PolarGrid stroke="#E5E5E5" />
                                    <PolarAngleAxis
                                        dataKey="subject"
                                        tick={{ fill: '#2D3142', fontSize: 14, fontWeight: 500 }}
                                    />
                                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#737373' }} />
                                    <Radar
                                        name="성향 점수"
                                        dataKey="value"
                                        stroke="#FF6B6B"
                                        fill="#FF6B6B"
                                        fillOpacity={0.6}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                        <p className="result__chart-caption">
                            주 성향: <strong>{primaryPersonality.name}</strong> ({normalizedScores[result.primaryType]}점) /
                            부 성향: <strong>{secondaryPersonality.name}</strong> ({normalizedScores[result.secondaryType]}점)
                        </p>
                    </Card>
                </motion.div>

                {/* 특징 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <Card glass>
                        <h3 className="result__section-title">주요 특징</h3>
                        <ul className="result__traits">
                            {primaryPersonality.traits.map((trait, index) => (
                                <li key={index} className="result__trait">
                                    <span className="result__trait-icon">✓</span>
                                    {trait}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </motion.div>

                {/* 추천 브랜드 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <Card glass>
                        <h3 className="result__section-title">추천 브랜드</h3>
                        <ul className="result__brands">
                            {primaryPersonality.recommendedBrands.map((brand, index) => (
                                <li key={index} className="result__brand">
                                    {brand}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </motion.div>

                {/* 공유 버튼 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="result__actions"
                >
                    <div className="result__share">
                        <h3 className="result__section-title">결과 공유하기</h3>
                        <div className="result__share-buttons">
                            <Button variant="outline" onClick={handleShareTwitter}>
                                🐦 Twitter
                            </Button>
                            <Button variant="outline" onClick={handleShareFacebook}>
                                📘 Facebook
                            </Button>
                            <Button variant="outline" onClick={handleCopyLink}>
                                {copied ? '✓ 복사됨!' : '🔗 링크 복사'}
                            </Button>
                        </div>
                    </div>

                    <Button variant="primary" size="lg" fullWidth onClick={handleRetry}>
                        🔄 다시 테스트하기
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};

export default Result;
