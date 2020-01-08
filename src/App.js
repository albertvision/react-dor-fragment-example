import React from 'react';
import Fragment from 'react-dot-fragment';
import './App.css';
import Alert from './Alert';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showError: false
    };

    this.toggleError = this.toggleError.bind(this);
  }

  toggleError() {
    this.setState(state => ({
      showError: !state.showError
    }));
  }

  componentDidMount() {
    setTimeout(() => {
      this.toggleError();
    })
    setTimeout(() => {
      this.toggleError();
    })
  }

  render() {

    return (
      <Fragment>
        <button onClick={this.toggleError}>
          Toggle Error Container
        </button>
        {this.state.showError && <Alert heading="Something wrong happened!" message="WTF?!" />}
      </Fragment>
    )
  }
}

export default App;
