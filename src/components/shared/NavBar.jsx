import { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../../assets/logo";
import { Search, Profile } from "../../assets/MenuIcons";
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
      <nav className="w-full p-4 border-b shadow-sm bg-white   z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between space-x-10">
          <div className="flex">
            {/* Logo */}
            <Logo />

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6 items-center relative">
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
                    className="text-sm font-medium hover:underline"
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

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 flex items-center justify-center">
              <Search className="w-full h-full" />
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <Profile className="w-full h-full" />
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <img
                src={WishlistIcon}
                alt="Wishlist"
                className="w-full h-full object-contain"
              />
            </div>
            <div
              className="w-6 h-6 flex items-center justify-center"
              MouseEnter={() => setShowCart(true)}
            >
              <img
                src={CartIcon}
                alt="Cart"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center space-x-4 ml-auto">
            {/* <Search className="w-5 h-5 cursor-pointer" />
            <ShoppingBag className="w-5 h-5 cursor-pointer" />
            <Menu
              className="w-6 h-6 cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            /> */}
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
              className="absolute top-full left-0 w-full bg-white shadow-md z-40 p-8 border-t"
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
                <X
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setShowCart(false)}
                />
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
                <X
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                />
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
