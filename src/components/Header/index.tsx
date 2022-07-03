import "./index.scss";

const Header = () => {
  const redirectToGithub = () => {
    window.open("https://github.com/ruz1k/smiley");
  };
  return (
    <header>
      <ul className="container">
        <li>
          created by <a onClick={redirectToGithub}>ruz1k</a>.
        </li>
        <li>SMILEY</li>
        <li>© 2022</li>
      </ul>
    </header>
  );
};

export default Header;
