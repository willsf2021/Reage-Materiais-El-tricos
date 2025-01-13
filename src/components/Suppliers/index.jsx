import { useEffect, useState, useRef } from "react";
import Container from "./styles";
import { data } from "../../constants/data.js";
import right from "/carroussel/chevron-double-right.svg";
import left from "/carroussel/chevron-double-left.svg";

export const Suppliers = () => {
  const carousel = useRef(null);

  const [img, setImg] = useState([]);

  useEffect(() => {
    setImg(data);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <Container>
      <h2>NOSSO FORNECEDORES</h2>
      <div className="container">
        <div className="carousel" ref={carousel}>
          {img.map((brand, index) => {
            return (
              <div key={index} className="item">
                <img src={brand.url} alt="" />
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button onClick={handleLeftClick}>
            <img src={left} alt="" />
          </button>
          <button onClick={handleRightClick}>
            <img src={right} alt="" />
          </button>
        </div>
      </div>
    </Container>
  );
};
