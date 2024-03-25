import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import useGetDataFromDB from "../hooks/useGetDataFromDb";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { useEffect, useState } from "react";

const User = () => {
  const getDataFromDb = useGetDataFromDB();
  const { username } = useParams();
  const showToast = useShowToast();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(username);
  const getUser = async () => {
    try {
      let data = await getDataFromDb(`user/profile/${username}`);
      if (!data.success) {
        showToast("Error", data.message, "error");
        return;
      }
      // if (data.isFrozen) {
      // 	setUser(null);
      // 	return;
      // }
      setUser(data);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("good ");
    getUser();
  }, [username]);
console.log(user)
  return (
    <div>
      {user && <UserHeader user={user.data} />}
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
    </div>
  );
};

export default User;
