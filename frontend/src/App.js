import { BrowserRouter } from 'react-router-dom'
import RouterConfig from './navigation/RouterConfig'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <RouterConfig />
    </BrowserRouter>
  )
}

export default App
