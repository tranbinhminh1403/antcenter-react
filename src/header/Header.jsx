import format from './../General_styles/general.module.css'
import styles from './Header.module.scss'
import clsx from 'clsx';


const Header = () => {
    console.log(format)
  return (
    <div className={styles.header}>

      <div className={styles.logo}>
        <a href="#">
          <img src="ant-center-logo.svg" />
        </a>
      </div>


      <div className={styles.buttonContainer}>
        <a className={clsx(format.btn, styles.registerButton)}>Đăng Ký Tư Vấn</a>
        <a className={clsx(format.btn, styles.loginButton)}>Đăng Nhập</a>
      </div>

    </div>
  );
};

export default Header;
