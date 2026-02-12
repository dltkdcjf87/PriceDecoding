import React from 'react';
import Card from '@components/common/Card';
import './About.css';

/**
 * 회사 소개 페이지
 * 애드센스 승인 필수 페이지
 */
const About: React.FC = () => {
    return (
        <div className="about">
            <div className="about__container">
                <h1 className="about__title">Price Decoder 소개</h1>
                <p className="about__subtitle">
                    가격표 뒤에 숨겨진 진실을 밝히는 소비자의 동반자
                </p>

                <Card>
                    <section className="about__section">
                        <h2>🎯 우리의 미션</h2>
                        <p>
                            Price Decoder는 고물가·저성장 시대에 소비자가 가격표 뒤에 숨겨진 원가 구조,
                            유통 마진, 브랜드 프리미엄을 암호 해독하듯 분석하여 지불 금액의 정당성을
                            스스로 검증할 수 있도록 돕습니다.
                        </p>
                        <p>
                            우리는 <strong>급진적 투명성(Radical Transparency)</strong>을 통해
                            소비자가 더 현명한 구매 결정을 내릴 수 있도록 지원합니다.
                        </p>
                    </section>

                    <section className="about__section">
                        <h2>💡 핵심 가치</h2>
                        <div className="about__values">
                            <div className="about__value-card">
                                <div className="about__value-icon">🔍</div>
                                <h3>급진적 투명성</h3>
                                <p>
                                    가격 구조의 모든 요소를 명확하게 분석하여
                                    소비자에게 투명하게 공개합니다.
                                </p>
                            </div>

                            <div className="about__value-card">
                                <div className="about__value-icon">📊</div>
                                <h3>데이터 기반 신뢰</h3>
                                <p>
                                    객관적인 데이터와 분석을 바탕으로
                                    신뢰할 수 있는 정보를 제공합니다.
                                </p>
                            </div>

                            <div className="about__value-card">
                                <div className="about__value-icon">💪</div>
                                <h3>소비 주체성 회복</h3>
                                <p>
                                    소비자가 스스로 판단하고 결정할 수 있는
                                    힘을 되찾도록 돕습니다.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="about__section">
                        <h2>🚀 제공 서비스</h2>
                        <ul className="about__services">
                            <li>
                                <strong>소비 성향 테스트</strong>
                                <p>MBTI 스타일의 12문항 테스트로 당신의 소비 성향을 6가지 유형으로 분석합니다.</p>
                            </li>
                            <li>
                                <strong>AI 가격 해독 계산기</strong>
                                <p>제품 가격을 상품 가치와 브랜드 가치로 분해하여 시각화합니다. (출시 예정)</p>
                            </li>
                            <li>
                                <strong>브랜드 투명성 랭킹</strong>
                                <p>원가와 마진을 투명하게 공개하는 브랜드를 카테고리별로 순위화합니다. (출시 예정)</p>
                            </li>
                            <li>
                                <strong>민생 정책 트래커</strong>
                                <p>정부의 최신 소비 지원책 정보를 한눈에 확인하고 신청할 수 있습니다. (출시 예정)</p>
                            </li>
                        </ul>
                    </section>

                    <section className="about__section">
                        <h2>📈 우리의 비전</h2>
                        <p>
                            Price Decoder는 단순한 가격 비교 서비스를 넘어, 소비자가 가격의 본질을 이해하고
                            자신의 가치관에 맞는 소비를 할 수 있도록 돕는 플랫폼이 되고자 합니다.
                        </p>
                        <p>
                            우리는 다음을 추구합니다:
                        </p>
                        <ul>
                            <li>모든 소비자가 가격 정보에 쉽게 접근할 수 있는 세상</li>
                            <li>브랜드와 소비자 간의 신뢰 기반 관계 구축</li>
                            <li>지속 가능하고 합리적인 소비 문화 확산</li>
                        </ul>
                    </section>

                    <section className="about__section">
                        <h2>🌟 우리가 특별한 이유</h2>
                        <div className="about__features">
                            <div className="about__feature">
                                <h3>🎨 직관적인 디자인</h3>
                                <p>복잡한 데이터를 아름답고 이해하기 쉬운 인포그래픽으로 제공합니다.</p>
                            </div>
                            <div className="about__feature">
                                <h3>🤖 AI 기반 분석</h3>
                                <p>최신 AI 기술을 활용하여 정확하고 빠른 가격 분석을 제공합니다.</p>
                            </div>
                            <div className="about__feature">
                                <h3>📱 모바일 최적화</h3>
                                <p>언제 어디서나 편리하게 이용할 수 있는 반응형 디자인을 제공합니다.</p>
                            </div>
                            <div className="about__feature">
                                <h3>🔒 개인정보 보호</h3>
                                <p>사용자의 개인정보를 철저히 보호하며, 최소한의 데이터만 수집합니다.</p>
                            </div>
                        </div>
                    </section>

                    <section className="about__section">
                        <h2>📞 문의하기</h2>
                        <p>
                            Price Decoder에 대해 궁금한 점이 있으시거나 제안하고 싶은 사항이 있으시면
                            언제든지 연락 주세요!
                        </p>
                        <div className="about__contact">
                            <p><strong>이메일:</strong> contact@price-decoder.com</p>
                            <p><strong>운영 시간:</strong> 평일 09:00 - 18:00 (주말 및 공휴일 제외)</p>
                        </div>
                    </section>

                    <section className="about__section">
                        <h2>🏆 연혁</h2>
                        <div className="about__timeline">
                            <div className="about__timeline-item">
                                <div className="about__timeline-date">2026.02</div>
                                <div className="about__timeline-content">
                                    <h3>Price Decoder 베타 서비스 출시</h3>
                                    <p>소비 성향 테스트 서비스 공개</p>
                                </div>
                            </div>
                            <div className="about__timeline-item">
                                <div className="about__timeline-date">2026.03 (예정)</div>
                                <div className="about__timeline-content">
                                    <h3>AI 가격 해독 계산기 출시</h3>
                                    <p>실시간 가격 분석 서비스 제공</p>
                                </div>
                            </div>
                            <div className="about__timeline-item">
                                <div className="about__timeline-date">2026.04 (예정)</div>
                                <div className="about__timeline-content">
                                    <h3>브랜드 투명성 랭킹 출시</h3>
                                    <p>투명한 브랜드 정보 데이터베이스 구축</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Card>
            </div>
        </div>
    );
};

export default About;
