/* @jsx h */
import { Fragment, h, render } from 'preact';

// global styles
import './app.css';

// components
import {
  Main,
  Menu
} from './components';

function App() {
  return (
    <div className="app-layout">
      <Menu />
      <Main />
    </div>
  );
}

render(
  <App />,
  document.getElementById('app')
);
