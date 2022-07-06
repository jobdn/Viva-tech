import React from "react";

import blockchaimImg from "../../assets/img/blockchain.png";

import "./AboutCard.scss";

export const AboutCard: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  // TODO: make it as a props
  const desc = `We are a team of enthusiastic developers. 
    We can make the use of blockchain technologies easier for 
    users who are not familiar with them!`;

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
    <div className="about-card">
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
                {isMobile ? desc.slice(0, 59) + "...." : desc}
              </div>
            </div>
            <div className="card__img">
              <img src={blockchaimImg} alt="card-img"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
