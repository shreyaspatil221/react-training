import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div>
      {routes?.map((route) => (
        <a href={route.path} className='p-2' key={route.path}>{route.name}</a>
      ))}
    </div>
    <Router>
      <Routes>
        {
          routes?.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))
        }
      </Routes>
    </Router>
  </React.StrictMode >
);

reportWebVitals();
