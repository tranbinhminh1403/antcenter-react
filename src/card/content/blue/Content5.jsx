import { Col, Row } from "antd";
import styles from "./../../content.module.scss";
import React from "react";

const Content5 = () => {
  return (
    <Row className={styles.content}>
      <Col xl={12} md={24} className={styles.contentItem}>
        <div className={styles.summary}>
          <div className={styles.part}>
            <div className={styles.square}>
              <img src="calendar.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Tối ưu xếp lịch dạy</p>
              <p>
                Dễ dàng xếp lịch và theo dõi thời lượng giảng dạy và nghỉ dạy
                thực tế của giáo viên & trợ giảng.
              </p>
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.square}>
              <img src="clock.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Bảng công tự động</p>
              <p>
                Dễ dàng duyệt đơn nghỉ dạy online chỉ với 1 click. Tự động lập
                bảng công dạy thực tế để tính lương. Giáo viên & trợ giảng dễ
                dàng kiểm tra và xác nhận mọi lúc mọi nơi. Tiết kiệm công sức
                thao tác thủ công.
              </p>
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.square}>
              <img src="tablechart.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Đánh giá kết quả giảng dạy toàn diện</p>
              <p>
                Dễ dàng xem báo cáo đánh giá chi tiết của từng giáo viên & trợ
                giảng mọi lúc, mọi nơi để giúp kiểm soát & nâng cao kết quả
                giảng dạy: Mức độ nghỉ dạy, kết quả học tập & đánh giá của học
                viên, tỉ lệ tái tục và số lượng học sinh nghỉ học.
              </p>
            </div>
          </div>
        </div>
      </Col>

      <Col xl={12} md={24} className={styles.videoContainer}>
        <div className={styles.video}>
          <video loop="true" autoPlay="autoplay" muted>
            <source
              src="https://s3.evgcloud.net/public/ant-center-home-page-video/Quan_ly_giao_vien.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </Col>
    </Row>
  );
};

export default Content5;
