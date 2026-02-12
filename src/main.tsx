import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * 앱 엔트리 포인트
 * React 앱을 DOM에 마운트
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
