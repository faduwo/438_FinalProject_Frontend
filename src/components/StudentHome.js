import React, { useState } from 'react';
import { SEMESTERS } from '../constants';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function StudentHome() {
  const [termId, setTermId] = useState(-1);

  const onRadioClick = (event) => {
    const row_id = event.target.parentNode.parentNode.rowIndex - 1;
    console.log("radioClick " + row_id);
    setTermId(row_id);
  };

  const handleMovieSearch = () => {
    // Handle movie search functionality here
    console.log('Perform movie search');
  };

  const handleActorSearch = () => {
    // Handle actor search functionality here
    console.log('Perform actor search');
  };

  const headers = ['Search for movie', 'Search for actor'];

  return (
    <div margin="auto">
      <div>
        {headers.map((title, idx) => (
          <div key={idx}>
            <TextField
              label={title}
              variant="outlined"
              // Add necessary event handlers or state management for these text fields
            />
            <Button
              variant="contained"
              color="primary"
              onClick={idx === 0 ? handleMovieSearch : handleActorSearch}
            >
              Submit
            </Button>
            <br></br>
            <br></br>
          </div>
        ))}
      </div>
      {/* <table className="Center">
        <thead>
          <tr>
            <th>Year</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {SEMESTERS.map((row, idx) => (
            <tr key={idx}>
              <td>{row.year}</td>
              <td>{row.semester}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      {/* <Link id="viewSchedule" to={`/schedule?termId=${termId}`} > View Schedule </Link> */}
    </div>
  );
}

export default StudentHome;
