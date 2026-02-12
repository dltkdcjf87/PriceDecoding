import React from 'react';
import Card from '@components/common/Card';
import './PrivacyPolicy.css';

/**
 * 개인정보 처리방침 페이지
 * 애드센스 승인 필수 페이지
 */
const PrivacyPolicy: React.FC = () => {
    return (
        <div className="privacy-policy">
            <div className="privacy-policy__container">
                <h1 className="privacy-policy__title">개인정보 처리방침</h1>
                <p className="privacy-policy__updated">최종 수정일: 2026년 2월 12일</p>

                <Card>
                    <section className="privacy-policy__section">
                        <h2>1. 개인정보의 수집 및 이용 목적</h2>
                        <p>
                            Price Decoder("회사" 또는 "서비스")는 다음의 목적을 위하여 개인정보를 처리합니다.
                            처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
                            이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등
                            필요한 조치를 이행할 예정입니다.
                        </p>
                        <ul>
                            <li>서비스 제공 및 운영</li>
                            <li>소비 성향 테스트 결과 제공</li>
                            <li>서비스 개선 및 통계 분석</li>
                            <li>고객 문의 응대</li>
                        </ul>
                    </section>

                    <section className="privacy-policy__section">
                        <h2>2. 수집하는 개인정보 항목</h2>
                        <p>회사는 다음과 같은 개인정보를 수집합니다:</p>

                        <h3>필수 수집 항목</h3>
                        <ul>
                            <li>퀴즈 응답 데이터 (로컬 스토리지에 저장)</li>
                            <li>서비스 이용 기록 (방문 일시, IP 주소, 쿠키)</li>
                        </ul>

                        <h3>선택 수집 항목</h3>
                        <ul>
                            <li>문의 시: 이메일 주소, 문의 내용</li>
                        </ul>
                    </section>

                    <section className="privacy-policy__section">
                        <h2>3. 개인정보의 보유 및 이용 기간</h2>
                        <p>
                            회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를
                            수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                        </p>
                        <ul>
                            <li>퀴즈 응답 데이터: 브라우저 로컬 스토리지에 저장 (사용자가 직접 삭제 가능)</li>
                            <li>서비스 이용 기록: 3개월</li>
                            <li>문의 내용: 처리 완료 후 1년</li>
                        </ul>
                    </section>

                    <section className="privacy-policy__section">
                        <h2>4. 개인정보의 제3자 제공</h2>
                        <p>
                            회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.
                            다만, 아래의 경우에는 예외로 합니다:
                        </p>
                        <ul>
                            <li>이용자가 사전에 동의한 경우</li>
                            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                        </ul>
                    </section>

                    <section className="privacy-policy__section">
                        <h2>5. 개인정보 처리의 위탁</h2>
                        <p>회사는 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다:</p>
                        <ul>
                            <li>호스팅 서비스: Vercel Inc.</li>
                            <li>웹 분석 서비스: Google Analytics (선택적)</li>
                            <li>광고 서비스: Google AdSense (승인 후)</li>
                        </ul>
                    </section>

                    <section className="privacy-policy__section">
                        <h2>6. 쿠키(Cookie)의 사용</h2>
                        <p>
                            회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고
                            수시로 불러오는 '쿠키(cookie)'를 사용합니다.
                        </p>
                        <h3>쿠키의 사용 목적</h3>
                        <ul>
                            <li>서비스 이용 통계 분석</li>
                            <li>사용자 맞춤형 콘텐츠 제공</li>
                            <li>광고 효과 측정 (애드센스)</li>
                        </ul>
                        <h3>쿠키 설정 거부 방법</h3>
                        <p>
                            이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 웹브라우저에서
                            옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을
                            거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
                        </p>
                    </section>

                    <section className="privacy-policy__section">
                        <h2>7. 이용자의 권리와 행사 방법</h2>
                        <p>정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:</p>
                        <ul>
                            <li>개인정보 열람 요구</li>
                            <li>오류 등이 있을 경우 정정 요구</li>
                            <li>삭제 요구</li>
                            <li>처리정지 요구</li>
                        </ul>
                    </section>

                    <section className="privacy-policy__section">
                        <h2>8. 개인정보 보호책임자</h2>
                        <p>
                            회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
                            정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를
                            지정하고 있습니다.
                        </p>
                        <div className="privacy-policy__contact">
                            <p><strong>개인정보 보호책임자</strong></p>
                            <p>이메일: privacy@price-decoder.com</p>
                        </div>
                    </section>

                    <section className="privacy-policy__section">
                        <h2>9. 개인정보 처리방침의 변경</h2>
                        <p>
                            이 개인정보 처리방침은 2026년 2월 12일부터 적용되며, 법령 및 방침에 따른
                            변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터
                            공지사항을 통하여 고지할 것입니다.
                        </p>
                    </section>

                    <section className="privacy-policy__section">
                        <h2>10. Google AdSense 광고 정책</h2>
                        <p>
                            본 웹사이트는 Google AdSense를 통해 광고를 게재합니다. Google은 쿠키를 사용하여
                            사용자의 관심사에 맞는 광고를 표시합니다.
                        </p>
                        <p>
                            Google의 광고 및 콘텐츠 네트워크 개인정보 보호정책은
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                                여기
                            </a>
                            에서 확인하실 수 있습니다.
                        </p>
                    </section>
                </Card>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
