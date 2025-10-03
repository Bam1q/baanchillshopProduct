import { useState } from "react";
import "./LoginUser.css";
import NavbarGuest from "../../component/Navbar/NavbarGuest";
import { useLanguage } from "../../LanguageContext"; // ปรับ path ตามจริง

const LoginUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { language } = useLanguage(); // ใช้ context ภาษา

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // OAuth logic here
  };

  const handleLogin = () => {
    console.log(`Login with username: ${username}`);
    // Login logic here
  };

  const t = {
    th: {
      welcome: "ยินดีต้อนรับ",
      description: "เข้าสู่ระบบด้วยบัญชีที่คุณต้องการ",
      socialTitle: "เชื่อมต่อด้วย",
      email: "Email",
      password: "Password",
      loginBtn: "เข้าสู่ระบบ",
      forgotPassword: "ลืมรหัสผ่านใช่หรือไม่?",
      signupText: "ยังไม่มีบัญชีสมาชิก??",
      signupLink: "สร้างบัญชีใหม่",
    },
    en: {
      welcome: "Welcome",
      description: "Login with your preferred account",
      socialTitle: "Connect with",
      email: "Email",
      password: "Password",
      loginBtn: "Login",
      forgotPassword: "Forgot your password?",
      signupText: "Don't have an account?",
      signupLink: "Sign up",
    },
  } as const;

  const text = t[language];

  return (
    <div className="login-container">
      <NavbarGuest />
      <div className="login-wrapper">
        <div className="login-card">
          {/* Header */}
          <div className="login-header">
            <div className="login-icon">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1>{text.welcome}</h1>
            <p>{text.description}</p>
          </div>

          {/* Social Login */}
          <div className="social-section">
            <p className="social-title">{text.socialTitle}</p>
            <div className="social-buttons">
              <button onClick={() => handleSocialLogin("Google")} className="social-btn google-btn">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="social-text">Google</span>
              </button>

              <button onClick={() => handleSocialLogin("Facebook")} className="social-btn facebook-btn">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="social-text">Facebook</span>
              </button>

              <button onClick={() => handleSocialLogin("LINE")} className="social-btn line-btn">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                <span className="social-text">LINE</span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="divider">
            <div className="divider-line"></div>
            <span className="divider-text">{language === 'th' ? 'หรือเข้าสู่ระบบด้วย' : 'Or login with'}</span>
            <div className="divider-line"></div>
          </div>

          {/* Username/Password Login */}
          <div className="form-section">
            <div className="input-group">
              <label htmlFor="username" className="input-label">{text.email}</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input"
                placeholder={text.email}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password" className="input-label">{text.password}</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder={text.password}
              />
            </div>

            <button onClick={handleLogin} className="login-btn">{text.loginBtn}</button>
          </div>

          {/* Footer */}
          <div className="login-footer">
            <a href="#" className="forgot-link">{text.forgotPassword}</a>
          </div>

          <div className="signup-section">
            <p className="signup-text">
              {text.signupText} <a href="#" className="signup-link">{text.signupLink}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
