import Image from "next/image";
import logo from "@/app/house.svg";
import { CogIcon } from "@heroicons/react/24/outline";

export const Navbar: React.FC = () => {
  return <div className="sticky top-0">
    <nav className="flex sticky top-0 py-4 border-white justify-between items-center bg-gradient-to-b from-black from-70%">
      <div className="hover:scale-110 transition-transform duration-200">
        <Image src={logo} width={40} height={40} alt="StateVision Logo" />
      </div>
      <div className="flex align-middle justify-center h-8">
        <a href="/" className="mx-2 hover:border-b-4 border-blue-500 transition-all duration-300 opacity-50 hover:opacity-100">Home</a>
        <a href="/properties" className="mx-2 hover:border-b-4 border-blue-500 transition-all duration-300 opacity-50 hover:opacity-100">Properties</a>
        <a href="/properties" className="mx-2 hover:border-b-4 border-blue-500 transition-all duration-100 opacity-50 hover:opacity-100">About us</a>
        <a href="/properties" className="mx-2  hover:border-b-4 border-blue-500 transition-all duration-100 opacity-50 hover:opacity-100"><CogIcon className="h-5 w-5 text-white" /></a>
      </div>
    </nav>
  </div>
} 