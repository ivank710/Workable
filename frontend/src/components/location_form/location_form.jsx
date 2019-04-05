import React from 'react';


class LocationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {location: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let keywords = this.props.keywords;
        if (keywords === undefined) {
            keywords = 'empty';
        } else {
            keywords = this.props.keywords.keywords;
            // Take first few keywords to search
            keywords = keywords.slice(-1).join('+');
            console.log(keywords);
        }
        this.props.getJobs(this.parseInput(this.state.location), keywords);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    parseInput(string) {
        let output = string.trim().toLowerCase().split(' ').join('+');
        return output;
    }

    render() {
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                   <input className='searchinput' type="text" onChange={this.update('location')} placeholder='city name ie: san francisco'/>
                   <input className='searchbutton' type='submit'  value='Search'/>
               </form>
            </div>
        )

    }
}

export default LocationForm;