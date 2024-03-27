import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import useGetDataFromDB from "../hooks/useGetDataFromDb";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { useEffect, useState } from "react";
import Post from "../components/Post";
import { Flex, Spinner } from "@chakra-ui/react";

const User = () => {
  const getDataFromDb = useGetDataFromDB();
  const { username } = useParams();
  const showToast = useShowToast();
  const [user, setUser] = useState(null);
  const [post, setPost] = useState([]);
  console.log("post", post);
  const [loading, setLoading] = useState(true);
  const [fetchingPosts, setFetchingPosts] = useState(true);

  const getUser = async () => {
    try {
      let data = await getDataFromDb(`user/profile/${username}`);
      let postOfUser = await getDataFromDb(`post/userspost/${username}`);

      if (!data.success) {
        showToast("Error", data.message, "error");
        return;
      }

      if (!postOfUser.success) {
        showToast("Error", postOfUser.message, "error");
        return;
      }
      setUser(data);
      setPost(postOfUser.data);

      // if (data.isFrozen) {
      // 	setUser(null);
      // 	return;
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setLoading(false);
      setFetchingPosts(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [username]);
  return (
    <div>
      {user && <UserHeader user={user.data} />}
      {!fetchingPosts && post.length === 0 && <h1>User has not posts.</h1>}

      {fetchingPosts && (
        <Flex justifyContent={"center"} my={12}>
          <Spinner size={"xl"} />
        </Flex>
      )}

      {post.map((post) => (
        <Post key={post._id} post={post} postedBy={post.postedBy} />
      ))}
    </div>
  );
};

export default User;
