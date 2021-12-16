import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Frame from "../../components/Frame/Frame";
import Card from "../../components/Card/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [plantas, setPlantas] = useState([]);

  //mostra ou não os cards na tela
  const [montado, setMontado] = useState(false);

  const getPlantas = async () => {
    await axios.get("/plant/findMany").then((response) => {
      if (montado) {
        setPlantas(response.data);
      }
    });
  };

  useEffect(() => {
    setMontado(true);
    getPlantas();
  }, [montado]);

  return (
    <div className="home">
      <Navbar />
      <Frame
        image="https://wallpaperaccess.com/full/343990.jpg"
        imageAlt="plantas background"
        text="repositorio de plantas"
      />
      <div className="home__cards">
        {plantas.map((item) => (
          <Card
            id={item.id}
            image={item.imageUrl}
            name={item.commonName}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
