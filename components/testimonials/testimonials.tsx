"use client";

import { Zap, Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import { Button } from "../ui/button";

const testimonials = [
  {
    quote:
      "Joining the Innovators Community has completely transformed my vision for the better.",
    description:
      "I have been able to exchange ideas, learn from others, and participate in unique events and discussions. The community has been fantastic for networking with industry peers.",
    name: "Emily Johnson",
    position: "CEO at @company",
    image: "https://library.shadcnblocks.com/images/block/avatar-1.webp",
  },
  {
    quote:
      "This platform has given me the tools to scale my business effortlessly!",
    description:
      "The support and guidance from the community have been invaluable. I have learned new strategies and connected with industry experts.",
    name: "Michael Smith",
    position: "Founder at StartupX",
    image: "https://library.shadcnblocks.com/images/block/avatar-2.webp",
  },
  {
    quote:
      "A must-have for anyone looking to enhance their professional network.",
    description:
      "I've had the opportunity to collaborate on innovative projects and gain insights from brilliant minds in my field.",
    name: "Sarah Thompson",
    position: "CTO at TechCorp",
    image: "https://library.shadcnblocks.com/images/block/avatar-3.webp",
  },
];

const Testimonials = () => {
  return (
    <div className="px-4 sm:px-6 py-16 md:py-24 lg:px-8 xl:px-16 max-w-2xl lg:max-w-none mx-auto">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-1 text-sm font-semibold">
          <Zap className="h-6 w-auto fill-gray-600 text-gray-600" />
          Rated 5 stars by 120+ clients
        </div>
        <h2 className="text-center text-3xl font-semibold lg:text-4xl">
          Meet our happy clients
        </h2>
        <p className="text-center text-muted-foreground lg:text-lg">
          Join a global network of thought leaders, product developers,
        </p>
      </div>

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="max-w-screen-xl mx-auto "
      >
        <CarouselContent>
          {testimonials.map((data, index) => (
            <CarouselItem key={index}>
              <div className=" mt-20 w-full max-w-screen-lg mx-auto  rounded-2xl   bg-muted p-6 md:p-20">
                <div className="mb-6 flex gap-1">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <Star
                        key={index}
                        className="size-5 fill-amber-500 text-amber-500"
                      />
                    ))}
                </div>

                <q className="text-2xl relative font-semibold md:text-4xl before:content-['&quot;'] after:content-['&quot;']">
                  {data.quote}
                </q>

                <p className="mt-6 text-muted-foreground">{data.description}</p>
                <div className="mt-6 flex gap-4">
                  <span className="relative flex shrink-0 overflow-hidden size-14 rounded-full ring-1 ring-input">
                    <img
                      className="aspect-square h-full w-full"
                      alt={data.name}
                      src={data.image}
                    />
                  </span>
                  <div>
                    <p className="font-medium">{data.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {data.position}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute hidden sm:flex top-1/2 left-4 -translate-y-1/2 z-10">
          <Button variant="ghost" size="icon">
            <ChevronLeftIcon className="w-6 h-6" />
            <span className="sr-only">Previous</span>
          </Button>
        </CarouselPrevious>
        <CarouselNext className="absolute hidden sm:flex top-1/2 right-4 -translate-y-1/2 z-10">
          <Button variant="ghost" size="icon">
            <ChevronRightIcon className="w-6 h-6" />
            <span className="sr-only">Next</span>
          </Button>
        </CarouselNext>
      </Carousel>
    </div>
  );
};
export default Testimonials;

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
