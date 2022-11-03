import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets, type }) => {
  // let { kind } = useParams(); // destructuring id from data
  // console.log(useParams);
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/pets/cats");
  // };

  console.log(type);

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind.toLowerCase() === "cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );
  if (type === "cat") {
    return (
      <section className="pets-wrapper">
        <PetsListNav cats={cats} dogs={dogs} />
        <section className="pets-list">
          {/* All cats section */}
          {cats.map((cat) => (
            <Pet key={cat.id} kind="cat" pet={cat} />
          ))}
        </section>
      </section>
    );
  } else if (type === "dog") {
    return (
      <section className="pets-wrapper">
        <PetsListNav cats={cats} dogs={dogs} />
        <section className="pets-list">
          {/* All dogs section */}
          {dogs.map((dog) => (
            <Pet key={dog.id} kind="dog" pet={dog} />
          ))}
        </section>
      </section>
    );
  } else {
    return (
      <section className="pets-wrapper">
        <PetsListNav cats={cats} dogs={dogs} />
        <section className="pets-list">
          {type === "cat"}
          {/* All cats section */}
          {cats.map((cat) => (
            <Pet key={cat.id} kind="cat" pet={cat} />
          ))}

          {/* All dogs section */}
          {dogs.map((dog) => (
            <Pet key={dog.id} kind="dog" pet={dog} />
          ))}
        </section>
      </section>
    );
  }
};

export default PetsList;

//
