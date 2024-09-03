import { useState } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  const [count, setCount] = useState(0);
  const [scale, setScale] = useState(1);

  const handleCatClick = () => {
    setCount(count + 1);
    setScale(0.8);

    setTimeout(() => {
      setScale(1);
    }, 300);
  };

  return (
    <div className="App">
      <h2 className="sus">We are open!</h2>
      <div className="center">
        <img
          alt="cat"
          src="img1.jpg"
          className="cat"
          style={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}
          onClick={handleCatClick}
        />
      </div>
      <h3>{count}</h3>
      <div className='center margin-top'>
       <button>Get real</button>
      </div>
    </div>
  );
}

export default App;
