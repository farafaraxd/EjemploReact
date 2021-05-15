import React from 'react';
import './App.css'
import Header from './components/Header'
import Caja from './components/Caja'

function App() {
  return (
    <div className="Container">
      <Header title="Hello World" />
      <Caja color="Red" text="text"/>
 <Caja color="White"text= "text"/>
 <Caja color="Green"text="text" />
    </div>
  );
}

export default App;
