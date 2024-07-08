import AuthButton from "@/components/AuthButton";
import { CardDemo } from "@/components/card-text";
import { Card } from "@/components/ui/card";
import { NavigationMenuDemo } from "@/components/navMenu";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export default async function ProfilePage() {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
  
    if (!user) {
      return redirect("/login");
    }
    return <div>
        <div className="w-full">
            <div className="py-6 font-bold bg-purple-950 text-center">
                This is a protected page that you can only see as an authenticated
                user
            </div>
            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
                    {/* <DeployButton /> */}
                    <NavigationMenuDemo></NavigationMenuDemo>
                    <AuthButton />
                </div>
            </nav>
        </div>
        <h1 className="text-3xl font-bold text-center mt-10">Profile page</h1>
        <p className="text-center">This is the profile page</p>
        <Card className="m-10 p-2">
            <h1>Profile</h1>
            <p>Profile content</p>
            <p>Profile content</p>
            <p>Profile content</p>
        </Card>
        <div className="flex justify-center">
            <CardDemo></CardDemo>
        </div>
    </div>
}