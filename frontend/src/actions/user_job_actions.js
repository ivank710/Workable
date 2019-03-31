import * as UserJobAPIUtil from '../util/user_jobs_util';

export const RECEIVE_SAVED_JOBS = 'RECEIVE_SAVED_JOBS';
export const REMOVE_SAVED_JOB = 'REMOVE_SAVED_JOB';
export const RECEIVE_SAVED_JOB = 'RECEIVE_SAVED_JOB';

const receiveSavedJobs = (jobs) => ({
    type: RECEIVE_SAVED_JOBS,
    jobs
});

const removeSavedJob = id => ({
    type: REMOVE_SAVED_JOB,
    id
});

const receiveSavedJob = job => ({
    type: RECEIVE_SAVED_JOB,
    job
});

export const fetchUserJobs = () => dispatch => (
    UserJobAPIUtil.fetchUserJobs().then( jobs => dispatch(receiveSavedJobs(jobs)))
);

export const saveJob = job => dispatch => (
    UserJobAPIUtil.saveJob(job).then(job => dispatch(receiveSavedJob(job)))
);

export const deleteJob = id => dispatch => (
    UserJobAPIUtil.deleteUserJob(id).then(id => dispatch(removeSavedJob(id)))
);

