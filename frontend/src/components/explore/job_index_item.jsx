import React from "react";
import DescriptionItem from "./description_item";
import ReactHtmlParser from "react-html-parser";

class JobIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleSave = this.handleSave.bind(this);
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

  handleSave(e) {
    e.preventDefault();
    this.props.saveJob(this.props.job);
  }

  render() {
    return (
      <div className="content-container">

        <div className="left-content">
          <div className="content-type-left">
            {/* <span className="content-label">Title:</span> */}
            {" "}
            <span className="content-title">{this.props.job.title}</span><br></br>
          </div>
          <div className="content-type-left">
            {/* <span className="content-label">Company:</span>{" "} */}
            <span className="content-title">Company: {this.props.job.company}</span>
          </div>
          <div />
          <div className="content-type-left">
            <a id="apply-now" href={this.props.job.company_url}>
              Apply Now
            </a>
          <div className="content-type-left">
            <button className="save-button" onClick={this.handleSave}>Save To My List</button>
          </div>
          {/* <div className="company-image">{this.checkImage()}</div> */}
        </div>
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
