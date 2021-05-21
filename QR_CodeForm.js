//  Adding new client into the company database from a input form: classbased Comp

// ClassComponent for adding new client to the company database.



import React, { Component } from "react";
import './QR_codeForm.css'

class QR_codeForm extends Component {
  state = {
    FirstName: null, id: 1,
    LastName: null, id: 2,
    name: null, id: 3
  }

  changehandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submithandler = (e) => {
    e.preventDefault();
    console.log("form submitted", this.state);
  }


  render() {
    return (
      <div className="App">

        <form onSubmit={this.submithandler} >

          <label htmlFor="name"> First Name: </label>
          <input type="text" id=" name" onChange={this.changehandler} />

          <label htmlFor="name"> Last Name: </label>
          <input type="text" id="Last Name" onChange={this.changehandler} />

          <label htmlFor="name"> Mobile: </label>
          <input type="text" id="Mobile" onChange={this.changehandler} />

          {/* <label htmlFor="name"> Phone: </label>
          <input type="text" id="Phone" onChange={this.changehandler} />

          <label htmlFor="name"> your@email.com: </label>
          <input type="text" id="your@email.com" onChange={this.changehandler} />

          <label htmlFor="name"> Company: </label>
          <input type="text" id="Company" onChange={this.changehandler} />

          <label htmlFor="name"> Your job: </label>
          <input type="text" id="Your job" onChange={this.changehandler} />

          <label htmlFor="name">Street : </label>
          <input type="text" id="Street" onChange={this.changehandler} />

          <label htmlFor="name">City : </label>
          <input type="text" id="City" onChange={this.changehandler} />

          <label htmlFor="name">Zip : </label>
          <input type="text" id="Zip" onChange={this.changehandler} />

          <label htmlFor="name"> State: </label>
          <input type="text" id="State" onChange={this.changehandler} />

          <label htmlFor="name"> Country: </label>
          <input type="text" id="Country" onChange={this.changehandler} />
 */}
          <button>Submit</button>

        </form>

      </div>
    );
  }
}

export default QR_codeForm;


