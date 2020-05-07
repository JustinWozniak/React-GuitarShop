import React from 'react';
import axios from 'axios'

class App extends React.Component {
  componentDidMount() {
    axios.get("/api/product/brands").then(responce => {
      console.log(responce)
    })
  }
  render() {
    return (
      <div className="App">
        MY APP
      </div>
    );
  }
}
export default App;
