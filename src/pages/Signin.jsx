import { useState } from "react";
import api from "../api/axios";
import { useAuth } from "../auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signin } = useAuth();
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/api/auth/signin", {
        username,
        password,
      });

      signin({
        token: res.data.token,
        username: res.data.username,
      });

      navigate("/dashboard");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Signin başarısız. Kullanıcı adı veya şifre yanlış."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleSignin}>
        <h2>Signin</h2>

        <input
          style={styles.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

        <button style={styles.button} disabled={loading}>
          {loading ? "Giriş yapılıyor..." : "Signin"}
        </button>

        <p style={{ marginTop: 10 }}>
          Hesabın yok mu? <Link to="/signup">Signup</Link>
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
};
