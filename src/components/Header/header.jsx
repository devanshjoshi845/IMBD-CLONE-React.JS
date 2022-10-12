import { Link } from "react-router-dom";
import "./header.css"

function Header(){
 return(
  <div className="header">
   <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"  alt="" className="header-img" /></Link>
   <Link to="/movies/popular" style={{textDecoration: "none", color:"white"}}>Popular</Link>
   <Link to="/movies/top_rated" style={{textDecoration: "none", color:"white"}}>TopRated</Link>
   <Link to="/movies/upcoming" style={{textDecoration: "none", color:"white"}}>Upcoimng</Link>
  </div>
 )
}
export default Header;