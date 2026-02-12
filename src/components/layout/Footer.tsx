import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

/**
 * 푸터 컴포넌트
 * 저작권 정보, 필수 페이지 링크, SNS 링크 포함
 */
const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__section">
                        <h3 className="footer__title">Price Decoder</h3>
                        <p className="footer__description">
                            가격표 뒤에 숨겨진 진실을 밝히는<br />
                            소비자의 동반자
                        </p>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__heading">서비스</h4>
                        <ul className="footer__links">
                            <li><Link to="/quiz">소비 성향 테스트</Link></li>
                            <li><Link to="/about">서비스 소개</Link></li>
                            <li><Link to="/contact">문의하기</Link></li>
                        </ul>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__heading">정책</h4>
                        <ul className="footer__links">
                            <li><Link to="/privacy">개인정보 처리방침</Link></li>
                            <li><Link to="/terms">이용약관</Link></li>
                        </ul>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__heading">문의</h4>
                        <ul className="footer__contact">
                            <li>📧 contact@price-decoder.com</li>
                            <li>⏰ 평일 09:00 - 18:00</li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} Price Decoder. All rights reserved.
                    </p>
                    <p className="footer__disclaimer">
                        본 서비스의 가격 분석 및 소비 정보는 참고용이며, 실제 구매 결정은 이용자의 책임입니다.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
