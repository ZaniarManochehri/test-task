import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//component
import reducers from './rdx/reducers';

function App() {
  return (
    <Router>
      <Provider store={createStore(reducers,{}, applyMiddleware(thunk))}>
        <h1>zaniar</h1>
      </Provider>
    </Router>
  );
}

export default App;
