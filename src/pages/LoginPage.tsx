import React, { useState } from 'react';
import { FiUser, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ username: '', password: '' });

  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.card}>
        <div className={styles.logoArea}>
          <div className={styles.logoMark}><span>C</span></div>
          <div>
            <div className={styles.logoName}>[brand]</div>
            <div className={styles.logoSub}>Healthcare Pvt. Ltd.</div>
          </div>
        </div>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.sub}>Sign in to your account</p>

        <div className={styles.field}>
          <FiUser className={styles.fieldIcon} />
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={e => setForm(p => ({ ...p, username: e.target.value }))}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <FiLock className={styles.fieldIcon} />
          <input
            type={show ? 'text' : 'password'}
            placeholder="Password"
            value={form.password}
            onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
            className={styles.input}
          />
          <button className={styles.toggle} onClick={() => setShow(!show)}>
            {show ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
        <button className={styles.submit}>Sign In</button>
      </div>
    </section>
  );
};

export default LoginPage;