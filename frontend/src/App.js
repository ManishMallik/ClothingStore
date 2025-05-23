import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [msg, setMsg] = useState('Hello World!');

  const fetchMsg = () => {
    fetch('/purchase/hello') // assumes you set proxy in package.json; otherwise use full URL
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch((err) => {
        console.error('Failed to fetch:', err);
        setMsg('Error fetching message');
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={fetchMsg} style={{ marginTop: '20px' }}>
          Get Backend Message
        </button>

        {msg && <p style={{ marginTop: '10px' }}>Backend says: {msg}</p>}
      </header>
    </div>
  );
}

export default App;
