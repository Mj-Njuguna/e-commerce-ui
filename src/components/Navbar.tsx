import Image  from "next/image";
import Link from "next/link"
const Navbar = () => {
  return <nav>
    {/*left*/}
    <Link href = "">
    <Image 
    src = "/logo.png"
    alt = "TrendLama"
    width = {36}
    height = {36}
    className = "w-6 h-6 :w-9 md:h-9"
/>
    </Link>
    {/*right*/}
  </nav>;
};

export default Navbar;
