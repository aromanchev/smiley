import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { initWeb3 } from "./utils/web3";
import { Introduce } from "./blocks";

const App = () => {
  useEffect(() => {
    initWeb3();
  }, []);

  return (
    <div className="web3-dApp">
      <Introduce />
    </div>
  );
};

export default App;
