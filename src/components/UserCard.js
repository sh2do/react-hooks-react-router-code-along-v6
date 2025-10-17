import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <article
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "8px",
      }}
    >
      <h2>{user.name}</h2>
      <p>
        <Link to={`/profile/${user.id}`}>View Profile</Link>
      </p>
    </article>
  );
}

export default UserCard;
