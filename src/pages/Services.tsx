import { Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-rose-400'>Services Page</h1>
      <Outlet />
    </div>
  );
};

export default Services;
