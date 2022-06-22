import {
  BrowserRouter as Router,
  Routes,
  Route
  } from 'react-router-dom';
import Chatbot from 'react-chatbot-kit'
import logo from './logo.svg';
// Navigate to a saved (gifs) page
// Navigate to a search
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SearchPage from './containers/SearchPage';
import SavedPage from './containers/SavedPage';

import Navi from './components/partials/Navi';
import GifSearch from './components/gifs/GifSearch';
import RequireAuth from './components/RequireAuth';
import { AuthProvider } from './context/authContext';
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import config from './chatbot/config';

import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navi />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />

            <Route element={<RequireAuth />}>
              <Route path='/saved' element={<SavedPage />} /> 
              <Route  path='/search' element={<SearchPage />} />
            </Route>
            
            {/* <Route path='/*' element={<div>404</div>} />  */}
          </Routes>
        </Router>
      </AuthProvider>

    <div className='container'>
      <div className='row'>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>

    </div>
  );
}

export default App;
