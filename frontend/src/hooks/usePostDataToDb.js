import { BASE_URL } from "../utility/constant";

const usePostDataToDb = () => {
  
  const postDatatoDb = async (url, obj) => {
    try {
      const res = await fetch(`${BASE_URL}/${url}`, {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(obj),
        headers: { "content-type": "application/json", },
      });
      const data = await res.json();

      return data;
    } catch (err) {
      return { statusCode: 400, message: "something went wrong" };
    }
  };
  return postDatatoDb;
};

export default usePostDataToDb;
