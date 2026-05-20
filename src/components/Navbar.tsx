import Image  from "next/image";
import Link from "next/link"
import SearchBar from "./SearchBar";
const Navbar = () => {
  return <nav className="w-full flex item-center justify-between border-b border-gray-200 pb-4">
    {/*left*/}
    <Link href = "/" className="flex items-center">
    <Image 
    src = "/logo.png"
    alt = "TrendLama"
    width = {36}
    height = {36}
    className = "w-6 h-6 md:w-9 md:h-9"
/>
 
 <p className="hidden  md:block text-md font-medium tracking-wider">TRENDLAMA</p>
    </Link>
    {/*right*/}
    <SearchBar/>
  </nav>;
};

export default Navbar;
