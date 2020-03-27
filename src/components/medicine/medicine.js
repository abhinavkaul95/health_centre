import React, { Component } from "react";
import data from "../data/medicines.json";
import "bootstrap/dist/css/bootstrap.min.css";
//import './medicine.css';
export default class Medicine extends Component {
  render() {
    const match = this.props.match;
    let id = match.params.id;
    const medObj = data.filter(item => item.id === id)[0];
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <img
              className="medicine_image"
              src={medObj.image}
              alt={medObj.name}
            />
          </div>
          <div className="col-lg-10">
            <p className="medicine_name">{medObj.name}</p>
            <p className="medicine_description">{medObj.description}</p>
            <p>
              <b>Cost:</b>&nbsp;&#8377; {medObj.cost}
            </p>
            <p className="medicine_safety_instructions">
              <b>Safety Instructions: </b>
              {medObj.safety_instructions}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
