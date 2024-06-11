import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import Image from "next/image"
import logodark from "../../../public/logo_dark.svg"
import logolight from "../../../public/logo_light.svg"
import {Menu, Package2} from "lucide-react"
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
return(
    <header className="sticky top-0 flex h-16 justify-between items-center gap-4 bg-background dark:bg-black px-4 md:px-6">
        <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
            <Image className="h-6 w-6 block dark:hidden" src={logodark} alt="Logo D"/>
            <Image className="h-6 w-6 hidden dark:block" src={logolight} alt="Logo D"/>
            <span className="sr-only">Sai Deepak Portfolio</span>
        </Link>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            About Me
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Education
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Resume
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact Me
          </Link>
          <ThemeToggle/>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
              >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Image className="h-6 w-6 block dark:hidden" src={logodark} alt="Logo D"/>
                <Image className="h-6 w-6 hidden dark:block" src={logolight} alt="Logo D"/>
                <span className="sr-only">Sai Deepak Portfolio</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                About Me
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Education
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Resume
              </Link>
              <Link href="#" className="hover:text-foreground">
                Contact Me
              </Link>
              <ThemeToggle/>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
);}