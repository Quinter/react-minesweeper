import Square from './Square';

class Board extends  {
  render() {
    var board = this.props.board;
    return (
    <tr>
      <td>
        <Square />
      </td>
    <tr>
    )
  }
}

export default Board;