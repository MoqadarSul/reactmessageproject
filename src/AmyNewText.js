import React, { Component } from 'react'

export default class AmyNewText extends Component {
    state = {
        value : '',
    }
    
    handleChange = event => {
        this.setState({value : event.target.value})
    }

      handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render() {
        return (
            <div>
            <form className="input-group" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" placeholder="Enter your message..."  value={this.state.value} onChange={this.handleChange} />
                <div className="input-group-append">
                <input className="btn submit-button" type="submit" value="Send" />
                </div>
              </form>
            </div>
        )
    }
}
