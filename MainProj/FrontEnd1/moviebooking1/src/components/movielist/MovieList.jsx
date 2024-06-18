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
        <Navbar />
        <h2 className="page-header">MovieList</h2>
        <div className="container">
            <div className="row">
                <MovieCard image={aquaman} title="Aquaman" languages={['English', 'Spanish']} />
                <MovieCard image={avengers} title="Avengers" languages={['English', 'French']} />
                <MovieCard image={image} title="Matrix" languages={['English', 'German']} />
                <MovieCard image={conjuring} title="Conjuring" languages={['English']} />
            </div>
            <div className="row">
                <MovieCard image={justiceLeague} title="Justice League" languages={['English', 'Italian']} />
                <MovieCard image={missionImpossible} title="Mission Impossible" languages={['English', 'Japanese']} />
                <MovieCard image={shawshankredeemption} title="Shawshank Redemption" languages={['English', 'Chinese']} />
                <MovieCard image={spiderman} title="Spiderman" languages={['English', 'Korean']} />
            </div>
        </div>
        <Footer />
    </div>
    )
}
const MovieCard = ({ image, title, languages }) => {
    return (
        <div className="col-md-3 mb-4 col-sm-6">
            <Link to="/movieDetails">
                <div className="card myCard">
                    <img className="card-img-top" src={image} alt={title} />
                    <div className="card-body">
                    </div>
                </div>
                        <div className="card-body-text card-body-title">{title}</div>
                        <div className="card-body-text card-body-lan">{languages.join(', ')}</div>
            </Link>
        </div>
    );
};

export default MovieList