import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h2>Login</h2>

        <input placeholder="Email" />
        <br />
        <br />

        <input placeholder="Password" type="password" />
        <br />
        <br />

        <button>Login</button>
      </div>
    </>
  );
}

export default Login;