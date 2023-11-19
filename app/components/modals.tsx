import * as React from "react";
import "./modal.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { CicleInfo, User, ChevronLeft, HomeOut } from "../components/iconos";


interface ChildModalAcceptProps {
  onClose: () => void;
}

const ChildModalAccept: React.FC<ChildModalAcceptProps> = ({ onClose }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    onClose(); // Llama a la función de manejo proporcionada al componente hijo
  };

  return (
    <React.Fragment>
      <button onClick={handleOpen} className="buttonConfirmar">
        Si
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div className="boxContainer">
          <p id="child-modal-description" className="text">
            Información enviada al CRUE
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={handleClose} className="buttonConfirmar">
              Aceptar
            </button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

interface ChildModalProps {}

const ChildModal: React.FC<ChildModalProps> = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button
        className="btn-sesenta1 btn-sesenta mt-4 rutavital text-white py-3 rounded-full shadow-lg"
        onClick={handleOpen}
      >
        Ruta vital
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div className="boxContainer">
          <p id="child-modal-description" className="text">
            ¿Deseas activar la ruta vital?
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <ChildModalAccept onClose={handleClose} />
            <button onClick={handleClose} className="buttonConfirmar">
              No
            </button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

interface InstruccionesUsoProps {}

const InstruccionesUso: React.FC<
InstruccionesUsoProps
> = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={handleOpen}>
        <CicleInfo />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div className="boxContainer1">
          <p className="bloqueInstruccion">
            <strong>
              INSTRUCCIONES PARA DILIGENCIAR EL ANEXO TÉCNICO No. 3
            </strong>
            <br></br>
            <br></br>
            1. Fecha del evento: Escriba la fecha en la cual sucedió el evento
            donde se utilizó el DEA.
            <br></br>
            2. Nombre del lugar del evento: Escriba el nombre del lugar con alta
            afluencia de público donde sucedió el evento.<br></br>
            <br></br>
            <strong>Datos de la persona atendida en el evento</strong>
            <br></br>
            <br></br>
            3. Nombre completo: Escriba el nombre completo de la persona
            atendida con el uso del DEA;<br></br>
            4. Tipo de documento de identificación: Escriba el tipo de documento
            de identificación de la persona atendida con el uso del DEA;
            <br></br>
            5. Número de documento de identificación: Escriba el número de
            documento de identificación de la persona atendida con el uso del
            DEA;
            <br></br>
            6. Edad: Escriba la edad en años de la persona atendida con el uso
            del DEA;
            <br></br>
            7. Sexo: Marque con una X el sexo de la persona atendida con el uso
            del DEA;<br></br>
            8. Asegurador en Salud: Escriba el nombre de la aseguradora en salud
            a la cual se encuentra afiliada la persona atendida con el uso del
            DEA (entidades promotoras de salud, las entidades que administren
            planes voluntarios de salud, las entidades adaptadas de salud, las
            administradoras de riesgos profesionales en sus actividades de
            salud).<br></br> <br></br>
            <strong>
              Datos del evento en donde se utilizó el Desfibrilador Externo
              Automático - DEA
            </strong>{" "}
            <br></br>
            <br></br>9. Nombre de la persona que utilizó el DEA: Escriba el
            nombre completo de la persona que utilizó el DEA para realizar la
            descarga; <br></br>
            10. Tipo de documento de identificación: Escriba el número del
            documento de identificación de la persona que utilizó el DEA para
            realizar la descarga;<br></br>
            11. Número de documento de identificación: Escriba el número de
            documento de identificación de la persona que utilizó el DEA para
            realizar la descarga;<br></br>
            12. Hora de inicio del evento: Escriba en números la hora en la cual
            se inició el eento en el cual se utilizó el DEA;<br></br>
            13. Hora de activación de la cadena de supervivencia: Escriba en
            números la hora en la cual se activó la cadena de supervivencia del
            evento en el cual se utilizó el DEA;<br></br>
            14. Hora de utilización del DEA: Escriba en números la hora en la
            cual se utilizó el DEA; y <br></br>
            15. Hora de traslado de la persona atendida a la institución de
            salud: Escriba en números la hora a la cual se realizó el traslado
            de la persona atendida a la institución de salud. En caso de
            fallecimiento de la persona en el lugar del evento, escriba N/A.
            <br></br>
            <br></br>
            <strong>
              Datos del medio de transporte en el cual es trasladada la persona
              atendida a la institución de salud
            </strong>
            <br></br>
            <br></br>
            En caso de fallecimiento de la persona en el lugar del evento, no
            debe diligenciar las variables 17, 18 y 19.
            <br></br>
            <br></br>
            16. Nombre de la persona ecargada del traslado: Escriba el nombre
            completo de la persona responsable de realizar el traslado a la
            institución de salud establecida en la ruta;
            <br></br>
            17. Medio de transporte utilizado para el traslado: Marque con una
            (X) el medio de transporte en el que se realizó el traslado a la
            institución de salud establecida en la ruta. Si la opción
            seleccionada es “Otro”, debe escribir cuál fue el medio de
            transporte utilizado;<br></br>
            18. Nombre de la empresa de la ambulancia: escriba el nombre de la
            empresa a la cual pertenece la ambulancia que realizó el traslado;
            y.<br></br>
            19. Observaciones: Escriba las observaciones que estime pertinentes,
            diferentes a los datos reportados en las variables anteriores.
          </p>

          <div style={{ display: "flex", justifyContent: "space-around", marginBottom:" 1rem"}}>
            <button onClick={handleClose} className="buttonConfirmar">
              Cerrar
            </button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

interface InstruccionesInstalacionProps {}

const InstruccionesInstalacion: React.FC<
  InstruccionesInstalacionProps
> = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={handleOpen}>
        <CicleInfo />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div className="boxContainer2">
          <p className="bloqueInstruccion">
          <strong>INSTRUCCIONES PARA DILIGENCIAR EL ANEXO TÉCNICO No. 2</strong><br></br><br></br>
            <strong>Responsable del lugar con alta afluencia del público</strong><br></br>
            1. Nombre completo: Escriba el nombre completo del responsable del
            lugar con alta afluencia del público que registra el/los DEA.
            <br></br>
            2. Documento de identificación: Escriba el número del documento de
            identificación del responsable del lugar con alta afluencia del
            público que registra el/los DEA.<br></br>
            Datos del lugar con alta afluencia del público.<br></br>
            3. Nombre: Escriba el nombre del lugar con alta afluencia de público
            que registra la instalación de el/los DEA.<br></br>
            4. Dirección: Escriba la dirección completa del lugar con alta afluencia de
            público que registra la instalación de(l)/los DEA.<br></br>
            5. Código postal: Escriba el código postal del IlJgar con alta
            afluencia de público que registra la instalación de(l)/los DEA.
            <br></br>
            6. Ciudad o municipio: Escriba el municipio donde está ubicado el
            lugar con alta afluencia de público que registra la instalación
            de(l)/los DEA.<br></br>
            7. Departamento: Escriba el departamento donde está ubicado el lugar
            con alta afluencia de público que registra la instalación de(l)/los
            DEA.<br></br> <br></br>
            <strong>Declaración</strong> <br></br><br></br>8. Señale con una (X) la opción que corresponda:
            <br></br>
            a. Instalación: se trata de la instalación permanente o es temporal
            de(l)/los DEA.<br></br>
            b. Cambio de titular: esta declaración, se trata de un cambio del
            titular de(l)/los DEA.<br></br>
            c. Retirada: esta declaración, se trata de la retirada de(l)/los
            DEA.<br></br>
            d. Modificación de la ubicación: esta declaración, se trata de la
            modificación de la ubicación de(l)/los DEA.<br></br>
            e. Otros; señale si esta declaración se trata de otro tipo.<br></br><br></br>
            <strong>Tipo de instalación</strong><br></br><br></br>
            Señale con una (X) la opción que corresponda:<br></br>
            a. Obligatoria: si la instalación de(l)/los DEA es obligatoria.
            <br></br>
            b. Voluntaria: si la instalación de(l)/los DEA corresponde a
            espacios no obligados a la dotación de estos.<br></br>
            Tipo de espacio o lugar de alta afluencia de público<br></br>
            Tipo de espacio: De conformidad con el presente acto administrativo
            indique el tipo de espacio o lugar con alta afluencia de personas.
            <br></br><br></br>
            <strong>Desfibriladores Externos Automáticos (Estos datos se deben
            diligenciar por cada uno de los DEA que registra)</strong><br></br><br></br>
            11. Fecha: día, mes, año de instalación y puesta en funcionamiento del
            DEA.<br></br>
            12. No. de serie: Escriba el número de serie del DEA.<br></br>
            13. Modelo: Escriba el modelo del DEA.<br></br>
            14. Marca: Escriba la marca del DEA.<br></br>
            15. Distribuidor autorizado o fabricante: Escriba el distribuidor o
            fabricante del DEA.<br></br>
            16. Descripción del lugar donde está ubicado: Escriba el nombre del
            sitio donde está ubicado el DEA.<br></br>
            17. Coordenadas de geolocalización: Escriba las coordenadas de
            geolocalización (GPS) del espacio o sitio donde están ubicados los
            DEA.<br></br><br></br>
            <strong>Personal certificado en el uso del DEA.</strong> Se debe diligenciar por cada
            una de las personas capacitadas y certificadas en DEA.<br></br>
            18. Documento de identidad: Escriba el número del documento de identidad
            de la persona que cuenta con el entrenamiento y está certificado
            para la utilización del DEA.<br></br>
            19. Nombres y apellidos: Escriba los nombres y apellidos completos de la
            persona que cuenta con el entrenamiento y está certificado para la
            utilización de(l)/los DEA.<br></br>
            20. Entidad que certifica la capacitación en DEA. Escriba el nombre de
            la entidad que certifica la capacitación en DEA. <br></br>
            21. Fecha de certificación: Escriba la fecha de certificación de la última
            capacitación en DEA.<br></br>
            22. Señale con una (X) en todos y cada uno de los siguientes ítems, la
            declaratoria de(l)/los DEA.<br></br><br></br>
            
            <strong>Respecto al personal:</strong><br></br><br></br>
            23. Señale con una (X) en todos y cada uno de los siguientes ítems, la
            declaratoria respecto al personal entrenado y certificado en DEA.
            <br></br><br></br>
            a. El personal encargado del manejo del DEA dispone de entrenamiento
            y actualización de los conocimientos exigidos; y, b. Durante el
            horario de actividad se cuenta con un número plural de personas
            entrenadas para su uso.<br></br><br></br>
            <strong>Firmas:</strong><br></br> <br></br>
            24. Municipio: Escriba el nombre del municipio donde está ubicado el
            lugar con alta afluencia de público que hace la declaración
            de(l)/los DEA;<br></br>
            25. Fecha: día, mes, año en que se llevó a cabo la declaratoria
            de(l)/los DEA; y<br></br>
            26. Firma del responsable del lugar con alta afluencia de público que
            hace la declaratoria de(l)/los DEA.
          </p>

          <div style={{ display: "flex", justifyContent: "space-around", marginBottom:" 1rem"  }}>
            <button onClick={handleClose} className="buttonConfirmar">
              Cerrar
            </button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export {ChildModal, InstruccionesInstalacion, InstruccionesUso};
