import Navbar from './components/Layout/Navbar/Navbar'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className='h-full w-full px-16 flex-col items-center bg-amber-200 flex display-column'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
