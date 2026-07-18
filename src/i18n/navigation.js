import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Wrappers de navegação cientes do idioma (use no lugar de next/link e next/navigation).
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
