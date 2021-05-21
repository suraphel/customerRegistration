//  This is a frame work for a data input
// props in a class can be refered as this.props.property~~

import React, {Component} from 'react';


class Customers extends Component{  
    render(){
        //  console.log(this.props)
        //  Destructuring: using a variable for the properties
        const { customers }  = this.props;
        const customer_list = customers.map(customer => {
            if (customer.age > 18 ){  
                return (                  
                    <div className  = "customer_profile" key={customer.id}>
                    <h3> This is from the customer_profile component page</h3>
                    <div>Name : { customer.name }  </div>
                    <div>Age : { customer.age }   </div>
                    <div>Belt : { customer.belt } </div>   
                    <button onClick ={() => {this.props.deleteCustomer(customer.id)}}> Delete me!</button>  
                    </div>                                        
                )
            } else {
                return null; 
            }
        })
        return(
            <div className = "customer-list">
                {customer_list}
            </div>    
        
        )
    }
} 
    export default Customers; 