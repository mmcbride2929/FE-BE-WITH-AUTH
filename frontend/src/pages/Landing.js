import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react'

import { Link } from 'react-router-dom'

const Landing = ({ setNav }) => {
  // hiding nav
  setNav(false)

  return (
    <>
      <Container maxW={'3xl'} bg="brand.100">
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Make money from <br />
            <Text as={'span'} color={'green.400'}>
              your audience
            </Text>
          </Heading>
          <Text color={'gray.5100'}>
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button
              bg={'brand.200'}
              px={6}
              _hover={{
                bg: 'brand.300',
              }}
            >
              <Link to="/login">Login/Register</Link>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export default Landing
