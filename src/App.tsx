import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="">
        <header class="m-auto">
          <p
            class="text-2xl underline underline-offset-8 font-['Menlo'] 
          hover:underline-offset-4 hover:text-3xl hover:border-red-500 
           hover:border-4 hover:p-4 hover:cursor-pointer"
          >
            wagwann
          </p>
        </header>
      </div>
    </>
  );
}

export default App;
