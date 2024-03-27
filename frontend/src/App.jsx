import { Box, Container } from "@chakra-ui/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import User from "./pages/User";
import Post from "./pages/Post";
import Header from "./components/Header";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/user.atom";
import AuthPage from "./pages/Auth";
import HomePage from "./pages/Homepage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import CreatePost from "./components/CreatePost";

const App = () => {
  const user = useRecoilValue(userAtom);
  const { pathname } = useLocation();

  return (
    <Box position={"relative"} w="full">
      <Container
        maxW={pathname === "/" ? { base: "620px", md: "900px" } : "620px"}
      >
        <Header />
        <Routes>
          <Route
            path="/"
            element={user ? <HomePage /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={!user ? <AuthPage /> : <Navigate to="/" />}
          />
          <Route
            path="/update"
            element={user ? <UpdateProfilePage /> : <Navigate to="/auth" />}
          />

          <Route
            path="/:username"
            element={
              user ? (
                <>
                  <User />
                  <CreatePost />
                </>
              ) : (
                <User />
              )
            }
          />
          <Route path="/:username/post/:pid" element={<Post />} />
        </Routes>
      </Container>
    </Box>

  );
};

export default App;
