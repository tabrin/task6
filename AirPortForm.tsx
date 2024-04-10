import React, { useState } from "react";
import Data from "./data.json";
import "./AirPortForm.css";
import Modal from "./Modal";

const Form1: React.FC = () => {
  const [data, setData] = useState(Data);
  const [show, setShow] = useState(true);
  const closeModel = () => {
    setShow(false);
  };

  const addData = (newData: any) => {
    setData([...data, newData]);
  };
  return (
    <>
      <div>
        <form>
          <div>
            <p className="form-text text-center"><strong><h2>Add new Data</h2></strong></p>
            <button className="add-btn" onClick={() => setShow(false)}>
              Add
            </button>
            {show && <Modal closeModel={closeModel} addData={addData} />}
          </div>
          <table>
            <thead>
              <tr>
                <th>AirPort code</th>
                <th>Name</th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
              </tr>
            </thead>

            <tbody>
              {data.map((current, i) => {
                return (
                  <tr key={i}>
                    <td>{current.airPortCode}</td>
                    <td>{current.name}</td>
                    <td>{current.country}</td>
                    <td>{current.state}</td>
                    <td>{current.city}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default Form1;
