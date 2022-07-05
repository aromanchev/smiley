import { ETHIcon } from "../../assets/icons";
import { useWeb3 } from "../../hooks";
import "./index.scss";
import { smileyData } from "./kit";

const Market = () => {
  const { mint } = useWeb3();
  const mintNft = async (tokenId: number) => {
    await mint(tokenId);
  };
  return (
    <div className="container smiley-market">
      <h2>market.</h2>
      <div className="smiley-market-container">
        {smileyData.map(({ id, name, image }) => (
          <div key={id} className="smiley-market-container-card">
            <img alt="smiley img" width={350} height={350} src={image} />
            <div className="smiley-market-container-card-info">
              <h3>{name}</h3>
              <div className="smiley-market-container-card-info-cost">
                <ETHIcon width={32} height={32} />
                <span>0,08 ETH</span>
              </div>
              <button onClick={() => mintNft(id)}>mint.</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;
