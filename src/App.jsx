import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import JobDetails from "./pages/JobDetails"
import Home from "./pages/Home"


function App() {

  return (
    <Layout>
      <BrowserRouter basename={`${import.meta.env.VITE_BASE_URL}`}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jobs/:jobid" element={<JobDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
