import React from "react";
import { hot } from "react-hot-loader";
import { Greeting, GreetingWithPureComponent } from "./examples/components";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Greeting name={"Luke"} />
      <Greeting name={"Hanwook"} />
    </div>
  );
}

export default hot(module)(App);
