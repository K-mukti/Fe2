import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import HomePage from './pages/home.jsx';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/", //Rute Utama
      element: <HomePage />,
      index: true, 
    },
    {
      path: "/home",
      element: <HomePage />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <RegisterPage />
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;
