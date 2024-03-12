import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Background_changer from "./components/Background_changer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Background_changer />
    </>
  );
}

export default App;
