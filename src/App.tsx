import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Map } from './components/Map/Map';
import { ResourceView } from './components/ResourcesView/ResourcesView';

function App() {
  return (
    <div className="App">
      <Map></Map>
      <ResourceView></ResourceView>
    </div>
  );
}

export default App;
