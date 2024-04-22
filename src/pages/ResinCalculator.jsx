import React, { useState } from "react";

function ResinCalculator() {
  const [shape, setShape] = useState("");
  const [length, setLength] = useState("");
  const [breadth, setBreadth] = useState("");
  const [radius, setRadius] = useState("");
  const [thickness, setThickness] = useState("");
  const [volume, setVolume] = useState(0);

  const calculateVolume = () => {
    if (shape === "rectangle") {
      setVolume(length * breadth * thickness);
    } else if (shape === "circle") {
      setVolume(Math.PI * radius * radius * thickness);
    }
  };

  return (
    <div className="cccontainer">
      <h2>Twine Specialties Special Resin Calculator</h2>
      <div>
        <label>Select Type of Resin:</label>
        <select value={shape} onChange={(e) => setShape(e.target.value)}>
          <option value="">Select</option>
          <option value="rectangle">Rectangle</option>
          <option value="circle">Circle</option>
        </select>
      </div>
      {shape === "rectangle" && (
        <>
          <div>
            <label>Length (in inches):</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div>
            <label>Breadth (in inches):</label>
            <input
              type="number"
              value={breadth}
              onChange={(e) => setBreadth(e.target.value)}
            />
          </div>
        </>
      )}
      {shape === "circle" && (
        <div>
          <label>Radius (in inches):</label>
          <input
            type="number"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
          />
        </div>
      )}
      {shape && (
        <div>
          <label>Thickness (in inches):</label>
          <input
            type="number"
            value={thickness}
            onChange={(e) => setThickness(e.target.value)}
          />
        </div>
      )}
      <button onClick={calculateVolume}>Calculate Volume</button>
      <h3>Volume: {volume}</h3>
    </div>
  );
}

export default ResinCalculator;
