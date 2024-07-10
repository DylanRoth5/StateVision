import AuthButton from "./AuthButton";
import ModeToggle from "./modeToggle";
import { Navigation } from "./navMenu";

export default function Nav(){
    return (
        <nav className="w-full flex border-b justify-evenly border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            {/* <DeployButton /> */}
            <div className="flex gap-4">
              <a href="/" className="select-none hover:scale-105 transition duration-105">
                <h1 className="text-xl font-bold text-amber-500">LORENA HUCK</h1>
                <p>I N M O B I L I A R I A</p>
              </a>
              <Navigation/>
            </div>
            <div className="flex gap-4">
            <AuthButton/>
            <ModeToggle />
            </div>
          </div>
        </nav>
    )
}