import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import RootLayout from "./pages/Root";
const router=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/about',element:<About/>},
      {path:'/products',element:<Products/>}
    ]
  },

])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
