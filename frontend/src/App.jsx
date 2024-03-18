import { Button } from "@chakra-ui/react"
import { Container } from '@chakra-ui/react'
import { Router, Routes } from "react-router-dom"
import User from "./pages/User"
import Post from "./pages/Post"

const App = () => {
  return (
    <Container maxW={"620px"} border={"1px solid red"}>
      <Routes>
        <Router path="/:username" element={<User/>} />
        <Router path="/:username/post/:pId" element={<Post/>} />

      <Button>Hi</Button>
      </Routes>
    </Container>
  )
}

export default App