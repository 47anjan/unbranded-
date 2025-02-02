import React from "react";
import { Code, Palette, Brain, Heart } from "lucide-react";
import Link from "next/link";

const servicesData = [
  {
    icon: Palette,
    title: "Design & UX",
    description:
      "Collaborate with creative minds to design captivating user experiences and interfaces that delight.",
  },
  {
    icon: Code,
    title: "Software Engineering",
    description:
      "Drive the complex challenges and set the engineering team, crafting innovative software solutions.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Push the boundaries of AI, developing cutting-edge applications that inspire and innovate.",
  },

  {
    icon: Heart,
    title: "Support",
    description:
      "Provide exceptional customer support, ensuring client satisfaction and success.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Explore diverse areas such as Software Engineering, Design & UX, and
            more, to find where your unique talents can shine and drive impact.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-1">
          {servicesData.map((service, index) => (
            <article
              key={index}
              className="p-9 flex flex-col justify-between  min-h-[340px] bg-[#f4f4f4]"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
