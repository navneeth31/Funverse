import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import TicTacToeGame from './Components/TicTacToeGame';
import RockPaperScissorsGame from './Components/RockPaperScissorsGame';
import { Auth0Provider } from '@auth0/auth0-react';
import Header from './Components/Header';

function App() {
  return (
    <Auth0Provider
      domain="dev-uokgntlbgo8mpa7v.us.auth0.com"
      clientId="wuTaKEkoAFuqAAwImiTD4bdA3ypHKad7"
      authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/TicTacToeGame" element={<TicTacToeGame />} />
          <Route path="/RockPaperScissorsGame" element={<RockPaperScissorsGame />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

export default App;
