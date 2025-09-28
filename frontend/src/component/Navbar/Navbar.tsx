import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <a href="#" className="nav-link">หน้าแรก</a>
          <a href="#" className="nav-link">สินค้า</a>
          <a href="#" className="nav-link">หมวดหมู่</a>
          <a href="#" className="nav-link">โปรโมชั่น</a>
          <a href="#" className="nav-link">ติดต่อเรา</a>
        </div>

        {/* Actions: Search, Cart, User */}
        <div className="navbar-actions">
          <div className="search-container">
            <input type="text" placeholder="ค้นหาสินค้า..." className="search-input" />
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
            <span className="cart-badge">3</span>
          </button>

          <button className="profile-btn">
            <svg className="profile-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </button>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-search">
          <input type="text" placeholder="ค้นหาสินค้า..." className="mobile-search-input" />
          <button className="mobile-search-btn">
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
        </div>

        <div className="mobile-links">
          <a href="#" className="mobile-link">หน้าแรก</a>
          <a href="#" className="mobile-link">สินค้า</a>
          <a href="#" className="mobile-link">หมวดหมู่</a>
          <a href="#" className="mobile-link">โปรโมชั่น</a>
          <a href="#" className="mobile-link">ติดต่อเรา</a>
        </div>

        <div className="mobile-actions">
          <button className="mobile-cart-btn">
            <svg className="cart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"/>
            </svg>
            <span>ตรวจสอบตะกร้า (3)</span>
          </button>

          <button className="mobile-profile-btn">
            <svg className="profile-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <span>บัญชีผู้ใช้</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
