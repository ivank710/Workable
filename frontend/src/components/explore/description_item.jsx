import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class DescriptionItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="modal-description-container">
        <div id="modal-description">{ReactHtmlParser(this.props.description)}</div>
      </div>
    )
  }
}

export default DescriptionItem