import {
  Button,
  FormControl,
  FormLabel,
  chakra,
  Box,
  Input,
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'

const initialState = {
  species: '',
  photo: '',
  bait: '',
  location: '',
  length: 0,
  weight: 0,
  createdBy: '',
}

const CreatePostForm = () => {
  // form values
  const [values, setValues] = useState(initialState)
  const [image, setImage] = useState('')

  const navigate = useNavigate()

  const { showAlert, alertText, createPost, user } = useContext(AppContext)

  const handleChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createPost(values)
    e.target.reset()
    setValues(initialState)
    setTimeout(() => {
      navigate('/feed')
    }, 2000)
  }

  // handling image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    transformFile(file)
  }

  const transformFile = (file) => {
    const reader = new FileReader()

    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImage(reader.result)
        setValues((prevState) => ({ ...prevState, photo: reader.result }))
      }
    } else {
      setImage('')
    }
  }

  // setting user id to state
  useEffect(() => {
    setValues((prevState) => ({ ...prevState, createdBy: user._id }))
  }, [])

  return (
    <Box
      bg="white"
      p="25px"
      w="100%"
      maxWidth="400px"
      minWidth="350px"
      border="1px"
      borderColor="silver"
      borderRadius="5px"
      shadow="md"
      mb="45px"
    >
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel mb="1px">Species</FormLabel>
          <Input
            name="species"
            onChange={handleChange}
            type="string"
            placeholder="Enter species"
            value={values.species}
            maxLength={15}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel mt="6px" mb="1px">
            Photo
          </FormLabel>
          <Input
            p="0px"
            name="photo"
            type="file"
            accept="image/*"
            placeholder="Upload photo"
            onChange={handleImageUpload}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel mt="6px" mb="1px">
            Bait Type
          </FormLabel>
          <Input
            name="bait"
            onChange={handleChange}
            type="string"
            placeholder="Enter bait"
            value={values.bait}
            maxLength={15}
          />
        </FormControl>

        <FormLabel mt="6px" mb="1px">
          Location
        </FormLabel>
        <Input
          name="location"
          onChange={handleChange}
          type="string"
          placeholder="Enter location"
          value={values.location}
          maxLength={15}
        />

        <FormLabel mt="6px" mb="1px">
          Length
        </FormLabel>
        <Input
          name="length"
          onChange={handleChange}
          type="number"
          placeholder="Enter length"
          value={values.length}
          min="0"
          max="100"
        />

        <FormLabel mt="6px" mb="1px">
          Weight
        </FormLabel>
        <Input
          name="weight"
          onChange={handleChange}
          type="number"
          placeholder="Enter weight"
          value={values.weight}
          min="0"
          max="100"
        />
        {showAlert ? (
          <chakra.p
            textAlign="center"
            p="5px"
            fontSize="0.9rem"
            fontWeight="bold"
          >
            {alertText}
          </chakra.p>
        ) : (
          <Box p="5px" h="31.8px"></Box>
        )}
        <Box display="flex" justifyContent="center">
          <Button
            type="submit"
            size="md"
            color={'white'}
            bg={'brand.500'}
            mt="25px"
            mx="10px"
            _hover={{
              bg: 'brand.400',
            }}
          >
            Submit
          </Button>

          <Button
            onClick={() => navigate('/feed')}
            size="md"
            color={'white'}
            bg={'brand.500'}
            mt="25px"
            mx="10px"
            _hover={{
              bg: 'brand.400',
            }}
          >
            Back
          </Button>
        </Box>
      </form>
    </Box>
  )
}
export default CreatePostForm
