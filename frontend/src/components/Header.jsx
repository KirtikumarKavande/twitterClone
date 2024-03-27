import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/user.atom";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../hooks/useLogout";
import authScreenAtom from "../atoms/auth.atoms";
import { MdAddAPhoto, MdLightMode, MdOutlineSettings } from "react-icons/md";
import CreatePostModal from "./CreatePostModal";
import { FaBookmark } from "react-icons/fa6";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const logout = useLogout();
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} mt={6} mb="12">
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
      <CreatePostModal isOpen={isOpen}  onClose={onClose} />
      <Flex fontSize={25} fontWeight={700} gap={2}>
        <Image height={10} src={"https://res.cloudinary.com/dbrirq6ck/image/upload/v1711546274/twitterClone/a3e7xvvxptf5icernpue.png"}/>
        Tweeter
      </Flex>
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

          <Menu>
            <MenuButton>
              <MdOutlineSettings size={24} cursor={"pointer"} />
            </MenuButton>
            <Portal>
              <MenuList bg={"gray.dark"}>
                <MenuItem bg={"gray.dark"} color={"white"} px={12} gap={4}>
                  <Flex
                    gap={3}
                    onClick={(e) => {
                      navigate("/saved");
                    }}
                  >
                    <FaBookmark size={25} />
                    Saved
                  </Flex>
                </MenuItem>
              </MenuList>
            </Portal>
          </Menu>

          <Link as={RouterLink} to={`/${user.username}`}>
            <RxAvatar size={24} />
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
