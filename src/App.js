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
import reducers from './store/reducers';
import Header from "./components/Header";
import {Home, About, NotFoundPage} from './pages';

function App() {
  return (
    <Router>
      <Provider store={createStore(reducers,{}, applyMiddleware(thunk))}>
        <Header link={Link} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </Provider>
    </Router>
  );
}

export default App;
