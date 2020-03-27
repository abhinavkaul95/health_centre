import React, { Component } from "react";
import FilterCheckbox from "../filter_checkbox/filter_checkbox";
import data from "../data/filter.json";
class FilterDropDown extends Component {
  state = {};
  render() {
    return (
      <div
        id={"collapse" + this.props.serial}
        className="collapse"
        aria-labelledby={"heading" + this.props.serial}
        data-parent="#accordionExample"
      >
        <FilterCheckbox
          values={data[this.props.type]}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default FilterDropDown;
