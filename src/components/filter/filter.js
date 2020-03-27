import React, { Component } from "react";
import FilterDropDown from "../filter_dropdown/filter_dropdown";
import FilterHeading from "../filter_heading/filter_heading";
export default class Filter extends Component {
  render() {
    return (
      <div className="filter" style={{ marginTop: "10%" }}>
        <div>
          <span className="filter_heading">Filters</span>
          <button
            style={{
              fontSize: "14px",
              float: "right",
              border: "0",
              background: "none",
              padding: "1px 0px"
            }}
          >
            Reset filters
          </button>
        </div>
        <hr />
        <div className="accordion filter_accordion" id="accordionExample">
          <div className="card">
            <FilterHeading type="uses" title="Uses" serial="One" />
            <FilterDropDown
              type="uses"
              serial="One"
              onChange={this.props.onChange}
            />
          </div>
          <div className="card">
            <FilterHeading type="company" title="Company" serial="Two" />
            <FilterDropDown
              type="company"
              serial="Two"
              onChange={this.props.onChange}
            />
          </div>
          <div className="card">
            <FilterHeading type="salt" title="Salt" serial="Three" />
            <FilterDropDown
              type="salt"
              serial="Three"
              onChange={this.props.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
