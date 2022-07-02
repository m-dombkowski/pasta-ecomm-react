import axios from "axios";

export const getData = async (uri) => {
  const { data } = await axios.get(uri);

  return data;

  //   const key = Object.keys(data);
};
