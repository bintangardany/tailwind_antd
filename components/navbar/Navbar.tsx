
const Navbar = () => {

    return (

        <header className="flex justify-between items-center px-10 py-5 shadow-md">
          <a href="#">
        <img src="/images/logo.png" alt="Logo" width={120}  />
        </a> 
         <nav className="space-x-8">
            <a href="#" className="text-gray-700">Home</a>
            <a href="#" className="text-gray-700">Event</a>
            <a href="#" className="text-gray-700">Translator</a>
            <button className="text-blue-600 font-bold">Join as Translator</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign in</button>
          </nav>
        </header>
  

    )
}

export default Navbar