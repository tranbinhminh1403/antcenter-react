import React from 'react'
import styles from "./../../content.module.scss";
import { Col, Row } from "antd";

const Pink3 = () => {
  return (
    <Row className={styles.content}>
    <Col xl={12} md={24} lg={12} className={styles.contentItem}>
        <h3>Đơn giản hóa quản lý học phí</h3>
        <p>Linh hoạt thiết lập cấu trúc gói học phí và chương trình khuyến mãi cho từng trung tâm, lớp học cụ thể, cùng với khả năng điều chỉnh mức khuyến mãi và thời gian áp dụng, giúp quản lý học phí được dễ dàng.</p>
    </Col>
    <Col xl={12} md={24} lg={12} className={styles.videoContainer}>
        <div className={styles.video}>
            <video loop={true} autoPlay="autoplay" muted>
                <source src="https://s3.evgcloud.net/public/ant-center-home-page-video/Thiet_lap_hoc_phi_va_khuyen_mai.mp4" type="video/mp4"></source>
            </video>
        </div>
    </Col>
</Row>
  )
}

export default Pink3