import { useState } from "react";
import api from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await api.post("/api/auth/signup", {
        username,
        email,
        password,
      });

      setSuccess("Kayıt başarılı! Şimdi giriş yapabilirsin.");
      setTimeout(() => navigate("/signin"), 900);
    } catch (err) {
  console.log("SIGNUP ERROR:", err?.response?.data);

  setError(
    err?.response?.data?.message ||
    JSON.stringify(err?.response?.data) ||
    "Signup başarısız."
  );
} finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleSignup}>
        <h2>Signup</h2>

        <input
          style={styles.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          style={styles.input}
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          style={styles.input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}

        <button style={styles.button} disabled={loading}>
          {loading ? "Kaydediliyor..." : "Signup"}
        </button>

        <p style={{ marginTop: 10 }}>
          Zaten hesabın var mı? <Link to="/signin">Signin</Link>
        </p>
      </form>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "#f6f7fb",
  },
  card: {
    width: 360,
    padding: 22,
    borderRadius: 14,
    background: "white",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  input: {
    padding: 12,
    borderRadius: 10,
    border: "1px solid #ddd",
    outline: "none",
  },
  button: {
    padding: 12,
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    background: "black",
    color: "white",
    fontWeight: 600,
  },
  error: {
    color: "crimson",
    fontSize: 14,
    margin: 0,
  },
  success: {
    color: "green",
    fontSize: 14,
    margin: 0,
  },
};
