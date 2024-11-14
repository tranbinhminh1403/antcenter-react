import React from "react";
import styles from "./Carousel.module.scss";

const Carousel = ({ images }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Đối tác của chúng tôi</h2>
        <p>
          2.000+ giáo viên và trung tâm đã tự động hóa thành công quy trình quản
          lý và tối ưu chi phí.
        </p>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {images.map((img) => (
            <div className={styles.image} key={img.name}>
              <img src={img.src}></img>
            </div>
          ))}
        </div>

        <div className={styles.carousel}>
          {images.map((img) => (
            <div className={styles.image} key={img.name}>
              <img src={img.src}></img>
            </div>
          ))}
        </div>

        <div className={styles.carousel}>
          {images.map((img) => (
            <div className={styles.image} key={img.name}>
              <img src={img.src}></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
