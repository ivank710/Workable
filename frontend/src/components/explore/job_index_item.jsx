import React from "react";
import DescriptionItem from "./description_item";
import ReactHtmlParser from "react-html-parser";

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
          <div className="content-type-left">
            <span className="content-label">Title:</span>{" "}
            <span className="content-type">{this.props.job.title}</span>
          </div>
          <div className="content-type-left">
            <span className="content-label">Company:</span>{" "}
            <span className="content-type">{this.props.job.company}</span>
          </div>
          <div />
          <div className="content-type-left">
            <a id="apply-now" href={this.props.job.company_url}>
              Apply Now
            </a>
          </div>
          <div className="company-image">{this.checkImage()}</div>
        </div>
        <div className="right-content">
          <div className="right-content-top">
            <div className="content-type-right">
              <span className="content-label">Type:&nbsp;</span>{" "}
              <span className="content-type">{this.props.job.type}</span>
            </div>
            <div className="content-type-right">
              {" "}
              <span className="content-label">Location:&nbsp;</span>{" "}
              <span className="content-type">
                {this.props.job.location}
              </span>
            </div>
          </div>
          <div className="description-container">
            <button
              onClick={() =>
                this.props.openModalDescription(
                  "description",
                  this.props.job.description
                )
              }
            >
              <span className="click-for-more">
                Click For Full Description
              </span>

              <p>{ReactHtmlParser(this.props.job.description)}</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default JobIndexItem;
