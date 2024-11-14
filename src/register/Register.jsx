import { Col, Input, Row } from "antd";
import React from "react";
import gen from "./../general_styles/General.module.css";
import styles from "./Register.module.scss";
import clsx from "clsx";

const Register = () => {
  return (
    <div className={styles.register}>
      <Row className={styles.container}>
        <Col xl={12} md={24} lg={12} className={styles.form}>
          <div className={styles.title}>
            <h3>Đăng ký ngay</h3>
            <p>
              2.000+ giáo viên và trung tâm đã tự động hóa quy trình quản lý và
              tối ưu chi phí thành công.
            </p>
          </div>

          <div className={styles.inputForm}>
            <form>
              <div className={styles.input}>
                <Input
                  className={styles.inputField}
                  size="large"
                  placeholder="Họ và tên"
                  prefix={
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src="user.svg"
                      alt="user"
                    ></img>
                  }
                />

                <Input
                  className={styles.inputField}
                  size="large"
                  placeholder="Số điện thoại"
                  prefix={
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src="phone.svg"
                      alt=""
                    ></img>
                  }
                />

                <Input
                  className={styles.inputField}
                  size="large"
                  placeholder="Tên trung tâm"
                  prefix={
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src="centre.svg"
                      alt=""
                    ></img>
                  }
                />
              </div>
              <div className={styles.submit}>
                <input
                  className={clsx(gen.btn, styles.submitBtn)}
                  type="submit"
                  value="Đăng Ký Tư Vấn"
                ></input>
              </div>
            </form>
          </div>
        </Col>

        <Col xl={12} md={0} lg={12} className={styles.image}>
          <img src="register.svg" alt="register"></img>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
