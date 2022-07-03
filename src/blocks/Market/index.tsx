import { ETHIcon } from "../../assets/icons";
import "./index.scss";

const Market = () => {
  return (
    <div className="container smiley-market">
      <h2>market.</h2>
      <div className="smiley-market-container">
        <div className="smiley-market-container-card">
          <img alt="smiley img" width={350} height={350} src="/1.png" />
          <div className="smiley-market-container-card-info">
            <h3>Smiley NFT #1</h3>
            <div className="smiley-market-container-card-info-cost">
              <ETHIcon width={32} height={32} />
              <span>0,08 ETH</span>
            </div>
            <button>mint.</button>
          </div>
        </div>
        <div className="smiley-market-container-card">
          <img alt="smiley img" width={350} height={350} src="/2.png" />
          <div className="smiley-market-container-card-info">
            <h3>Smiley NFT #2</h3>
            <div className="smiley-market-container-card-info-cost">
              <ETHIcon width={32} height={32} />
              <span>0,08 ETH</span>
            </div>
            <button>mint.</button>
          </div>
        </div>
        <div className="smiley-market-container-card">
          <img alt="smiley img" width={350} height={350} src="/3.png" />
          <div className="smiley-market-container-card-info">
            <h3>Smiley NFT #3</h3>
            <div className="smiley-market-container-card-info-cost">
              <ETHIcon width={32} height={32} />
              <span>0,08 ETH</span>
            </div>
            <button>mint.</button>
          </div>
        </div>
        <div className="smiley-market-container-card">
          <img alt="smiley img" width={350} height={350} src="/4.png" />
          <div className="smiley-market-container-card-info">
            <h3>Smiley NFT #4</h3>
            <div className="smiley-market-container-card-info-cost">
              <ETHIcon width={32} height={32} />
              <span>0,08 ETH</span>
            </div>
            <button>mint.</button>
          </div>
        </div>
        <div className="smiley-market-container-card">
          <img alt="smiley img" width={350} height={350} src="/5.png" />
          <div className="smiley-market-container-card-info">
            <h3>Smiley NFT #5</h3>
            <div className="smiley-market-container-card-info-cost">
              <ETHIcon width={32} height={32} />
              <span>0,08 ETH</span>
            </div>
            <button>mint.</button>
          </div>
        </div>
        <div className="smiley-market-container-card">
          <img alt="smiley img" width={350} height={350} src="/6.png" />
          <div className="smiley-market-container-card-info">
            <h3>Smiley NFT #6</h3>
            <div className="smiley-market-container-card-info-cost">
              <ETHIcon width={32} height={32} />
              <span>0,08 ETH</span>
            </div>
            <button>mint.</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
