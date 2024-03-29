import { useEffect, useState } from "react";
import { useWeb3 } from "./hooks";

import { Header, WalletModal } from "./components";
import { Market } from "./blocks";

import "./styles/App.scss";

const App = () => {
  const { connectAccount, isConnected } = useWeb3();
  const [connected, setConnected] = useState(true);
  useEffect(() => {
    connectAccount();
    isConnected().then(setConnected);
  }, []);
  return (
    <div className="smiley-dApp">
      <Header />
      <Market />
      {!connected && <WalletModal />}
    </div>
  );
};

export default App;
