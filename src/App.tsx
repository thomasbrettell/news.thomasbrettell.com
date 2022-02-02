import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import { useContext } from 'react';
import { PasswordContext } from '.';
import Validate from './components/Validate';

function App() {
  const { state: isValidated } = useContext(PasswordContext);

  if (!isValidated) {
    return <Validate />;
  }
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:slug' element={<Article />} />
    </Routes>
  );
}

export default App;
