import React, { Component } from 'react';
import './App.css';
import ItemList from "./components/ItemList";
import { store } from "./utils/ReduxStore";
import SaveEdit from "./components/SaveEdit";

const styles = {
  app: {
      display: "grid",
      gridTemplateColumns: "50% 50%",
      boxSizing: 'border-box'
  }
};

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
          <SaveEdit store={store}/>
          <ItemList store={store}/>
      </div>
    );
  }
}

export default App;
