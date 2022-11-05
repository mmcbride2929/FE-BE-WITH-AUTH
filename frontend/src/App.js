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

const App = () => {
  return (
    <>
      <ChakraProvider theme={myTheme}>
        <BrowserRouter>
          <Navbar />
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

            <Route path="landing" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="post/:id" element={<SinglePost />} />
            <Route path="edit-post/:id" element={<EditPost />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
