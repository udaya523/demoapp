
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Range2() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetchrange2(100,1000);
  },[]);

  const fetchrange2 = (start,end) => {
    axios.get(`http://localhost:8080/election/constrange/${start}/${end}`).then((respon) => {
      const response = respon.data;
      setData(response);
    } )
    .finally(() => {
      setIsLoading(false); // Set loading state to false after the request is completed
    });
  }

  const range2Style = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const range2HeaderStyle = {
    border: '1px solid black',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
  };

  const range2CellStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'center',
  };

  return (
    
    <div>
      <center>
        <h1>Constituency won with margin Range 100-1000</h1>
        {isLoading ? ( // Render loading button if isLoading is true
          // <button disabled>Loading...</button>
          <FontAwesomeIcon icon={faSpinner} spin size="3x" /> // Display loader icon while loading
        ) : (
        <range2 style={range2Style}>
        <thead>
          <tr>
            <th style={range2HeaderStyle}>Sno</th>
            <th style={range2HeaderStyle}>Constituency Key</th>
            <th style={range2HeaderStyle}>Constituency Name</th>
            <th style={range2HeaderStyle}>Candidate Name</th>
            <th style={range2HeaderStyle}>Party Name</th>
            <th style={range2HeaderStyle}>Total Votes</th>
            <th style={range2HeaderStyle}>Margin</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data,index) => (
            <tr key={data.sno}>
              <td style={range2CellStyle}>{index+1}</td>
              <td style={range2CellStyle}>{data.constkey}</td>
              <td style={range2CellStyle}>{data.constname}</td>
              <td style={range2CellStyle}>{data.cname}</td>
              <td style={range2CellStyle}>{data.pname}</td>
              <td style={range2CellStyle}>{data.totvotes}</td>
              <td style={range2CellStyle}>{data.difference}</td>
            </tr>
          ))}
        </tbody>

      </range2>
      )}
        </center>
        </div>
  )
}
