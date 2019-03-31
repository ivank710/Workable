import React from "react";
import Layout from "../layout/layout";
import "../../css/_explore.css";
import JobIndexItem from "./job_index_item";
import LocationForm from '../location_form/location_form';


class Explore extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllJobs();
  }

  render() {
    if (this.props.jobs[0] === undefined) {
      return (
        <div className='exploreloading'>
          <div className='loadingdiv'><i className="fas fa-spinner fa-spin"></i> Loading Page</div>
        </div>
      )
      
	}
    return (
		  <Layout> 		
        <div className="explore">
					<div className="header">
              
            <div className='searchtext'>&nbsp; &nbsp; See what's new around:</div>
					  <div>
					    <LocationForm getJobs={this.props.getJobs} />
					  </div>
					</div>
          <div className="explorecontent">
            {this.props.jobs.map(job => (
              <JobIndexItem job={job} key={job.id} saveJob={this.props.saveJob}/>
            ))}
          </div>
				</div>
      </Layout>
    );
  };
};

export default Explore;
