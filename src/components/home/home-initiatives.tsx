"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { FaRegHeart } from "react-icons/fa";

export default function HomeInitiatives() {
  return (
    <section className="bg-[#FFD1DC] my-10 py-10 lg:py-14 ">
      <article className="container grid gap-6 text-center justify-center [&_p]:max-w-3xl">
        <div className=" items-center mx-10">
          <h2 className="font-semibold text-[#af3753] text-3xl md:text-5xl">
            Our Initiatives
          </h2>
          <p className="text-[#af3753] mt-4">
            GEGC supports refugee girls through personal development activities
            such as sports, arts, leadership training, and mental health
            workshops. They foster community by connecting refugees with local
            Malaysian youth, promoting shared experiences and mutual growth.
          </p>
        </div>

        <div className="grid gap-10">
          {/* <Link href="/our-initiatives" className="mx-auto"> */}

          {/* </Link> */}
        </div>
      </article>
    </section>
  );
}
