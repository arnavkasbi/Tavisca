import React from 'react';
import "./styles/css/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Today's Purchase</h1>
      </header>
      <div className="flex-container">
        <div style={{ flexGrow: "8" }}>Customer list
          <div className="flex-sub-container">
            <div>
              <div className="flex-li-container">
                <div>Name</div>
                <div># of items</div>
                <div>Amout</div>
                <div>Action</div>
              </div>
            </div>
            <div>
              <div className="flex-li-container">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>3</div>
              </div>
            </div>
            <div>
              <div className="flex-li-container">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>3</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flexGrow: "2" }}>Edit Customer</div>
      </div>
    </div>
  );
}

export default App;
