import { FunctionComponent } from "react";
import { useParams, Link } from "react-router-dom";

export const OrderPage: FunctionComponent = () => {
  const { username } = useParams<string>();

  return (
    <div>
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnection</button>
      </Link>
    </div>
  );
};
