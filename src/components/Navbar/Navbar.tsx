import React from 'react'
import Link from "gatsby-link";
import {toPascalCase} from "../../utils/formats";

const navItems: { path: string, description: string }[] = [
  {
    path: "/",
    description: "home"
  }, {
    path: "/portfolio",
    description: "portfolio projects"
  }, {
    path: "/blog",
    description: "blog"
  }, {
    path: "/contact",
    description: "contact"
  }, {
    path: "/about",
    description: "about"
  },
]

const Navbar = () => {
  return (
    <nav className={"flex flex-wrap f3 justify-end content-around"}>
      {
        navItems.map((item) => {
          return <Link className={"link pa2 dim pointer"} to={item.path}>{toPascalCase(item.description)}</Link>
        })
      }
    </nav>
  )
}

export default Navbar;
