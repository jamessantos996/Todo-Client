import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Page404 from './pages/Page404';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
