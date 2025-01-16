import React, { useEffect, useState } from 'react';
import { viewBorrowHistory } from  '../api';

const BorrowHistory = ({ token }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await viewBorrowHistory(token);
        setHistory(data);
      } catch (error) {
        console.error('Error fetching borrowing history:', error);
      }
    };
    fetchHistory();
  }, [token]);

  return (
    <div>
      <h2>Borrowing History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item.bookTitle} - {item.borrowDate}</li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowHistory;
