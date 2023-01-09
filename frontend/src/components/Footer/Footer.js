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
    <Box mt="auto" bg="white">
      <Container
        as={Stack}
        maxWidth="350px"
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
