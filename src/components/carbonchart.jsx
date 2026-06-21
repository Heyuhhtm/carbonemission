import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function CarbonChart() {
  const data = {
    labels: ["Transport", "Electricity", "Food", "Waste"],
    datasets: [
      {
        label: "Carbon Footprint",
        data: [40, 25, 20, 15],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "400px" }}>
      <Pie data={data} />
    </div>
  );
}

export default CarbonChart;