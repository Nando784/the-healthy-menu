import React from "react";

import style from "../../style/Footer.module.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer({white}) {
  return (
    <>
      <footer className={ 
        white ? 
          `${style.footer} ${style.white}`
        :
          `${style.footer}` 
      }>

        <div className={style.social}>
          <h5 className={style.title}>
            <strong>in</strong>
          </h5>

          <a
            className={style.link}
            href="https://www.linkedin.com/in/nando-sorbello-290399"
            target="_blank"
          >
            <FaLinkedin className={style.socialIcon} />
          </a>

          <a
            className={style.link}
            href="https://github.com/Nando784"
            target="_blank"
          >
            <FaGithub className={style.socialIcon} />
          </a>

          <a
            className={style.link}
            href="https://www.instagram.com/sorbrex.ns/"
            target="_blank"
          >
            <FaInstagram className={style.socialIcon} />
          </a>
        </div>

        <p className={style.paragraph}>
          &copy; 2021 NANDO SORBELLO | NANDOSORBELLO@LIVE.IT
        </p>
      </footer>
    </>
  );
}

export default Footer;
