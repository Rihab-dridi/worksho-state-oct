import React from "react";
import "./App.css";
import Counter from "./components/counter";
import { Button } from "react-bootstrap";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  showHandler = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
   
    return (
      <div  className="d-grid gap-2">
        <h1>Workshop State</h1>
        <Button onClick={this.showHandler} variant="warning" size="lg">
          {this.state.show ? "Hide" : "Show"}
        </Button>
        {this.state.show && <Counter />}
      </div>
    );
  }
}
export default App;
