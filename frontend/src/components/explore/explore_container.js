import { connect } from 'react-redux';
import Explore from './explore';
import {getJobs, getAllJobs} from '../../actions/job_actions';
import {saveJob} from '../../actions/user_job_actions';

const msp = state => ({
    jobs: Object.values(state.jobs)
});

const mdp = dispatch => ({
    getJobs: (location) => dispatch(getJobs(location)),
    getAllJobs: () => dispatch(getAllJobs()),
    saveJob: (job) => dispatch(saveJob(job))
});

export default connect(msp, mdp)(Explore);