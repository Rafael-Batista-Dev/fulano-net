import React, { Component } from "react";
import Social from "./components/Social";

import Slide from "./components/Slide";
import Plans from "./components/Plans";

export default class Index extends Component {
  render() {
    return (
      <>
        <Slide />
        <Social />
        <Plans />
      </>
    );
  }
}
