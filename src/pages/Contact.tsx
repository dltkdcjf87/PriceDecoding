import React, { useState } from 'react';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import './Contact.css';

/**
 * 문의하기 페이지
 * 애드센스 승인 필수 페이지
 */
const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 실제 구현 시 이메일 전송 로직 추가
        console.log('Form submitted:', formData);
        setSubmitted(true);

        // 3초 후 폼 초기화
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="contact">
            <div className="contact__container">
                <h1 className="contact__title">문의하기</h1>
                <p className="contact__subtitle">
                    궁금한 점이 있으시거나 제안하고 싶은 사항이 있으시면 언제든지 연락 주세요!
                </p>

                <div className="contact__content">
                    <div className="contact__info">
                        <Card>
                            <h2>연락처 정보</h2>

                            <div className="contact__info-item">
                                <div className="contact__info-icon">📧</div>
                                <div className="contact__info-text">
                                    <h3>이메일</h3>
                                    <p>contact@price-decoder.com</p>
                                </div>
                            </div>

                            <div className="contact__info-item">
                                <div className="contact__info-icon">⏰</div>
                                <div className="contact__info-text">
                                    <h3>운영 시간</h3>
                                    <p>평일 09:00 - 18:00</p>
                                    <p className="contact__info-note">(주말 및 공휴일 제외)</p>
                                </div>
                            </div>

                            <div className="contact__info-item">
                                <div className="contact__info-icon">💬</div>
                                <div className="contact__info-text">
                                    <h3>응답 시간</h3>
                                    <p>영업일 기준 1-2일 이내</p>
                                </div>
                            </div>

                            <div className="contact__faq">
                                <h3>자주 묻는 질문</h3>
                                <ul>
                                    <li>서비스 이용 방법</li>
                                    <li>데이터 출처 및 신뢰성</li>
                                    <li>개인정보 보호 정책</li>
                                    <li>광고 및 제휴 문의</li>
                                </ul>
                            </div>
                        </Card>
                    </div>

                    <div className="contact__form-wrapper">
                        <Card>
                            <h2>문의 양식</h2>

                            {submitted ? (
                                <div className="contact__success">
                                    <div className="contact__success-icon">✅</div>
                                    <h3>문의가 성공적으로 전송되었습니다!</h3>
                                    <p>빠른 시일 내에 답변 드리겠습니다.</p>
                                </div>
                            ) : (
                                <form className="contact__form" onSubmit={handleSubmit}>
                                    <div className="contact__form-group">
                                        <label htmlFor="name">이름 *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="홍길동"
                                        />
                                    </div>

                                    <div className="contact__form-group">
                                        <label htmlFor="email">이메일 *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="example@email.com"
                                        />
                                    </div>

                                    <div className="contact__form-group">
                                        <label htmlFor="subject">문의 유형 *</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">선택해주세요</option>
                                            <option value="service">서비스 이용 문의</option>
                                            <option value="data">데이터 관련 문의</option>
                                            <option value="partnership">제휴 및 광고 문의</option>
                                            <option value="bug">버그 신고</option>
                                            <option value="suggestion">개선 제안</option>
                                            <option value="other">기타</option>
                                        </select>
                                    </div>

                                    <div className="contact__form-group">
                                        <label htmlFor="message">문의 내용 *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            placeholder="문의 내용을 자세히 작성해주세요."
                                        />
                                    </div>

                                    <Button type="submit" variant="primary" fullWidth>
                                        문의 보내기
                                    </Button>

                                    <p className="contact__form-note">
                                        * 표시된 항목은 필수 입력 사항입니다.
                                    </p>
                                </form>
                            )}
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
