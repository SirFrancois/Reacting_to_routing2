import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export * from './films/Film'
export * from './people/PeopleArray'
export * from './Home'
export * from './films/FilmsArray'
export * from './people/Person'

ReactDOM.render(<App />, document.getElementById('root'));