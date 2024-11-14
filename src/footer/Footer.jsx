import React from 'react'
import styles from "./Footer.module.scss"
import { Col, Row } from 'antd'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <Row className={styles.container}>
            <Col xl={8} lg={8} md={24} className={styles.item}>
                <div className={styles.basics}>
                    <div className={styles.logo}>
                        <img src="ant-center-logo.svg" alt="logo"></img>
                    </div>
                    <p className={styles.description}>
                        Phần mềm quản lý trung tâm đào tạo <br></br>
                        Quản lý toàn diện trên một hệ thống duy nhất
                    </p>
                    <div className={styles.social}>
                        <p>Mạng xã hội</p>
                        <div className={styles.icon}>
                            <button>
                                <img src="fb.svg" alt="facebook"></img>
                            </button>
                            <button>
                                <img src="ins.svg" alt="instagram"></img>
                            </button>
                            <button>
                                <img src="lk.svg" alt="linkedin"></img>
                            </button>
                            <button>
                                <img src="tw.svg" alt="twitter"></img>
                            </button>
                        </div>
                    </div>
                </div>
            </Col>

            <Col xl={8} lg={8} md={24} className={styles.item}>
                <Row className={styles.smallContainer}>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} className={styles.smallItem}>
                        <div className={styles.home}>
                            <p className={styles.title}>Home</p>
                            <a href="">Về chúng tôi</a>
                            <a href="">Chính sách giá</a>
                            <a href="">Tài liệu hướng dẫn</a>
                            <a href="">Hướng dẫn học viên</a>
                            <a href="">Liên hệ</a>
                        </div>
                    </Col>

                    <Col xl={12} lg={12} md={12} sm={12} xs={12} className={styles.smallItem}>
                        <div className={styles.compare}>
                            <p className={styles.title}>So Sánh</p>
                            <a href="">vs CenterOnline</a>
                            <a href="">vs Azota</a>
                            <a href="">vs EduSpace</a>
                            <a href="">vs PSE</a>
                            <a href="">vs EasyEdu</a>
                            <a href="">vs DotB</a>
                        </div>
                    </Col>
                </Row>
            </Col>

            <Col xl={8} lg={8} md={24} className={styles.item}>
                <p className={styles.antTitle}>ANT EDTECH ECOSYSTEM</p>
                <div className={styles.desc}>
                    <p>Address: Beaufort Ave, Livingston, New Jersey 07039, United States</p>
                    <p>Viet Nam office: Villa 35, Sunrise A, The Manor Central Park, Đường Nguyễn Xiển, Phường Đại Kim,
                        quận
                        Hoàng Mai, Thành phố Hà Nội</p>
                    <p>Liên hệ: info@ant-learning.com
                        <br></br>
                        Số điện thoại: 0898557169
                    </p>
                </div>
            </Col>
        </Row>
        <div className={styles.copyright}>© 2023. All rights reserved</div>
</div>

  )
}

export default Footer