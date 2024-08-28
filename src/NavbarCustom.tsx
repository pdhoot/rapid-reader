function NavbarCustom() {
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-10">
      <div className="w-full px-4 sm:px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="RapidRead logo 2.png"
            alt="Rapid Reader Logo"
            className="h-6 w-6 sm:h-8 sm:w-8 mr-2"
          />
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            RapidRead
          </div>
        </div>
        <div>
          <a
            href="mailto:ayush@rapidread.io?subject=Feedback%20for%20RapidRead"
            className="text-gray-700 hover:text-blue-500 text-sm sm:text-base"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarCustom;
