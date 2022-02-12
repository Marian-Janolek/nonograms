import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, SelectGame, Login, Easy } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="selectGame" element={<SelectGame />}>
          <Route path="easy" element={<div>easy game</div>} />
          <Route path="medium" element={<div>medium game</div>} />
          <Route path="hard" element={<div>hard game</div>} />
        </Route>
        <Route path="card" element={<Easy />} />
      </Routes>
    </Router>
  );
}

export default App;
