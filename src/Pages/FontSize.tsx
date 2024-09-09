import { useState, useEffect } from "react";

import { useCreateFontSize } from "../customHooksRQ/Hooks";

const FontSize = () => {

  const [selectedSize, setSelectedSize] = useState("medium");

  const createFontSizeMutation = useCreateFontSize();
  
  const handleSizeChange = (size:string) => {
    setSelectedSize(size);
  };

  const handleSave = () => {
    createFontSizeMutation.mutate({ size: selectedSize });
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
