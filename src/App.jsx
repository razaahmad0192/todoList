import Home from  './components/Home'
import Navbar from './components/Navbar'
import Todo from './components/Todo'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Home/></>
    },
    {
      path: '/home',
      element: <><Navbar/><Home/></>
    },
    {
      path: '/tasks',
      element: <><Todo/></>
    }
  ])
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
