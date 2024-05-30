import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import NoPage from './pages/noPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '*',
      element: <NoPage />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;