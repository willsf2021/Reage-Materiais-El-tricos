import Container from "./styles";
import logo from "../../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <Container>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="socialMedia">
          <FaInstagram size={32} style={{ color: "#e3e3e3" }} />
          <FaWhatsapp size={32} style={{ color: "#e3e3e3" }} />
          <FaFacebook size={32} style={{ color: "#e3e3e3" }} />
        </div>
      </div>

      <div className="copy">
        <p>© Reage Materiais Elétricos.</p>
        <p>
          Desenvolvido por <a href="">Wilson Júnior</a>
        </p>
      </div>
    </Container>
  );
};
