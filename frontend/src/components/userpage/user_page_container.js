import { connect } from 'react-redux';
import UserPage from "./user_page";
import {fetchUserJobs, deleteJob} from '../../actions/user_job_actions';

const msp = state => ({
    userJobs: Object.values(state.userJobs)
});

const mdp = dispatch => ({
    fetchUserJobs: () => dispatch(fetchUserJobs()),
    deleteJob: (id) => dispatch(deleteJob(id))
});

export default connect(msp, mdp)(UserPage);