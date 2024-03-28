import Post from "../components/Post";
import userAtom from "../atoms/user.atom";
import { useRecoilValue } from "recoil";
import useGetDataFromDB from "../hooks/useGetDataFromDb";
import { useEffect, useState } from "react";

const SavedPost = () => {
  const user = useRecoilValue(userAtom);
  const getDataFromDb = useGetDataFromDB();
  const [post, setPost] = useState({});
  let getAllPost = async () => {
    let allPost = user?.saved?.map(async (item) => {
      let post = await getDataFromDb(`post/postbyid/${item.postId}`);
      return post.data.post;
    });
    Promise.all(allPost).then((allPosts) => {
      setPost(allPosts);
    });
  };
  useEffect(() => {
    user?.saved && getAllPost();
  }, []);

  return (
    <div>
      {post.length > 0 &&
        post.map((item) => (
          <Post key={item._id} post={item} postedBy={item.postedBy} />
        ))}

        {
         (  user?.saved&&user.saved.length===0 )&&<p>There is no saved post</p>
        }
    </div>
  );
};

export default SavedPost;
