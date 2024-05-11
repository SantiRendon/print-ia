import { useEffect, useState } from 'react';
import VerificationButton from './components/VerificationButton';
import { print_backend } from 'declarations/print_backend';

function Example2() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState([])
  const [loading, setLoading] = useState("");


  useEffect(() => {
    getUsers()
  }, []);

  // useEffect(() => {
  //   console.log(users);
  //   console.log(users[0].id);
  //   if (users[0]?.id) {
  //     setUserId(users[0]?.id)
  //     console.log("added user id")
  //   }
  //   console.log(users[0]?.id);
  // }, [users]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await print_backend.readUserById(userId);
        console.log("by id: ", user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchData();
  }, [userId]);


  const getUsers = async () => {
    setLoading("loading...");

    const users = await print_backend.readUsers()

    setUsers(users);

    setLoading("")
  }

  const modUser = async () => {
    setLoading("loading...");

    const users = await print_backend.createUser('finger-scfdwfaf')

    console.log("mod insert")
    setUsers(users);

    setLoading("")
  }

  return (
    <>
      <button onClick={modUser}>
        click :D
      </button>
      <VerificationButton />
    </>
  );
}

export default Example2;
