import * as React from "react";
import "./modal.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

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

export default ChildModal;
