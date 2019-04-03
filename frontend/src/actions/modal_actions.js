export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL_DESCRIPTION = "OPEN_MODAL_DESCRIPTION"

export const openModal = (modal) => {
    return {
        type: OPEN_MODAL,
        modal: modal,
    
    };
};

export const openModalDescription = (modal, description) => {
    return {
        type: OPEN_MODAL_DESCRIPTION,
        modal: modal,
        description: description,
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};
