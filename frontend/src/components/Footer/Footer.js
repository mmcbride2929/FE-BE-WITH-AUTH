import {
  Box,
  Container,
  Link,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { Link as ReachLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <Box mt="auto" bg="white" color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Link as={ReachLink} to="/feed">
          <Image src={logo} />
        </Link>
        <Text>© 2023 Fish Grid. All rights reserved</Text>
      </Container>
    </Box>
  )
}

export default Footer
