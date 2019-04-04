import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {fetchKeywords} from '../../actions/keyword_actions';


import Upload from './upload';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  fetchKeywords: () => dispatch(fetchKeywords())
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);