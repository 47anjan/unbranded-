import { Star } from "lucide-react";
import Image from "next/image";
import { BoxReveal } from "../ui/box-reveal";
import MeetingPopupButton from "../book-a-meeting/meeting-popup-button";
import { BlurFade } from "../magicui/blur-fade";

const imageUrls = [
  "https://qpdwualqgmqaxfgoapyc.supabase.co/storage/v1/object/public/appboilerplate/landingpage/shizai.jpeg?t=2024-09-27T11%3A19%3A21.728Z",
  "https://qpdwualqgmqaxfgoapyc.supabase.co/storage/v1/object/public/appboilerplate/landingpage/malte_herberg.jpeg?t=2024-09-27T11%3A19%3A06.850Z",
  "https://qpdwualqgmqaxfgoapyc.supabase.co/storage/v1/object/public/appboilerplate/landingpage/andrei.jpg?t=2024-09-27T11%3A24%3A44.921Z",
  "https://qpdwualqgmqaxfgoapyc.supabase.co/storage/v1/object/public/appboilerplate/landingpage/miguel.png?t=2024-09-27T11%3A28%3A15.468Z",
];

const Hero = () => {
  return (
    <section className="relative bg-[#d7f5dd]  md:min-h-screen grid grid-cols-1 lg:grid-cols-2 mb-20  md:mb-28">
      <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-16  max-w-screen-2xl mx-auto">
        <div className="lg:max-w-xl pt-24 sm:pt-32 lg:pt-0  text-center md:text-start">
          <div className=" sm:flex   flex-col items-center justify- md:justify-start gap-2 align-middle flex-wrap md:flex-row md:items-start mb-2 md:mb-4">
            <div className="z-10 flex justify-center md:justify-start  -space-x-4 rtl:space-x-reverse ">
              {imageUrls.map((url, index) => (
                <Image
                  key={index}
                  className=" size-8 sm:size-12 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                  src={url}
                  width={60}
                  height={60}
                  alt={`Avatar ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex mt-1 flex-row-reverse justify-center  sm:justify-center sm:flex-col   gap-1 items-center md:items-start">
              <div className="font-semibold text-sm">
                <span className="font-bold ">120+</span> Happy Clients
              </div>
              <div className="flex gap-1">
                <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
              </div>
            </div>
          </div>

          <BoxReveal boxColor={""} duration={0.5}>
            <h1 className="text-4xl leading-snug   sm:leading-snug md:text-5xl  font-medium tracking-tight md:leading-snug text-gray-900 mb-4">
              Authentic Design for a Better{" "}
              <span className="font-bold">User Experience</span>
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={""} duration={0.5}>
            <p className="text-lg text-gray-600 mb-10 lg:mb-12 max-w-lg">
            We specialize in crafting high-converting landing pages that captivate audiences, drive growth, and solidify your online presence—so your business doesn’t just exist online, it thrives.
            </p>
          </BoxReveal>
          <div className="flex flex-col items-center md:flex-row gap-4">
            <BoxReveal boxColor={""} duration={0.6}>
              <MeetingPopupButton />
            </BoxReveal>
          </div>
        </div>
      </div>

      <div className="flex justify-start">
        <BlurFade delay={0.5} inView>
          <Image
            className="w-full h-full mt-5 lg:-ml-10"
            width={1000}
            height={1000}
            src={"/check.svg"}
            alt=""
          />
        </BlurFade>
      </div>
    </section>
  );
};
export default Hero;
