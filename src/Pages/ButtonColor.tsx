import React, { useEffect, useState } from "react";
import axios from "axios";

function ButtonColor() {
  const [buttonColor, setButtonColor] = useState("#ffffff");
  const [newColor, setNewColor] = useState("");

 

  const handleColorChange = (e:any) => {
    setNewColor(e.target.value);
  };

  const saveColor = () => {
    // Post the new color to the API
    axios
      .post("http://localhost:3000/buttonColor/ButtonColor", {
        color: newColor,
      })
      .then((response) => {
        setButtonColor(response.data.color);
        setNewColor("");
      })
      .catch((error) => {
        console.error("Error updating button color:", error);
      });
  };

  return (
    <div>
      <h2>Select ButtonColor</h2>
      <input type="color" value={newColor} onChange={handleColorChange} />
      <button onClick={saveColor}>Save Color</button>
      <div>
        <p>Current Button Color:</p>
        <button style={{ backgroundColor: buttonColor, color: "#fff" }}>
          Sample Button
        </button>
      </div>
    </div>
  );
}

export default ButtonColor;
