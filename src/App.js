import React from 'react';
import "./styles/css/App.css";
import CustomerList from "./Container/CustomerList";
//import CustomerDetails from "./Container/CustomerDetails";

function App() {
  function navigate() {
    window.location.href="/details";
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Today's Purchase</h1>
      </header>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-7 purchase-details">
            <h1>Customer List</h1>
            <CustomerList></CustomerList>
          </div>
          
          <button onClick={navigate}>Add Customer</button>
          {/* <div className="col-sm-4 purchase-details">
            <h1>Edit Customer</h1>
            <CustomerDetails></CustomerDetails>
          </div> */}
        </div>
      </div>      
    </div>
  );
}

export default App;
