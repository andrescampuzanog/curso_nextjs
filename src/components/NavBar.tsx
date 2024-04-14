import Link from "next/link";
import { navbarRoutes } from "@/routes/navbarRoutes";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions";

export const dynamic = "force-dynamic";

async function NavBar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between px-20 bg-slate-300 py-2">
      <h1>NextjsFull</h1>
      <ul className="flex gap-x-3">
        {session && (
          <>
            {navbarRoutes.map(
              (route) =>
                route.auth && (
                  <li key={route.href}>
                    <Link href={route.href}>{route.text}</Link>
                  </li>
                )
            )}
            <li>Hi {session?.user?.name} {session?.user?.lastName}</li>
          </>
        )}

        {!session &&
          navbarRoutes.map(
            (route) =>
              !route.auth && (
                <li key={route.href}>
                  <Link href={route.href}>{route.text}</Link>
                </li>
              )
          )}
      </ul>
    </nav>
  );
}

export default NavBar;
