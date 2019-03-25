import {RECEIVE_SAVED_JOB,RECEIVE_SAVED_JOBS,REMOVE_SAVED_JOB} from '../actions/user_job_actions';

const UserJobsReducer = ( state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
            
        case RECEIVE_SAVED_JOBS:
            let saveJobs = {};
            action.jobs.forEach(job => saveJobs[job.jobid] = job);
            return Object.assign({}, saveJobs);
        case REMOVE_SAVED_JOB:
            delete newState[action.id];
            return newState;
        default:
            return state;
    }    
};

export default UserJobsReducer;