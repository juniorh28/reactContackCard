import { render } from "react-dom";

//we're exporting this function so we use export 
//we want the file importing this function to have the same name as this function
//in that case we use default so we can use the name of the function as our import
export default function ContactCard(){
  render() {
    return (
      <div>
        <h1 className="card-name">{props.name="Tom"}!</h1>
        <h2 className="card-phone">{props.phone="555-555-5555"}</h2>
      </div>
    );
  }
}
