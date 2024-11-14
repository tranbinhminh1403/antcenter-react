import { useState, useEffect, useRef } from "react";

import gen from "./../general_styles/General.module.css";
import styles from "./card.module.scss";
import clsx from "clsx";

const Card = ({ items, title, colorScheme, tabCentered }) => {
  const [tabs, setTabs] = useState(1);
  const [scrollableLeft, setScrollableLeft] = useState(false);
  const [scrollableRight, setScrollableRight] = useState(false);
  const tabContentRef = useRef(null);

  useEffect(() => {
    const tabContent = tabContentRef.current;
    if (tabContent) {
      const updateScrollButtons = () => {
        setScrollableLeft(tabContent.scrollLeft > 20);
        setScrollableRight(
          tabContent.scrollLeft <
            tabContent.scrollWidth - tabContent.clientWidth - 50
        );
      };

      updateScrollButtons(); // Initial check
      tabContent.addEventListener("scroll", updateScrollButtons);

      // Re-run the check when the window resizes
      window.addEventListener("resize", updateScrollButtons);

      // Cleanup
      return () => {
        tabContent.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollButtons);
      };
    }
  }, [items]); // Re-run effect when items change

  const handleScroll = (direction) => {
    const tabContent = tabContentRef.current;
    if (tabContent) {
      const scrollAmount = direction === "left" ? -1000 : 1000;
      tabContent.scrollLeft += scrollAmount;
    }
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: colorScheme.backgroundColor }}
    >
      <div className={styles.title}>
        <h3>{title.title1}</h3>
        <p style={{ color: colorScheme.color }}>{title.title2}</p>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.tabList}>
          {/* scroll to left */}
          {scrollableLeft && (
            <button
              className={styles.scrollLeft}
              onClick={() => handleScroll("left")}
            >
              &#10094;
            </button>
          )}

          <div
            ref={tabContentRef}
            className={styles.tabContent}
            style={{ justifyContent: tabCentered ? "space-between" : "left" }}
          >
            {items.map((item) => (
              <button
                key={item.key}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  borderBottom:
                    item.key === String(tabs)
                      ? `2px solid ${colorScheme.color}`
                      : "none",
                  color:
                    item.key === String(tabs) ? "black" : "rgb(99, 115, 129)",
                }}
                onClick={() => setTabs(Number(item.key))}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* scroll to right */}
          {scrollableRight && (
            <button
              className={styles.scrollRight}
              onClick={() => handleScroll("right")}
            >
              &#10095;
            </button>
          )}
        </div>

        <div>
          {items.map((item) => (
            <div key={item.key}>
              {item.key === String(tabs) ? item.children : null}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.earlyAccess}>
        <button
          className={clsx(gen.btn, styles.earlyAccessBtn)}
          style={{ backgroundColor: colorScheme.color }}
        >
          {" "}
          Đăng ký trải nghiệm
        </button>
      </div>
    </div>
  );
};

export default Card;
