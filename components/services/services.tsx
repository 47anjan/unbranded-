import React from "react";
import { Code, Palette } from "lucide-react";
import Link from "next/link";
import { TextAnimate } from "../magicui/text-animate";
import { FadeIn } from "../ui/fade-in";

const servicesData = [
  {
    icon: Palette,
    title: "Design & UX",
    description:
      "Collaborate with creative minds to design captivating user experiences and interfaces that delight.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Drive the complex challenges and set the engineering team, crafting innovative software solutions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 mb-20  md:mb-28 max-w-screen-2xl mx-auto">
        <div className="grid  gap-5  mb-10 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            <TextAnimate animation="blurInUp" by="character">
              Our Services
            </TextAnimate>
          </h2>
          <p className="text-xl max-w-[640px] text-muted-foreground">
            Explore diverse areas such as Software Engineering, Design & UX, and
            more, to find where your unique talents can shine and drive impact.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-1">
          {servicesData.map((service, index) => (
            <FadeIn key={index}>
              <article
                key={index}
                className="p-9 relative flex flex-col justify-between  min-h-[340px] bg-[#f4f4f4]"
              >
                <div className="flex flex-col gap-8">
                  <span className="text-sm">0{index + 1}</span>
                  <div>
                    <div className="mb-3">
                      <service.icon className="h-6 w-6 " strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl mb-6 font-medium text-gray-900 ">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 max-w-[430px] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <Link
                  className="font-medium hover:underline text-gray-700"
                  href="/"
                >
                  Learn more
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
