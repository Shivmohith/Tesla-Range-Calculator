import React from 'react';
import Header from './components/Header/Header';
import TeslaBattery from './containers/TeslaBattery'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TeslaBattery />
    </div>
  );
}

export default App;
