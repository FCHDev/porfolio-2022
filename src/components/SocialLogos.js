import React from "react";
import linkedIn from "../assets/logos/linkedin.svg";
import malt from "../assets/logos/malt.svg";
// import twitter from "../assets/logos/twitter.svg";

const SocialLogos = () => {
  return (
    <div className="logos-social">
      <a
        href="https://www.linkedin.com/in/frachevalier/"
        // eslint-disable-next-line
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={linkedIn}
          alt="linkedin françois chevalier développeur React"
        />
      </a>

      <a
        href="https://www.malt.fr/profile/francoischevalier?overview=true"
        // eslint-disable-next-line
        target="_blank"
        rel="noreferrer"
      >
        <img src={malt} alt="malt françois chevalier développeur React" />
      </a>
      {/*<a href="https://twitter.com/knightanddev"*/}
      {/*    // eslint-disable-next-line*/}
      {/*   target="_blank"*/}
      {/*   rel="noreferrer"*/}
      {/*>*/}
      {/*    <img src={twitter} alt="twitter françois chevalier développeur React"/>*/}
      {/*</a>*/}
    </div>
  );
};

export default SocialLogos;
