import React from 'react';
import logo from './logo.svg';
import './App.sass';

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick() {
    console.log('click');
  }

  render() {
    return (
      <div className='view' onClick={this.handleClick}>
        <h1 className='heading'>Jot Shot</h1>
        <canvas></canvas>
      </div>
    );
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='menu'>
        <ul>
          <li>
            <button>Text</button>
          </li>
          <li>
            <button>Photo</button>
          </li>
        </ul>
      </div>
    );
  };
}

function App() {
  return (
    <div className='wrapper'>
      <View />
      <Menu />
    </div>
  );
}

export default App;
