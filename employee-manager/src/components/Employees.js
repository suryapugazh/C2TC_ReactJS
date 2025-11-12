import React, { Component } from "react";

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: ["Gowtham", "Muthamizh", "Vignesh"],
      newEmployee: "",
    };
    console.log("Component created");

    this.handleAddEmployee = this.handleAddEmployee.bind(this);
  }

  componentDidMount() {
    console.log("Component mounted(loaded)");
    setTimeout(() => {
      this.setState({ employees: [...this.state.employees, "Suganthan"] });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated");
    console.log("Previous Employee: ", prevState.employees);
    console.log("Current Employee: ", this.state.employees);
  }

  componentWillUnmount() {
    console.log("Component will remove");
  }

  handleAddEmployee() {
    if (this.state.newEmployee.trim() !== "") {
      this.setState({
        employees: [...this.state.employees, this.state.newEmployee],
        newEmployee: "",
      });
    }
  }

  handleInputChange = (e) => {
    this.setState({ newEmployee: e.target.value });
  };

  removeEmployee(index) {
    const updateList = this.state.employees.filter((_, i) => i !== index);
    this.setState({ employees: updateList });
  }

  render() {
    console.log("Employees component is rendering...");
    return (
      <div>
        <h2>Employees</h2>
        <ul>
          {this.state.employees.map((employee, index) => (
            <li key={index}>
              {employee} &nbsp;
              <button onClick={() => this.removeEmployee(index)}>Remove</button>
            </li>
          ))}
        </ul>

        <input
          type="text"
          value={this.state.newEmployee}
          onChange={this.handleInputChange}
          placeholder="Enter employee name"
        />
        <button onClick={this.handleAddEmployee}>Add Employee</button>
      </div>
    );
  }
}

export default Employees;
