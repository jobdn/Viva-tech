import React from "react";
import { useSpring, animated } from "react-spring";

import "./AboutCard.scss";

export const AboutCard: React.FC = () => {
  const animatedProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
  });

  return (
    <animated.section style={animatedProps} className="about-card">
      <div className="about-card__container">
        <div className="card">
          <div className="cart__title">Blockchain</div>
          <div className="card__decs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            pariatur iste eius nesciunt, unde ipsa corrupti! Aspernatur nam iure
            necessitatibus minima, beatae ab reiciendis totam perferendis, minus
            repellendus molestias delectus!
          </div>
          <img className="card__img" alt="card-img"></img>
        </div>
      </div>
    </animated.section>
  );
};
