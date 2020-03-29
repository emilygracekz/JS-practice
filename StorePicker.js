import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (event) => {
        //stop form from submitting
        event.preventDefault();
        //get text from input

    };
  render() {
    return (
        <form action="" className="store-selector">
          <h2>Please Enter A Store</h2>
          <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
          <button type="submit">Visit Store >></button>
        </form>
    );
  }
}

export default StorePicker;
