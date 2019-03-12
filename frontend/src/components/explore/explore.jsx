import React from 'react';
import Layout from '../layout/layout';
import LocationForm from '../location_form/location_form';
import '../../css/_explore.css';

class Explore extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.getJobs('');
    }

    render() {
        return(
            <Layout >
                <div className='explore'>
                    <div className='header'> 
                        <div>See what's new around you</div>
                        <div>
                            <LocationForm getJobs={this.props.getJobs}/>
                        </div> 
                    </div>
                    <div className='explorecontent'>
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
};

export default Explore;