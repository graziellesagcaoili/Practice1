import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import EvaluationForm from './EvaluationForm'

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <br></br>
        <EvaluationForm/>
      </div>
    );
  }
}
