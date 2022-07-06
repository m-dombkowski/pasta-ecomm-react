import axios from "axios";

export const getPastaTypes = async (url) => {
  const { data } = await axios.get(`${url}/type.json`);
  return data;
};

export const getSpecificPasta = async (url, typeName) => {
  const { data } = await axios.get(`${url}/type/${typeName}.json`);
  return data;
};
