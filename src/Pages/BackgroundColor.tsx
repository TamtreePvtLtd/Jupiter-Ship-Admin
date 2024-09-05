import React, { useState } from "react";
import axios from "axios";

const Backgroundcolor = () => {
  const [color, setColor] = useState("#ffffff"); // Default color

  const handleColorChange = (event:any) => {
    setColor(event.target.value);
  };

  const saveColor = () => {
    axios
      .post("http://localhost:3000/backgroundcolor/createBackgroundColor", {
        color,
      })
      .then((response) => {
        alert("Color saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving color:", error);
      });
  };

  return (
    <div>
      <h2>Select Backgroundcolor</h2>
      <input type="color" value={color} onChange={handleColorChange} />
      <button onClick={saveColor}>Save Color</button>
    </div>
  );
};

export default Backgroundcolor;
