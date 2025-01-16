import React from 'react';

function History({ borrowHistory }) {
  return (
    <div>
      <h2>Borrowing History</h2>
      {borrowHistory.length > 0 ? (
        <ul>
          {borrowHistory.map((record, index) => (
            <li key={index}>
              <p>Book Title: {record.bookTitle}</p>
              <p>Borrowed On: {record.borrowedOn}</p>
              <p>Returned On: {record.returnedOn || 'Not Returned'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No borrowing history available.</p>
      )}
    </div>
  );
}

export default History;
