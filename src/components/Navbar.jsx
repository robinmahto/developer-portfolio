import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to='/' >
         <p>Robin</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar