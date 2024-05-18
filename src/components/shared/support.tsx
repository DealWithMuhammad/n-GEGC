// import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Support() {
  return (
    <section className="relative z-[2] bg-[#9B5DE5]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-18 p-10 pb-0 md:p-0 container ">
        <div className="order-last md:order-first overflow-hidden">
          <Image
            src="/support.jpg"
            title="support"
            alt="support"
            width={500}
            height={500}
            className="overflow-hidden"
          />
        </div>
        <div className="text-white flex items-center gap-7">
          <div className="max-w-md">
            <h2 className="text-secondary-50 font-sans font-extrabold mb-3 text-2xl md:text-5xl">
              Support Our Mission Today!
            </h2>
            <p>
              Join our cause to transform structures around reproductive health
              and family well-being.
            </p>
          </div>
          <Link href="/donate">
            {/* <Button className="bg-white hover:bg-white py-2 px-4 w-fit text-primary">
              Donate
            </Button> */}
          </Link>
        </div>
      </div>
    </section>
  );
}
