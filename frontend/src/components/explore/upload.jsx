import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import FormData from 'form-data';
import '../../css/_upload.css';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedFile: null, loaded: 0 };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  // componentDidMount() {
  //   fetch('https://jobs.github.com/positions.json?description=python&location=new+york')
  //     .then(response => response.json())
  // }

  onChangeHandler(event) {
    console.log(event.target.files[0])
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  }

  onClickHandler() {
    const data = new FormData();
    data.append('file', this.state.selectedFile)
    // Pass in endpoint url and form data
    axios.post("http://localhost:3000/file-upload", data, {
    }).then(res => {
      //Prints response after receiving from backend
      console.log(res)
      console.log(res.statusText)
    }).catch(function () {
      console.log('Failed');
    });

  }

  render() {

    return (
      <div className="Upload">
        <div className="container">
          <div className="row">
            <div className="col-md-6">

              <form className='uploadform' method="post" encType="multipart/form-data" action="/file-upload">
                <label className='fileupload' htmlFor="myFile">Upload Resume</label>
                <input type="file" id='myFile' name="myFile" />
                <input className='uploadsubmit' type="submit" value="Submit" />
              </form >

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(Upload);
