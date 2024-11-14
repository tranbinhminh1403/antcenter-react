import React from "react";
import styles from "./../../content.module.scss";
import { Col, Row } from "antd";

const Green3 = () => {
  return (
    <Row className={styles.content}>
      <Col xl={12} md={24} lg={12} className={styles.contentItem}>
        <h3>Chấm điểm và trả bài tức thì</h3>
        <p>
          Dễ dàng theo dõi tình hình hoàn thành bài tập & kiểm tra của từng học
          viên để nắm bắt được ý thức hoàn thành bài được giao.
        </p>
        <p>
          Chấm điểm và trả bài tức thì giúp nâng cao hiệu quả và kết quả giảng
          dạy.
        </p>
      </Col>
      <Col xl={12} md={24} lg={12} className={styles.videoContainer}>
        <div className={styles.video}>
          <video loop={true} autoPlay="autoplay" muted>
            <source
              src="https://s3.evgcloud.net/public/ant-center-home-page-video/Cham_va_tra_bai.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </Col>
    </Row>
  );
};

export default Green3;
