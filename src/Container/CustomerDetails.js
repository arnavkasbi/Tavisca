import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {saveItem, updateItem} from '../Store/action';
import {NotificationManager} from 'react-notifications';

class CustomerDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      fname : "",
      lname : "",
      item : "",
      amount : "",
      formObj: {}
    };
    
  }

  componentDidUpdate(prevProps) {
    if(prevProps.currentCustomer !== this.props.currentCustomer && this.props.currentCustomer !== null){
      let customerList = [...this.props.customers];
      let currCustomer =  customerList[this.props.currentCustomer];
      this.setState({  
        fname:currCustomer.fname, 
        lname: currCustomer.lname, 
        item:currCustomer.item, 
        amount:currCustomer.amount, 
        formObj:currCustomer
      });
    }
  }

  handleChange = (e) => {
    try {
      let formObj = {...this.state.formObj } ;
      formObj[e.target.id] = e.target.value;
      
      this.setState({ 
        [e.target.id] : e.target.value,
        formObj  
      });
    } catch (e) {
      console.log(e);
    }
  };

  validateForm = () => {
    let validFlag = true;
    let formObj = {...this.state.formObj};
    try {
      Object.keys(formObj).forEach(val=>{
        if(formObj[val] === ""){
          NotificationManager.error("Enter "+val,null,5000);
          validFlag = false;
        }
      });

      return validFlag;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  saveDetails = (e) =>{
    e.preventDefault();
    if(this.validateForm()){
      if(this.props.currentCustomer !== null){
        let customerList = [...this.props.customers];
        customerList[this.props.currentCustomer] = this.state.formObj;
        this.props.updateItem(customerList);
        this.setState({ fname:"", lname: "", item:"", amount:"", formObj:{} });
      } else {
        this.props.saveItem(this.state.formObj);
        this.setState({  fname:"", lname: "", item:"", amount:"", formObj:{} }, ()=>{
          window.location.href="/list";
        });
      }      
    }
  };
 
  render(){
    return(
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-2">First Name:</label>
            <div className="col-sm-10">
              <input onChange={this.handleChange} value={this.state.fname} aria-required="true" aria-label="fname" type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname"/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Last Name:</label>
            <div className="col-sm-10">
              <input onChange={this.handleChange} value={this.state.lname} aria-required="true" type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname"/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Purchased Item:</label>
            <div className="col-sm-10">
              <input onChange={this.handleChange} value={this.state.item} type="number" className="form-control" id="item" placeholder="Enter Item (Numeric)" name="item"/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Amount:</label>
            <div className="col-sm-10">
              <input onChange={this.handleChange} value={this.state.amount} type="number" className="form-control" id="amount" placeholder="Enter Price (Numeric)" name="amount"/>
            </div>
          </div>
          <div className="form-group">        
            <div className="col-sm-offset-2 col-sm-10">
              <button onClick={this.saveDetails} type="button" className="btn btn-default">Save</button>
            </div>
          </div>
        </form>
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
      saveItem,  updateItem
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetails);
