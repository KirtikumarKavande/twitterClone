import { BASE_URL } from "../utility/constant";

const useGetDataFromDB = () => {
  const getDataFromDB = async (url) => {
    try {
      const res = await fetch(`${BASE_URL}/${url}`, {
        method: "GET",
        credentials: "include",
        headers: { "content-type": "application/json" },
      });
      const data = await res.json();

      return data;
    } catch (err) {
      return { statusCode: 400, message: "something went wrong" };
    }
  };
  return getDataFromDB;
};

export default useGetDataFromDB;
