import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Home,
  SelectGame,
  Login,
  EasyMenu,
  MediumMenu,
  HardMenu,
  ProfilePage,
} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/selectGame" element={<SelectGame />} />
        <Route path="/selectGame/easy" element={<EasyMenu />} />
        <Route path="/selectGame/medium" element={<MediumMenu />} />
        <Route path="/selectGame/hard" element={<HardMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
