import { useEffect, useState } from "react";
import { useWeb3 } from "./hooks";

import { Header } from "./components";
import { Market } from "./blocks";

import "./styles/App.scss";

const App = () => {
  const { getAccount } = useWeb3();
  useEffect(() => {
    getAccount();
  }, []);
  return (
    <div className="smiley-dApp">
      <Header />
      <Market />
    </div>
  );
};

export default App;
