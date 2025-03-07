

interface MenuProps {
  isMobile: boolean;
  toggleMenu?: () => void;
}

const Menu = ({ isMobile, toggleMenu }: MenuProps) => {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "#", label: "Features" },
    { href: "Contact", label: "Contact Us" },
    { href: "Support", label: "Support" },
    { href: "#About", label: "About Us" },
  ];

  return (
    <nav
      className={`${
        isMobile ? "flex flex-col bg-white shadow-lg" : "flex space-x-6"
      }`}
    >
      <ul className={`${isMobile ? "space-y-4 py-4" : "flex"}`}>
        {menuItems.map((item) => (
          <li key={item.href} className="relative group">
            {/* Main Menu Item */}
            <div
              className={`flex items-center justify-between ${
                isMobile ? "w-full px-4 py-2" : "px-6 py-1"
              } hover:bg-gray-100 transition cursor-pointer`}
              onClick={toggleMenu}
            >
              <a
                href={item.href}
                className="text-black hover:text-purple-600 flex-grow"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;