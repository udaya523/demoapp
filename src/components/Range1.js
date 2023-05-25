
// import axios from 'axios';
// import React,{useEffect, useState} from 'react';
// export default function Range1() {

//   useEffect(() => {
//     fetchRange1(1,100);
//   },[]);

//   const[data,setData] = useState([]);

//   const fetchRange1 = (start,end) => {
//     axios.get(`http://localhost:8080/election/constrange/${start}/${end}`).then((respon) => {
//       const response = respon.data;
//       setData(response);
//     } )
//   }
//   const range1Style = {
//     borderCollapse: 'collapse',
//     width: '100%',
//   };

//   const range1HeaderStyle = {
//     border: '1px solid black',
//     padding: '8px',
//     backgroundColor: '#f2f2f2',
//     textAlign: 'center',
//   };

//   const range1CellStyle = {
//     border: '1px solid black',
//     padding: '8px',
//     textAlign: 'center',
//   };

//   return (
    
//     <div>
//       <center>
//         <h1>Constituency won with margin Range 1-100 </h1>
//         <range1 style={range1Style}>
//         <thead>
//           <tr>
//             <th style={range1HeaderStyle}>Sno</th>
//             <th style={range1HeaderStyle}>Constituency Key</th>
//             <th style={range1HeaderStyle}>Constituency Name</th>
//             <th style={range1HeaderStyle}>Candidate Name</th>
//             <th style={range1HeaderStyle}>Party Name</th>
//             <th style={range1HeaderStyle}>Total Votes</th>
//             <th style={range1HeaderStyle}>Margin</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((data,index) => (
//             <tr key={data.sno}>
//               <td style={range1CellStyle}>{index+1}</td>
//               <td style={range1CellStyle}>{data.constkey}</td>
//               <td style={range1CellStyle}>{data.constname}</td>
//               <td style={range1CellStyle}>{data.cname}</td>
//               <td style={range1CellStyle}>{data.pname}</td>
//               <td style={range1CellStyle}>{data.totvotes}</td>
//               <td style={range1CellStyle}>{data.difference}</td>
//             </tr>
//           ))}
//         </tbody>
//       </range1>
//         </center>
//         </div>
//   )
// }

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Range1() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRange1(1, 100);
  }, []);

  const fetchRange1 = (start, end) => {
    setIsLoading(true); // Set loading state to true

    axios.get(`http://localhost:8080/election/constrange/${start}/${end}`)
      .then((response) => {
        const responseData = response.data;
        setData(responseData);
      })
      .finally(() => {
        setIsLoading(false); // Set loading state to false after the request is completed
      });
  };

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
        {isLoading ? ( // Render loading button if isLoading is true
          // <button disabled>Loading...</button>
          <FontAwesomeIcon icon={faSpinner} spin size="3x" /> // Display loader icon while loading
        ) : (
          <center>
          <table style={range1Style}>
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
              {data.map((rowData, index) => (
                <tr key={rowData.sno}>
                  <td style={range1CellStyle}>{index + 1}</td>
                  <td style={range1CellStyle}>{rowData.constkey}</td>
                  <td style={range1CellStyle}>{rowData.constname}</td>
                  <td style={range1CellStyle}>{rowData.cname}</td>
                  <td style={range1CellStyle}>{rowData.pname}</td>
                  <td style={range1CellStyle}>{rowData.totvotes}</td>
                  <td style={range1CellStyle}>{rowData.difference}</td>
                </tr>
                
              )
              )}
            </tbody>
          </table>
          </center>
        ) 
        }
      </center>
    </div>
  );
}

