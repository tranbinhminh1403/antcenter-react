import { Col, Row } from "antd";
import styles from "./../../content.module.scss";
import React from "react";

const Green1 = () => {
  return (
    <Row className={styles.content}>
      <Col xl={12} md={24} lg={12} className={styles.contentItem}>
        <h3>Báo cáo học tập đầy đủ & tự động</h3>
        <p>
          Đồ thị thông minh và đầy đủ thông tin chuyên cần, ý thức làm bài tập
          và điểm số, giúp đánh giá được tiến bộ của học sinh một cách toàn diện
          và liên tục, từ đó giúp học sinh học tập hiệu quả hơn.
        </p>
      </Col>
      <Col xl={12} md={24} lg={12} className={styles.videoContainer}>
        <div className={styles.video}>
          <video loop={true} autoPlay="autoplay" muted>
            <source
              src="https://s3.evgcloud.net/public/ant-center-home-page-video/Bao_cao_hoc_tap.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </Col>
    </Row>
  );
};

export default Green1;
