import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img className="nav-logo" src={require(`./Stream.png`)} alt="Logo" />
      <img className="nav-Avatar" src={require(`./user.png`)} alt="Avatar" />
    </div>
  );
}

export default Nav;
