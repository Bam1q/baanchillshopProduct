import React, { useState } from 'react';
import './RegisUser.css';
import { useLanguage } from '../../LanguageContext';
import NavbarGuest from '../../component/Navbar/NavbarGuest';

interface RegisterForm {
  first_name: string;
  last_name: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  agreePolicy: boolean;
}

interface RegisterErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  confirmEmail?: string;
  password?: string;
  confirmPassword?: string;
  agreePolicy?: string;
}

const texts = {
  th: {
    labels: {
      first_name: 'ชื่อ',
      last_name: 'นามสกุล',
      email: 'อีเมล',
      confirmEmail: 'ยืนยันอีเมล',
      password: 'รหัสผ่าน',
      confirmPassword: 'ยืนยันรหัสผ่าน',
      agreePolicy: 'ยอมรับนโยบายความเป็นส่วนตัว',
      submit: 'สมัครสมาชิก',
      required: '*',
    },
    placeholders: {
      first_name: 'กรอกชื่อ',
      last_name: 'กรอกนามสกุล',
      email: 'กรอกอีเมล',
      confirmEmail: 'ยืนยันอีเมล',
      password: 'รหัสผ่าน',
      confirmPassword: 'ยืนยันรหัสผ่าน',
    },
    errors: {
      first_name: 'กรุณากรอกชื่อ',
      last_name: 'กรุณากรอกนามสกุล',
      email: 'กรุณากรอกอีเมล',
      email_invalid: 'อีเมลไม่ถูกต้อง',
      confirmEmail: 'กรุณายืนยันอีเมล',
      confirmEmail_mismatch: 'อีเมลไม่ตรงกัน',
      password: 'กรุณากรอกรหัสผ่าน',
      password_short: 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร',
      confirmPassword: 'กรุณายืนยันรหัสผ่าน',
      confirmPassword_mismatch: 'รหัสผ่านไม่ตรงกัน',
      agreePolicy: 'คุณต้องยอมรับนโยบาย',
    },
    success: 'สมัครสมาชิกสำเร็จ 🎉',
  },
  en: {
    labels: {
      first_name: 'First Name',
      last_name: 'Last Name',
      email: 'Email',
      confirmEmail: 'Confirm Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      agreePolicy: 'I agree to the privacy policy',
      submit: 'Register',
      required: '*',
    },
    placeholders: {
      first_name: 'Enter first name',
      last_name: 'Enter last name',
      email: 'Enter email',
      confirmEmail: 'Confirm email',
      password: 'Password',
      confirmPassword: 'Confirm password',
    },
    errors: {
      first_name: 'Please enter first name',
      last_name: 'Please enter last name',
      email: 'Please enter email',
      email_invalid: 'Invalid email',
      confirmEmail: 'Please confirm email',
      confirmEmail_mismatch: 'Emails do not match',
      password: 'Please enter password',
      password_short: 'Password must be at least 6 characters',
      confirmPassword: 'Please confirm password',
      confirmPassword_mismatch: 'Passwords do not match',
      agreePolicy: 'You must accept the policy',
    },
    success: 'Registration successful 🎉',
  },
};

const RegisterUser: React.FC = () => {
  const { language } = useLanguage();
  const t = texts[language];

  const [formData, setFormData] = useState<RegisterForm>({
    first_name: '',
    last_name: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    agreePolicy: false,
  });
  const [errors, setErrors] = useState<Partial<RegisterErrors>>({});
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: Partial<RegisterErrors> = {};

    if (!formData.first_name.trim()) newErrors.first_name = t.errors.first_name;
    if (!formData.last_name.trim()) newErrors.last_name = t.errors.last_name;

    if (!formData.email.trim()) newErrors.email = t.errors.email;
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t.errors.email_invalid;

    if (!formData.confirmEmail.trim()) newErrors.confirmEmail = t.errors.confirmEmail;
    else if (formData.email !== formData.confirmEmail) newErrors.confirmEmail = t.errors.confirmEmail_mismatch;

    if (!formData.password) newErrors.password = t.errors.password;
    else if (formData.password.length < 6) newErrors.password = t.errors.password_short;

    if (!formData.confirmPassword) newErrors.confirmPassword = t.errors.confirmPassword;
    else if (formData.confirmPassword !== formData.password) newErrors.confirmPassword = t.errors.confirmPassword_mismatch;

    if (!formData.agreePolicy) newErrors.agreePolicy = t.errors.agreePolicy;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log('Register Data:', formData);
    setSuccessMessage(t.success);
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      agreePolicy: false,
    });
  };

  return (
    <div className="register-container">
        <NavbarGuest />
      <h2 className="register-title">{t.labels.submit}</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        
        <label>{t.labels.first_name} <span className="required">{t.labels.required}</span></label>
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder={t.placeholders.first_name} />
        {errors.first_name && <span className="error">{errors.first_name}</span>}

        <label>{t.labels.last_name} <span className="required">{t.labels.required}</span></label>
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder={t.placeholders.last_name} />
        {errors.last_name && <span className="error">{errors.last_name}</span>}

        <label>{t.labels.email} <span className="required">{t.labels.required}</span></label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.placeholders.email} />
        {errors.email && <span className="error">{errors.email}</span>}

        <label>{t.labels.confirmEmail} <span className="required">{t.labels.required}</span></label>
        <input type="email" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} placeholder={t.placeholders.confirmEmail} />
        {errors.confirmEmail && <span className="error">{errors.confirmEmail}</span>}

        <label>{t.labels.password} <span className="required">{t.labels.required}</span></label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder={t.placeholders.password} />
        {errors.password && <span className="error">{errors.password}</span>}

        <label>{t.labels.confirmPassword} <span className="required">{t.labels.required}</span></label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder={t.placeholders.confirmPassword} />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

        <label className="policy-label">
          <input type="checkbox" name="agreePolicy" checked={formData.agreePolicy} onChange={handleChange} /> {t.labels.agreePolicy} <span className="required">{t.labels.required}</span>
        </label>
        {errors.agreePolicy && <span className="error">{errors.agreePolicy}</span>}

        <button type="submit" className="register-btn">{t.labels.submit}</button>
        {successMessage && <span className="success">{successMessage}</span>}
      </form>
    </div>
  );
};

export default RegisterUser;
