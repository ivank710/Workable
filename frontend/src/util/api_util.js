import axios from 'axios';

export const getJobs = () => {
    return axios.get('/api/jobs/findjob');
}
  


