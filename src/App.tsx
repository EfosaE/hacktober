import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Services from './pages/Services';
import Titles from './pages/Titles';

// Components that return only strings

const Men = () => 'Men';
const Women = () => 'Women';
const Electronics = () => {
  return (
    <div>
     
      <Outlet />
    </div>
  );
};
const Phones = () => 'Phones';
const Laptops = () => 'Laptops';

const SameDayDelivery = () => 'Same Day Delivery';
const CustomizedServices = () => 'Customized Services';

// This config is based on the data structure you sent
const router = createBrowserRouter([
  {
    path: '/',
    element: <Titles />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/products',
    element: <Products />,
    children: [
      {
        path: 'men',
        element: <Men />,
      },
      {
        path: 'women',
        element: <Women />,
      },
      {
        path: 'electronics',
        element: <Electronics />,
        children: [
          {
            path: 'phones',
            element: <Phones />,
          },
          {
            path: 'laptops',
            element: <Laptops />,
          },
        ],
      },
    ],
  },
  {
    path: '/services',
    element: <Services />,
    children: [
      {
        path: 'same-day-delivery',
        element: <SameDayDelivery />,
      },
      {
        path: 'customized-services',
        element: <CustomizedServices />,
      },
    ],
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
