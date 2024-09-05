import React, { useState, useEffect } from "react";
import axios from "axios";

const FontSize = () => {
  const [fontSize, setFontSize] = useState("medium");
  const [selectedSize, setSelectedSize] = useState("medium");

  const handleSizeChange = (size:string) => {
    setSelectedSize(size);
  };

  const handleSave = () => {
    axios
      .post("http://localhost:3000/fontSize/setFontSize", {
        size: selectedSize,
      })
      .then((response) => {
        setFontSize(response.data.size);
      })
      .catch((error) => {
        console.error("There was an error saving the font size!", error);
      });
  };

  return (
      <div>
          <h1>select fontSize</h1>
      <label>
        <input
          type="radio"
          value="small"
          checked={selectedSize === "small"}
          onChange={() => handleSizeChange("small")}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          value="medium"
          checked={selectedSize === "medium"}
          onChange={() => handleSizeChange("medium")}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          value="large"
          checked={selectedSize === "large"}
          onChange={() => handleSizeChange("large")}
        />
        Large
      </label>

      <button onClick={handleSave}>Save Font Size</button>
    </div>
  );
};

export default FontSize;
