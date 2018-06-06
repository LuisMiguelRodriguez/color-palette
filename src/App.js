import React, { Component } from 'react';
import './App.css';


class Card extends Component {

  render() {
    var cardStyle = {
      height: "200px",
      width: "150px",
      padding: 0,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow( 0px 0px 5px #666)"
      ,
      filter: "drop-shadow( 0px 0px 5px #666)"

    }
    return (
      <div style={cardStyle}>
        <Square {...this.props}/>
        <Label {...this.props}/>
      </div>
    )
  }
}


class Square extends Component {
  render() {
    var squareStyle = {
      height: "150px",
      backgroundColor: this.props.color
    }
    return (
      <div style={squareStyle}>
      </div>
    )
  }
}


class Label extends Component {
  render() {

    var lableStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: "13px",
      margin: 0
    }

    return (
      <p style={lableStyle}>{this.props.color}</p>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Card color="#333333"/>

      </div>
    );
  }
}

export default App;
