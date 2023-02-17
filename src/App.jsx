import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AnimatedRoutes from "./Components/AnimatedRoutes";


function App() {

  return (
    <div className="app " >
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>

    </div>
  )
}

export default App
