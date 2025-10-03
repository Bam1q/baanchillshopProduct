import { useState } from "react";
import { useLanguage } from "../../LanguageContext"; // ปรับ path ตามจริง
import "./NavbarGuest.css";
import thaiLogo from '../../assets/thailand.png';
import ukLogo from '../../assets/united-kingdom.png';

const NavbarGuest = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage(); // ใช้ context ภาษา

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const translations = {
    th: {
      home: "หน้าแรก",
      products: "สินค้า",
      categories: "หมวดหมู่",
      promotion: "โปรโมชั่น",
      search: "ค้นหาสินค้า...",
      login: "เข้าสู่ระบบ",
      thai: "ไทย",
      english: "อังกฤษ",
    },
    en: {
      home: "Home",
      products: "Products",
      categories: "Categories",
      promotion: "Promotions",
      search: "Search products...",
      login: "Login",
      thai: "Thai",
      english: "English",
    },
  } as const;

  const t = translations[language];

  return (
    <nav className={`navbar ${isMenuOpen ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <span className="brand-text">BaanChillShop</span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-links">
          <a href="#" className="nav-link">{t.home}</a>
          <a href="#" className="nav-link">{t.products}</a>
          <a href="#" className="nav-link">{t.categories}</a>
          <a href="#" className="nav-link">{t.promotion}</a>
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          <div className="search-container">
            <input type="text" placeholder={t.search} className="search-input" />
            <button className="search-btn">
              <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
          </div>

          {/* Language Switch with PNG Flags */}
          <div className="language-switch">
            <button 
              className={`lang-btn ${language === 'th' ? 'active' : ''}`}
              onClick={() => setLanguage('th')}
            >
              <img src={thaiLogo} alt="Thai" className="flag-png" />
              <span className="lang-text">{t.thai}</span>
            </button>
            
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              <img src={ukLogo} alt="UK" className="flag-png" />
              <span className="lang-text">{t.english}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Login */}
        <div className="auth-buttons">
          <button className="login-btn">{t.login}</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-search">
          <input type="text" placeholder={t.search} className="mobile-search-input" />
          <button className="mobile-search-btn">
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
        </div>

        <div className="mobile-links">
          <a href="#" className="mobile-link">{t.home}</a>
          <a href="#" className="mobile-link">{t.products}</a>
          <a href="#" className="mobile-link">{t.categories}</a>
          <a href="#" className="mobile-link">{t.promotion}</a>
        </div>

        <div className="mobile-actions">
          <button className="mobile-login-btn">
            <svg className="profile-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <span>{t.login}</span>
          </button>

          {/* Mobile Language Switch */}
          <div className="mobile-language-switch">
            <button 
              className={`mobile-lang-btn ${language === 'th' ? 'active' : ''}`}
              onClick={() => setLanguage('th')}
            >
              <img src={thaiLogo} alt="Thai" className="flag-png" />
              <span>{t.thai}</span>
            </button>
            
            <button 
              className={`mobile-lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              <img src={ukLogo} alt="UK" className="flag-png" />
              <span>{t.english}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="mobile-overlay" onClick={toggleMobileMenu}></div>}
    </nav>
  );
};

export default NavbarGuest;
