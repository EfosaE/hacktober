import { Outlet } from "react-router-dom"


const Products = () => {
  return (
    <div className='container mx-auto'>
      <h1 className="text-rose-400">Products Page</h1>
      <Outlet />
    </div>
  );
}

export default Products