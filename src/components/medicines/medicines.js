import React, { Component } from "react";
import dataJson from "../data/medicines.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./medicines.css";
import MedicineList from "../medicine_list/medicine_list";
import Filter from "../filter/filter";
export default class Medicines extends Component {
  constructor(props) {
    super(props);
    let data = dataJson.map(entry => {
      entry.display = true;
      return entry;
    });
    this.state = {
      currentData: data,
      data: data,
      filtersChecked: [],
      searchText: ""
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div style={{ margin: "20px" }}>
              <h2 className="medicines_heading" style={{ display: "inline" }}>
                Medicines
              </h2>
              <input
                style={{ width: "30%" }}
                className="form-control float-right"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={event => {
                  let value = event.target.value;
                  this.setState({ searchText: value });
                  this.setState({ currentData: getDataState(this.state) });
                }}
              />
            </div>
            <MedicineList data={this.state.currentData} />
          </div>
          <div className="col-lg-3">
            <Filter
              onChange={event => {
                let filters;
                if (event.target.checked) {
                  filters = this.state.filtersChecked;
                  filters.push(event.target.value);
                } else {
                  filters = this.state.filtersChecked.filter(filtEntry => {
                    return filtEntry !== event.target.value;
                  });
                }
                this.setState({
                  filtersChecked: filters
                });
                this.setState({ currentData: getDataState(this.state) });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
function getDataState(state) {
  return state.data.map(entry => {
    entry.display =
      entry.name.includes(state.searchText) &&
      !state.filtersChecked
        .map(val => entry.uses.includes(val))
        .includes(false);
    return entry;
  });
}
