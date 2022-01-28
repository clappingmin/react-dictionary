import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import AddWord from './routes/AddWord';
import ModifyWord from './routes/ModifyWord';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="word/:id" element={<ModifyWord />} />
        <Route path="/word/add" element={<AddWord />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
