import React from 'react';
import Layout from '../layout/layout';
import '../../css/_explore.css';
import Axios from 'axios';
// import UploadContainer from '../../components/explore/upload_container';

class Explore extends React.Component {
    constructor(props){
			super(props)
			
    }

    componentDidMount() {
			this.props.getJobs()
    }

    render() {
			if (this.props.jobs.constructor !== Array){
				return null;
			}
        return(
            <Layout >
                <div className='explore'>
                    <div className='header'>See what's new around you</div>
                    <div className='explorecontent'>
                        {/* <UploadContainer /> */}

                            <div className='content'></div>
                            <div className='content'></div>
                            <div className='content'></div>
                            <div className='content'></div>
                            <div className='content'></div>
                            {/* these will become list items */}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Explore;