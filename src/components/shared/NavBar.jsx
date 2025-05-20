import { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../../assets/logo";
import { Search, Profile, Hamburger } from "../../assets/MenuIcons";
import WishlistIcon from "../../assets/wishlisticon.png";
import CartIcon from "../../assets/cart.png";
import MenuContent from "../home/MenuContent";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    "Women",
    "Men",
    "Leather",
    "Outlet",
    "Be Inspired",
    "Stores",
  ];

  const componentMap = {
    Women: <MenuContent />,
    Men: <MenuContent />,
    Leather: <MenuContent />,
    Outlet: <MenuContent />,
  };
  return (
    <>
      <nav className="w-full  bg-white z-500 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Left: Logo + Menu */}
          <div className="flex items-center space-x-10">
            {/* Logo */}
            <div className="w-[150px] lg:w-[250px] flex">
              <Logo className="w-full h-full object-contain" />
            </div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6 items-center">
              {menuItems.map((item) => (
                <div
                  key={item}
                  className="relative group"
                  onMouseEnter={() => {
                    if (item !== "Be Inspired" && item !== "Stores")
                      setHoveredItem(item);
                  }}
                  onMouseLeave={() => {
                    if (item !== "Be Inspired" && item !== "Stores")
                      setHoveredItem(null);
                  }}
                >
                  <button
                    className="text-sm font-semibold uppercase tracking-wide hover:underline cursor-pointer"
                    onClick={() => {
                      if (item === "Be Inspired") navigate("/be-inspired");
                      if (item === "Stores") navigate("/stores");
                    }}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="w-5 h-5 flex items-center justify-center">
              <Search className="w-full h-full" />
            </div>
            <div className="w-5 h-5 hidden lg:flex items-center justify-center">
              <Profile className="w-full h-full" />
            </div>
            <div className="w-7 h-7 flex items-center justify-center">
              <img
                src={WishlistIcon}
                alt="Wishlist"
                className="w-full h-full object-contain"
              />
            </div>
            <div
              className="w-7 h-7 hidden lg:flex items-center justify-center cursor-pointer"
              onMouseEnter={() => setShowCart(true)}
            >
              <img
                src={CartIcon}
                alt="Cart"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-5 h-5 block lg:hidden items-center justify-center">
              <Hamburger className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Full Screen Hover Modal for Component-based Items */}
        <AnimatePresence>
          {hoveredItem && componentMap[hoveredItem] && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onMouseEnter={() => setHoveredItem(hoveredItem)}
              onMouseLeave={() => setHoveredItem(null)}
              className="absolute  left-0 w-full bg-white z-40 p-8 "
            >
              {componentMap[hoveredItem]}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cart Side Modal */}
        <AnimatePresence>
          {showCart && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Your Cart</h2>
                {/* <X
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setShowCart(false)}
                /> */}
              </div>
              <p>Cart items go here.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Side Modal */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="absolute right-0 top-0 w-64 bg-white h-full shadow-xl p-4"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-lg font-bold">Menu</div>
                {/* <X
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                /> */}
              </div>
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-medium cursor-pointer hover:text-blue-500"
                  >
                    {item}
                  </li>
                ))}
                <li className="text-sm font-medium cursor-pointer hover:text-blue-500">
                  Profile
                </li>
                <li className="text-sm font-medium cursor-pointer hover:text-blue-500">
                  Wishlist
                </li>
              </ul>
            </motion.div>
          </div>
        )}
      </nav>
    </>
  );
};
export { NavBar };
