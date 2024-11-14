import { Col, Row } from "antd";
import styles from "./../../content.module.scss";
import React from "react";

const Content6 = () => {
  return (
    <Row className={styles.content}>
      <Col xl={12} md={24} className={styles.contentItem}>
        <div className={styles.summary}>
          <div className={styles.part}>
            <div className={styles.square}>
              <img src="rewind.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Tự động theo dõi bảo lưu & hoàn phí</p>
              <p>
                Kiểm tra và xác nhận đơn nghỉ & dừng học online dễ dàng chỉ với
                1 click. Tự động tính toán bảo lưu, hoàn & chuyển phí.
              </p>
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.square}>
              <img src="ticket.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Linh hoạt thiết lập khuyến mãi</p>
              <p>
                Linh hoạt thiết lập chương trình khuyến mãi cho từng trung tâm,
                từng lớp học, mức khuyến mãi và thời gian áp dụng giúp quản lý
                và thiết kế chương trình khuyến mãi được dễ dàng.
              </p>
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.square}>
              <img src="chart.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Báo cáo tự động</p>
              <p>
                Tự động báo cáo doanh thu kế toán, doanh số, doanh thu ghi nhận
                trước chi tiết theo từng kỳ, từng lớp học giúp dễ dàng theo dõi
                và kiểm soát số liệu tài chính một cách chính xác, mọi lúc, mọi
                nơi.
              </p>
            </div>
          </div>
        </div>
      </Col>

      <Col xl={12} md={24} className={styles.videoContainer}>
        <div className={styles.video}>
          <video loop="true" autoPlay="autoplay" muted>
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

export default Content6;
