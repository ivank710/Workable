import { connect } from 'react-redux';
import Explore from './explore';
import {getJobs} from '../../actions/job_actions';

const msp = state => ({
    jobs: Object.values(state.jobs)
});

const mdp = dispatch => ({
    getJobs: () => dispatch(getJobs())
});

export default connect(msp, mdp)(Explore);