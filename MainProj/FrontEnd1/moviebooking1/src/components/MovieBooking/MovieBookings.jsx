import React, { useState } from 'react';
import './MovieBooking.css';
import available from './seat_availabale.png'
import taken from './seat_booked.png'
import selected from './seat_selected.png'
import { paymentStart } from '../../Services/Payment';

const MovieDetails = () => (
  <div className="movie-details">
    <img src="https://example.com/wolverine.jpg" alt="The Wolverine 2013" />
    <h2>The Wolverine 2013</h2>
    <div className="rating">
      <span>⭐️⭐️⭐️⭐️⭐️</span>
      <span>129 reviews</span>
    </div>
    <p>Duration: 2h 46min</p>
    <p>Type: Action, Thriller</p>
    <p>Premiere: 8 November 2020</p>
  </div>
);

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

const Summary = ({ selectedSeats, totalCost }) => (
  <div className="summary">
    <p>Total: ${totalCost}</p>
    <button id='rzp-button1' onClick={()=>onCheckout(totalCost)}>CHECKOUT</button>
  </div>
);

const onCheckout = (totalCost) => {
  paymentStart(totalCost)
}

const MovieBookings = () => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState(3);
  const [seats, setSeats] = useState(
    [{ type: 'regular', status: 'taken' }, { type: 'regular', status: 'taken' }, { type: 'regular', status: 'taken' },
    { type: 'comfort', status: 'taken' }, { type: 'comfort', status: 'taken' }, { type: 'comfort', status: 'taken' },
    { type: 'vip', status: 'available' }, { type: 'vip', status: 'available' }, { type: 'vip', status: 'available' },
    { type: 'vip', status: 'available' }, { type: 'vip', status: 'available' }, { type: 'vip', status: 'available' },
    { type: 'vip', status: 'available' }, { type: 'vip', status: 'available' }, { type: 'vip', status: 'available' },
    { type: 'vip', status: 'available' }, { type: 'vip', status: 'available' }, { type: 'vip', status: 'available' },
    { type: 'regular', status: 'available' }, { type: 'regular', status: 'available' },
  ]);

  const handleSeatSelection = (seatIndex) => {
    const newSeats = seats.map((seat, index) =>
      index === seatIndex
        ? seat.status === 'available'
          ? { ...seat, status: 'selected' }
          : seat.status === 'selected'
          ? { ...seat, status: 'available' }
          : seat
        : seat
    );
    setSeats(newSeats);
  };
  
  

  const totalCost = 120; // Calculate this based on selected seats

  return (
    <div className="movie-booking">
      <MovieDetails />
      <DateSelection selectedDate={selectedDate} onSelectDate={setSelectedDate} />
      <ShowTimeSelection selectedTime={selectedTime} onSelectTime={setSelectedTime} />
      <SeatSelection seats={seats} onSelectSeat={handleSeatSelection} />
      <Summary selectedSeats={seats} totalCost={totalCost} />
    </div>
  );
};

export default MovieBookings;
