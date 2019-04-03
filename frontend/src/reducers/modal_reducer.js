import { OPEN_MODAL, CLOSE_MODAL, OPEN_MODAL_DESCRIPTION } from '../actions/modal_actions';
import {RECEIVE_CURRENT_USER, RECEIVE_USER_SIGN_IN} from '../actions/session_actions'

export default function modalReducer(state = null, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case OPEN_MODAL_DESCRIPTION:
            return {modal: action.modal, description: action.description}
        case CLOSE_MODAL:
            return null;
        case RECEIVE_USER_SIGN_IN:
            return null;
        case RECEIVE_CURRENT_USER:
            return null;
        default:
            return state;
    }
}

