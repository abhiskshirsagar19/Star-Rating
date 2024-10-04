import { useState } from "react";

import "./App.css";

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <>
      <div className="App">
        <h1>Star Rating App</h1>
        <div>
          {[1, 2, 3, 4, 5].map((num, index) => (
            <button
              key={index}
              onClick={() => setRating(num)}
              onMouseOver={() => setHover(num)}
              onMouseLeave={() => setHover(rating)}
            >
              <span
                className={`star ${
                  num <= ((rating && hover) || hover) ? "on" : "off"
                }`}
              >
                &#9733;
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
