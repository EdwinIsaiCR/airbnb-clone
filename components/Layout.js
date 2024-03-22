import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Box,
  Flex,
  Image,
  Stack,
  Grid,
  VStack,
  InputGroup,
  Input,
  Select,
  InputLeftElement,
  Button,
  useColorMode,
  useColorModeValue,
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  Search2Icon,
  HamburgerIcon,
  SettingsIcon,
  AddIcon,
} from "@chakra-ui/icons";
import { useSession, signOut} from 'next-auth/react'

const Layout = ({ children }) => {
  const {data: session, status} = useSession()
  return (
    <>
      <Head>
        <title> Airbnb-Clone </title>
      </Head>
      <Grid
        bg={"white"}
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1}>
          {/* passHref permite que el href de la ruta sea pasado al componente hijo
                  es una forma de hacer referencia a un enlace
              */}

          <Link href={"/"} passHref>
            <Image
              src="../images/Airbnb_Logo.png"
              alt="logo"
              width={40}
              pos="relative"
              objectFit="cover"
            />
          </Link>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <VStack color={"black"} spacing={4} align="stretch">
            <Box>
              <a>Estancias</a>
              <a>Experiencias</a>
              <a>Experiencias en linea</a>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              pos={"relative"}
              mt={8}
              justifyContent={"center"}
              rounded={"lg"}
              border="2px"
              borderColor="blue.500"
            >
              <InputGroup color={"black"}>
                <InputLeftElement pointerEvents="none">
                  <Search2Icon />
                </InputLeftElement>
                <Input
                  type="search"
                  color={"black"}
                  placeholder="Lugar"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                />
              </InputGroup>

              <InputGroup color={"black"}>
                <Input
                  placeholder="Fecha"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                  type="date"
                />
              </InputGroup>

              <InputGroup color={"black"}>
                <Select placeholder="Huéspedes">
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                </Select>
              </InputGroup>

              <Button w={"full"} bg="black" _hover={{ bg: "blue.500" }}>
                Buscar
              </Button>
            </Box>
          </VStack>
        </GridItem>
        <GridItem colSpan={1}>
          <Box>
            <Button
              size={"lg"}
              ml={4}
              bg="blue.500"
              _hover={{ bg: "blue.300" }}
            >
              Pon tu casa en Airbnb
            </Button>
          </Box>
          <Box>
            <Button bg={"black"}>
              <SettingsIcon />
            </Button>
            <Menu>
             
              <MenuButton
                _hover={{ bg: "gray.500" }}
                as={Button}
                bg={"black"}
                aria-label="Options"
              >
                <HamburgerIcon />
              </MenuButton>
              { status === "authenticated" ? (
                <MenuList>
               <MenuItem icon={<AddIcon />}><Button onClick={() => signOut()}>SignOut</Button></MenuItem>
             </MenuList>
             ) : (
              <MenuList>
                <Link href='/login'  passHref>
                <MenuItem icon={<AddIcon />}>Sig In</MenuItem>
                 </Link>
                 <Link href='/signup'  passHref>
                <MenuItem icon={<AddIcon />}>Sign Up</MenuItem>
                 </Link>
              </MenuList>
              )}
            </Menu>
          </Box>
        </GridItem>
        {/* <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            
            { status === "authenticated" ? (
              <Button 
              display={"inline-flex"}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              onClick={() => signOut()}
              _hover={{ bg: 'pink.300' }}>
                Sign Out
              </Button>
            ) : (
              <>
                <Button 
              as={'a'} 
              fontSize={'sm'} 
              fontWeight={400} 
              variant={'link'} 
              href={'/login'}>
                Sign in
              </Button>
              
              <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                href={'/signup'}
                _hover={{ bg: 'pink.300' }}
              >
                Sign up
              </Button>
              </>
            )}
          </Stack> */}
      </Grid>
      {children}
    </>
  );
};

export default Layout;
