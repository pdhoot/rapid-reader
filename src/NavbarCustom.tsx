function NavbarCustom() {
  return (
    <>
      <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-10">
        <div className="w-full px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="RapidRead logo 2.png"
              alt="Rapid Reader Logo"
              className="h-8 w-8 mr-2"
            />
            <div className="text-2xl font-bold text-gray-800">RapidRead</div>
          </div>
          <div className="space-x-6">
            {/* <a href="#" className="text-gray-700 hover:text-blue-500">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Features
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Pricing
              </a> */}
            <a
              href="mailto:ayush@rapidread.io?subject=Feedback%20for%20RapidRead"
              className="text-gray-700 hover:text-blue-500"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarCustom;
