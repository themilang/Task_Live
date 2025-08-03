import axios from "axios";

const NUT_BASE_URI = import.meta.env.VITE_NUTRITION_API_URI;
const NUT_API_KEY = import.meta.env.VITE_NUTRITION_API_KEY;

console.log("NUT_BASE_URI:", NUT_BASE_URI);
console.log("NUT_API_KEY:", NUT_API_KEY);

const NutApi = axios.create({
  baseURL: NUT_BASE_URI,
  headers: {
    "X-Api-Key": NUT_API_KEY,
  },
});

export const getNUT = (food) => {
  return NutApi.get("/nutrition", {
    params: { query: food },
  });
};
