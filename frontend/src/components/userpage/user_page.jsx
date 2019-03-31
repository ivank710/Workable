import React from 'react';
import Layout from '../layout/layout';
import '../../css/_user_page.css';
import UploadContainer from "../../components/explore/upload_container";
import UserJobItem from '../userpage/userJob_item';

class UserPage extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.fetchUserJobs();
    }

    render() {
        return(
          
          <Layout>
           <div className="sidebar">
             <div className="avatar"></div>
           </div>
          <UploadContainer />
           
          <div className="list-container">
            <div className="job-item">
              {this.props.userJobs.map(jobItem => (
                <UserJobItem job={jobItem} />
              ))}
            </div>
            
          </div>
         </Layout>
        )
    }
}

export default UserPage;