import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* LOGO */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-green-400 cursor-pointer"
        >
          E-Shop
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 items-center">
          {/* USER MENU */}
          {(!user || user.role === "user") && (
            <>
              <Link to="/" className="hover:text-green-400">
                Home
              </Link>
              <Link to="/products" className="hover:text-green-400">
                Products
              </Link>
              <Link to="/about" className="hover:text-green-400">
                About
              </Link>
              <Link to="/contact" className="hover:text-green-400">
                Contact
              </Link>

              {/* CART */}
              {user && (
                <div
                  onClick={() => navigate("/cart")}
                  className="relative cursor-pointer"
                >
                  <ShoppingCart className="hover:text-green-400" />
                </div>
              )}

              {/* USER DROPDOWN */}
              {user && (
                <div className="relative">
                  <User
                    className="cursor-pointer hover:text-green-400"
                    onClick={() => setDropdown(!dropdown)}
                  />

                  {dropdown && (
                    <div className="absolute right-0 mt-3 w-40 bg-white text-black rounded shadow-lg">
                      <button
                        onClick={() => {
                          navigate("/myorders");
                          setDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        My Orders
                      </button>

                      <button
                        onClick={() => {
                          handleLogout();
                          setDropdown(false);
                        }}
                        className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {/* ADMIN MENU */}
          {user?.role === "admin" && (
            <>
              <Link to="/admin/add-product" className="hover:text-green-400">
                Add Product
              </Link>

              <Link to="/admin/products" className="hover:text-green-400">
                Product Management
              </Link>

              <Link to="/admin/orders" className="hover:text-green-400">
                Orders
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-400 hover:text-red-500"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          )}

          {/* AUTH */}
          {!user && (
            <Link
              to="/signup"
              className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
            >
              Sign Up
            </Link>
          )}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          {open ? (
            <X size={28} onClick={() => setOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-800 px-5 pb-5">
          <ul className="flex flex-col gap-4">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/products" onClick={closeMenu}>
              Products
            </Link>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>

            {user && (
              <>
                <Link to="/my-orders" onClick={closeMenu}>
                  My Orders
                </Link>

                <button
                  onClick={() => {
                    handleLogout();
                    closeMenu();
                  }}
                  className="flex items-center gap-2 text-red-400"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            )}

            {!user && (
              <Link
                to="/signup"
                onClick={closeMenu}
                className="bg-green-500 px-4 py-2 rounded"
              >
                Sign Up
              </Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
