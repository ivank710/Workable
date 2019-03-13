import React from "react";
import DescriptionItem from "./description_item";

class JobIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  checkImage(){
    if (this.props.job.company_logo !== null) {
      return(
        <>
        <img src={this.props.job.company_logo} alt="" />
        </>
      )
    } else {
      return ""
    }
  }

  render() {
    return (
      <div className="content-container">
        <div className="left-content">
          <div className="content-type-left"><span className="content-label">Title:</span> {this.props.job.title}</div>
          <div className="content-type-left">
            <span className="content-label">Company:</span> {this.props.job.company}
          </div>
          <div className="content-type-left">
            <a id="apply-now" href={this.props.job.company_url}>Apply Now</a>
          </div>
          <div className="company-image">
            {this.checkImage()}
          </div>
        </div>
        <div className="right-content">
          <div className="right-content-top">
            <div className="content-type-right"><span className="content-label">Type:&nbsp;</span>  {this.props.job.type}</div>
            <div className="content-type-right"> <span className="content-label">Location:&nbsp;</span> {this.props.job.location}</div>
          </div>
          <div >
            <DescriptionItem description={this.props.job.description} />
          </div>
        </div>
      </div>
    );
  }
}

export default JobIndexItem;
