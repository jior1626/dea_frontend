import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGlobe, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./iconos.css";

// Configura el sistema de iconos
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faUser, faGlobe, faChevronDown);

const User = () => {
  return (
    <div className="containerOptionsUser">
      <div className="white-containerOptionsUser">
        <FontAwesomeIcon icon={faUser} size="xl" className="icono" />
      </div>
    </div>
  );
};

const Idioma = () => {
  return <FontAwesomeIcon icon={faGlobe} size="lg" className="idioma" />;
};

const ChevronDown = () => {
  return <FontAwesomeIcon icon={faChevronDown} size="xs" className="chevrondown"/>;
};

export { User, Idioma, ChevronDown };
