import { useState } from "react";
import useShowToast from "./useShowToast";
import userAtom from "../atoms/user.atom";
import { useRecoilValue } from "recoil";
import useGetDataFromDB from "./useGetDataFromDb";

const useFollowUnfollow = (user) => {
  const currentUser = useRecoilValue(userAtom);
  const [following, setFollowing] = useState(
    user.followers?.includes(currentUser?._id)
  );
  const [updating, setUpdating] = useState(false);
  const showToast = useShowToast();

  let getDataFromDB = useGetDataFromDB();

  const handleFollowUnfollow = async () => {
    if (!currentUser) {
      showToast("Error", "Please login to follow", "error");
      return;
    }
    if (updating) return;

    setUpdating(true);
    try {
      const data = await getDataFromDB(`user/follow/${user._id}`);

      if (!data.success) {
        showToast("Error", data.message, "error");
        return;
      }

      if (following) {
        showToast("Success", `Unfollowed ${user.name}`, "success");
        user.followers.pop(); // simulate removing from followers
      } else {
        showToast("Success", `Followed ${user.name}`, "success");
        user.followers.push(currentUser?._id); // simulate adding to followers
      }
      setFollowing(!following);

      console.log(data);
    } catch (error) {
      showToast("Error", error, "error");
    } finally {
      setUpdating(false);
    }
  };

  return { handleFollowUnfollow, updating, following };
};

export default useFollowUnfollow;
