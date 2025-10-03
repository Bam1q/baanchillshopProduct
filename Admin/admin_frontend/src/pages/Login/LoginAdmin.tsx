import { useState } from "react";
import "./LoginAdmin.css";
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
      welcome: "เข้าสู่ระบบหลังบ้าน",
      description: "เข้าสู่ระบบด้วยบัญชีที่ของคุณ",
      socialTitle: "เชื่อมต่อด้วย",
      email: "Username",
      password: "Password",
      loginBtn: "เข้าสู่ระบบ",
    },
    en: {
      welcome: "Welcome",
      description: "Login with your account username and password",
      socialTitle: "Connect with",
      email: "Username  ",
      password: "Password",
      loginBtn: "Login",
    },
  } as const;

  const text = t[language];

  return (
    <div className="login-container">
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

        </div>
      </div>
    </div>
  );
};

export default LoginUser;
