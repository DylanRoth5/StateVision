import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex flex-row items-center gap-2">
      <p className="text-sm font-bold hidden md:block">{user.email}</p>
      <a href="/protected/profile"></a>
      <DropdownMenu>
        <DropdownMenuTrigger className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-accent hover:text-accent-foreground">Options</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <form action={signOut}>
              <button type="submit">Logout</button>
            </form>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Admin</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/protected/dashboard">Dashboard</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ) : (
    <Button asChild>
      <Link
        href="/login"
        className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        Login
      </Link>
    </Button>
  );
}
