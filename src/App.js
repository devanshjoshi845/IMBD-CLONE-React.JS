import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header/header';
import Home from './components/pages/home';
import MovieList from './components/list/Pop';
import Top from './components/list/Top';
import Up from './components/list/Upc';
import Detail from './components/list/detail';
function App() {
  return (
    <div className="App">
  <Router>
    <Header/>
    <Routes>
    <Route  index element={<Home/>}/>
    <Route path="/movies/top_rated"  element={<Top/>}/>
    <Route  path="/movies/popular" element={<MovieList/>}/>
    <Route  path="/movies/upcoming" element={<Up/>}/>
    <Route   path='/movie/:id' element={<Detail/>}/>
    <Route path='/*' element={<h1>error page</h1>}></Route>
    </Routes>
  </Router>
    </div>
  );
}

export default App;
