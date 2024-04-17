import { useState } from "react";

type User = {
  username: string;
  id: number;
};

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      <div className=""></div>
    </>
  );
}

export default App;
