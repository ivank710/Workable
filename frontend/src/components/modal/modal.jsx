import React from "react";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import DescriptionFormContainer from "../explore/description_form_container";
import "../../css/_modal.css";

const Modal = ({ description, modal, closeModal }) => {
  let component;
  if (!modal) {
    return null;
  } else if (modal.modal === 'description') {
     
    component = <DescriptionFormContainer description={description} />;
  } else {
     
    switch (modal) {
      case "login":
        component = <LoginFormContainer />;
        break;
      case "signup":
        component = <SignupFormContainer />;
        break;
      default:
        return null;
    }
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

export default Modal;
