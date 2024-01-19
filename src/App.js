import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/friends' element={<Friends></Friends>}></Route>
          <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={ <NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
