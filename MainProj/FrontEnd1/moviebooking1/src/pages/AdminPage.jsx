import React, { useState } from 'react';
import axios from 'axios';
// import '../components/LoginRegister/LoginRegister.css';
import '../components/AdminMovieDetails/AdminPage.css'
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    imagePath: '',
    movieImageName: '',
    isDeleted: false,
    showTimes: [{
      showStartTime: { hour: 0, minute: 0, second: 0, nano: 0 },
      showEndTime: { hour: 0, minute: 0, second: 0, nano: 0 },
      showDate: '',
      movie: '',
      seats: [{ seatNo: 0, isSeatAvailable: true, showtime: '' }]
    }],
    mname: '',
    mdescription: '',
    mrating: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleShowTimeChange = (index, e) => {
    const { name, value } = e.target;
    const updatedShowTimes = [...movie.showTimes];
    updatedShowTimes[index] = { ...updatedShowTimes[index], [name]: value };
    setMovie({ ...movie, showTimes: updatedShowTimes });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMovie({ ...movie, imagePath: URL.createObjectURL(file), movieImageName: file.name });
    }
  };

  const addShowTime = () => {
    const newShowTime = {
      showStartTime: { hour: 0, minute: 0, second: 0, nano: 0 },
      showEndTime: { hour: 0, minute: 0, second: 0, nano: 0 },
      showDate: '',
      movie: '',
      seats: [{ seatNo: 0, isSeatAvailable: true, showtime: '' }]
    };
    setMovie({ ...movie, showTimes: [...movie.showTimes, newShowTime] });
  };

  const removeShowTime = (index) => {
    const updatedShowTimes = movie.showTimes.filter((_, i) => i !== index);
    setMovie({ ...movie, showTimes: updatedShowTimes });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/moviestest/add', movie);
      alert('Movie details added successfully!');
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };
  const handleRedirect = () => {
    navigate('/adminMovieList'); // Change this path to match your route
};

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="page-header">Add Movie Details</div>

        <div className="mb-3">
          <label htmlFor="mname">Movie Name</label>
          <input
            type="text"
            id="mname"
            name="mname"
            className="form-control"
            value={movie.mname}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mdescription">Movie Description</label>
          <textarea
            id="mdescription"
            name="mdescription"
            className="form-control"
            value={movie.mdescription}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mrating">Movie Rating</label>
          <input
            type="number"
            id="mrating"
            name="mrating"
            className="form-control"
            value={movie.mrating}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="movieImageName">Select Movie Image</label>
          <input
            type="file"
            id="movieImageName"
            name="movieImageName"
            className="form-control"
            onChange={handleFileChange}
          />
          {movie.imagePath && (
            <div className="image-preview">
              <img src={movie.imagePath} alt="Movie Preview" />
            </div>
          )}
        </div>

        {movie.showTimes.map((showTime, index) => (
          <div key={index} className="mb-3 showtime-container">
            <div className="page-header">Show Time {index + 1}</div>

            <label htmlFor={`showDate-${index}`}>Show Date</label>
            <input
              type="date"
              id={`showDate-${index}`}
              name="showDate"
              className="form-control"
              value={showTime.showDate}
              onChange={(e) => handleShowTimeChange(index, e)}
            />

            <label htmlFor={`showStartTime-${index}`}>Show Start Time</label>
            <input
              type="time"
              id={`showStartTime-${index}`}
              name="showStartTime"
              className="form-control"
              value={showTime.showStartTime}
              onChange={(e) => handleShowTimeChange(index, e)}
            />

            <label htmlFor={`showEndTime-${index}`}>Show End Time</label>
            <input
              type="time"
              id={`showEndTime-${index}`}
              name="showEndTime"
              className="form-control"
              value={showTime.showEndTime}
              onChange={(e) => handleShowTimeChange(index, e)}
            />

            <button
              type="button"
              className=" btn btn-danger"
              onClick={() => removeShowTime(index)}
            >
              Remove Show Time
            </button>
          </div>
        ))}

        <div className="button-container">
          <button type="button" className="btn btn-primary" onClick={addShowTime}>
            Add Show Time
          </button>
          <button type="submit" className="btn btn-success">Submit</button>

          <button type="button" className="btn btn-info" onClick={handleRedirect}>Movie List</button>


        </div>

        {/* <div className="button-container">
          <button type="submit" className="btn btn-success">Submit</button>
        </div> */}
      </form>
    </div>
  );
};

export default AdminPage;

