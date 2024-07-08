import AuthButton from "./AuthButton";
import { NavigationMenuDemo } from "./navMenu";

export default function Nav(){
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            {/* <DeployButton /> */}
            <div className="flex gap-4">
              <div>
                <h1 className="text-xl font-bold">Lorena Huck</h1>
                <p>INMOBILIARIA</p>
              </div>
              <NavigationMenuDemo/>
            </div>
            <div className="flex gap-4">
            </div>
            <AuthButton />
          </div>
        </nav>
    )
}