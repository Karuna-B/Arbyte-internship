import noFoodFound from "../assets/emptyplate.png";
import { Link } from "react-router-dom";

export default function Error({message, explanation}) {
  return (
    <div className="not-found-container">
      <img src={noFoodFound} className="not-found-image"alt="" />
      <h1>{message? message: "Oopsie, we could not find that food"}</h1>
      <p>{explanation? explanation: "So Sorry:("}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}
