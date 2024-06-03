import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import NoPage from './pages/noPage';
import Header from './components/header';

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
    <>
      {window.location.href === 'http://localhost:3000/'         || 
       window.location.href === 'http://localhost:3000/register'  ? <></> : <Header /> }
      <RouterProvider router={router} />
    </>
  );
}

export default App;