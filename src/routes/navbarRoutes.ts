import { FolderIcon, HomeIcon, UserIcon, UserGroupIcon } from "@heroicons/react/24/solid";

export const navbarRoutes = [
    {
        href: '/products',
        text: "Products",
    },
    {
        href: '/auth/login',
        text: "Login",
    },
    {
        href: '/auth/register',
        text: "Register",
    },
]

export const dashboardRoutes = [
    {
        href: '/dashboard',
        text: "Dashboard",
        icon: HomeIcon,
    },
    {
        href: '/dashboard/profile',
        text: "Profile",
        icon: UserIcon,
    },
    {
        href: '/dashboard/products',
        text: "Productos",
        icon: FolderIcon,
    },
    {
        href: '/dashboard/products/new',
        text: "Crear productos",
        icon: FolderIcon,
    },
    {
        href: '/dashboard/categories/new',
        text: "Crear categorías",
        icon: FolderIcon,
    },
    {
        href: '/dashboard/users',
        text: "Users",
        icon: UserGroupIcon,
    },
]