import { connect } from 'react-redux';
import Explore from './explore';
import {openModalDescription} from '../../actions/modal_actions'
import {getJobs, getAllJobs} from '../../actions/job_actions';
import {saveJob} from '../../actions/user_job_actions';
import {fetchKeywords} from '../../actions/keyword_actions';

const msp = state => ({
    jobs: Object.values(state.jobs),
    keywords: Object.values(state.keywords).slice(-1)[0]
});

const mdp = dispatch => ({
    openModalDescription: (modal, description) => dispatch(openModalDescription(modal, description)),
    getJobs: (location, keywords) => dispatch(getJobs(location,keywords)),
    getAllJobs: () => dispatch(getAllJobs()),
    saveJob: (job) => dispatch(saveJob(job)),
    fetchKeywords: () => dispatch(fetchKeywords())
});

export default connect(msp, mdp)(Explore);