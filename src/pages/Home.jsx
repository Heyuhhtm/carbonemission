import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>CarbonTrack</h1>

        <h2>Track Your Carbon Footprint</h2>

        <p>
          Calculate your daily environmental impact and get recommendations.
        </p>
      </div>
    </>
  );
}

export default Home;