import Layout from "containers/Layout";
import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { Router } from "react-router";
import store from "store";
import history from "singletones/history";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Layout>

        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
