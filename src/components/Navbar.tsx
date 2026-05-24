import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Home, ShoppingBasket } from "lucide-react";
import { Bell } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="w-full flex item-center justify-between border-gray-200 pb-4">
      {/*left*/}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="TrendLama"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />

        <p className="hidden md:block text-md font-medium tracking-wider">
          TRENDLAMA
        </p>
      </Link>
      {/*right*/}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600"/>
        </Link>
        <Bell className="w-4 h-4 text-gray-600"/>
        <ShoppingBasket className="w-4 h-4 text-gray-600"/>
        <Link href ="/login">Sign  In </Link>
      </div>
    </nav>
  );
};

export default Navbar;
