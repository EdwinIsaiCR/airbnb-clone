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
  InputLeftAddon,
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
  InfoIcon
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
          <Box mt={'10'} ml={'20'}>
          <Link href={"/"} passHref>
            <Image
              src="../images/Airbnb_Logo.png"
              alt="logo"
              width={125}
            />
          </Link>
          </Box>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <VStack color={"black"} spacing={4} align="stretch" justify={'center'} textAlign={'center'} margin={'5'}>
            <Box >
              <Link href='#'><Button color={"black"} _hover={{ bg: "#d0d0d0" }} borderRadius={'30'}>Estancias</Button></Link>
              <Link href='#'><Button color={"black"} _hover={{ bg: "#d0d0d0" }} borderRadius={'30'}>Experiencias</Button></Link>
              <Link href='https://www.airbnb.mx/s/experiences/online'><Button color={"black"} _hover={{ bg: "#d0d0d0" }} borderRadius={'30'}>Experiencias en linea</Button></Link>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              pos={"relative"}
              mt={'4'}
              justifyContent={"center"}
              borderRadius={'30'}
              height={'100%'}
              boxShadow='2xl' p='6'  bg='white'
            >
              <InputGroup color={"black"}>
                <Input
                  type="search"
                  focusBorderColor='white'
                  color={"black"}
                  placeholder="Buscar destinos"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                  _hover={{ bg: "#d0d0d0" }}
                  
                />
              </InputGroup>

              <InputGroup color={"gray.500"}>
                <Input
                focusBorderColor='white'
                  placeholder="Fecha"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                  type="date"
                  _hover={{ bg: "#d0d0d0" }}
                />
              </InputGroup>

              <InputGroup color={"gray.500"}>
                <Select placeholder="Huéspedes" variant='unstyled' bg={'white'} _hover={{ bg: "#d0d0d0" }}>
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                </Select>
              </InputGroup>

              <Button bg="#e41d5b"  borderRadius={'30'} _hover={{ bg: "#97133c" }}>
              <Search2Icon />
              </Button>
            </Box>
          </VStack>
        </GridItem>
        <GridItem colSpan={1}>
          <Box
            display={'flex'}
            flexDirection={'row'}
            m={'8'}
          >
          <Box
          >
            <Button
            color={'black'}
              bg="white"
              borderRadius={'30'}
              _hover={{ bg: "#d0d0d0" }}
            >
              Pon tu casa en Airbnb
            </Button>
          </Box>
          <Box
          >
            <Link href={'#'}>
            <Button
            color={'black'}
              bg="white"
              borderRadius={'30'}
              _hover={{ bg: "#d0d0d0" }}
            >
              <InfoIcon/>
            </Button></Link>
          </Box>
          <Box boxShadow='lg'borderRadius={'30'} bg='white'>
            <Menu>
              <MenuButton
                as={Button}
                color={'black'}
                aria-label="Options"
              >
                <SettingsIcon />
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
