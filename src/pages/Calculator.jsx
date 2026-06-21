import Navbar from "../components/Navbar";
import CarbonForm from "../components/CarbonForm";

function Calculator() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <CarbonForm />
      </div>
    </>
  );
}

export default Calculator;