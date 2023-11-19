import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGlobe,
  faChevronDown,
  faCircleInfo,
  faHome,
  faChevronLeft,
  faCirclePlus,
  faArrowRightFromBracket,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./iconos.css";
import * as React from "react";
import Tooltip from "@mui/material/Tooltip";

// Configura el sistema de iconos
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  faUser,
  faGlobe,
  faChevronDown,
  faCircleInfo,
  faHome,
  faChevronLeft,
  faCirclePlus,
  faArrowRightFromBracket,
  faFileArrowDown
);

const User = () => {
  return (
    <div className="containerOptionsUser">
      <div className="white-containerOptionsUser">
        <Tooltip title="Inicio">
          <FontAwesomeIcon icon={faHome} size="xl" className="icono" />
        </Tooltip>
        <Tooltip title="Perfil">
          <FontAwesomeIcon icon={faUser} size="xl" className="icono" />
        </Tooltip>
        <Tooltip title="Salir">
          <a href="/">
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              size="xl"
              className="icono1"
            />
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

const Idioma = () => {
  return <FontAwesomeIcon icon={faGlobe} size="lg" className="idioma" />;
};

const FileDown = () => {
  return (
    <Tooltip title="Regresar">
      <FontAwesomeIcon icon={faFileArrowDown} size="lg" className="file" />
    </Tooltip>
  );
};

const ChevronDown = () => {
  return (
    <FontAwesomeIcon icon={faChevronDown} size="xs" className="chevrondown" />
  );
};

const CicleInfo = () => {
  return (
    <Tooltip title="Instrucciones de diligenciamiento">
      <FontAwesomeIcon icon={faCircleInfo} size="lg" className="cicleinfo" />
    </Tooltip>
  );
};

const Home = () => {
  return <FontAwesomeIcon icon={faHome} size="xl" className="Home" />;
};
const CirclePlus = () => {
  return <FontAwesomeIcon icon={faCirclePlus} size="2xl" className="plus" />;
};
const ChevronLeft = () => {
  return (
    <div className="containerOptionsUserLeft">
      <div className="white-containerOptionsUserLeft">
        <Tooltip title="Regresar">
          <FontAwesomeIcon icon={faChevronLeft} size="xl" className="icono" />
        </Tooltip>
      </div>
    </div>
  );
};

const HomeOut = () => {
  return (
    <div className="containerOptionsUserHomeOut">
      <div className="white-containerOptionsHomeOut">
        <Tooltip title="Inicio">
          <FontAwesomeIcon icon={faHome} size="xl" className="icono" />
        </Tooltip>
        <Tooltip title="Salir">
          <a href="/">
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              size="xl"
              className="icono1"
            />
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export {
  User,
  Idioma,
  ChevronDown,
  CicleInfo,
  ChevronLeft,
  Home,
  CirclePlus,
  HomeOut,
  FileDown,
};
