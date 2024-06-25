import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MovieList from './components/movielist/MovieList';
import HomePage from './home/HomePage'
import MovieBooking from './pages/MovieBooking';
import MovieDetails from './pages/MoviesDetails';
import TheaterList from './pages/TheaterList';
import SessionsPage from './pages/SessionsPage';
import SeatsPage from './pages/SeatsPage';

function App() {
  return <div className='container'>
<Routes>  
  {/* <Route path="" element={<Login />}/> */}
  <Route path="login" element={<Login />}/>
  <Route path="register" element={<Register />}/>
  <Route path="" element={<HomePage />}/>
  <Route path="home" element={<HomePage/>}/>
  <Route path="movieList" element={<MovieList/>}/>
  <Route path="theaterList" element={<TheaterList/>}/>
  <Route path="movieBooking" element={<MovieBooking />}/>
  <Route path="movieDetails" element={<MovieDetails />}/>


  <Route path='/sessions/:idFilme' element={<SessionsPage />} />
        {/* Add the following route for SeatsPage */}
  <Route path='/seats/:idSessao' element={<SeatsPage />} />
</Routes>
<ToastContainer />
  </div>
}

export default App;
