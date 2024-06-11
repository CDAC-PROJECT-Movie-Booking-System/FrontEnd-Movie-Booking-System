import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import movieImage from "../moviePng/image.png"
function MovieList(){
    return(
        <div>
            <Navbar/>
            <h2 className="page-header">MovieList</h2>
            <div className="container">
                
                <div className="row">
                
                <div className="col">
                <Link to="/movieDetails"> 
                <div className="card myCard" style={{margin:30}}>
                    <img style={{width:150}}
                    className="card-img-top"src={movieImage} alt=""/>
                    <div className="card-body">
                        <div style={{fontWeight:'bold',fontSize:19}}> Matrix</div>
                        <div>Price:<span style={{fontWeight:'bold',fontSize:17}}> Rs.550</span></div>
                    </div>
                </div>
                </Link>
                </div>
                <div className="col">
                <Link to="/movieDetails"> 
                <div className="card myCard" style={{margin:30}}>
                    <img style={{width:150}}
                    className="card-img-top
                    "src={movieImage} alt=""/>
                    <div className="card-body">
                        <div style={{fontWeight:'bold',fontSize:19}}> Matrix</div>
                        <div>Price:<span style={{fontWeight:'bold',fontSize:17}}> Rs.470</span></div>
                    </div>
                </div>
                </Link>
                </div>
                <div className="col">
                <Link to="/movieDetails"> 
                <div className="card myCard" style={{margin:30}}>
                    <img style={{width:150}}
                    className="card-img-top
                    "src={movieImage} alt=""/>
                    <div className="card-body">
                        <div style={{fontWeight:'bold',fontSize:19}}> Matrix</div>
                        <div>Price:<span style={{fontWeight:'bold',fontSize:17}}> Rs.500</span></div>
                    </div>
                </div>
                </Link>
                </div>
                <div className="col">
                <Link to="/movieDetails"> 
                <div className="card myCard" style={{margin:30}}>
                    <img style={{width:150}}
                    className="card-img-top
                    "src={movieImage} alt=""/>
                    <div className="card-body">
                        <div style={{fontWeight:'bold',fontSize:19}}> Matrix</div>
                        <div>Price:<span style={{fontWeight:'bold',fontSize:17}}> Rs.300</span></div>
                    </div>
                </div>
                </Link>
                </div>
                

                </div>
                <div className="row">
                
                <div className="col">
                <Link to="/movieDetails"> 
                <div className="card myCard" style={{margin:30}}>
                    <img style={{width:150}}
                    className="card-img-top
                    "src={movieImage} alt=""/>
                    <div className="card-body">
                        <div style={{fontWeight:'bold',fontSize:19}}> Matrix</div>
                        <div>Price:<span style={{fontWeight:'bold',fontSize:17}}> Rs.650</span></div>
                    </div>
                </div>
                </Link>
                </div>
                <div className="col">
                <Link to="/movieDetails"> 
                <div className="card myCard" style={{margin:30}}>
                    <img style={{width:150}}
                    className="card-img-top
                    "src={movieImage} alt=""/>
                    <div className="card-body">
                        <div style={{fontWeight:'bold',fontSize:19}}> Matrix</div>
                        <div>Price:<span style={{fontWeight:'bold',fontSize:17}}> Rs.450</span></div>
                    </div>
                </div>
                </Link>
                </div>
                <div className="col">
                <Link to="/movieDetails"> 
                <div className="card myCard" style={{margin:30}}>
                    <img style={{width:150}}
                    className="card-img-top
                    "src={movieImage} alt=""/>
                    <div className="card-body">
                        <div style={{fontWeight:'bold',fontSize:19}}> Matrix</div>
                        <div>Price:<span style={{fontWeight:'bold',fontSize:17}}> Rs.370</span></div>
                    </div>
                </div>
                </Link>
                </div>
                <div className="col">
                <Link to="/movieDetails"> 
                <div className="card myCard" style={{margin:30}}>
                    <img style={{width:150}}
                    className="card-img-top
                    "src={movieImage} alt=""/>
                    <div className="card-body">
                        <div style={{fontWeight:'bold',fontSize:19}}> Matrix</div>
                        <div>Price:<span style={{fontWeight:'bold',fontSize:17}}> Rs.350</span></div>
                    </div>
                </div>
                </Link>
                </div>
                

                </div>


            </div>
            <Footer/>
        </div>
    )
}

export default MovieList