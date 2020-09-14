import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { RootModal } from './features/rootModal/RootModal';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from './features/rootModal/rootModalSlice';
import { selectCount } from './features/counter/counterSlice';

function App() {
  const dispatch = useDispatch()
  const count = useSelector(selectCount);
  const propsModal = {
    title: 'Title modal',
    text: 'Text modal',
    layer: 1
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => dispatch(showModal({modalType: `MODAL_${count}`, modalProps: propsModal}))}>Open modal</button>
        <RootModal></RootModal>
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
