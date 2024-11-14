import React, { useState, useEffect } from "react";
import styles from "./Testimony.module.scss";
import { Col, Row } from "antd";
import clsx from "clsx";

const Testimony = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(3); // Start with index 3
  const len = content.length;

  // Calculate displayed avatars based on the activeIndex
  const displayedAvatars = [
    content[(activeIndex + 3) % len], // First avatar
    content[(activeIndex + 4) % len], // Second avatar
    content[activeIndex],             // Active (middle) avatar
    content[(activeIndex + 1) % len], // Fourth avatar
    content[(activeIndex + 2) % len], // Fifth avatar
  ];

  // Auto-switch functionality with reset on activeIndex change
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % len);
    }, 3000); // Switch every 3 seconds

    // Clear and reset interval on activeIndex change
    return () => clearInterval(interval);
  }, [activeIndex, len]); // Dependency on activeIndex to reset the interval

  return (
    <div className={styles.testimony}>
      <Row className={styles.container}>
        <Col xl={6} lg={6} md={0} className={styles.item}>
          <a
            className={styles.prev}
            onClick={() => setActiveIndex((activeIndex - 1 + len) % len)}
          >
            &#10094;
          </a>
        </Col>

        <Col xl={12} lg={12} md={24} className={styles.item}>
          <div className={styles.carousel}>
            <h2>Khách hàng nói gì về chúng tôi</h2>
            <img className={styles.quoteIcon} src="quote.svg" alt="quote"></img>

            {/* Display quote with unique key to re-trigger animation */}
            {displayedAvatars[2] && (
              <p key={activeIndex} className={styles.quote}>
                {displayedAvatars[2].quote}
              </p>
            )}

            {/* carousel here */}
            <div className={styles.avatarContainer}>
              {displayedAvatars.map((item, index) => (
                <div
                  key={`${item.key}-${activeIndex}`} // Unique key to trigger re-render
                  className={clsx(styles.avatar, {
                    [styles.active]: index === 2, // Middle avatar is active
                  })}
                  onClick={() =>
                    setActiveIndex((activeIndex + index - 2 + len) % len)
                  }
                >
                  <img src={item.avatar} alt="avatar"></img>
                </div>
              ))}
            </div>

            {/* Display name and title for active (middle) avatar */}
            {displayedAvatars[2] && (
              <div className={styles.details}>
                <p className={styles.name}>{displayedAvatars[2].name}</p>
                <p className={styles.title}>{displayedAvatars[2].title}</p>
              </div>
            )}
          </div>
        </Col>

        <Col xl={6} lg={6} md={0} className={styles.item}>
          <a
            className={styles.next}
            onClick={() => setActiveIndex((activeIndex + 1) % len)}
          >
            &#10095;
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Testimony;
