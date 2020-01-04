import React from 'react';
import logo from './logo.svg';
import './App.css';

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={(() => this.handleClick(i))} />
  }

  handleClick(i) {
    const squares = this.state.squares.slice()
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }

  render() {
    const status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Game extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Tic-Tac-Toe</h1>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Board />
        </header>
      </div>
    )
  }
}

export default Game;
