import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar__logo">PlantsFinder</h1>
      <ul className="navbar__links">
        <a className="navbar__links__items" href="!#">
          Cadastrar
        </a>
        <a className="navbar__links__items" href="!#">
          Minha Lista
        </a>
        <a className="navbar__links__items" href="!#">
          Perfil
        </a>
        <a className="navbar__links__items" href="!#">
          Login
        </a>
      </ul>
    </div>
  );
}
