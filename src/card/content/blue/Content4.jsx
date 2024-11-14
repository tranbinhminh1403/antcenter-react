import { Col, Row } from "antd";
import styles from "./../../content.module.scss";
import React from "react";

const Content4 = () => {
  return (
    <Row className={styles.content}>
      <Col xl={12} md={24} className={styles.contentItem}>
        <div className={styles.summary}>
          <div className={styles.part}>
            <div className={styles.square}>
              <img src="chart.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Thông tin & báo cáo học tập</p>
              <p>
                Quản lý thông tin học viên toàn diện. Báo cáo kết quả học tập
                thông minh và đầy đủ thông tin chuyên cần, ý thức làm bài tập và
                điểm số, giúp đánh giá được tiến bộ của học sinh liên tục và dễ
                dàng.
              </p>
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.square}>
              <img src="finreport.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Báo cáo học phí</p>
              <p>
                Tự động theo dõi đầy đủ và chi tiết số dư học phí, tiến độ học,
                lịch sử nộp phí, nghỉ học & bảo lưu, dừng học & hoàn phí từng
                học viên. Dễ dàng truy xuất thông tin mọi lúc, mọi nơi.
              </p>
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.square}>
              <img src="star.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Tối ưu dịch vụ chăm sóc học viên</p>
              <p>
                Theo dõi chi tiết quá trình và quản lý lịch sử chăm sóc học
                viên, đánh giá hài lòng của học viên sau từng buổi học giúp liên
                tục kiểm soát và tối ưu chất lượng chăm sóc học viên.
              </p>
            </div>
          </div>
        </div>
      </Col>

      <Col xl={12} md={24} className={styles.videoContainer}>
        <div className={styles.video}>
          <video loop="true" autoPlay="autoplay" muted>
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

export default Content4;
