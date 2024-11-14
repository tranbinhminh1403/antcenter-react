import { Col, Row } from 'antd'
import styles from "./../../content.module.scss";
import React from 'react'

const Pink2 = () => {
  return (
    <Row className={styles.content}>
    <Col xl={12} md={24} lg={12} className={styles.contentItem}>
        <h3>Tự động tính phí</h3>
        <p>Kiểm tra và xác nhận đơn nghỉ & dừng học online dễ dàng chỉ với 1 click. Tự động tính toán bảo lưu, hoàn & chuyển phí.</p>
        <p>Luôn theo dõi được tình trạng học phí, chi tiết số dư học phí và ngày hết phí của từng học viên một cách dễ dàng và liền mạch.</p>
    </Col>
    <Col xl={12} md={24} lg={12} className={styles.videoContainer}>
        <div className={styles.video}>
            <video loop={true} autoPlay="autoplay" muted>
                <source src="https://s3.evgcloud.net/public/ant-center-home-page-video/Theo_doi_so_du_hoc_phi.mp4" type="video/mp4"></source>
            </video>
        </div>
    </Col>
</Row>
  )
}

export default Pink2