const Feature1 = () => {
  return (
    <section className="py-32">
      <div className="">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Main Featured Card */}
          <a className="group lg:col-span-2 lg:row-span-2" href="#">
            <div className="h-full items-start rounded-lg border border-transparent bg-accent p-12 text-card-foreground shadow-sm hover:cursor-pointer hover:border-primary lg:p-20">
              <div className="flex flex-col gap-8">
                <div className="inline-flex w-fit items-center rounded-full border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  Studies
                </div>
                <div className="flex flex-col gap-6">
                  <p className="text-base lg:text-lg lg:font-medium">
                    Case Study
                  </p>
                  <h3 className="text-xl font-medium lg:text-5xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <p className="lg:text-lg lg:font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat cupiditate dicta accusamus quae nesciunt deserunt
                    cum deleniti atque consequuntur quis!
                  </p>
                </div>
                <p className="font-medium group-hover:underline">
                  Continue reading
                </p>
              </div>
            </div>
          </a>

          {/* Smaller Cards */}
          {[...Array(5)].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <a className="group" href="#">
      <div className="h-full items-start rounded-lg border border-transparent bg-accent p-12 text-card-foreground shadow-sm hover:cursor-pointer hover:border-primary">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <p>Case Study</p>
            <h3 className="text-xl font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
          </div>
          <p className="font-medium group-hover:underline">Continue reading</p>
        </div>
      </div>
    </a>
  );
};

export default Feature1;
