import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import { LuMoon, LuSun } from "react-icons/lu"


const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <HStack as="nav" w="100%" px={4} py={2}>
      <Image src={logo} boxSize="60px" />
      <Text>Nav Bar</Text>

      <Spacer /> {/* 把右侧内容顶到最右 */}
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </ClientOnly>
    </HStack>
  );
};

export default NavBar;