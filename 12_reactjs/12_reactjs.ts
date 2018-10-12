import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Home } from './components/Home';

ReactDOM.render(
  React.createElement(Home, {name: '123', age: 28}),
  document.getElementById("app")
);
