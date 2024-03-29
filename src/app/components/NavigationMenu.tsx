"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string}[] = [
  {
    title: "Architecting Tomorrow: Submit Construction Solutions",
    href: "/architecting-tomorrow",
  },
  {
    title: "Elecate your Vision: Stellar Construction Innovations",
    href: "/elevate-vision",
  },
  {
    title: "Crating Dreams: Pioneer Construction Services",
    href: "/creating-dreams",
  },
  {
    title: "Dynamic Construction Solutions: Building Tomorrow, Today",
    href: "/dynamic-construction",
  },
]

const  NavigationMenuDemo = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-screen mx-auto text-[.5rem] flex-col lg:w-[200px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {/* {component.description} */}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-[.9rem] lg:text-[.7rem] border-b px-3 w-full hover:text-yellow-500 py-5 font-medium leading-none">{title}</div>
          <p className=" text-[.6rem] leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default NavigationMenuDemo
