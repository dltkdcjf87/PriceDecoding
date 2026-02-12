import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

/**
 * 헤더 컴포넌트
 * 네비게이션 메뉴 포함
 */
const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <span className="header__logo-icon">🔍</span>
                    <span className="header__logo-text">Price Decoder</span>
                </Link>

                <button
                    className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="메뉴 토글"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                    <Link
                        to="/"
                        className={`header__nav-link ${isActive('/') ? 'header__nav-link--active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        홈
                    </Link>
                    <Link
                        to="/quiz"
                        className={`header__nav-link ${isActive('/quiz') ? 'header__nav-link--active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        소비 테스트
                    </Link>
                    <Link
                        to="/about"
                        className={`header__nav-link ${isActive('/about') ? 'header__nav-link--active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        소개
                    </Link>
                    <Link
                        to="/contact"
                        className={`header__nav-link ${isActive('/contact') ? 'header__nav-link--active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        문의
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
