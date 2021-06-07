import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import './styling/App.css';
import {FunctionalComp} from "./b-MyFirstComponent"
import {ConditionalRender} from "./ConditionalRender"


ReactDOM.render(
  <React.StrictMode>
      <div className="App">
          <header className="App-header">
            <ConditionalRender/>
          </header>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);


