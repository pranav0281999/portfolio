import React from 'react';
import {
  pFooter,
  aFooter,
  footerStyle
} from "./footer.module.css";

function Footer(props) {
  return (
    <footer className={footerStyle}>
      <p className={pFooter}>created by&nbsp;
        <a href={"https://www.linkedin.com/in/pranav0281999/"} className={aFooter}>
          pranav0281999
        </a>
      </p>
    </footer>
  );
}

export default Footer;
