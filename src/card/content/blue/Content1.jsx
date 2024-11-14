import { Col, Row } from "antd";
import styles from "./../../content.module.scss";
import React from "react";

const Content1 = () => {
  return (
    <Row className={styles.content}>
      <Col xl={12} md={24} lg={12} className={styles.contentItem}>
        <div className={styles.summary}>
          <div className={styles.part}>
            <div className={styles.square}>
              <img src="input.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Quản lý học viên tiềm năng (Leads)</p>
              <p>
                Theo dõi nguồn, trạng thái của các học viên tiềm năng. Phân bổ
                cho từng nhân viên tư vấn phụ trách. Theo dõi chi tiết quá trình
                và quản lý lịch sử chăm sóc của bộ phận tư vấn đối với các học
                viên tiềm năng giúp kiểm soát chặt chẽ và toàn diện quá trình
                sales.
              </p>
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.square}>
              <img src="exam.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Kiểm tra đầu vào</p>
              <p>
                Tạo lịch kiểm tra đầu vào dễ dàng. Theo dõi tỉ lệ học viên hoàn
                thành, quản lý kết quả thi và xếp lớp chi tiết của từng học viên
                tiềm năng giúp nâng cao tỉ lệ chuyển đổi, tăng doanh số tuyển
                sinh mới.
              </p>
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.square}>
              <img src="class.svg"></img>
            </div>
            <div className={styles.details}>
              <p>Quản lý học thử</p>
              <p>
                Dễ dàng theo dõi đăng ký học thử, tỉ lệ hoàn thành và kết quả
                học thử một cách liền mạch với giáo viên & trợ giảng, giúp học
                viên trải nghiệm học tập ban đầu tốt nhất.
              </p>
            </div>
          </div>
        </div>
      </Col>

      <Col xl={12} md={24} lg={12} className={styles.videoContainer}>
        <div className={styles.video}>
          <video loop={true} autoPlay="autoplay" muted>
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

export default Content1;
