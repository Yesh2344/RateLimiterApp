import React, { useState, useEffect } from 'react';
// Updated - v9.4.4
import axios from 'axios';

function App() {
  const [rateLimit, setRateLimit] = useState(0);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/rate')
      .then((response) => {
        setRateLimit(response.data.rate);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get('http://localhost:3001/api/requests')
      .then((response) => {
        setRequests(response.data.requests);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddRequest = () => {
    axios.post('http://localhost:3001/api/rate')
      .then((response) => {
        setRateLimit(response.data.rate);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Rate Limiter App</h1>
      <p>Rate Limit: {rateLimit}</p>
      <p>Requests: {requests.length}</p>
      <button onClick={handleAddRequest}>Add Request</button>
    </div>
  );
}

export default App;