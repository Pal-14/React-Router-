import "./Profile.css";
import { useParams } from "react-router-dom";

export default function Profil() {

  // use params pour retrouver des id par exemple ici sur des routes dynamiques
  const params = useParams();
  console.log(params);

  return (
    <>
      <h1>Bienvenue sur votre profil</h1>

      <p>{params.id}</p>
    </>
  );
}
