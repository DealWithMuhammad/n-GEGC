"use client";

import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import navLinks from "./HeaderLinks";

import Link from "next/link";
import React, { useRef } from "react";
import { VscListFlat } from "react-icons/vsc";
import { AppLogo } from "../AppLogo";

export const NavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = useRef();

  return (
    <>
      <Button
        bg={"#FFD1DC"}
        ref={btnRef}
        border={"1px"}
        onClick={onOpen}
        borderColor={"#fff"}
      >
        <VscListFlat />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <AppLogo />
          </DrawerHeader>
          <Divider />

          <DrawerBody>
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="">
                <Box
                  width={"100%"}
                  p={"10px"}
                  className="hover:bg-gradient-to-r from-[#FFD1DC] via-[#FFD1DC] to-[#FFD1DC]"
                >
                  {link.label}
                </Box>
              </Link>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
