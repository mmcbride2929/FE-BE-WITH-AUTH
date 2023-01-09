import { Box, Heading, chakra, Button, Stack, Image } from '@chakra-ui/react'
import landingPhoto from '../assets/landing-page-art.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import AppContext from '../context/AppContext'

const Landing = ({ setNav }) => {
  const navigate = useNavigate()

  // pulling global state from context
  const { user } = useContext(AppContext)

  /* *********** USER USEEFFECT ********** */
  useEffect(() => {
    // hiding navbar if not logged in
    setNav(true)
    if (user) {
      navigate('/feed')
    }
  }, [user, navigate])

  return (
    <>
      <Box
        p="25px"
        bg="brand.100"
        h="93vh"
        display="flex"
        flexDirection="column"
        justifyContent={{ base: 'center', sm: 'center' }}
        alignItems="center"
      >
        <Box
          textAlign="center"
          position="relative"
          mt={{ base: '10px', md: '25px' }}
        >
          <Image
            src={landingPhoto}
            shadow="md"
            borderRadius="12px"
            w={{ base: '330px', sm: '425px', md: '500px' }}
            maxWidth="500px"
          />

          <Heading
            position="absolute"
            w="100%"
            top="10%"
            left="0px"
            fontWeight="bold"
            color={'brand.100'}
            textShadow="20px 10px 20px orange"
            fontSize={{ base: '2.3rem', sm: '2.4rem', md: '2.5rem' }}
          >
            Fish-Grid
          </Heading>

          <Heading
            position="absolute"
            textShadow="20px 10px 20px orange"
            w="100%"
            top="25%"
            left="0px"
            fontWeight="bold"
            color={'brand.100'}
            fontSize={{ base: '2rem', sm: '2.1rem' }}
          >
            Cast, Catch, Share
          </Heading>
        </Box>
        <Box
          textAlign={'center'}
          w={{ base: '350px', sm: '425px', md: '500px' }}
        >
          <chakra.p
            px={{ base: '10px', md: '10px' }}
            my={{ base: '30px', sm: '40px', md: '50px' }}
            color="black"
            fontSize={{ base: '1rem', md: '1rem' }}
            lineHeight={{ base: '25px', md: '30px' }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo
            voluptatum odio dolorum corrupti adipisci similique delectus
            accusamus ea nostrum aperiam, blanditiis consectetur ducimus magni.
            placeat!
          </chakra.p>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Link to="/login">
              <Button
                size="md"
                color={'white'}
                bg={'brand.500'}
                shadow="md"
                _hover={{
                  bg: 'brand.400',
                }}
              >
                Login/Register
              </Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default Landing
