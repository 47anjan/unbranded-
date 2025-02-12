import { Button } from "@/components/ui/button";

const Hero1 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 flex flex-col items-center gap-8 text-center">
            <div className="max-w-screen-md">
              <h1 className="mb-4 text-pretty text-4xl font-semibold lg:text-6xl">
                Build your next project with Blocks
              </h1>
              <p className="text-muted-foreground lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
              </p>
            </div>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
              <Button size={"lg"}>
                Get started now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right ml-2 h-4"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Button>
              <Button size={"lg"} variant={"ghost"}>
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right ml-2 h-4"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-7xl md:grid grid-cols-5">
          <img
            src="/images/placeholder-1.svg"
            alt="placeholder"
            className="col-span-3 h-full max-h-[500px] w-full object-cover"
          />
          <div className="relative isolate col-span-2">
            <img
              src="/images/placeholder-2.svg"
              alt="placeholder"
              className="h-full max-h-[500px] w-full border-t object-cover md:border-l lg:border-t-0"
            />
            <Button
              size={"lg"}
              className="absolute right-5 bottom-5"
              variant={"outline"}
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right ml-2 h-4"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-6">
          <img src="/images/shadcn-ui.svg" alt="logo" className="h-6 sm:h-8" />
          <img src="/images/nextjs.svg" alt="logo" className="h-8 sm:h-10" />
          <img src="/images/tailwind.svg" alt="logo" className="h-4 sm:h-6" />
          <img src="/images/vercel.svg" alt="logo" className="h-8 sm:h-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero1;
