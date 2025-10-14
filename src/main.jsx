import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { JobsProvider } from './context/JobsContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobsProvider>
      <App />
    </JobsProvider>
  </StrictMode>,
)
