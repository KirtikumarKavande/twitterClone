import {
  Box,
  Button,
  Flex,
  Link,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/user.atom";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../hooks/useLogout";
import authScreenAtom from "../atoms/auth.atoms";
import { MdAddAPhoto, MdLightMode, MdOutlineSettings } from "react-icons/md";
import CreatePostModal from "./CreatePostModal";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const logout = useLogout();
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justifyContent={"space-between"} mt={6} mb="12">
      {user && (
        <Link as={RouterLink} to="/">
          <AiFillHome size={24} />
        </Link>
      )}
      {!user && (
        <Link
          as={RouterLink}
          to={"/auth"}
          onClick={() => setAuthScreen("login")}
        >
          Login
        </Link>
      )}
      <CreatePostModal isOpen={isOpen} onClose={onClose} />
      <Box onClick={toggleColorMode}>
        {colorMode === "light" ? (
          <MdLightMode size={25} />
        ) : (
          <MdLightMode size={25} />
        )}
      </Box>

      {user && (
        <Flex alignItems={"center"} gap={4}>
          <Link as={RouterLink} onClick={onOpen}>
            <MdAddAPhoto size={24} />
          </Link>

          <Link as={RouterLink} to={`/${user.username}`}>
            <RxAvatar size={24} />
          </Link>

          <Link as={RouterLink} to={`/settings`}>
            <MdOutlineSettings size={20} />
          </Link>
          <Button size={"xs"} onClick={logout}>
            <FiLogOut size={20} />
          </Button>
        </Flex>
      )}

      {!user && (
        <Link
          as={RouterLink}
          to={"/auth"}
          onClick={() => setAuthScreen("signup")}
        >
          Sign up
        </Link>
      )}
    </Flex>
  );
};

export default Header;
