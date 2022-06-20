import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Create from './components/Create/Create';
import Todo from './components/Todo/Todo';
import Navbar from './components/Navbar/Navbar';
import Test from './components/Test/Test'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Test />} />
          <Route path='/create' element={<Create />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
