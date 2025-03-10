import React from "react";
import { Smile, Ruler, Heart, Headset } from "lucide-react";
import { BlurFade } from "../magicui/blur-fade";
import { TextAnimate } from "../magicui/text-animate";

const servicesData = [
  {
    icon: Smile,
    title: "Better User Experience",
    description:
      "We focus on creating intuitive and seamless user experiences that keep your audience engaged and satisfied. Backed by in-depth industry research, to ensure our designs and solutions align user expectations.",
  },
  {
    icon: Ruler,
    title: "Pixel Perfect Design",
    description:
      "Our designs are meticulously crafted to ensure every pixel is perfect. With a user-first approach, we prioritize accessibility, creating designs that are not only beautiful but also functional and inclusive",
  },
  {
    icon: Heart,
    title: "Better Quality",
    description:
      "We prioritize quality in every aspect of our work. From development to deployment, we deliver production-grade applications that meet the highest standards.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "Our team provides exceptional support, ensuring your needs are met promptly and effectively, including quality revisions, to ensure your needs are met promptly and effectively.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16  max-w-screen-2xl mx-auto mb-20  md:mb-28">
        <div className="flex flex-col items-center justify-center space-y-3 mb-10 sm:mb-16">
          <h1 className="text-4xl mb-4 sm:text-5xl font-bold text-center text-gray-900">
            <TextAnimate animation="blurInUp" by="character">
              Why Choose Us
            </TextAnimate>
          </h1>
          <p className="text-center max-w-[640px]  text-lg text-muted-foreground">
            We are committed to delivering exceptional user experiences,
            pixel-perfect designs, top-notch quality, and dedicated support to
            help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5">
          {servicesData.map((service, index) => (
            <BlurFade key={index} delay={0.3 + index * 0.05} inView>
              <article
                key={index}
                className="p-4 hover:bg-[#f4f4f4] transition-colors duration-300 border sm:p-8 flex rounded-2xl flex-col justify-between   "
              >
                <div className="flex flex-col gap-8">
                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <service.icon
                        className="h-6 w-6 text-green-600 "
                        strokeWidth={2}
                      />
                      <h3 className="text-2xl text-nowrap font-semibold text-gray-900 ">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 max-w-[430px] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
