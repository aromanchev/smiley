import { WarningIcon } from "../../assets/icons";
import "./WalletModal.scss";

const WalletModal = () => (
  <div className="wallet-modal">
    <WarningIcon width={140} height={110} />
    <h1>Please connect wallet to Smiley dApp.</h1>
  </div>
);

export default WalletModal;
