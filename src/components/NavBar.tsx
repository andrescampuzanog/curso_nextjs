import Link from "next/link";
import { navbarRoutes } from '@/routes/navbarRoutes';

function NavBar() {
  return (
    <nav>
      <ul>
        {navbarRoutes.map(({ href, text }) => (
          <li key={href}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
