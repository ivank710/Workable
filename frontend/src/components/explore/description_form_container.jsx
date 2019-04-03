import { connect } from "react-redux";
import {closeModal} from "../../actions/modal_actions"
import DescriptionItem from "./description_item"

const msp = state => {
return(
  {
  modal: state.ui.modal
})};

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(DescriptionItem);