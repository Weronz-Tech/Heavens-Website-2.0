import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          MyApp
        </div>
        <div className="space-x-4 text-white">
          <span>Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Contact</span>
          <span className="bg-black p-2 px-3 rounded-full font-semibold">Book Now</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
