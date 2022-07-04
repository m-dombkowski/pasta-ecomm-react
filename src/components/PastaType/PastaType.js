import { useEffect, useState } from "react";

const PastaType = (props) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    let array = [];
    const initializeArray = async () => {
      const data = await props.specificSubTypeObj(array, props.type);

      setArr(data);
    };

    initializeArray().catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {arr.map((element) => (
          <li key={Math.random()}>
            {element.Name}
            <p>{element.Price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastaType;

/*
  const data = await specificPastaTypeObj(array, type);

    for (let i = 0; i < data.length; i++) {
      a.push(data[i]);
    }
    return a;
*/
