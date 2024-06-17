import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import { Link } from "react-router-dom"
import aquaman from "../../pages/moviePng/aquaman.jpg"
import avengers from "../../pages/moviePng/avengers.jpg"
import conjuring from "../../pages/moviePng/conjuring.jpg"
import image from "../../pages/moviePng/image.png"
import justiceLeague from "../../pages/moviePng/justiceLeague.jpg"
import missionImpossible from "../../pages/moviePng/missionImpossible.jpg"
import shawshankredeemption from "../../pages/moviePng/shawshankredeemption.jpg"
import spiderman from "../../pages/moviePng/spiderman.jpg"
// import titanic from "./moviePng/titanic.jpg"
import './MovieList.css';
function MovieList(){
    return(
        <div>
    <Navbar/>
    <h2 className="page-header">MovieList</h2>
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-6">
                <Link to="/movieDetails"> 
                    <div className="card myCard">
                        <img className="card-img-top" src={aquaman} alt="Aquaman"/>
                        <div className="card-body">
                            <div className="card-body-title">Aquaman</div>
                            <div><span>Rs.550</span></div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-3 col-sm-6">
                <Link to="/movieDetails"> 
                    <div className="card myCard">
                        <img className="card-img-top" src={avengers} alt="Avengers"/>
                        <div className="card-body">
                            <div className="card-body-title">Avengers</div>
                            <div><span>Rs.470</span></div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-3 col-sm-6">
                <Link to="/movieDetails"> 
                    <div className="card myCard">
                        <img className="card-img-top" src={image} alt="Matrix"/>
                        <div className="card-body">
                            <div className="card-body-title">Matrix</div>
                            <div><span>Rs.500</span></div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-3 col-sm-6">
                <Link to="/movieDetails"> 
                    <div className="card myCard">
                        <img className="card-img-top" src={conjuring} alt="Conjuring"/>
                        <div className="card-body">
                            <div className="card-body-title">Conjuring</div>
                            <div><span>Rs.300</span></div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-6">
                <Link to="/movieDetails"> 
                    <div className="card myCard">
                        <img className="card-img-top" src={justiceLeague} alt="Justice League"/>
                        <div className="card-body">
                            <div className="card-body-title">Justice League</div>
                            <div><span>Rs.650</span></div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-3 col-sm-6">
                <Link to="/movieDetails"> 
                    <div className="card myCard">
                        <img className="card-img-top" src={missionImpossible} alt="Mission Impossible"/>
                        <div className="card-body">
                            <div className="card-body-title">Mission Impossible</div>
                            <div><span>Rs.450</span></div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-3 col-sm-6">
                <Link to="/movieDetails"> 
                    <div className="card myCard">
                        <img className="card-img-top" src={shawshankredeemption} alt="Shawshank Redemption"/>
                        <div className="card-body">
                            <div className="card-body-title">Shawshank Redemption</div>
                            <div><span>Rs.370</span></div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-3 col-sm-6">
                <Link to="/movieDetails"> 
                    <div className="card myCard">
                        <img className="card-img-top" src={spiderman} alt="Spiderman"/>
                        <div className="card-body">
                            <div className="card-body-title">Spiderman</div>
                            <div><span>Rs.350</span></div>
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