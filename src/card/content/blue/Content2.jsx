import { Col, Row } from "antd";
import styles from "./../../content.module.scss";
import React from "react";

const Content2 = () => {
  return (
    <Row  className={styles.content}>
      <Col xl={12} md={24} className={styles.contentItem}>
        <div className={styles.summary}>
          <div className={styles.part}>
            <div className={styles.square}>
              <img src="settask.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Thiết lập và giao việc linh hoạt</p>
              <p>
                Linh hoạt thiết lập loại công việc, lập kế hoạch, giao & theo
                dõi chi tiết công việc giúp đơn giản hóa quá trình quản lý công
                việc.
              </p>
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.square}>
              <img src="job.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Dễ dàng theo dõi chi tiết công việc</p>
              <p>
                Theo dõi quá trình xử lý từng công việc chi tiết giúp kiểm soát
                chặt chẽ và nâng cao hiệu suất làm việc.
              </p>
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.square}>
              <img src="chart.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Báo cáo toàn diện</p>
              <p>
                Tự động báo cáo mức độ hoàn thành công việc giúp đánh giá được
                hiệu suất làm việc một cách dễ dàng
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

export default Content2;
