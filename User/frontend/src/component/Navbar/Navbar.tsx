import { useState } from "react";
import "./Navbar.css";
type Lang = "th" | "en";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("th");
  const [cartCount, setCartCount] = useState(3);
  

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ข้อความ 2 ภาษา
   const translations: Record<Lang, {
    home: string;
    products: string;
    categories: string;
    promotion: string;
    contact: string;
    search: string;
    cart: string;
    account: string;
  }> = {
    th: {
      home: "หน้าแรก",
      products: "สินค้า",
      categories: "หมวดหมู่",
      promotion: "โปรโมชั่น",
      contact: "ติดต่อเรา",
      search: "ค้นหาสินค้า...",
      cart: "ตรวจสอบตะกร้า",
      account: "บัญชีผู้ใช้"
    },
    en: {
      home: "Home",
      products: "Products",
      categories: "Categories",
      promotion: "Promotions",
      contact: "Contact Us",
      search: "Search products...",
      cart: "View Cart",
      account: "Account"
    }
  };


  const t = translations[lang];

  return (
    <nav className={`navbar ${isMenuOpen ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <div className="brand-icon">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <span className="brand-text">BaanChillShop</span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-links">
          <a href="#" className="nav-link">{t.home}</a>
          <a href="#" className="nav-link">{t.products}</a>
          <a href="#" className="nav-link">{t.categories}</a>
          <a href="#" className="nav-link">{t.promotion}</a>
          <a href="#" className="nav-link">{t.contact}</a>
        </div>

        {/* Actions: Search, Cart, User */}
        <div className="navbar-actions">
          <div className="search-container">
            <input type="text" placeholder={t.search} className="search-input" />
            <button className="search-btn">
              <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
          </div>

          <button className="cart-btn">
            <svg className="cart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"/>
            </svg>
            <span className="cart-badge">{cartCount}</span>
          </button>

          <button className="profile-btn">
            <svg className="profile-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </button>

          {/* Language Switch with Flags */}
          <div className="language-switch">
            <button 
              className={`lang-btn ${lang === 'th' ? 'active' : ''}`}
              onClick={() => setLang('th')}
            >
              <div className="flag-icon thai-flag">
                <div className="flag-stripe red"></div>
                <div className="flag-stripe white"></div>
                <div className="flag-stripe blue"></div>
                <div className="flag-stripe white"></div>
                <div className="flag-stripe red"></div>
              </div>
              <span className="lang-text">ไทย</span>
            </button>
            
            <button 
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              <div className="flag-icon uk-flag">
                <div className="uk-blue"></div>
                <div className="uk-cross-white"></div>
                <div className="uk-cross-red"></div>
                <div className="uk-diagonal"></div>
              </div>
              <span className="lang-text">EN</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
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
          <a href="#" className="mobile-link">{t.contact}</a>
        </div>

        <div className="mobile-actions">
          <button className="mobile-cart-btn">
            <svg className="cart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"/>
            </svg>
            <span>{t.cart} ({cartCount})</span>
          </button>

          <button className="mobile-profile-btn">
            <svg className="profile-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <span>{t.account}</span>
          </button>

          {/* Mobile Language Switch */}
          <div className="mobile-language-switch">
            <button 
              className={`mobile-lang-btn ${lang === 'th' ? 'active' : ''}`}
              onClick={() => setLang('th')}
            >
              <div className="flag-icon thai-flag">
                <div className="flag-stripe red"></div>
                <div className="flag-stripe white"></div>
                <div className="flag-stripe blue"></div>
                <div className="flag-stripe white"></div>
                <div className="flag-stripe red"></div>
              </div>
              <span>ภาษาไทย</span>
            </button>
            
            <button 
              className={`mobile-lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              <div className="flag-icon uk-flag">
                <div className="uk-blue"></div>
                <div className="uk-cross-white"></div>
                <div className="uk-cross-red"></div>
                <div className="uk-diagonal"></div>
              </div>
              <span>English</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="mobile-overlay" onClick={toggleMobileMenu}></div>}
    </nav>
  );
};

export default Navbar;