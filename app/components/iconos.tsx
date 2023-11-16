import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGlobe,
  faChevronDown,
  faCircleInfo,
  faHome,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./iconos.css";

// Configura el sistema de iconos
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faUser, faGlobe, faChevronDown, faCircleInfo, faHome, faChevronLeft);

const User = () => {
  return (
    <div className="containerOptionsUser">
      <div className="white-containerOptionsUser">
        <FontAwesomeIcon icon={faHome} size="xl" className="icono" />
        <FontAwesomeIcon icon={faUser} size="xl" className="icono" />
      </div>
    </div>
  );
};

const Idioma = () => {
  return <FontAwesomeIcon icon={faGlobe} size="lg" className="idioma" />;
};

const ChevronDown = () => {
  return (
    <FontAwesomeIcon icon={faChevronDown} size="xs" className="chevrondown" />
  );
};

const CicleInfo = () => {
  return (
    <FontAwesomeIcon icon={faCircleInfo} size="lg" className="cicleinfo" />
  );
};

const Home = () => {
  return (
    <FontAwesomeIcon icon={faHome} size="xl" className="Home" />
  );
};
const ChevronLeft = () => {
  return (
    <div className="containerOptionsUserLeft">
      <div className="white-containerOptionsUserLeft">
        <FontAwesomeIcon icon={faChevronLeft} size="xl" className="icono" />
      </div>
    </div>
  );
};



export { User, Idioma, ChevronDown, CicleInfo, ChevronLeft, Home };
