import "../styles/logo.css";
import logoImage from "../assets/logo.png";

const Logo = ({ navigate }) => (
  <div className="logo-container" onClick={() => navigate && navigate("Home")}>
    <img src={logoImage} alt="DevBros Tech Logo" className="logo-image" />
  </div>
);

export default Logo;
