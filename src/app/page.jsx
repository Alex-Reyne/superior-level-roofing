import Banner from "@/components/Banner/Banner.jsx";
import { Main } from "./styles.jsx";
import NavBar from "@/components/NavBar/NavBar.jsx";

export default function Home() {
  return (
   <Main>
    <NavBar />
    <Banner />
   </Main>
  );
}
