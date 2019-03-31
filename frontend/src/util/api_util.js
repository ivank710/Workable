import axios from 'axios';

export const getJobs = (location) => {
    
    return axios({
        url: `/api/jobs/${location}`,
        method: 'get',

    })
    // return axios.get('/api/jobs/findjob');
};
  
export const getAllJobs = () => {

    return axios({
        url: `/api/jobs`,
        method: 'get',

    })
    // return axios.get('/api/jobs/findjob');
};

