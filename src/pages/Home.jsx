import React from "react";
import Slider from "../components/Slider";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

const images = [
  {
    src: slide1,
    alt: "Imagem 1",
    caption: "Primeira imagem",
    description: "Descrição da primeira imagem",
  },
  {
    src: slide2,
    alt: "Imagem 2",
    caption: "Segunda imagem",
    description: "Descrição da segunda imagem",
  },
  {
    src: slide3,
    alt: "Imagem 3",
    caption: "Terceira imagem",
    description: "Descrição da terceira imagem",
  },
];

export default function Home() {
  return <Slider slides={images} />;
}
