import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Image,
} from '@chakra-ui/react'
import landingPhoto from '../assets/landing-page-art.png'
import { Link } from 'react-router-dom'

const Landing = ({ setNav }) => {
  // hiding navbar if not logged in
  setNav(false)

  return (
    <>
      <Container p="25px" bg="brand.100" h="100%">
        <Box textAlign="center" position="relative" mt="10px">
          <Image src={landingPhoto} shadow="md" borderRadius="12px" />

          <Heading
            position="absolute"
            w="100%"
            top="10%"
            left="0px"
            fontWeight="bold"
            color={'brand.100'}
            textShadow="20px 10px 20px orange"
            fontSize={{ base: '2.3rem', sm: '4xl', md: '6xl' }}
          >
            Fish
            <Text as={'span'}>-Grid</Text>
          </Heading>

          <Heading
            position="absolute"
            textShadow="20px 10px 20px orange"
            w="100%"
            top="25%"
            left="0px"
            fontWeight="bold"
            color={'brand.100'}
            fontSize={{ base: '1.3rem', sm: '4xl', md: '6xl' }}
          >
            Cast, Catch, Share
          </Heading>
        </Box>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, md: 18 }}
        >
          <Text
            px="30px"
            color="black"
            fontSize={{ base: '0.9rem', sm: '4xl', md: '6xl' }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo
            voluptatum odio dolorum corrupti adipisci similique delectus
            accusamus ea nostrum aperiam, blanditiis consectetur ducimus magni.
            placeat!
          </Text>
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
                my="7px"
                shadow="md"
                _hover={{
                  bg: 'brand.400',
                }}
              >
                Login/Register
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export default Landing
