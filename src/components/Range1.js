
import axios from 'axios';
import React,{useEffect, useState} from 'react';
export default function Range1() {

  useEffect(() => {
    fetchRange1(1,100);
  },[]);

  const[data,setData] = useState([]);

  const fetchRange1 = (start,end) => {
    axios.get(`http://localhost:8080/election/constrange/${start}/${end}`).then((respon) => {
      const response = respon.data;
      setData(response);
    } )
  }
  const range1Style = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const range1HeaderStyle = {
    border: '1px solid black',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
  };

  const range1CellStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'center',
  };

  return (
    
    <div>
      <center>
        <h1>Constituency won with margin Range 1-100</h1>
        <range1 style={range1Style}>
        <thead>
          <tr>
            <th style={range1HeaderStyle}>Sno</th>
            <th style={range1HeaderStyle}>Constituency Key</th>
            <th style={range1HeaderStyle}>Constituency Name</th>
            <th style={range1HeaderStyle}>Candidate Name</th>
            <th style={range1HeaderStyle}>Party Name</th>
            <th style={range1HeaderStyle}>Total Votes</th>
            <th style={range1HeaderStyle}>Margin</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data,index) => (
            <tr key={data.sno}>
              <td style={range1CellStyle}>{index+1}</td>
              <td style={range1CellStyle}>{data.constkey}</td>
              <td style={range1CellStyle}>{data.constname}</td>
              <td style={range1CellStyle}>{data.cname}</td>
              <td style={range1CellStyle}>{data.pname}</td>
              <td style={range1CellStyle}>{data.totvotes}</td>
              <td style={range1CellStyle}>{data.difference}</td>
            </tr>
          ))}
        </tbody>
      </range1>
        </center>
        </div>
  )
}
