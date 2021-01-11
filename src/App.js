//ContactCard is the name of the function in contactCard.jsx
//we're importing that function
import ContactCard from "./ContactCard";
import "./App.css";
//import React and use destructuring to get Component
import React, { Component } from "react";

//a react class must extend component, you must import React and use destructuring
class App extends Component {
  //We make a state that will have an object called user which it can interate through
  state = {
    users: [
      {
        name: "Tomm",
        phone: "555-555-5555",
        email: "Tom@email.com",
      },
      {
        name: "Jimm",
        phone: "999-999-9999",
        email: "Tim@email.com",
      },
    ],
  };

  //this.state.users.map is taking the user object and maping over it, going through each element
  //we assign the properties inside their elements to the props we create, i.e name, phone, email
  //these names will then be taken to ContactCard and print out its messages and the props it was given.
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Hello! </h1>

          {this.state.users.map((item) => (
            <ContactCard
              name={item.name}
              phone={item.phone}
              email={item.email}
            />
          ))}
        </header>{" "}
      </div>
    );
  }
}

export default App;
