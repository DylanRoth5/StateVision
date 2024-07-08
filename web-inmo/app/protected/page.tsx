import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { NavigationMenuDemo } from "@/components/navMenu";
import { AspectRatioDemo } from "@/components/aspectRatio";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Nav from "@/components/Nav";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <div className="py-6 font-bold bg-purple-950 text-center">
          This is a protected page that you can only see as an authenticated
          user
        </div>
        <Nav></Nav>
      </div>
      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <Header />
        <div>

        </div>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Creado por{" "}
          <a
            href="https://instagram.com/dylan_roth5"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Dylan Roth
          </a>
        </p>
      </footer>
    </div>
  );
}
