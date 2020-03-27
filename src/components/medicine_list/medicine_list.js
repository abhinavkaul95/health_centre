import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class MedicineList extends Component {
  render() {
    let data = this.props.data;
    const newdata = data.map(data => {
      return (
        <li
          key={data.id}
          className={"medicine " + (data.display ? "d-block" : "d-none")}
        >
          <div className="row">
            <div className="col-lg-2">
              <img
                className="medicine_image"
                src={data.image}
                alt={data.name}
              />
            </div>
            <div className="col-lg-10">
              <p className="medicine_name">{data.name}</p>
              <p className="medicine_description">
                {data.description}&nbsp;
                <Link to={"/medicines/" + data.id}>See more &raquo;</Link>
              </p>
            </div>
          </div>
        </li>
      );
    });
    return <ul className="medicines_list">{newdata}</ul>;
  }
}
