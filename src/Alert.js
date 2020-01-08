import React from 'react';
import Fragment from 'react-dot-fragment';

class Alert extends React.Component {
  render() {
    return (
      <Fragment>
        <h3>{this.props.heading}</h3>
        <p>{this.props.message}</p>
      </Fragment>
    )
  }
}

export default Alert;