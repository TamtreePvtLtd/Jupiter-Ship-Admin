import { useState } from "react";
import { useCreateFontFamily } from "../customHooksRQ/Hooks";

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

  const createFontFamilyMutation = useCreateFontFamily();

  const handleFontFamilyChange = (event: any) => {
    const selectedFont = event.target.value;
    setFontFamily(selectedFont);
    createFontFamilyMutation.mutate({ fontFamily: selectedFont });
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
