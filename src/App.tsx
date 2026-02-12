import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import Landing from '@pages/Landing';
import Quiz from '@pages/Quiz';
import Result from '@pages/Result';
import PrivacyPolicy from '@pages/PrivacyPolicy';
import Terms from '@pages/Terms';
import About from '@pages/About';
import Contact from '@pages/Contact';
import '@styles/design-tokens.css';
import '@styles/global.css';

/**
 * 레이아웃 컴포넌트
 * Header와 Footer를 조건부로 표시
 */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();

    // 퀴즈와 결과 페이지에서는 Header/Footer 숨김 (몰입형 경험)
    const hideLayout = ['/quiz', '/result'].includes(location.pathname);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {!hideLayout && <Header />}
            <main style={{ flex: 1 }}>
                {children}
            </main>
            {!hideLayout && <Footer />}
        </div>
    );
};

/**
 * 메인 App 컴포넌트
 * 라우팅 설정 및 전역 스타일 적용
 */
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* 잘못된 경로는 홈으로 리다이렉트 */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
