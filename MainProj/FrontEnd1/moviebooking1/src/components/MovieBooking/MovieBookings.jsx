import React, { useEffect, useState } from 'react';
import './MovieBooking.css';
import available from './seat_availabale.png'
import taken from './seat_booked.png'
import selected from './seat_selected.png'
import { paymentStart } from '../../Services/Payment';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../../Redux/cart/cartSlice';
import { useParams } from 'react-router-dom';
import { fetchMovieDetailsByid } from '../../Services/MovieList';
import config from '../../config';

const MovieDetails = ({ movieData }) => {
  if (!movieData) {
    return <p>Loading movie details...</p>;
  }
  const rating = movieData.mrating;
  const maxStars = 5;
  const filledStars = Math.round((rating / 10) * maxStars);
  const emptyStars = maxStars - filledStars;

  return (
    <div className="movie-details">
      <img src={`${config.url}/moviestest/image/${movieData.id}`} alt={movieData.mname} />
      <h2>{movieData.mname}</h2>
      <div className="rating">
        {/* Render filled stars */}
        {Array(filledStars).fill('⭐️').map((star, index) => (
          <span key={`filled-star-${index}`}>{star}</span>
        ))}
        {/* Render empty stars */}
        {Array(emptyStars).fill(<>&#9734;</>).map((star, index) => (
          <span key={`empty-star-${index}`} style={{ color: '#ccc' }}>{star}</span>
        ))}
        <span>{`${rating} reviews`}</span>
      </div>
      <p>{movieData.mdescription}</p>
      <p>Rating: {movieData.mrating}</p>
    </div>
  );
};

const DateSelection = ({ selectedDate, onSelectDate }) => (
  <div className="date-selection">
    <ul>
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
        <li key={index} className={selectedDate === index ? 'selected' : ''} onClick={() => onSelectDate(index)}>
          {day} <br /> {4 + index} May
        </li>
      ))}
    </ul>
  </div>
);

const ShowTimeSelection = ({ selectedTime, onSelectTime }) => (
  <div className="showtime-selection">
    {['10:00', '13:00', '16:00', '19:00', '21:00'].map((time, index) => (
      <button key={index} className={selectedTime === index ? 'selected' : ''} onClick={() => onSelectTime(index)}>
        {time}
      </button>
    ))}
  </div>
);

const SeatSelection = ({ seats, onSelectSeat }) => {
  const numCols = 5; // Fixed number of columns
  const numRows = Math.ceil(seats.length / numCols); // Calculate the number of rows based on total seats

  return (
    <div className="seat-selection">
      {Array.from({ length: numRows }, (_, rowIndex) => (
        <div key={rowIndex} className="seat-row">
          {Array.from({ length: numCols }, (_, colIndex) => {
            const seatIndex = rowIndex * numCols + colIndex; // Calculate the correct index in the 1D array
             // Ensure the seatIndex is within bounds of the seats array
             if (seatIndex >= seats.length) {
              return null; // Skip rendering if seatIndex is out of bounds
            }
            const seat = seats[seatIndex];
              const seatImage =
                seat.status === 'available'? available : seat.status === 'taken' ? taken : selected;
              return (
                <div
                  key={seatIndex} // Unique key for each seat
                  className="seat"
                  onClick={() => onSelectSeat(seatIndex)} // Pass the correct seat index
                >
                  <img src={seatImage} alt={seat.status} />
                </div>
              );
           
          })}
        </div>
      ))}
    </div>
  );
};

const Summary = ({ selectedSeats, totalCost, onCheckout, seats }) => (
  <div className="summary">
    <p>Movies Selected: {seats}</p>
    <p>Total Cost: {totalCost} Rs</p>
    <button id='rzp-button1' onClick={()=>onCheckout(totalCost)}>CHECKOUT</button>
  </div>
);


const MovieBookings = () => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState(3);
  const amount = useSelector((state)=>state.cart.value)
  const tickets = useSelector((state)=>state.cart.selectedSeats)
  const dispatch = useDispatch()
  const [movieData, setMovieData] = useState(null);
  const {id} = useParams()
  const [seats, setSeats] = useState(
    [{ type: 'regular', status: 'available' }, { type: 'regular', status: 'available' }, { type: 'regular', status: 'taken' },
    { type: 'comfort', status: 'taken' }, { type: 'comfort', status: 'available' }, { type: 'comfort', status: 'taken' },
    { type: 'vip', status: 'available' }, { type: 'vip', status: 'available' }, { type: 'vip', status: 'available' },
    { type: 'vip', status: 'available' }, { type: 'vip', status: 'taken' }, { type: 'vip', status: 'available' },
    { type: 'vip', status: 'available' }, { type: 'vip', status: 'available' }, { type: 'vip', status: 'taken' },
    { type: 'vip', status: 'available' }, { type: 'vip', status: 'available' }, { type: 'vip', status: 'taken' },
    { type: 'regular', status: 'available' }, { type: 'regular', status: 'available' },
  ]);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await fetchMovieDetailsByid(id);  // Fetch data for the current page
            console.log('Fetched data:', data);
            setMovieData(data)
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
    };
    if (id) {
      fetchData();
    }
}, [id]);

  const handleSeatSelection = (seatIndex) => {
    const seat = seats[seatIndex];
    if (seat.status === 'available') {
      dispatch(increment());
      seats[seatIndex] = { status: 'selected' };
    } else if (seat.status === 'selected') {
      dispatch(decrement());
      seats[seatIndex] = { status: 'available' };
    }
    // Update state with new seats array
  };
  
  const handleCheckout = (totalCost) => {
    paymentStart(totalCost);
    dispatch(reset()); // Reset cart after payment
  };

  return (
    <div className="movie-booking">
      <MovieDetails movieData={movieData}/>
      <DateSelection selectedDate={selectedDate} onSelectDate={setSelectedDate} />
      <ShowTimeSelection selectedTime={selectedTime} onSelectTime={setSelectedTime} />
      <SeatSelection seats={seats} onSelectSeat={handleSeatSelection} />
      <Summary selectedSeats={seats} onCheckout={handleCheckout} totalCost={amount} seats={tickets} />
    </div>
  );
};

export default MovieBookings;
