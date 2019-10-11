import React, {Component} from 'react';
import "../styles/css/CustomerList.css";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {deleteItem, editItem} from '../Store/action';


class CustomerList extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  componentDidUpdate(prevProps){
    console.log(prevProps, this.props);
  }
  deleteCustomer = itemIndex => {
    let customerList = [...this.props.customers];
    if(itemIndex < customerList.length){
      customerList.splice(itemIndex, 1);
      this.props.deleteItem(customerList);
    }
  }

  editCustomer = itemIndex => {
    this.props.editItem(itemIndex);
  }

  rowCreated = () => {
    let row =[];
    if(this.props.customers.length > 0){
      this.props.customers.forEach((element, index) => {
        row.push(
          <tr key={index}>
            <td>{element.fname} {element.lname}</td>
            <td>{element.item}</td>
            <td>{element.amount}</td>
            <td>
            <i 
              className='fa fa-pencil icon' 
              onClick = {() => this.editCustomer(index)}
              aria-hidden="true">  
            </i>&nbsp;
            <i 
              className={this.props.currentCustomer===null ? 'fa fa-remove icon' :'disable-edit fa fa-remove icon'} 
              aria-hidden="true" 
              onClick={() => this.deleteCustomer(index)}>
            </i>

            </td>
        </tr>
        );
      });
    } else {
      row.push( <tr>
        <td className="col-sm-10">No Data To Display</td>
      </tr>)
    }
    return row;
  };

  render(){
    return(
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Item</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.rowCreated()}
          </tbody>
        </table>
      </div>
    )
  } 
}



const mapStateToProps = (state) => {
  return {
    customers : state.list.items,
    currentCustomer : state.list.currentItem
  };
};


const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteItem, editItem
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
