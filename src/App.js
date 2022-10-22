import './App.css';
import Home from './Component/Home';
import Users from './Component/Users';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />}>
           <Route path='users' element={<Users/>}/>
        </Route>
    </Routes>
  );
}

export default App;
