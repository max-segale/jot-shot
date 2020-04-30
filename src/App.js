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
          <li>Text</li>
          <li>Photo</li>
        </ul>
      </div>
    );
  };
}

function App() {
  return (
    <div className='wrapper'>
      <header>
        <h1 className='heading'>Jot Shot</h1>
      </header>
      <View />
      <Menu />
      <footer>
      </footer>
    </div>
  );
}

export default App;
