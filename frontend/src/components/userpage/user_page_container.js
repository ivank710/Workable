import { connect } from 'react-redux';
import UserPage from "./user_page";
import {fetchUserJobs, deleteJob} from '../../actions/user_job_actions';
import {fetchKeywords} from '../../actions/keyword_actions';

const msp = state => ({
    userJobs: Object.values(state.userJobs),
    keywords: Object.values(state.keywords).slice(-1)[0]
});

const mdp = dispatch => ({
    fetchUserJobs: () => dispatch(fetchUserJobs()),
    deleteJob: (id) => dispatch(deleteJob(id)),
    fetchKeywords: () => dispatch(fetchKeywords())
});

export default connect(msp, mdp)(UserPage);