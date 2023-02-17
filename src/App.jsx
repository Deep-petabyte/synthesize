import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AnimatedRoutes from "./Components/AnimatedRoutes";
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedRoutes/>
      </BrowserRouter>

    </div>
  )
}

export default App
