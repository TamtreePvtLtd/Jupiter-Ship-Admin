import  {  useState } from "react";

import { useCreateButtonColor } from "../customHooksRQ/Hooks";

function ButtonColor() {
  const [buttonColor, setButtonColor] = useState("#ffffff");
  const [newColor, setNewColor] = useState("");

  const createButtonColorMutation = useCreateButtonColor();

  const handleColorChange = (e: any) => {
    setNewColor(e.target.value);
  };

  const saveColor = () => {
    createButtonColorMutation.mutate({ color: newColor });
    setButtonColor(newColor);
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
