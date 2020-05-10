import React, { Component } from "react";

const table = (props) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Counter Logs</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.logs.map((lg) => (
            <tr key={props.logs.indexOf(lg) + 1}>
              <th scope="row">{props.logs.indexOf(lg) + 1}</th>
              <td>{lg.log}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    props.deleteFunction(lg.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default table;
