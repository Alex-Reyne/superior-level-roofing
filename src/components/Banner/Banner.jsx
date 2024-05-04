import Image from "next/image.js";
import { Container } from "./styles.jsx";
import { images } from '../../app/Constants.js'

export default function Banner() {
  return (
    <Container>
      <img src={images.banner} />
    </Container>
  );
}