import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export function Header() {
  return (
    <header className="w-full px-1 bg-slate-200">
      <nav className="w-full max-w-7xl h-14 flex  items-center justify-between px-5 mx-auto">
        <Link className="font-bold text-2xl" to="/">
          {" "}
          Dev Shop
        </Link>

        <Link className=" relative" to="/cart">
          <FiShoppingCart size={24} color="#121212" />
          <span className=" absolute -top-3 left-3 flex justify-center items-center rounded-full w-5 h-5 bg-sky-500 text-white text-xs">
            2
          </span>
        </Link>
      </nav>
    </header>
  );
}
