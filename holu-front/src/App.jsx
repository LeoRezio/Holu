import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css';
import AddItem from './component/add-item';
import List from './component/item-list';

function App() {
  
  return (
    <>
      <List />
      <AddItem />
    </>
  );
}

export default App;
