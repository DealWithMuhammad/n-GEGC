import { Button } from "@chakra-ui/react";
import React from "react";

function Hero() {
  return (
    <div className="h-[90vh] flex justify-center items-center text-center px-10 md:px-32">
      <div>
        <h1 className="font-bold text-3xl md:text-5xl">
          Empowerment Awaits at{"  "}
          <span className=" bg-gradient-to-r from-[#9B5DE5] via-[#3ABAC6] to-[#9B5DE5] bg-clip-text text-transparent">
            Girls' Sports Galaxy Club
          </span>
        </h1>
        <p className="mt-4 ">
          Welcome to Girls' Sports Galaxy Club - Where Dreams Take Flight &
          Hearts Heal!
        </p>
        <Button
          bgGradient="linear(to-r, #FFD1DC, #FFD1DC, #9B5DE5)"
          _hover={{
            bgGradient: "linear(to-r, #9B5DE5, #FFD1DC, #FFD1DC)",
          }}
          rounded={"2xl"}
          px={"20px"}
          className="mt-4 "
        >
          Join Us
        </Button>
      </div>
    </div>
  );
}

export default Hero;
