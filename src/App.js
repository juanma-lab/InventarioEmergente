import React from 'react';
import Menu from './components/Menu'
import Enrutador from './components/Menu/Enrutador'
import 'antd/dist/antd.css';

import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Menu />
      <div className="content-wrapper">
        <Enrutador />
      </div>
    </Router>
  );
}

export default App;
