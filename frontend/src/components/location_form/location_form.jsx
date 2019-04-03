import React from 'react';


class LocationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {location: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.getJobs(this.parseInput(this.state.location), 'empty');
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