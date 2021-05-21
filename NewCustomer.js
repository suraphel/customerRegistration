//  Adding new client into the company database from a input form: classbased Comp

// ClassComponent for adding new client to the company database.

import React, { Component } from 'react';
import './QR_codeForm.css';

class Newcustomer extends Component {
	state = {
		name: null,
		age: null,
		belt: null
	};

	changehandler = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	submithandler = (e) => {
		e.preventDefault();
		this.props.addCustomer(this.state);
		// console.log(this.state);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.submithandler}>
					<label htmlFor="name">Name: </label>
					<input type="text" id="name" onChange={this.changehandler} />
					<label htmlFor="name">Age: </label>
					<input type="text" id="age" onChange={this.changehandler} />
					<label htmlFor="name">Beltz: </label>
					<input type="text" id="belt" onChange={this.changehandler} />
					<button>Submit</button>
				</form>
			</div>
		);
	}
}
export default Newcustomer;
