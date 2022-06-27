import { useEffect, useState } from "react";
import { useWeb3 } from "./hooks";

import { Introduce } from "./blocks";

import { Header } from "./components";

import "./styles/App.scss";

const App = () => {
  const { getAccount } = useWeb3();
  useEffect(() => {
    getAccount();
  }, []);
  return (
    <div className="web3-dApp">
      <Header />
      <Introduce />
    </div>
  );
};

export default App;
