import { Box, Flex, Button, Stack, Image, Link } from '@chakra-ui/react'
import logo from '../../assets/logo.png'
import { BsDoorOpen, BsPersonFill } from 'react-icons/bs'
import { Link as ReachLink } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import { useContext } from 'react'

const Nav = () => {
  const { logoutUser, user } = useContext(AppContext)

  return (
    <>
      <Box bg="white" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Link as={ReachLink} to="/feed">
              <Image src={logo} />
            </Link>
          </Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={4}>
              <Button
                px="0px"
                h="35px"
                bg={'brand.500'}
                _hover={{
                  bg: 'brand.400',
                }}
              >
                {/* <Link as={ReachLink} to={`/user/${_id}`}>
                  <BsPersonFill size="20px" fill="white" />
                </Link> */}
              </Button>

              <Button
                onClick={logoutUser}
                px="0px"
                h="35px"
                bg={'brand.500'}
                _hover={{
                  bg: 'brand.400',
                }}
              >
                <Link as={ReachLink} to="/landing">
                  <BsDoorOpen size="20px" fill="white" />
                </Link>
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Nav
