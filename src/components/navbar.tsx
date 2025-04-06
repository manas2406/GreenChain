"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, LogIn } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/marketplace",
      label: "Marketplace",
      active: pathname === "/marketplace",
    },
    {
      href: "/about",
      label: "About Us",
      active: pathname === "/about",
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Carbon Credit Marketplace</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-foreground/80",
                  route.active ? "text-foreground" : "text-foreground/60",
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex md:gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Sign In
                  <LogIn className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/auth/company/signin">As Company</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/ngo/signin">As NGO</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm">
                  Sign Up
                  <User className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/auth/company/signup">As Company</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/ngo/signup">As NGO</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle Menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <div className="px-7">
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <span className="font-bold">Carbon Credit Marketplace</span>
                </Link>
                <nav className="mt-6 flex flex-col gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-foreground/80",
                        route.active ? "text-foreground" : "text-foreground/60",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ))}
                  <Link
                    href="/auth/company/signin"
                    className="text-sm font-medium transition-colors hover:text-foreground/80"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In as Company
                  </Link>
                  <Link
                    href="/auth/ngo/signin"
                    className="text-sm font-medium transition-colors hover:text-foreground/80"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In as NGO
                  </Link>
                  <Link
                    href="/auth/company/signup"
                    className="text-sm font-medium transition-colors hover:text-foreground/80"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up as Company
                  </Link>
                  <Link
                    href="/auth/ngo/signup"
                    className="text-sm font-medium transition-colors hover:text-foreground/80"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up as NGO
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

