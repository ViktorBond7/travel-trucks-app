
import { useOutletContext } from "react-router-dom";
import css from 

const Features = () => {
  const camper = useOutletContext();
  console.log("camper", camper);

  const {
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = camper;

  return (
    <div >
      <div></div>
      <div></div>
    </div>
  );
};

export default Features;

// transmission,
//   engine,
//   AC,
//   bathroom,
//   kitchen,
//   TV,
//   radio,
//   refrigerator,
//   microwave,
//   gas,
//   water;
