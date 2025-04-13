import { Toaster } from 'sonner'
import Navbar from './components/Layout/Navbar/Navbar'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className='h-full w-full px-16 flex-colitems-center flex flex-col' id='app'>
      <Navbar/>
      <Home/>
      <Toaster position="bottom-center"  />
    </div>
  )
}

export default App
