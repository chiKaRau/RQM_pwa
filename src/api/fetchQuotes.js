import axios from "axios";

export const fetchQuotes = async () => {
  const { data } = await axios.get("https://api.quotable.io/random");

  return data;
};
