import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Table3() {
  useEffect(() => {
    fetchTable3();
  },[]);

  const[data,setData] = useState([]);

  const fetchTable3 = () => {
    axios.get('http://localhost:8080/election/more').then((respon) => {
      const response = respon.data;
      setData(response);
    } )
  }

  const table3Style = {
        borderCollapse: 'collapse',
        width: '100%',
      };
    
      const table3HeaderStyle = {
        border: '1px solid black',
        padding: '8px',
        backgroundColor: '#f2f2f2',
        textAlign: 'center',
      };
    
      const table3CellStyle = {
        border: '1px solid black',
        padding: '8px',
        textAlign: 'center',
      };


    return (
      <>
      <br/>
      <Link to="/reports">
          <button className="btn btn-secondary mx-2">
              Back
          </button>
      </Link>
      <br/>
      <br/>
      <div>
          <center>
              <h2>Candidates contesting in more than one constituency </h2>
          </center>
      </div>
      <br/>
      {/* <button onClick={fetchTable3()}>click here!</button> */}
      <center>
      <table3 style={table3Style}>
        <thead>
          <tr>
            <th style={table3HeaderStyle}>Sno</th>
            <th style={table3HeaderStyle}>Candidate Name</th>
            <th style={table3HeaderStyle}>Number of Constituencies he participated in</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data,index) => (
            <tr key={data.sno}>
              <td style={table3CellStyle}>{index+1}</td>
              <td style={table3CellStyle}>{data.cname}</td>
              <td style={table3CellStyle}>{data.num_of_constituencies}</td>
            </tr>
          ))}
        </tbody>
      </table3>
      </ center>
      </>
    );
}