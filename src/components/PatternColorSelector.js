import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class PatternColorSelector extends React.Component {
  handleColorSelection = () => {
    this.props.setColor(this.props.colors);
  };

  colorboxes = () => {
    return this.props.colors.map((c, idx) => {
      return (
        <div className="individual-color-box" style={{ backgroundColor: c }} />
      );
    });
  };

  render() {
    console.log("props in color selector", this.props);
    return (
      <div className="color-box" onClick={this.handleColorSelection}>
        {this.colorboxes()}
      </div>
    );
  }
}

export default connect(null, actions)(PatternColorSelector);