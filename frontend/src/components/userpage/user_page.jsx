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
           <div className='usermain'>
              <div className="sidebar">
                <div className="avatar"></div>
                  <UploadContainer />
                  <div className='yourkeywords'>Your Keywords:</div>
                  <div className='keywords'>
                    <div>keywords</div>
                    <div>keywords</div>
                    <div>keywords</div>
                    <div>keywords</div>
                    <div>keywords</div>
                  </div>
              </div>

              <div className='mainbar'>
                <div className='mainbartitle'>
                    My Saved Jobs 
                </div>
                <div className='jobitems'>
                      items
                </div>
              </div>
           </div>
{/*            
          <div className="list-container">
            <div className="my-list">My Saved Jobs</div>
            <div className="list-box">
            <div className="job">vdfv fdz dfs</div>
          
            </div>
          </div> */}
         </Layout>
        )
    }
}

export default UserPage;