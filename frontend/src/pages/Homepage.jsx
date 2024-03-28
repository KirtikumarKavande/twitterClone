import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast";
import { useRecoilState, useRecoilValue } from "recoil";
import postsAtom from "../atoms/posts.atom";
import useGetDataFromDB from "../hooks/useGetDataFromDb";
import Post from "../components/Post";
import SuggestedUser from "../components/SuggestedUser";
import userAtom from "../atoms/user.atom";

const HomePage = () => {
  const [posts, setPosts] = useRecoilState(postsAtom);
  const [loading, setLoading] = useState(true);
  const showToast = useShowToast();
  const getDataFromDB = useGetDataFromDB();
  const user = useRecoilValue(userAtom);
  let getDataFromDb = useGetDataFromDB();
const [userSuggestion,setUserSuggestion] = useState([])   

  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true);
      setPosts([]);
      try {
        const data = await getDataFromDB("post/feed");

        if (!data.success) {
          showToast("Error", data.message, "error");
          return;
        }
        setPosts(data.data);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };
    getFeedPosts();
  }, [showToast, setPosts]);

  async function suggestedUser() {
   const userData= await getDataFromDb("user/suggesteduser");
   setUserSuggestion(userData)
  }
  useEffect(() => {
    suggestedUser();
  }, []);

  return (
    <Flex gap="10" alignItems={"flex-start"}>
      <Box flex={70}>
        {!loading && posts.length === 0 && (
          <h1>Follow some users to see the feed</h1>
        )}

        {loading && (
          <Flex justify="center">
            <Spinner size="xl" />
          </Flex>
        )}

        {posts?.map((post) => (
          <Post key={post?._id} post={post} postedBy={post?.postedBy} />
        ))}
      </Box>
      <Box
        flex={30}
        display={{
          base: "none",
          md: "block",
        }}
      ></Box>
      <Box
        flex={30}
        display={{
          base: "none",
          md: "block",
        }}
      >
        {
       userSuggestion.length>0 && userSuggestion.map((user)=>(
            <SuggestedUser key={user._id} user={user} />

          ))
        }
      </Box>
    </Flex>
  );
};

export default HomePage;
