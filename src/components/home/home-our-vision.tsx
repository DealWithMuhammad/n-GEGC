import Image from "next/image";

export default function HomeOurVision() {
  return (
    <section className="bg-[#9B5DE5] my-14 py-7">
      <article className="container grid lg:grid-cols-[1fr,625px] gap-10 items-center">
        <div className="mx-5 md:mx-10">
          <h2 className="text-secondary-50 font-semibold text-2xl md:text-5xl">
            Our Mission
          </h2>
          <p className="text-secondary-100 max-w-[35rem]">
            To address the unique mental stresses faced by refugees, such as
            adapting to new environments, overcoming break-ups, and dealing with
            isolation. We provide resources and a supportive community to foster
            resilience and personal growth.
          </p>
        </div>

        <div className="grid sm:max-lg:grid-cols-3 lg:grid-cols-2 [&>div]:pt-4 [&>div]:px-4">
          <div className="flex flex-col max-lg:justify-between lg:flex-row lg:items-center gap-4 bg-[#FFD1DC] lg:col-span-2">
            <div className="">
              <span className="bg-primary-900 py-[2px] px-1 text-primary-100">
                SDG 5
              </span>
              <h4 className="text-[#af3753] py-2 text-2xl md:text-3xl uppercase lg:max-w-[11.625rem]">
                Women Growth
              </h4>
            </div>
            <div className="flex lg:flex-1 justify-end"></div>
          </div>
          <div className="flex flex-col justify-between gap-4 bg-[#3ABAC6]">
            <div className="">
              <span className="bg-secondary-800 py-[2px] px-1 text-secondary-100 ">
                SDG 10
              </span>
              <h4 className="text-secondary-800 text-2xl md:text-3xl uppercase">
                reduced inequalities
              </h4>
            </div>
            <div className="flex justify-end"></div>
          </div>
          <div className="grid items-center gap-4 bg-[#BFD8D2]">
            <div className="">
              <span className="bg-secondary-900 py-[2px] px-1 text-secondary-100 ">
                SDG 3
              </span>
              <h4 className="text-primary-800 text-2xl md:text-3xl uppercase">
                good health and well being
              </h4>
            </div>
            <div className="flex justify-end">
              <Image
                src="/images/sdg/sdg-3.svg"
                alt="sdg-3"
                width={309}
                height={241}
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
