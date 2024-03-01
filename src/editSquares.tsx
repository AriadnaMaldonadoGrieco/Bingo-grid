import React, { Component, useState } from "react";
import "./App.css";

class EditSquares extends Component {
  state = {
    value: "Fill your Bingo Square",
    isInEditMode: false,
  };

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });
  };

  updateComponentValue = () => {
    this.setState({
      isInEditMode: false,
      value: this.refs.theTextInput.value,
    });
  };



  renderEditView = () => {
    return (
      <div className="inputContainer color">
        <input
          className="inputSquare form-control"
          type="text"
          defaultValue={this.state.value}
          ref="theTextInput"
        />
        <button onClick={this.changeEditMode}>X</button>
        <button onClick={this.updateComponentValue}>ok</button>
        <input type="color" className="color-input" value="#fff" />
      </div>
    );
  };

  colorPicker = () => {
    const color = document.querySelector('.color');
    const colorInput = document.querySelector('.color-input');

    colorInput.addEventListener('input', () => {
      color.style.background = colorInput.value;
    });
  }

  renderDefaultView = () => {
    return <div onClick={this.changeEditMode}>{this.state.value}</div>;
  };

  render() {
    return this.state.isInEditMode
      ? this.renderEditView()
      : this.renderDefaultView();
  }
}

export default EditSquares;
