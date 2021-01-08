//ContactCard is the name of the function in contactCard.jsx
//we're importing that function
import ContactCard from "./contactCard";
import "./App.css";
//import React and use destructuring to get Component
import React, { Component } from "react";

//a react class must extend component, you must import React and use destructuring
class App extends Component {
  //the class must have a constructor and a super, which may or may not have props
  constructor() {
    super();
    this.state = { userOne: { name: "Tom", phone: "555-555-5555" } };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Hello You! </h1>
          <ContactCard user={this.state.userOne} />
        </header>{" "}
      </div>
    );
  }
}

export default App;
