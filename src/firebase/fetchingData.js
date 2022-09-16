import axios from "axios";

export const getPastaTypes = async (url) => {
  console.log(url);
  console.log(`${url}/type.json`);
  const { data } = await axios.get(`${url}/type.json`);
  return data;
};

export const getSpecificPasta = async (url, typeName) => {
  const { data } = await axios.get(`${url}/type/${typeName}.json`);
  return data;
};

export const pastaObj = async (typeName) => {
  const data = await getPastaTypes(process.env.REACT_APP_FIREBASE_API_KEY);
  for (const name in data) {
    if (name === typeName) {
      return data[name];
    }
  }
};

export const specificPastaTypeObj = async (array, typeName) => {
  const data = await pastaObj(typeName);

  for (const name in data) {
    array.push(data[name]);
  }

  return array;
};
