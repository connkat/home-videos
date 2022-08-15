import {useState, useEffect} from 'react';
function App() {
  const [users, setUsers] = useState("");
  useEffect(() => {
    getUser();
  }, []);
  function getUser() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setUsers(data);
      });
  }
  function createUser() {
    let name = prompt('Enter user name');
    let email = prompt('Enter user email');
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getUser();
      });
  }
  return (
    <div>
      {users ? users : 'There is no user data available'}
      <br />
      <button onClick={createUser}>Add user</button>
    </div>
  );
}
export default App;