//Footer.tsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-column">
        {/* <img
          src="https://nivel99.com/desfibriladores/alcaldiaFooter.png"
          width="35"
          height="35"
        /> */}
      </div>
      <div className="footer-column">
        <img
          width="130"
          src="https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/themes/theme_alcaldia/logos/logo_nav_footer.png"
          alt="Logo"
        />
      </div>
      <div className="footer-column">
        {/*       <img src="https://nivel99.com/desfibriladores/marcacolombia.png" width="35" height="35" />
         */}{" "}
      </div>
      <div className="footer-column">
        <img src="/Recurso 1.png" width="40" height="35" />
      </div>
    </footer>
  );
};

export default Footer;
