import * as APIUtil from '../util/api_util';

export const RECEIVE_JOBS = 'RECEIVE_JOBS';

const receiveJobs = jobs => ({
    type: RECEIVE_JOBS,
    jobs: jobs.data
});

export const getJobs = (location, keywords) => dispatch => {
    // console.log(location);
    // console.log(keywords);
    
    return APIUtil.getJobs(location, keywords)
    .then(jobs => dispatch(receiveJobs(jobs)))
};


export const getAllJobs = () => dispatch => (
    APIUtil.getAllJobs().then(jobs => dispatch(receiveJobs(jobs)))
);