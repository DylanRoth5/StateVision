import AuthButton from "./AuthButton";
import { Navigation } from "./navMenu";

export default function Nav(){
    return (
        <nav className="w-full flex border-b justify-evenly border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            {/* <DeployButton /> */}
            <div className="flex gap-4">
              <div>
                <h1 className="text-xl font-bold">Lorena Huck</h1>
                <p>INMOBILIARIA</p>
              </div>
              <Navigation/>
            </div>
            <div className="flex gap-4">
            <AuthButton/>
            </div>
          </div>
        </nav>
    )
}