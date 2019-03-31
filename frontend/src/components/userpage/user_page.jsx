import React from 'react';
import Layout from '../layout/layout';
import '../../css/_user_page.css';
import UploadContainer from "../../components/explore/upload_container";

class UserPage extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.fetchUserJobs();
    }

    render() {
        let userJobs = this.props.userJobs;


        return(
         <Layout>
           <div className="sidebar">
             <div className="avatar"></div>
              <UploadContainer />
           </div>
           
          <div className="list-container">
            <div className="my-list">My Saved Jobs</div>
            <div className="list-box">
            <div className="job">vdfv fdz dfs</div>
            <div className="job"></div>
            <div className="job"></div>
            <div className="job"></div>
            </div>
          </div>
         </Layout>
        )
    }
}

export default UserPage;