
import React, { Component } from "react";
import Customers from './Customers'; 
import Newcustomer from './NewCustomer';
// import QR_codeForm from './QR_CodeForm'
import './App.css'

class App extends Component{      
  state = {
    customers : [
      {name: "Joe", age: "25", belt: "Black", id:1},
      {name: "Dow", age: "35", belt: "Red", id:2},
      {name: "Jhon", age: "32", belt: "Yellow", id:3}
    ]
  }

  addCustomer = (customer) => {
    customer.id = Math.random();
    let customers = [...this.state.customers, customer];
    this.setState({
      customers: customers
    })
  }

    deleteCustomer = (id) => {
      let customers = this.state.customers.filter(customer => {
        return customer.id !== id;
      });
      this.setState({
        customers : customers
      })
    }

  
  render() {
    return (
      <div className = "App">
        <h1> For adding new Customers and their profile </h1>
        <Customers customers= {this.state.customers}  deleteCustomer ={this.deleteCustomer}/>
        <Newcustomer addCustomer = {this.addCustomer}  />

      </div> 
    );
  }
}  
export default App;

// deleteCustomer={this.deleteCustomer} nameList={this.state.nameList}