import React, { Component } from "react";
class FilterHeading extends Component {
  state = {};
  render() {
    return (
      <div className="card-header" id={"heading" + this.props.serial}>
        <h2 className="mb-0">
          <button
            className="btn btn-link"
            type="button"
            data-toggle="collapse"
            data-target={"#collapse" + this.props.serial}
            aria-expanded="true"
            aria-controls={"collapse" + this.props.serial}
          >
            {this.props.title}
          </button>
        </h2>
      </div>
    );
  }
}

export default FilterHeading;
