import { useState } from "react";
import InputBox from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

import "./App.css";

const [amount, setAmount] = useState(0);
const [from, setFrom] = useState("usd");

function App() {
  return (
    <>
      <h1 className="text-3xl bg-orange-500">Currency Converter</h1>
    </>
  );
}

export default App;
