"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { useMobile } from "@/hooks/use-mobile"
import { useAuth } from '@/context/auth-context'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { toast } = useToast()
  const isMobile = useMobile()
  const pathname = usePathname()
  const { user, isAuthenticated, isLoading, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    // { name: 'Portfolio', href: '/#portfolio' },
    // { name: 'Market Insights', href: '/#insights' },
    { name: 'My Account', href: '/dashboard' },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300",
        isScrolled
          ? "border-border/60 bg-background/85 shadow-lg shadow-black/5 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            RealtyFi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="relative hidden items-center rounded-full border border-slate-200/60 bg-white/80 p-1 text-sm font-medium shadow-lg shadow-black/5 backdrop-blur dark:border-white/10 dark:bg-slate-900/40 md:flex">
          <div className="flex items-center gap-1 rounded-full bg-white/60 p-1 dark:bg-white/5">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70",
                  pathname === item.href
                    ? "bg-white text-slate-900 shadow-sm shadow-black/10 dark:bg-white/95"
                    : "text-slate-500 hover:text-slate-900 hover:bg-white/30 dark:text-slate-200 dark:hover:text-white dark:hover:bg-white/10"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden items-center space-x-3 md:flex">
          <ModeToggle />
          <ConnectButton />
          {isLoading ? (
            <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />
          ) : isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`https://avatar.vercel.sh/${user?.email}`} alt={user?.email} />
                    <AvatarFallback>{user?.email?.[0]?.toUpperCase()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem className="flex flex-col items-start">
                  <div className="text-sm font-medium">{user?.email}</div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/dashboard" className="w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-4">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background/95 pt-20 px-5 backdrop-blur">
          <nav className="flex flex-col space-y-4 py-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-lg font-medium transition hover:bg-muted",
                  pathname === item.href && "bg-muted/80 text-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-4 space-y-4">
            <ConnectButton />
            {!isAuthenticated && (
              <Link href="/login">
                <Button className="w-full">Login</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

