import "./App.css";
import { useEffect, useState } from "react";
import Employee from "./employee.component.js";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const val = await fetch(
          "https://bafybeifvzmrqbr64fb5djfxli5rfaylkb2bj3dti3azr7mqr245lcg4sze.ipfs.w3s.link/new.json"
        );
        const response = await val.json();
        console.log(response);
        setData(() => response);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAPI();
  }, []);
  return (
    <div className="App">
      <div className="navbar">
        <span>Employee Details</span>
        <span style={{ fontWeight: 500 }}></span>
      </div>
      <div className="emp-container">
        <Employee />
      </div>
    </div>
  );
}

export default App;
