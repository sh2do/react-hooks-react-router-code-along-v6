import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import NavBar from "../components/NavBar"; // 👈 import the NavBar

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((r) => r.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const userList = users.map((user) => <UserCard key={user.id} user={user} />);

  return (
    <>
      <header>
        <NavBar /> {/* 👈 NavBar component placed here */}
      </header>
      <main>
        <h1>Home!</h1>
        {userList}
      </main>
    </>
  );
}

export default Home;
