import ContactCard from "@/components/layout/contact-card";
// import SubscribeFormContainer from "@/components/subscribe-form-container";
import Link from "next/link";
import { contactChannels } from "@/lib/data";
import Socials from "@/components/shared/socials";

export default function Contact() {
  return (
    <footer>
      <section className="mx-10" id="contact-us">
        <article className="py-12 md:py-24 ">
          <h3 className="text-2xl md:text-4xl font-sans  text-black">
            We&apos;d love to hear from you
          </h3>
          <p>Our friendly team is always here to chat.</p>
        </article>

        <article className="pb-12 md:pb-24 grid md:grid-cols-3 gap-6">
          {contactChannels.map((i) => (
            <ContactCard key={i.header} {...i} />
          ))}
        </article>
      </section>
      {/* <section className="bg-secondary-900 py-10">
        <div className="container grid gap-6 lg:gap-8 text-white">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className="flex flex-col gap-6">
              <div className="grid gap-6">
                <ul className="flex flex-col lg:flex-row gap-4">
                  {routes.map(({ links, ...item }) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
                <Socials className="[&_*]:text-white" />
              </div>
            </div>

            <SubscribeFormContainer />
          </div>
          <hr />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-1">
            <p>&copy; {currentYear} Free Tribe Network</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </section> */}
    </footer>
  );
}
