class Square extends  {
  const position = [];
  handleClick() {
    var flagged ;
    this.props.updateGame(this.props.tile, flagged);
  }
  adjcacentMines() {
    const directions = [[-1, -1], [-1,  0], [-1,  1], [ 0, -1], [ 0,  1], 
                        [ 1, -1], [ 1,  0], [ 1,  1]];
    var adjacentSquares = [];
    var nearMinesCount = 0;
    for direction in directions {
      var nearby = [direction[0] + position[0], direction[1] + position[1]];
      neighbors.push(nearby);
    },
    for neighbor in neighbors {
      if (neighbor.mine) {
        nearMinesCount++;
      } else {
        return nearMinesCount;
      }
    }
  },
  exposeSquare() {

  },
  toggleFlag() {

  },
  render() {
    var square = this.props.square;
    if (square.flagged) {
      status = "flagged";
      text = "p";
    } else if (square.exposed) {
      status = "exposed";
      count = square.nearMinesCount;
    } else {
      status = "hidden";
    }
    return (
      <div className={status} onClick={this.handleClick}>{count}</div>
    )
  }
}

export default Square;