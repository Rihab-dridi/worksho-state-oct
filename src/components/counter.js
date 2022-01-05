import React from "react";
import { Button } from "react-bootstrap";
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  incrementHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  decrementHandler = () => {
    this.state.counter > 0 &&
      this.setState({
        counter: this.state.counter - 1,
      });
  };
  resetHandler = () => {
    this.setState({
      counter: 0,
    });
  };
  componentDidMount() {
    console.log(" 3- hello there , the component did  mount ...");
  }
  componentWillMount() {
    console.log("1- welcome , it wILL MOUNT");
    console.log("it might be just an update (rendering..");
  }
  componentDidUpdate() {
    console.log("the componentnt did update ...");
  }
  componentWillUnmount() {
    alert("are you sure, you want to leave the website ...");
  }
  render() {
    console.log("2-welcome in my website (rendering..)");
    return (
      <div className="counter">
        <div className="btns">
          <Button onClick={this.decrementHandler}> - </Button>
          <Button variant="danger" size="lg">
            {" "}
            {this.state.counter}{" "}
          </Button>
          <Button onClick={this.incrementHandler}> + </Button>
        </div>
        <Button variant="secondary" onClick={this.resetHandler}>
          reset{" "}
        </Button>
      </div>
    );
  }
}
export default Counter;
