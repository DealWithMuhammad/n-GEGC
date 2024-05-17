// import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Support() {
  return (
    <section className="relative z-[2] bg-[#9B5DE5]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-18 container pt-20 lg:pt-40">
        <div className="order-last lg:order-first max-lg:max-h-96 overflow-hidden">
          <Image
            src="/support.jpg"
            title="support"
            alt="support"
            width={674}
            height={522}
            className="w-full max-w-full overflow-hidden"
          />
        </div>
        <div className="text-white flex flex-col gap-7">
          <div className="h2-gap max-w-md">
            <h2>Support Our Mission Today!</h2>
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
