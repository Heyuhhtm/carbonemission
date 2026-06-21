import Navbar from "../components/Navbar";
import CarbonChart from "../components/CarbonChart";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>Dashboard</h1>

        <h3>Total Carbon Footprint</h3>

        <CarbonChart />

        <ul>
          <li>Use public transport</li>
          <li>Switch to LED bulbs</li>
          <li>Reduce electricity consumption</li>
        </ul>
      </div>
    </>
  );
}

export default Dashboard;