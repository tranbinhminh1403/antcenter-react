import { Col, Row } from "antd";
import BannerImg from "./bannerImg/BannerImg";
import Intro from "./introduction/Intro";
import styles from "./banner.module.scss";
const Banner = () => {
  return (
    <div className="banner">
      <Row >
        <Col xl={9} lg={9} md={24}>
            <Intro/>
        </Col>

        <Col xl={15} lg={15} md={0} className={styles.bannerImg}>
            <BannerImg/>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
