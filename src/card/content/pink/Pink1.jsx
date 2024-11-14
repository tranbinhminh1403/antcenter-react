import React from "react";
import styles from "./../../content.module.scss";
import { Col, Row } from "antd";

const Pink1 = () => {
  return (
    <Row className={styles.content}>
      <Col xl={12} md={24} lg={12} className={styles.contentItem}>
        <h3>Báo cáo học phí đầy đủ & trực quan</h3>
        <p>
          Báo cáo doanh số theo từng kỳ, trực quan và sinh động giúp theo dõi
          kinh doanh thật dễ dàng.
        </p>
      </Col>

      <Col xl={12} md={24} lg={12} className={styles.videoContainer}>
        <div className={styles.video}>
          <video loop={true} autoPlay="autoplay" muted>
            <source
              src="https://s3.evgcloud.net/public/ant-center-home-page-video/Dashboard_report.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </Col>
    </Row>
  );
};

export default Pink1;
