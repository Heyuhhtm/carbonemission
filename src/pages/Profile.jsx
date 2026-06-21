import Navbar from "../components/Navbar";

function Profile() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h2>User Profile</h2>

        <p>Name: Demo User</p>

        <p>Green Score: 78/100</p>

        <p>Carbon Saved: 120 kg CO₂</p>
      </div>
    </>
  );
}

export default Profile;