import './App.css';
import { useEffect } from 'react';
import axios from 'axios';


function App() {
  useEffect(() => {
    axios.get('/users').then(data => {
      console.log(data);
    })
  }, [])

  return (
    <div className="App">
      <h1>Hi!</h1>
    </div>
  );
}

export default App;
