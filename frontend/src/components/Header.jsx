import { MdLightMode } from "react-icons/md";

import { Box, Button, Flex, Link, useColorMode } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/user.atom";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../hooks/useLogout";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const logout = useLogout();

  return (
    <Flex justifyContent={"center"} mt={6} mb={12}>
      <Box onClick={toggleColorMode}>
        {colorMode === "light" ? (
          <MdLightMode size={25} />
        ) : (
          <MdLightMode size={25} />
        )}
      </Box>

      {user && (
        <Flex alignItems={"center"} gap={4}>
          <Button size={"xs"} onClick={logout}>
            <FiLogOut size={20} />
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Header;
