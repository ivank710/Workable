import React from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import FormData from "form-data";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeHandler(event) {
    // console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const data = new FormData();
    //Send file and user ID to express backend
    data.append("user", this.props.currentUser.id);
    data.append("file", this.state.selectedFile);
    // console.log(this.state.selectedFile)
    axios
      .post("/api/keywords/file-upload", data, {
        headers: { "content-type": "multipart/form-data" }
      })
      .then(res => {
        //KEYWORDS!!! 
        console.log(res);
      })
      .catch(function() {
        console.log("Failed");
      });
  }

  render() {
    return (
      <div className="Upload">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form className="uploadform" onSubmit={this.handleSubmit}>
                {/* // method="post" // encType="multipart/form-data" // action="/api/keywords/file-upload" */}
                <label className="fileupload" htmlFor="myFile">Upload Resume </label>
                <input name="myFile" id="myFile" type="file" onChange={this.onChangeHandler} />
                <input className="uploadsubmit" type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Upload);
