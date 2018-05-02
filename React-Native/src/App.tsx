import React from 'react'
import { Component } from 'react';
import {Hello} from "./components/Hello";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Hello name="World" enthusiasmLevel={1} />
    );
  }
}
