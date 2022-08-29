import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages and components
import Home from './pages/Home';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
