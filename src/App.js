import React, { Component } from 'react';
import './App.css';
import ItemList from "./components/ItemList";
import { store } from "./utils/ReduxStore";
import SaveEdit from "./components/SaveEdit";
import Advanced from "./components/Advanced"

const styles = {
  app: {
      display: "grid",
      gridTemplateColumns: "50% 49%",
      gridColumnGap: "10px",
      boxSizing: 'border-box'
  }
};

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
          <Advanced store={store}/>
          <ItemList store={store}/>
      </div>
    );
  }
}

export default App;
