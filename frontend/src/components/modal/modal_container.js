import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import Modal from "./modal";

const mapStateToProps = state => {
  if (!state.ui.modal) {
    return {
      modal: state.ui.modal
    };
  } else {
    return ({
      modal: state.ui.modal,
      description: state.ui.modal.description
    });
  }
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
