import React from "react";
import Layout from "../layout/layout";
import "../../css/_explore.css";
import Axios from "axios";
import JobIndexItem from "./job_index_item";
import LocationForm from '../location_form/location_form';

class Explore extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getJobs();
  }

  render() {
    if (this.props.jobs[0] === undefined) {
      return null;
		}
		console.log(this.props.jobs[0])
    return (
			<Layout> 
				
				
        <div className="explore">
					<div className="header">
					<div className='searchtext'>See what's new around:</div>
					<div>
						<LocationForm getJobs={this.props.getJobs} />
					</div>
					</div>
          <div className="explore-content">
          {this.props.jobs.map(job => (
              <JobIndexItem job={job} key={job.id} />
          ))}
        </div>
				</div>
      </Layout>
    );
  }
}

export default Explore;
