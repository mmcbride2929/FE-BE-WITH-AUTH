import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { myTheme } from './theme/theme'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Error from './pages/Error'
import Feed from './pages/Feed'
import ProtectedRoute from './pages/ProtectedRoute'
import SinglePost from './pages/SinglePost'
import EditPost from './pages/EditPost'
import { useState } from 'react'

const App = () => {
  const [nav, setNav] = useState(true)
  return (
    <>
      <ChakraProvider theme={myTheme}>
        <BrowserRouter>
          {nav && <Navbar />}
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Feed />
                </ProtectedRoute>
              }
            />
            <Route
              path="/feed"
              element={
                <ProtectedRoute>
                  <Feed />
                </ProtectedRoute>
              }
            />
            <Route path="landing" element={<Landing setNav={setNav} />} />
            <Route path="login" element={<Login setNav={setNav} />} />
            <Route path="register" element={<Register setNav={setNav} />} />
            <Route path="*" element={<Error setNav={setNav} />} />
            <Route path="post/:id" element={<SinglePost />} />
            <Route path="edit-post/:id" element={<EditPost />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
