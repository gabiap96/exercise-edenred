import "uikit/dist/css/uikit-core.min.css";
import './App.css';
import './css/theme.css'

import React from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import CSVContent from "./components/CSVContent/CSVContent";
import Layout from "./components/Layout/Layout";

// loads the Icon plugin
UIkit.use(Icons);

function App() {
  return (
    <Layout>
      <div className="App standard-margin-right-left">
        <CSVContent />
      </div>
    </Layout>
  );
}

export default App;
