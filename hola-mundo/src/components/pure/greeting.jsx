import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 29,
    };
  }

  render() {
    // No podria devolver 2 div, solo un elemento dentro
    return (
      <div>
        <h1>HOLA {this.props.name} </h1>
        <h2>Edad es de: {this.state.age} </h2>
        <div>
          <button onClick={this.birthday}>Sumar años</button> <br/>
          <button onClick={this.birthday2}>Restar años</button>
        </div>
      </div>
    );
  }

  birthday = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };

  birthday2 = () => {
    this.setState((prevState) => ({
      age: prevState.age - 1,
    }));
  };
}

// Proptypes es el ontenido que le peudo pasar
Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
