"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/cards_data.json";
// import Link from "next/link";

function Blogs() {
  return (
    <div id="highlight">
      <div className="min-h-screen   mx-10 py-12">
        <h1 className="text-2xl mb-6 md:text-5xl text-center font-sans font-extrabold  text-[#af3753]">
          News & Blogs
        </h1>
        <div className="flex flex-wrap justify-center">
          {courseData.courses.map((course) => (
            <CardContainer className="inter-var m-4" key={course.slug}>
              <CardBody className="bg-[#FFD1DC] relative group/card  hover:shadow-2xl shadow-emerald-500/[0.1]  border-[#af3753]/[02] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-1">
                  <Image
                    src={course.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-[#af3753]"
                >
                  {course.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-[#af3753] text-sm max-w-sm mt-2"
                >
                  {course.description}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
