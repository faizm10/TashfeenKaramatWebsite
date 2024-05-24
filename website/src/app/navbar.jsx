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
      style={{
        backgroundColor: "grey",
        padding: "24px",
      }}
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">Tashfeen</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/dashboard">About Me</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#/">Education</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#/">Photography</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
