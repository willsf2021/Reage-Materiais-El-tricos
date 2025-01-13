import Container from "./styles";
import bg from "../../assets/hero2.jpg";
import rec from "../../assets/rectangle.png";
import image from "../../assets/image.png";

export const Hero = () => {
  return (
    <Container rectangle={rec}>
      <img src={bg} alt="" />
      <div className="slogan">
        <div className="phrase">
          <p>
            <span>Preço</span> justo, <span>qualidade</span> garantida,{" "}
            <span>agilidade</span> no atendimento e<span> credibilidade</span>{" "}
            que você confia.
          </p>
        </div>
        <div className="img">
          <img src={image} alt="" />
        </div>
      </div>
    </Container>
  );
};
