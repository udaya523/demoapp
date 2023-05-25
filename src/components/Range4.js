
import axios from 'axios';
import React,{useEffect, useState} from 'react';
export default function Range4() {

  useEffect(() => {
    fetchrange4(10000,50000);
  },[]);

  const[data,setData] = useState([]);

  const fetchrange4 = (start,end) => {
    axios.get(`http://localhost:8080/election/constrange/${start}/${end}`).then((respon) => {
      const response = respon.data;
      setData(response);
    } )
  }
  const range4Style = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const range4HeaderStyle = {
    border: '1px solid black',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
  };

  const range4CellStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'center',
  };

  return (
    
    <div>
      <center>
        <h1>Constituency won with margin Range 10000-50000</h1>
        <range4 style={range4Style}>
        <thead>
          <tr>
            <th style={range4HeaderStyle}>Sno</th>
            <th style={range4HeaderStyle}>Constituency Key</th>
            <th style={range4HeaderStyle}>Constituency Name</th>
            <th style={range4HeaderStyle}>Candidate Name</th>
            <th style={range4HeaderStyle}>Party Name</th>
            <th style={range4HeaderStyle}>Total Votes</th>
            <th style={range4HeaderStyle}>Margin</th>
          
          </tr>
        </thead>
        <tbody>
          {data.map((data,index) => (
            <tr key={data.sno}>
              <td style={range4CellStyle}>{index+1}</td>
              <td style={range4CellStyle}>{data.constkey}</td>
              <td style={range4CellStyle}>{data.constname}</td>
              <td style={range4CellStyle}>{data.cname}</td>
              <td style={range4CellStyle}>{data.pname}</td>
              <td style={range4CellStyle}>{data.totvotes}</td>
              <td style={range4CellStyle}>{data.difference}</td>
            </tr>
          ))}
        </tbody>
      </range4>
        </center>
        </div>
  )
}