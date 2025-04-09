import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sharad from './Sharad.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sharad/>
  </StrictMode>,
)
