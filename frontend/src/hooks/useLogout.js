import userAtom from "../atoms/user.atom";
import { useSetRecoilState } from "recoil";
import useShowToast from "./useShowToast";
import useGetDataFromDB from "./useGetDataFromDb";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const setUser = useSetRecoilState(userAtom);
  let getDataFromDB = useGetDataFromDB();
  const showToast = useShowToast();
 const navigate= useNavigate()

  const logout = async () => {
    try {
      let data = await getDataFromDB("user/logout");
      

      if (!data.success) {
        showToast("Error", data.message, "error");
        return;
      }

      localStorage.removeItem("user");
      navigate('/')
      setUser(null);
    } catch (error) {
      showToast("Error", error, "error");
    }
  };

  return logout;
};

export default useLogout;
