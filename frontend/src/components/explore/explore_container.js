import { connect } from 'react-redux';
import Explore from './explore';
import {getJobs} from '../../actions/job_actions';
import {openModalDescription} from '../../actions/modal_actions'

const msp = state => ({
    jobs: Object.values(state.jobs)
});

const mdp = dispatch => ({
    getJobs: (location) => dispatch(getJobs(location)),
    openModalDescription: (modal, description) => dispatch(openModalDescription(modal, description))
});

export default connect(msp, mdp)(Explore);