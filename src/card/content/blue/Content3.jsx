import { Col, Row } from "antd";
import styles from "./../../content.module.scss";
import React from "react";

const Content3 = () => {
  return (
    <Row className={styles.content}>
      <Col xl={12} md={24} className={styles.contentItem}>
        <div className={styles.summary}>
          <div className={styles.part}>
            <div className={styles.square}>
              <img src="cert.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Đầy đủ thông tin</p>
              <p>Theo dõi toàn bộ thông tin lớp học & buổi học dễ dàng.</p>
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.square}>
              <img src="mail.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Dễ dàng điểm danh, nhận xét và trao đổi sau từng buổi học</p>
              <p>
                Thao tác đơn giản và tức thì, theo sát từng buổi học. Phụ huynh
                & học viên nhận kết quả ngay.
              </p>
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.square}>
              <img src="tasklist.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Quản lý tài liệu thông minh</p>
              <p>
                Quản lý tài liệu theo lớp và buổi học, tùy biến thiết lập chế độ
                hiển thị riêng tư cho giáo viên hoặc công khai cho toàn bộ thành
                viên trong lớp giúp quản lý tài liệu được tập trung và dễ dàng
                truy vấn tài liệu khi cần thiết.
              </p>
            </div>
          </div>
        </div>
      </Col>

      <Col xl={12} md={24} className={styles.videoContainer}>
        <div className={styles.video}>
          <video loop="true" autoPlay="autoplay" muted>
            <source
              src="https://s3.evgcloud.net/public/ant-center-home-page-video/Tinh_nang_tuyen_sinh.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </Col>
    </Row>
  );
};

export default Content3;
