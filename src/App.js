import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import FormLogin from './pages/login';
import FormRegister from './pages/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/register" element={<FormRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
