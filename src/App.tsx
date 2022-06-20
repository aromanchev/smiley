import { useEffect } from "react";
import { useWeb3 } from "./hooks";

import { Introduce } from "./blocks";

import "./App.css";

const App = () => {
  const { getAccount } = useWeb3();
  useEffect(() => {
    getAccount();
  }, []);
  return (
    <div className="web3-dApp">
      <Introduce />
    </div>
  );
};

export default App;
