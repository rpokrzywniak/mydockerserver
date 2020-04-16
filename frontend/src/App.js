import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  let mass = {
    value: 0
  };

  let height = {
    value: 0
  };

  const handleSubmit = (event) => {
    axios.get(`http://localhost:8080/api/${mass.value}/${height.value}/`).then(res => {
      alert("Twoje BMI to: " + res.data.result);
    });
      event.preventDefault();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Oblicz swoje BMI</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Masa(kg):  
            <input type="number" ref={(x) => mass = x} />
          </label><br></br>
          <label>
            Wzrost(cm):  
            <input type="number" ref={(x) => height = x}/>
          </label><br></br>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
