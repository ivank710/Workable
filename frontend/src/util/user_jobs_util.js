import axios from 'axios';

export const fetchUserJobs = () => (
    axios.get('/api/userJobs')
);

export const saveJob = (job) => (
    axios.post('/api/userJoba', job)
);

export const deleteUserJob = id (
    axios.delete(`/api/userJobs/${id}`)
);