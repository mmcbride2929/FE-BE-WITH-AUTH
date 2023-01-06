import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const initialState = {
  species: '',
  photo: '',
  bait: '',
  location: '',
  length: 0,
  weight: 0,
  createdBy: '',
}

const EditPostForm = () => {
  // setting initial value to current post
  const [values, setValues] = useState(initialState)
  const [loading, setLoading] = useState(true)

  // getting item ID from react router's parameter
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  const { showAlert, alertText, updatePost } = useContext(AppContext)

  const navigate = useNavigate()

  const fetchPost = async () => {
    try {
      const data = await axios.get(`http://localhost:2121/api/v1/posts/${path}`)
      setValues(data.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPost()
    setLoading(false)
  }, [])

  const handleChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  // send token in header
  const handleSubmit = (e) => {
    e.preventDefault()
    updatePost(values, path)

    setTimeout(() => {
      navigate('/feed')
    }, 2000)
  }

  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <Box
          bg="white"
          p="25px"
          w="100%"
          border="1px"
          borderColor="silver"
          borderRadius="5px"
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
            />
            {showAlert ? <p>{alertText}</p> : ''}
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
      )}
    </>
  )
}
export default EditPostForm
