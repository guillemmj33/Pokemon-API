import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Index/Index';
import Character from './components/Character/Character';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index></Index>}></Route>
          <Route path="/character/:id" element={<Character></Character>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
