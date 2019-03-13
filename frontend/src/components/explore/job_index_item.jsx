import React from "react";
import DescriptionItem from "./description_item";
let HtmlEscape = require("html-escape");
class JobIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  parseDesc(description) {
    let value = HtmlEscape(description);
    return value;
  }

  checkImage(){
    if (this.props.job.company_logo !== null) {
      return(
        <img src={this.props.job.company_logo} alt="" />
      )
    } else {
      return ""
    }
  }

  render() {
    return (
      <div className="content-container">
        <div className="left-content">
          <div className="content-type-left">Title: {this.props.job.title}</div>
          <div className="content-type-left">
            Company: {this.props.job.company}
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
            <div className="content-type-right">
              Type: {this.props.job.type}
            </div>
            <div className="content-type-right">
              Location: {this.props.job.location}
            </div>
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
