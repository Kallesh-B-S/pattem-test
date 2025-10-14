import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Job from "./pages/job"


function App() {

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jobs/:jobid" element={<Job />}></Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
