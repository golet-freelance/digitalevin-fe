import { useState } from "react";
import api from "../api/axios";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { username, token, logout } = useAuth();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [error, setError] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  const fetchUsers = async () => {
    setError("");
    setLoadingUsers(true);

    try {
      // GET http://104.248.45.5:8080/api/users
      const res = await api.get("/api/users");
      setUsers(res.data);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Users çekilemedi. Token geçersiz olabilir."
      );
    } finally {
      setLoadingUsers(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>Dashboard</h2>

        <p>
          Hoşgeldin <b>{username}</b>
        </p>

        <p style={{ fontSize: 13, wordBreak: "break-all" }}>
          <b>Token:</b> {token}
        </p>

        <div style={styles.row}>
          <button style={styles.button} onClick={fetchUsers} disabled={loadingUsers}>
            {loadingUsers ? "Yükleniyor..." : "Kullanıcıları Listele"}
          </button>

          <button style={styles.logout} onClick={handleLogout}>
            Logout
          </button>
        </div>

        {error && <p style={styles.error}>{error}</p>}

        {users?.length > 0 && (
          <div style={{ marginTop: 16 }}>
            <h3>Kullanıcı Listesi</h3>

            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>#</th>
                  <th style={styles.th}>Username</th>
                  <th style={styles.th}>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, i) => (
                  <tr key={u.id || i}>
                    <td style={styles.td}>{u.id ?? i + 1}</td>
                    <td style={styles.td}>{u.username}</td>
                    <td style={styles.td}>{u.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {users?.length === 0 && (
          <p style={{ marginTop: 14, color: "#666" }}>
            Henüz kullanıcı listesi çekilmedi.
          </p>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "#f6f7fb",
    padding: 18,
  },
  card: {
    width: "min(900px, 100%)",
    padding: 22,
    borderRadius: 14,
    background: "white",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  row: {
    display: "flex",
    gap: 10,
    marginTop: 10,
    flexWrap: "wrap",
  },
  button: {
    padding: "12px 14px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    background: "black",
    color: "white",
    fontWeight: 600,
  },
  logout: {
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #ddd",
    cursor: "pointer",
    background: "white",
    color: "black",
    fontWeight: 600,
  },
  error: {
    marginTop: 12,
    color: "crimson",
    fontSize: 14,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: 10,
  },
  th: {
    textAlign: "left",
    padding: 10,
    borderBottom: "1px solid #eee",
    fontSize: 14,
  },
  td: {
    padding: 10,
    borderBottom: "1px solid #f2f2f2",
    fontSize: 14,
  },
};
