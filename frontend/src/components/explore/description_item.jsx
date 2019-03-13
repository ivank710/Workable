import React from 'react';
import ReactHtmlParser from 'react-html-parser'
class DescriptionItem extends React.Component{
  constructor(props){
    super(props)
  }



  render(){
    return(
      <div className="description-container">
        <p className="overflow">{ReactHtmlParser(this.props.description)}</p>
      </div>
    )
  }
}

export default DescriptionItem