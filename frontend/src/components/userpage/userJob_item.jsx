import React from 'react';

class UserJobItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  checkImage() {
    if (this.props.job.company_logo !== null) {
      return (
        <>
          <img src={this.props.job.company_logo} alt="" />
        </>
      )
    } else {
      return ""
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteJob(this.props.job.id);
  }
  
  render() {
    return (
      <div className="job-container">
        <div className="company">
          Company: {this.props.job.company}
        </div>

        <div className="company-logo">
          {this.checkImage()}
        </div>

        <div className="job-title">
          {this.props.job.type}
        </div>

        <div className="job-location">
          {this.props.job.location}
        </div>

        <div className="delete-job">
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    )
  }
}

export default UserJobItem;