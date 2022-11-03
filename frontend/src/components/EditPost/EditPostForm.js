import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
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
  const path = location.pathname.split('/')[1]

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

    // if successful
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }

  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Species</FormLabel>
            <Input
              name="species"
              onChange={handleChange}
              type="string"
              placeholder="Enter species"
              value={values.species}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Photo</FormLabel>
            <Input
              name="photo"
              onChange={handleChange}
              type="string"
              placeholder="Upload photo"
              value={values.photo}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Bait Type</FormLabel>
            <Input
              name="bait"
              onChange={handleChange}
              type="string"
              placeholder="Enter bait"
              value={values.bait}
            />
          </FormControl>

          <FormLabel>Location</FormLabel>
          <Input
            name="location"
            onChange={handleChange}
            type="string"
            placeholder="Enter location"
            value={values.location}
          />

          <FormLabel>Length</FormLabel>
          <Input
            name="length"
            onChange={handleChange}
            type="number"
            placeholder="Enter length"
            value={values.length || 0}
          />

          <FormLabel>Weight</FormLabel>
          <Input
            name="weight"
            onChange={handleChange}
            type="number"
            placeholder="Enter weight"
            value={values.weight || 0}
          />
          {showAlert ? <p>{alertText}</p> : ''}
          <Button
            type="submit"
            size="lg"
            bg={'brand.200'}
            _hover={{
              bg: 'brand.300',
            }}
            color={'white  '}
          >
            Submit
          </Button>
        </form>
      )}{' '}
    </>
  )
}
export default EditPostForm
