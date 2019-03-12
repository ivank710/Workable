import React from "react";
import Layout from "../layout/layout";
import "../../css/_explore.css";
import Axios from "axios";
import JobIndexItem from "./job_index_item";

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
          <div className="header">See what's new around you</div>
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
