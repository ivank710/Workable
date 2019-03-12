import {RECEIVE_JOBS} from '../actions/job_actions'

const JobsReducer = ( state = {} , action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_JOBS:
            return Object.assign({}, newState, action.jobs)
        default:
            return state;
    }
}

export default JobsReducer;