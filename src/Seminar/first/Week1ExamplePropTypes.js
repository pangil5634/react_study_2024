import React from "react";
import PropTypes from 'prop-types';

function Week1ExamplePropTypes() {
    return (
        <div>
            <h1>Week1ExamplePropTypes</h1>
            <Greeting name="김광일" age={24} />
        </div>
    )
}

function Greeting(props) {
    if (!props.name || !props.age) {
        alert("Please provide a name and age");
    }

    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <p>You are {props.age} years old.</p>
        </div>
    )
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}

export default Week1ExamplePropTypes;
