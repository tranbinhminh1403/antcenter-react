import React from "react";
import styles from "./../../content.module.scss";
import { Col, Row } from "antd";

const Green2 = () => {
  return (
    <Row className={styles.content}>
      <Col xl={12} md={24} lg={12} className={styles.contentItem}>
        <h3>Bài tập & kiểm tra chung một nền tảng</h3>
        <p>
          Lên lịch và kế hoạch sẵn cho các bài tập & kiểm tra của từng lớp mà
          không tốn nhiều công sức.
        </p>
        <p>
          Cài đặt tỉ trọng điểm cho từng loại bài và tự động tính điểm trung
          bình giúp theo dõi được kết quả học tập của từng học viên một cách chi
          tiết và dễ dàng.
        </p>
      </Col>
      <Col xl={12} md={24} lg={12} className={styles.videoContainer}>
        <div className={styles.video}>
          <video loop={true} autoPlay="autoplay" muted>
            <source
              src="https://s3.evgcloud.net/public/ant-center-home-page-video/Quan_ly_bai_tap.mp4"
              type="video/mp4"
            ></source>{" "}
          </video>
        </div>
      </Col>
    </Row>
  );
};

export default Green2;
