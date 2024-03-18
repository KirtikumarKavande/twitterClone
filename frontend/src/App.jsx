import { Button } from "@chakra-ui/react"
import { Container } from '@chakra-ui/react'
import { Route, Router, Routes } from "react-router-dom"
import User from "./pages/User"
import Post from "./pages/Post"
import Header from "./components/Header"

const App = () => {
  return (
    <Container maxW={"620px"} border={"1px solid red"}>
      <Header/>
      <Routes>
        <Route path="/:username" element={<User/>} />
        <Route path="/:username/post/:pId" element={<Post/>} />

      </Routes>
    </Container>
  )
}

export default App