import React, { Component } from "react";
import "./filter_checkbox.css";
class FilterCheckbox extends Component {
  state = {};
  render() {
    const valuesJsx = this.props.values.map(value => {
      return (
        <div key={value} className="card-body">
          <span style={{ verticalAlign: "middle" }}>
            <input
              type="checkbox"
              id={value}
              name={value}
              value={value}
              onChange={this.props.onChange}
            />
          </span>
          <span style={{ margin: "0 10px" }}>
            <label htmlFor={value}> {value}</label>
          </span>
        </div>
      );
    });
    return <div>{valuesJsx}</div>;
  }
}

export default FilterCheckbox;
