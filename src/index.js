import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import './styling/App.css';
import {Hooks} from "./Hooks"


ReactDOM.render(
  <React.StrictMode>
      <div className="App">
          <header className="App-header">
              <Hooks/>
          </header>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);


