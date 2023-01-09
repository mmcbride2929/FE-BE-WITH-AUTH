import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  chakra,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState, useEffect, useContext } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'
import AppContext from '../context/AppContext'
import Alert from '../components/Alerts/Alert'

const initialState = { email: '', password: '' }

const Login = ({ setNav }) => {
  // hiding navbar if not logged in
  setNav(false)

  /* *********** LOCAL STATE ********** */
  // components/user values
  const [values, setValues] = useState(initialState)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  // pulling global state from context
  const { isLoading, showAlert, displayAlert, user, loginUser } =
    useContext(AppContext)

  /* *********** FUNCTIONS ********** */
  // handle change of inputs
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { email, password, _id } = values

    if (!email || !password) {
      displayAlert()
      return
    }

    const currentUser = { email, password, _id }
    loginUser(currentUser, setNav)
  }

  /* *********** USER USEEFFECT ********** */
  useEffect(() => {
    if (user) {
      navigate('/feed')
    }
  }, [user, navigate])

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg="brand.100">
      <Stack spacing={8} mx={'auto'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Login
          </Heading>
          <Text fontSize={'md'}>to enjoy all of our cool features</Text>
        </Stack>
        <Box rounded={'lg'} bg="white" boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <form onSubmit={onSubmit}>
              {showAlert && <Alert />}
              <FormControl id="email" isRequired>
                <FormLabel mt="6px" mb="1px">
                  Email address
                </FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  maxLength={45}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel mt="6px" mb="1px">
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleChange}
                    value={values.password}
                    maxLength={20}
                    minLength={8}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Box display="flex" justifyContent="center">
                <Button
                  mt="45px"
                  type="submit"
                  size="md"
                  color={'white'}
                  bg={'brand.500'}
                  shadow="md"
                  _hover={{
                    bg: 'brand.400',
                  }}
                >
                  Sign in
                </Button>
              </Box>
            </form>
            <Stack pt={1}>
              <Text align={'center'}>
                Not a user?
                <Link to="/register">
                  <chakra.p color="brand.500">Register</chakra.p>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Login
