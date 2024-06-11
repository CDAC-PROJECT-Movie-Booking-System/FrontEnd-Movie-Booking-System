import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import aquaman from "./moviePng/aquaman.jpg"
import avengers from "./moviePng/avengers.jpg"
import conjuring from "./moviePng/conjuring.jpg"
import image from "./moviePng/image.png"
import justiceLeague from "./moviePng/justiceLeague.jpg"
import missionImpossible from "./moviePng/missionImpossible.jpg"
import shawshankredeemption from "./moviePng/shawshankredeemption.jpg"
import spiderman from "./moviePng/spiderman.jpg"
import titanic from "./moviePng/titanic.jpg"
function MovieList(){
    return(
        <div>
            <Navbar/>
            <h2 className="page-header">MovieList</h2>
            <div className="container">
                
                <div className="row">
                
                <div className="col">
                <Link to="/movieDetails"> 
                <div className="card myCard" >
                    <img style={{width:150}}
                    className="card-img-top"src={aquaman} alt=""/>
                    <div className="card-body">
                        <div className="card-body-title" > Aquaman</div>
                        <div><span style={{fontWeight:'bold',fontSize:12}}> Rs.550</span></div>
                    </div>
                </div>
                </Link>
                </div>
                <div className="col">
                <Link to="/movieDetails"> 
                <div className="card myCard" >
                    <img style={{width:150}}
                    className="card-img-top"
                     src={avengers} alt=""/>
                    <div className="card-body">
                        <div className="card-body-title"> Avengers</div>
                        <div><span style={{fontWeight:'bold',fontSize:12}}> Rs.470</span></div>
                    </div>
                </div>
                </Link>
                </div>
                <div className="col">
                <Link to="/movieDetails"> 
                <div className="card myCard" >
                    <img style={{width:150}}
                    className="card-img-top
                    "src={image} alt=""/>
                    <div className="card-body">
                        <div className="card-body-title"> Matrix</div>
                        <div><span style={{fontWeight:'bold',fontSize:12}}> Rs.500</span></div>
                    </div>
                </div>
                </Link>
                </div>
                <div className="col">
                <Link to="/movieDetails"> 
                <div className="card myCard" >
                    <img style={{width:150}}
                    className="card-img-top
                    "src={conjuring} alt=""/>
                    <div className="card-body">
                        <div className="card-body-title"> Conjuring</div>
                        <div><span style={{fontWeight:'bold',fontSize:12}}> Rs.300</span></div>
                    </div>
                </div>
                </Link>
                </div>
                

                </div>
                <div className="row">
                
                <div className="col">
                <Link to="/movieDetails"> 
                <div className="card myCard" >
                    <img style={{width:150}}
                    className="card-img-top
                    "src={justiceLeague} alt=""/>
                    <div className="card-body">
                        <div className="card-body-title"> Justice League</div>
                        <div><span style={{fontWeight:'bold',fontSize:12}}> Rs.650</span></div>
                    </div>
                </div>
                </Link>
                </div>
                <div className="col">
                <Link to="/movieDetails"> 
                <div className="card myCard" >
                    <img style={{width:150}}
                    className="card-img-top
                    "src={missionImpossible} alt=""/>
                    <div className="card-body">
                        <div className="card-body-title"> Mission Impossible</div>
                        <div><span style={{fontWeight:'bold',fontSize:12}}> Rs.450</span></div>
                    </div>
                </div>
                </Link>
                </div>
                <div className="col">
                <Link to="/movieDetails"> 
                <div className="card myCard" >
                    <img style={{width:150}}
                    className="card-img-top
                    "src={shawshankredeemption} alt=""/>
                    <div className="card-body">
                        <div className="card-body-title"> Shawshank Redeemption</div>
                        <div><span style={{fontWeight:'bold',fontSize:12}}> Rs.370</span></div>
                    </div>
                </div>
                </Link>
                </div>
                <div className="col">
                <Link to="/movieDetails"> 
                <div className="card myCard" >
                    <img style={{width:150}}
                    className="card-img-top
                    "src={spiderman} alt=""/>
                    <div className="card-body">
                        <div className="card-body-title"> Spiderman</div>
                        <div><span style={{fontWeight:'bold',fontSize:12}}> Rs.350</span></div>
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