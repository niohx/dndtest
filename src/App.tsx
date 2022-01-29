import React, { VFC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import { Board } from './Board';

const App: VFC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Board />
    </DndProvider>
  );
};

export default App;
