import React, { useState } from "react";
import { useCreateBackgroundColor } from "../customHooksRQ/Hooks";

const Backgroundcolor = () => {
  const [color, setColor] = useState("#ffffff");

  const createBackgroundColorMutation = useCreateBackgroundColor();

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  const saveColor = () => {
    createBackgroundColorMutation.mutate({ color });
  };

  return (
    <div>
      <h2>Select Background Color</h2>
      <input type="color" value={color} onChange={handleColorChange} />
      <button onClick={saveColor}>Save Color</button>
    </div>
  );
};

export default Backgroundcolor;
