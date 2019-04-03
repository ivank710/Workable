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
    this.props.fetchKeywords();
  }

  render() {
    if (this.props.jobs === undefined) {
      return (
        <div className='exploreloading'>
          <div className='loadingdiv'><i className="fas fa-spinner fa-spin"></i> Loading Page</div>
        </div>
      )
      
  }
  if (this.props.keywords === undefined) return null

    let keywords = this.props.keywords.keywords.map(el => {
      return (
        <span>{el}</span>
      )
    });
    console.log(keywords.keywords)

    return (
		  <Layout> 		
        <div className="explore">
					<div className="header">
              
            <div className='searchtext'>&nbsp; &nbsp; See what's new around:</div>
					  <div>
					    <LocationForm keywords={this.props.keywords}  getJobs={this.props.getJobs} />
					  </div>

					</div>
          <div className='explorekeywords'>Keywords Used: {keywords}</div>
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
