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
    if (this.props.jobs[0] === undefined) {
      return (
        <div className='exploreloading'>
          <div className='loadingdiv'><i className="fas fa-spinner fa-spin"></i>Loading </div>
        </div>
      )
      
  }
  let keywords;
  if (this.props.keywords === undefined) {
    keywords = '';
  } else {
    let arr = this.props.keywords.keywords.filter(el => el !== '');
    // keywords = this.props.keywords.keywords.slice(1, this.props.keywords.keywords.length).map(el => {
    keywords = arr.map((el,i) => {
      return (
        <span key={i} className='word'>&bull; {el}</span>
      )
    });
    
  }


    return (
      <Layout>
        <div className="explore">
          <div className="header">
            <div className="searchtext">
              &nbsp; &nbsp; See who's hiring around:
            </div>
            <div>
              <LocationForm
                keywords={this.props.keywords}
                getJobs={this.props.getJobs}
              />
            </div>
          </div>
          <div className="explorekeywords">
            {" "}
            <div className="keyword-title">Keywords Used:</div> {keywords}
          </div>
          <div className="explorecontent">
            {this.props.jobs.map(job => (
              <>
                <JobIndexItem
                  job={job}
                  key={job.id}
                  saveJob={this.props.saveJob}
                  openModalDescription={this.props.openModalDescription}
                />
              </>
            ))}
          </div>
        </div>
      </Layout>
    );
  };
};

export default Explore;
