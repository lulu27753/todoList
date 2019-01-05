import React, { Component } from 'react';
import Todos from './components/todos';
import Filter from './components/filter';


class App extends Component {
  render() {
    console.dir(this.props.store);
    return (
      <div>
        <Todos />
        <Filter />
      </div>
    );
  }
}

export default App;
