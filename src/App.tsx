import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from '@pages/Landing';
import Quiz from '@pages/Quiz';
import Result from '@pages/Result';
import '@styles/design-tokens.css';
import '@styles/global.css';

/**
 * 메인 App 컴포넌트
 * 라우팅 설정 및 전역 스타일 적용
 */
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/result" element={<Result />} />
                {/* 잘못된 경로는 홈으로 리다이렉트 */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
