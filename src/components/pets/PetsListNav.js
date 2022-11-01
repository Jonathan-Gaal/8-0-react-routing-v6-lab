import "./PetsListNav.css";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";

export const PetsListNav = ({ cats, dogs }) => {
  let { kind } = useParams(); // destructuring id from data
  console.log(cats);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pets/cats");
  };

  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <Link to={`/pets/${useParams}`}>See All Cats ({cats.length})</Link>
        </li>
        <li>
          <Link to={`/pets/${useParams}`}>See All Dogs ({dogs.length})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
