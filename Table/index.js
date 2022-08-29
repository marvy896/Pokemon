import React from "react";

function Table({ headers = [], tabledata = [], datakeys = [] }) {
 
  return (
    <table>
      <thead>
        <tr>
          {headers.map((text, index) => (
            <th key={index}>{text}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tabledata.length > 0 &&
          tabledata.map((datum, index) => (
            <tr key={index}>
              {datakeys.map(datakey => datum[datakey]).map((value, index) => (
                <td key={index}>{String(value)}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;