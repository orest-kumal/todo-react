import { Component } from "react";
import "./employers-add-form.css";
class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.state.name !== '' && this.state.salary !== '') {
         this.props.onAdd(this.state.name, this.state.salary);
    }
   
  };




  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавте нового працівника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            name="name"
            value={name}
            placeholder="Як звати працівника?"
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            name="salary"
            value={salary}
            placeholder="З/П в $?"
            onChange={this.onValueChange}
          />

          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={this.onAdd}
          >
            Добавити
          </button>
        </form>
      </div>
    );
  }
}
export default EmployersAddForm;
