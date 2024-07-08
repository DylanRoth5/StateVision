import AuthButton from "@/components/AuthButton";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navMenu";

export default function ConfigPage() {
  return (
    <div className="h-screen ">
              <div className="w-full">
            <div className="py-6 font-bold bg-purple-950 text-center">
                This is a protected page that you can only see as an authenticated
                user
            </div>
            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
                    {/* <DeployButton /> */}
                    <Navigation></Navigation>
                    <AuthButton />
                </div>
            </nav>
        </div>
      <h1 className="text-3xl font-bold text-center mt-10">Config page</h1>

      
      <Footer/>
    </div>
  );
}
