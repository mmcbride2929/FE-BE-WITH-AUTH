import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import AppContext from '../context/AppContext'

const initialState = {
  species: '',
  photo: '',
  bait: '',
  location: '',
  length: 0,
  weight: 0,
}

const CreatePostForm = () => {
  // form values
  const [values, setValues] = useState(initialState)
  const { showAlert, alertText, createPost } = useContext(AppContext)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createPost(values)
    e.target.reset()
    setValues(initialState)
  }

  return (
    <>
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
          value={values.length}
        />

        <FormLabel>Weight</FormLabel>
        <Input
          name="weight"
          onChange={handleChange}
          type="number"
          placeholder="Enter weight"
          value={values.weight}
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
    </>
  )
}
export default CreatePostForm
