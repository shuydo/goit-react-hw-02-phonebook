import { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    // phone: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    // this.setState({ name: "", phone: "" });
    this.setState({ name: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <label> */}
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        {/* </label> */}

        {/* <label>
          Phone
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </label> */}
        <button type="submit" style={{ marginLeft: 10 }}>
          Add contact
        </button>
      </form>
    );
  }
}
