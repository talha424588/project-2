import "./Navbar.css";
import logo from "../../assets/images/contact_logo.png";
function Navbar() {
  return (
    <>
      <nav className="container">
        <div>
          <img src={logo} alt="logoimage" />
        </div>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
