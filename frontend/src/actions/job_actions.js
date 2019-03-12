import * as APIUtil from '../util/api_util';

export const RECEIVE_JOBS = 'RECEIVE_JOBS';

const receiveJobs = jobs => ({
    type: RECEIVE_JOBS,
    jobs: jobs.data
});

export const getJobs = (location) => dispatch => (
    APIUtil.getJobs(location)
    .then(jobs => dispatch(receiveJobs(jobs)))
);