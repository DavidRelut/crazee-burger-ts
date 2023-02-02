import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const ErrorPage: FunctionComponent = () => {
  return (
    <div>
      <h1>ErrorPage</h1>
      <Link to="/">
        <button>Retourner à la page d'acceuil</button>
      </Link>
    </div>
  );
};
