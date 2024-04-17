import React, { useState, useEffect, useRef } from "react";

type User = {
  username: string;
  id: number;
};

const divs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [selected, setSelected] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelected(Math.floor(Math.random() * 9));
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleClick = (key: number) => {
    if (key === selected) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => prevScore - 1);
    }
  };

  return (
    <div className="full-screen items-center justify-center flex flex-col">
      <div>{score}</div>
      <div className="grid grid-cols-3 bg-red-400">
        {divs.map((key) => (
          <div
            onClick={() => handleClick(key)}
            key={key}
            className="text-red-200 p-20 hover:cursor-pointer"
            style={{
              backgroundColor: selected === key ? "red" : "blue",
            }}
          >
            {key}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
