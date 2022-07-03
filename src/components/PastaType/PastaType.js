import { useState } from "react";
import { randomID } from "../../helpers/helpers";

const PastaType = (props) => {
  const [arr, setArr] = useState([]);

  props.typeNames(arr, setArr, props.type).catch((err) => console.error(err));

  props
    .price("long")
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {arr.map((element) => (
          <li key={Math.random()}>
            {element}
            <p>{element.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastaType;

/*
https://pasta-shop-f0b05-default-rtdb.europe-west1.firebasedatabase.app/type/filled


https://pasta-shop-f0b05-default-rtdb.europe-west1.firebasedatabase.app/type/dumpling

https://pasta-shop-f0b05-default-rtdb.europe-west1.firebasedatabase.app/type/long
*/
