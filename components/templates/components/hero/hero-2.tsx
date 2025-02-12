import Link from "next/link";

const Hero2 = () => {
  return (
    <section className="py-32">
      <div className="container text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">
            A Collection of Components Built With Shadcn & Tailwind
          </h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            Finely crafted components built with React, Tailwind and Shadcn UI.
            Developers can copy and paste these blocks directly into their
            project.
          </p>
        </div>
        <Link
          href="https://www.shadcnblocks.com"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 mt-10"
        >
          Discover all components
        </Link>
        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
          <span className="mx-4 inline-flex items-center -space-x-4">
            <span className="relative flex shrink-0 overflow-hidden rounded-full size-14 border">
              <img
                className="aspect-square h-full w-full"
                alt="Avatar 1"
                src="https://www.shadcnblocks.com/images/block/avatar-1.webp"
              />
            </span>
            <span className="relative flex shrink-0 overflow-hidden rounded-full size-14 border">
              <img
                className="aspect-square h-full w-full"
                alt="Avatar 2"
                src="https://www.shadcnblocks.com/images/block/avatar-2.webp"
              />
            </span>
            <span className="relative flex shrink-0 overflow-hidden rounded-full size-14 border">
              <img
                className="aspect-square h-full w-full"
                alt="Avatar 3"
                src="https://www.shadcnblocks.com/images/block/avatar-3.webp"
              />
            </span>
            <span className="relative flex shrink-0 overflow-hidden rounded-full size-14 border">
              <img
                className="aspect-square h-full w-full"
                alt="Avatar 4"
                src="https://www.shadcnblocks.com/images/block/avatar-4.webp"
              />
            </span>
            <span className="relative flex shrink-0 overflow-hidden rounded-full size-14 border">
              <img
                className="aspect-square h-full w-full"
                alt="Avatar 5"
                src="https://www.shadcnblocks.com/images/block/avatar-5.webp"
              />
            </span>
          </span>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star size-5 fill-yellow-400 text-yellow-400"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              ))}
            </div>
            <p className="text-left font-medium text-muted-foreground">
              from 200+ reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
