
import { Component } from 'react';
import './App.css';
import Employees from './components/Employees';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Employee Management</h1>
        <Employees />
      </div>
    )
  }
}

export default App;
