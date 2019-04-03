import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class DescriptionItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="modal-description-container">
        <p id="modal-description">{ReactHtmlParser(this.props.description)}</p>
      </div>
    )
  }
}

export default DescriptionItem