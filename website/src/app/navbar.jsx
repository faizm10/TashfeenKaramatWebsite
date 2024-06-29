"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";

export default function NavBar() {
  return (
    <Navbar
      className=" bg-secondary"
      style={{
        padding: "24px",
      }}
    >
      <NavbarBrand>
        <Link className="font-bold text-inherit" href="/">
          Tashfeen
        </Link>
        {/* <p className="font-bold text-inherit">Tashfeen</p> */}
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 text-white"
        justify="center"
      >
        <NavbarItem>
          <Link href="/about" className="text-white">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/education" className="text-white">
            Education
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/photography" className="text-white">
            Photography
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
