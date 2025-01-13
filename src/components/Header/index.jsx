import Container from "./styles";
import logo from "../../assets/logo.png";
import wave from "../../assets/wave.png";

export const Header = () => {
  return (
    <Container wave={wave}>
      <div>
        <img src={logo} className="logo" alt="Logo Reage" />
        <img src={wave} className="wave" alt="Logo Reage" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">SOBRE NÓS</a>
          </li>
          <li>
            <a href="">CONTATO</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
