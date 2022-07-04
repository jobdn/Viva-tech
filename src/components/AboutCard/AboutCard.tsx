import React from "react";
import { useSpring, animated } from "react-spring";

import blockchaimImg from "../../assets/img/blockchain.png";

import "./AboutCard.scss";

export const AboutCard: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const animatedProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
  });

  // TODO: make it as a props
  const desc = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Expedita pariatur iste eius nesciunt, unde ipsa corrupti!
  Aspernatur nam iure necessitatibus minima, beatae ab reiciendis
  totam perferendis, minus repellendus molestias delectus!"`;

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
    <animated.section style={animatedProps} className="about-card">
      <div className="about-card__container">
        <div className="card">
          <div className="card__navbar navbar">
            <div className="navbar__title">Dev 2022</div>
            <div className="navbar__decs">About us</div>
          </div>
          <div className="card__content content">
            <div>
              <div className="card__title">Blockchain</div>
              <div className="card__desc">
                {isMobile ? desc.slice(0, 50) + "...." : desc}
              </div>
            </div>
            <div className="card__img">
              <img src={blockchaimImg} alt="card-img"></img>
            </div>
          </div>
        </div>
      </div>
    </animated.section>
  );
};
