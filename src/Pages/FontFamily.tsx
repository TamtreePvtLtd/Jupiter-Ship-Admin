import React, { useState, useEffect } from "react";

const FontFamily = () => {
  const [fontFamily, setFontFamily] = useState("");
  const availableFonts = [
    "Arial",
    "Times New Roman",
    "Courier New",
    "Georgia",
    "Verdana",
    "Gigi",
    "cursive",
  ];

  

  const handleFontFamilyChange = (event:any) => {
    const selectedFont = event.target.value;
    setFontFamily(selectedFont);

    fetch("http://localhost:3000/fontfamilyFontSize/setFontConfig", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fontFamily: selectedFont }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Font family updated:", data.fontFamily);
      })
      .catch((error) => {
        console.error("Error updating font family:", error);
      });
  };

  return (
    <div>
      <h1>select FontFamily</h1>
      <div>
        <label htmlFor="fontFamily">Select Font Family:</label>
        <select
          id="fontFamily"
          value={fontFamily}
          onChange={handleFontFamilyChange}
        >
          {availableFonts.map((font, index) => (
            <option key={index} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginTop: "20px" }}>
        <p style={{ fontFamily: fontFamily }}>
          Preview text with the selected font family.
        </p>
      </div>
    </div>
  );
};

export default FontFamily;
