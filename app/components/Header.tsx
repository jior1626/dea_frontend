import React from "react";
import { IonIcon } from "@ionic/react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img
          src="https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/themes/theme_alcaldia/img/logo_2022.png"
          alt="Logo"
        />
      </div>
      <div className="top_nav">
        <div className="centradototal_">
          <div className="alcaldia_menu_top">
            <div className="iconosmed_">
              <img
                src="https://nivel99.com/desfibriladores/alcaldiaFooter.png"
                width="35"
                height="35"
              />
            </div>
            <div className="dronwalcaldia_">
              <div className="titulalcaldia_">
                Alcaldía de Medellín
                <p id="dropdownMenuLink">Secretarias y Dependencias</p>
              </div>
            </div>
          </div>
          <div className="logo_gov">
            <img
              width={150}
              src="https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/themes/theme_alcaldia/img/logo_gov.png"
              alt="Gov.co"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
