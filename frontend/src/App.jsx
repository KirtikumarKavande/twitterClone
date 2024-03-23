import { Container } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import User from "./pages/User";
import Post from "./pages/Post";
import Header from "./components/Header";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/user.atom";
import AuthPage from "./pages/Auth";
import Homepage from "./pages/Homepage";

const App = () => {
  const user = useRecoilValue(userAtom);
  return (
    <Container maxW={"620px"}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={user ? <Homepage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!user ? <AuthPage /> : <Navigate to="/" />}
        />
        <Route path="/:username" element={<User />} />
        <Route path="/:username/post/:pId" element={<Post />} />
      </Routes>
    </Container>
  );
};

export default App;
