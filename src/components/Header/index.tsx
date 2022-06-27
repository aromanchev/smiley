import { useEffect, useState } from "react";
import { useWeb3 } from "../../hooks";

import "./index.scss";

const Header = (): JSX.Element => {
  return (
    <header>
      <ul className="container">
        <li>RUZ1KMP</li>
      </ul>
    </header>
  );
};

export default Header;
