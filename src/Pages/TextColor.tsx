import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Typography } from "@mui/material";

const TextColor = () => {
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  const fetchTextColor = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/textcolor/getTextColor"
      );
      setSelectedColor(response.data.color);
    } catch (error) {
      console.error("Error fetching text color:", error);
    }
  };

  const saveTextColor = async () => {
    try {
      await axios.post("http://localhost:3000/textcolor/createTextColor", {
        color: selectedColor,
      });
      alert("Color saved successfully");
    } catch (error) {
      console.error("Error saving text color:", error);
    }
  };

  useEffect(() => {
    fetchTextColor();
  }, []);

  const handleChangeColor = (e: any) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <h2>Admin Text Color Management</h2>

      <input
        type="color"
        value={selectedColor}
        onChange={handleChangeColor}
        style={{ marginBottom: "20px", padding: "10px" }}
      />

      <Typography variant="h5" style={{ color: selectedColor }}>
        This is a preview text with the selected color.
      </Typography>

      <Button variant="contained" color="primary" onClick={saveTextColor}>
        Save Text Color
      </Button>
    </div>
  );
};

export default TextColor;
