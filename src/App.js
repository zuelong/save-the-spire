import React, { Component } from 'react';
import { Provider } from 'react-redux';
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
      <Provider store={store}>
        <div style={styles.app}>
            <SaveEdit/>
            <ItemList/>
        </div>
      </Provider>
    );
  }
}

export default App;
