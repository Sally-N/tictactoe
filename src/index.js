import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



// render one square
class Square extends React.Component {
            ///add a constructor to the class to initializza state
    // constructor(props)
    // {
    //     super(props);
    //     this.state = {
    //         value: null,
    //     };
    // } square no longer keeps track of the game's
    
    render() {
        return (
                // passing a function a the onClick prop
            <button className="square" onClick={() => this.props.onClick()}>
                {/* Change Square render method to show value */}
                {this.props.value}
            </button>
        );
    }
}
//render a 3 by 3square
class Board extends React.Component {
    // Add a constructor to the Board and set the Board’s initial state to contain an array of 9 nulls corresponding to the 9 squares:
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
        };
      }

      handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
      }

    //change code to pass a prop called value
    renderSquare(i) {
        return (
          <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
        );
      }
    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status" > {status} </div>
                <div className="board-row" > {this.renderSquare(0)} {this.renderSquare(1)} {this.renderSquare(2)}
                </div>
                <div className="board-row" > {this.renderSquare(3)} {this.renderSquare(4)} {this.renderSquare(5)}
                </div>
                <div className="board-row" > {this.renderSquare(6)} {this.renderSquare(7)} {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game" >
                <div className="game-board" >
                    <Board />
                </div>
                <div className="game-info" >
                    <div > { /* status */} </div>
                    <ol > { /* TODO */} </ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< Game />);


///making an interactive component