import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AppLogo } from "../AppLogo";
import navLinks from "./HeaderLinks";
import { NavMenu } from "./NavMenu";
import { FaRegHeart } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar
      maxWidth="2xl"
      shouldHideOnScroll
      className="bg-[#ffffff]"
      classNames={{
        item: ["flex", "relative"],
      }}
    >
      <NavbarBrand>
        <AppLogo />
      </NavbarBrand>

      <NavbarContent className="hidden md:flex  gap-7" justify="end">
        {navLinks.map((link, index) => (
          <NavbarItem key={index}>
            <Link
              color="foreground"
              className="text-[#3ABAC6] font-semibold"
              href={link.href}
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem className="hidden md:flex">
          <Button
            className="text-[16px] text-white rounded-none bg-[#3ABAC6]  py-2 px-8"
            as={Link}
            color="#FFD1DC"
            href="#"
            variant="flat"
            startContent={<FaRegHeart className="text-[16px]" />}
          >
            Donate
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="md:hidden flex">
        <NavMenu />
      </NavbarContent>
    </Navbar>
  );
}
