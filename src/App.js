import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//component
import {Home, About, NotFoundPage, ShowUser, reducers, Header} from './loader';

function App() {
  return (
    <Router>
      <Provider store={createStore(reducers,{}, applyMiddleware(thunk))}>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='user/:name' element={<ShowUser />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </Provider>
    </Router>
  );
}

export default App;
