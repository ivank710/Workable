import React from 'react';
import '../../css/_user_page.css';

class UserJobItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  checkImage() {
    if (this.props.job.company_logo !== null) {
      return (
        <>
          <img className="logo" src={this.props.job.company_logo} height="50" width="50" />
        </>
      )
    } else {
      return ""
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteJob(this.props.job._id);
  }
  
  render() {
    return (
      <div className="job-container">
        {/* <div className="company-logo">{this.checkImage()}</div> */}

        <div className='jobmaininfo'>
          <div className="company">
            <span className="company-name">Company: </span>
           <span className="job-company"> {this.props.job.company} </span>
          </div>

          <div className="job-title">
            <span className="role">Role: </span>
            {this.props.job.type}
          </div>

          <div className="job-location">
            <span className="location">Location: </span>
            {this.props.job.location}
          </div>

        </div>

        <div className="job-url">
          <a className="apply-button" href={this.props.job.company_url}>Apply Now</a>
      
        </div>

        <div className="delete-job">
          <button className="delete-button" onClick={this.handleDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default UserJobItem;