/**
 * React.Component
 * ES6 class를 사용하여 React 컴포넌트를 정의할 때에 기초가 되는 class
 */

import React from "react";

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Greeting;
