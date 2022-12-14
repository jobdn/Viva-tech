import React from "react";

import blockchainImg from "../../../assets/img/blockchain.png";

import styles from "./AboutCard.module.scss";

const desc = `We are a team of enthusiastic developers. 
    We can make the use of blockchain technologies easier for 
    users who are not familiar with them!`;

export const AboutCard: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function checkMobile() {
      if (window.innerWidth < 500) setIsMobile(true);
      else setIsMobile(false);
    }

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={styles.aboutCard}>
      <div className={styles.aboutCardContainer}>
        <div className={styles.card}>
          <div className={styles.navbar}>
            <div className={styles.navbarTitle}>Dev 2022</div>
            <div className={styles.navbarDecs}>About us</div>
          </div>
          <div className={styles.content}>
            <div>
              <div className={styles.cardTitle}>Blockchain experts</div>
              <div className={styles.cardDesc}>
                {isMobile ? desc.slice(0, 59) + "...." : desc}
              </div>
            </div>
            <div className={styles.cardImg}>
              <img src={blockchainImg} alt="Card of About section"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
