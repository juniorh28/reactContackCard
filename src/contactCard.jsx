import React, { Component } from "react";

//we're exporting this function so we use export
//we want the file importing this function to have the same name as this function
//in that case we use default so we can use the name of the function as our import
class ContactCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="personComponent">
        <p>Name: {this.props.name}</p>
        <p>Email: {this.props.email}</p>
        <p>Phone: {this.props.phone}</p>
      </div>
    );
  }
}
export default ContactCard;
/*
ContactCard.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
};
*/

/*inside render()
        <h1 className="card-name">{props.name}!</h1>
        <h2 className="card-phone">{props.phone}</h2>
        <h2 className="card-email">{props.email}</h2>
*/
/*
ContactCard.propTypes = {
  name: "Tom",
  phone: "555-555-5555",
  email: "Tom@email.com",
};
*/
