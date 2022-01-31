import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:slug' element={<Article />} />
    </Routes>
  );
}

export default App;
