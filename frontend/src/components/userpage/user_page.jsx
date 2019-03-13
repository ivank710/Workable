import React from 'react';
import Layout from '../layout/layout';
import '../../css/_user_page.css';

class UserPage extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      //get user's jobs
    }

    render() {
        return(
         <Layout>
           <div className="sidebar">
             <div className="avatar"></div>
           </div>
           
          <div className="list-container">
            <div className="my-list">My List</div>
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