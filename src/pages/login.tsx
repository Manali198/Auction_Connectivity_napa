import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/pages/Login.module.scss';

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.loginContainer}>
        <div className={styles.innerLoginContainer}>
          <h1 className={styles.loginText}>Login</h1>
          <div className={styles.inputContainer}>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Email"
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              className={styles.inputField}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className={styles.btnContainer}>
            <button type="submit" className={styles.btn}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
