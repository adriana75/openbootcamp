import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age : 35
        }
    }
    render() {
    return (
        <div>
            <h1>Hola {this.props.name}</h1>
            <h2>Edad: {this.state.age}</h2>
            <div>
                <button onClick={this.birthday}>Cumplir Años</button>
            </div>
        </div>
    )
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))
    }
}

Greeting.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};
