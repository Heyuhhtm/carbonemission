import { useState } from "react";

function CarbonForm() {
  const [distance, setDistance] = useState("");
  const [mode, setMode] = useState("car");
  const [result, setResult] = useState(null);

  const calculateEmission = () => {
    const factors = {
      car: 0.21,
      bike: 0.1,
      bus: 0.08,
      train: 0.04,
      walking: 0,
    };

    const emission = distance * factors[mode];

    setResult(emission.toFixed(2));
  };

  return (
    <div>
      <h2>Carbon Calculator</h2>

      <input
        type="number"
        placeholder="Distance (km)"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />

      <br />
      <br />

      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="car">Car</option>
        <option value="bike">Bike</option>
        <option value="bus">Bus</option>
        <option value="train">Train</option>
        <option value="walking">Walking</option>
      </select>

      <br />
      <br />

      <button onClick={calculateEmission}>Calculate</button>

      {result && (
        <h3>Your Estimated Emission: {result} kg CO₂</h3>
      )}
    </div>
  );
}

export default CarbonForm;