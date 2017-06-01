import React, { Component } from 'react';
import Board from './components/Board';
import './App.css';

class App extends Component {
  const xSize = 30;
  const ySize = 15;
  const numMines = 20;
  var board = [];

  updateBoard = function(square, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      square.exposeSquare();
    }
    this.setState({ board: this.state.board });
  },
  generateBoard = function() {
    for(x = 0; y < xSize; x++) {
      this.boardData.push;
      for(y=0; y < ySize; y++) {
        var square = new Square(this, [x, y]);
        this.grid[x].push(square);        
  }
  plantMines = function() {
    var plantedCount = 0;
    while (plantedCount < numMines) {
      var row = Math.floor(Math.random() * (xSize - 1));
      var row = Math.floor(Math.random() * (ySize - 1));
    }
  },

  render() {
    return (
      <table className="App">
        <th>Minesweeper</th>
        <Board board={this.state.board} updateBoard={this.updateBoard} />
      </table>
    );
  }
}

export default App;
