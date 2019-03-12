import { connect } from 'react-redux';
import Explore from './explore';
import {getJobs} from '../../actions/job_actions';

const msp = state => ({
    jobs: state.jobs
});

const mdp = dispatch => ({
    getJobs: (jobs) => dispatch(getJobs(jobs))
});

export default connect(msp, mdp)(Explore);