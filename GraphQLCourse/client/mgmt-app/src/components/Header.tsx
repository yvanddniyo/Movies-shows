import logo from "./assets/logo.png";

export const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand d-flex justify-content-between align-items-center">
          <img src={logo} alt="logo" className="mr-2" />
          <div className="">Project Mgmt</div>
        </a>
      </div>
    </nav>
  );
};