import { useState } from "react";
import MyImage from "./equation.png";
import "./scss/index.css";
export default function App() {
  const [resistorIsOpen, setResistorIsOpen] = useState(false);

  function handleClick() {
    setResistorIsOpen(!resistorIsOpen);
  }
  return (
    <>
      <Resistor handleClick={handleClick} />
      {resistorIsOpen && <ResistorPlatform />}
    </>
  );
}

function Resistor({ handleClick }) {
  return (
    <>
      <div className="resistorDiv" onClick={handleClick}>
        <img src="https://cdn-icons-png.flaticon.com/512/9054/9054099.png" />
      </div>
    </>
  );
}
function ResistorPlatform() {
  return (
    <div className="resistorPlatform">
      <img src={MyImage} />
      <label className="nameLabel" for="nameInput">
        Nazwa
      </label>
      <input className="nameInput" type="text"></input>
      <label className="voltageLabel" for="voltageInput">
        Napięcie(V)
      </label>
      <input className="voltageInput" type="text"></input>
      <label className="intensityLabel" for="intensityInput">
        Natężenie(A)
      </label>
      <input className="intensityInput" type="text"></input>
      <table className="table">
        <tr>
          <th>Nazwa</th>
          <th>Napięcie(U)</th>
          <th>Natężenie(I)</th>
          <th>Delta napięcia (dU)</th>
          <th>Delta natężenia (dI)</th>
        </tr>
        <tr>
          <td>A1</td>
          <td>0.9952</td>
          <td>0.1026</td>
          <td>0.0005</td>
          <td>0.082</td>
        </tr>
        <tr>
          <td>A1</td>
          <td>0.9952</td>
          <td>0.1026</td>
          <td>0.0005</td>
          <td>0.082</td>
        </tr>
      </table>
    </div>
  );
}
