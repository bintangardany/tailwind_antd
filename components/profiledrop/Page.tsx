import { useState, useEffect, useRef } from 'react';



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null); // Tambahkan ref untuk dropdown
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    // Menutup dropdown saat klik di luar
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => { 
        const target = event.target as Node; // Menyimpan target dengan tipe Node
        if (dropdownRef.current && !dropdownRef.current.contains(target)) {
          setIsOpen(false); // Menutup dropdown jika klik di luar
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    return (
      <div className="bg-white shadow p-4 flex justify-between items-center relative">
        <h1 className="text-xl font-bold">Client</h1>
        <div className="relative"> {/* Parent relative untuk positioning dropdown */}
          {/* Button untuk membuka dropdown */}
          <button onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none">
            <img src="/images/1.png" alt="Admin" className="h-12 w-12 rounded-full" />
            <span className="ml-2">Kim Da Mi</span>
          </button>
  
          {/* Dropdown */}
          {isOpen && (
            <div
              ref={dropdownRef} // Tambahkan ref pada elemen dropdown
              className="absolute mt-2 left-0 w-48 bg-white rounded-lg shadow-lg py-2 z-20" // Menyesuaikan posisi dropdown
            >
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Logout
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Help
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Feedback
              </a>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default Header;
