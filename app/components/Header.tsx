import React from "react";
import { IonIcon } from "@ionic/react";
import "./Header.css";
import { Idioma, ChevronDown } from "../components/iconos";

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
                <div className="drop">
                  <p id="dropdownMenuLink" data-toggle="dropdown">
                    Secretarias y Dependencias
                  </p>
                  <p className="iconChevron">
                    <ChevronDown />
                  </p>
                </div>
              </div>
              <div className="menualcaldias_lista">
                <div className="secre_depen_links">
                  <div className="grid_">
                    {/* <span className="titulolistado_">Secretarías</span> */}
                    <div className="listaditoscro">
                      <ul>
                        <div className="menu-secretarias-menu-container">
                          <ul id="menu-secretarias-menu" className="menu">
                            <li
                              id="menu-item-23361"
                              className="titulo_ente_ menu-item menu-item-type-custom menu-item-object-custom menu-item-23361"
                            >
                              <a>
                                <b>Secretarías</b>
                              </a>
                            </li>
                            <li
                              id="menu-item-21915"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21915"
                            >
                              <a href="https://www.medellin.gov.co/es/dagrd/">
                                <span
                                  id="HDepAdmGRD"
                                  /*                                   alt="Departamento Administrativo de Gestión del Riesgo y Desastres"
                                   */ title="Departamento Administrativo de Gestión del Riesgo y Desastres"
                                >
                                  Departamento Administrativo de Gestión del
                                  Riesgo de Desastres
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-16038"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16038"
                            >
                              <a href="https://www.medellin.gov.co/es/departamento-administrativo-de-planeacion/">
                                <span
                                  id="HDepAdmP"
                                  /*                                   alt="Departamento Administrativo de Planeación"
                                   */ title="Departamento Administrativo de Planeación"
                                >
                                  Departamento Administrativo de Planeación
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-31644"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31644"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-de-comunicaciones/">
                                <span
                                  id="HSecComuni"
                                  /*                                   alt="Secretaría de Comunicaciones"
                                   */ title="Secretaría de Comunicaciones"
                                >
                                  Secretaría de Comunicaciones
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-8568"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8568"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-cultura-ciudadana/">
                                <span
                                  id="HSecCC"
                                  /*                                   alt="Secretaría de Cultura Ciudadana"
                                   */ title="Secretaría de Cultura Ciudadana"
                                >
                                  Secretaría de Cultura Ciudadana
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-15595"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15595"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-desarrollo-economico/">
                                <span
                                  id="HSecDE"
                                  /*                                   alt="Secretaría de Desarrollo Económico"
                                   */ title="Secretaría de Desarrollo Económico"
                                >
                                  Secretaría de Desarrollo Económico
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-24492"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24492"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-de-educacion/">
                                <span
                                  id="HSecEdu"
                                  /*                                   alt="Secretaría de Educación"
                                   */ title="Secretaría de Educación"
                                >
                                  Secretaría de Educación
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-22526"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-22526"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-de-evaluacion-y-control/">
                                <span
                                  id="HSecEvCo"
                                  /*                                   alt="Secretaría de Evaluación y Control"
                                   */ title="Secretaría de Evaluación y Control"
                                >
                                  Secretaría de Evaluación y Control
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-11230"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11230"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-general/">
                                <span
                                  id="HSecGen"
                                  /*                                   alt="Secretaría General"
                                   */ title="Secretaría General"
                                >
                                  Secretaría General
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-15665"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15665"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-de-gestion-humana/">
                                <span
                                  id="HSecGeHSC"
                                  /*                                   alt="Secretaría de Gestión Humana y Servicio a la Ciudadanía"
                                   */ title="Secretaría de Gestión Humana y Servicio a la Ciudadanía"
                                >
                                  Secretaría de Gestión Humana y Servicio a la
                                  Ciudadanía
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-23115"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23115"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-gestion-y-control-territorial/">
                                Secretaría de Gestión y Control Territorial
                              </a>
                            </li>
                            <li
                              id="menu-item-12580"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12580"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-de-gobierno/">
                                <span
                                  id="HSecGoGG"
                                  /*                                   alt="Secretaría de Gobierno y Gestión del Gabinete"
                                   */ title="Secretaría de Gobierno y Gestión del Gabinete"
                                >
                                  Secretaría de Gobierno y Gestión del Gabinete
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-17720"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17720"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-de-hacienda/">
                                <span
                                  id="HSecHa"
                                  /*                                   alt="Secretaría de Hacienda"
                                   */ title="Secretaría de Hacienda"
                                >
                                  Secretaría de Hacienda
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-22080"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-22080"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-de-inclusion/">
                                <span id="HSecInSoFaDeHu">
                                  Secretaría de Inclusión Social, Familia y
                                  Derechos Humanos
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-12270"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12270"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-infraestructura-fisica/">
                                <span
                                  id="HSecInfFi"
                                  /*                                   alt="Secretaría de Infraestructura Física"
                                   */ title="Secretaría de Infraestructura Física"
                                >
                                  Secretaría de Infraestructura Física
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-31643"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31643"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-de-innovacion-digital/">
                                Secretaría de Innovación Digital
                              </a>
                            </li>
                            <li
                              id="menu-item-12853"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12853"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-juventud/">
                                <span
                                  id="HSecJuv"
                                  /*                                   alt="Secretaría de La Juventud"
                                   */ title="Secretaría de La Juventud"
                                >
                                  Secretaría de La Juventud
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-19919"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19919"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-de-la-no-violencia/">
                                <span
                                  id="HSecNoViolencia"
                                  /*                                   alt="Secretaría de la No-Violencia"
                                   */ title="Secretaría de la No-Violencia"
                                >
                                  Secretaría de la No-Violencia
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-14813"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14813"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-mujeres/">
                                <span
                                  id="HSecMuje"
                                  /*                                   alt="Secretaría de las Mujeres"
                                   */ title="Secretaría de las Mujeres"
                                >
                                  Secretaría de las Mujeres
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-17342"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17342"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-medio-ambiente/">
                                <span
                                  id="HSecMedAmb"
                                  /*                                   alt="Secretaría de Medio Ambiente"
                                   */ title="Secretaría de Medio Ambiente"
                                >
                                  Secretaría de Medio Ambiente
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-21013"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21013"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-de-movilidad/">
                                <span
                                  id="HSecMov"
                                  /*                                   alt="Secretaría de Movilidad"
                                   */ title="Secretaría de Movilidad"
                                >
                                  Secretaría de Movilidad
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-14948"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14948"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-participacion-ciudadana/">
                                <span
                                  id="HSecPartCiu"
                                  /*                                   alt="Secretaría de Participación Ciudadana"
                                   */ title="Secretaría de Participación Ciudadana"
                                >
                                  Secretaría de Participación Ciudadana
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-12975"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12975"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-privada/">
                                <span
                                  id="HSecPriv"
                                  /*                                   alt="Secretaría Privada"
                                   */ title="Secretaría Privada"
                                >
                                  Secretaría Privada
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-18587"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18587"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-de-salud/">
                                <span
                                  id="HSecSalud"
                                  /*                                   alt="Secretaría de Salud"
                                   */ title="Secretaría de Salud"
                                >
                                  Secretaría de Salud
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-20782"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20782"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-seguridad/">
                                <span
                                  id="HSecSegConv"
                                  /*                                   alt="Secretaría de Seguridad y Convivencia"
                                   */ title="Secretaría de Seguridad y Convivencia"
                                >
                                  Secretaría de Seguridad y Convivencia
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-13211"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13211"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-suministros-y-servicios/">
                                <span
                                  id="HSecSumServ"
                                  /*                                   alt="Secretaría de Suministros y Servicios"
                                   */ title="Secretaría de Suministros y Servicios"
                                >
                                  Secretaría de Suministros y Servicios
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-23360"
                              className="titulo_ente_ menu-item menu-item-type-custom menu-item-object-custom menu-item-23360"
                            >
                              <a>
                                <b>Gerencias</b>
                              </a>
                            </li>
                            <li
                              id="menu-item-14968"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14968"
                            >
                              <a href="https://www.medellin.gov.co/es/gerencia-del-centro/">
                                <span
                                  id="HGerCentro"
                                  /*                                   alt="Gerencia del Centro"
                                   */ title="Gerencia del Centro"
                                >
                                  Gerencia del Centro
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-18597"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18597"
                            >
                              <a href="https://www.medellin.gov.co/es/corregimientos/">
                                <span
                                  id="HGerCorreg"
                                  /*                                   alt="Gerencia de Corregimientos"
                                   */ title="Gerencia de Corregimientos"
                                >
                                  Gerencia de Corregimientos
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-23035"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23035"
                            >
                              <a href="https://www.medellin.gov.co/es/diversidades-sexualidades-e-identidad-de-genero/">
                                <span
                                  id="HGerDivSexIdeGe"
                                  /*                                   alt="Gerencia de Diversidad Sexual e Identidad de Género"
                                   */ title="Gerencia de Diversidades Sexuales e Identidad de Género"
                                >
                                  Gerencia de Diversidades Sexuales e Identidad
                                  de Género
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-22957"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-22957"
                            >
                              <a href="https://www.medellin.gov.co/es/gerencia-etnica/">
                                <span
                                  id="HGerEtnica"
                                  /*                                   alt="Gerencia Étnica"
                                   */ title="Gerencia Étnica"
                                >
                                  Gerencia Étnica
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-13107"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13107"
                            >
                              <a href="https://www.medellin.gov.co/es/gerencia-de-proyectos-estrategicos/">
                                <span
                                  id="HGerProyEstra"
                                  /*                                   alt="Gerencia de Proyectos Estratégicos"
                                   */ title="Gerencia de Proyectos Estratégicos"
                                >
                                  Gerencia de Proyectos Estratégicos
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-19380"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19380"
                            >
                              <a href="https://www.medellin.gov.co/es/unidad-administrativa-especial-buen-comienzo/">
                                <span
                                  id="HUnidadAdmEspBuenCom"
                                  /*                                   alt="Unidad Administrativa Especial de Buen Comienzo"
                                   */ title="Unidad Administrativa Especial de Buen Comienzo"
                                >
                                  Unidad Administrativa Especial de Buen
                                  Comienzo
                                </span>
                              </a>
                            </li>
                            <li
                              id="menu-item-23359"
                              className="titulo_ente_ menu-item menu-item-type-custom menu-item-object-custom menu-item-23359"
                            >
                              <a>
                                <b>Despachos</b>
                              </a>
                            </li>
                            <li
                              id="menu-item-50199"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-50199"
                            >
                              <a href="https://www.medellin.gov.co/es/nuestro-alcalde/">
                                Despacho del Alcalde
                              </a>
                            </li>
                            <li
                              id="menu-item-49972"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49972"
                            >
                              <a href="https://www.medellin.gov.co/es/despacho-de-la-gestora-social/">
                                Despacho de la Gestora Social
                              </a>
                            </li>
                            <li
                              id="menu-item-191780"
                              className="titulo_ente_ menu-item menu-item-type-custom menu-item-object-custom menu-item-191780"
                            >
                              <a href="https://www.medellin.gov.co/es/secretaria-privada/conglomerado-publico/">
                                <b>Conglomerado público</b>
                              </a>
                            </li>
                            <li
                              id="menu-item-191779"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-191779"
                            >
                              <a href="https://www.medellin.gov.co/infantil">
                                Portal de niños
                              </a>
                            </li>
                          </ul>
                        </div>{" "}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logo_gov">
            <img
              width="150px"
              src="https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/themes/theme_alcaldia/img/logo_gov.png"
              alt="Gov.co"
            />
          </div>
          <div className="login_nav_top">
            <li>
              <a data-toggle="collapse" href="#modu_lof_reg_" id="HIniciarS">
                Inicia sesión
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="/registrate" id="HRegistrate">
                Regístrate
              </a>
            </li>
          </div>

          <div className="down_idioma">
            <span
              className="idioma_nav"
              id="dropidiomaheader"
              data-toggle="dropdown"
              aria-expanded="true"
            >
              <Idioma />
              Idioma
              <ChevronDown />
            </span>
            <div
              className="dropdown-menu estilosidiomas"
              aria-labelledby="dropidiomaheader"
              x-placement="bottom-start"
            >
              <span className="idioma_titulo">Cambiar idioma del sitio:</span>
              <div id="flags" className="size18">
                <ul id="sortable" className="ui-sortable float:left">
                  <li id="Spanish">
                    <a
                      href="#"
                      title="Spanish"
                      className="nturl notranslate es flag Spanish"
                      data-lang="Spanish"
                    ></a>
                  </li>
                  <li id="English">
                    <a
                      href="#"
                      title="English"
                      className="nturl notranslate en flag united-states"
                      data-lang="English"
                    ></a>
                  </li>
                  <li id="Portuguese">
                    <a
                      href="#"
                      title="Portuguese"
                      className="nturl notranslate pt flag Portuguese"
                      data-lang="Portuguese"
                    ></a>
                  </li>
                  <li id="Japanese">
                    <a
                      href="#"
                      title="Japanese"
                      className="nturl notranslate ja flag Japanese"
                      data-lang="Japanese"
                    ></a>
                  </li>
                  <li id="Italian">
                    <a
                      href="#"
                      title="Italian"
                      className="nturl notranslate it flag Italian"
                      data-lang="Italian"
                    ></a>
                  </li>
                </ul>
              </div>
              <div
                id="google_language_translator"
                className="default-language-es"
              ></div>{" "}
            </div>
          </div>

          <span className="accesibilidad_nav" id="HAccesibilidad">
            <a href="https://www.medellin.gov.co/es/software-de-accesibilidad/">
              Opciones de Accesibilidad
            </a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
