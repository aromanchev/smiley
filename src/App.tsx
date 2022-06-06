import { useEffect, useState } from "react";
import { useWeb3 } from "./hooks/web3";

import { Introduce } from "./blocks";

import "./App.css";

const App = () => {
  const { getAccount, getContract } = useWeb3();

  useEffect(() => {
    getAccount();
    getContract();
  }, []);

  return (
    <div className="web3-dApp">
      <Introduce />
    </div>
  );
};

export default App;
