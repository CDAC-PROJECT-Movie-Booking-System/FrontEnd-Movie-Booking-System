import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MoviesListPage.css'
import config from '../../config';

const MoviesListPage = () => {
  const [movies, setMovies] = useState([]);
  const [expandedMovieIndex, setExpandedMovieIndex] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8080/moviestest');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const toggleShowtimes = (index) => {
    setExpandedMovieIndex(expandedMovieIndex === index ? null : index);
  };

  return (
    <div className="form-container">
      <div className="page-header">All Movies</div>

      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <table className="movies-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Rating</th>
              <th>Showtimes</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>
                  {movie.id ? (
                    <img
                      src={`${config.url}/moviestest/image/${movie.id}`}
                      alt={movie.movieImageName}
                      style={{ width: '100px', height: 'auto' }}
                    />
                  ) : (
                    'No Image'
                  )}
                </td>
                <td>{movie.mname}</td>
                <td>{movie.mdescription}</td>
                <td>{movie.mrating}</td>
                <td>
                  <button
                    className="toggle-button"
                    onClick={() => toggleShowtimes(index)}
                  >
                    {expandedMovieIndex === index ? 'Hide Showtimes' : 'View Showtimes'}
                  </button>
                  {expandedMovieIndex === index && (
                    <div className="dropdown-showtimes">
                      {movie.showTimes.map((showTime, idx) => (
                        <div className="showtime-item" key={idx}>
                          <p><strong>Date:</strong> {showTime.showDate}</p>
                          <p><strong>Start:</strong> {showTime.showStartTime.hour}:{showTime.showStartTime.minute}</p>
                          <p><strong>End:</strong> {showTime.showEndTime.hour}:{showTime.showEndTime.minute}</p>
                          <p><strong>Seats:</strong> {showTime.seats.length}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MoviesListPage;
