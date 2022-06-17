import { useEffect } from "react";
import { useWeb3 } from "./hooks";

import { Introduce } from "./blocks";

import "./App.css";

const App = () => {
  const { getAccount, getBaseURI } = useWeb3();
  useEffect(() => {
    getAccount();
    getBaseURI();
  }, []);
  return (
    <div className="web3-dApp">
      <Introduce />
    </div>
  );
};

export default App;
