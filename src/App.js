import React from 'react';
import SortableList from './components/SortableList';
import InfiniteScrollGallery from './components/InfiniteScrollGallery';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Sortable List</h1>
      <SortableList />
      <h1>Infinite Scroll Gallery</h1>
      <InfiniteScrollGallery />
    </div>
  );
};

export default App;
